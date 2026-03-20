'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const dropdownItems = [
  {
    href: '/nosotros',
    label: 'Quiénes Somos',
    previewImage: '/images/assets/saman-ivc-1.jpg',
    previewTitle: 'Quiénes Somos',
    previewDescription: 'Conoce nuestra historia y trayectoria de más de 100 años',
  },
  {
    href: '/nosotros/gobernanza',
    label: 'Gobernanza',
    previewImage: '/images/assets/gobernanza-2.jpg',
    previewTitle: 'Gobierno Corporativo',
    previewDescription: 'Marco de supervisión, transparencia y rendición de cuentas',
  },
]

interface AboutDropdownProps {
  mobile?: boolean
  onClose?: () => void
}

export function AboutDropdown({ mobile = false, onClose }: AboutDropdownProps) {
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

  const linkBase = 'font-body uppercase font-bold tracking-wider transition-colors'
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

  if (mobile) {
    return (
      <div className="flex flex-col w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between py-2 text-base font-body uppercase font-bold tracking-wider transition-colors w-full',
            pathname === '/nosotros' || pathname.startsWith('/nosotros/')
              ? 'text-accent'
              : 'text-gray-700 hover:text-accent'
          )}
        >
          Quiénes Somos
          <ChevronDown className={cn('h-5 w-5 transition-transform duration-200', isOpen && 'rotate-180')} />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col pl-4 mt-4 space-y-4 border-l-2 border-cream-200 mb-2">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      if (onClose) onClose()
                    }}
                    className={cn(
                      'block text-sm font-body uppercase tracking-widest transition-colors',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-accent font-bold'
                        : 'text-slate-500 hover:text-dark'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
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
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] max-w-[calc(100vw-2rem)] bg-white shadow-2xl border border-neutral/20 z-50 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <div className="grid grid-cols-5">
            {/* Left Column - Navigation Links */}
            <div className="bg-neutral border-r border-neutral/20 px-8 py-8 col-span-2">
              <div className="space-y-1">
                {dropdownItems.map((item, index) => {
                  const itemIsActive = pathname === item.href || pathname.startsWith(item.href + '/')
                  const isHovered = hoveredItem === index
                  return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onMouseEnter={() => setHoveredItem(index)}
                        onClick={() => {
                          setIsOpen(false)
                          if (onClose) onClose()
                        }}
                      className={cn(
                        'block py-3 transition-all duration-300',
                        isHovered || itemIsActive ? 'border-b border-dark' : 'border-b border-transparent'
                      )}
                    >
                      <div className="flex items-center justify-between group">
                        <span
                          className={cn(
                            'text-base font-body font-bold uppercase tracking-wide transition-colors',
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
            <div className="px-8 py-8 flex flex-col col-span-3">
              {/* Image */}
              <div className="relative w-full h-[180px] mb-4 rounded-sm overflow-hidden">
                <Image
                  src={currentPreview.previewImage}
                  alt={currentPreview.previewTitle}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="400px"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-body font-bold mb-2 uppercase tracking-wide text-dark">
                {currentPreview.previewTitle}
              </h3>
              {/* Description */}
              <p className="text-body-sm font-body mb-6 text-slate">
                {currentPreview.previewDescription}
              </p>
              {/* Link */}
              <Link
                href={currentPreview.href}
                onClick={() => {
                  setIsOpen(false)
                  if (onClose) onClose()
                }}
                className="inline-flex items-center text-body-sm font-body font-semibold uppercase tracking-wider text-accent hover:text-accent-600 transition-colors group self-start"
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
