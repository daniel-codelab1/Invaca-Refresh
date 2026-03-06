import { Metadata } from 'next'
import { HeroParallax } from '@/components/ui/HeroParallax'
import { MallsClient } from './MallsClient'

export const metadata: Metadata = {
  title: 'Centros Comerciales | INVACA',
  description: 'Descubre Tolón Fashion Mall, Paseo El Hatillo y Llano Mall Ciudad Comercial. Centros comerciales de alta gama operados por Invaca Investment Company en Venezuela.',
}

export default function CentrosComercialesPage() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white pb-0">
      {/* 1. Hero Section Standardized */}
      <HeroParallax 
        imageSrc="/images/assets/geometric-bg-3.png"
        imageAlt="Invaca Centros Comerciales Background"
        badgeText="Destinos Comerciales"
        title="Centros Comerciales"
        subtitle="Operamos los destinos comerciales más emblemáticos de Venezuela."
      />

      {/* 2. Interactive Client Experience (Discovery, Interactive Grid, Commercial Leasing) */}
      <MallsClient />
    </div>
  )
}
