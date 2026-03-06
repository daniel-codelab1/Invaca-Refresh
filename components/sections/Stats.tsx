'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    value: '100+',
    label: ['Años de actividad', 'ininterrumpida'],
  },
  {
    value: '3',
    label: ['Centros comerciales', 'en operación'],
  },
  {
    value: '70+',
    label: ['Años en Bolsa de Valores', 'de Caracas'],
  },
  {
    value: 'IVC.A/B',
    label: ['Cotización bursátil en la', 'Bolsa de Valores de Caracas'],
  },
]

export function Stats() {
  return (
    <section className="">
      <div className="">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl font-medium text-slate font-body mb-0">
            Nuestra trayectoria: Un siglo de liderazgo empresarial
          </h2>
        </motion.div> */}

        <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center flex flex-col md:flex-row w-full bg-dark border-t-2 border-white/50 p-12 justify-center items-center rounded-sm">
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
                <div className="text-6xl font-body font-bold text-white mb-4 leading-none">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm text-white/70 font-body font-normal leading-normal">
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
