import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { siteData, siteImages, getWhatsAppUrl } from '../data/siteData';

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax rate factor 0.35
      setOffsetY(window.scrollY * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Real Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[10%] pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${offsetY}px)`,
        }}
      >
        <img
          src={siteImages.hero}
          alt="Quarto moderno e acolhedor com colchão de alto padrão em Cuiabá"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {/* Measured Contrast Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/90 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Superior Kicker / Regional Trust Tag (Zero Pill Discipline - clean unboxed) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Loja de Colchões em Cuiabá - MT · Jardim Imperial</span>
        </div>

        {/* H1 Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.15] max-w-4xl text-balance">
          Colchões de Alta Qualidade, Conforto Superior e Camas Box em Cuiabá
        </h1>

        {/* Objective Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed text-balance">
          Modelos em molas ensacadas individuais, espumas ortopédicas D33 e D45,
          bases box reforçadas e consultoria especializada para o seu biotipo na Av. das Palmeiras.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de falar com a equipe da Leal Móveis e Colchões e solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-xl transition-all shadow-lg shadow-amber-900/30 hover:scale-[1.02] border border-amber-500/50"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>

          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-slate-100 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl transition-all border border-white/25 hover:border-white/40"
          >
            <span>Ver Modelos de Colchões</span>
          </a>
        </div>

        {/* Quiet Trust Anchors */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia oficial de fábrica</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Entrega e montagem em Cuiabá</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Atendimento direto pelo WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#estatisticas"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        aria-label="Rolar para estatísticas e produtos"
      >
        <span className="text-[11px] font-medium uppercase tracking-widest text-slate-300">Explorar</span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xs animate-bounce">
          <ArrowDown className="w-4 h-4 text-amber-400" />
        </div>
      </a>
    </section>
  );
};
