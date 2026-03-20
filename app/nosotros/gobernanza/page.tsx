"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { getStrapiMedia, STRAPI_BASE_URL } from "@/lib/tools";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

export default function GobernanzaPage() {
  const [introText, setIntroText] = useState(
    "Invaca Investment Company mantiene los más altos estándares de gobierno corporativo, transparencia y responsabilidad. Nuestra estructura está diseñada para garantizar decisiones estratégicas que beneficien a todos nuestros stakeholders."
  );
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    getStrapiMedia('/api/governance?populate=Members.Image').then((strapiData) => {
      if (strapiData?.data) {
        if (strapiData.data.Statement) {
          setIntroText(strapiData.data.Statement);
        }
        
        if (strapiData.data.Members) {
          const mappedMembers = strapiData.data.Members.map((member: any) => {
            const imageUrl = member.Image?.url 
              ? `${STRAPI_BASE_URL}${member.Image.url}` 
              : '/images/assets/geometric-bg.jpg';
              
            return {
              id: member.id?.toString() || Math.random().toString(),
              name: member.Name || '',
              title: member.Title || '',
              image: imageUrl,
            };
          });
          setTeamMembers(mappedMembers);
        }
      }
    });
  }, []);

  // Parallax Setup for Hero
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollY, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScrollY, [0, 1], [1, 0]);

  // Split intro text into words for staggered reveal
  const words = introText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[65vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden p-4"
      >
        {/* Background Image Setup */}
        <motion.div
          className="absolute inset-0 z-0 bg-dark"
          style={{ y: heroY }}
        >
          <Image
            src="/images/assets/geometric-bg-3.png"
            alt="Invaca Governance Background"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-90 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-dark/70 mix-blend-multiply" />
        </motion.div>

        <motion.div
          className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-0 lg:mt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block border border-accent text-accent px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
              Estructura Corporativa
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 drop-shadow-xl tracking-tight">
              Gobierno Corporativo
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Marco de supervisión, transparencia y rendición de cuentas
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Box with Word Reveal */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-justify lg:text-center mt-12">
            <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl border-2 border-dark p-10 md:p-20 font-display font-medium text-dark before:absolute before:bottom-[-4px] before:right-[40px] before:w-[120px] before:h-[4px] before:bg-white">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
      </section>

      {/* Corporate Team Grid */}
      <section className="py-20 lg:py-28 pb-40">
        <div className="mx-auto px-4 sm:px-8 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Liderazgo
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-dark tracking-tight">
              Líderes Corporativos
            </h2>
            <div className="w-24 h-[2px] bg-accent mx-auto mt-6" />
          </motion.div>

          {/* Staggered Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mx-auto"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group flex flex-col items-center perspective-1000"
              >
                {/* Image Container with Hover Effect */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-xs bg-neutral-200 cursor-pointer transition-all duration-500"
                >
                  {/* Elegant decorative border */}
                  <div className="absolute inset-0 border-[1px] border-dark/0 z-20 pointer-events-none transition-all duration-500 group-hover:border-accent/40 group-hover:inset-3" />

                  <Image
                    src={member.image || '/images/assets/geometric-bg.jpg'}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                  />

                </motion.div>

                {/* Text Content */}
                <div className="text-center w-full px-4 mt-2 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-display font-medium text-dark mb-2 transition-colors duration-300 group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="text-sm font-body font-bold text-slate-500 tracking-wide uppercase">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
