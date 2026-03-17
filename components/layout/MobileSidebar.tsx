'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Navigation } from './Navigation'
import { useEffect } from 'react'

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-dark-900/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 z-[110] w-4/5 max-w-sm bg-white shadow-2xl flex flex-col md:hidden overflow-hidden"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-200">
              <Link href="/" className="flex items-center" onClick={onClose}>
                <Image
                  src="/logos/LogotipoInvacaColor.png"
                  alt="INVACA Investment Company"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-slate-500 hover:text-dark transition-colors rounded-full hover:bg-cream-100"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links body */}
            <div className="flex-1 overflow-y-auto py-6 px-6 no-scrollbar pb-32">
              <nav className="flex flex-col space-y-6">
                <Navigation mobile onClose={onClose} />
              </nav>
            </div>

            {/* Sidebar Footer branding */}
            <div className="p-6 border-t border-cream-200 bg-cream-50 mt-auto pb-safe">
              <p className="text-xs font-body text-slate-400 text-center uppercase tracking-widest leading-relaxed">
                Trazando El Camino De Lo<br />Extraordinario Desde 1955.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
