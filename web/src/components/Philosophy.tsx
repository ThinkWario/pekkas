"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-24 px-6 md:py-40 bg-brand-nude/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
            alt="Artistic beauty detail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-brand-ink leading-tight">
            La Filosofía de la <br />
            <span className="italic text-brand-ink/60">Esencia Natural</span>
          </h2>

          <div className="space-y-6 text-lg text-brand-ink/80 font-sans leading-relaxed">
            <p>
              Con más de una década dedicada al arte de la micropigmentación, Yume ha perfeccionado el delicado equilibrio entre la precisión y la naturaleza.
            </p>
            <p>
              El objetivo nunca es enmascarar, sino realzar. Cada peca se coloca con intención, imitando la aleatoriedad orgánica de la naturaleza para crear un look que es únicamente tuyo.
            </p>
            <p className="font-serif italic text-2xl text-brand-ink">
              "La belleza no se trata de la perfección, sino de la autenticidad de los detalles."
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 border border-brand-ink text-brand-ink uppercase tracking-widest text-sm font-sans cursor-pointer hover:bg-brand-ink hover:text-brand-champagne transition-all duration-300"
          >
            Descubre el Arte
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
