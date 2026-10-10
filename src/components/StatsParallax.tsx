import React, { useEffect, useState } from 'react';
import { Star, Shield, Layers, MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';

export const StatsParallax: React.FC = () => {
  const [bgOffset, setBgOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setBgOffset(scrollPos * 0.15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      value: "4.1 / 5.0",
      label: "Nota no Google",
      subtext: `Baseada em ${siteData.googleReviewCount} avaliações reais de clientes`,
      icon: Star,
      iconColor: "text-amber-500",
    },
    {
      value: "Atendimento",
      label: "Consultivo por Biotipo",
      subtext: "Orientação na escolha da firmeza e densidade para sua coluna",
      icon: Shield,
      iconColor: "text-blue-600",
    },
    {
      value: "Solteiro a King",
      label: "Variedade em Camas & Box",
      subtext: "Molas ensacadas, D33/D45, bases articuladas e baús",
      icon: Layers,
      iconColor: "text-amber-600",
    },
    {
      value: "Orçamento Rápido",
      label: "Atendimento no WhatsApp",
      subtext: "Valores, fotos e prazos enviados de forma ágil e prática",
      icon: MessageSquare,
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section id="estatisticas" className="relative py-16 bg-slate-100 overflow-hidden border-y border-slate-200">
      {/* Subtle Parallax Decorative Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          transform: `translateY(${bgOffset}px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-100 ${stat.iconColor} group-hover:bg-amber-50 transition-colors`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {idx === 0 && (
                    <div className="flex items-center gap-0.5 text-amber-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  {stat.value}
                </div>

                <div className="mt-1 text-sm font-semibold text-slate-700">
                  {stat.label}
                </div>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
