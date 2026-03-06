'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, Store, Send } from 'lucide-react'

// Data can be passed as props or imported if it's static. For this refactor, we'll keep it self-contained to the client component for the grid logic.
interface Mall {
  id: number
  name: string
  slug: string
  location: string
  image: string
  description: string
  stats: { stores: string, footfall: string }
}

const malls: Mall[] = [
  {
    id: 1,
    name: 'Tolón Fashion Mall',
    slug: 'tolon-fashion-mall',
    location: 'Caracas, Venezuela',
    image: '/images/malls/fachada-tolon-1.jpg',
    description: 'Centro comercial de moda y estilo de vida ubicado en una zona estratégica de Caracas. Referente de lujo y exclusividad corporativa.',
    stats: { stores: '+150 Marcas', footfall: 'Alto Tráfico' }
  },
  {
    id: 2,
    name: 'Paseo El Hatillo',
    slug: 'paseo-el-hatillo',
    location: 'El Hatillo, Caracas, Venezuela',
    image: '/images/malls/4938623117048261886.jpg',
    description: 'Destino turístico y comercial que combina la modernidad arquitectónica con el encanto de El Hatillo. Experiencia familiar y de entretenimiento.',
    stats: { stores: '+120 Marcas', footfall: 'Mix Familiar' }
  },
  {
    id: 3,
    name: 'Llano Mall Ciudad Comercial',
    slug: 'llano-mall-ciudad-comercial',
    location: 'Acarigua, Portuguesa, Venezuela',
    image: '/images/malls/8826667.jpg',
    description: 'El principal y más amplio centro de compras y entretenimiento de los llanos venezolanos. Variedad, confort y crecimiento constante en un solo lugar.',
    stats: { stores: '+200 Locales', footfall: 'Sede Regional' }
  },
]

// Stagger definitions
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function MallsClient() {
  return (
    <>
      {/* 1. DISCOVERY & STORYTELLING NARRATIVE */}
      <section className="py-24 md:py-28 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Editorial Left */}
            <motion.div className="w-full lg:w-1/2" variants={fadeUpVariant}>
              <span className="inline-block text-accent text-xs font-body font-bold uppercase tracking-widest rounded-xs mb-6">
                 Experiencia de Clase Mundial
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-[1.1]">
                Espacios diseñados para el éxito comercial.
              </h2>
              <p className="text-body-lg text-slate-500 font-body font-light leading-relaxed mb-6">
                Invaca Investment Company opera y administra algunos de los destinos de retail más importantes y transitados de Venezuela. No construimos simples centros comerciales; desarrollamos ecosistemas de estilo de vida donde las mejores marcas convergen con experiencias inolvidables.
              </p>
              <p className="text-body-lg text-slate-500 font-body font-light leading-relaxed">
                Nuestros espacios están concebidos bajo los más altos estándares de diseño arquitectónico, seguridad y tecnología, asegurando el máximo confort para nuestros visitantes y la mayor rentabilidad para nuestros aliados comerciales.
              </p>
            </motion.div>

            {/* Visual Right (Abstract Gallery/Metrics) */}
            <motion.div className="w-full pl-0 lg:pl-12 lg:w-1/2 grid grid-cols-2 gap-4" variants={fadeUpVariant}>
               <div className="space-y-4 flex flex-col items-end justify-center">
                  <div className="bg-white w-10/12 border border-neutral-100 p-8 rounded-xs flex flex-col items-center justify-center text-center h-48 hover:-translate-y-1 transition-transform duration-300">
                     <span className="text-6xl font-body font-bold text-dark mb-2">3</span>
                     <span className="text-sm font-body font-semibold uppercase tracking-widest text-slate">Centros High End</span>
                  </div>
                  <div className="relative h-96 w-full rounded-xs overflow-hidden">
                     <Image src="/images/malls/fachada-tolon-1.jpg" alt="Interior Mall Vista" fill className="object-cover" />
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="relative h-64 rounded-xs overflow-hidden">
                     <Image src="/images/malls/4938623117048261886.jpg" alt="Paseo el Hatillo Vista" fill className="object-cover" />
                  </div>
                  <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center w-10/12 p-8 rounded-xs shadow-xl border border-neutral-800 flex flex-col items-center justify-center text-center h-48 hover:-translate-y-1 transition-transform duration-300">
                     <span className="text-6xl font-body font-bold text-white mb-2">+40M</span>
                     <span className="text-sm font-body font-semibold uppercase tracking-widest text-cream-200">Visitas Anuales</span>
                  </div>
                  <div className="relative h-48 rounded-xs overflow-hidden">
                     <Image src="/images/malls/ccllanomall/8826667.jpg" alt="Paseo el Hatillo Vista" fill className="object-cover" />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE MALLS GRID (BENTO LUXURY) */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark font-medium mb-6">Nuestro Portafolio</h2>
             <p className="text-body-lg text-slate-500 font-body font-light leading-relaxed mb-6">Explora las joyas de nuestro desarrollo comercial. Cada centro tiene una identidad única diseñada para su ubicación demográfica.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {malls.map((mall) => (
              <motion.div key={mall.id} variants={fadeUpVariant} className="h-full">
                <Link
                  href={`/centros-comerciales/${mall.slug}`}
                  className="rounded-xs overflow-hidden border-b-2 border-dark hover:border-accent transition-all duration-700 group flex flex-col h-full relative"
                >
                  <div className="relative h-[450px] overflow-hidden [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]">
                    <motion.div
                      className="absolute inset-0 bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center z-20"
                      initial={{ y: "0%" }}
                      whileInView={{ y: "100%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, delay: 1 + mall.id * 0.2, ease: [0.7, 0, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.2 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.4, delay: 1 + mall.id * 0.2, ease: [0.7, 0, 0.3, 1] }}
                    >
                      <Image
                        src={mall.image}
                        alt={mall.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 ease-out overflow-hidden"
                      />
                      
                      {/* Deep Gradient Overlay */}
                      <div className="absolute h-80 w-full bottom-0 bg-gradient-to-t from-dark via-dark/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                    </motion.div>

                    {/* Floating Info Data embedded in image */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                      <div className="flex items-center text-white font-body font-bold text-xs uppercase tracking-widest mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        {mall.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow bg-white relative border border-neutral-100 overflow-hidden">
                    <h3 className="text-3xl font-display font-medium mb-4 w-fit text-transparent bg-clip-text bg-gradient-to-r from-dark from-40% via-white/20 via-50% to-dark to-60% bg-[length:300%_100%] bg-right group-hover:bg-left transition-none group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out">
                      {mall.name}
                    </h3>
                    {/* Subtle Glow on active */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <p className="text-slate-500 mb-8 font-body leading-relaxed flex-grow relative z-10 text-body-sm">
                      {mall.description}
                    </p>

                    {/* Quick Stats Reveal */}
                    <div className="flex items-center justify-between border-t border-neutral-800/10 pt-6 mt-auto">
                       <div className="flex gap-6 text-sm font-body font-medium text-neutral-800">
                          <span className="flex flex-col">
                             <span className="text-accent mb-1 group-hover:text-accent transition-colors">{mall.stats.stores}</span>
                          </span>
                          <span className="flex flex-col">
                             <span className="text-accent mb-1 group-hover:text-accent transition-colors">{mall.stats.footfall}</span>
                          </span>
                       </div>
                       
                       <div className="bg-white/5 p-3 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                          <ArrowRight className="h-5 w-5 text-white" />
                       </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. COMMERCIAL PURPOSE (LEASING / B2B MONETIZATION) */}
      <section className="py-18 md:py-24 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[transparent] rounded-sm p-10 md:p-20 relative overflow-hidden">
               {/* Accent Bar */}
               {/* <div className="absolute top-0 left-0 w-1 h-full bg-accent" /> */}
               
               <div className="flex flex-col lg:flex-row gap-12 items-center justify-between relative z-10">
                  <div className="w-full lg:w-3/5">
                     {/* <div className="flex items-center mb-4">
                        <Store className="w-6 h-6 text-accent mr-3" />
                        <span className="text-sm font-display font-bold uppercase tracking-widest text-slate">Oportunidades Comerciales</span>
                     </div> */}
                     <h2 className="text-3xl md:text-5xl font-display font-medium text-dark mb-6 leading-tight">
                        Lleva tu marca a los destinos más exclusivos.
                     </h2>
                     <p className="text-body-sm lg:text-body-md text-slate-500 font-body mb-0">
                        Disponemos de locales comerciales de alto perfil, islas y espacios publicitarios en nuestros malls. Forma parte del portafolio más prestigioso del país y asegura el tráfico ideal para tu negocio.
                     </p>
                  </div>
                  
                  <div className="w-full lg:w-auto flex-shrink-0">
                     <Link 
                        href="/contacto" 
                        className="inline-flex items-center justify-center px-8 py-5 bg-dark text-white font-body font-semibold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300 group"
                     >
                        Solicitar Información B2B
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}
