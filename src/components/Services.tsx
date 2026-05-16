"use client";

import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ServiceCardProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  index: number;
}

function ServiceCard({ title, description, beforeImage, afterImage, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-brand-ink/10 hover:border-brand-ink/30 transition-colors duration-500"
    >
      <div className="space-y-4">
        <h3 className="font-serif text-3xl text-brand-ink">{title}</h3>
        <p className="text-brand-ink/70 font-sans leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          labelBefore="Original"
          labelAfter="Realzado"
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      title: "El Camino Eterno",
      description: "Diseñado para quienes buscan un resplandor sun-kissed de por vida. Pigmento de alta precisión que imita las pecas naturales con una elegancia eterna.",
      beforeImage: "/images/pekkas_1_before.png",
      afterImage: "/images/pekkas_1.png",
    },
    {
      title: "El Camino Evolutivo",
      description: "Una belleza delicada y en evolución. Perfecto para quienes desean un look natural que se desvanece con gracia, permitiendo ajustes estacionales.",
      beforeImage: "/images/pekkas_2_before.png",
      afterImage: "/images/pekkas_2.png",
    },
  ];

  return (
    <section className="py-24 px-6 md:py-40 bg-brand-champagne">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-brand-ink mb-6"
          >
            El Ritual de las <br />
            <span className="italic text-brand-ink/60">Pecas Naturales</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-brand-ink/30 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
