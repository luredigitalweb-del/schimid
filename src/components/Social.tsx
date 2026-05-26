import { motion } from 'framer-motion';
import { Instagram, MessageCircle, ArrowRight, Camera, Users, Sparkles } from 'lucide-react';
import Iphone16Pro from './Iphone16Pro';
import { WHATSAPP_URL } from '../constants';

const INSTAGRAM_URL = 'https://instagram.com/mecanicaschimid';

const highlights = [
  {
    icon: Camera,
    title: 'Bastidores reais',
    desc: 'Veja por dentro como cuidamos de cada veículo que entra na oficina.',
  },
  {
    icon: Sparkles,
    title: 'Dicas e novidades',
    desc: 'Conteúdo técnico, alertas de manutenção e novidades em equipamentos.',
  },
  {
    icon: Users,
    title: '+2.4 mil seguidores',
    desc: 'Uma comunidade que confia, recomenda e acompanha nosso trabalho.',
  },
];

export default function Social() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-carbon [background-size:24px_24px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(204,17,22,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(21,48,107,0.22),transparent_55%)]" />
      <div className="absolute -right-32 top-1/3 w-[420px] h-1 bg-accent rotate-[-25deg] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left: iPhone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center order-2 lg:order-1"
          style={{ perspective: 1200 }}
        >
          {/* Decorative glow behind phone */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,17,22,0.3),transparent_60%)] blur-3xl" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[260px] md:w-[320px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
          >
            <Iphone16Pro src="/instagram.jpg" className="w-full h-auto" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-10 -right-2 md:right-6 bg-white text-[#0D1220] rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-50% to-[#d62976] flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-head font-bold text-xs uppercase">@mecanicaschimid</div>
              <div className="text-[10px] text-[#5A6478]">Toca pra seguir</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-16 -left-3 md:left-2 bg-accent text-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-head font-bold uppercase text-xs tracking-wider">Conteúdo novo toda semana</span>
          </motion.div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="accent-bar" />
          <h2 className="section-title">
            Nos siga nas <span className="text-accent">redes sociais</span>
          </h2>
          <p className="text-muted mt-5 text-lg leading-relaxed">
            Acompanhe os bastidores da Schimid no Instagram: trabalhos reais,
            dicas de manutenção, novidades em equipamentos e a rotina de quem
            cuida do seu carro como se fosse próprio.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-4 bg-surface/60 border border-white/8 rounded-xl hover:border-accent/50 transition-colors"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-head font-bold uppercase text-sm tracking-wide mb-1">
                    {h.title}
                  </h3>
                  <p className="text-muted text-sm leading-snug">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-40% to-[#d62976] text-white font-head font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(214,41,118,0.7)] hover:-translate-y-0.5"
            >
              <Instagram className="w-5 h-5" /> Seguir no Instagram
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-head font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 hover:border-accent hover:bg-accent/10"
            >
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
