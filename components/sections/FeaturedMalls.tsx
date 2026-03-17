'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getStrapiMedia, STRAPI_BASE_URL } from '@/lib/tools'

interface FeaturedMallType {
  id: number;
  name: string;
  slug: string;
  location: string;
  image: string;
  stores: number | string;
  restaurants: number | string;
  parkingSpots: number | string;
}

export function FeaturedMalls() {
  const [featuredMalls, setFeaturedMalls] = useState<FeaturedMallType[]>([])

  useEffect(() => {
    getStrapiMedia('/api/malls?populate[0]=MainImage&populate[1]=Stats').then((res) => {
      if (res && res.data) {
        const mapped = res.data.map((mall: any) => ({
          id: mall.id,
          name: mall.Name,
          slug: mall.Slug,
          location: mall.Location,
          image: mall.MainImage?.url ? `${STRAPI_BASE_URL}${mall.MainImage.url}` : '/images/assets/bg-ivc-4.jpg',
          stores: mall.Stats?.Stores || 0,
          restaurants: mall.Stats?.Restaurants || 0,
          parkingSpots: mall.Stats?.ParkingSpots || 0
        }))
        setFeaturedMalls(mapped)
        console.log(mapped)
      }
    })
  }, [])

  return (
    <section className="pt-20 lg:pt-32 pb-20 lg:pb-36">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title - Left */}
            <div className="flex-1">
              <h2 className="text-4xl lg:text-6xl font-display font-normal text-dark mb-0 tracking-tight leading-tight lg:!leading-[4rem]">
                Explora Nuestros <br /> Centros Comerciales
              </h2>
            </div>
            {/* Description - Right */}
            <div className="flex-1 flex flex-col justify-around items-start h-full gap-5 lg:max-w-lg">
              <p className="text-body-md text-slate-500 font-body leading-relaxed text-justify">
                Descubre una selección exclusiva de centros comerciales High-End, meticulosamente curados para brindar lo mejor en experiencias de compra y opciones de inversión inmobiliaria de primer nivel.
              </p>
              <Link
                  href={`/centros-comerciales/tolon-fashion-mall`}
                  className="inline-flex items-center text-accent font-body font-medium hover:text-accent-600 transition-colors group/link text-body-md"
                >
                  Ver más detalle
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </motion.div>

        {/* Malls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMalls.map((mall, index) => (
            <motion.div
              key={mall.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-sm transition-all duration-300 group relative before:absolute before:bottom-[-2px] before:left-0 before:rounded-sm before:w-full before:h-[20px] before:bg-dark-800"
            >
              {/* Image */}
              <Link href={`/centros-comerciales/${mall.slug}`} className="block">
                <div className="relative h-[28rem] overflow-hidden [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]">
                  <motion.div
                    className="absolute inset-0 bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center z-10"
                    initial={{ y: "0%" }}
                    whileInView={{ y: "100%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: 1 + index * 0.2, ease: [0.7, 0, 0.3, 1] }}
                  />
                  <motion.div
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.4, delay: 1 + index * 0.2, ease: [0.7, 0, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={mall.image}
                      alt={mall.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 relative z-10 bg-white border border-neutral-900 border-t-0">
                {/* Mall Name */}
                <h3 className="text-2xl lg:text-3xl font-display font-normal mb-3 leading-tight w-fit text-transparent bg-clip-text bg-gradient-to-r from-dark from-40% via-white/20 via-50% to-dark to-60% bg-[length:300%_100%] bg-right group-hover:bg-left transition-none group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out">
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
                <p className="text-body-sm text-slate/70 font-body mb-8">
                  {mall.stores} Tiendas · {mall.restaurants} Restaurantes · {mall.parkingSpots} Estacionamientos
                </p>

                {/* Ver más detalle Button */}
                <Link
                  href={`/centros-comerciales/${mall.slug}`}
                  className="inline-flex items-center text-accent font-body font-semibold hover:text-accent-600 transition-colors group/link text-body-md"
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
