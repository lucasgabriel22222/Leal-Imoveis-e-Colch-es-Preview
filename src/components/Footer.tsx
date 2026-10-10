import React from 'react';
import { Bed, MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { siteData, getWhatsAppUrl } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 text-white font-heading font-extrabold text-lg tracking-tight mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                <Bed className="w-4 h-4" />
              </div>
              <span>LEAL MÓVEIS E COLCHÕES</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Especialistas em colchões de molas ensacadas, espumas ortopédicas de alta densidade e camas box em Cuiabá - MT.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-900">
              <div className="text-xs text-amber-500 font-semibold">
                Avaliação no Google: {siteData.googleRating} de 5.0 estrelas
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-amber-400 transition-colors">Colchões e Camas</a>
              </li>
              <li>
                <a href="#recomendador" className="hover:text-amber-400 transition-colors">Recomendador por Biotipo</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais e Garantia</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-amber-400 transition-colors">Avaliações do Google</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização e Horários</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contato & WhatsApp
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteData.phoneFormatted}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Comercial
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteData.hoursText}</span>
              </li>
            </ul>
          </div>

          {/* Store Address */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
              Loja Física
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {siteData.addressFull}
            </p>
            <a
              href={siteData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Abrir rota no Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteData.companyName}. Todos os direitos reservados.</p>
          <p>Cuiabá - MT · CEP {siteData.cep} · Loja de Colchões e Camas Box</p>
        </div>
      </div>
    </footer>
  );
};
