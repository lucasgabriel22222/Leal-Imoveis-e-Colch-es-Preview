import React from 'react';
import { Bed, ShieldCheck, Truck, MapPin, ThumbsUp, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Bed,
  ShieldCheck,
  Truck,
  MapPin,
  ThumbsUp,
  Clock,
};

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Vantagens Reais e Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Por Que Escolher a Leal Móveis e Colchões?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Combinamos atendimento técnico presencial no Jardim Imperial com a praticidade do atendimento ágil via WhatsApp.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500 group-hover:text-amber-700 transition-colors">
                  <span>Garantia de Qualidade Leal</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
