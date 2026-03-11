'use client'

import { motion, AnimatePresence, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Clock, ArrowUpRight, X, ArrowRight, Users, Globe, Calendar, Instagram } from 'lucide-react'
import { useState, useEffect, useMemo, useRef } from 'react'

export interface MallData {
  id: number
  name: string
  location: string
  address: string
  title: string
  description: string
  heroVideo: string
  image: string
  image2: string
  commercialArea: string
  stats: {
    stores: number
    restaurants: number
    parkingSpots: number
  }
  managers: {
    role: string
    name: string
    email: string
    image?: string
  }[]
  performance: {
    annualVisitors: string
    openingYear: string
    socialFollowers: string
  }
  services: string[]
  brands: {
    name: string
    image?: string
  }[] 
  gallery: string[]
  contact: {
    phone: string
    email: string
    openingHours: string
    website?: string
    instagram?: string
  }
  mapEmbedUrl: string
}

// FadeIn Helper Component
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Counter Component for animating numbers
const Counter = ({ value, duration = 2, className, formatOptions }: { value: number, duration?: number, className?: string, formatOptions?: Intl.NumberFormatOptions }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: "-50px" })
  
  useEffect(() => {
    if (!inView) return

    const node = nodeRef.current
    if (!node) return

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v).toLocaleString('es-VE', formatOptions)
      }
    })

    return () => controls.stop()
  }, [value, duration, inView, formatOptions])

  return <span ref={nodeRef} className={className}>0</span>
}

  // Single Slot for Brand Grid with Fade Transition and Staggered Entrance
const BrandSlot = ({ brand, index }: { brand: { name: string, image?: string }, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,  // Staggered delay based on index
        duration: 0.5 
      }}
      className="aspect-square bg-white flex items-center justify-center p-4 relative overflow-hidden group"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={brand.name} // Use name as key since object reference might change or be cleaner
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-4"
        >
          {brand.image ? (
            <img 
              src={brand.image} 
              alt={brand.name}
              className="w-full h-full p-4 object-contain transition-all duration-300"
            />
          ) : (
            <span className="text-xs text-center text-gray-400 font-medium">{brand.name}</span>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

// Optimized Animated Brand Grid (3x3)
function AnimatedBrandGrid({ brands }: { brands: { name: string, image?: string }[] }) {
  // Use useMemo to stabilize the pool
  const uniqueBrands = useMemo(() => {
    // Ensure uniqueness by name
    const seen = new Set()
    return brands.filter(b => {
      const duplicate = seen.has(b.name)
      seen.add(b.name)
      return !duplicate
    })
  }, [brands])

  // Initialize grid
  // If we have >= 9 unique brands, fill with unique.
  // If < 9, fill with unique + repeat to fill 9 slots.
  const [gridItems, setGridItems] = useState(() => {
    if (uniqueBrands.length >= 9) {
      return uniqueBrands.slice(0, 9)
    } else {
      // Not enough unique brands to fill 3x3 without repetition
      const filled = [...uniqueBrands]
      while (filled.length < 9) {
        filled.push(uniqueBrands[filled.length % uniqueBrands.length])
      }
      return filled
    }
  })

  useEffect(() => {
    // If we have fewer than 10 brands total, we can technically animate (swap 1), 
    // but if we want to change 3 at once without duplicates on screen, we need 9 + 3 = 12 unique brands.
    // If not enough brands, we'll try to swap what we can or fall back to duplicates.
    
    const interval = setInterval(() => {
      setGridItems(currentItems => {
        const newItems = [...currentItems]
        
        // Determine how many slots to change (aim for 3, but limit if not enough candidates)
        const currentBrandNames = new Set(newItems.map(i => i.name))
        const availableOffScreen = uniqueBrands.filter(b => !currentBrandNames.has(b.name))
        
        // If we have strict uniqueness (>=9 brands), we only swap if we have off-screen candidates
        // If we allowed duplicates (<9 brands), we can just pick from pool purely randomly
        
        if (uniqueBrands.length >= 9) {
            // Strict Mode: No duplicates on screen
            const countToSwap = Math.min(3, availableOffScreen.length)
            if (countToSwap === 0) return currentItems // No new brands to show

            // Pick random slots
            const slots = new Set<number>()
            while (slots.size < countToSwap) {
               slots.add(Math.floor(Math.random() * 9))
            }

            // Pick random replacements
            const replacements = [...availableOffScreen].sort(() => 0.5 - Math.random()).slice(0, countToSwap)
            
            Array.from(slots).forEach((slotIndex, i) => {
               newItems[slotIndex] = replacements[i]
            })
        } else {
            // Loose Mode (<9 brands): Just randomize 3 slots with any brand from pool (duplicates inevitable)
            const slots = new Set<number>()
            while (slots.size < 3) {
               slots.add(Math.floor(Math.random() * 9))
            }
            
            slots.forEach(slotIndex => {
               newItems[slotIndex] = uniqueBrands[Math.floor(Math.random() * uniqueBrands.length)]
            })
        }

        return newItems
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [uniqueBrands])

  return (
    <div className="grid grid-cols-3 gap-4">
      {gridItems.map((brand, idx) => (
        // Use index as key to ensure stable slots for layout, but rely on BrandSlot's internal key for content transition
        <BrandSlot key={idx} index={idx} brand={brand} />
      ))}
    </div>
  )
}

export function MallDetailView({ mall }: { mall: MallData }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      
      {/* 1. Hero Section (Video) */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {/* Same Hero Implementation */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
        >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={mall.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-gray-900/30" />
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col justify-end">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             className="absolute top-24 left-16 container mx-auto px-4 sm:px-6 lg:px-8"
           >
              <Link
              href="/centros-comerciales" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors font-body text-sm uppercase tracking-wider group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Centros Comerciales
            </Link>
           </motion.div>

           <div className="mb-12 container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-4 tracking-tight"
              >
                {mall.name}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center text-white/90 font-body text-lg"
              >
                <MapPin className="h-5 w-5 mr-2 text-white" />
                {mall.location}
              </motion.div>
           </div>
          <div className="relative z-10 ml-auto mr-0 w-full pl-24">
            <FadeIn className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream-200 bg-white shadow-xl rounded-sm -translate-y-12 md:-translate-y-24 overflow-hidden relative">
                <div className="py-12 px-8 text-center bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-widest font-semibold opacity-80 mb-2">Área Comercial</p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold">
                    <Counter value={parseInt(mall.commercialArea.replace(/\D/g, ''))} /> m²
                  </p>
                </div>
                <div className="py-12 px-8 text-center flex flex-col justify-center hover:bg-neutral-50 transition-colors">
                  <p className="text-slate-500 uppercase tracking-widest font-semibold text-xs font-body mb-2">Locales Comerciales</p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold text-dark">
                    <Counter value={mall.stats.stores} />
                  </p>
                </div>
                <div className="py-12 px-8 text-center flex flex-col justify-center hover:bg-neutral-50 transition-colors">
                  <p className="text-slate-500 uppercase tracking-widest font-semibold text-xs font-body mb-2">Gastronomía</p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold text-dark">
                    <Counter value={mall.stats.restaurants} />
                  </p>
                </div>
                <div className="py-12 px-8 text-center flex flex-col justify-center hover:bg-neutral-50 transition-colors">
                  <p className="text-slate-500 uppercase tracking-widest font-semibold text-xs font-body mb-2">Estacionamiento</p>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold text-dark">
                    <Counter value={mall.stats.parkingSpots} />
                  </p>
                </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Primary Stats Section */}
      <section className="bg-white py-12 md:py-0 border-b border-cream-200 relative z-20 -mt-0">
        
      </section>

      {/* 3. Description & Managers Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Description */}
            <div className="lg:col-span-7">
               <FadeIn>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-dark mb-8 leading-tight">
                    {mall.title}
                  </h2>
                  <p className="text-body-sm lg:text-body text-slate-500 font-body leading-relaxed text-justify mb-12">
                    {mall.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-center">
                        <div className="bg-white w-16 h-16 flex items-center justify-center p-3 rounded-xs mr-4 text-dark shadow-sm">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-dark mb-1">Horarios</h4>
                          <p className="text-slate-500 font-body text-sm">{mall.contact.openingHours}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white w-16 h-16 flex items-center justify-center p-3 rounded-xs mr-4 text-dark shadow-sm">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-dark mb-1">Ubicación</h4>
                          <p className="text-slate-500 font-body text-sm">{mall.address}</p>
                        </div>
                      </div>
                  </div>

                  <div className="mt-16 h-72 w-full rounded-sm overflow-hidden">
                     <iframe 
                       src={mall.mapEmbedUrl} 
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }} 
                       allowFullScreen 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                     />
                  </div>
               </FadeIn>
            </div>

            {/* Managers Cards */}
            <div className="lg:col-span-5 space-y-6">
                <FadeIn delay={0.2}>
                    <h3 className="text-2xl lg:text-3xl font-display font-medium text-dark mb-6">Equipo Directivo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mall.managers.map((manager, index) => (
                      <div key={index} className="bg-white min-h-64 p-6 rounded-xs border-b-2 border-dark flex flex-col items-center justify-center hover:border-accent transition-colors mb-4">
                          <div className="relative h-16 w-16 flex-shrink-0 mb-6 rounded-full overflow-hidden bg-gray-200">
                            {manager.image ? (
                              <img src={manager.image} alt={manager.name} className="object-cover w-full h-full" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <Users className="h-8 w-8" />
                              </div>
                            )}
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-accent font-bold uppercase tracking-wider mb-1">{manager.role}</p>
                            <h4 className="text-lg font-display font-medium text-dark">{manager.name}</h4>
                            <a href={`mailto:${manager.email}`} className="text-sm text-slate-500 hover:text-dark transition-colors font-body mt-1 block">
                              {manager.email}
                            </a>
                          </div>
                      </div>
                    ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-cream-200">
                        <div className="flex flex-col justify-center items-start space-y-5">
                            <a href={`tel:${mall.contact.phone}`} className="flex items-center text-dark hover:text-accent transition-colors font-medium">
                                <Phone className="h-5 w-5 mr-3" />
                                {mall.contact.phone}
                            </a>
                            <a href={`mailto:${mall.contact.email}`} className="flex items-center text-dark hover:text-accent transition-colors font-medium">
                                <Mail className="h-5 w-5 mr-3" />
                                {mall.contact.email}
                            </a>
                            {mall.contact.website && (
                              <a href={mall.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-dark hover:text-accent transition-colors font-medium">
                                <Globe className="h-5 w-5 mr-3" />
                                Website
                              </a>
                            )}
                            {mall.contact.instagram && (
                              <a href={mall.contact.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-dark hover:text-accent transition-colors font-medium">
                                <Instagram className="h-5 w-5 mr-3" />
                                Instagram
                              </a>
                            )}
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: 4. Photo Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FadeIn className="w-full h-full relative z-10">
            <div className="absolute inset-0">
               {/* Using mall.image as the large photo section */}
               <img 
                 src={mall.image2} 
                 alt={mall.name} 
                 className="w-full h-full object-cover rounded-xs"
               />
               <div className="absolute inset-0 bg-dark/20" />
            </div>
        </FadeIn>
      </section>

      {/* 5. Performance Stats (moved down) */}
      <section className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center pt-80 pb-20 text-white relative border-t border-cream-200 overflow-hidden -mt-60">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="py-4">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-body font-bold mb-3">{mall.performance.annualVisitors}</h3>
                  <p className="text-white/50 font-body uppercase tracking-wider text-sm">Visitas Anuales</p>
               </div>
               <div className="py-4">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-body font-bold mb-3">{mall.performance.socialFollowers}</h3>
                  <p className="text-white/50 font-body uppercase tracking-wider text-sm">Seguidores en Redes</p>
               </div>
               <div className="py-4">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-body font-bold mb-3">
                    <Counter value={parseInt(mall.performance.openingYear)} formatOptions={{ useGrouping: false }} />
                  </h3>
                  <p className="text-white/50 font-body uppercase tracking-wider text-sm">Año de Apertura</p>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* NEW: 6. Main Brands Section */}
      <section className="py-20 lg:py-28 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               {/* Left Column: Text */}
               <FadeIn>
                  <h2 className="text-3xl md:text-5xl font-display font-medium w-full lg:w-9/12 text-dark mb-6">
                    Las mejores marcas en un solo lugar
                  </h2>
                  <p className="text-body-sm lg:text-body text-slate-500 font-body w-full lg:w-10/12 leading-relaxed mb-12">
                    Disfruta de una selección curada de marcas nacionales e internacionales. Moda, tecnología, hogar y mucho más, todo pensado para brindarte la mejor experiencia de compra.
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center px-8 h-14 bg-dark text-white font-body font-semibold text-body tracking-wide hover:bg-accent transition-colors duration-300"
                  >
                    Ver todas las marcas
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
               </FadeIn>

               {/* Right Column: Animated Grid */}
               <FadeIn delay={0.2}>
                  <AnimatedBrandGrid brands={mall.brands} />
               </FadeIn>

            </div>
         </div>
      </section>

      {/* TODO: Restore and redesign Experience Section once correct info is available.
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-dark mb-4">Experiencia Premium</h2>
              <p className="text-slate-500 font-body-sm lg:text-body max-w-2xl mx-auto">
                Ofrecemos servicios diseñados para maximizar el confort de nuestros visitantes.
              </p>
           </FadeIn>
           
           <FadeIn className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20" delay={0.2}>
              {mall.services
                .filter(s => s !== 'Sala de Lactancia')
                .map((service, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-sm text-center shadow-sm hover:shadow-md transition-all group border border-cream-200">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-dark group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                       <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold font-body text-dark">{service}</span>
                 </div>
              ))}
           </FadeIn>
        </div>
      </section>
      */}

      {/* 8. Gallery Section (Lightbox) */}
      <section className="pt-20 pb-28">
         <div className="container mx-auto px-4 sm:px-6">
            {/* <FadeIn className="flex items-end justify-between mb-12">
               <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-dark">Espacios y Ambiente</h2>
               </div>
               <div className="hidden md:block">
                  <span className="text-sm text-slate-500 font-body">{mall.gallery.length} Fotos</span>
               </div>
            </FadeIn> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
               {mall.gallery.map((img, idx) => (
                  <FadeIn 
                    key={idx} 
                    delay={idx * 0.1}
                    className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                      idx === 0 ? 'md:col-span-2 md:row-span-2 h-[300px] md:h-full' : 'h-[240px] md:h-full'
                    }`}
                  >
                     <div onClick={() => setSelectedImage(img)} className="w-full h-full relative">
                       <img 
                          src={img} 
                          alt={`${mall.name} gallery ${idx + 1}`} 
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 rounded-full">
                          <ArrowUpRight className="h-4 w-4 text-dark" />
                       </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-10 w-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl h-auto max-h-[90vh] aspect-video rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
               <img 
                 src={selectedImage} 
                 alt="Gallery Fullscreen" 
                 className="object-contain w-full h-full" 
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
