import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-cream-50 selection:bg-accent selection:text-white font-body pb-32">
      {/* 1. Interactive Top Reading Progress */}
      <ReadingProgress />

      {/* 2. Premium Deep Parallax Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover scale-105" // Subtle scale for parallax prep
            priority
          />
          {/* Deep elegant gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-dark/40" />
        </div>

        <div className="relative z-10 w-full mb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <Link
              href="/noticias"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 font-display font-medium tracking-wide uppercase text-sm border border-white/20 rounded-sm px-4 py-2 hover:bg-white/10 hover:border-white/40"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Noticias Bursátiles
            </Link>
            
            <div className="mb-6 flex gap-3">
              <span className="inline-block px-4 py-1.5 text-xs font-display font-bold uppercase tracking-widest text-dark bg-white rounded-sm shadow-xl">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white mb-8 leading-[1.1] drop-shadow-2xl">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80 font-body text-sm font-medium">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-accent" />
                {article.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Article Content & Share Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
            
            {/* Share Sidebar Strategy */}
            <aside className="lg:w-1/4 hidden lg:block">
              <ShareToolbar title={article.title} />
            </aside>

            <article className="lg:w-3/4">
              {/* Grand Excerpt */}
              <p className="text-2xl md:text-3xl font-display font-light text-dark mb-12 leading-relaxed italic border-l-4 border-accent pl-8">
                {article.excerpt}
              </p>

              {/* Mobile Share (Visible only on small screens) */}
              <div className="block lg:hidden mb-12">
                 <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                    <h4 className="text-sm font-display font-semibold uppercase tracking-widest text-dark mb-4 text-center">Compartir Artículo</h4>
                    <div className="flex justify-center gap-4">
                       <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${'#'}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-50 text-dark hover:bg-[#0A66C2] hover:text-white transition-colors">
                          LN
                       </a>
                       <a href={`https://twitter.com/intent/tweet?text=${article.title}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-50 text-dark hover:bg-black hover:text-white transition-colors">
                          TW
                       </a>
                    </div>
                 </div>
              </div>

              {/* Substack-style Content Typography */}
              <div
                className="prose prose-lg md:prose-xl max-w-none prose-p:text-slate prose-p:leading-[1.8] prose-p:font-body prose-headings:font-display prose-headings:font-medium prose-headings:text-dark prose-a:text-accent hover:prose-a:text-accent-600 prose-img:rounded-sm shadow-xl bg-white p-8 md:p-16 rounded-sm border border-neutral-100 First-Letter-Dropcap"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </section>

      {/* Custom Global CSS to inject dropcap style cleanly without touching tailwind config */}
      <style dangerouslySetInnerHTML={{__html: `
        .First-Letter-Dropcap p:first-of-type::first-letter {
            float: left;
            font-size: 5rem;
            line-height: 0.8;
            padding-right: 0.15em;
            padding-top: 0.05em;
            font-family: var(--font-display);
            font-weight: 600;
            color: var(--tw-prose-headings);
        }
      `}} />
    </div>
  )
}
