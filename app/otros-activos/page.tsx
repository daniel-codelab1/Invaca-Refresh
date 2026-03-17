'use client'

import { useEffect, useState } from 'react';
import { getStrapiMedia, STRAPI_BASE_URL } from '@/lib/tools';
import { motion } from 'framer-motion'
import Image from 'next/image'

// FadeIn Helper
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function OtrosActivosPage() {
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    getStrapiMedia('/api/old-assets?populate=*').then((strapiData) => {
      if (strapiData?.data) {
        const mappedAssets = strapiData.data.map((asset: any) => {
        const imageUrl = asset.Image?.url ? `${STRAPI_BASE_URL}${asset.Image.url}` : '';
          return {
            name: asset.Name,
            type: asset.Type,
            location: asset.Location,
            description: asset.Description,
            image: imageUrl,
          };
        });
        setAssets(mappedAssets);
      }
    });
  }, []);

  console.log(assets);

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-[65vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center p-4 overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0 bg-dark">
          <Image
            src="/images/assets/geometric-bg-3.png"
            alt="Invaca Otros Activos Background"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-dark/70 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-0 md:mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="inline-block border border-accent text-accent px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
              Portafolio Histórico
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
              Otros Activos
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Un sólido historial de inversión, gestión, y visión corporativa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1] font-display font-medium text-dark">
                Además de nuestros icónicos megacentros de compras, contamos con un portafolio histórico diversificado que evidencia <span className="text-accent italic">nuestra sólida presencia</span> en el mercado de bienes raíces corporativo y residencial.
              </h2>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Editorial Asset Showcase */}
      <div className="w-full bg-white overflow-hidden">
        {assets.map((asset, index) => {
           // Determine alternating pattern
           const isEven = index % 2 === 0;

           return (
             <section key={index} className="w-full flex justify-center mb-32 md:mb-48">
               <div className="container px-4 sm:px-6 lg:px-8">
                 <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                   
                   {/* Large Image Block */}
                   <motion.div 
                     initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                     className="w-full lg:w-1/2"
                   >
                     <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden">     
                       <Image
                         src={asset.image || '/images/assets/geometric-bg-3.png'}
                         alt={asset.name}
                         fill
                         unoptimized
                         className="object-cover"
                       />
                       <div className="absolute inset-0 bg-dark/10" />
                     </div>
                   </motion.div>

                   {/* Typography / Content Block */}
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                     className="w-full lg:w-1/2 flex flex-col justify-center"
                   >
                     <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 flex items-center">
                       <span className="w-8 h-px bg-accent mr-4"></span>
                       {asset.type}
                     </span>
                     
                     <h3 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] font-display font-medium text-dark mb-10 text-balance tracking-tight">
                       {asset.name}
                     </h3>
                     
                     <div className="max-w-xl">
                       <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-slate-400 mb-6 font-body">
                         {asset.location}
                       </p>
                       <p className="text-md md:text-body-md text-slate-500 font-body leading-relaxed">
                         {asset.description}
                       </p>
                     </div>
                   </motion.div>

                 </div>
               </div>
             </section>
           );
        })}
      </div>

    </div>
  )
}
