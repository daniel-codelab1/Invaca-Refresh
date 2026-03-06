import { Metadata } from 'next'
import { HeroParallax } from '@/components/ui/HeroParallax'
import { InvestorHubClient } from './InvestorHubClient'

export const metadata: Metadata = {
  title: 'Investor Hub | INVACA',
  description: 'Información financiera y corporativa para inversionistas de INVACA Investment Company.',
}

// Mock Data
const tickerData = [
  {
    symbol: 'IVC.A',
    name: 'INVACA Investment Company - Clase A',
    price: '45.50',
    change: '+1.20',
    changePercent: '+2.71%',
    isPositive: true,
    volume: '15,400',
    lastUpdate: 'Hace 15 min'
  },
  {
    symbol: 'IVC.B',
    name: 'INVACA Investment Company - Clase B',
    price: '42.10',
    change: '-0.30',
    changePercent: '-0.71%',
    isPositive: false,
    volume: '5,200',
    lastUpdate: 'Hace 25 min'
  }
]

const financialDocs = [
  {
    year: '2025',
    period: '2025 - 2024',
    title: 'Estados financieros consolidados al 30 de junio 2025 y 2024 e informe de los contadores públicos independientes.',
    file: '/docs/estados-financieros-2025-2024.pdf',
  },
  {
     year: '2024',
    period: '2024 - 2023',
    title: 'Estados financieros consolidados al 30 de junio 2024 y 2023 e informe de los contadores públicos independientes.',
    file: '/docs/estados-financieros-2024-2023.pdf',
  },
  {
     year: '2023',
    period: '2023 - 2022',
    title: 'Estados financieros consolidados al 30 de junio 2023 y 2022 e informe de los contadores públicos independientes.',
    file: '/docs/estados-financieros-2023-2022.pdf',
  },
    {
     year: '2022',
    period: '2022 - 2021',
    title: 'Estados financieros consolidados al 30 de junio 2022 y 2021 e informe de los contadores públicos independientes.',
    file: '/docs/estados-financieros-2022-2021.pdf',
  },
]

const assemblyCalls = [
  {
    date: '15 Mar 2025',
    time: '10:00 AM',
    type: 'Ordinaria',
    title: 'Convocatoria Asamblea General Ordinaria de Accionistas 2025',
    file: '/docs/convocatoria-ordinaria-2025.pdf',
    status: 'Open' as const
  },
  {
    date: '10 Nov 2024',
    time: '02:00 PM',
    type: 'Extraordinaria',
    title: 'Convocatoria Asamblea General Extraordinaria de Accionistas',
    file: '/docs/convocatoria-extraordinaria-2024.pdf',
    status: 'Closed' as const
  },
]

export default function InvestorHubPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      {/* 1. Hero Section (Reused Component) */}
      <HeroParallax 
        imageSrc="/images/assets/bg-ivc-3.jpg"
        imageAlt="Invaca Investor Hub Background"
        badgeText="Portal Financiero"
        title="Investor Hub"
        subtitle="Acceda a información financiera detallada, reportes bursátiles y convocatorias oficiales de INVACA."
      />

      {/* 2. Interactive Sections (Client Component) */}
      <InvestorHubClient 
        tickerData={tickerData}
        financialDocs={financialDocs}
        assemblyCalls={assemblyCalls}
      />
    </div>
  )
}
