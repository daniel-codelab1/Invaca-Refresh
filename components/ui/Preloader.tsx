'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling while the preloader is active
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'auto'
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          {/* Top half of the curtain */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[50vh] bg-white pointer-events-auto"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Bottom half of the curtain */}
          <motion.div
             className="absolute bottom-0 left-0 w-full h-[50vh] bg-white pointer-events-auto"
             initial={{ y: "0%" }}
             exit={{ y: "100%" }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          
          {/* Logo container */}
          <motion.div
            className="relative z-10 pointer-events-auto flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logos/LogotipoInvacaColor.png"
              alt="Invaca Investment Company"
              width={240}
              height={120}
              priority
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
