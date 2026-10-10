import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, ExternalLink, MessageCircle, Navigation } from 'lucide-react';
import { siteData, isStoreOpen, getWhatsAppUrl } from '../data/siteData';

export const LocationSection: React.FC = () => {
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, statusText: 'Consultando horário...' });

  useEffect(() => {
    setStoreStatus(isStoreOpen());
    const interval = setInterval(() => {
      setStoreStatus(isStoreOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            <span>Visite Nosso Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Nossa Loja em Cuiabá
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Venha experimentar a sensação de conforto dos nossos colchões e camas box pessoalmente no Jardim Imperial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Practical Info Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              {/* Store Status Indicator */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      storeStatus.isOpen ? 'bg-emerald-500 ring-4 ring-emerald-100' : 'bg-slate-400'
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-900">
                    {storeStatus.statusText}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Horário Local (MT)</span>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Endereço Completo</h4>
                  <p className="text-sm text-slate-700 mt-1 leading-snug">
                    {siteData.addressFull}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Ponto de referência: Principal via comercial do Jardim Imperial
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 text-amber-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Telefone e WhatsApp</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {siteData.phoneFormatted}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Atendimento ágil com fotos, vídeos dos produtos e envio de orçamentos
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Horário de Funcionamento</h4>
                  <p className="text-sm text-slate-800 mt-1 font-medium">
                    {siteData.hoursText}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {siteData.sundayText}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Como Chegar via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de saber como chegar na loja física no Jardim Imperial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xs min-h-[360px] lg:min-h-full flex flex-col">
            <iframe
              title="Localização da Leal Móveis e Colchões no Google Maps em Cuiabá"
              src={siteData.mapsEmbedSrc}
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
