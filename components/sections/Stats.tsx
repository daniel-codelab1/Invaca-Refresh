'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    value: '100+',
    label: ['Años de Actividad', 'Ininterrumpida'],
  },
  {
    value: '3',
    label: ['Centros Comerciales', 'en Operación'],
  },
  {
    value: '70+',
    label: ['Años en Bolsa de Valores', 'de Caracas'],
  },
  {
    value: 'IVC.A/B',
    label: ['Cotización Bursátil en la', 'Bolsa de Valores de Caracas'],
  },
]

export function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl font-medium text-slate font-body mb-0">
            Nuestra trayectoria: Un siglo de liderazgo empresarial
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full bg-cream-200/50 border-2 border-white rounded-2xl p-12 justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 px-5"
              >
                {/* Value */}
                <div className="text-6xl font-display font-bold text-dark mb-3 leading-none">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-slate font-body font-normal leading-normal">
                  {Array.isArray(stat.label) ? (
                    <>
                      {stat.label.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < stat.label.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </>
                  ) : (
                    stat.label
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
