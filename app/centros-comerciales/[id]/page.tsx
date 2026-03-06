import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MallDetailView, MallData } from '@/components/malls/MallDetailView'

// Reusing the same data structure, but ideally should be imported or fetched
const mallsData: Record<string, MallData> = {
  'tolon-fashion-mall': {
    id: 1,
    name: 'Tolón Fashion Mall',
    location: 'Las Mercedes, Caracas',
    address: 'Av. Principal de Las Mercedes, Caracas',
    title: 'El destino de moda y estilo en Las Mercedes, Caracas',
    description: 'Tolón Fashion Mall es el epicentro de la moda y el estilo de vida en Caracas. Con una arquitectura elegante y una ubicación privilegiada, ofrece una experiencia de compra exclusiva, gastronomía de alto nivel y entretenimiento para toda la familia. Es el punto de encuentro predilecto para quienes buscan lujo, confort y seguridad.',
    heroVideo: '/videos/mall-view-video-example.mp4', 
    image: '/images/malls/tolon/fachada-tolon-1.jpg',
    commercialArea: '26.000 m²',
    stats: {
      stores: 165,
      restaurants: 32,
      parkingSpots: 1200,
    },
    managers: [
      {
        role: 'Gerente General',
        name: 'Carlos Rodríguez',
        email: 'c.rodriguez@invaca.com',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        role: 'Gerente de Mercadeo',
        name: 'Ana Sofía Mendoza',
        email: 'a.mendoza@invaca.com',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
    ],
    performance: {
      annualVisitors: '4.5M+',
      openingYear: '2003',
      socialFollowers: '350k+',
    },
    services: ['Wi-Fi Gratuito', 'Valet Parking', 'Pet Friendly', 'Zonas de Descanso', 'Seguridad 24/7', 'Sala de Lactancia'],
    brands: [
      {
        name: 'New Balance',
        image: '/images/malls/tolon/brands/New-Balance-Logo-PNG.png',
      },
      {
        name: 'Pandora',
        image: '/images/malls/tolon/brands/Pandora-logo.jpg',
      },
      { 
        name: 'Swarovski',
        image: '/images/malls/tolon/brands/swarovski-logo.png',
      },
      {
        name: 'Timberland',
        image: '/images/malls/tolon/brands/Timberland-logo.png',
      },
      {
        name: 'Acanelado',
        image: '/images/malls/tolon/brands/acanelado-original.png',
      },
      {
        name: 'Agua Bendita',
        image: '/images/malls/tolon/brands/agua-bendita-01.png',
      },
      {
        name: 'Cole Haan',
        image: '/images/malls/tolon/brands/Cole_Haan_logo_logotype.png',
      },
      {
        name: 'Cortefiel',
        image: '/images/malls/tolon/brands/Cortefiel_logo.png',
      },
      {
        name: 'DKNY',
        image: '/images/malls/tolon/brands/dkny.png',
      },
      {
        name: 'Everlast',
        image: '/images/malls/tolon/brands/everlast-logo.jpg',
      },
      {
        name: 'Le Collezioni',
        image: '/images/malls/tolon/brands/Le-Collezioni.png',
      },
      {
        name: 'Levi',
        image: '/images/malls/tolon/brands/levis-brand-clothes-logo-symbol-design-fashion.png',
      },
      {
        name: 'Bullpadel',
        image: '/images/malls/tolon/brands/logo-bullpadel.jpg',
      },
      {
        name: 'Pawer',
        image: '/images/malls/tolon/brands/pawer.jpg',
      },
      {
        name: 'Sotano Siete',
        image: '/images/malls/tolon/brands/sotano-siete.png',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1555529669-2269763671c0?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=800&q=80',
    ],
    contact: {
      phone: '+58 212 555 1234',
      email: 'info@tolon.com',
      openingHours: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
      website: 'https://cctolon.com',
      instagram: 'https://www.instagram.com/tolon_fm',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.366403688864!2d-66.85960442400977!3d10.471746289658245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58557d122515%3A0x62972445f1b14d8!2sTol%C3%B3n%20Fashion%20Mall!5e0!3m2!1ses!2sve!4v1709224467000!5m2!1ses!2sve',
  },
  'paseo-el-hatillo': {
    id: 2,
    name: 'Paseo El Hatillo',
    location: 'El Hatillo, Caracas',
    address: 'Calle La Lagunita, El Hatillo',
    title: 'El lugar donde la comunidad se conecta y crea recuerdos inolvidables',
    description: 'Paseo El Hatillo combina la modernidad de un centro comercial de primer nivel con el encanto turístico de la zona. Es el destino ideal para disfrutar de una oferta gastronómica variada, entretenimiento y compras en un ambiente relajado y seguro, rodeado de clima de montaña.',
    heroVideo: 'https://videos.pexels.com/video-files/5826955/5826955-hd_1920_1080_24fps.mp4',
    image: '/images/malls/paseoelhatillo/4938623117048261886.jpg',
    commercialArea: '32.000 m²',
    stats: {
      stores: 140,
      restaurants: 45,
      parkingSpots: 1500,
    },
    managers: [
      {
        role: 'Gerente General',
        name: 'Miguel Ángel Pérez',
        email: 'm.perez@invaca.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      },
      {
        role: 'Gerente de Mercadeo',
        name: 'Patricia Velásquez',
        email: 'p.velasquez@invaca.com',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      },
    ],
    performance: {
      annualVisitors: '3.2M+',
      openingYear: '2005',
      socialFollowers: '210k+',
    },
    services: ['Wi-Fi Gratuito', 'Valet Parking', 'Cine', 'Área de Juegos', 'Banco', 'Farmacia'],
    brands: [
      {
        name: 'Cinex',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Farmatodo',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'McDonalds',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Arturos',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Beco',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Traki',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'RORI',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Technostation',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1555529669-2269763671c0?w=800&q=80',
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    ],
    contact: {
      phone: '+58 212 555 5678',
      email: 'contacto@paseoelhatillo.com',
      openingHours: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
      website: 'https://paseoelhatillo.com',
      instagram: 'https://www.instagram.com/paseoelhatillo',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6335198424155!2d-66.82756612401016!3d10.450505189679198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5785055b8e9d%3A0x80352528148b80b7!2sPaseo%20El%20Hatillo%20La%20Lagunita!5e0!3m2!1ses!2sve!4v1709224555000!5m2!1ses!2sve',
  },
  'llano-mall-ciudad-comercial': {
    id: 3,
    name: 'Llano Mall Ciudad Comercial',
    location: 'Acarigua, Portuguesa',
    address: 'Av. José Antonio Páez, Acarigua',
    title: 'Una experiencia de compras cómoda y agradable para todos nuestros visitantes',
    description: 'Llano Mall es la referencia comercial de los llanos venezolanos. Una ciudad comercial moderna que integra las mejores marcas nacionales e internacionales, ofreciendo una experiencia única de compra, diversión y servicios para toda la región.',
    heroVideo: 'https://videos.pexels.com/video-files/855079/855079-hd_1920_1080_30fps.mp4',
    image: '/images/malls/ccllanomall/8826667.jpg',
    commercialArea: '45.000 m²',
    stats: {
      stores: 220,
      restaurants: 35,
      parkingSpots: 1800,
    },
    managers: [
      {
        role: 'Gerente General',
        name: 'Roberto Méndez',
        email: 'r.mendez@invaca.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      },
      {
        role: 'Gerente de Mercadeo',
        name: 'Carmen Elena Ruiz',
        email: 'c.ruiz@invaca.com',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      },
    ],
    performance: {
      annualVisitors: '5.8M+',
      openingYear: '2010',
      socialFollowers: '180k+',
    },
    services: ['Wi-Fi Gratuito', 'Estacionamiento Inteligente', 'Feria de Comida', 'Cine', 'Supermercado', 'Hotel'],
    brands: [
      {
        name: 'Traki',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Cines Unidos',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Rio Supermarket',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Balú',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Adidas',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Samsung',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Clarks',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      },
      {
        name: 'Totto',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    ],
    contact: {
      phone: '+58 255 555 9012',
      email: 'info@llanomall.com',
      openingHours: 'Lunes a Domingo: 10:00 AM - 8:00 PM',
      website: 'https://llanomall.com',
      instagram: 'https://www.instagram.com/llanomall',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.467882200378!2d-69.2155699240283!3d9.560594289873115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7d97b0a70f281b%3A0x6b4f7495b508537b!2sLlano%20Mall%20Ciudad%20Comercial!5e0!3m2!1ses!2sve!4v1709224612000!5m2!1ses!2sve',
  },
}

export async function generateStaticParams() {
  return Object.keys(mallsData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const mall = mallsData[id]
  
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

export default async function MallDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const mall = mallsData[id]

  if (!mall) {
    notFound()
  }

  return <MallDetailView mall={mall} />
}
