import { motion } from 'framer-motion';
import { Trophy, Building2, Users, Wrench } from 'lucide-react';

const badges = [
  { icon: Building2, value: '1.400m²', label: 'Estrutura' },
  { icon: Wrench, value: '11', label: 'Elevadores' },
  { icon: Users, value: '17', label: 'Equipe' },
  { icon: Trophy, value: '34', label: 'Anos' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-white border-y border-black/5">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(21,48,107,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-70" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="accent-bar" />
          <h2 className="section-title text-[#0D1220]">
            Uma história de 34 anos construída com trabalho e família
          </h2>
          <div className="mt-7 space-y-4 text-[#5A6478] text-lg leading-relaxed">
            <p>
              Empresa familiar fundada pelo pai, hoje conduzida pelos dois
              filhos mecânicos na gestão — uma continuidade que mantém viva
              a cultura de cuidado e compromisso com cada cliente.
            </p>
            <p>
              Desde 2009 com estrutura própria em Pato Branco, ocupamos mais
              de 1.400m² de área dedicada à manutenção automotiva, com
              organização de ponta e processos definidos da entrada à saída
              do veículo.
            </p>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-accent text-white rounded-xl">
            <Trophy className="w-5 h-5" />
            <span className="font-head font-bold uppercase text-sm tracking-wider">
              2x Melhor Oficina da Cidade — Prêmio Oficial
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-xl overflow-hidden border border-black/10 shadow-[0_30px_80px_-20px_rgba(13,18,32,0.35)]">
            <img
              src="/sobre.jpg"
              alt="Estrutura da Mecânica Schimid em Pato Branco"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1220]/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-white rounded-xl">
              <span className="font-head font-bold uppercase text-xs tracking-[0.2em]">
                Desde 1990
              </span>
            </div>
          </div>

          <div className="relative -mt-10 mx-3 grid grid-cols-4 bg-white border border-black/10 rounded-xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(13,18,32,0.25)]">
            {badges.map((b, i) => (
              <div
                key={b.label}
                className={`p-3 md:p-4 text-center ${
                  i < badges.length - 1 ? 'border-r border-black/10' : ''
                }`}
              >
                <b.icon className="w-4 h-4 md:w-5 md:h-5 text-accent mx-auto mb-1.5" strokeWidth={1.8} />
                <div className="font-head font-bold text-base md:text-xl leading-none text-[#15306B]">
                  {b.value}
                </div>
                <div className="text-[#5A6478] text-[9px] md:text-[10px] uppercase tracking-wider mt-1 font-medium">
                  {b.label}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent rounded-xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-xl -z-10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
