import React, { useState } from 'react';
import { Bed, CheckCircle2, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/siteData';

export const MattressCalculator: React.FC = () => {
  const [userType, setUserType] = useState<'individual' | 'casal'>('casal');
  const [weightRange, setWeightRange] = useState<'leve' | 'medio' | 'pesado'>('medio');
  const [firmness, setFirmness] = useState<'firme' | 'medio' | 'macio'>('medio');
  const [sizePreference, setSizePreference] = useState<'queen' | 'casal' | 'king' | 'solteiro'>('queen');

  const getRecommendation = () => {
    if (userType === 'casal') {
      if (weightRange === 'pesado' || firmness === 'firme') {
        return {
          title: "Colchão Molas Ensacadas Pocket Extra Suporte (Euro Top Firme)",
          tech: "Molas Ensacadas Individuais de Alto Calibre com Espuma D33/D45",
          reason: "Indispensável para casais com biotipos diferentes. As molas ensacadas garantem que o movimento de uma pessoa não seja sentido pela outra, enquanto o reforço estrutural sustenta com ergonomia.",
          suggestedSize: sizePreference === 'king' ? "King Size (1,93m x 2,03m)" : "Queen Size (1,58m x 1,98m)",
        };
      }
      return {
        title: "Colchão Molas Ensacadas com Pillow Top Acolchoado",
        tech: "Molas Pocket Independentes com Camada de Conforto Anatômica",
        reason: "Perfeita distribuição de pontos de pressão nos ombros e quadril, mantendo a coluna em linha reta durante a noite e eliminando ruídos.",
        suggestedSize: sizePreference === 'king' ? "King Size (1,93m x 2,03m)" : "Queen Size (1,58m x 1,98m)",
      };
    } else {
      // Individual
      if (firmness === 'firme' || weightRange === 'pesado') {
        return {
          title: "Colchão Espuma D33 ou D45 Ortopédico Certificado",
          tech: "Espuma de Alta Densidade com Suporte Firme e Estável",
          reason: "Ideal para quem busca sustentação precisa da região lombar e prevenção de dores na coluna, com durabilidade estendida.",
          suggestedSize: sizePreference === 'casal' ? "Casal (1,38m x 1,88m)" : "Solteiro (0,88m x 1,88m)",
        };
      }
      return {
        title: "Colchão Molas Ensacadas Solteiro ou Espuma D33 Conforto",
        tech: "Molas Pocket Individuais ou Espuma Selada D33",
        reason: "Excelente adaptação anatômica ao contorno do corpo, oferecendo maciez equilibrada sem abrir mão do suporte essencial.",
        suggestedSize: sizePreference === 'casal' ? "Casal (1,38m x 1,88m)" : "Solteiro (0,88m x 1,88m)",
      };
    }
  };

  const rec = getRecommendation();
  const whatsappMsg = `Olá! Utilizei o recomendador no site da Leal Móveis e Colchões: procuro um colchão para ${userType === 'casal' ? 'Casal' : 'Solteiro'}, peso ${weightRange === 'pesado' ? 'acima de 100kg' : weightRange === 'medio' ? 'entre 80kg e 100kg' : 'até 80kg'}, tamanho ${sizePreference}. O sistema recomendou o ${rec.title}. Gostaria de ver valores e condições!`;

  return (
    <section id="recomendador" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consultoria Técnica de Dormir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
            Descubra o Colchão Ideal para o Seu Biotipo
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base text-balance">
            Selecione suas preferências e veja a indicação técnica recomendada pela equipe da Leal Móveis e Colchões antes de falar com nosso consultor no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: User Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  1. Quem vai utilizar o colchão?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType('casal')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                      userType === 'casal'
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                        : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Casal (Duas pessoas)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('individual')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                      userType === 'individual'
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                        : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    Solteiro / Uso individual
                  </button>
                </div>
              </div>

              {/* Step 2: Weight Range */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  2. Faixa de peso média (ou da pessoa mais pesada):
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'leve', label: 'Até 80 kg' },
                    { id: 'medio', label: '80 a 110 kg' },
                    { id: 'pesado', label: 'Acima de 110 kg' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWeightRange(w.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        weightRange === w.id
                          ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Firmness preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  3. Preferência de sensação ao deitar:
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'firme', label: 'Mais Firme (Ortopédico)' },
                    { id: 'medio', label: 'Intermediário Equilibrado' },
                    { id: 'macio', label: 'Macio com Sustentação' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFirmness(f.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        firmness === f.id
                          ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Desired size */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                  4. Tamanho de cama desejado:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'solteiro', label: 'Solteiro' },
                    { id: 'casal', label: 'Casal Padrão' },
                    { id: 'queen', label: 'Queen Size' },
                    { id: 'king', label: 'King Size' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSizePreference(s.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                        sizePreference === s.id
                          ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:bg-slate-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
              <span>Orientação baseada nas tabelas técnicas de densidade e molejo</span>
              <span className="text-amber-400 font-semibold">Leal Colchões Cuiabá</span>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-850 rounded-2xl p-6 sm:p-8 border border-amber-500/30 flex flex-col justify-between shadow-xl relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Recomendação Indicada
              </span>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-4">
                <Bed className="w-5 h-5" />
              </div>

              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">
                {rec.tech}
              </span>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-2 leading-tight">
                {rec.title}
              </h3>

              <div className="mt-3 text-xs font-mono text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/60 inline-block">
                Medida indicada: {rec.suggestedSize}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {rec.reason}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-amber-600 hover:bg-amber-500 transition-all shadow-lg shadow-amber-950/40 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Solicitar Orçamento Deste Modelo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Envie suas respostas direto para um consultor e tire dúvidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
