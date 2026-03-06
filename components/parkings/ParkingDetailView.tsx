'use client'

import { motion, AnimatePresence, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Clock, ArrowUpRight, X, Car } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export interface ParkingData {
  id: string
  name: string
  location: string
  address: string
  title: string
  description: string
  image: string
  stats: {
    spots: number
    levels: number
    accessPoints: number
  }
  services: string[]
  gallery: string[]
  contact: {
    phone: string
    email: string
    openingHours: string
  }
  mapEmbedUrl: string
}

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

export function ParkingDetailView({ parking }: { parking: ParkingData }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={parking.image}
            alt={parking.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-24 left-16 container mx-auto px-4 sm:px-6 lg:px-8"
            >
               <Link
               href="/estacionamientos" 
               className="inline-flex items-center text-white/80 hover:text-white transition-colors font-body text-sm uppercase tracking-wider group"
             >
               <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
               Estacionamientos
             </Link>
            </motion.div>

           <div className="mb-12 container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-4 tracking-tight drop-shadow-lg"
              >
                {parking.name}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center text-white/90 font-body text-lg"
              >
                <MapPin className="h-5 w-5 mr-2 text-white" />
                {parking.location}
              </motion.div>
           </div>
           
           {/* Stats Overlay */}
           <div className="relative z-10 w-full pl-0 md:pl-24">
             <FadeIn className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cream-200 bg-white shadow-xl rounded-sm -translate-y-12 md:-translate-y-24 overflow-hidden">
                 <div className="py-12 px-8 text-center bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white flex flex-col justify-center">
                   <p className="text-xs uppercase tracking-widest font-semibold opacity-80 mb-2">Puestos</p>
                   <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold">
                     <Counter value={parking.stats.spots} />
                   </p>
                 </div>
                 <div className="py-12 px-8 text-center flex flex-col justify-center hover:bg-neutral-50 transition-colors">
                   <p className="text-slate-500 uppercase tracking-widest font-semibold text-xs font-body mb-2">Niveles</p>
                   <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold text-dark">
                     <Counter value={parking.stats.levels} />
                   </p>
                 </div>
                 <div className="py-12 px-8 text-center flex flex-col justify-center hover:bg-neutral-50 transition-colors">
                   <p className="text-slate-500 uppercase tracking-widest font-semibold text-xs font-body mb-2">Accesos</p>
                   <p className="text-3xl md:text-4xl lg:text-5xl font-body font-bold text-dark">
                     <Counter value={parking.stats.accessPoints} />
                   </p>
                 </div>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* 2. Description & Contact Section */}
      <section className="py-20 lg:py-28 bg-white -mt-12 md:-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Description */}
            <div className="lg:col-span-7">
               <FadeIn>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-dark mb-8 leading-tight">
                    {parking.title}
                  </h2>
                  <p className="text-body-sm lg:text-body text-slate-500 font-body leading-relaxed text-justify mb-12">
                    {parking.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="flex items-center">
                        <div className="bg-white w-16 h-16 flex items-center justify-center p-3 rounded-xs mr-4 text-dark shadow-sm">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-dark mb-1">Horario</h4>
                          <p className="text-slate-500 font-body text-sm">{parking.contact.openingHours}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white w-16 h-16 flex items-center justify-center p-3 rounded-xs mr-4 text-dark shadow-sm">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-dark mb-1">Ubicación</h4>
                          <p className="text-slate-500 font-body text-sm">{parking.address}</p>
                        </div>
                      </div>
                  </div>

                  {/* Services Row */}
                  <div className="flex flex-wrap gap-4 mb-16">
                     {parking.services.map((service, idx) => (
                       <span key={idx} className="inline-flex items-center bg-white px-4 py-2 border border-cream-200 shadow-sm text-sm font-body text-dark rounded-sm">
                         <Car className="w-4 h-4 mr-2 text-accent" />
                         {service}
                       </span>
                     ))}
                  </div>

                  <div className="mt-8 h-[400px] w-full rounded-sm overflow-hidden shadow-lg border border-cream-200">
                     <iframe 
                       src={parking.mapEmbedUrl} 
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

            {/* Contact Box */}
            <div className="lg:col-span-5">
                <FadeIn delay={0.2} className="sticky top-32">
                    <div className="bg-white p-8 lg:p-12 shadow-xl border border-cream-200 rounded-sm">
                       <h3 className="text-2xl lg:text-3xl font-display font-medium text-dark mb-8 text-center border-b border-cream-200 pb-6">Atención al Cliente</h3>
                       
                       <div className="space-y-8 mt-8">
                           <a href={`tel:${parking.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center group">
                               <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full text-dark group-hover:bg-accent group-hover:text-white transition-colors">
                                   <Phone className="h-6 w-6" />
                               </div>
                               <div className="ml-4">
                                   <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-1">Opera y Administra</p>
                                   <p className="text-lg font-body font-medium text-dark group-hover:text-accent transition-colors">{parking.contact.phone}</p>
                               </div>
                           </a>
                           
                           <a href={`mailto:${parking.contact.email}`} className="flex items-center group">
                               <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full text-dark group-hover:bg-accent group-hover:text-white transition-colors">
                                   <Mail className="h-6 w-6" />
                               </div>
                               <div className="ml-4">
                                   <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-1">Correo Electrónico</p>
                                   <p className="text-lg font-body font-medium text-dark group-hover:text-accent transition-colors break-all">{parking.contact.email}</p>
                               </div>
                           </a>
                       </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Photo Gallery */}
      <section className="pt-20 pb-28">
         <div className="container mx-auto px-4 sm:px-6">
            <FadeIn className="mb-12 text-center">
               <h2 className="text-3xl md:text-5xl font-display font-medium text-dark">Instalaciones</h2>
               <p className="text-slate-500 font-body mt-4">Comodidad y seguridad en cada nivel.</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
               {parking.gallery.map((img, idx) => (
                  <FadeIn 
                    key={idx} 
                    delay={idx * 0.1}
                    className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                      idx === 0 ? 'md:col-span-2 md:row-span-2 h-[300px] md:h-full' : 'h-[240px] md:h-full'
                    }`}
                  >
                     <div onClick={() => setSelectedImage(img)} className="w-full h-full relative">
                       <Image 
                          src={img} 
                          alt={`${parking.name} gallery ${idx + 1}`} 
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 rounded-full shadow-lg">
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
              className="relative w-full max-w-7xl h-auto max-h-[90vh] aspect-video rounded-sm overflow-hidden shadow-2xl bg-dark"
              onClick={(e) => e.stopPropagation()}
            >
               <Image 
                 src={selectedImage} 
                 alt="Gallery Fullscreen"
                 fill
                 className="object-contain" 
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
