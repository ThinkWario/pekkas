"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-champagne">
      {/* Ethereal Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-brand-rose rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-brand-nude rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-brand-ink/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative"
        >
          <img 
            src="/images/profile.png" 
            alt="YumeTattoos Artist"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-champagne/10 mix-blend-overlay"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl text-brand-ink mb-6 tracking-tight"
        >
          YUME
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-sans text-lg md:text-2xl text-brand-ink/70 max-w-2xl mx-auto leading-relaxed"
        >
          El Arte de la Belleza Natural. <br />
          <span className="italic">Micropigmentación especializada para pecas atemporales.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-widest text-brand-ink/50 font-sans">Desliza para descubrir</span>
            <div className="w-px h-12 bg-brand-ink/30" />
          </div>
        </motion.div>
      </div>

      {/* Placeholder for Remotion cinematic video overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
    </section>
  );
}
