'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'INVACA Celebra su Centenario con Nuevo Plan de Inversiones',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    date: '15 Enero 2025',
    category: 'Noticias',
  },
  {
    id: 2,
    title: 'Fusión con FVI: Consolidación de Operaciones',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    date: '10 Enero 2024',
    category: 'Corporativo',
  },
  {
    id: 3,
    title: 'Nuevas Oportunidades de Inversión en Centros Comerciales',
    image: 'https://images.unsplash.com/photo-1555529669-2269763671c0?w=600&h=400&fit=crop',
    date: '5 Diciembre 2024',
    category: 'Inversiones',
  },
  {
    id: 4,
    title: 'Resultados Financieros del Tercer Trimestre 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    date: '20 Noviembre 2024',
    category: 'Finanzas',
  },
  {
    id: 5,
    title: 'Modernización de Infraestructura en Centros Comerciales',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    date: '15 Noviembre 2024',
    category: 'Infraestructura',
  },
  {
    id: 6,
    title: 'Asamblea General de Accionistas 2024',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
    date: '10 Octubre 2024',
    category: 'Corporativo',
  },
]

export function NewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      slidesToScroll: 1,
      loop: true,
    },
    [
      Autoplay({
        delay: 5000, // 5 segundos
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header con título y botones de navegación */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <h2 className="text-3xl md:text-6xl font-display font-medium text-dark tracking-tight">
              Últimas Noticias
            </h2>
          </div>
          
          {/* Botones de navegación */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 flex items-center justify-center border border-dark/20 hover:bg-dark hover:text-white transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 flex items-center justify-center border border-dark/20 hover:bg-dark hover:text-white transition-all duration-300"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
            href="/noticias"
            className="inline-flex items-center px-8 h-14 bg-dark text-white font-body font-semibold text-body tracking-wide hover:bg-accent transition-colors duration-300"
          >
            Ver Todas las Noticias
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          </div>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden pb-10" ref={emblaRef}>
          <div className="flex -ml-2">
            {news.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 pl-4"
              >
                <div className="group h-full flex flex-col  border-transparent transition-all duration-300">
                  {/* Imagen */}
                  <Link href={`/noticias/${item.id}`} className="relative block overflow-hidden aspect-[1/1] [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-300" />
                    
                    {/* Fecha en la imagen */}
                    <div className="absolute top-4 left-4 bg-white/40 backdrop-blur-sm px-3 py-1">
                      <span className="text-xs font-body font-bold tracking-wider text-white uppercase">
                        {item.date.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </Link>

                  {/* Contenido */}
                  <div className="flex flex-col w-11/12 mt-[-60px] z-10 flex-grow bg-white border border-neutral-900 border-b-4 ">
                    <span className="text-accent text-xs font-bold uppercase inline-block tracking-widest mb-3 px-6 pt-6">
                      {item.category}
                    </span>
                    
                    <Link href={`/noticias/${item.id}`} className="block mb-8 px-6">
                      <h3 className="text-xl font-display font-medium text-dark leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                    </Link>

                    <div className="mt-auto py-4 px-6 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={`/noticias/${item.id}`}
                        className="inline-flex items-center text-sm font-body font-semibold text-dark hover:text-accent transition-colors group/link"
                      >
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex justify-center mt-8">
          <Link
            href="/noticias"
            className="inline-flex items-center px-8 py-4 bg-dark text-white font-body font-medium text-sm tracking-wide hover:bg-accent transition-colors duration-300"
          >
            VER TODAS LAS NOTICIAS
          </Link>
        </div> */}
      </div>
    </section>
  )
}
