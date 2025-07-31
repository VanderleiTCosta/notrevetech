// js/data.js
const solutionsData = [
  {
    title: "API WhatsApp",
    id: "whatsapp",
    description:
      "Plataforma completa para automação e atendimento no WhatsApp Oficial.",
    mainFeatures: [
      "Conexão estável com a API Oficial (Meta)",
      "Envio e recebimento de mídias (áudio, vídeo, docs)",
      "Criação de chatbots e fluxos de automação",
      "Relatórios de entrega e leitura em tempo real",
    ],
    icon: "fa-brands fa-whatsapp",
    pageUrl: "https://apizap.me",
    isComingSoon: false,
  },
  {
    title: "API SMS",
    id: "sms",
    description:
      "Envio de SMS em massa com alta entregabilidade e remetente personalizado.",
    mainFeatures: [
      "Maior taxa de abertura do mercado",
      "Ideal para códigos de verificação (2FA)",
      "Agendamento de campanhas de marketing",
      "Integração simples com qualquer sistema",
    ],
    icon: "fa-solid fa-comment-sms",
    pageUrl: "https://apisms.me",
    isComingSoon: false,
  },
  {
    title: "NotrevoCloud",
    id: "cloud",
    description:
      "Soluções em Cloud, Servidores Dedicados e VPS de alta performance.",
    mainFeatures: [
      "Servidores com discos NVMe de alta velocidade",
      "Uptime garantido de 99.9%",
      "Proteção Anti-DDoS inclusa",
      "Painel de controle intuitivo e completo",
    ],
    icon: "fa-solid fa-cloud",
    pageUrl: "https://notrevecloud.com.br/",
    isComingSoon: false,
  },
  {
    title: "ChatBot com IA",
    id: "chatbot",
    isComingSoon: true,
    description:
      "Crie fluxos de conversa inteligentes para resolver demandas 24/7.",
    mainFeatures: [],
    icon: "fa-solid fa-robot",
    pageUrl: "#",
  },
];

const packagesData = [
  {
    name: "PACOTE STARTUP",
    price: "R$597",
    period: "/mês",
    description: "A combinação ideal para startups e PMEs.",
    features: [
      "✓ Plano WhatsApp Premium",
      "✓ Plano SMS Profissional",
      "✓ 500 SMS gratuitos por mês",
      "✓ Dashboard unificado",
      "✓ 20% de desconto em serviços adicionais",
    ],
    isFeatured: true,
    ctaText: "Adquirir Pacote",
    ctaLink: "#",
  },
  {
    name: "PACOTE ENTERPRISE",
    price: "Personalizado",
    period: "",
    description: "Soluções sob medida para sua empresa.",
    features: [
      "✓ Tudo do Pacote Startup",
      "✓ Volumes de envio personalizados",
      "✓ SLA (Acordo de Nível de Serviço)",
      "✓ Consultoria de implementação",
      "✓ Suporte 24/7",
    ],
    isFeatured: false,
    ctaText: "Fale com um especialista",
    ctaLink: "#",
  },
];

solutionsData.find((s) => s.id === "whatsapp").developerPage = {
  title: "Documentação da API WhatsApp",
  description:
    "Integre o poder do WhatsApp Oficial em sua aplicação para enviar mensagens, mídias e criar chatbots de forma segura e escalável.",
  codeExamples: [{ language: "cURL", code: `curl ...` }],
};
solutionsData.find((s) => s.id === "sms").developerPage = {
  title: "Documentação da API SMS",
  description:
    "Envie SMS de forma rápida e confiável para seus clientes. Ideal para notificações, autenticação de dois fatores (2FA) e campanhas de marketing.",
  codeExamples: [{ language: "cURL", code: `curl ...` }],
};
solutionsData.find((s) => s.id === "whatsapp").pricingTiers = [
  {
    name: "WHATSAPP OFICIAL",
    price: "R$197",
    period: "/mês",
    features: ["..."],
    isFeatured: false,
    ctaText: "Contratar Agora",
    ctaLink: "#",
  },
  {
    name: "WHATSAPP PREMIUM",
    price: "R$497",
    period: "/mês",
    features: ["..."],
    isFeatured: true,
    ctaText: "Contratar Premium",
    ctaLink: "#",
  },
];
solutionsData.find((s) => s.id === "sms").pricingTiers = [
  {
    name: "SMS BÁSICO",
    price: "R$0,15",
    period: "por SMS enviado",
    features: ["..."],
    isFeatured: false,
    ctaText: "Começar a Enviar",
    ctaLink: "#",
  },
  {
    name: "SMS PROFISSIONAL",
    price: "R$197",
    period: "/mês + R$0,08 por SMS",
    features: ["..."],
    isFeatured: true,
    ctaText: "Contratar Plano Pro",
    ctaLink: "#",
  },
];
