'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { House, List, Briefcase, EnvelopeSimple } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface MobileBottomNavProps {
  onOpenMenu: () => void
  onCloseMenu?: () => void
}

export function MobileBottomNav({ onOpenMenu, onCloseMenu }: MobileBottomNavProps) {
  const pathname = usePathname()

  const tabs = [
    { name: 'Inicio', icon: House, href: '/' },
    { name: 'Menú', icon: List, action: onOpenMenu },
    { name: 'Inversores', icon: Briefcase, href: '/investor-hub' },
    { name: 'Contacto', icon: EnvelopeSimple, href: '/contacto' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[90] bg-white/95 backdrop-blur-md border-t border-cream-200 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab, idx) => {
          const Icon = tab.icon
          const isActive = tab.href ? pathname === tab.href : false
          const content = (
            <div className="flex flex-col items-center justify-center w-full h-full pt-1 pb-1">
              <Icon 
                className={cn(
                  "h-[22px] w-[22px] mb-1 transition-all duration-300", 
                  isActive ? "text-accent scale-110" : "text-slate-500 scale-100 group-hover:text-dark group-hover:scale-110"
                )} 
                weight={isActive ? "fill" : "regular"}
              />
              {/* <span className={cn(
                "text-[10px] font-body uppercase tracking-widest font-bold transition-colors duration-300", 
                isActive ? "text-accent" : "text-slate-400 group-hover:text-dark"
              )}>
                {tab.name}
              </span> */}
            </div>
          )

          if (tab.action) {
            return (
              <button 
                key={idx} 
                className="flex-1 group h-full focus:outline-none"
                onClick={tab.action}
                aria-label={`Open ${tab.name}`}
              >
                {content}
              </button>
            )
          }

          return (
             <Link 
               key={idx} 
               href={tab.href as string} 
               className="flex-1 group h-full focus:outline-none"
               onClick={() => {
                 if (onCloseMenu) onCloseMenu();
               }}
               aria-label={`Go to ${tab.name}`}
             >
               {content}
             </Link>
          )
        })}
      </div>
    </nav>
  )
}
