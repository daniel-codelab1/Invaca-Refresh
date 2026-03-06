'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FileDown, Calendar, Clock, ArrowRight } from 'lucide-react'
import TradingViewWidget from '../investors/TradingViewWidget'
import TradingViewWidgetB from '../investors/TradingViewWidgetB'

const financialReports = [
  {
    period: '2025-2024',
    title: 'Estados financieros consolidados al 30 de junio 2025 y 2024 e informe de los contadores públicos independientes',
    file: '/docs/estados-financieros-2024-2025.pdf',
  },
  {
    period: '2024-2023',
    title: 'Estados financieros consolidados al 30 de junio 2024 y 2023 e informe de los contadores públicos independientes',
    file: '/docs/estados-financieros-2023-2024.pdf',
  },
  {
    period: '2023-2022',
    title: 'Estados financieros consolidados al 30 de junio 2023 y 2022 e informe de los contadores públicos independientes',
    file: '/docs/estados-financieros-2022-2023.pdf',
  },
]

const shareholderCalls = [
  {
    date: 'Próximamente',
    time: '',
    type: 'Ordinaria',
    title: 'Convocatoria Asamblea General Ordinaria 2026',
    file: '/docs/convocatoria-ordinaria-2026.pdf',
  },
  {
    date: '15 Mar 2025',
    time: '10:00 AM',
    type: 'Ordinaria',
    title: 'Convocatoria Asamblea General Ordinaria 2025',
    file: '/docs/convocatoria-ordinaria-2025.pdf',
  },
  {
    date: '10 Nov 2024',
    time: '02:00 PM',
    type: 'Extraordinaria',
    title: 'Convocatoria Asamblea General Extraordinaria',
    file: '/docs/convocatoria-extraordinaria-2024.pdf',
  },
]

const marketHouses = [
  {
    name: 'BNCI',
    image: '/images/houses/bnci-logo.png', // Placeholder
    url: '#',
  },
  {
    name: 'Ratio',
    image: '/images/houses/ratio-logo.png', // Placeholder
    url: '#',
  },
  {
    name: 'Agronet',
    image: '/images/houses/L-agronet.png', // Placeholder
    url: '#',
  },
]

export function InvestorSection() {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  return (
    <section className="pt-36 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full h-full mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-center font-display font-normal text-dark mb-6 tracking-tight !leading-[4rem]">
            Consolidados en el Mercado de Capitales
          </h2>
          <p className="text-body-md text-slate-500 font-body leading-relaxed text-center">
            Invaca cotiza en la Bolsa de Valores de Caracas desde 1955. Conozca nuestras acciones:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Chart (60%) -> lg:col-span-3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative flex flex-col"
          >
            <div className="">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-display font-medium text-dark">
                  IVC.{activeTab} <span className="text-slate/60 text-xl ml-2 font-body font-normal">Bolsa de Valores de Caracas</span>
                </h2>
                
                {/* Tabs */}
                <div className="flex bg-gray-100 p-1 rounded-sm">
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
              </div>
              
              {/* Chart */}
              <div className="relative w-full h-[570px] bg-white flex items-center justify-center overflow-hidden">
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
                    Invaca Investment Company S.A.C.A Class {activeTab}
                  </p>
                </div>
                
                {activeTab === 'A' ? <TradingViewWidget /> : <TradingViewWidgetB />}
              </div>
              <p className="mt-6 text-body-sm text-slate/70 font-body">
                Datos actualizados en tiempo real. Stock in <a className='text-dark-900 font-body font-bold hover:text-accent transition-colors' href={`https://www.bolsadecaracas.com/resumen-mercado/?simb=IVC.${activeTab}`} target="_blank" rel="noopener noreferrer">Bolsa de Valores de Caracas</a>.
              </p>
            </div>
          </motion.div>


          {/* Column 2: Info (40%) -> lg:col-span-2 */}
           <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col h-full gap-10"
          >
            {/* Row 2: Convocatorias */}
            {/* <div className="w-full lg:w-full h-full bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center rounded-sm p-6">
              <h3 className="text-2xl lg:text-3xl font-display font-medium text-white mb-8">
                Convocatoria para Accionistas
              </h3>
              
              <div className="flex flex-col gap-4">
                 {shareholderCalls.slice(0, 1).map((call, index) => (
                  <div 
                    key={index}
                    className="p-5 border border-white bg-white rounded-sm transition-all"
                  >
                   <div className="flex flex-wrap gap-2 mb-4">
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium bg-slate-100 text-dark">
                        {call.date !== 'Próximamente' ? (
                          <>
                            <Calendar className="w-3 h-3 mr-1" /> {call.date} - {call.time}
                          </>
                        ) : (
                          <>
                            <Calendar className="w-3 h-3 mr-1" /> {call.date}
                          </>
                        )}
                     </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium ${
                        call.type === 'Ordinaria' ? 'bg-dark-800 text-white' : 'bg-accent-100 text-accent-800'
                      }`}>
                        {call.type}
                     </span>
                   </div>
                   
                   <h4 className="text-md font-body font-semibold text-dark mb-4 leading-snug">
                     {call.title}
                   </h4>
                  
                  {call.date !== 'Próximamente' && (
                    <a 
                      href={call.file}
                      download
                      className="inline-flex items-center font-body font-semibold text-body-sm text-accent hover:text-accent-600 transition-colors"
                    >
                      <FileDown className="h-4 w-4 mr-1.5" /> Descargar convocatoria
                    </a>
                  )}
                  </div>
                 ))}
              </div>
            </div> */}

            {/* Row 1: Estados Financieros */}
            <div className="sticky top-0">
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="text-2xl lg:text-3xl font-display font-medium text-dark">
                  Últimos Estados Financieros
                </h3>
              </div>
              
              <div className="flex flex-row gap-3">
                {financialReports.slice(0, 2).map((report, index) => (
                  <div 
                    key={index}
                    className="relative flex flex-col items-start justify-between rounded-sm p-6 bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center border-b-2 border-dark-400 before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-accent-400 hover:before:w-full before:transition-all before:duration-500 before:ease-in-out group"
                  >
                    <div className='mb-10'>
                      <p className="text-xl font-display font-normal text-white mb-2">{report.period}</p>
                      <p className="text-body-sm text-white/60 max-w-[400px]">{report.title}.</p>
                    </div>
                    <a 
                      href={report.file}
                      download
                      className="py-2 px-4 text-body-sm font-body font-semibold flex items-center justify-center bg-white/10 text-white rounded-sm hover:bg-accent hover:text-white transition-colors"
                      title="Descargar PDF"
                    >
                      {/* <FileDown className="h-5 w-5" /> */}
                      Descargar
                    </a>
                  </div>
                ))}
              </div>
              
               <div className="mt-8">
                <Link
                  href="/investor-hub"
                  className="inline-flex items-center text-accent font-body font-semibold text-body-md hover:text-accent-600 transition-colors group"
                >
                  Ir al Investor Hub
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Invierte en Invaca */}
            <div className="mt-8">
              <h3 className="text-2xl lg:text-3xl !leading-tight font-display font-medium text-dark mb-2">
                Invierta en Invaca Investment Company
              </h3>
              <p className="text-body-sm text-slate/70 font-body mb-8">Contáctenos a través de una de las siguientes casas de bolsa:</p>
              
              <div className="grid grid-cols-5 gap-3">
                {marketHouses.map((house, index) => (
                  <Link 
                    key={index}
                    href={house.url}
                    className="aspect-square bg-white border border-slate-50 flex flex-col items-center justify-center rounded-sm hover:border-accent transition-all group p-4"
                  >
                    <div className="relative w-full h-full mb-2">
                      <Image
                        src={house.image}
                        alt={house.name}
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                    {/* <span className="text-xs text-center font-body font-medium text-slate-400 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">{house.name}</span> */}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
