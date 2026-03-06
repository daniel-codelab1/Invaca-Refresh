'use client'

import { motion, useInView, animate, useScroll, useTransform, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Maximize, ShieldCheck, Car, CreditCard, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// FadeIn Helper Component
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Counter Component for animating numbers properly with framer-motion React bindings
const Counter = ({ value, duration = 2, className, formatOptions, prefix = "", suffix = "" }: { value: number, duration?: number, className?: string, formatOptions?: Intl.NumberFormatOptions, prefix?: string, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: "-50px" })
  
  // Motion value holds the raw numeric value
  const motionVal = useMotionValue(0);
  
  // Transform dynamically converts the raw number into the formatted string natively
  const displayVal = useTransform(motionVal, (latest) => {
    const opts = formatOptions || { maximumFractionDigits: 0 };
    return `${prefix}${latest.toLocaleString('es-VE', opts)}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [value, duration, inView, motionVal]);

  // Using motion.span avoids React DOM collision during re-renders
  return <motion.span ref={nodeRef} className={className}>{displayVal}</motion.span>
}

export default function EstacionamientosPage() {
  const parkings = [
    {
      id: 'tolon-fashion-mall',
      name: 'Estacionamiento Tolón Fashion Mall',
      slug: 'tolon-fashion-mall',
      location: 'Caracas, Venezuela',
      image: '/images/malls/tolon/parking-tolon.jpg',
      description: 'Más de 1.200 puestos distribuidos en niveles seguros y tecnológicos.',
      spaces: '1.200'
    },
    {
      id: 'paseo-el-hatillo',
      name: 'Parking VIP Paseo El Hatillo',
      slug: 'paseo-el-hatillo',
      location: 'El Hatillo, Caracas, Venezuela',
      image: '/images/malls/paseoelhatillo/parking-vip-pehll.jpg',
      description: 'Confort y seguridad para toda la familia en un ambiente exclusivo.',
      spaces: '1.500'
    },
    {
      id: 'llano-mall',
      name: 'Parking Llano Mall',
      slug: 'llano-mall-ciudad-comercial',
      location: 'Acarigua, Portuguesa, Venezuela',
      image: '/images/malls/ccllanomall/parking-llanomall.jpg',
      description: 'Amplia capacidad y fluidez para el principal centro comercial de la región.',
      spaces: '2.650'
    }
  ]

  const features = [
    {
      icon: Maximize,
      title: 'Amplios espacios',
      description: 'Aparcamientos espaciosos para mayor comodidad'
    },
    {
      icon: ShieldCheck,
      title: 'Vigilancia permanente',
      description: 'Sofisticados sistemas de vigilancia para garantizar su seguridad'
    },
    {
      icon: Car,
      title: 'Control de acceso',
      description: 'Barreras automáticas que controlan la entrada y salida vehícular'
    },
    {
      icon: CreditCard,
      title: 'Cajas de pago',
      description: 'Con múltiples opciones de pago y plataformas de última tecnología'
    }
  ]

  // Parallax Setup for Hero
  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(heroScrollY, [0, 1], [1, 0])

  // Carousel Setup
  const extendedParkings = [...parkings, ...parkings, ...parkings];
  const [activeIndex, setActiveIndex] = useState(parkings.length);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  // Drag and Autoplay State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Autoplay Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        scrollToIndex(activeIndex + 1);
      }, 4000); // Auto slide every 4 seconds
    }
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  useEffect(() => {
    // Initial centering to the middle set
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / extendedParkings.length;
      carouselRef.current.scrollTo({
        left: itemWidth * parkings.length,
        behavior: 'auto'
      });
    }
  }, [parkings.length, extendedParkings.length]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / extendedParkings.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragDistance(0);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsAutoPlaying(true);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsAutoPlaying(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    setDragDistance(Math.abs(walk));
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!carouselRef.current || isJumping.current) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.scrollWidth / extendedParkings.length;
    const newIndex = Math.round(scrollPosition / itemWidth);
    
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      
      // Infinite Loop Logic - silently jump to middle array if reaching edges
      if (newIndex <= 0) {
        isJumping.current = true;
        setTimeout(() => {
          if (carouselRef.current) {
            const targetIndex = parkings.length;
            carouselRef.current.scrollTo({ left: itemWidth * targetIndex, behavior: 'auto' });
            setActiveIndex(targetIndex);
            setTimeout(() => { isJumping.current = false; }, 50);
          }
        }, 300); // wait for snap to settle
      } else if (newIndex >= extendedParkings.length - 1) {
        isJumping.current = true;
        setTimeout(() => {
          if (carouselRef.current) {
            const targetIndex = extendedParkings.length - 1 - parkings.length;
            carouselRef.current.scrollTo({ left: itemWidth * targetIndex, behavior: 'auto' });
            setActiveIndex(targetIndex);
            setTimeout(() => { isJumping.current = false; }, 50);
          }
        }, 300); // wait for snap to settle
      }
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden p-4">
        {/* Background Image with Overlay & Parallax */}
        <motion.div 
          className="absolute inset-0 z-0 bg-dark"
          style={{ y: heroY }}
        >
          <Image
            src="/images/assets/geometric-bg-3.png"
            alt="Estacionamientos Invaca Background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-90 scale-110" // Scale 110 prevents seeing edges during parallax
            priority
          />
          <div className="absolute inset-0 bg-dark/70 mix-blend-multiply" />
        </motion.div>

        <motion.div 
          className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="inline-block border border-accent text-accent px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
              Administración de Parkings
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
              Estacionamientos
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Soluciones de movilidad que elevan la experiencia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 1. INTERACTIVE PARKINGS GRID (BENTO LUXURY) - MOVED TO TOP */}
      <section className="py-24 md:py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="mx-auto px-0 sm:px-0 lg:px-0">
          
          <div className="mb-8 md:mb-12 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block">Administración</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark font-medium mb-8">Estacionamientos Operados</h2>
             <p className="text-body-lg text-slate-500 max-w-2xl mx-auto font-body font-light leading-relaxed mb-6">Explora nuestra red de aparcamientos operados con los más altos estándares de calidad, seguridad y tecnología inteligente.</p>
          </div>

          <div className="relative w-full group py-8">
            {/* Left Arrow Floating */}
            <button 
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-dark/10 hidden md:flex items-center justify-center text-dark hover:bg-dark hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous parking"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Arrow Floating */}
            <button 
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-xl border border-dark/10 hidden md:flex items-center justify-center text-dark hover:bg-dark hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next parking"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsAutoPlaying(false)}
              onTouchEnd={() => setIsAutoPlaying(true)}
              className={`flex overflow-x-auto hide-scrollbar gap-3 md:gap-4 px-4 md:px-[5vw] lg:px-[10vw] items-stretch h-[500px] md:h-[600px] ${isDragging ? "snap-none cursor-grabbing" : "snap-x snap-mandatory cursor-grab"}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {extendedParkings.map((parking, index) => (
                <div 
                  key={`${parking.id}-${index}`} 
                  className="w-[85vw] md:w-[75vw] lg:w-[70vw] flex-shrink-0 snap-center h-full relative group/card overflow-hidden rounded-xs border border-dark/5"
                >
                  <Link 
                    href={`/centros-comerciales/${parking.slug}`} 
                    className="block h-full w-full"
                    onClick={(e) => { if (dragDistance > 5) e.preventDefault(); }}
                    draggable={false}
                  >
                    <Image
                      src={parking.image}
                      alt={parking.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover/card:scale-105 select-none"
                      draggable={false}
                    />
                    
                    {/* Dark gradient overlay similar to reference text area */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
                    
                    {/* Content structure mimicking reference text overlaid */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end h-full">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-white/80 font-body font-bold text-[10px] md:text-xs uppercase tracking-widest">
                          {parking.location}
                        </span>
                        <span className="flex items-center text-white bg-white/20 px-3 py-1 rounded-xs font-body font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-md">
                          <Car className="w-3.5 h-3.5 mr-1.5" />
                          {parking.spaces} Puestos
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium text-white mb-6 !leading-[1.15em] max-w-lg">
                        {parking.name}
                      </h3>
                      
                      <div className="flex items-center mt-4">
                        <div className="bg-dark text-white border-l-4 border-accent px-6 py-4 rounded-xs font-body font-medium uppercase text-sm tracking-wider flex items-center hover:bg-accent hover:text-white transition-colors group-hover/card:shadow-lg">
                          Visitar Centro Comercial
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DISCOVERY & STORYTELLING NARRATIVE (Previously Hero) */}
      <section className="pb-20 md:pb-24 bg-white overflow-hidden relative">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Editorial Left */}
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block text-accent text-xs font-body font-bold uppercase tracking-widest rounded-xs mb-6">
                 Ingeniería en Movilidad
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-[1.1]">
                Comodidad y seguridad integral.
              </h2>
              <p className="text-body-lg text-slate-500 font-body font-light leading-relaxed mb-6">
                En INVACA, desarrollamos y administramos soluciones de movilidad automotriz que elevan la experiencia de nuestros visitantes desde el momento en que llegan. Nuestra red de estacionamientos está diseñada para maximizar el confort, optimizando tiempos e integrando lo último en tecnología de gestión inteligente.
              </p>
            </motion.div>

            {/* Visual Right (Metrics) */}
            <motion.div className="w-full pl-0 lg:pl-12 lg:w-1/2 grid grid-cols-2 gap-4" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
               <div className="space-y-4 flex flex-col items-end justify-center">
                  <div className="bg-white backdrop-blur-md w-11/12 p-8 rounded-xs flex flex-col items-center justify-center text-center h-48 hover:-translate-y-1 transition-transform duration-300 border border-white/10">
                     <span className="text-6xl font-body font-bold text-dark mb-2"><Counter value={3} /></span>
                     <span className="text-xs font-body font-semibold uppercase tracking-widest text-dark">Parkings Operados</span>
                  </div>
                  <div className="bg-accent w-full p-8 rounded-xs border border-accent flex flex-col items-center justify-center text-center h-48 hover:-translate-y-1 transition-transform duration-300">
                     <span className="text-5xl font-body font-bold text-white mb-2"><Counter value={5350} prefix="+" /></span>
                     <span className="text-xs font-body font-semibold uppercase tracking-widest text-white/90">Puestos Totales</span>
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center w-full p-8 rounded-xs border border-neutral-800 flex flex-col items-center justify-center text-center h-56 hover:-translate-y-1 transition-transform duration-300">
                     <span className="text-6xl font-body font-bold text-white mb-2"><Counter value={2.5} suffix="M" formatOptions={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }} /></span>
                     <span className="text-xs font-body font-semibold uppercase tracking-widest text-cream-200">Ocupación Anual</span>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Intro Note (moved down below Features) */}
      <section className="pb-24 lg:pb-36 pt-8 lg:pt-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative inline-block text-2xl md:text-3xl lg:text-5xl border-2 border-dark-800 p-10 md:p-20 font-display font-medium text-dark !leading-[3rem] before:absolute before:bottom-[-4px] before:right-[40px] before:w-[120px] before:h-[4px] before:bg-white"
            >
              Los estacionamientos operados por Invaca mantienen la calidad, modernidad, seguridad y funcionalidad que nos caracteriza con excelente atención y servicio.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* 5. Outro / Call To Action */}
      {/* <section className="py-32 bg-dark text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/assets/geom-2.jpg"
            alt="Texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
              Especialistas con más de 100 años en el negocio inmobiliario y financiero
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                href="/nosotros" 
                className="inline-flex items-center px-8 h-14 bg-white text-dark font-body font-bold uppercase tracking-wider text-sm hover:bg-accent hover:text-white transition-colors duration-300"
              >
                Conoce sobre INVACA
              </Link>
              <Link 
                href="/relacion-con-inversionistas" 
                className="inline-flex items-center px-8 h-14 bg-transparent border-2 border-white/30 text-white font-body font-bold uppercase tracking-wider text-sm hover:border-white transition-colors duration-300"
              >
                Relación con Inversionistas
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

    </div>
  )
}
