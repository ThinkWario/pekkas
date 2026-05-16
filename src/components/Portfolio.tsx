"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RadialScrollGallery } from "./ui/RadialScrollGallery";

const projects = [
  {
    id: 1,
    title: "El brillo natural de una tarde de verano.",
    cat: "Permanente",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce38?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Sutil. Sin fisuras. Simplemente tú.",
    cat: "Semi-Permanente",
    img: "https://images.unsplash.com/photo-1522337360788-8f667779775d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Naturaleza, refinada.",
    cat: "Permanente",
    img: "https://images.unsplash.com/photo-1509909604465-6a9967724701?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "La confianza de un beso natural del sol.",
    cat: "Semi-Permanente",
    img: "https://images.unsplash.com/photo-1595959176188-67475797999a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Un realce delicado, un sentimiento atemporal.",
    cat: "Permanente",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-brand-champagne relative overflow-hidden">
      <div className="relative z-10 text-center pt-24 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand-ink/50 font-sans font-medium">
            Galería
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-ink leading-tight">
            La Galería de <br />
            <span className="italic text-brand-ink/60">Momentos Sun-Kissed</span>
          </h2>
          <p className="max-w-xl mx-auto text-brand-ink/70 font-sans text-lg leading-relaxed">
            Una colección curada de transformaciones. Cada peca es un testimonio del equilibrio entre la precisión y la naturaleza.
          </p>
        </motion.div>
      </div>

      <RadialScrollGallery
        baseRadius={500}
        mobileRadius={240}
        visiblePercentage={50}
        scrollDuration={3000}
        className="bg-brand-champagne"
      >
        {(hoveredIndex) =>
          projects.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={project.id}
                className="group relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] overflow-hidden rounded-3xl bg-white shadow-2xl border border-brand-ink/10 transition-all duration-500"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                      isActive ? "scale-110 blur-0" : "scale-100 blur-[1px] grayscale-[20%]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent opacity-60" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-brand-ink font-sans font-semibold">
                      {project.cat}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-brand-ink text-brand-champagne flex items-center justify-center transition-all duration-500 ${
                        isActive ? "opacity-100 rotate-0 scale-110" : "opacity-0 -rotate-45 scale-75"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <h3 className="text-2xl font-serif text-white leading-tight">
                      {project.title}
                    </h3>
                    <div
                      className={`h-0.5 bg-brand-champagne mt-2 transition-all duration-500 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>

      <div className="h-40 flex items-center justify-center bg-brand-champagne">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-2"
        >
          <span className="text-xs uppercase tracking-widest text-brand-ink/40 font-sans">
            Scroll to explore the essence
          </span>
          <div className="w-px h-12 bg-brand-ink/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
