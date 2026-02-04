'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutSummary() {
  return (
    <section className="p-4 relative">
      {/* shadow-[inset_0_0_8px_4px_rgba(0,0,0,.2)] */}
      <div className="py-20 relative rounded-2xl bg-[url('/images/assets/geom-4.png')] bg-fixed bg-cover bg-center border-2 border-white">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* White Container Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream-100 border-2 border-white rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Section - Text Content */}
              <div className="flex flex-col justify-center col-span-7 p-8 lg:p-12 xl:p-16">
                {/* Pre-heading */}
                <p className="text-xs md:text-sm font-display font-medium text-slate uppercase tracking-wider mb-6">
                  INVACA INVESTMENT COMPANY
                </p>

                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark mb-8 !leading-[3.5rem] tracking-tight">
                  Líderes en el sector inmobiliario y financiero
                </h2>

                {/* Body Paragraph */}
                <p className="text-body-md text-slate font-body leading-relaxed max-w-xl">
                  Desde INVACA Investment Company, seguimos comprometidos con nuestros accionistas, clientes y empleados, con quienes compartimos el objetivo común de construir un futuro sólido, innovador y próspero.
                </p>

                <div className="pt-8 md:pt-12">
                  <Link
                    href="/nosotros"
                    className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-accent text-white rounded-full font-display font-medium text-body hover:bg-accent-600 transition-all duration-300"
                  >
                    Conoce más sobre nosotros
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Right Section - Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative col-span-5 h-[350px] lg:h-[450px] xl:h-[550px] p-4"
              >
                <div className="h-full w-full relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/assets/team-invaca.jpg"
                    alt="INVACA - Un siglo de liderazgo empresarial"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
