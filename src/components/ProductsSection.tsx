import React, { useState } from 'react';
import { MessageCircle, Check, Info, Maximize2, ShieldCheck, Ruler } from 'lucide-react';
import { siteData, ProductItem, getWhatsAppUrl } from '../data/siteData';

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Modelos' },
    { id: 'molas', label: 'Molas Ensacadas' },
    { id: 'espuma', label: 'Espuma Alta Densidade' },
    { id: 'box', label: 'Camas Box & Bases' },
    { id: 'acessorios', label: 'Travesseiros & Acessórios' },
  ];

  const filteredProducts = activeCategory === 'todos'
    ? siteData.products
    : siteData.products.filter(p => p.category === activeCategory);

  const dimensionsList = [
    { title: 'Solteiro', dim: '0,88 m × 1,88 m', detail: 'Ideal para quartos compactos e uso individual' },
    { title: 'Casal Padrão', dim: '1,38 m × 1,88 m', detail: 'Medida tradicional para casais' },
    { title: 'Queen Size', dim: '1,58 m × 1,98 m', detail: 'Conforto intermediário com maior amplitude' },
    { title: 'King Size', dim: '1,93 m × 2,03 m', detail: 'Máximo espaço e liberdade de descanso' },
  ];

  return (
    <section id="produtos" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
            <span>Catálogo Completo · Cuiabá MT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            Nossa Linha de Colchões e Camas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Tecnologia de molas ensacadas independentes e espumas com controle de densidade,
            planejadas para proporcionar suporte anatômico e sono reparador todas as noites.
          </p>
        </div>

        {/* Functional Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 hover:border-slate-300"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Text Tag (anti-slop restraint) */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide">
                    {product.badge}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-800 shadow-xs backdrop-blur-xs transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                  title="Ver especificações e medidas"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Detalhes</span>
                </button>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category and Highlight */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">{product.categoryLabel}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-medium truncate">{product.specs.comfort}</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Quick Specs Pill-Free */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium text-slate-900">Suporte:</span>
                      <span className="truncate">{product.specs.support}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="font-medium text-slate-900">Garantia:</span>
                      <span className="truncate">{product.specs.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de consultar o preço e disponibilidade do modelo: ${product.name} na Leal Móveis e Colchões.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-amber-600 transition-colors shadow-xs group-hover:shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Consultar Preço no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guia Rápido de Dimensões (Cuiabá) */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Tamanhos Padrão de Colchões Disponíveis</h3>
              <p className="text-xs text-slate-500">Confira as medidas padrão para planejar o espaço do seu quarto</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dimensionsList.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-sm text-slate-900">{item.title}</div>
                <div className="text-amber-700 font-mono font-semibold text-xs mt-1">{item.dim}</div>
                <div className="text-slate-500 text-xs mt-1 leading-snug">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-1/2 aspect-4/3 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                  {selectedProduct.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {selectedProduct.shortDesc}
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900">Suporte de Carga:</span>{' '}
                    <span className="text-slate-700">{selectedProduct.specs.support}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Sensação de Conforto:</span>{' '}
                    <span className="text-slate-700">{selectedProduct.specs.comfort}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Tamanhos:</span>{' '}
                    <span className="text-slate-700">{selectedProduct.specs.sizes.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Garantia:</span>{' '}
                    <span className="text-slate-700">{selectedProduct.specs.warranty}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais e pedir orçamento do ${selectedProduct.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir Cotação no WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
