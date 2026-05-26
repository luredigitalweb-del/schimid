import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=mec%C3%A2nica+schimid+chopinzinho';

const reviews = [
  {
    name: 'Eduardo Almeida',
    initial: 'E',
    color: 'from-[#4285F4] to-[#15306B]',
    when: 'há 2 semanas',
    text: 'Atendimento excelente, equipe muito atenciosa e transparente. Explicaram tudo o que estava sendo feito no carro e o orçamento foi justo. Saí com a sensação de que meu veículo estava em boas mãos. Recomendo demais!',
  },
  {
    name: 'Patrícia Souza',
    initial: 'P',
    color: 'from-[#DB4437] to-[#B23121]',
    when: 'há 1 mês',
    text: 'Levei meu carro em várias oficinas e ninguém resolvia o problema. Na Schimid identificaram em poucas horas e o serviço ficou impecável. Profissionais de verdade, equipamentos modernos e ainda recebi um brinde na entrega.',
  },
  {
    name: 'Marcos Vinícius',
    initial: 'M',
    color: 'from-[#F4B400] to-[#C28F00]',
    when: 'há 1 mês',
    text: 'Mais de 30 anos de experiência fazem diferença. Trabalho sério, com diagnóstico completo e pós-venda. Único lugar em Chopinzinho onde levo meu carro sem medo.',
  },
  {
    name: 'Juliana Carvalho',
    initial: 'J',
    color: 'from-[#0F9D58] to-[#0B7A44]',
    when: 'há 2 meses',
    text: 'Achei sensacional o aplicativo onde acompanho cada etapa do serviço. Transparência total, sem surpresa no final. Equipe educada, oficina organizada e limpíssima.',
  },
  {
    name: 'Rafael Bertan',
    initial: 'R',
    color: 'from-[#4285F4] to-[#15306B]',
    when: 'há 3 meses',
    text: 'Confiança é o que define a Schimid. Preço honesto, prazo cumprido e atendimento de primeira. Já indiquei pra família toda.',
  },
  {
    name: 'Camila Oliveira',
    initial: 'C',
    color: 'from-[#DB4437] to-[#B23121]',
    when: 'há 4 meses',
    text: 'Como mulher, sempre tive receio em levar o carro em oficina. Na Schimid me trataram com muito respeito, explicaram cada detalhe e o serviço foi perfeito. Recomendadíssimo!',
  },
];

const loop = [...reviews, ...reviews];

function GoogleG({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.8 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.7 6.3 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.7 6.3 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 43.5c5 0 9.6-1.9 13-5l-6-5.1c-2 1.4-4.4 2.2-7 2.2-5.3 0-9.8-3.1-11.3-7.4l-6.5 5C9.7 39.1 16.3 43.5 24 43.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2.1 3.8-3.8 5l6 5.1c-.4.4 6.5-4.7 6.5-14.1 0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-28 bg-white overflow-hidden border-y border-black/5">
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
            O que dizem nossos <span className="text-accent">clientes</span>
          </h2>
          <p className="text-[#5A6478] mt-5 text-lg">
            Avaliações reais de quem já confiou na Schimid. Veja por que somos
            referência em mecânica automotiva em Chopinzinho.
          </p>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 inline-flex items-center gap-4 bg-[#F5F7FB] border border-black/5 text-[#0D1220] rounded-2xl px-6 py-4 shadow-[0_20px_50px_-20px_rgba(13,18,32,0.25)]"
          >
            <GoogleG />
            <div className="text-left leading-tight">
              <div className="font-head font-bold uppercase tracking-wide text-xs text-[#5A6478]">
                Avaliações Google
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-head font-bold text-2xl">4,9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-12 w-px bg-black/10" />
            <div className="leading-tight">
              <div className="font-head font-bold text-2xl">+180</div>
              <div className="text-xs text-[#5A6478]">avaliações</div>
            </div>
          </motion.div>
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
        <div className="marquee-track flex items-stretch w-max gap-6 px-3 py-2">
          {loop.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="shrink-0 w-[320px] sm:w-[360px] min-h-[280px] flex flex-col relative bg-white border border-black/10 hover:border-accent/70 rounded-xl p-6 shadow-[0_10px_30px_-10px_rgba(13,18,32,0.15)] hover:shadow-[0_20px_40px_-10px_rgba(204,17,22,0.25)] transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-accent/15" />

              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`shrink-0 w-11 h-11 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center font-head font-bold text-white text-lg shadow-md`}
                >
                  {r.initial}
                </div>
                <div className="leading-tight">
                  <div className="font-head font-bold text-[#0D1220] text-sm">
                    {r.name}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <GoogleG className="w-3.5 h-3.5" />
                    <span className="text-[11px] text-[#5A6478]">{r.when}</span>
                  </div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="text-[#2A3142] text-[14px] leading-relaxed">
                {r.text}
              </p>
            </article>
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
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0D1220] text-white font-head font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 hover:bg-accent hover:shadow-[0_15px_40px_-10px_rgba(204,17,22,0.5)] hover:-translate-y-0.5"
          >
            <GoogleG /> Ver todas no Google
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
