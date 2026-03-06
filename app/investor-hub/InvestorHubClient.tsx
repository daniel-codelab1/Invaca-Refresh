'use client'

import { motion } from 'framer-motion'
import { TickerCard } from '@/components/investors/TickerCard'
import { FinancialDocList } from '@/components/investors/FinancialDocList'
import { AssemblyCallList } from '@/components/investors/AssemblyCallList'
import TradingViewWidget from '@/components/investors/TradingViewWidget'
import { Building, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Shared Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function InvestorHubClient({ tickerData, financialDocs, assemblyCalls }: any) {
  return (
    <>
      {/* SECTION 1: Market Data (Split-Screen Editorial) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex relative flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="w-full lg:w-5/12 top-24 md:top-32 sticky self-start">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeSlideUp}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-6 leading-[1.1]">
                  Valor sostenido a través del <span className="text-accent italic">tiempo</span>
                </h2>
                <p className="text-lg text-slate font-body font-light mb-8 max-w-lg">
                  Nuestra presencia consolidada en la Bolsa de Valores de Caracas refleja décadas de gestión estratégica y crecimiento constante. Monitoree el desempeño en tiempo real de nuestras acciones Clase A y B.
                </p>
                
                {/* <div className="bg-white p-8 rounded-sm shadow-xl border border-neutral-100 hover:shadow-2xl transition-shadow duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                  <h4 className="font-display font-semibold text-dark text-xl mb-3">Historial Bursátil</h4>
                  <p className="text-slate font-body mb-6">
                    Acceda al registro completo de cotizaciones, volúmenes transados y análisis de tendencias.
                  </p>
                  <Link href="#" className="inline-flex items-center justify-center bg-dark text-white px-6 py-3 font-display font-medium text-sm tracking-wide uppercase group/btn hover:bg-accent transition-colors duration-300">
                    Explorar Data Histórica
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div> */}
              </motion.div>
            </div>

            {/* Right Ticker & Chart */}
            <motion.div 
              className="w-full lg:w-7/12 space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                {tickerData.map((ticker: any) => (
                  <motion.div key={ticker.symbol} variants={slideInRight}>
                    <TickerCard {...ticker} />
                  </motion.div>
                ))}
              </div>

              {/* Chart Panoramic */}
               <motion.div variants={fadeSlideUp} className="bg-white rounded-xs border border-cream-100 h-[500px] flex flex-col relative z-0">
                  <div className="absolute top-6 left-4 w-14 h-14 rounded-full overflow-hidden bg-slate-900 p-2 flex items-center justify-center z-10">
                    <Image
                      src="/logos/LogotipoInvacaNegativo.png"
                      alt="INVACA Investment Company"
                      width={160}
                      height={60}
                      className="h-12 md:h-12 w-12 md:w-12 object-contain"
                      priority
                    />
                  </div>
                  <div className="absolute top-3 left-20 px-2 py-1 w-5/6 bg-white z-10">
                    <p className='text-body-lg text-dark font-body font-bold'>
                      Invaca Investment Company S.A.C.A Class A
                    </p>
                  </div>
                  <div className="flex-1 bg-white flex items-center justify-center relative overflow-hidden rounded-sm">
                     <TradingViewWidget />
                  </div>
               </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: Financial Results */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
             className="max-w-4xl mb-16"
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeSlideUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark font-display font-medium mb-6">
              Estados Financieros Consolidados
            </h2>
            <p className="text-body-lg text-slate font-body font-light">
              Respaldamos la confianza de nuestros inversionistas con un reporte riguroso y periódico de nuestra rentabilidad y solidez estructural.
            </p>
          </motion.div>

          {/* Interactive Doc Grid (Replacing simple list) */}
          <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
          >
             <FinancialDocList documents={financialDocs} className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" />
          </motion.div>

          <motion.div 
            className="mt-12 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <Link href="#" className="inline-flex items-center text-accent hover:text-dark font-body-lg font-medium tracking-wide transition-colors duration-300">
                Ver Archivo Histórico Completo <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Governance & Contact */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Assembly Calls */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-4">
                  Asambleas de Accionistas
                </h2>
                <p className="text-lg text-slate font-body font-light">
                  Participación activa y democrática en las decisiones fundamentales.
                </p>
              </div>
              
              <motion.div variants={fadeSlideUp} className="bg-white rounded-xs border border-neutral-100 overflow-hidden">
                <div className="p-8 border-b border-neutral-100 bg-white">
                   <h3 className="text-2xl font-display font-medium text-dark">Últimas Convocatorias de Asambleas</h3>
                </div>
                <div className="p-8">
                   <AssemblyCallList calls={assemblyCalls} />
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Investor Contact */}
            <motion.div 
              className="lg:col-span-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeSlideUp}
            >
              <div className="sticky top-24">
                <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white p-10 rounded-xs relative overflow-hidden group">
                  
                  <h3 className="text-3xl font-display font-medium mb-2 relative z-10">Contacto para Inversionistas</h3>
                  <p className="text-cream-100/70 font-body font-light mb-10 relative z-10">Nuestro equipo de Relaciones con Inversionistas está a su entera disposición.</p>
                  
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Building className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white tracking-wide uppercase text-xs mb-1">Oficina Principal</p>
                        <p className="text-cream-100/80 font-body text-body-md leading-relaxed">Av. Francisco de Miranda, Centro Lido, Torre D, Piso 11, Ofic. 114-D. Caracas, Venezuela.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white tracking-wide uppercase text-xs mb-1">Teléfonos directos</p>
                        <p className="text-cream-100/80 font-body text-body-md">+58 212 951.30.45</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white tracking-wide uppercase text-xs mb-1">Correo Electrónico</p>
                        <a href="mailto:inversionistas@invaca.com" className="text-accent hover:text-white font-body text-body-md transition-colors">inversionistas@invaca.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
