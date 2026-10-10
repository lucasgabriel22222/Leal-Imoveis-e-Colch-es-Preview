import React from 'react';
import { MessageCircle, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, siteData } from '../data/siteData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-6">
          <span>Atendimento Direto sem Intermediários</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl mx-auto leading-tight text-balance">
          Procurando o colchão ideal para o seu quarto?
        </h2>

        <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Fale com nossa equipe pelo WhatsApp, tire suas dúvidas e solicite um orçamento exclusivo na Leal Móveis e Colchões.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de um orçamento exclusivo de colchão na Leal Móveis e Colchões.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-xl transition-all shadow-xl shadow-amber-950/50 hover:scale-105 border border-amber-500/40"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Quiet Footnote Trust Info */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Resposta rápida durante horário comercial</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia de fábrica e entrega em Cuiabá - MT</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span>{siteData.phoneFormatted}</span>
        </div>
      </div>
    </section>
  );
};
