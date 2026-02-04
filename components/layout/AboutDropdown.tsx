'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const dropdownItems = [
  {
    href: '/nosotros',
    label: 'Quiénes Somos',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    previewTitle: 'Quiénes Somos',
    previewDescription: 'Conoce nuestra historia y trayectoria de más de 100 años',
  },
  {
    href: '/nosotros/gobernanza',
    label: 'Gobernanza',
    previewImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    previewTitle: 'Gobernanza',
    previewDescription: 'Estructura corporativa y principios de gobierno',
  },
]

interface AboutDropdownProps {
  mobile?: boolean
}

export function AboutDropdown({ mobile = false }: AboutDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const isActive = dropdownItems.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + '/')
  )

  const currentPreview =
    hoveredItem !== null
      ? dropdownItems[hoveredItem]
      : dropdownItems.find(
          (item) => pathname === item.href || pathname.startsWith(item.href + '/')
        ) || dropdownItems[0]

  const linkBase = 'font-display font-medium transition-colors'
  const sizeClasses = mobile ? 'block py-2 text-base' : 'text-body-sm'

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 200) // Delay para permitir movimiento del mouse del trigger al dropdown
    setCloseTimeout(timeout)
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger link */}
      <Link
        href="/nosotros"
        className={cn(
          'inline-flex items-center gap-1',
          linkBase,
          pathname === '/nosotros' || pathname.startsWith('/nosotros/')
            ? 'text-accent'
            : 'text-slate hover:text-accent',
          sizeClasses
        )}
      >
        Quiénes Somos
        <ChevronDown className={cn(
          'h-4 w-4 transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
      </Link>

      {isOpen && (
        <>
          {/* Área invisible que conecta el trigger con el dropdown */}
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] h-8 z-40"
            style={{ pointerEvents: 'auto' }}
          />
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[800px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl border border-neutral/20 z-50 rounded-b-2xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <div className="grid grid-cols-2">
            {/* Left Column - Navigation Links */}
            <div className="bg-neutral border-r border-neutral/20 px-8 py-10">
              <div className="space-y-1">
                {dropdownItems.map((item, index) => {
                  const itemIsActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  const isHovered = hoveredItem === index
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => setHoveredItem(index)}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block py-3 transition-all duration-300',
                        isHovered || itemIsActive ? 'border-b-2 border-dark' : 'border-b border-transparent'
                      )}
                    >
                      <div className="flex items-center justify-between group">
                        <span
                          className={cn(
                            'text-base font-display font-bold uppercase tracking-wide transition-colors',
                            isHovered || itemIsActive ? 'text-dark' : 'text-slate'
                          )}
                        >
                          {item.label}
                        </span>
                        {(isHovered || itemIsActive) && (
                          <ArrowUpRight className="h-4 w-4 text-dark transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            {/* Right Column - Preview */}
            <div className="px-8 py-10 flex flex-col">
              {/* Image */}
              <div className="relative w-full h-[180px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={currentPreview.previewImage}
                  alt={currentPreview.previewTitle}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="400px"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-display font-bold mb-2 uppercase tracking-wide text-dark">
                {currentPreview.previewTitle}
              </h3>
              {/* Description */}
              <p className="text-body-sm font-body mb-4 text-slate">
                {currentPreview.previewDescription}
              </p>
              {/* Link */}
              <Link
                href={currentPreview.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center text-body-sm font-display font-medium uppercase tracking-wider text-accent hover:text-accent-600 transition-colors group self-start"
              >
                Saber más
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  )
}
