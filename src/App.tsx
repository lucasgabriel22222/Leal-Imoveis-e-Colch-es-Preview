/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsParallax } from './components/StatsParallax';
import { ProductsSection } from './components/ProductsSection';
import { MattressCalculator } from './components/MattressCalculator';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* 1. NAVBAR (Header Fixo com Barra de Progresso de Scroll) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO (Seção Principal com Parallax Real) */}
        <Hero />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (BANNER PARALLAX) */}
        <StatsParallax />

        {/* 4. SEÇÃO PRODUTOS & CATEGORIAS (Filtros, Medidas e WhatsApp) */}
        <ProductsSection />

        {/* RECOMENDADOR CONSULTIVO POR BIOTIPO */}
        <MattressCalculator />

        {/* 5. SEÇÃO DIFERENCIAIS (Atendimento Técnico e Garantia) */}
        <DifferentialsSection />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <ReviewsSection />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS (Showroom Jardim Imperial e Google Maps) */}
        <LocationSection />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <FinalCta />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />
    </div>
  );
}
