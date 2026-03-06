'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DropdownMenu } from './DropdownMenu'
import { AboutDropdown } from './AboutDropdown'

interface NavigationProps {
  mobile?: boolean
}

// Ítems simples (sin dropdowns)
const navItems = [
  { href: '/investor-hub', label: 'Investor Hub' },
  { href: '/noticias', label: 'Noticias' },
]

export function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname()

  const baseLinkClasses = 'font-body uppercase tracking-wider font-bold transition-colors'
  const sizeClasses = mobile ? 'block py-2 text-base' : 'text-body-sm'

  return (
    <>
      {/* Inicio - siempre primero */}
      <Link
        href="/"
        className={cn(
          baseLinkClasses,
          pathname === '/'
            ? 'text-accent'
            : 'text-gray-700 hover:text-accent',
          sizeClasses
        )}
      >
        Inicio
      </Link>

      {/* Quiénes Somos + Dropdown de Gobernanza */}
      <AboutDropdown mobile={mobile} />

      {/* Nuestra Oferta - Dropdown de activos */}
      <DropdownMenu />

      {/* Resto de enlaces simples */}
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            baseLinkClasses,
            pathname === item.href
              ? 'text-accent'
              : 'text-gray-700 hover:text-accent',
            sizeClasses
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}
