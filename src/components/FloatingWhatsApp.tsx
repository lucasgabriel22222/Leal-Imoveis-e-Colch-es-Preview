import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const whatsappUrl = getWhatsAppUrl(
    "Olá! Vim pelo site e gostaria de um orçamento de colchões na Leal Móveis e Colchões."
  );

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Tooltip on hover / persistent bubble until dismissed */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-slate-700/80 animate-in fade-in slide-in-from-right-3 duration-300">
          <span>Tire suas dúvidas no WhatsApp!</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Leal Móveis e Colchões no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl shadow-emerald-950/40 transition-all duration-300 hover:scale-110 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
};
