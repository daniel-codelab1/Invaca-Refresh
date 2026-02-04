import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Noticias | INVACA',
  description: 'Mantente al día con las últimas noticias, eventos y actualizaciones corporativas de INVACA.',
}

const news = [
  {
    id: 1,
    title: 'INVACA Celebra su Centenario con Nuevo Plan de Inversiones',
    excerpt: 'En su centenario, INVACA anuncia un ambicioso plan de inversiones para fortalecer sus activos inmobiliarios, comerciales y bursátiles durante 2025.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    date: '15 Enero 2025',
    category: 'Noticias',
  },
  {
    id: 2,
    title: 'Fusión con FVI: Consolidación de Operaciones',
    excerpt: 'INVACA completa exitosamente la absorción del Fondo de Valores Inmobiliarios (FVI), consolidando toda la operación bajo nuestra marca.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    date: '10 Enero 2024',
    category: 'Corporativo',
  },
  {
    id: 3,
    title: 'Nuevas Oportunidades de Inversión en Centros Comerciales',
    excerpt: 'INVACA presenta nuevas oportunidades de inversión y desarrollo en sus centros comerciales estratégicamente ubicados en Venezuela.',
    image: 'https://images.unsplash.com/photo-1555529669-2269763671c0?w=600&h=400&fit=crop',
    date: '5 Diciembre 2024',
    category: 'Inversiones',
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Noticias
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Mantente al día con nuestras novedades y eventos
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.id}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-body-sm text-gray-500 mb-4 font-body">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-h4 font-display font-semibold text-dark mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-slate mb-4 line-clamp-2 font-body">
                    {item.excerpt}
                  </p>
                  <div className="inline-flex items-center text-accent font-display font-medium hover:text-accent-600 transition-colors group/link text-body-sm">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
