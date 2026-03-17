import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal | Invaca Investment Company',
  description: 'Aviso Legal y Términos de Uso de Invaca Investment Company.',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 text-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12">Aviso Legal</h1>
        
        <div className="space-y-8 font-body font-light text-slate/80 leading-relaxed text-lg">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
          
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio web de Invaca Investment Company.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">1. Identidad del Titular</h2>
          <p>
            Este sitio web es propiedad y está operado por Invaca Investment Company (en adelante, "la Empresa"). Somos una entidad regulada y supervisada por la Superintendencia Nacional de Valores de la República Bolivariana de Venezuela, con RIF J-000199310.
          </p>
          <p>
            <strong>Sede Corporativa:</strong> Av. Venezuela, Torre El Samán, Planta Baja, Urb. El Rosal, Caracas, Venezuela.<br/>
            <strong>Master:</strong> +58 (212) 9059068
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">2. Condiciones de Uso</h2>
          <p>
            El acceso y uso de este sitio web atribuye a quien lo realiza la condición de "Usuario", implicando la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El Usuario se compromete a hacer un uso lícito y adecuado de los contenidos de la web conforme a la ley, la moral y el orden público.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los componentes del sitio web, incluyendo textos, diseños, gráficos, logotipos, imágenes y códigos fuente, son propiedad exclusiva de Invaca Investment Company o de terceros que han autorizado expresamente su uso, y están protegidos por las leyes de propiedad intelectual e industrial aplicables. Queda terminantemente prohibida cualquier forma de reproducción, distribución, comunicación pública, transformación u otra forma de explotación sin la autorización previa y por escrito de la Empresa.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">4. Exención de Responsabilidad</h2>
          <p>La Empresa no garantiza:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>La disponibilidad continua y sin interrupciones del funcionamiento del sitio web.</li>
            <li>La inexistencia de virus o malware en el servidor o en el contenido del sitio.</li>
            <li>La exactitud, vigencia, exhaustividad o fiabilidad del contenido proporcionado para fines de inversión. Toda la información bursátil e inmobiliaria presentada es de carácter orientativo e informativo y no sustituye los canales oficiales para la toma de decisiones financieras.</li>
          </ul>
          <p className="mt-4">
            La Empresa no se hace responsable de daños o perjuicios directos o indirectos, incluyendo pérdida de datos o lucro cesante, derivados del uso o imposibilidad de uso del sitio web o de la información contenida en el mismo.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">5. Legislación y Jurisdicción Aplicable</h2>
          <p>
            El uso de este sitio web y el contenido de este Aviso Legal se rigen por la legislación vigente de la República Bolivariana de Venezuela. Cualquier diferencia o disputa que surja se someterá a la jurisdicción de los tribunales competentes en Caracas, Venezuela.
          </p>
        </div>
      </div>
    </div>
  )
}
