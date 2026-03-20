'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { getStrapiMedia } from '@/lib/tools'

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export default function NosotrosPage() {
  const [introText, setIntroText] = useState("Convertimos trayectoria en gestión: consistencia, cuidado del portafolio y mejora continua en cada activo y proyecto.");
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    getStrapiMedia('/api/history?populate=HistoryBlocks.Image').then((strapiData) => {
      if (strapiData?.data) {
        if (strapiData.data.Statement) {
          setIntroText(strapiData.data.Statement);
        }
        
        if (strapiData.data.HistoryBlocks) {
          const mappedEvents = strapiData.data.HistoryBlocks.map((block: any) => {
            const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
            const imageUrl = block.Image?.url ? `${strapiUrl}${block.Image.url}` : '/images/assets/geometric-bg.jpg';
            
            return {
              year: block.Year || '',
              title: block.Title || '',
              description: block.Description || '',
              image: imageUrl,
            };
          });
          setTimelineEvents(mappedEvents);
        }
      }
    });
  }, []);

  // Parallax Setup for Hero
  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(heroScrollY, [0, 1], [1, 0])

  // Parallax Setup for Outro
  const outroRef = useRef(null)
  const { scrollYProgress: outroScrollY } = useScroll({
    target: outroRef,
    offset: ["start end", "end start"]
  })
  const outroY = useTransform(outroScrollY, [0, 1], ["-20%", "20%"])

  // Timeline Scroll Progress Setup
  const timelineRef = useRef(null)
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  // Split intro text into words for staggered reveal
  const words = introText.split(" ");

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[65vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden p-4">
        {/* Background Image with Overlay & Parallax */}
        <motion.div 
          className="absolute inset-0 z-0 bg-dark"
          style={{ y: heroY }}
        >
          <Image
            src="/images/assets/geometric-bg-3.png"
            alt="Invaca History Background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-90 scale-110" // Scale 110 prevents seeing edges during parallax
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
              Nuestra Historia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
              Nosotros
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Un legado de visión, solidez y compromiso con el futuro del país.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section with Word Reveal */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-justify lg:text-center mt-12">
            <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl lg:text-[3rem] border-2 border-dark p-10 md:p-20 font-display font-medium text-dark before:absolute before:bottom-[-4px] before:right-[40px] before:w-[120px] before:h-[4px] before:bg-white">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 lg:py-32 relative" ref={timelineRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Scroll Progress Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-dark/5 -translate-x-1/2 z-0">
             <motion.div 
               className="w-full bg-accent origin-top"
               style={{ scaleY: timelineProgress, height: '100%' }}
             />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-24 sm:mb-32 md:mb-48 last:mb-0 ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 space-y-6 flex flex-col ${!isEven ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                    <div className={`flex items-center gap-6 mb-2 ${!isEven ? 'flex-row' : 'flex-row lg:flex-row-reverse'}`}>
                      <span className="text-6xl md:text-8xl font-display font-extralight text-dark tracking-tighter">
                        {event.year}
                      </span>
                      {/* Decorative Line connecting to center progress bar */}
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`hidden md:block h-[2px] w-16 bg-accent origin-${!isEven ? 'left' : 'right'}`} 
                      />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-dark leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-body-md text-slate-500 font-body leading-relaxed max-w-md">
                      {event.description}
                    </p>
                  </div>

                  {/* Image with Hover State */}
                  <div className="w-full md:w-1/2 group perspective-1000">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-xs transition-shadow duration-500"
                    >
                      <Image
                        src={event.image || '/images/assets/geometric-bg.jpg'}
                        alt={event.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Subtle Overlay that fades on hover */}
                      <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outro Section with Parallax Image */}
      <section ref={outroRef} className="py-24 md:py-32 lg:py-48 bg-dark text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: outroY }}
        >
          <Image
            src="/images/assets/geom-2.jpg"
            alt="Texture"
            fill
            className="object-cover scale-125"
          />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 tracking-tight">
              Trayectoria y enfoque estratégico
            </h2>
            <p className="text-body-md md:text-body-lg text-cream-100/90 font-body font-light leading-relaxed">
              La evolución de Invaca se expresa en una identidad renovada que refleja su carácter institucional. Su compromiso se sostiene en una gestión disciplinada, estándares de gobierno y un enfoque estratégico orientado a crear valor para accionistas, aliados comerciales y colaboradores
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
