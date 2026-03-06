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
      className="sticky top-32 flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="text-xs font-display font-medium text-slate uppercase tracking-widest text-center mb-2">
        Compartir
      </div>
      
      <button 
        onClick={handleShareLinkedin}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-50 text-dark hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 group"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      <button 
        onClick={handleShareTwitter}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-50 text-dark hover:bg-black hover:text-white transition-colors duration-300 group"
        aria-label="Compartir en Twitter"
      >
        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      <hr className="border-neutral-100 my-1" />

      <button 
        onClick={handleCopyLink}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group ${
          copied ? 'bg-green-500 text-white' : 'bg-neutral-50 text-dark hover:bg-accent hover:text-white'
        }`}
        aria-label="Copiar Enlace"
      >
        {copied ? (
          <Check className="w-5 h-5" />
        ) : (
          <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </motion.div>
  )
}
