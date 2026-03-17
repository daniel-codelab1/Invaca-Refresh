'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface HeroParallaxProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  title: string;
  subtitle: string;
}

export function HeroParallax({ imageSrc, imageAlt, badgeText, title, subtitle }: HeroParallaxProps) {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(heroScrollY, [0, 1], [1, 0])

  return (
    <section ref={heroRef} className="relative h-[65vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden p-4">
      <motion.div 
        className="absolute inset-0 z-0 bg-dark"
        style={{ y: heroY }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover opacity-90 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-dark/70 mix-blend-multiply" />
      </motion.div>

      <motion.div 
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-0 lg:mt-20"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="inline-block border border-accent text-accent px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
            {badgeText}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
