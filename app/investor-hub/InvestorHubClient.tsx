'use client'

import { motion } from 'framer-motion'
import { TickerCard } from '@/components/investors/TickerCard'
import { FinancialDocList } from '@/components/investors/FinancialDocList'
import { AssemblyCallList } from '@/components/investors/AssemblyCallList'
import TradingViewWidget from '@/components/investors/TradingViewWidget'
import TradingViewWidgetB from '@/components/investors/TradingViewWidgetB'
import { Building, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  return (
    <>
      {/* SECTION 1: Market Data (Split-Screen Editorial) */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
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
                  Trayectoria en el mercado de <span className="text-accent italic">valores</span>
                </h2>
                <p className="text-body lg:text-body-lg text-slate font-body font-light mb-8 max-w-lg">
                  Nuestra trayectoria en el mercado de capitales refleja un compromiso sólido con la rendición de cuentas y la visión de largo plazo. Cotizamos en la Bolsa de Valores de Caracas desde 1955, brindando a nuestros accionistas (IVC.A / IVC.B) acceso a información clara para el seguimiento de su inversión.
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
              className="w-full bg-white z-30 lg:w-7/12 space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* <div className="bg-white grid sm:grid-cols-2 gap-6 relative z-10">
                {tickerData.map((ticker: any) => (
                  <motion.div key={ticker.symbol} variants={slideInRight}>
                    <TickerCard {...ticker} />
                  </motion.div>
                ))}
              </div> */}

              {/* Chart Panoramic */}
               <motion.div variants={fadeSlideUp} className="bg-white rounded-xs border border-cream-100 flex flex-col relative z-0">
                  <div className="flex bg-gray-100 p-1 rounded-sm mt-0 mb-2 zelf-start w-fit">
                    <button
                      onClick={() => setActiveTab('A')}
                      className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                        activeTab === 'A' 
                          ? 'bg-white text-dark shadow-sm' 
                          : 'text-slate-500 hover:text-dark'
                      }`}
                    >
                      Clase A
                    </button>
                    <button
                      onClick={() => setActiveTab('B')}
                      className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                        activeTab === 'B' 
                          ? 'bg-white text-dark shadow-sm' 
                          : 'text-slate-500 hover:text-dark'
                      }`}
                    >
                      Clase B
                    </button>
                  </div>

                  <div className="relative h-[500px]">
                    <div className="absolute top-2 md:top-6 left-3 md:left-4 w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-slate-900 p-2 flex items-center justify-center z-30">
                      <Image
                        src="/logos/LogotipoInvacaNegativo.png"
                        alt="INVACA Investment Company"
                        width={160}
                        height={60}
                        className="h-12 md:h-12 w-12 md:w-12 object-contain"
                        priority
                      />
                    </div>
                    <div className="absolute top-4 left-14 md:left-20 px-2 py-0 md:py-1 w-10/12 md:w-5/6 bg-white z-30">
                      <p className='text-body-md md:text-body-lg text-dark font-body font-bold'>
                        Invaca Investment Company S.A.C.A Class {activeTab}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-white z-10 flex items-center justify-center overflow-hidden rounded-sm">
                       {activeTab === 'A' ? <TradingViewWidget /> : <TradingViewWidgetB />}
                    </div>
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
            <p className="text-body md:text-body-lg text-slate font-body font-light">
              Invaca pone a disposición información financiera y reportes institucionales para respaldar la toma de decisiones informada de sus inversionistas y públicos vinculados.
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

          {/* <motion.div 
            className="mt-12 flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <Link href="#" className="inline-flex items-center text-accent hover:text-dark font-body-lg font-medium tracking-wide transition-colors duration-300">
                Ver Archivo Histórico Completo <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </motion.div> */}
        </div>
      </section>

      {/* SECTION 3: Governance & Contact */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative">
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
                  Gobierno Corporativo
                </h2>
                <p className="text-body md:text-body-lg text-slate font-body font-light">
                  Convocatorias, comunicaciones oficiales y documentación de referencia vinculada al gobierno corporativo de Invaca.
                </p>
              </div>
              
              <motion.div variants={fadeSlideUp} className="bg-white rounded-xs border border-neutral-100 overflow-hidden">
                <div className="p-2 md:p-8 border-b border-neutral-100 bg-white">
                   <h3 className="text-2xl font-display font-medium text-dark">Convocatorias de Asambleas</h3>
                </div>
                <div className="p-2 md:p-8">
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
                <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white px-6 md:px-10 py-12 rounded-xs relative overflow-hidden group">
                  
                  <h3 className="text-3xl font-display font-medium mb-4 md:mb-2 relative z-10">Contacto para Inversionistas</h3>
                  <p className="text-cream-100/70 font-body font-light mb-10 relative z-10">Canales de atención para consultas relacionadas con información bursátil y reportes institucionales.</p>
                  
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Building className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white tracking-wide uppercase text-xs mb-1">Dirección de oficinas</p>
                        <p className="text-cream-100/80 font-body text-body-md leading-relaxed">Av. Venezuela, Torre El Samán, Planta Baja, Urb. El Rosal Caracas, Venezuela</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Phone className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white tracking-wide uppercase text-xs mb-1">Teléfonos directos</p>
                        <p className="text-cream-100/80 font-body text-body-md">+58 212 951.30.45</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group/item">
                      <div className="bg-white/10 p-3 rounded-full mr-4 text-white transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white shrink-0">
                        <Mail className="w-4 h-4 md:w-6 md:h-6" />
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
