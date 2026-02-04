'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const dropdownItems = [
  {
    href: '/centros-comerciales',
    label: 'Centros Comerciales',
    previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    previewTitle: 'Centros Comerciales',
    previewDescription: 'Descubre nuestros centros comerciales de alta gama',
  },
  {
    href: '/estacionamientos',
    label: 'Estacionamientos',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    previewTitle: 'Estacionamientos',
    previewDescription: 'Servicios de estacionamiento estratégicamente ubicados',
  },
  {
    href: '/otros-activos',
    label: 'Otros Activos',
    previewImage: 'https://images.unsplash.com/photo-1555529669-2269763671c0?w=800&h=600&fit=crop',
    previewTitle: 'Otros Activos',
    previewDescription: 'Explora nuestro portafolio diversificado de activos inmobiliarios',
  },
]

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const isActive = dropdownItems.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + '/')
  )

  const currentPreview = hoveredItem !== null
    ? dropdownItems[hoveredItem]
    : dropdownItems.find((item) => pathname === item.href || pathname.startsWith(item.href + '/')) || dropdownItems[0]

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
      <span
        className={cn(
          'inline-flex items-center gap-1 font-display font-medium transition-colors cursor-pointer',
          isActive ? 'text-accent' : 'text-slate hover:text-accent',
          'text-body-sm'
        )}
      >
        Nuestra Oferta
        <ChevronDown className={cn(
          'h-4 w-4 transition-transform duration-200',
          isOpen && 'rotate-180'
        )} />
      </span>

      {isOpen && (
        <>
          {/* Área invisible que conecta el trigger con el dropdown */}
          <div 
            className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] h-8 z-40"
            style={{ pointerEvents: 'auto' }}
          />
          <div
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[800px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl border border-neutral/20 rounded-b-2xl z-50 overflow-hidden"
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
