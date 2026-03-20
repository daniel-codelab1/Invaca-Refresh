import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, User, Calendar, ArrowRight } from 'lucide-react'
import { getNewsBySlug, news } from '@/lib/data/news'
import { ReadingProgress } from '@/components/noticias/ReadingProgress'
import { ShareToolbar } from '@/components/noticias/ShareToolbar'

// Required for Next.js to statically generate these routes at build time
export function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const decodedSlug = decodeURIComponent(resolvedParams.slug)
  const article = getNewsBySlug(decodedSlug)
  
  if (!article) {
    return {
      title: 'Noticia no encontrada | INVACA',
    }
  }

  return {
    title: `${article.title} | INVACA`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    }
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const decodedSlug = decodeURIComponent(resolvedParams.slug)
  const article = getNewsBySlug(decodedSlug)

  if (!article) {
    notFound()
  }

  const otherNews = news.filter(n => n.id !== article.id);
  const sidebarNews = otherNews.slice(0, 2);
  const bottomNews = otherNews.slice(2, 6);

  // Approximate reading time
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200) || 1;

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white font-body pb-12">
      {/* 1. Header Section: Two Columns */}
      <section className="">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            {/* Left: Main Image */}
            <div className="w-full lg:w-6/12">
              <div className="relative aspect-[4/3] lg:aspect-[2/2] w-full overflow-hidden bg-neutral-100 h-full min-h-[400px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Intro text */}
            <div className="w-full lg:w-6/12 flex flex-col justify-center py-6 pr-4 md:pr-20 pl-4 md:pl-0">
              <Link
                href="/noticias"
                className="inline-flex items-center text-slate hover:text-dark transition-colors mb-12 md:mb-24 font-body font-medium tracking-wide text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Noticias
              </Link>
              <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 block">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark mb-12 leading-[1.1] tracking-tight">
                {article.title}
              </h1>
              
              <p className="text-slate text-xs font-bold uppercase tracking-widest mb-12">
                {readingTime} min read
              </p>
              
              <div className="flex items-center gap-4 mt-auto lg:mt-12">
                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-neutral-200 shrink-0">
                  <User className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate" />
                </div>
                <div className="text-sm font-body text-slate flex flex-col justify-center">
                  <span className="font-semibold text-dark mb-1">{article.author}</span>
                  <span className="font-semibold text-slate-500 text-xs">{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Article Body Section */}
      <section className="relative border-t border-neutral-100">
        <ReadingProgress className="sticky top-[80px] lg:top-[80px]">
          <div className="py-12 md:py-20 mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
            
            {/* Left Column: Share buttons */}
            <aside className="lg:w-3/12 hidden lg:flex justify-start pr-4">
              <div className="sticky top-32 h-fit">
                <ShareToolbar title={article.title} />
              </div>
            </aside>

            {/* Center Column: Article Content */}
            <article className="lg:w-6/12 w-full">
              {/* Mobile Share */}
              <div className="flex lg:hidden mb-12">
                <ShareToolbar title={article.title} />
              </div>

              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-xl md:text-2xl font-body font-light text-dark mb-12 leading-relaxed bg-cream-50/50 py-4">
                  {article.excerpt}
                </p>
              )}

              <div
                className="prose prose-lg md:prose-xl max-w-none prose-p:text-slate prose-p:leading-[1.9] prose-p:font-body prose-headings:font-display prose-headings:font-medium prose-headings:text-dark prose-a:text-accent hover:prose-a:text-accent-600 prose-img:rounded-sm"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Right Column: Related News Sidebar */}
            <aside className="lg:w-3/12 hidden lg:block pl-4 lg:pl-12 border-l border-neutral-100">
              <div className="sticky top-32">
                <h3 className="text-xs font-body font-bold text-dark mb-10 uppercase tracking-widest">
                  Noticias Recientes
                </h3>
                <div className="flex flex-col gap-10">
                  {sidebarNews.map((related) => (
                    <Link href={`/noticias/${related.slug}`} key={related.id} className="group block">
                      <h4 className="text-2xl font-display font-medium text-dark group-hover:text-accent transition-colors leading-snug mb-4">
                        {related.title}
                      </h4>
                      <p className="text-xs text-slate font-body uppercase tracking-wider font-semibold">
                        {related.author}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
        </ReadingProgress>
      </section>

      {/* 3. Bottom Section: More News Grid */}
      {bottomNews.length > 0 && (
        <section className="py-24 bg-cream-50 mt-16 border-t border-neutral-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-24">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-dark mb-12">
              Más Noticias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {bottomNews.map((item) => (
                <div 
                  key={item.id} 
                  className="group h-full flex flex-col border-transparent transition-all duration-300"
                >
                  <Link
                    href={`/noticias/${item.slug}`}
                    className="relative block overflow-hidden aspect-[1/1] [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-300 z-10" />
                    
                    {/* Date Badge overlay on image */}
                    <div className="absolute top-4 left-4 z-20 bg-white/40 backdrop-blur-sm px-3 py-1">
                      <span className="text-xs font-body font-bold tracking-wider text-white uppercase flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col w-11/12 mt-[-60px] z-20 flex-grow bg-white border border-neutral-900 border-b-4">
                    <span className="text-accent text-xs font-bold uppercase inline-block tracking-widest mb-3 px-6 pt-6">
                      {item.category}
                    </span>
                    
                    <Link href={`/noticias/${item.slug}`} className="block mb-6 px-6 flex-grow">
                      <h3 className="text-xl font-display font-medium text-dark leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate text-sm font-body mt-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </Link>
                    
                    <div className="mt-auto py-4 px-6 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={`/noticias/${item.slug}`}
                        className="inline-flex items-center text-sm font-body font-semibold text-dark hover:text-accent transition-colors group/link"
                      >
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
