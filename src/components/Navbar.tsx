import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_URL } from '../constants';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? 'shadow-[0_4px_24px_-8px_rgba(0,0,0,0.18)] border-b border-black/5 py-2.5'
          : 'py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        <Logo variant="bare" />

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-head uppercase tracking-wider text-sm font-semibold text-[#15306B] hover:text-accent relative group transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary !py-3 !px-5 !text-sm"
          >
            Agendar agora
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 text-[#15306B]"
            aria-label="Abrir menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white z-50 lg:hidden p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <Logo variant="bare" />
                <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-[#15306B]">
                  <X className="w-7 h-7" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-head uppercase text-xl tracking-wider border-b border-black/10 text-[#15306B]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto"
              >
                Agendar agora
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
