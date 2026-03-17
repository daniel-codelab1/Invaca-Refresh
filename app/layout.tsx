import type { Metadata } from 'next'
import { DM_Serif_Display, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { Preloader } from '@/components/ui/Preloader'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Invaca Investment Company | Líder en Inversión Inmobiliaria',
  description: 'Invaca Investment Company - Compañía de inversión inmobiliaria con más de 100 años de trayectoria. Cotizando en la Bolsa de Valores de Caracas desde 1955.',
  icons: {
    icon: '/images/assets/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased pb-16 md:pb-0">
        <Preloader />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
