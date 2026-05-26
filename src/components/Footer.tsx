import { Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          <div>
            <Logo />
            <p className="text-muted mt-5 text-sm leading-relaxed max-w-xs">
              Qualidade, transparência e confiança desde 1990.
            </p>
          </div>

          <div>
            <h4 className="font-head font-bold uppercase text-sm tracking-[0.2em] mb-5">
              Links rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { l: 'Serviços', h: '#servicos' },
                { l: 'Sobre', h: '#sobre' },
                { l: 'Contato', h: '#contato' },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="text-muted hover:text-white transition-colors text-sm">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-head font-bold uppercase text-sm tracking-[0.2em] mb-5">
              Redes
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mecanicaschimid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted text-sm mt-5">@mecanicaschimid</p>
          </div>
        </div>

        <p className="text-muted text-xs text-center mt-8 tracking-wider">
          © 2025 Mecânica Schimid. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
