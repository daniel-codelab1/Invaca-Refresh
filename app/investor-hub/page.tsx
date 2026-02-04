import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Hub | INVACA',
  description: 'Información financiera y corporativa para inversionistas de INVACA Investment Company.',
}

export default function InvestorHubPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Investor Hub
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Información financiera y corporativa para inversionistas
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display font-bold text-dark mb-6">
              Información para Inversionistas
            </h2>
            <p className="text-body-lg text-slate font-body leading-relaxed mb-6">
              INVACA Investment Company cotiza en la Bolsa de Valores de Caracas desde el 19 de diciembre de 1955, siendo la empresa con más años ininterrumpidos de cotización en este mercado.
            </p>
            <p className="text-body-lg text-slate font-body leading-relaxed">
              Nuestro compromiso con la transparencia y la excelencia en gobierno corporativo nos ha posicionado como líderes en el sector inmobiliario y financiero venezolano.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
