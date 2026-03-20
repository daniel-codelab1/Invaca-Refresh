'use client'

import { motion } from 'framer-motion'
import {
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Check
} from 'lucide-react'
import { useState } from 'react'

interface ShareToolbarProps {
  title: string
}

export function ShareToolbar({ title }: ShareToolbarProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  const handleShareLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')
  }

  return (
    <motion.div 
      className="flex flex-row lg:flex-col gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <button 
        onClick={handleShareLinkedin}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-dark text-white hover:bg-black transition-colors duration-300"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-4 h-4" fill="currentColor" />
      </button>

      <button 
        onClick={handleShareTwitter}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-dark text-white hover:bg-black transition-colors duration-300"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="w-4 h-4" fill="currentColor" />
      </button>

      <button 
        onClick={handleCopyLink}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
          copied ? 'bg-green-500 text-white' : 'bg-dark text-white hover:bg-black'
        }`}
        aria-label="Copiar Enlace"
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </motion.div>
  )
}
