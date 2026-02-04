import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

const newsData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'INVACA Celebra su Centenario con Nuevo Plan de Inversiones',
    excerpt: 'En su centenario, INVACA anuncia un ambicioso plan de inversiones para fortalecer sus activos inmobiliarios, comerciales y bursátiles durante 2025.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    date: '15 Enero 2025',
    category: 'Noticias',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA (Invaca Investment Company) celebra un hito histórico al cumplir 100 años de operación ininterrumpida en el sector inmobiliario y financiero venezolano. En este momento trascendental, la empresa anuncia un ambicioso plan de inversiones que marcará el inicio de su segundo siglo de operaciones.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Plan Estratégico 2025</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        El nuevo plan de inversiones contempla el fortalecimiento de tres pilares fundamentales: activos inmobiliarios, operaciones comerciales y participación en mercados bursátiles. Esta estrategia integral busca consolidar la posición de liderazgo de INVACA en el mercado venezolano.
      </p>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Durante los próximos años, INVACA se enfocará en la modernización de sus centros comerciales existentes, la expansión de su portafolio inmobiliario y el fortalecimiento de su presencia en los mercados de capitales, manteniendo su compromiso con la excelencia y la innovación.
      </p>
    `,
  },
  '2': {
    id: 2,
    title: 'Fusión con FVI: Consolidación de Operaciones',
    excerpt: 'INVACA completa exitosamente la absorción del Fondo de Valores Inmobiliarios (FVI), consolidando toda la operación bajo nuestra marca.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    date: '10 Enero 2024',
    category: 'Corporativo',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA ha completado exitosamente la absorción del Fondo de Valores Inmobiliarios (FVI), consolidando toda la operación bajo nuestra marca. Este proceso de fusión, llevado a cabo a través de la Bolsa de Valores de Caracas, nos reafirma como la compañía con más años ininterrumpidos de cotización en este mercado.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Nueva Estructura Corporativa</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Con esta integración, nacemos como INVACA Investment Company, combinando una sólida herencia con una visión moderna y global. Nuestro nuevo lema, «Investment Company», encapsula nuestra ambición de captar y promover inversiones nacionales e internacionales en múltiples sectores, mientras mantenemos nuestra esencia como líderes en el mercado inmobiliario.
      </p>
    `,
  },
  '3': {
    id: 3,
    title: 'Nuevas Oportunidades de Inversión en Centros Comerciales',
    excerpt: 'INVACA presenta nuevas oportunidades de inversión y desarrollo en sus centros comerciales estratégicamente ubicados en Venezuela.',
    image: 'https://images.unsplash.com/photo-1555529669-2269763671c0?w=1200&h=600&fit=crop',
    date: '5 Diciembre 2024',
    category: 'Inversiones',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA presenta nuevas oportunidades de inversión y desarrollo en sus centros comerciales estratégicamente ubicados en Venezuela. Nuestros activos incluyen Tolón Fashion Mall, Paseo El Hatillo y Llano Mall Ciudad Comercial, cada uno posicionado en ubicaciones estratégicas que ofrecen alto potencial de crecimiento.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Portafolio Estratégico</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Estos centros comerciales representan la excelencia en retail y entretenimiento, ofreciendo experiencias únicas a nuestros visitantes y oportunidades de crecimiento para nuestros inquilinos y socios comerciales.
      </p>
    `,
  },
  '4': {
    id: 4,
    title: 'Resultados Financieros del Tercer Trimestre 2024',
    excerpt: 'INVACA reporta resultados financieros sólidos para el tercer trimestre de 2024, reflejando el crecimiento sostenido de la empresa.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    date: '20 Noviembre 2024',
    category: 'Finanzas',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA reporta resultados financieros sólidos para el tercer trimestre de 2024, reflejando el crecimiento sostenido de la empresa y su capacidad de adaptación en un entorno económico desafiante.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Rendimiento Financiero</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Los resultados demuestran la fortaleza de nuestro modelo de negocio y nuestra capacidad para generar valor tanto para nuestros accionistas como para la comunidad en general.
      </p>
    `,
  },
  '5': {
    id: 5,
    title: 'Modernización de Infraestructura en Centros Comerciales',
    excerpt: 'INVACA inicia un programa de modernización integral en sus centros comerciales para mejorar la experiencia del visitante.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    date: '15 Noviembre 2024',
    category: 'Infraestructura',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA inicia un programa de modernización integral en sus centros comerciales para mejorar la experiencia del visitante y optimizar las operaciones. Este programa incluye mejoras en sistemas de seguridad, eficiencia energética y espacios comunes.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Mejoras Continuas</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Estas inversiones reflejan nuestro compromiso con la excelencia operativa y la satisfacción de nuestros visitantes, inquilinos y socios comerciales.
      </p>
    `,
  },
  '6': {
    id: 6,
    title: 'Asamblea General de Accionistas 2024',
    excerpt: 'INVACA celebra su Asamblea General de Accionistas 2024, presentando los logros del año y las perspectivas futuras.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop',
    date: '10 Octubre 2024',
    category: 'Corporativo',
    author: 'Equipo INVACA',
    content: `
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        INVACA celebra su Asamblea General de Accionistas 2024, presentando los logros del año y las perspectivas futuras. Durante la asamblea, se revisaron los resultados financieros, se discutieron las estrategias de crecimiento y se reafirmó el compromiso con la transparencia y la gobernanza corporativa.
      </p>
      <h2 class="text-3xl font-display font-bold text-dark mt-12 mb-6">Compromiso con los Accionistas</h2>
      <p class="mb-6 text-body-md text-slate font-body leading-relaxed">
        Esta reunión anual es fundamental para mantener la comunicación abierta con nuestros accionistas y asegurar que nuestras decisiones estratégicas estén alineadas con sus expectativas y el crecimiento sostenible de la empresa.
      </p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = newsData[params.id]
  
  if (!article) {
    return {
      title: 'Noticia no encontrada | INVACA',
    }
  }

  return {
    title: `${article.title} | INVACA`,
    description: article.excerpt,
  }
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = newsData[params.id]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              href="/noticias"
              className="inline-flex items-center text-white hover:text-sky transition-colors mb-6 font-body text-body-sm"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Noticias
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-display font-semibold uppercase tracking-wider text-accent bg-accent/20 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90 font-body text-body-sm">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {article.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
