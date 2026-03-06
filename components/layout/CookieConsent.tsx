'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay before showing the banner for a better UX
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 pointer-events-none flex justify-center"
        >
          <div className="container mx-auto max-w-5xl pointer-events-auto">
            <div className="bg-[url('/images/assets/bg-ivc-4.jpg')] bg-cover bg-center backdrop-blur-xl border border-white/10 text-white p-6 md:p-8 shadow-2xl rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
              
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-display font-medium text-white tracking-wide">Privacidad y Cookies</h3>
                <p className="text-body-sm text-cream-100/70 font-body font-light leading-relaxed">
                  Utilizamos cookies analíticas y de rendimiento para asegurar y mejorar su experiencia en nuestro sitio web. 
                  Al hacer clic en "Aceptar", usted consiente el uso de todas las cookies. 
                  Puede revisar detalladamente nuestra <Link href="/cookies" className="text-accent hover:underline font-medium">Política de Cookies</Link> y <Link href="/privacidad" className="text-accent hover:underline font-medium">Privacidad</Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
                <button
                  onClick={handleReject}
                  className="w-full sm:w-auto px-6 py-3 border border-white/20 text-white font-body font-semibold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors rounded-xs"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-body font-semibold text-xs tracking-widest uppercase hover:bg-opacity-90 transition-colors rounded-xs"
                >
                  Aceptar Todas
                </button>
              </div>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
