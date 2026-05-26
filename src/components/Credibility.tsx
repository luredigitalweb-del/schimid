import { motion } from 'framer-motion';
import { Calendar, Car, Layers, Users } from 'lucide-react';
import Counter from './Counter';

const stats = [
  { icon: Calendar, value: 34, suffix: '', label: 'Anos de experiência' },
  { icon: Car, value: 140, prefix: '+', label: 'Carros atendidos / mês' },
  { icon: Layers, value: 11, label: 'Elevadores' },
  { icon: Users, value: 17, label: 'Especialistas' },
];

export default function Credibility() {
  return (
    <section className="relative py-16 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 lg:justify-center"
            >
              <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <s.icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <div>
                <div className="font-head font-bold text-3xl lg:text-5xl leading-none text-[#15306B]">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-[#5A6478] text-xs lg:text-sm uppercase tracking-wider mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
