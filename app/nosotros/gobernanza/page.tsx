import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gobernanza | INVACA',
  description: 'Conoce la estructura de gobernanza y principios corporativos de INVACA Investment Company.',
}

export default function GobernanzaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Gobernanza
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Estructura corporativa y principios de gobierno
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold text-dark mb-6">
              Estructura de Gobernanza
            </h2>
            <p className="text-body-lg text-slate font-body leading-relaxed mb-6">
              INVACA Investment Company mantiene los más altos estándares de gobierno corporativo, transparencia y responsabilidad social. Nuestra estructura de gobernanza está diseñada para garantizar la toma de decisiones estratégicas que beneficien a todos nuestros stakeholders.
            </p>
            <p className="text-body-lg text-slate font-body leading-relaxed">
              Nuestro compromiso con la excelencia en gobernanza se refleja en nuestras prácticas corporativas, que han guiado nuestras operaciones durante más de un siglo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
