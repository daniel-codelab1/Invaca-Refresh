import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className=" bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center text-white/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-8 lg:col-span-1 flex justify-center items-center flex-col mb-8 lg:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/LogotipoInvacaNegativo.png"
                alt="INVACA Investment Company"
                width={240}
                height={100}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            {/* <p className="text-sm font-body font-light pr-10 leading-relaxed pb-8 inline-block">
              Invaca Investment Company, compañía de inversión inmobiliaria con más de 100 años de trayectoria. Cotizando en la Bolsa de Valores de Caracas desde 1955.
            </p> */}
            <div className="flex space-x-7">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='lg:col-start-3'>
            <h3 className="text-white font-medium text-2xl mb-8">Enlaces Rápidos</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-accent transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/centros-comerciales" className="hover:text-accent transition-colors">
                  Centros Comerciales
                </Link>
              </li>
              <li>
                <Link href="/estacionamientos" className="hover:text-accent transition-colors">
                  Estacionamientos
                </Link>
              </li>
              <li>
                <Link href="/otros-activos" className="hover:text-accent transition-colors">
                  Otros Activos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-accent transition-colors">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-2xl mb-8">Información</h3>
            <ul className="space-y-5 text-sm">
              <li>
                <Link href="/investor-hub" className="hover:text-accent transition-colors">
                  Investor Hub
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="https://www.bolsadecaracas.com/resumen-mercado/?simb=IVC.A" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Bolsa de Valores (IVC.A, IVC.B)
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-accent transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/nosotros/gobernanza" className="hover:text-accent transition-colors">
                  Gobernanza
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-2xl mb-8">Páginas Relacionadas</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center space-x-2">
                <a href="https://www.smv.gob.ve/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Superintendencia del Mercado de Valores
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://www.bolsadecaracas.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Bolsa de Valores de Caracas
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://conapri.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  CONAPRI
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-28">
          <h5 className="text-white/40 font-medium font-body text-sm mb-2">“Entidad Regulada y Supervisada por la Superintendencia del Mercado de Valores”</h5>
          <p className="text-[12px] text-white/40 font-body font-light pr-0 lg:pr-10 text-justify lg:text-left leading-relaxed pb-8 inline-block">La Superintendencia Nacional de Valores de la República Bolivariana de Venezuela, es el ente encargado de regular y supervisar el funcionamiento eﬁciente del mercado de valores, para la protección de las personas que han realizado inversiones en los valores a los cuales se reﬁere la Ley del Mercado de Valores, y para estimular el desarrollo productivo del país, bajo la vigilancia y coordinación del Órgano Superior del Sistema Financiero Nacional (Ministerio del Poder Popular de Planiﬁcación y Finanzas).</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm mb-4 md:mb-0 text-white/70">
            © {new Date().getFullYear()}, Invaca Investment Company RIF J-000199310. Todos los derechos reservados.
          </p>
          <div className="flex space-x-7 w-full lg:w-auto justify-center lg:justify-start text-sm">
            <Link href="/privacidad" className="hover:text-accent transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-accent transition-colors">
              Cookies
            </Link>
            <Link href="/legal" className="hover:text-accent transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
