import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estacionamientos | INVACA',
  description: 'Servicios de estacionamiento estratégicamente ubicados operados por INVACA.',
}

export default function EstacionamientosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Estacionamientos
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Servicios de estacionamiento estratégicamente ubicados
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold text-dark mb-6">
              Nuestros Servicios de Estacionamiento
            </h2>
            <p className="text-body-lg text-slate font-body leading-relaxed">
              INVACA opera y administra servicios de estacionamiento estratégicamente ubicados en Venezuela, ofreciendo soluciones de movilidad urbana de alta calidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
