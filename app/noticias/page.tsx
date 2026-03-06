import { Metadata } from 'next'
import { HeroParallax } from '@/components/ui/HeroParallax'
import { news } from '@/lib/data/news'
import { NoticiasClient } from './NoticiasClient'

export const metadata: Metadata = {
  title: 'Noticias | INVACA',
  description: 'Mantente al día con las últimas noticias, eventos y actualizaciones corporativas de INVACA.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-cream-50 selection:bg-accent selection:text-white pb-32">
      {/* 1. Hero Section */}
      <HeroParallax 
        imageSrc="/images/assets/bg-ivc-4.jpg"
        imageAlt="Invaca Noticias Background"
        badgeText="Actualidad y Eventos"
        title="Noticias"
        subtitle="Mantente al día con las últimas novedades y eventos corporativos de INVACA."
      />

      {/* 2. Interactive News Grid */}
      <NoticiasClient news={news} />
    </div>
  )
}
