'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export function ReadingProgress({ 
  children,
  className = "" 
}: { 
  children?: React.ReactNode;
  className?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80px", "end 80px"]
  })

  return (
    <div ref={targetRef} className="relative w-full">
      <div className={`w-full h-0.5 bg-neutral-200 z-50 ${className}`}>
        <motion.div
          className="h-full bg-accent origin-left w-full"
          style={{ scaleX: scrollYProgress }}
          initial={{ scaleX: 0 }}
        />
      </div>
      {children}
    </div>
  )
}
