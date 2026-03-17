import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Invaca Investment Company',
  description: 'Política de Privacidad de Invaca Investment Company.',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 text-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12">Política de Privacidad</h1>
        
        <div className="space-y-8 font-body font-light text-slate/80 leading-relaxed text-lg">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
          
          <p>
            En Invaca Investment Company valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona cuando interactúa con nuestro sitio web y los servicios relacionados.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">1. Recopilación de Información</h2>
          <p>
            Podemos recopilar información personal, como su nombre, dirección de correo electrónico, número de teléfono y otros datos de contacto, cuando usted voluntariamente nos los proporciona a través de nuestros formularios en línea, al suscribirse a boletines o al solicitar información sobre nuestros servicios o locales comerciales.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">2. Uso de la Información</h2>
          <p>La información recopilada se utiliza exclusivamente para los siguientes fines:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Responder a sus consultas, solicitudes o preguntas de forma oportuna.</li>
            <li>Enviarle comunicaciones relacionadas con nuevos proyectos, actualizaciones de centros comerciales e información para inversores.</li>
            <li>Mejorar nuestra página web y adaptar los contenidos a las preferencias de los usuarios.</li>
            <li>Cumplir con requerimientos legales o regulatorios cuando sea necesario.</li>
          </ul>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">3. Protección de Datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger su información personal contra el acceso no autorizado, la pérdida, alteración o destrucción. Nuestro entorno web se somete a evaluaciones periódicas para asegurar el cumplimiento de altos estándares de seguridad y confidencialidad.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">4. Compartir Información con Terceros</h2>
          <p>
            Invaca Investment Company no vende, alquila ni comercializa su información personal a terceros. Solo podríamos compartir información con proveedores de servicios de confianza que actúan bajo nuestras directrices y están sujetos a obligaciones de confidencialidad, o cuando sea requerido por la ley aplicable o las autoridades competentes.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">5. Sus Derechos</h2>
          <p>
            Usted tiene el derecho de acceder, corregir, actualizar o solicitar la eliminación de su información personal en cualquier momento. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de los canales oficiales disponibles en nuestra sección de Contacto.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">6. Cambios a esta Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente. Le recomendamos revisar esta sección periódicamente.
          </p>
        </div>
      </div>
    </div>
  )
}
