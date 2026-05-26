import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ThermometerSun,
  Volume2,
  Lightbulb,
  Footprints,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Câmbio engasgando ou trocando marchas com solavanco?',
    desc: 'Sintoma comum de óleo vencido ou problema interno na transmissão.',
  },
  {
    icon: ThermometerSun,
    title: 'Ar-condicionado parou de gelar como antes?',
    desc: 'Falta de gás, vazamentos ou sistema sujo são as causas mais comuns.',
  },
  {
    icon: Volume2,
    title: 'Barulhos estranhos na suspensão ao passar em buracos?',
    desc: 'Amortecedores, buchas e batentes desgastados comprometem a segurança.',
  },
  {
    icon: Lightbulb,
    title: 'Luz do painel acesa sem motivo aparente?',
    desc: 'Só um diagnóstico eletrônico revela exatamente o que está acontecendo.',
  },
  {
    icon: Footprints,
    title: 'Pneus desgastando de forma irregular?',
    desc: 'Alinhamento e balanceamento fora de ajuste comprometem o controle.',
  },
  {
    icon: Wrench,
    title: 'Freios chiando ou pedal mole demais?',
    desc: 'Pastilhas, discos e fluido pedem atenção imediata para sua segurança.',
  },
];

const loop = [...problems, ...problems];

export default function Problems() {
  return (
    <section className="relative py-24 lg:py-28 bg-white overflow-hidden border-y border-black/5">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(21,48,107,0.07)_1px,transparent_0)] [background-size:24px_24px] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,17,22,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="accent-bar" />
          <h2 className="section-title text-[#0D1220]">
            Você já passou <span className="text-accent">por isso?</span>
          </h2>
          <p className="text-[#5A6478] mt-5 text-lg">
            Reconhece algum desses sinais no seu carro? Na Schimid identificamos
            a causa raiz e resolvemos com técnica, equipamentos certificados e
            transparência total.
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max gap-6 px-3">
          {loop.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="shrink-0 w-[300px] sm:w-[340px] bg-white border border-black/10 hover:border-accent/70 rounded-xl p-6 shadow-[0_10px_30px_-10px_rgba(13,18,32,0.15)] hover:shadow-[0_20px_40px_-10px_rgba(204,17,22,0.25)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-accent" strokeWidth={1.8} />
              </div>
              <h3 className="font-head font-bold uppercase text-base leading-tight mb-3 tracking-wide min-h-[3rem] text-[#0D1220]">
                {p.title}
              </h3>
              <p className="text-[#5A6478] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#3A4356] mb-5 text-lg">
            Qualquer um desses sinais merece atenção imediata.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Diagnosticar meu carro <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
