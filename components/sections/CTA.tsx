'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, TrendingUp, Users } from 'lucide-react'

const ctaItems = [
  {
    icon: Building2,
    title: 'Inversión Inmobiliaria',
    description: 'Explora oportunidades de inversión en nuestros activos estratégicos',
    link: '/centros-comerciales',
    color: 'sky',
  },
  {
    icon: TrendingUp,
    title: 'Investor Hub',
    description: 'Accede a información financiera y corporativa actualizada',
    link: '/investor-hub',
    color: 'accent',
  },
  {
    icon: Users,
    title: 'Contáctanos',
    description: 'Estamos aquí para responder tus consultas y necesidades',
    link: '/contacto',
    color: 'dark',
  },
]

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate to-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-h1 font-display font-bold mb-4 tracking-tight">
            ¿Listo para comenzar?
          </h2>
          <p className="text-body-lg text-white/80 max-w-2xl mx-auto font-body">
            Descubre cómo INVACA puede ayudarte a alcanzar tus objetivos de inversión
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-20 h-20 rounded-full bg-${item.color} flex items-center justify-center mb-6`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-h4 font-display font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body text-white/80 mb-6 font-body flex-grow">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center text-accent font-display font-medium hover:text-accent-300 transition-colors group">
                      Saber más
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
