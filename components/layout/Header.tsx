'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Navigation } from './Navigation'
import { MobileBottomNav } from './MobileBottomNav'
import { MobileSidebar } from './MobileSidebar'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-center lg:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/LogotipoInvacaColor.png"
              alt="INVACA Investment Company"
              width={160}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Navigation />
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <select className="text-body-sm font-body border-none bg-transparent cursor-pointer focus:outline-none">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select> */}
            <Link
              href="/contacto"
              className="px-4 py-2 bg-accent text-white rounded-sm uppercase text-body-sm font-body font-semibold hover:bg-accent-600 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button - HIDDEN entirely to use BottomNav */}
          {/* <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
        </div>
      </div>
      </header>

      {/* Modern App-style Mobile Navigation */}
      <MobileBottomNav 
        onOpenMenu={() => setIsSidebarOpen(true)} 
        onCloseMenu={() => setIsSidebarOpen(false)} 
      />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
