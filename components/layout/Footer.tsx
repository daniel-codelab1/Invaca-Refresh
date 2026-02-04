import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark text-white/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/LogotipoInvacaNegativo.png"
                alt="INVACA Investment Company"
                width={240}
                height={100}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-sm">
              INVACA Investment Company - Compañía de inversión inmobiliaria con más de 100 años de trayectoria. Cotizando en la Bolsa de Valores de Caracas desde 1955.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-sky transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-sky transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-sky transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-sky transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/centros-comerciales" className="hover:text-sky transition-colors">
                  Centros Comerciales
                </Link>
              </li>
              <li>
                <Link href="/estacionamientos" className="hover:text-sky transition-colors">
                  Estacionamientos
                </Link>
              </li>
              <li>
                <Link href="/otros-activos" className="hover:text-sky transition-colors">
                  Otros Activos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-sky transition-colors">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/investor-hub" className="hover:text-sky transition-colors">
                  Investor Hub
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-sky transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/bolsa-valores" className="hover:text-sky transition-colors">
                  Bolsa de Valores (IVC.A, IVC.B)
                </Link>
              </li>
              <li>
                <Link href="/historia" className="hover:text-sky transition-colors">
                  Nuestra Historia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Caracas, Venezuela</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+582121234567" className="hover:text-sky transition-colors">
                  +58 212 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@invaca.com.ve" className="hover:text-sky transition-colors">
                  info@invaca.com.ve
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} INVACA - Invaca Investment Company. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacidad" className="hover:text-sky transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-sky transition-colors">
              Cookies
            </Link>
            <Link href="/legal" className="hover:text-sky transition-colors">
              Legal
            </Link>
            <Link href="/accesibilidad" className="hover:text-sky transition-colors">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
