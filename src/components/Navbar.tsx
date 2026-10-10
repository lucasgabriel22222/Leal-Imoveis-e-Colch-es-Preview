import React, { useState, useEffect } from 'react';
import { Bed, MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';
import { siteData, getWhatsAppUrl } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Recomendador', href: '#recomendador' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-slate-900 transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Header Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-xs py-3'
            : 'backdrop-blur-sm bg-white/90 border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 text-slate-950 font-heading font-extrabold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 group"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-500 flex items-center justify-center shadow-xs group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Bed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight text-slate-900 font-bold">LEAL MÓVEIS</span>
                <span className="text-[10px] tracking-widest text-amber-700 font-semibold uppercase -mt-0.5">E Colchões Cuiabá</span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-amber-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de consultar os modelos de colchões e solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 border border-slate-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Pedir Orçamento</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da loja"
                className="sm:hidden p-2 text-white bg-slate-900 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-white/98 border-b border-slate-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-0"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de falar com a equipe da Leal Móveis e Colchões.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  Jardim Imperial, Cuiabá
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {siteData.phoneFormatted}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
