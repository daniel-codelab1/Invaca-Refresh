'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia, STRAPI_BASE_URL } from '@/lib/tools'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
  const [slides, setSlides] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    // Fetch data from Strapi Single Type "Home Page"
    getStrapiMedia('/api/home-page?populate=HeroSlides.Image').then((strapiData) => {
      if (strapiData?.data?.HeroSlides) {
        const mappedSlides = strapiData.data.HeroSlides.map((slide: any) => {
          const imageUrl = slide.Image?.url ? `${STRAPI_BASE_URL}${slide.Image.url}` : ''
          
          return {
            id: slide.id,
            image: imageUrl,
            title: slide.Title,
            subtitle: slide.Subtitle,
            ctaText: slide.ctaText,
            ctaLink: slide.ctaLink || '#',
          }
        })
        setSlides(mappedSlides)
      }
    })
  }, [])

  useEffect(() => {
    if (slides.length === 0) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const currentHero = slides[currentIndex]

  if (!currentHero) return <div className="w-full h-[85vh] lg:h-[91vh] min-h-[500px] lg:min-h-[700px] bg-dark animate-pulse" />

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full h-[85vh] lg:h-[91vh] min-h-[500px] lg:min-h-[700px]">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Images with Transitions */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentHero.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentHero.image}
              alt={currentHero.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
            {/* Capa unicolor ligeramente oscura para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 text-center">
          <motion.div
            key={`content-${currentHero.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-display text-white mb-6 leading-tight lg:leading-normal tracking-tight">
              {currentHero.title}
            </h1>
            <p className="text-base md:text-base lg:text-lg xl:text-xl text-white max-w-3xl mx-auto font-body leading-relaxed">
              {currentHero.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={currentHero.ctaLink}
                className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-sm font-body font-semibold text-body hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {currentHero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Info Elements - Bottom Left */}
          <div className="absolute bottom-24 left-0 lg:bottom-12 lg:left-12 w-full lg:w-auto text-white/80 text-body-sm font-body">
            <p>Cotizando desde 1955 en la</p>
            <p>Bolsa de Valores de Caracas</p>
          </div>

          {/* Social Links - Bottom Right */}
          <div className="hidden lg:flex lg:absolute bottom-12 right-12 flex-row gap-6">
            <a
              href="#"
              className="flex items-center text-body-sm text-white hover:text-sky transition-colors font-body"
              aria-label="LinkedIn"
            >
              LinkedIn
              <ArrowRight className="ml-1 h-3 w-3" />
            </a>
            <a
              href="#"
              className="flex items-center text-body-sm text-white hover:text-sky transition-colors font-body"
              aria-label="Instagram"
            >
              Instagram
              <ArrowRight className="ml-1 h-3 w-3" />
            </a>
            <a
              href="#"
              className="flex items-center text-body-sm text-white hover:text-sky transition-colors font-body"
              aria-label="Twitter"
            >
              Twitter
              <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white hidden lg:flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white hidden lg:flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Slide siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-white/40'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
