import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const comparison = [
  {
    others: 'Sem acompanhamento durante o serviço',
    schimid: 'App em tempo real com cada etapa documentada',
  },
  {
    others: 'Falta de clareza no diagnóstico e no orçamento',
    schimid: 'Transparência total: você sabe o que e por quê',
  },
  {
    others: 'Sem processo definido de entrada e saída',
    schimid: 'Check-in e check-out completos do veículo',
  },
  {
    others: 'Atendimento termina quando o carro sai da oficina',
    schimid: 'Pós-venda ativo para garantir sua satisfação',
  },
  {
    others: 'Equipamentos antigos e peças sem procedência',
    schimid: 'Máquinas certificadas e peças de qualidade',
  },
  {
    others: 'Entrega sem cuidado extra',
    schimid: 'Experiência premium com brindes na entrega',
  },
];

const colVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const leftItem = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const rightItem = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-carbon [background-size:24px_24px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,48,107,0.18),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="accent-bar" />
          <h2 className="section-title">
            Por que escolher a <span className="text-accent">Schimid?</span>
          </h2>
          <p className="text-muted mt-5 text-lg">
            Veja na prática o que separa uma oficina comum da experiência
            premium que entregamos há 34 anos.
          </p>
        </motion.div>

        {/* Headers */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
              <X className="w-4 h-4 text-white/40" strokeWidth={2.5} />
              <span className="font-head font-bold uppercase tracking-[0.2em] text-xs text-white/60">
                Outras Oficinas
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl shadow-[0_10px_30px_-10px_rgba(204,17,22,0.6)]">
              <Check className="w-4 h-4" strokeWidth={2.5} />
              <span className="font-head font-bold uppercase tracking-[0.2em] text-xs">
                Na Schimid
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Center VS */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.25, type: 'spring', stiffness: 180 }}
              className="relative w-16 h-16"
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border-2 border-accent"
                animate={{ scale: [1, 1.7], opacity: [0.65, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border-2 border-accent"
                animate={{ scale: [1, 1.7], opacity: [0.65, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.1 }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    '0 0 18px rgba(204,17,22,0.45)',
                    '0 0 42px rgba(204,17,22,0.85)',
                    '0 0 18px rgba(204,17,22,0.45)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-16 h-16 rounded-full bg-bg border-2 border-accent flex items-center justify-center"
              >
                <motion.span
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="font-head font-bold text-xl text-accent tracking-wider"
                >
                  VS
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Left column */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-surface/40 border border-white/5 rounded-xl p-6 lg:p-8 flex flex-col gap-4"
          >
            {comparison.map((c, i) => (
              <motion.div
                key={`left-${i}`}
                variants={leftItem}
                className="flex items-center gap-3 min-h-[3.5rem]"
              >
                <div className="shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
                  <X className="w-4 h-4 text-white/45" strokeWidth={2.5} />
                </div>
                <p className="text-white/50 text-[15px] leading-snug line-through decoration-white/15">
                  {c.others}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={colVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative bg-gradient-to-br from-primary/20 via-surface to-surface border-2 border-accent/40 rounded-xl p-6 lg:p-8 flex flex-col gap-4 shadow-[0_30px_80px_-20px_rgba(204,17,22,0.35)]"
          >
            <div className="absolute -top-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
            {comparison.map((c, i) => (
              <motion.div
                key={`right-${i}`}
                variants={rightItem}
                className="flex items-center gap-3 min-h-[3.5rem]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.35,
                    delay: 0.2 + i * 0.08,
                    type: 'spring',
                    stiffness: 240,
                  }}
                  className="shrink-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(204,17,22,0.6)]"
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </motion.div>
                <p className="text-white text-[15px] leading-snug font-medium">
                  {c.schimid}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-white/80 text-lg mb-5">
            A diferença está em cada detalhe.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero atendimento premium <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
