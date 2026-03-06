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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
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
                className={`group relative flex flex-col ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <Link
                  href={`/noticias/${item.slug}`}
                  className="flex flex-col h-full bg-white rounded-sm shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`relative w-full ${isFeatured ? 'h-80 md:h-[400px]' : 'h-64'} overflow-hidden bg-neutral-100`}>
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Category Badge overlay on image */}
                    <div className="absolute top-6 left-6 z-20">
                       <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-dark text-xs font-display font-semibold uppercase tracking-wider rounded-sm shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          {item.category}
                       </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-grow bg-white relative">
                    {/* Decorative Top Accent Line */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="flex items-center text-slate font-body text-sm font-medium mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-accent" />
                      {item.date}
                    </div>
                    
                    <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-display font-bold text-dark mb-4 group-hover:text-accent transition-colors duration-300 leading-tight`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-slate font-body mb-8 flex-grow ${isFeatured ? 'text-lg line-clamp-3' : 'line-clamp-2'}`}>
                      {item.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between text-dark font-display font-semibold text-sm uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                      <span>Leer Artículo Completo</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
