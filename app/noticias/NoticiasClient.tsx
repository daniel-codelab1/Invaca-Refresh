'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { NewsArticle } from '@/lib/data/news'

interface NoticiasClientProps {
  news: NewsArticle[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function NoticiasClient({ news }: NoticiasClientProps) {
  return (
    <section className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {news.map((item, index) => {
             // Make the first item larger (Featured)
             const isFeatured = index === 0

             return (
              <motion.div 
                key={item.slug} 
                variants={itemVariants}
                className={`group h-full flex flex-col border-transparent transition-all duration-300 ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Link
                  href={`/noticias/${item.slug}`}
                  className={`relative block overflow-hidden ${isFeatured ? 'aspect-[1/1] md:aspect-[2/1] [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)] md:[clip-path:polygon(0%_0%,_93%_0,_100%_15%,_100%_100%,_0%_100%)]' : 'aspect-[1/1] [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]'}`}
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
                      {item.date.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-col w-11/12 mt-[-60px] z-20 flex-grow bg-white border border-neutral-900 border-b-4">
                  <span className="text-accent text-xs font-bold uppercase inline-block tracking-widest mb-3 px-6 pt-6">
                    {item.category}
                  </span>
                  
                  <Link href={`/noticias/${item.slug}`} className="block mb-6 px-6 flex-grow">
                    <h3 className={`${isFeatured ? 'text-xl md:text-2xl lg:text-3xl' : 'text-xl'} font-display font-medium text-dark leading-snug group-hover:text-accent transition-colors`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate text-sm font-body mt-4 ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'}`}>
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
