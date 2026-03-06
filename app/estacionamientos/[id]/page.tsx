import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ParkingDetailView, ParkingData } from '@/components/parkings/ParkingDetailView'

export const parkingsData: Record<string, ParkingData> = {
  'tolon-fashion-mall': {
    id: 'tolon-fashion-mall',
    name: 'Estacionamiento Tolón Fashion Mall',
    location: 'Las Mercedes, Caracas',
    address: 'Av. Principal de Las Mercedes, Caracas',
    title: 'Comodidad y seguridad para su vehículo en Las Mercedes',
    description: 'El Estacionamiento Tolón Fashion Mall cuenta con un moderno sistema de control automático, iluminación led y vigilancia permanente para garantizarle la máxima seguridad a usted y a su vehículo mientras disfruta del centro comercial.',
    image: '/images/malls/tolon/fachada-tolon-1.jpg',
    stats: {
      spots: 1200,
      levels: 5,
      accessPoints: 2,
    },
    services: ['Vigilancia 24/7', 'Control de Acceso', 'Ticket Magnético', 'Puestos Preferenciales', 'Iluminación LED'],
    gallery: [
      '/images/malls/tolon/fachada-tolon-1.jpg',
      '/images/urban/bulevar-tolon.jpg',
      '/images/urban/bulevar-tolon-1.jpg',
      '/images/assets/saman-ivc-1.jpg',
    ],
    contact: {
      phone: '+58 212 909 3000',
      email: 'operaciones@invaca.com.ve',
      openingHours: 'Lunes a Domingo: 10:00 AM - 11:30 PM',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.366403688864!2d-66.85960442400977!3d10.471746289658245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58557d122515%3A0x62972445f1b14d8!2sTol%C3%B3n%20Fashion%20Mall!5e0!3m2!1ses!2sve!4v1709224467000!5m2!1ses!2sve',
  },
  'parque-avila': {
    id: 'parque-avila',
    name: 'Parking Parque Ávila',
    location: 'Altamira, Caracas',
    address: 'Av. San Juan Bosco, Altamira, Caracas',
    title: 'Acceso corporativo y residencial en una ubicación privilegiada',
    description: 'Ubicado en el corazón corporativo de Caracas, este estacionamiento ofrece servicios a arrendatarios y visitantes del complejo Parque Ávila, contando con sistemas avanzados de extracción e iluminación para asegurar una excelente calidad de aparcamiento.',
    image: '/images/assets/geom-2.jpg',
    stats: {
      spots: 850,
      levels: 4,
      accessPoints: 3,
    },
    services: ['Abonos Corporativos', 'Cámaras de Seguridad', 'Extracción Inteligente', 'Puestos Techados'],
    gallery: [
      '/images/assets/geom-2.jpg',
      '/images/assets/geometric-bg.jpg',
      '/images/assets/geometric-bg-2.png',
      '/images/assets/geometric-bg-3.png',
    ],
    contact: {
      phone: '+58 212 909 3001',
      email: 'operaciones@invaca.com.ve',
      openingHours: 'Lunes a Sábado: 6:00 AM - 10:00 PM',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1517706786634!2d-66.8504229240092!3d10.485292289650005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58f70044fa97%3A0x8dd0fa464436551!2sPlaza%20Francia%20de%20Altamira!5e0!3m2!1ses!2sve!4v1709230571344!5m2!1ses!2sve',
  },
  'paseo-el-hatillo': {
    id: 'paseo-el-hatillo',
    name: 'Parking VIP Paseo El Hatillo',
    location: 'El Hatillo, Caracas',
    address: 'Calle La Lagunita, El Hatillo',
    title: 'Exclusividad y confort en su visita a Paseo El Hatillo',
    description: 'Servicio VIP diseñado para ofrecer el máximo confort a nuestros visitantes. Nuestras modernas cajas de pago y la zona de espera aseguran una experiencia libre de estrés en un agradable clima.',
    image: '/images/malls/paseoelhatillo/4938623117048261886.jpg',
    stats: {
      spots: 1500,
      levels: 6,
      accessPoints: 2,
    },
    services: ['Valet Parking', 'Car Wash (Tercerizado)', 'Ticket sin Contacto', 'Seguridad 24/7'],
    gallery: [
      '/images/malls/paseoelhatillo/4938623117048261886.jpg',
      '/images/urban/bulevar-sucre.jpg',
      '/images/urban/bulevar-sucre-1.jpg',
      '/images/urban/bulevar-sucre-2.jpg',
    ],
    contact: {
      phone: '+58 212 909 3002',
      email: 'operaciones@invaca.com.ve',
      openingHours: 'Lunes a Domingo: 10:00 AM - 10:00 PM',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6335198424155!2d-66.82756612401016!3d10.450505189679198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5785055b8e9d%3A0x80352528148b80b7!2sPaseo%20El%20Hatillo%20La%20Lagunita!5e0!3m2!1ses!2sve!4v1709224555000!5m2!1ses!2sve',
  },
  'llano-mall': {
    id: 'llano-mall',
    name: 'Parking Llano Mall',
    location: 'Acarigua, Portuguesa',
    address: 'Av. José Antonio Páez, Acarigua',
    title: 'Capacidad y funcionalidad para la ciudad comercial de los Llanos',
    description: 'El complejo de aparcamiento más grande de Acarigua, estratégicamente distribuido para facilitar un acceso rápido a todas las áreas de la Ciudad Comercial Llano Mall. Equipado con señalización inteligente y alta seguridad.',
    image: '/images/malls/ccllanomall/8826667.jpg',
    stats: {
      spots: 1800,
      levels: 3,
      accessPoints: 4,
    },
    services: ['Estacionamiento Gratuito (Condiciones)', 'Personal de Orientación', 'Amplios Espacios', 'Plazas P/ Motos'],
    gallery: [
      '/images/malls/ccllanomall/8826667.jpg',
      '/images/assets/geometric-bg.jpg',
      '/images/assets/saman-ivc-1.jpg',
      '/images/malls/tolon/fachada-tolon-1.jpg',
    ],
    contact: {
      phone: '+58 255 622 1000',
      email: 'operaciones@invaca.com.ve',
      openingHours: 'Lunes a Domingo: 9:00 AM - 9:00 PM',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.467882200378!2d-69.2155699240283!3d9.560594289873115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7d97b0a70f281b%3A0x6b4f7495b508537b!2sLlano%20Mall%20Ciudad%20Comercial!5e0!3m2!1ses!2sve!4v1709224612000!5m2!1ses!2sve',
  },
}

export async function generateStaticParams() {
  return Object.keys(parkingsData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const parking = parkingsData[id]
  
  if (!parking) {
    return {
      title: 'Estacionamiento no encontrado | INVACA',
    }
  }

  return {
    title: `${parking.name} | INVACA`,
    description: parking.description,
  }
}

export default async function ParkingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const parking = parkingsData[id]

  if (!parking) {
    notFound()
  }

  return <ParkingDetailView parking={parking} />
}
