import { motion } from 'framer-motion';
import { Award, ArrowRight, Wrench } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/sobre.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-bg/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/45 to-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-bg/35" />
      <div className="absolute inset-0 bg-carbon [background-size:24px_24px] opacity-25" />

      {/* Brand color glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(21,48,107,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(204,17,22,0.22),transparent_55%)]" />

      {/* Decorative diagonal red */}
      <div className="absolute -right-32 top-1/4 w-[520px] h-1.5 bg-accent rotate-[-30deg] opacity-90 shadow-[0_0_40px_rgba(204,17,22,0.7)]" />
      <div className="absolute -right-20 top-1/4 mt-10 w-[360px] h-0.5 bg-accent/70 rotate-[-30deg]" />

      {/* Left vertical accent */}
      <div className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-gradient-to-b from-transparent via-accent to-transparent hidden md:block" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full flex flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 bg-surface/80 backdrop-blur border border-accent/40 rounded-xl mb-7"
        >
          <Award className="w-4 h-4 text-accent" />
          <span className="text-xs font-head font-semibold uppercase tracking-[0.2em]">
            Melhor Oficina de Pato Branco
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-head font-bold uppercase text-[2.6rem] sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
        >
          34 anos cuidando do seu carro com
          <span className="text-accent"> precisão </span>
          e
          <span className="text-accent"> confiança</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          Oficina completa em Pato Branco com mais de 1.400m², 11 elevadores,
          17 especialistas e equipamentos de última geração.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar serviço <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/80 bg-white/5 backdrop-blur text-white font-head font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 hover:bg-white hover:text-bg"
          >
            <Wrench className="w-5 h-5" /> Ver serviços
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 hidden md:flex items-center justify-center gap-3 text-white/60 text-sm"
        >
          <div className="h-px w-12 bg-white/40" />
          <span className="uppercase tracking-[0.3em] text-xs">Desde 1990 · Pato Branco – PR</span>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </section>
  );
}
