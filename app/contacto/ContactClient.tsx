'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Building2 } from 'lucide-react'

const departments = [
  {
    name: 'Gestión Humana',
    phone: '+58 (412) 7903436',
    phoneHref: 'tel:+584127903436',
    email: 'gestionhumana@invaca.com.ve',
    emailHref: 'mailto:gestionhumana@invaca.com.ve',
  },
  {
    name: 'Finanzas Corporativas',
    phone: '+58 (414) 3086075',
    phoneHref: 'tel:+584143086075',
    email: 'finanzascorporativas@invaca.com.ve',
    emailHref: 'mailto:finanzascorporativas@invaca.com.ve',
  },
  {
    name: 'Comunicaciones Invaca',
    phone: null,
    phoneHref: null,
    email: 'ivccomunicaciones@invaca.com.ve',
    emailHref: 'mailto:ivccomunicaciones@invaca.com.ve',
  },
]


const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export function ContactClient() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">

      {/* 1. Hero with True Parallax */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] min-h-[470px] w-full flex items-center justify-center overflow-hidden p-4"
      >
        <motion.div className="absolute inset-0 z-0 bg-dark" style={{ y: heroY }}>
          <Image
            src="/images/assets/geometric-bg-3.png"
            alt="Invaca Contact Background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-90 scale-110"
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
              Canales de Comunicación
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
              Contacto
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Ponemos a su disposición distintos canales de comunicación para brindarle una atención más efectiva y oportuna.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 lg:py-32 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col lg:flex-row gap-10 mx-auto"
          >
            {/* Left Column: Address + Department Cards */}
            <motion.div variants={fadeUpVariant} className="w-full lg:w-6/12 flex flex-col gap-6">

              {/* Corporate HQ Card */}
              <div className="bg-white pb-8 md:pb-10 pr-8 md:pr-0 rounded-xs relative overflow-hidden group">
                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeSlideUp}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-6 leading-[1.1] pr-0 lg:pr-10">
                    Gracias por su interés en <span className="text-accent italic">Invaca</span>
                  </h2>
                  <p className="text-lg text-slate font-body font-light mb-8 max-w-lg">
                    ¿Qué área de la empresa quisiera contactar? Ponemos a su disposición distintos canales de comunicación para brindarle una atención más efectiva y oportuna.
                  </p>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-display font-medium text-dark mb-10">
                  Sede Corporativa
                </h2>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-accent transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-body-sm uppercase font-body font-bold text-dark mb-0.5">Dirección</h3>
                      <p className="text-slate-500 font-body text-sm leading-relaxed">
                        Av. Venezuela, Torre El Samán, Planta Baja,<br />
                        Urb. El Rosal, Caracas, Venezuela.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-accent transition-colors duration-300 group-hover/item:bg-accent group-hover/item:text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-body-sm uppercase font-body font-bold text-dark mb-0.5">Master</h3>
                      <a
                        href="tel:+582129059068"
                        className="text-slate-500 font-body text-sm hover:text-accent transition-colors"
                      >
                        +58 (212) 9059068
                      </a>
                    </div>
                  </div>
                </div>

                {/* Watermark */}
                <div className="absolute -bottom-10 -right-10 text-cream-100/50 rotate-[-15deg] pointer-events-none transition-transform duration-700 group-hover:scale-110">
                  <span className="font-display font-bold text-[150px] tracking-tighter opacity-30">IVC</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Google Maps */}
            <motion.div variants={fadeUpVariant} className="w-full lg:w-6/12">
              <div className="bg-white relative overflow-hidden h-full min-h-[480px] lg:min-h-0 group">
                <div className="relative w-full h-[480px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.5899963597434!2d-66.85912992476693!3d10.492158789670518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a593b0c614f63%3A0x2b3265c76f8e7e62!2sTorre%20El%20Sam%C3%A1n!5e0!3m2!1ses!2sve!4v1709650000000!5m2!1ses!2sve"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Torre El Samán, Caracas - Sede Corporativa Invaca"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* 3. Departments */}
      <section className="pb-20 lg:pb-32 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 max-w-7xl mx-auto">
            <div className="w-full lg:w-6/12">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-medium text-dark mb-4">
                Departamentos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, i) => (
                <motion.div
                  key={dept.name}
                  variants={fadeUpVariant}
                  className="bg-white w-full rounded-xs border-b-2 border-dark p-6 group hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-body-sm uppercase font-body font-bold text-dark">{dept.name}</h3>
                    <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-2">
                    {dept.phone && (
                      <a
                        href={dept.phoneHref!}
                        className="flex items-center gap-2.5 text-body-sm text-slate-500 hover:text-accent transition-colors font-body"
                      >
                        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                        {dept.phone}
                      </a>
                    )}
                    <a
                      href={dept.emailHref}
                      className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-accent transition-colors font-body break-all"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      {dept.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
