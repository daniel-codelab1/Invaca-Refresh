import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos | INVACA',
  description: 'Conoce la historia de INVACA Investment Company, más de 100 años de liderazgo en inversión inmobiliaria en Venezuela.',
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Quiénes Somos
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Más de 100 años construyendo el futuro inmobiliario de Venezuela
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-h2 font-display font-bold text-dark mb-6">
              Nuestra Historia
            </h2>
            <p className="text-body-lg text-slate font-body leading-relaxed mb-6">
              INVACA Investment Company es una compañía de inversión inmobiliaria con más de 100 años de trayectoria. Fundada el 24 de abril de 1925 como C.A. Cervecería Caracas, hemos recorrido un extraordinario camino de transformación, adaptándonos a los tiempos y manteniéndonos a la vanguardia en los sectores inmobiliario, financiero y de inversión.
            </p>
            <p className="text-body-lg text-slate font-body leading-relaxed mb-6">
              En 1955, INVACA se convirtió en una empresa pública al inscribirse en la Bolsa de Valores de Caracas, consolidándose como pionera en el mercado de inmuebles y valores. En 2017, nos transformamos en una Sociedad Anónima de Capital Autorizado, y en 2024, alcanzamos un nuevo hito histórico al absorber al Fondo de Valores Inmobiliarios (FVI), consolidando nuestra posición como la empresa líder en el sector inmobiliario y financiero en Venezuela.
            </p>
            <p className="text-body-lg text-slate font-body leading-relaxed">
              Hoy, con un siglo de historia, INVACA se consolida como un testimonio de permanencia, adaptabilidad y visión estratégica. Seguimos comprometidos con nuestros accionistas, clientes y empleados, con quienes compartimos el objetivo común de construir un futuro sólido, innovador y próspero.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
