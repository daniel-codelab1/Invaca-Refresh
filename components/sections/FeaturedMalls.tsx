'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

const featuredMalls = [
  {
    id: 1,
    name: 'Tolón Fashion Mall',
    location: 'Las Mercedes, Caracas, Venezuela',
    image: '/images/malls/fachada-tolon-1.jpg',
    stores: 150,
    restaurants: 25,
    parkingSpots: 500,
  },
  {
    id: 2,
    name: 'Paseo El Hatillo',
    location: 'El Hatillo, Caracas, Venezuela',
    image: '/images/malls/4938623117048261886.jpg',
    stores: 120,
    restaurants: 30,
    parkingSpots: 400,
  },
  {
    id: 3,
    name: 'Llano Mall Ciudad Comercial',
    location: 'Acarigua, Portuguesa, Venezuela',
    image: '/images/malls/8826667.jpg',
    stores: 200,
    restaurants: 35,
    parkingSpots: 600,
  },
]

export function FeaturedMalls() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title - Left */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-0 tracking-tight !leading-[3.5rem]">
                Descubre Nuestros <br /> Centros Comerciales
              </h2>
            </div>
            {/* Description - Right */}
            <div className="flex-1 lg:max-w-lg">
              <p className="text-body-md text-slate-500 font-body leading-relaxed text-justify">
                Explora una selección exclusiva de centros comerciales High-End, meticulosamente curados para brindarte lo mejor en experiencias de compra y opciones de inversión inmobiliaria de primer nivel, adaptadas a tus necesidades.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Malls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredMalls.map((mall, index) => (
            <motion.div
              key={mall.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <Link href={`/centros-comerciales/${mall.id}`} className="block">
                <div className="relative h-[34rem] overflow-hidden rounded-t-2xl">
                  <Image
                    src={mall.image}
                    alt={mall.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Mall Name */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-3 leading-tight">
                  {mall.name}
                </h3>

                {/* Location */}
                <div className="flex items-start mb-4">
                  <MapPin className="h-4 w-4 text-slate mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-body-sm text-slate font-body leading-relaxed">
                    {mall.location}
                  </p>
                </div>

                {/* Details */}
                <p className="text-body-sm text-slate/70 font-body mb-6">
                  {mall.stores} Tiendas · {mall.restaurants} Restaurantes · {mall.parkingSpots} Estacionamientos
                </p>

                {/* Ver más detalle Button */}
                <Link
                  href={`/centros-comerciales/${mall.id}`}
                  className="inline-flex items-center text-accent font-display font-medium hover:text-accent-600 transition-colors group/link text-body-sm"
                >
                  Ver más detalle
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
