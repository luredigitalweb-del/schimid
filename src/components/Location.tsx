import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { ADDRESS, MAPS_URL, MAPS_EMBED } from '../constants';

export default function Location() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="accent-bar" />
          <h2 className="section-title text-[#0D1220]">Onde estamos</h2>
          <p className="text-[#5A6478] mt-5 text-lg">
            Estamos prontos para receber seu veículo no coração de Pato Branco.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F6FA] border border-black/5 rounded-xl p-8 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-7">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-head font-bold uppercase text-lg tracking-wide mb-2 text-[#15306B]">
                  Endereço
                </h3>
                <p className="text-[#5A6478] leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-7">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-head font-bold uppercase text-lg tracking-wide mb-2 text-[#15306B]">
                  Horário de atendimento
                </h3>
                <p className="text-[#5A6478] leading-relaxed">
                  Segunda a Sexta: 7h45 às 12h <br />
                  13h30 às 18h
                </p>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-start inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#15306B] text-[#15306B] font-head font-bold uppercase tracking-wider text-base rounded-xl transition-all duration-300 hover:bg-[#15306B] hover:text-white"
            >
              <Navigation className="w-5 h-5" /> Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F5F6FA] border border-black/5 rounded-xl overflow-hidden min-h-[360px]"
          >
            <iframe
              title="Localização Mecânica Schimid"
              src={MAPS_EMBED}
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
