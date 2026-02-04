import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'header' | 'footer'
  showTagline?: boolean
  className?: string
}

export function Logo({ variant = 'header', showTagline = true, className }: LogoProps) {
  const isFooter = variant === 'footer'
  
  // Seleccionar la imagen según la variante
  const logoSrc = isFooter ? '/logos/LogotipoInvacaNegativo.png' : '/logos/LogotipoInvacaColor.png'
  
  // Tamaños según el contexto
  const width = isFooter ? 240 : 160
  const height = isFooter ? 100 : 50
  
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src={logoSrc}
        alt="INVACA Investment Company"
        width={width}
        height={height}
        className={cn(
          'object-contain',
          isFooter ? 'h-16 w-auto' : 'h-14 md:h-16 w-auto'
        )}
        priority
      />
    </Link>
  )
}
