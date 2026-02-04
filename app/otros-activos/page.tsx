import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Otros Activos | INVACA',
  description: 'Explora nuestro portafolio diversificado de activos inmobiliarios.',
}

export default function OtrosActivosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Otros Activos
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Explora nuestro portafolio diversificado de activos inmobiliarios
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold text-dark mb-6">
              Portafolio de Activos
            </h2>
            <p className="text-body-lg text-slate font-body leading-relaxed">
              INVACA gestiona un portafolio diversificado de activos inmobiliarios que incluye propiedades comerciales, residenciales y de oficinas estratégicamente ubicadas en Venezuela.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
