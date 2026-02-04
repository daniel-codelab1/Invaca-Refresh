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
    <section className="py-20 flex flex-col items-end justify-center bg-cream-100">
      <div className="container w-full">
        {/* Header con título y botones de navegación */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 pr-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-4 md:mb-0 tracking-tight">
            Noticias
          </h2>
          
          {/* Botones de navegación */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110 text-dark border border-neutral/20"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all hover:scale-110 text-dark border border-neutral/20"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark rounded-xl font-display font-medium text-body-sm hover:bg-neutral transition-colors border border-neutral/20 shadow-sm hover:shadow-md group"
          >
            Ver todas las noticias
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden pb-6 mb-6" ref={emblaRef}>
          <div className="flex">
            {news.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] md:w-[320px] lg:w-[360px] mr-6"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Imagen con tag de categoría */}
                  <Link href={`/noticias/${item.id}`} className="relative block">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {/* Tag de categoría en esquina superior derecha */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-block px-3 py-1 text-xs font-display font-semibold uppercase tracking-wider text-white bg-accent/10 rounded-full backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Título clickeable */}
                    <Link href={`/noticias/${item.id}`}>
                      <h3 className="text-normal md:text-md font-display font-bold text-dark mb-3 leading-tight line-clamp-2 hover:text-accent transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Fecha */}
                    <div className="flex items-center text-body-sm text-slate-500 mb-4 font-body">
                      {item.date}
                    </div>

                    {/* Botón Ver Noticia */}
                    <div className="mt-4">
                      <Link
                        href={`/noticias/${item.id}`}
                        className="inline-flex items-center justify-center w-full py-3 text-primary font-display font-medium text-body-sm hover:text-accent transition-colors group"
                      >
                        Ver noticia
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
