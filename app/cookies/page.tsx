import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Invaca Investment Company',
  description: 'Política de Cookies de Invaca Investment Company.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 text-dark">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-12">Política de Cookies</h1>
        
        <div className="space-y-8 font-body font-light text-slate-500 leading-relaxed text-lg">
          <p>
            Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
          
          <p>
            Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en el sitio web de Invaca Investment Company, y qué opciones tiene usted como usuario para gestionarlas.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web guarda en su computadora o dispositivo móvil cuando usted lo visita. Permiten que la plataforma recuerde sus acciones y preferencias (como el inicio de sesión, el idioma, el tamaño de la letra y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese o navegue por las páginas.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">2. ¿Cómo utilizamos las Cookies?</h2>
          <p>Utilizamos cookies para los siguientes propósitos:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cookies estrictamente necesarias:</strong> Son aquellas esenciales para que el sitio web funcione correctamente. Sin estas cookies, no se pueden proporcionar los servicios que ha solicitado.</li>
            <li><strong>Cookies de rendimiento o analíticas:</strong> Nos permiten recoger información estadística sobre cómo los visitantes utilizan nuestro sitio, como por ejemplo las páginas más visitadas. Estos datos nos ayudan a optimizar nuestro portal y facilitar la navegación.</li>
            <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que usted hace (como su nombre de usuario, idioma o región) y proporcionan características mejoradas y más personalizadas.</li>
          </ul>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">3. Servicios de Terceros</h2>
          <p>
            Es posible que utilicemos servicios de terceros (como Google Analytics) que también pueden establecer explícitamente y utilizar cookies en nuestro sitio web. No tenemos control sobre estas cookies de terceros y le sugerimos que revise las políticas de cookies de dichos terceros para obtener más información sobre el uso que hacen de las mismas y cómo rechazarlas.
          </p>

          <h2 className="text-2xl font-display font-medium text-dark mt-10 mb-4">4. Control y Gestión de Cookies</h2>
          <p>
            Usted puede controlar y eliminar las cookies en cualquier momento a través de la configuración de su navegador web. La mayoría de los navegadores le permiten rechazar parcial o totalmente el almacenamiento de cookies. Debe tener en cuenta que, si decide deshabilitar ciertas cookies, es posible que algunas funciones de nuestro sitio web no operen correctamente o que su experiencia de navegación se vea afectada.
          </p>

          <p className="mt-8">
            Para obtener más información sobre cómo configurar las cookies en su navegador, consulte la función de "Ayuda" del mismo o visite sitios web informativos especializados sobre el tema.
          </p>
        </div>
      </div>
    </div>
  )
}
