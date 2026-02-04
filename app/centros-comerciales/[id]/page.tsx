import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Phone, Mail, Clock, ShoppingBag, Utensils, Car } from 'lucide-react'

const mallsData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Tolón Fashion Mall',
    location: 'Caracas, Venezuela',
    address: 'Av. Principal, Caracas',
    image: '/images/malls/fachada-tolon-1.jpg',
    description: 'Tolón Fashion Mall es un centro comercial de moda y estilo de vida ubicado en una zona estratégica de Caracas.',
    stores: 150,
    restaurants: 25,
    parkingSpots: 500,
    phone: '+58 212 123 4567',
    email: 'tolon@invaca.com.ve',
    openingHours: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
  },
  '2': {
    id: 2,
    name: 'Paseo El Hatillo',
    location: 'El Hatillo, Caracas, Venezuela',
    address: 'El Hatillo, Caracas',
    image: '/images/malls/4938623117048261886.jpg',
    description: 'Paseo El Hatillo es un centro comercial único que combina comercio, gastronomía y entretenimiento.',
    stores: 120,
    restaurants: 30,
    parkingSpots: 400,
    phone: '+58 212 123 4568',
    email: 'hatillo@invaca.com.ve',
    openingHours: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
  },
  '3': {
    id: 3,
    name: 'Llano Mall Ciudad Comercial',
    location: 'Caracas, Venezuela',
    address: 'Caracas, Venezuela',
    image: '/images/malls/8826667.jpg',
    description: 'Llano Mall Ciudad Comercial es una ciudad comercial moderna con amplia oferta de tiendas, restaurantes y servicios.',
    stores: 200,
    restaurants: 35,
    parkingSpots: 600,
    phone: '+58 212 123 4569',
    email: 'llano@invaca.com.ve',
    openingHours: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const mall = mallsData[params.id]
  
  if (!mall) {
    return {
      title: 'Centro Comercial no encontrado | INVACA',
    }
  }

  return {
    title: `${mall.name} | INVACA`,
    description: mall.description,
  }
}

export default function MallDetailPage({ params }: { params: { id: string } }) {
  const mall = mallsData[params.id]

  if (!mall) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={mall.image}
          alt={mall.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              href="/centros-comerciales"
              className="inline-flex items-center text-white hover:text-sky transition-colors mb-6 font-body"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Centros Comerciales
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {mall.name}
            </h1>
            <div className="flex items-center text-white/90 font-body">
              <MapPin className="h-5 w-5 mr-2" />
              {mall.location}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-h2 font-display font-bold text-dark mb-6">Sobre {mall.name}</h2>
              <p className="text-body-lg text-slate font-body leading-relaxed mb-6">
                {mall.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-h4 font-display font-semibold text-dark mb-4">Información</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate font-body">
                    <ShoppingBag className="h-5 w-5 mr-3 text-accent" />
                    <span>{mall.stores} Tiendas</span>
                  </div>
                  <div className="flex items-center text-slate font-body">
                    <Utensils className="h-5 w-5 mr-3 text-accent" />
                    <span>{mall.restaurants} Restaurantes</span>
                  </div>
                  <div className="flex items-center text-slate font-body">
                    <Car className="h-5 w-5 mr-3 text-accent" />
                    <span>{mall.parkingSpots} Estacionamientos</span>
                  </div>
                  <div className="flex items-center text-slate font-body">
                    <Clock className="h-5 w-5 mr-3 text-accent" />
                    <span>{mall.openingHours}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-h4 font-display font-semibold text-dark mb-4">Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate font-body">
                    <Phone className="h-5 w-5 mr-3 text-accent" />
                    <a href={`tel:${mall.phone}`} className="hover:text-accent transition-colors">
                      {mall.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate font-body">
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <a href={`mailto:${mall.email}`} className="hover:text-accent transition-colors">
                      {mall.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
