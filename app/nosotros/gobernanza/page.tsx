"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

const introText =
  "Invaca Investment Company mantiene los más altos estándares de gobierno corporativo, transparencia y responsabilidad. Nuestra estructura está diseñada para garantizar decisiones estratégicas que beneficien a todos nuestros stakeholders.";

export default function GobernanzaPage() {
  const teamMembers: TeamMember[] = [
    {
      id: "member-1",
      name: "Luis Carlos Serra Carmona",
      title: "Presidente",
      image: "/images/assets/geom-2.jpg",
    },
    {
      id: "member-2",
      name: "Gabriel Roig",
      title: "VP Ejecutivo",
      image: "/images/assets/bg-ivc-4.jpg",
    },
    {
      id: "member-3",
      name: "Alfredo Sayegh",
      title: "VP Operaciones",
      image: "/images/assets/saman-ivc-1.jpg",
    },
    {
      id: "member-4",
      name: "Flavia D'Ascoli",
      title: "VP Consultoría Jurídica",
      image: "/images/assets/geometric-bg-2.jpg",
    },
    {
      id: "member-5",
      name: "Maria Andrade",
      title: "VP Comercialización",
      image: "/images/assets/bg-ivc-3.jpg",
    },
    {
      id: "member-6",
      name: "Rina Morillo",
      title: "VP Comunicaciones",
      image: "/images/assets/geometric-bg.jpg",
    },
    {
      id: "member-7",
      name: "Leyssand Lobo",
      title: "VP Presupuesto",
      image: "/images/assets/geom-2.jpg",
    },
    {
      id: "member-8",
      name: "Elsy Diaz",
      title: "Gte. de Finanzas Corporativas",
      image: "/images/assets/saman-ivc-1.jpg",
    },
    {
      id: "member-9",
      name: "Roisi Franquiz",
      title: "Gte. de Impuestos",
      image: "/images/assets/geometric-bg-2.jpg",
    },
    {
      id: "member-10",
      name: "Emmanuel Pineda",
      title: "Gte. de Sistemas/IA",
      image: "/images/assets/bg-ivc-3.jpg",
    },
    {
      id: "member-11",
      name: "Valentina Conde",
      title: "Gte. de Proyectos",
      image: "/images/assets/geometric-bg.jpg",
    },
  ];

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
        className="relative h-[70vh] md:h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden p-4"
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
          className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-20"
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
              Gobernanza
            </h1>
            <p className="text-lg md:text-2xl text-cream-100/90 font-body font-light max-w-3xl mx-auto drop-shadow-md">
              Dirección corporativa y principios rectores
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Box with Word Reveal */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-12">
            <h2 className="relative inline-block text-2xl md:text-4xl lg:text-[2.5rem] border-2 border-dark/10 p-10 md:p-20 font-display font-medium text-dark leading-relaxed before:absolute before:bottom-[-4px] before:right-[40px] before:w-[120px] before:h-[4px] before:bg-white">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 max-w-7xl mx-auto"
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
                  <div className="absolute inset-0 border-[1px] border-dark/10 z-20 pointer-events-none transition-all duration-500 group-hover:border-accent/40 group-hover:inset-3" />

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-110"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-dark/20 transition-colors duration-500 group-hover:bg-transparent z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />
                </motion.div>

                {/* Text Content */}
                <div className="text-center w-full px-4 mt-2">
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
