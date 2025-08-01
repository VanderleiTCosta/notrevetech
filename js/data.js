// ===================================================================================
// ARQUIVO CENTRAL DE DADOS DA NOTREVE TECNOLOGIA
// Para adicionar, editar ou remover um produto, basta alterar a informação neste ficheiro.
// O site irá atualizar-se automaticamente.
// ===================================================================================

const solutionsData = [
  {
    // --- INFORMAÇÕES GERAIS DO PRODUTO (Aparecem nos cards e no modal) ---
    title: "API WhatsApp",
    id: "whatsapp", // Um identificador único, em minúsculas e sem espaços.
    description:
      "Plataforma completa para automação e atendimento no WhatsApp Oficial.",
    icon: "fa-brands fa-whatsapp", // Classe do ícone Font Awesome.
    pageUrl:
      "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-whatsapp", // Link para a página de vendas do produto.
    isComingSoon: false, // Mude para 'true' para mostrar como "Em Breve".

    // --- CARACTERÍSTICAS PRINCIPAIS (Aparecem no modal) ---
    mainFeatures: [
      "Conexão estável com a API Oficial (Meta)",
      "Envio e recebimento de mídias (áudio, vídeo, docs)",
      "Criação de chatbots e fluxos de automação",
      "Relatórios de entrega e leitura em tempo real",
    ],

    // --- CONTEÚDO DA PÁGINA DE DESENVOLVEDORES ---
    developerPage: {
      title: "Documentação da API WhatsApp",
      description:
        "Integre o poder do WhatsApp Oficial em sua aplicação para enviar mensagens, mídias e criar chatbots de forma segura e escalável, utilizando templates pré-aprovados.",
      authentication:
        "Todas as requisições à API devem ser autenticadas utilizando uma Bearer Token no cabeçalho `Authorization`. Ex: `Authorization: Bearer SUA_CHAVE_SECRETA`",
      endpoints: [
        {
          method: "POST",
          path: "/v1/whatsapp/send",
          description: "Envia uma mensagem de template para um destinatário.",
        },
      ],
      codeExamples: [
        {
          language: "cURL",
          code: `curl -X POST 'https://api.notrevetech.com.br/v1/whatsapp/send' \\\n-H 'Authorization: Bearer YOUR_API_KEY' \\\n-H 'Content-Type: application/json' \\\n-d '{\n  "to": "5511999999999",\n  "template_name": "pedido_confirmado",\n  "template_vars": ["#12345", "R$ 99,90"]\n}'`,
        },
        {
          language: "Node.js",
          code: `const axios = require('axios');\n\nconst options = {\n  method: 'POST',\n  url: 'https://api.notrevetech.com.br/v1/whatsapp/send',\n  headers: {\n    'Content-Type': 'application/json',\n    'Authorization': 'Bearer YOUR_API_KEY'\n  },\n  data: {\n    to: '5511999999999',\n    template_name: 'pedido_confirmado',\n    template_vars: ['#12345', 'R$ 99,90']\n  }\n};\n\naxios.request(options).then(res => console.log(res.data)).catch(err => console.error(err));`,
        },
      ],
    },

    // --- PLANOS E PREÇOS (Aparecem na página de Preços) ---
    pricingTiers: [
      {
        name: "Iniciante",
        price: "R$99.90",
        period: "/mês",
        description: "Ideal para iniciar a sua operação com até 2 conexões.",
        features: [
          "✓ Até 2 números conectados",
          "✓ Envios Ilimitados",
          "✓ Webhooks e API",
          "✓ Envio de todos os tipos de ficheiros",
          "✓ Suporte técnico",
        ],
        isFeatured: false, // Mude para 'true' para destacar este plano.
        ctaText: "Contratar Agora",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-whatsapp/2-conexo-whatsapp",
      },
      {
        name: "Profissional",
        price: "R$1.000",
        period: "/mês",
        description:
          "Para empresas que precisam de mais conexões e servidor dedicado.",
        features: [
          "✓ Até 50 números conectados",
          "✓ Criação de instâncias via API",
          "✓ Gerenciamento total",
          "✓ Servidor Privado Incluído",
          "✓ Suporte prioritário",
        ],
        isFeatured: true,
        ctaText: "Contratar Plano",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-whatsapp/50-conexoes-whatsapp",
      },
      {
        name: "Corporativo",
        price: "R$5.000",
        period: "/mês",
        description: "A solução definitiva para operações em larga escala.",
        features: [
          "✓ Até 500 números conectados",
          "✓ Todos os benefícios do Profissional",
          "✓ Escalabilidade máxima",
          "✓ Ambiente de alta performance",
          "✓ Gerente de contas dedicado",
        ],
        isFeatured: false,
        ctaText: "Contratar Agora",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-whatsapp/500-conexoes-whatsapp",
      },
    ],
  },
  {
    // --- API SMS ---
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
    pageUrl: "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-sms",
    isComingSoon: false,
    developerPage: {
      title: "Documentação da API SMS",
      description:
        "Envie SMS de forma rápida e confiável para seus clientes. Ideal para notificações, autenticação de dois fatores (2FA) e campanhas de marketing.",
      authentication:
        "A autenticação é feita via Bearer Token no cabeçalho `Authorization`, da mesma forma que em nossas outras APIs.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/sms/send",
          description: "Envia uma mensagem de texto simples.",
        },
        {
          method: "GET",
          path: "/v1/sms/status/{messageId}",
          description: "Consulta o status de entrega de uma mensagem.",
        },
      ],
      codeExamples: [
        {
          language: "cURL",
          code: `curl -X POST 'https://api.notrevetech.com.br/v1/sms/send' \\\n-H 'Authorization: Bearer YOUR_API_KEY' \\\n-H 'Content-Type: application/json' \\\n-d '{\n  "to": "5511999999999",\n  "from": "Notrevetec",\n  "message": "Seu código de verificação é: 123456"\n}'`,
        },
        {
          language: "Python",
          code: `import requests\n\nurl = "https://api.notrevetech.com.br/v1/sms/send"\npayload = {\n    "to": "5511999999999",\n    "from": "Notrevetec",\n    "message": "Seu código de verificação é: 123456"\n}\nheaders = {\n    "Authorization": "Bearer YOUR_API_KEY"\n}\nresponse = requests.post(url, json=payload, headers=headers)\nprint(response.json())`,
        },
      ],
    },
    pricingTiers: [
      {
        name: "Ativação do Painel",
        price: "Grátis",
        period: "",
        description: "Aceda à plataforma e teste com 5 SMS gratuitos.",
        features: [
          "✓ Acesso à API e Painel Web",
          "✓ 5 SMS para testes",
          "✓ Gestão de contatos",
          "✓ Relatórios em tempo real",
          "✓ Documentação completa",
        ],
        isFeatured: false,
        ctaText: "Ativar Gratuitamente",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-sms/ativacao-do-painel-sms",
      },
      {
        name: "Recarga de Créditos",
        price: "A partir de R$100",
        period: "",
        description: "Compre créditos e pague apenas pelo que enviar.",
        features: [
          "✓ Recarregue quando precisar",
          "✓ Sem taxa de assinatura",
          "✓ Créditos não expiram",
          "✓ Ideal para campanhas e notificações",
          "✓ Recarga imediata via API",
        ],
        isFeatured: true,
        ctaText: "Recarregar Agora",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/apis-de-sms/plano-de-recarga-de-creditos-sms",
      },
    ],
  },
  {
    // --- NOTREVECLOUD ---
    title: "Notreve Cloud",
    id: "cloud",
    description:
      "Soluções em Cloud, Servidores Dedicados e VPS de alta performance.",
    mainFeatures: [
      "Servidores com discos NVMe de alta velocidade",
      "Uptime garantido de 99.9%",
      "Proteção Anti-DDoS inclusa",
      "Painel de controlo intuitivo e completo",
    ],
    icon: "fa-solid fa-cloud",
    pageUrl:
      "https://app.notrevetech.com.br/index.php?rp=/store/servidores-and-vps",
    isComingSoon: false,
    pricingTiers: [
      {
        name: "VPS Básico",
        price: "R$150",
        period: "/mês",
        description: "Ideal para aplicações leves e websites.",
        features: [
          "✓ 2 vCPU",
          "✓ 4 GB RAM",
          "✓ 80 GB NVMe",
          "✓ Link de 1 Gbps",
          "✓ Suporte técnico",
        ],
        isFeatured: false,
        ctaText: "Contratar VPS",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/servidores-and-vps",
      },
      {
        name: "VPS Performance",
        price: "R$300",
        period: "/mês",
        description: "Mais poder de processamento para as suas aplicações.",
        features: [
          "✓ 4 vCPU",
          "✓ 8 GB RAM",
          "✓ 160 GB NVMe",
          "✓ Link de 1 Gbps",
          "✓ Suporte prioritário",
        ],
        isFeatured: true,
        ctaText: "Contratar VPS",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/servidores-and-vps",
      },
      {
        name: "Servidor Dedicado",
        price: "Personalizado",
        period: "",
        description: "Recursos exclusivos para máxima performance.",
        features: [
          "✓ Hardware dedicado",
          "✓ Configuração sob medida",
          "✓ Segurança e isolamento total",
          "✓ Ideal para missões críticas",
          "✓ Gerente de contas",
        ],
        isFeatured: false,
        ctaText: "Consultar",
        ctaLink:
          "https://app.notrevetech.com.br/index.php?rp=/store/servidores-and-vps",
      },
    ],
  },
  {
    // --- NOVO PRODUTO (EXEMPLO) ---
    // Para adicionar um novo produto, copie e cole este bloco e altere os valores.
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

// ===================================================================================
// PACOTES COMBINADOS (Aparecem na página de Preços)
// ===================================================================================
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
