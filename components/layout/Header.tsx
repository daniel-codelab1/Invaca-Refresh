'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Navigation } from './Navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/LogotipoInvacaColor.png"
              alt="INVACA Investment Company"
              width={160}
              height={50}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Navigation />
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="text-body-sm font-body border-none bg-transparent cursor-pointer focus:outline-none">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <Link
              href="/contacto"
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Navigation mobile />
              <div className="flex items-center justify-between pt-4 border-t">
                <select className="text-body-sm font-body border border-gray-300 rounded px-2 py-1 rounded-lg">
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
                <Link
                  href="/contacto"
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-600 transition-colors font-display font-medium text-body-sm"
                >
                  Contacto
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
