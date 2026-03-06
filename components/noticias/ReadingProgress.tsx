'use client'

import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar only after scrolling past the hero section
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-neutral-200 z-50 origin-left"
      style={{ scaleX: scrollYProgress, opacity: isVisible ? 1 : 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <div className="w-full h-full bg-accent" />
    </motion.div>
  )
}
