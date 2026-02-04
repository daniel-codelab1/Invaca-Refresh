import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Centros Comerciales | INVACA',
  description: 'Descubre Tolón Fashion Mall, Paseo El Hatillo y Llano Mall Ciudad Comercial. Centros comerciales de alta gama operados por Invaca Investment Company en Venezuela.',
}

const malls = [
  {
    id: 1,
    name: 'Tolón Fashion Mall',
    location: 'Caracas, Venezuela',
    image: '/images/malls/fachada-tolon-1.jpg',
    description: 'Centro comercial de moda y estilo de vida ubicado en una zona estratégica de Caracas.',
  },
  {
    id: 2,
    name: 'Paseo El Hatillo',
    location: 'El Hatillo, Caracas, Venezuela',
    image: '/images/malls/4938623117048261886.jpg',
    description: 'Centro comercial con ambiente único, combinando comercio, gastronomía y entretenimiento en El Hatillo.',
  },
  {
    id: 3,
    name: 'Llano Mall Ciudad Comercial',
    location: 'Caracas, Venezuela',
    image: '/images/malls/8826667.jpg',
    description: 'Ciudad comercial moderna con amplia oferta de tiendas, restaurantes y servicios.',
  },
]

export default function CentrosComercialesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">Centros Comerciales</h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Operamos y administramos Tolón Fashion Mall, Paseo El Hatillo y Llano Mall Ciudad Comercial
          </p>
        </div>
      </section>

      {/* Malls Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {malls.map((mall) => (
              <div
                key={mall.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/centros-comerciales/${mall.id}`} className="block">
                  <div className="relative h-72 overflow-hidden cursor-pointer rounded-t-2xl">
                    <Image
                      src={mall.image}
                      alt={mall.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-h3 md:text-h2 font-display font-semibold mb-2 leading-tight">
                        {mall.name}
                      </h3>
                      <div className="flex items-center text-body-sm font-body text-white/90">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        {mall.location}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-8">
                  <p className="text-body text-gray-600 mb-6 font-body">
                    {mall.description}
                  </p>
                  <Link
                    href={`/centros-comerciales/${mall.id}`}
                    className="inline-flex items-center text-primary-600 font-display font-medium hover:text-primary-700 transition-colors text-body-sm"
                  >
                    Ver detalles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
