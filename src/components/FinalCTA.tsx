import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080C18]" />
      <div className="absolute inset-0 bg-carbon [background-size:24px_24px] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(21,48,107,0.25)_50%,transparent_60%)]" />
      <div className="absolute -left-32 top-1/2 w-[500px] h-1 bg-accent rotate-[-20deg] opacity-70 shadow-[0_0_40px_rgba(204,17,22,0.6)]" />
      <div className="absolute -right-32 bottom-1/4 w-[400px] h-0.5 bg-accent/60 rotate-[-20deg]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center"
      >
        <span className="inline-block w-12 h-1 bg-accent mb-6" />
        <h2 className="font-head font-bold uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
          Pronto para agendar seu serviço?
        </h2>
        <p className="text-muted mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Fale agora pelo WhatsApp e garanta sua vaga na agenda.
        </p>
        <div className="mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-6 h-6" /> Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
