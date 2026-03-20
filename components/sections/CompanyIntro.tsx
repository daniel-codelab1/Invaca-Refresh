'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function CompanyIntro() {
  return (
    <section className="mx-auto px-0 sm:px-6 w-full pt-12 pb-12 lg:pb-20">
      <div className="flex flex-col lg:flex-row min-h-[400px] md:min-h-[600px] lg:min-h-[735px]">
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mt-0 md:mt-10 lg:mt-14 mb-0 lg:mb-[-3.5em] relative min-h-[400px] md:min-h-[600px] lg:min-h-full "
        >
          <Image
            src="/images/assets/saman-ivc-1.jpg"
            alt="INVACA corporate building"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white flex flex-col justify-center py-12 px-6 md:p-12 lg:p-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium mb-6 leading-tight lg:!leading-[4rem]">
            Un Siglo de Trayectoria Empresarial en Venezuela
          </h2>
          
          <p className="text-md md:text-body-md text-slate-200 font-body leading-relaxed mb-10 max-w-lg">
            Desde nuestra fundación en 1925, en <strong>Invaca Investment Company</strong> hemos evolucionado para consolidar un modelo de inversión inmobiliaria transparente, profesional y responsable. 
            Nuestra presencia bursátil guía un camino de crecimiento constante, donde la mejora de cada activo convierte nuestra visión de futuro en resultados tangibles para nuestros aliados comerciales e inversionistas.
          </p>
          
          <div>
            <Link
              href="/nosotros"
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-sm font-body font-semibold tracking-wide hover:bg-accent-600 transition-all duration-300 group"
            >
              Conoce Nuestra Historia
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
