export interface ProductItem {
  id: string;
  name: string;
  category: 'molas' | 'espuma' | 'box' | 'acessorios';
  categoryLabel: string;
  badge?: string;
  shortDesc: string;
  specs: {
    support: string;
    comfort: string;
    sizes: string[];
    warranty: string;
  };
  image: string;
  highlightText: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Bed' | 'ShieldCheck' | 'Truck' | 'MapPin' | 'Clock' | 'ThumbsUp';
}

import heroImg from '../assets/images/hero_luxury_bedroom_mattress_1791640551571.jpg';
import pocketSpringImg from '../assets/images/product_pocket_spring_mattress_1791640566620.jpg';
import highDensityImg from '../assets/images/product_high_density_foam_1791640576125.jpg';
import boxBedImg from '../assets/images/product_box_bed_frame_1791640587664.jpg';
import pillowsImg from '../assets/images/product_pillows_accessories_1791640597325.jpg';

export const siteImages = {
  hero: heroImg,
  pocketSpring: pocketSpringImg,
  highDensity: highDensityImg,
  boxBed: boxBedImg,
  pillows: pillowsImg,
};

export const siteData = {
  companyName: "Leal Móveis e Colchões",
  fullName: "Leal Móveis e Colchões — Loja de Colchões Cuiabá",
  tagline: "Colchões de alta qualidade, conforto superior e noites bem dormidas em Cuiabá",
  segment: "Loja de Colchões, Camas, Box e Sistemas de Dormir",
  phoneFormatted: "(65) 99313-9770",
  whatsappNumber: "5565993139770",
  addressShort: "Av. das Palmeiras, 36 - Jardim Imperial",
  addressFull: "Av. das Palmeiras, 36 - Jardim Imperial, Cuiabá - MT, 78075-760, Brasil",
  cep: "78075-760",
  city: "Cuiabá - MT",
  hoursText: "Segunda a Sábado: 09h às 18h",
  sundayText: "Domingos: Fechado",
  googleRating: 4.1,
  googleReviewCount: 15,
  instagramHandle: "@lealmoveisecolchoes",
  mapsUrl: "https://maps.google.com/?q=Av.+das+Palmeiras,+36+-+Jardim+Imperial,+Cuiab%C3%A1+-+MT,+78075-760",
  mapsEmbedSrc: "https://maps.google.com/maps?q=Av.+das+Palmeiras,+36+-+Jardim+Imperial,+Cuiab%C3%A1+-+MT,+78075-760&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Diferenciais
  differentials: [
    {
      id: "dif-1",
      title: "Consultoria por Biotipo",
      description: "Orientação técnica e personalizada para escolher a densidade e molejo perfeitos para seu peso, altura e postura.",
      iconName: "Bed",
    },
    {
      id: "dif-2",
      title: "Marcas Certificadas",
      description: "Colchões e bases com garantia de fábrica oficial e durabilidade testada sob rigorosos padrões do Inmetro.",
      iconName: "ShieldCheck",
    },
    {
      id: "dif-3",
      title: "Entrega Rápida em Cuiabá",
      description: "Agilidade no envio e montagem para Cuiabá e região metropolitana, com transporte cuidadoso até o seu quarto.",
      iconName: "Truck",
    },
    {
      id: "dif-4",
      title: "Localização Privilegiada",
      description: "Loja ampla e de fácil estacionamento na principal avenida do Jardim Imperial em Cuiabá.",
      iconName: "MapPin",
    },
    {
      id: "dif-5",
      title: "Condições Facilitadas",
      description: "Preços justos direto de fábrica, parcelamento em cartão de crédito e desconto especial à vista no Pix.",
      iconName: "ThumbsUp",
    },
    {
      id: "dif-6",
      title: "Atendimento Rápido no WhatsApp",
      description: "Receba fotos, catálogos em PDF, medidas e cotação personalizada sem filas e sem complicação.",
      iconName: "Clock",
    },
  ] as DifferentialItem[],

  // Produtos
  products: [
    {
      id: "molas-premium-eurotop",
      name: "Colchão Molas Ensacadas Euro Top",
      category: "molas",
      categoryLabel: "Molas Ensacadas",
      badge: "Mais Vendido",
      shortDesc: "Molas ensacadas individuais que impedem a transferência de movimento de um lado para o outro. Camada pillow de conforto e alinhamento ortopédico.",
      specs: {
        support: "Até 130 kg por pessoa",
        comfort: "Conforto Intermediário Macio",
        sizes: ["Solteiro", "Casal", "Queen Size", "King Size"],
        warranty: "Garantia de fábrica estrutural",
      },
      image: pocketSpringImg,
      highlightText: "Ideal para casais com pesos diferentes",
    },
    {
      id: "espuma-ortopedico-d33-d45",
      name: "Colchão Ortopédico Espuma D33 / D45",
      category: "espuma",
      categoryLabel: "Espuma Alta Densidade",
      badge: "Firmeza Ortopédica",
      shortDesc: "Estrutura selada de alta densidade recomendada para suporte postural e alívio de dores lombares. Revestimento hipoalergênico e respirável.",
      specs: {
        support: "Até 120 kg (D33) e 150 kg (D45)",
        comfort: "Firme Ortopédico",
        sizes: ["Solteiro", "Casal", "Queen Size", "King Size"],
        warranty: "Certificação e garantia oficial",
      },
      image: highDensityImg,
      highlightText: "Excelente sustentação para a coluna",
    },
    {
      id: "cama-box-bipartida",
      name: "Cama Box Base Reforçada & Baú",
      category: "box",
      categoryLabel: "Camas Box",
      badge: "Estrutura Blindada",
      shortDesc: "Madeira de reflorestamento tratada com pés reforçados e revestimento em linho ou suede nobre. Opção de base bipartida e baú basculante.",
      specs: {
        support: "Estrutura reforçada de alta carga",
        comfort: "Base Firme e Silenciosa",
        sizes: ["Solteiro", "Casal", "Queen Bipartido", "King Bipartido"],
        warranty: "Garantia contra defeito estrutural",
      },
      image: boxBedImg,
      highlightText: "Design moderno com pés antiderrapantes",
    },
    {
      id: "molas-queen-king-ultra",
      name: "Colchão Molas Pocket Master Queen & King",
      category: "molas",
      categoryLabel: "Molas Ensacadas",
      badge: "Queen & King",
      shortDesc: "Dimensões amplas para máximo espaço e descanso. Molas de aço carbono temperado com acabamento requintado em malha belga.",
      specs: {
        support: "Até 140 kg por pessoa",
        comfort: "Suavidade com Sustentação",
        sizes: ["Queen (158x198)", "King (193x203)"],
        warranty: "Garantia de fábrica prolongada",
      },
      image: pocketSpringImg,
      highlightText: "Espaço amplo para máximo relaxamento",
    },
    {
      id: "travesseiros-e-protetores",
      name: "Travesseiros Ergonômicos & Protetores Impermeáveis",
      category: "acessorios",
      categoryLabel: "Acessórios",
      badge: "Conforto Complementar",
      shortDesc: "Travesseiros anatômicos que alinham a coluna cervical e capas protetoras impermeáveis respiráveis para prolongar a vida útil do seu colchão.",
      specs: {
        support: "Alívio de tensão cervical",
        comfort: "Termossensível e Respirável",
        sizes: ["Padrão 50x70", "King 50x90", "Capas ajustáveis"],
        warranty: "Garantia de qualidade",
      },
      image: pillowsImg,
      highlightText: "Proteção total contra ácaros e umidade",
    },
    {
      id: "conjunto-box-colchao-completo",
      name: "Conjunto Completo: Colchão + Box",
      category: "box",
      categoryLabel: "Camas Box",
      badge: "Combo Econômico",
      shortDesc: "Solução completa para renovar seu quarto com economia. Colchão selecionado montado sobre base box coordenada no mesmo padrão.",
      specs: {
        support: "Suporte completo integrado",
        comfort: "Equilíbrio e estabilidade",
        sizes: ["Solteiro", "Casal", "Queen", "King"],
        warranty: "Garantia integral do conjunto",
      },
      image: boxBedImg,
      highlightText: "Melhor relação custo-benefício da loja",
    },
  ] as ProductItem[],

  // Depoimentos do Google
  reviews: [
    {
      id: "rev-1",
      name: "Carlos Alberto",
      rating: 5,
      date: "Avaliação no Google",
      text: "Atendimento excelente na loja do Jardim Imperial. O vendedor me ajudou a escolher o colchão perfeito para a minha coluna. Entrega rápida.",
      tag: "Compra Verificada no Google",
    },
    {
      id: "rev-2",
      name: "Mariana Souza",
      rating: 4,
      date: "Avaliação no Google",
      text: "Ótima variedade de colchões e preços justos. Comprei a base box com o colchão de molas e estou adorando a qualidade.",
      tag: "Compra Verificada no Google",
    },
    {
      id: "rev-3",
      name: "Roberto Dias",
      rating: 5,
      date: "Avaliação no Google",
      text: "Loja muito bem localizada e organizada. Facilidade para negociar e tirar dúvidas pelo WhatsApp.",
      tag: "Compra Verificada no Google",
    },
  ] as ReviewItem[],

  // FAQ
  faqs: [
    {
      question: "Vocês fazem entrega em Cuiabá e região?",
      answer: "Sim! Realizamos entrega e montagem rápida de colchões e camas box em Cuiabá e municípios vizinhos. Você pode combinar data e horário direto no WhatsApp da loja.",
    },
    {
      question: "Como saber qual a densidade ou tipo de colchão ideal para mim?",
      answer: "A escolha técnica depende do seu biotipo (peso e altura), se dorme sozinho ou acompanhado, e de eventuais recomendações para coluna (mais firme ou intermediário). Nossa equipe no WhatsApp avalia essas variáveis e recomenda os modelos exatos.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix (com condições diferenciadas à vista), cartões de crédito com opções de parcelamento facilitado e transferência bancária.",
    },
    {
      question: "Onde a loja física está localizada em Cuiabá?",
      answer: "Estamos localizados na Av. das Palmeiras, 36 - Jardim Imperial, Cuiabá - MT (CEP 78075-760). Contamos com ambiente climatizado para você testar os modelos.",
    },
    {
      question: "Os colchões possuem garantia de fábrica?",
      answer: "Sim, 100% dos nossos produtos contam com garantia oficial do fabricante contra defeitos de produção e deformações estruturais, com nota fiscal.",
    },
  ] as FaqItem[],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${siteData.whatsappNumber}`;
  const text = customMessage || "Olá! Vim pelo site da Leal Móveis e Colchões e gostaria de um orçamento para colchões em Cuiabá.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function isStoreOpen(): { isOpen: boolean; statusText: string } {
  // Cuiabá is UTC-4
  try {
    const now = new Date();
    // Get Cuiabá time
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Cuiaba',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const parts = formatter.formatToParts(now);
    
    let weekdayStr = '';
    let hour = 0;
    
    parts.forEach((p) => {
      if (p.type === 'weekday') weekdayStr = p.value.toLowerCase();
      if (p.type === 'hour') hour = parseInt(p.value, 10);
    });

    // Check if Sunday (dom)
    const isSunday = weekdayStr.startsWith('dom');
    const isOpen = !isSunday && hour >= 9 && hour < 18;

    return {
      isOpen,
      statusText: isOpen ? "Aberto agora (até às 18h)" : "Fechado agora (abre às 09h)",
    };
  } catch {
    return {
      isOpen: true,
      statusText: "Atendimento Seg a Sáb das 09h às 18h",
    };
  }
}
