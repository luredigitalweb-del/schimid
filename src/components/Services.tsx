import { motion } from 'framer-motion';
import {
  Droplet,
  Snowflake,
  Crosshair,
  Disc3,
  GaugeCircle,
  ScanLine,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

type Service = {
  icon: typeof Droplet;
  category: string;
  title: string;
  bullets: string[];
  image?: string;
};

const services: Service[] = [
  {
    icon: Droplet,
    category: 'Transmissão',
    title: 'Troca de Óleo do Câmbio Automático',
    bullets: [
      'Óleo homologado na viscosidade exata',
      'Equipamento de diálise/transfusão de última geração',
      'Verificação completa via Scanner OEM',
    ],
    image: '/servicos/cambio.jpg',
  },
  {
    icon: Snowflake,
    category: 'Climatização',
    title: 'Ar-Condicionado Automotivo',
    bullets: [
      'Máquina recicladora certificada',
      'Higienização completa do sistema',
      'Detecção de vazamentos com UV',
    ],
    image: '/servicos/ar-condicionado.jpg',
  },
  {
    icon: Crosshair,
    category: 'Geometria',
    title: 'Alinhamento e Balanceamento 3D',
    bullets: [
      'Sensores 3D de alta precisão',
      'Cambagem, cáster e convergência',
      'Balanceamento dinâmico das rodas',
    ],
    image: '/servicos/alinhamento.jpg',
  },
  {
    icon: Disc3,
    category: 'Segurança',
    title: 'Suspensão e Freios',
    bullets: [
      'Inspeção completa de amortecedores e buchas',
      'Pastilhas e discos com peças de qualidade',
      'Análise de fluido e linhas hidráulicas',
    ],
    image: '/servicos/suspensao-freios.jpg',
  },
  {
    icon: GaugeCircle,
    category: 'Manutenção',
    title: 'Troca de Óleo do Motor',
    bullets: [
      'Lubrificantes premium para cada motor',
      'Filtros originais de fábrica',
      'Reset de revisão no painel',
    ],
    image: '/servicos/oleo-motor.jpg',
  },
  {
    icon: ScanLine,
    category: 'Eletrônica',
    title: 'Diagnóstico Eletrônico',
    bullets: [
      '5 scanners profissionais com ampla cobertura',
      'Leitura em tempo real de todos os módulos',
      'Laudo técnico detalhado para decisão',
    ],
    image: '/servicos/diagnostico.jpg',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 text-center mx-auto"
        >
          <span className="accent-bar" />
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="text-muted mt-5 text-lg">
            Estrutura completa e equipe especializada para cuidar de cada
            sistema do seu veículo com a precisão que ele merece.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -4 }}
              className="group bg-white text-[#0D1220] rounded-xl overflow-hidden border border-accent/20 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.55)] flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F0F2F8]">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(21,48,107,0.15),transparent_70%)]">
                    <s.icon className="w-20 h-20 text-[#15306B]/30" strokeWidth={1} />
                  </div>
                )}
                <span className="absolute top-3 right-3 font-head font-bold text-2xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-head font-bold uppercase text-lg leading-tight tracking-tight mb-3 min-h-[3rem]">
                  {s.title}
                </h3>
                <ul className="space-y-1.5 mb-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[13px] text-[#3A4356] leading-snug"
                    >
                      <span className="shrink-0 mt-1.5 w-2.5 h-0.5 bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white font-head font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 hover:bg-[#a50d12]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar avaliação
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar orçamento <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
