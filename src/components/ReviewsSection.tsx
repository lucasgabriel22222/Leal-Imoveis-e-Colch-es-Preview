import React from 'react';
import { Star, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { siteData } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-slate-100/70 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Score Badge */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 mb-4">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-bold text-slate-900">{siteData.googleRating} de 5.0</span>
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">{siteData.googleReviewCount} avaliações no Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Opiniões reais registradas por quem comprou colchões, camas box e sistemas de dormir conosco em Cuiabá.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-slate-200 absolute top-6 right-6" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? 'fill-amber-500 text-amber-500'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">
                    {rev.rating}.0
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Verification Tag */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {rev.tag}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-500">
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>Avaliações públicas verificáveis no perfil do Google Meu Negócio em Cuiabá - MT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
