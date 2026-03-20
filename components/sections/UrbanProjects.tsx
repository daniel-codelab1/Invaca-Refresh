'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getStrapiMedia, STRAPI_BASE_URL } from '@/lib/tools'

export const fallbackProjects = [
  {
    id: '01',
    title: 'Bulevar Sucre',
    location: 'El Hatillo, Caracas',
    description: 'Un corredor peatonal y comercial que conecta el Pueblo de El Hatillo con Paseo El Hatillo, activando el recorrido y fortaleciendo el flujo y la experiencia del visitante, en integración con el entorno local.',
    images: [
      '/images/urban/bulevar-sucre.jpg',
      '/images/urban/bulevar-sucre-1.jpg',
      '/images/urban/bulevar-sucre-2.jpg',
      '/images/urban/bulevar-sucre-3.jpg',
    ],
    status: 'En Desarrollo'
  },
  {
    id: '02',
    title: 'Bulevar Tolón (Cuadra Las Mercedes)',
    location: 'Las Mercedes, Caracas',
    description: 'Expansión estratégica que conecta Tolón Fashion Mall con su entorno urbano, articulando movilidad, recorrido peatonal y espacios de experiencia. Activa un corredor comercial y gastronómico que impulsa flujo, permanencia y valor para aliados comerciales y visitantes, en el marco de Cuadra Las Mercedes.',
    images: [
      '/images/urban/bulevar-tolon.jpg',
      '/images/urban/bulevar-tolon-1.jpg',
    ],
    status: 'Próximamente'
  }
]

function ProjectCard({ project, index }: { project: typeof fallbackProjects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 2000) // Change image every 2 seconds
    } else {
      setCurrentImageIndex(0) // Reset to first image when not hovered
    }

    return () => clearInterval(interval)
  }, [isHovered, project.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: index * 0.1 }}
      className="group cursor-pointer border-b-4 border-dark-800 transition-colors duration-300 hover:border-accent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 [clip-path:polygon(0%_0%,_82%_0,_100%_18%,_100%_100%,_0%_100%)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay/Badge if needed */}
        {project.status === 'Próximamente' && (
            <div className="absolute top-4 left-4 z-10 bg-white/40 backdrop-blur-sm text-white text-xs font-body font-bold px-3 py-2 uppercase tracking-widest">
              Próximamente
            </div>
        )}
      </div>

      {/* Content */}
      <div className="flex items-start min-h-60 p-6 pb-10 bg-white border border-neutral-900 border-t-0">
        {/* <span className="text-4xl md:text-5xl font-display font-light text-dark/20 group-hover:text-accent transition-colors duration-300">
          {project.id}
        </span> */}
        
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-display font-medium text-dark transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-accent font-body font-bold text-sm tracking-wide uppercase">
            {project.location}
          </p>
          <p className="text-body-sm text-slate-500 leading-relaxed font-body">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function UrbanProjects() {
  const [projectsData, setProjectsData] = useState(fallbackProjects);

  useEffect(() => {
    getStrapiMedia('/api/home-page?populate=urbanProjects.Images').then((strapiData) => {
      if (strapiData?.data?.urbanProjects && strapiData.data.urbanProjects.length > 0) {
        const mappedProjects = strapiData.data.urbanProjects.map((proj: any, index: number) => {
          
          const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
          let imagesArray: string[] = [];
          if (proj.Images && Array.isArray(proj.Images)) {
            imagesArray = proj.Images.map((img: any) => `${strapiUrl}${img.url}`).filter(Boolean);
          } else if (proj.Images && proj.Images.url) {
            imagesArray = [`${strapiUrl}${proj.Images.url}`];
          }

          // Fallback image if no images provided
          if (imagesArray.length === 0) {
             imagesArray = ['/images/urban/bulevar-sucre.jpg'];
          }

          return {
            id: String(index + 1).padStart(2, '0'),
            title: proj.Title || '',
            location: proj.Location || '',
            description: proj.Description || '',
            images: imagesArray,
            status: proj.Condition || ''
          };
        });
        setProjectsData(mappedProjects);
      }
    }).catch(err => console.error("Error fetching urban projects:", err));
  }, []);

  return (
    <section className="py-0 md:py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Text */}
        <div className="max-w-5xl mx-auto text-center mt-12 mb-32 lg:mb-56">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-3xl lg:text-5xl border-2 border-dark-800 p-10 lg:p-20 font-display font-medium text-dark leading-relaxed before:absolute before:bottom-[-3px] lg:before:bottom-[-4px] before:right-[40px] before:w-[120px] before:h-[4px] before:bg-white"
          >
            Desde 1925, hemos liderado procesos de modernización urbana, desarrollando proyectos que han definido el paisaje urbano de Caracas.
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
