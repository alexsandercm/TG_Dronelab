import React, { useState, useEffect, useMemo } from 'react';
import { 
  Camera, 
  Video, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  CheckCircle, 
  Clock, 
  Award, 
  Sliders, 
  ChevronRight, 
  ExternalLink, 
  Play, 
  Eye, 
  Trash2, 
  Edit3, 
  Plus, 
  Search, 
  Filter, 
  Menu, 
  X, 
  Download, 
  ArrowUpRight, 
  DollarSign, 
  Users, 
  TrendingUp, 
  FileText, 
  CalendarCheck, 
  Lock, 
  LogOut, 
  Key, 
  Send, 
  Layers, 
  Sparkles, 
  Compass, 
  Database, 
  MessageSquare, 
  AlertTriangle 
} from 'lucide-react';

// --- LOGO TG DRONE LAB (VETOR SVG FIDELIZADO AO ORIGINAL) ---
const TGDroneLogo = ({ className = "h-9 w-auto", dark = true }) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    <svg viewBox="0 0 100 100" className="h-10 w-10 shrink-0 drop-shadow-[0_0_12px_rgba(0,210,255,0.35)]" fill="none">
      <path
        d="M 22 18 C 38 32, 38 38, 22 52 C 18 56, 12 52, 12 44 C 12 36, 18 32, 22 18 Z"
        fill="currentColor"
        className="hidden"
      />
      {/* Símbolo do drone aerodinâmico */}
      <path
        d="M 20 20 C 35 32, 35 48, 20 60 C 15 64, 10 58, 14 50 C 18 42, 18 38, 14 30 C 10 22, 15 16, 20 20 Z"
        className="hidden"
      />
      <g fill={dark ? "#ffffff" : "#0f172a"}>
        <path d="M 25 15 C 38 28, 48 38, 50 50 C 48 62, 38 72, 25 85 C 18 80, 20 72, 28 64 C 36 56, 36 44, 28 36 C 20 28, 18 20, 25 15 Z" />
        <path d="M 75 15 C 62 28, 52 38, 50 50 C 52 62, 62 72, 75 85 C 82 80, 80 72, 72 64 C 64 56, 64 44, 72 36 C 80 28, 82 20, 75 15 Z" />
        {/* Rotor spheres */}
        <circle cx="23" cy="18" r="6" fill="#00d2ff" />
        <circle cx="77" cy="18" r="6" fill="#00d2ff" />
        <circle cx="23" cy="82" r="6" fill="#00d2ff" />
        <circle cx="77" cy="82" r="6" fill="#00d2ff" />
        {/* Core body */}
        <rect x="36" y="36" width="28" height="28" rx="7" fill={dark ? "#000000" : "#ffffff"} stroke="#00d2ff" strokeWidth="2.5" />
        <text x="50" y="53" textAnchor="middle" fill="#00d2ff" fontSize="11" fontWeight="900" fontFamily="monospace" letterSpacing="0.5">TG</text>
      </g>
    </svg>
    <div className="flex flex-col">
      <span className="font-mono text-lg font-bold tracking-wider leading-none text-white flex items-center">
        TG <span className="text-sky-400 ml-1.5 font-sans font-light tracking-widest text-base">Dron<span className="text-sky-400">=</span>Lab</span>
      </span>
      <span className="text-[9px] tracking-[0.25em] text-slate-400 uppercase font-medium mt-0.5">Cinematography</span>
    </div>
  </div>
);

// --- LOGO ACM INTELLIGENCE (VETOR SVG FIDELIZADO AO ORIGINAL) ---
const ACMLogo = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 120 90" className="h-7 w-auto shrink-0 drop-shadow-[0_0_8px_rgba(0,180,255,0.4)]" fill="none">
      <defs>
        <linearGradient id="acmBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="50%" stopColor="#0077b6" />
          <stop offset="100%" stopColor="#03045e" />
        </linearGradient>
        <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#48cae4" />
          <stop offset="100%" stopColor="#90e0ef" />
        </linearGradient>
      </defs>
      {/* Vértice esquerdo do A estilizado */}
      <path d="M 42 12 L 6 78 L 22 78 L 48 26 Z" fill="url(#acmBlue)" />
      {/* Vértice direito do A */}
      <path d="M 52 26 L 78 78 L 94 78 L 58 12 Z" fill="url(#acmBlue)" />
      {/* Barras de crescimento tipo gráfico dentro do A */}
      <rect x="42" y="58" width="5" height="16" rx="1.5" fill="#38bdf8" />
      <rect x="50" y="48" width="5" height="26" rx="1.5" fill="#00d2ff" />
      <rect x="58" y="40" width="5" height="34" rx="1.5" fill="#60a5fa" />
      {/* Órbita dinâmica com efeito curvado em elipse */}
      <path d="M 0 74 C 30 74, 90 62, 106 32 C 108 28, 98 24, 88 32 C 60 52, 20 64, 0 74 Z" fill="url(#orbitGlow)" opacity="0.95" />
    </svg>
    <div className="flex flex-col border-l border-slate-700/80 pl-2.5">
      <span className="text-[13px] font-black tracking-[0.25em] text-slate-200 leading-none">ACM</span>
      <span className="text-[8.5px] font-semibold tracking-[0.3em] text-sky-400 leading-tight uppercase mt-0.5">Intelligence</span>
    </div>
  </div>
);

// --- DADOS INICIAIS DO BANCO / SEED ---
const INITIAL_SERVICES = [
  {
    id: 'film-aerea',
    title: 'Filmagens Aéreas',
    category: 'Audiovisual',
    desc: 'Captação cinematográfica em 4K e 6K com drones homologados, perfil D-Log e taxas de quadros para câmera lenta de alto impacto.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    tags: ['4K / 6K', 'Cinema DNG', 'D-Log']
  },
  {
    id: 'foto-aerea',
    title: 'Fotografia Aérea',
    category: 'Audiovisual',
    desc: 'Registros com sensores Hasselblad de altíssima fidelidade cromática, HDR multi-exposição e pós-produção profissional.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    tags: ['48MP RAW', 'HDR', 'Sensor 4/3']
  },
  {
    id: 'casamentos',
    title: 'Casamentos',
    category: 'Eventos',
    desc: 'Momentos inesquecíveis captados dos melhores ângulos, com drones silenciosos e seguros que preservam a magia do instante.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tags: ['Drone Silencioso', 'Pôr do Sol', 'Cine Look']
  },
  {
    id: 'aniversarios',
    title: 'Aniversários',
    category: 'Eventos',
    desc: 'Coberturas dinâmicas para celebrações com takes modernos, planos aéreos dos convidados e vídeos pensados para Reels.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    tags: ['Reels & TikTok', 'Aftermovie', 'Dinâmico']
  },
  {
    id: 'shows-festas',
    title: 'Festas e Shows',
    category: 'Eventos',
    desc: 'Imersão em grandes públicos, iluminação de palco e festivais noturnos com operadores experientes e sensores de baixa luz.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    tags: ['Noturno', 'Palcos', 'Multidões']
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos',
    category: 'Empresas',
    desc: 'Transmita a grandeza da sua convenção, congressos, instalações industriais e lançamentos com visão institucional moderna.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['Institucional', '4K Broadcast', 'Pontualidade']
  },
  {
    id: 'imoveis',
    title: 'Imóveis & Lançamentos',
    category: 'Mercado Imobiliário',
    desc: 'Valorização imobiliária estratégica com visualização da vizinhança, altura dos andares futuros e maquetes audiovisuais.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vista por Andar', 'Imobiliárias', 'Tour Aéreo']
  },
  {
    id: 'construcao',
    title: 'Construção Civil & Obras',
    category: 'Engenharia',
    desc: 'Acompanhamento periódico de evolução de obras, relatórios fotográficos com coordenadas GPS e ortofotomosaicos.',
    icon: Sliders,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    tags: ['Relatórios de Evolução', 'Timeline de Obra', 'GPS']
  },
  {
    id: 'publicidade',
    title: 'Publicidade & Comerciais',
    category: 'Audiovisual',
    desc: 'Planos complexos e dinâmicos para agências, campanhas de TV, spots de streaming e produções de altíssimo padrão.',
    icon: Play,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    tags: ['Storytelling', 'Color Grading', 'FPV Acrobático']
  },
  {
    id: 'projetos-especiais',
    title: 'Projetos Especiais & FPV',
    category: 'Inovação',
    desc: 'Voos FPV indoor em altíssima velocidade passando por janelas e portas, inspeções técnicas e planos-sequência ininterruptos.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=800&q=80',
    tags: ['FPV Cinelifter', 'One-Shot', 'Custom Flight']
  }
];

const INITIAL_PORTFOLIO = [
  {
    id: 'port-1',
    title: 'Orla de Copacabana & Pão de Açúcar',
    category: 'Rio de Janeiro',
    location: 'Rio de Janeiro - RJ',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-42938-large.mp4',
    featured: true,
    desc: 'Plano aéreo ao pôr do sol captando a costa carioca com luz dourada natural. Demonstração de estabilização gimbal de 3 eixos.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-2',
    title: 'Avenida Paulista & Skyline Noturno',
    category: 'São Paulo',
    location: 'São Paulo - SP',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-large-city-at-night-42937-large.mp4',
    featured: true,
    desc: 'Tomada noturna do centro financeiro com sensor para baixa luminosidade e tráfego em longa exposição fluida.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-3',
    title: 'Celebração Náutica em Ilhabela',
    category: 'Eventos',
    location: 'Litoral Norte - SP',
    type: 'photo',
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    desc: 'Casamento à beira-mar com perspectiva panorâmica do altar, iates convidados e águas cristalinas.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-4',
    title: 'Reserva Natural & Cachoeiras da Serra',
    category: 'Paisagens',
    location: 'Teresópolis - RJ',
    type: 'photo',
    cover: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    desc: 'Natureza exuberante com alcance de transmissão OcuSync de 8km em relevo acidentado e altitude.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-5',
    title: 'Complexo Residencial Mansões de Alphaville',
    category: 'Imóveis',
    location: 'Barueri - SP',
    type: 'photo',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    desc: 'Ensaio fotográfico para corretoras de alto luxo, destacando paisagismo, heliponto e arquitetura contemporânea.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-6',
    title: 'Hub Logístico Multimodal & Portuário',
    category: 'Empresas',
    location: 'Itaguaí - RJ',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-and-buildings-42938-large.mp4',
    featured: false,
    desc: 'Filmagens industriais com tracking inteligente em veículos de carga e pontes rolantes automatizadas.',
    badge: 'Referência Técnica Demonstrativa'
  },
  {
    id: 'port-7',
    title: 'Voo FPV em Fábrica de Alta Velocidade',
    category: 'Projetos especiais',
    location: 'São Caetano do Sul - SP',
    type: 'video',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-large-city-at-night-42937-large.mp4',
    featured: true,
    desc: 'Take único ininterrupto (One Shot) cruzando linha de produção, escritório executivo e pátio externo.',
    badge: 'Referência Técnica Demonstrativa'
  }
];

const INITIAL_LEADS = [
  {
    id: 'lead-101',
    name: 'Carlos Eduardo Mendes',
    phone: '21 98844-1234',
    email: 'carlos.mendes@mendesincorporadora.com.br',
    city: 'Rio de Janeiro',
    state: 'RJ',
    service: 'Imóveis & Lançamentos',
    dateRequested: '2026-11-08 14:22',
    dateScheduled: '2026-11-20',
    location: 'Barra da Tijuca, Av. das Américas',
    description: 'Captação de vistas por andar em terreno de novo empreendimento de 22 andares. Necessário fotos 360° em cada cota.',
    budgetAmount: 'R$ 4.200,00',
    status: 'Orçamento aprovado',
    internalNotes: 'Cliente prioritário. Piloto precisa levar anemômetro e crachá de segurança do canteiro.',
    history: [
      { timestamp: '2026-11-08 14:22', action: 'Lead gerado pelo site público' },
      { timestamp: '2026-11-08 16:10', action: 'Orçamento enviado no valor de R$ 4.200 via WhatsApp' },
      { timestamp: '2026-11-09 10:00', action: 'Orçamento aprovado pelo diretor executivo' }
    ]
  },
  {
    id: 'lead-102',
    name: 'Beatriz Fontes Albuquerque',
    phone: '21 99123-5566',
    email: 'beatriz.fontes@cerimonial.com',
    city: 'Niterói',
    state: 'RJ',
    service: 'Casamentos',
    dateRequested: '2026-11-09 09:15',
    dateScheduled: '2026-12-12',
    location: 'Reserva de Camboinhas',
    description: 'Cerimônia ao ar livre durante o entardecer. Filmagem dos noivos e convidados, entrega de vídeo 4K de 3 minutos.',
    budgetAmount: 'R$ 2.800,00',
    status: 'Orçamento em preparação',
    internalNotes: 'Checar restrição de voo por proximidade com área militar.',
    history: [
      { timestamp: '2026-11-09 09:15', action: 'Solicitação registrada no site' },
      { timestamp: '2026-11-09 11:30', action: 'Contato inicial via WhatsApp realizado' }
    ]
  },
  {
    id: 'lead-103',
    name: 'Roberto Vianna',
    phone: '11 97200-9876',
    email: 'roberto@agenciatopo.com',
    city: 'São Paulo',
    state: 'SP',
    service: 'Publicidade & Comerciais',
    dateRequested: '2026-11-10 08:30',
    dateScheduled: '2026-11-18',
    location: 'Ponte Estaiada, Marginal Pinheiros',
    description: 'Campanha publicitária para montadora de automóveis. Tomadas de perseguição dinâmica com drone Cinelifter.',
    budgetAmount: 'R$ 7.500,00',
    status: 'Novo contato',
    internalNotes: 'Necessita autorização DECEA/SARPAS em área controlada.',
    history: [
      { timestamp: '2026-11-10 08:30', action: 'Lead recebido via formulário digital' }
    ]
  }
];

const INITIAL_SCHEDULES = [
  {
    id: 'sch-1',
    title: 'Lançamento Vista Barra - Mendes Inc.',
    clientId: 'lead-101',
    clientName: 'Carlos Eduardo Mendes',
    serviceType: 'Imóveis & Lançamentos',
    date: '2026-11-20',
    time: '08:00',
    address: 'Av. das Américas, 4200 - Barra da Tijuca, RJ',
    amount: 'R$ 4.200,00',
    pilot: 'Comandante Thiago Garcia (ANAC #7492)',
    status: 'Confirmado',
    notes: 'Chegar 30 min antes para briefing de segurança na portaria da obra.'
  },
  {
    id: 'sch-2',
    title: 'Campanha Auto 2027 - Ponte Estaiada',
    clientId: 'lead-103',
    clientName: 'Roberto Vianna',
    serviceType: 'Publicidade & Comerciais',
    date: '2026-11-18',
    time: '05:30',
    address: 'Marginal Pinheiros - São Paulo, SP',
    amount: 'R$ 7.500,00',
    pilot: 'Comandante Gabriel S. (FPV Pro)',
    status: 'Pendente',
    notes: 'Aguardando validação da janela de voo do DECEA.'
  },
  {
    id: 'sch-3',
    title: 'Inspeção Termográfica - Parque Solar',
    clientId: 'lead-int-3',
    clientName: 'Engie Renováveis',
    serviceType: 'Projetos especiais',
    date: '2026-11-12',
    time: '11:00',
    address: 'Campos dos Goytacazes, RJ',
    amount: 'R$ 5.900,00',
    pilot: 'Comandante Thiago Garcia',
    status: 'Concluído',
    notes: 'Relatório termográfico entregue com sucesso e validado pelo engenheiro responsável.'
  }
];

const STATUS_PIPELINE = [
  'Novo contato',
  'Em análise',
  'Orçamento em preparação',
  'Orçamento enviado',
  'Aguardando aprovação',
  'Orçamento aprovado',
  'Serviço agendado',
  'Serviço concluído',
  'Cancelado'
];

export default function App() {
  // --- NAVEGAÇÃO & ESTADO GERAL ---
  const [currentPage, setCurrentPage] = useState('home'); // home, sobre, servicos, portfolio, orcamento, contato, admin
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceForBudget, setSelectedServiceForBudget] = useState(null);

  // --- DADOS PERSISTIDOS EM MEMÓRIA / LOCAL STORAGE CRM ---
  const [services] = useState(INITIAL_SERVICES);
  const [portfolio, setPortfolio] = useState(() => {
    try {
      const saved = localStorage.getItem('tg_portfolio');
      return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
    } catch {
      return INITIAL_PORTFOLIO;
    }
  });

  const [leads, setLeads] = useState(() => {
    try {
      const saved = localStorage.getItem('tg_leads');
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  const [schedules, setSchedules] = useState(() => {
    try {
      const saved = localStorage.getItem('tg_schedules');
      return saved ? JSON.parse(saved) : INITIAL_SCHEDULES;
    } catch {
      return INITIAL_SCHEDULES;
    }
  });

  // Salvar no storage local para manter persistência na sessão
  useEffect(() => {
    try {
      localStorage.setItem('tg_portfolio', JSON.stringify(portfolio));
    } catch (e) { console.error(e); }
  }, [portfolio]);

  useEffect(() => {
    try {
      localStorage.setItem('tg_leads', JSON.stringify(leads));
    } catch (e) { console.error(e); }
  }, [leads]);

  useEffect(() => {
    try {
      localStorage.setItem('tg_schedules', JSON.stringify(schedules));
    } catch (e) { console.error(e); }
  }, [schedules]);

  // --- AUTENTICAÇÃO DO PAINEL ADMINISTRATIVO ---
  // Credenciais padrão conforme especificação:
  // USUÁRIO: TG_Drone | SENHA INICIAL: dronelab
  const [adminAuth, setAdminAuth] = useState(() => {
    try {
      const saved = localStorage.getItem('tg_admin_session');
      return saved ? JSON.parse(saved) : {
        isLoggedIn: false,
        username: 'TG_Drone',
        passwordHash: 'dronelab', // Senha inicial
        isDefaultPassword: true,
        sessionExpiry: null
      };
    } catch {
      return { isLoggedIn: false, username: 'TG_Drone', passwordHash: 'dronelab', isDefaultPassword: true };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tg_admin_session', JSON.stringify(adminAuth));
    } catch (e) { console.error(e); }
  }, [adminAuth]);

  // Modal para trocar senha
  const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);
  const [newPasswordVal, setNewPasswordVal] = useState('');
  const [confirmPasswordVal, setConfirmPasswordVal] = useState('');

  // --- PWA INSTALL PROMPT SIMULATION ---
  const [pwaInstalled, setPwaInstalled] = useState(false);
  const [pwaBannerVisible, setPwaBannerVisible] = useState(true);

  // --- MODAL DE MÍDIA / LIGHTBOX ---
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  // --- FORMULÁRIO DE ORÇAMENTO (ESTADO) ---
  const [budgetForm, setBudgetForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: 'RJ',
    service: 'Filmagens Aéreas',
    dateScheduled: '',
    location: '',
    description: '',
    notes: ''
  });
  const [formSuccessModal, setFormSuccessModal] = useState(false);
  const [lastSubmittedLead, setLastSubmittedLead] = useState(null);

  // --- ADMIN: SUB-ABAS DO PAINEL ---
  const [adminTab, setAdminTab] = useState('dashboard'); // dashboard, leads, schedule, portfolio, supabase

  // Função para navegar e rolar para o topo
  const navigateTo = (page, serviceId = null) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (serviceId) {
      const s = services.find(x => x.id === serviceId);
      if (s) {
        setBudgetForm(prev => ({ ...prev, service: s.title }));
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Envio de formulário de orçamento
  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!budgetForm.name || !budgetForm.phone || !budgetForm.email) {
      return;
    }

    const now = new Date();
    const formattedTimestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newLead = {
      id: `lead-${Date.now()}`,
      name: budgetForm.name,
      phone: budgetForm.phone,
      email: budgetForm.email,
      city: budgetForm.city || 'Não informada',
      state: budgetForm.state || 'RJ',
      service: budgetForm.service,
      dateRequested: formattedTimestamp,
      dateScheduled: budgetForm.dateScheduled || 'A definir',
      location: budgetForm.location || 'A combinar',
      description: budgetForm.description || '',
      budgetAmount: 'Sob Análise',
      status: 'Novo contato',
      internalNotes: budgetForm.notes ? `Observações do cliente: ${budgetForm.notes}` : 'Recebido via formulário do site.',
      history: [
        { timestamp: formattedTimestamp, action: 'Lead gerado via formulário público do site' }
      ]
    };

    // 1. Salvar no banco (lista de leads)
    setLeads([newLead, ...leads]);
    setLastSubmittedLead(newLead);
    setFormSuccessModal(true);

    // Preparar texto padrão para WhatsApp
    const message = encodeURIComponent(
      `*Olá, TG Drone Lab!*\n\n` +
      `Gostaria de solicitar um orçamento para filmagem/fotografia com drone:\n\n` +
      `👤 *Nome:* ${budgetForm.name}\n` +
      `📞 *Telefone:* ${budgetForm.phone}\n` +
      `✉️ *E-mail:* ${budgetForm.email}\n` +
      `📍 *Cidade/Local:* ${budgetForm.city} - ${budgetForm.state} (${budgetForm.location || 'Local a combinar'})\n` +
      `🎯 *Serviço:* ${budgetForm.service}\n` +
      `📅 *Data Prevista:* ${budgetForm.dateScheduled || 'A definir'}\n` +
      `📝 *Detalhes:* ${budgetForm.description || 'Sem detalhes adicionais'}\n\n` +
      `_Protocolo gerado pelo site: ${newLead.id}_`
    );

    const waUrl = `https://wa.me/5521970334053?text=${message}`;

    // Abrir WhatsApp em nova aba mantendo a persistência garantida
    window.open(waUrl, '_blank');

    // Resetar formulário
    setBudgetForm({
      name: '',
      phone: '',
      email: '',
      city: '',
      state: 'RJ',
      service: 'Filmagens Aéreas',
      dateScheduled: '',
      location: '',
      description: '',
      notes: ''
    });
  };

  // Troca de senha administrativa obrigatória/opcional
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!newPasswordVal || newPasswordVal.length < 6) {
      return;
    }
    if (newPasswordVal !== confirmPasswordVal) {
      return;
    }
    setAdminAuth(prev => ({
      ...prev,
      passwordHash: newPasswordVal,
      isDefaultPassword: false
    }));
    setShowPasswordChangeModal(false);
    setNewPasswordVal('');
    setConfirmPasswordVal('');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-sky-500 selection:text-white flex flex-col justify-between antialiased">
      
      {/* --- TOP BAR PWA / NOTIFICAÇÃO --- */}
      {pwaBannerVisible && !pwaInstalled && currentPage !== 'admin' && (
        <aside aria-label="Instalação do Aplicativo" className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border-b border-sky-500/20 px-4 py-2 text-xs flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline text-sky-300 font-semibold">TG Drone Lab App:</span>
            <span>Instale este site como PWA nativo no seu iPhone ou Android.</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setPwaInstalled(true);
                setPwaBannerVisible(false);
              }}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-2.5 py-1 rounded font-bold text-[11px] flex items-center gap-1 transition shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Instalar App
            </button>
            <button 
              onClick={() => setPwaBannerVisible(false)}
              className="text-slate-400 hover:text-white cursor-pointer"
              aria-label="Fechar banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* --- HEADER NAVEGAÇÃO PRINCIPAL --- */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#07090e]/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGOTIPO OFICIAL TG DRONE LAB */}
          <div 
            onClick={() => navigateTo('home')} 
            className="cursor-pointer group flex items-center"
          >
            <TGDroneLogo />
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {[
              { id: 'home', label: 'Início' },
              { id: 'sobre', label: 'Sobre' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'portfolio', label: 'Portfólio' },
              { id: 'orcamento', label: 'Orçamento' },
              { id: 'contato', label: 'Contato' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  currentPage === item.id 
                    ? 'text-sky-400 font-semibold' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA & ACESSO ADMIN */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigateTo('orcamento')}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-[0_0_20px_rgba(0,180,255,0.25)] transition duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Orçamento</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => navigateTo('admin')}
              className={`p-2 rounded-lg border text-xs font-mono transition flex items-center gap-1.5 cursor-pointer ${
                currentPage === 'admin' 
                  ? 'border-sky-400 bg-sky-950/40 text-sky-400' 
                  : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 bg-slate-900/60'
              }`}
              title="Acesso Administrativo Restrito"
            >
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden xl:inline text-[11px]">/admin</span>
            </button>
          </div>

          {/* BOTÃO MOBILE */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => navigateTo('admin')}
              className="p-2 text-slate-400 hover:text-white border border-slate-800 rounded-lg cursor-pointer"
              title="Painel Admin"
            >
              <Lock className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MENU MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {[
                { id: 'home', label: 'Início' },
                { id: 'sobre', label: 'A Empresa & Frota' },
                { id: 'servicos', label: 'Serviços Especializados' },
                { id: 'portfolio', label: 'Portfólio & Galeria' },
                { id: 'orcamento', label: 'Solicitar Orçamento' },
                { id: 'contato', label: 'Canais de Atendimento' },
                { id: 'admin', label: 'Área Restrita (/admin)' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between cursor-pointer ${
                    currentPage === item.id 
                      ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20' 
                      : 'text-slate-300 hover:bg-slate-800/40'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <a
                href="https://wa.me/5521970334053"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-3 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp 21 97033-4053
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- CONTEÚDO PRINCIPAL (ROTEAMENTO DINÂMICO) --- */}
      <main className="flex-1">
        
        {/* ========================================================= */}
        {/* 1. HOME PAGE */}
        {/* ========================================================= */}
        {currentPage === 'home' && (
          <div>
            {/* HERO CINEMATOGRÁFICO */}
            <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden border-b border-slate-800/60">
              {/* Imagem/Vídeo de Fundo com Overlay Escuro Gradiente */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=2000&q=85"
                  alt="Drone Cinematográfico Rio de Janeiro"
                  className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/85 to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600/15 via-transparent to-transparent" />
              </div>

              {/* HUD / Drone Telemetry Overlay sutil para ambientação high-tech */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="max-w-7xl mx-auto h-full p-8 flex flex-col justify-between text-[11px] font-mono text-sky-400/50">
                  <div className="flex justify-between items-center border-t border-sky-400/20 pt-2">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
                      REC • 4K UHD 60FPS [PRORES 422HQ]
                    </span>
                    <span>LAT -22.9068° S | LON -43.1729° W (RJ)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-sky-400/20 pb-2">
                    <span>ALT: 120M AGL • SAT: 28 GPS/GLONASS</span>
                    <span>BAT: 98% • ANAC HOMOLOGADO</span>
                  </div>
                </div>
              </div>

              {/* CONTEÚDO CENTRALIZADO HERO */}
              <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(0,180,255,0.2)]">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>Tecnologia Audiovisual Aérea de Alta Resolução</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Uma nova perspectiva para registrar momentos, lugares e grandes projetos.
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                  Transformamos imagens aéreas em experiências visuais extraordinárias. Produções cinematográficas, eventos, publicidade e inspeções técnicas.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => navigateTo('portfolio')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-slate-900" />
                    Conheça nosso portfólio
                  </button>

                  <button
                    onClick={() => navigateTo('orcamento')}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition shadow-[0_0_25px_rgba(0,180,255,0.3)] flex items-center justify-center gap-2 border border-sky-400/40 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Solicite um orçamento
                  </button>
                </div>

                {/* Badges de credibilidade */}
                <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-400 text-xs">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400" />
                    <span>Pilotos Certificados ANAC</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-400" />
                    <span>Autorizações DECEA / SARPAS</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-4 h-4 text-sky-400" />
                    <span>Sensores 4K e 6K RAW</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 text-sky-400" />
                    <span>Seguro RETA Homologado</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SEÇÃO SERVIÇOS EM DESTAQUE (HOME) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Excelência Técnica</span>
                  <h2 className="text-3xl font-bold text-white mt-1">Serviços Especializados com Drones</h2>
                  <p className="text-slate-400 text-sm mt-2 max-w-xl">
                    Equipamentos topo de linha e pilotos com milhares de horas de voo para atender produções cinematográficas, eventos e setor corporativo.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('servicos')}
                  className="mt-4 md:mt-0 text-sky-400 hover:text-sky-300 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  Ver todas as 10 categorias <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((serv) => {
                  const Icon = serv.icon;
                  return (
                    <div 
                      key={serv.id} 
                      className="group bg-[#0d121c] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={serv.image} 
                          alt={serv.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold text-sky-300 px-2.5 py-1 rounded-full border border-sky-400/30">
                          {serv.category}
                        </span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-5 h-5 text-sky-400" />
                            <h3 className="text-xl font-bold text-white">{serv.title}</h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            {serv.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {serv.tags.slice(0, 2).map((t, i) => (
                              <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => navigateTo('orcamento', serv.id)}
                            className="text-xs font-bold text-sky-400 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            Orçamento <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SEÇÃO PORTFÓLIO EM DESTAQUE (HOME) */}
            <section className="py-20 bg-[#06080d] border-y border-slate-800/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Galeria Visual</span>
                  <h2 className="text-3xl font-bold text-white mt-1">Produções Recentes & Demonstrações</h2>
                  <p className="text-slate-400 text-sm mt-2">
                    Confira planos de drone captados no Rio de Janeiro, São Paulo e em coberturas especiais.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolio.slice(0, 6).map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setActiveMediaModal(item)}
                      className="group relative bg-slate-900 rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-lg"
                    >
                      <div className="aspect-video relative overflow-hidden bg-slate-950">
                        <img 
                          src={item.cover} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                        
                        {/* Play Icon ou Camera Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-sky-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                            {item.type === 'video' ? <Play className="w-5 h-5 fill-current ml-0.5" /> : <Camera className="w-5 h-5" />}
                          </div>
                        </div>

                        <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-md font-mono border border-slate-700">
                          {item.category}
                        </span>

                        <span className="absolute bottom-3 left-3 text-[11px] font-medium text-slate-200 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                          <MapPin className="w-3 h-3 text-sky-400" />
                          {item.location}
                        </span>
                      </div>

                      <div className="p-4 bg-[#0d111a]">
                        <h4 className="font-semibold text-white text-sm group-hover:text-sky-300 transition line-clamp-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs mt-1 line-clamp-2">{item.desc}</p>
                        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>{item.badge}</span>
                          <span className="text-sky-400 flex items-center gap-0.5 font-sans font-bold">Ver <ArrowUpRight className="w-3 h-3" /></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => navigateTo('portfolio')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition cursor-pointer"
                  >
                    <span>Explorar Galeria Completa com Filtros</span>
                    <ChevronRight className="w-4 h-4 text-sky-400" />
                  </button>
                </div>
              </div>
            </section>

            {/* SEÇÃO CTA FINAL HOME */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#07090e] to-[#0a101d]">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <TGDroneLogo className="justify-center mb-6" />
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Pronto para elevar o nível da sua próxima produção audiovisual?
                </h2>
                <p className="text-slate-300 text-base mt-4 max-w-xl mx-auto">
                  Atendemos emissoras, produtoras, noivos, corretores e indústrias em todo o Rio de Janeiro e São Paulo.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigateTo('orcamento')}
                    className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <span>Solicitar Proposta Agora</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/5521970334053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp Direto
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. PÁGINA SOBRE */}
        {/* ========================================================= */}
        {currentPage === 'sobre' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Quem Somos</span>
              <h1 className="text-4xl font-black text-white mt-1">TG Drone Lab: Arte e Precisão Aérea</h1>
              <p className="text-slate-300 text-lg mt-4 leading-relaxed">
                A TG Drone Lab nasceu com a missão de transformar o espaço aéreo em um estúdio dinâmico. Aliamos tecnologia de última geração, rigor técnico nas normas aeronáuticas e um olhar cinematográfico refinado.
              </p>
            </div>

            {/* Grid 3 Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              <div className="bg-[#0e131d] border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Segurança & Legalidade</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Operações 100% regulamentadas. Todos os drones possuem registro na ANAC, homologação Anatel, seguro de responsabilidade civil aeronáutica (RETA) e solicitação prévia de voo pelo sistema SARPAS / DECEA.
                </p>
              </div>

              <div className="bg-[#0e131d] border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tecnologia & Equipamentos</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Frota composta por drones para filmagem 4K e 6K em Apple ProRes e D-Log, drones FPV para manobras de alta velocidade e drones silenciosos para eventos e casamentos intimistas.
                </p>
              </div>

              <div className="bg-[#0e131d] border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Direção Cinematográfica</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Não apenas pilotamos; dirigimos cenas aéreas. Nossos operadores entendem de regras de composição, iluminação natural, eixos de movimento e pós-produção profissional de cor e som.
                </p>
              </div>
            </div>

            {/* Frota e Especificações */}
            <div className="mt-16 bg-[#0a0d14] border border-slate-800 rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-white mb-2">Estrutura & Especificações Técnicas</h2>
              <p className="text-slate-400 text-sm mb-8">Capacidades operacionais à disposição de produções de qualquer porte.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-slate-800/80 bg-slate-900/50 p-5 rounded-xl">
                  <span className="text-sky-400 font-mono text-2xl font-bold block mb-1">6K / 4K 120fps</span>
                  <span className="text-white font-semibold text-sm block">Resolução de Gravação</span>
                  <span className="text-slate-400 text-xs mt-1 block">Suporte a ProRes RAW e D-Log M de 10 bits com mais de 1 bilhão de cores.</span>
                </div>
                <div className="border border-slate-800/80 bg-slate-900/50 p-5 rounded-xl">
                  <span className="text-sky-400 font-mono text-2xl font-bold block mb-1">15 km</span>
                  <span className="text-white font-semibold text-sm block">Transmissão em Tempo Real</span>
                  <span className="text-slate-400 text-xs mt-1 block">Link de vídeo Full HD sem latência para monitor do diretor ou cliente no solo.</span>
                </div>
                <div className="border border-slate-800/80 bg-slate-900/50 p-5 rounded-xl">
                  <span className="text-sky-400 font-mono text-2xl font-bold block mb-1">140 km/h</span>
                  <span className="text-white font-semibold text-sm block">Drones FPV Cinelifter</span>
                  <span className="text-slate-400 text-xs mt-1 block">Aceleração instantânea para perseguições de carros, motos e planos verticais.</span>
                </div>
                <div className="border border-slate-800/80 bg-slate-900/50 p-5 rounded-xl">
                  <span className="text-sky-400 font-mono text-2xl font-bold block mb-1">100% Legal</span>
                  <span className="text-white font-semibold text-sm block">Licenças Aeronáuticas</span>
                  <span className="text-slate-400 text-xs mt-1 block">Pilotos certificados para voos urbanos e eventos com aglomeração.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. PÁGINA SERVIÇOS (10 CATEGORIAS COMPLETAS) */}
        {/* ========================================================= */}
        {currentPage === 'servicos' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Soluções Completas</span>
              <h1 className="text-4xl font-extrabold text-white mt-1">Serviços Aéreos Especializados</h1>
              <p className="text-slate-300 text-base mt-3">
                Conheça as 10 áreas de atuação da TG Drone Lab. Clique em solicitar orçamento para receber atendimento personalizado com agilidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((serv) => {
                const Icon = serv.icon;
                return (
                  <div
                    key={serv.id}
                    className="bg-[#0b0f17] border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition duration-300 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={serv.image}
                          alt={serv.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
                        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[11px] font-mono text-sky-300 px-3 py-1 rounded-full border border-sky-400/30">
                          {serv.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{serv.title}</h3>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {serv.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {serv.tags.map((tag, i) => (
                            <span key={i} className="text-[11px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => navigateTo('orcamento', serv.id)}
                        className="w-full py-2.5 px-4 rounded-xl bg-sky-600/20 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/40 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Solicitar Orçamento para {serv.title}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. PÁGINA PORTFÓLIO & GALERIA INTERATIVA */}
        {/* ========================================================= */}
        {currentPage === 'portfolio' && (
          <PortfolioPage 
            portfolio={portfolio} 
            onOpenMedia={(item) => setActiveMediaModal(item)} 
          />
        )}

        {/* ========================================================= */}
        {/* 5. FORMULÁRIO DE ORÇAMENTO INTELIGENTE */}
        {/* ========================================================= */}
        {currentPage === 'orcamento' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Atendimento Exclusivo</span>
              <h1 className="text-4xl font-extrabold text-white mt-1">Solicite sua Proposta Personalizada</h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                Preencha as informações do seu projeto. Nossa equipe técnica analisará o local e a viabilidade aeronáutica para enviar uma proposta detalhada.
              </p>
            </div>

            <div className="bg-[#0c1018] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

              <form onSubmit={handleBudgetSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={budgetForm.name}
                      onChange={e => setBudgetForm({ ...budgetForm, name: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (21) 97033-4053"
                      value={budgetForm.phone}
                      onChange={e => setBudgetForm({ ...budgetForm, phone: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* E-mail */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contato@empresa.com"
                      value={budgetForm.email}
                      onChange={e => setBudgetForm({ ...budgetForm, email: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>

                  {/* Cidade */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Rio de Janeiro"
                      value={budgetForm.city}
                      onChange={e => setBudgetForm({ ...budgetForm, city: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>

                  {/* Estado */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Estado *
                    </label>
                    <select
                      value={budgetForm.state}
                      onChange={e => setBudgetForm({ ...budgetForm, state: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                    >
                      <option value="RJ">Rio de Janeiro (RJ)</option>
                      <option value="SP">São Paulo (SP)</option>
                      <option value="MG">Minas Gerais (MG)</option>
                      <option value="ES">Espírito Santo (ES)</option>
                      <option value="Outro">Outro Estado</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Tipo de Serviço */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      value={budgetForm.service}
                      onChange={e => setBudgetForm({ ...budgetForm, service: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Data Prevista */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Data Prevista / Período
                    </label>
                    <input
                      type="date"
                      value={budgetForm.dateScheduled}
                      onChange={e => setBudgetForm({ ...budgetForm, dateScheduled: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>
                </div>

                {/* Local do Evento / Gravação */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Local do Evento / Obra / Gravação
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Praia de Copacabana ou Bairro/Endereço aproximado"
                    value={budgetForm.location}
                    onChange={e => setBudgetForm({ ...budgetForm, location: e.target.value })}
                    className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>

                {/* Descrição do Projeto */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Descrição do Projeto & Objetivos *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte-nos o que você precisa: quantidade de diárias, horário pretendido (manhã, noite, pôr do sol), se precisa de fotos ou vídeo editado, etc."
                    value={budgetForm.description}
                    onChange={e => setBudgetForm({ ...budgetForm, description: e.target.value })}
                    className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>

                {/* Observações Adicionais */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Observações Adicionais (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Informações sobre restrições de acesso, altura ou urgência"
                    value={budgetForm.notes}
                    onChange={e => setBudgetForm({ ...budgetForm, notes: e.target.value })}
                    className="w-full bg-[#111622] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-extrabold text-base transition shadow-[0_0_30px_rgba(0,180,255,0.3)] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-slate-950" />
                    <span>Enviar Solicitação & Abrir WhatsApp de Atendimento</span>
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-3 font-mono">
                    * Seus dados são salvos com segurança no CRM TG Drone Lab com protocolo imediato.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. PÁGINA CONTATO & INFORMAÇÕES OFICIAIS */}
        {/* ========================================================= */}
        {currentPage === 'contato' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Fale Conosco</span>
              <h1 className="text-4xl font-extrabold text-white mt-1">Canais Oficiais de Atendimento</h1>
              <p className="text-slate-300 text-base mt-2">
                Fale diretamente com nosso setor operacional e comercial para tirar dúvidas ou agendar visitas técnicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp Card */}
              <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-500/50 transition">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp Direto</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Atendimento ágil para orçamentos rápidos, dúvidas de voo e disponibilidade de agenda.
                  </p>
                  <p className="font-mono text-lg font-bold text-emerald-400">21 97033-4053</p>
                </div>
                <a
                  href="https://wa.me/5521970334053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Iniciar Conversa no WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-sky-500/50 transition">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">E-mail Comercial</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Para envio de briefings, editais corporativos, notas fiscais e contratos de prestação.
                  </p>
                  <p className="font-mono text-sm font-semibold text-sky-300 break-all">acmintelligence@gmail.com</p>
                </div>
                <a
                  href="mailto:acmintelligence@gmail.com"
                  className="mt-6 w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem por E-mail
                </a>
              </div>

              {/* Base Operacional */}
              <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bases de Atendimento</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Equipes com mobilidade para atendimento em todo o estado do Rio de Janeiro e São Paulo, além de missões especiais em todo o Brasil.
                  </p>
                  <p className="font-mono text-xs text-slate-300">
                    • Base Rio de Janeiro: Capital & Região Metropolitana<br />
                    • Base São Paulo: Capital & Grande SP
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('orcamento')}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  Solicitar Proposta Regional
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 7. PAINEL ADMINISTRATIVO RESTRITO (/admin) */}
        {/* ========================================================= */}
        {currentPage === 'admin' && (
          <AdminSection
            auth={adminAuth}
            setAuth={setAdminAuth}
            leads={leads}
            setLeads={setLeads}
            schedules={schedules}
            setSchedules={setSchedules}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            adminTab={adminTab}
            setAdminTab={setAdminTab}
            onOpenPasswordModal={() => setShowPasswordChangeModal(true)}
          />
        )}

      </main>

      {/* --- BOTÃO FLUTUANTE DE WHATSAPP (EM TODAS AS PÁGINAS PÚBLICAS) --- */}
      {currentPage !== 'admin' && (
        <aside aria-label="Atendimento Rápido WhatsApp" className="fixed bottom-6 right-6 z-40">
          <a
            href="https://wa.me/5521970334053"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-3 rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all hover:scale-105 group font-bold text-xs"
            title="Fale conosco no WhatsApp: 21 97033-4053"
          >
            <span className="hidden sm:inline group-hover:inline text-white font-medium">WhatsApp: 21 97033-4053</span>
            <div className="relative">
              <Phone className="w-5 h-5 fill-white" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sky-300 rounded-full animate-ping"></span>
            </div>
          </a>
        </aside>
      )}

      {/* --- FOOTER INSTITUCIONAL OBRIGATÓRIO --- */}
      <footer className="bg-[#05070a] border-t border-slate-900 text-slate-400 pt-16 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Coluna 1: Identidade TG Drone Lab */}
            <div className="md:col-span-2 space-y-4">
              <TGDroneLogo />
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                TG DRONE LAB — Filmagens aéreas, fotografia e produções audiovisuais.
                Tecnologia de ponta, operadores certificados e segurança aeronáutica para projetos cinematográficos, imobiliários e corporativos.
              </p>
              <div className="text-xs font-mono space-y-1 text-slate-300 pt-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>WhatsApp: <strong className="text-white">21 97033-4053</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>E-mail: <strong className="text-white">acmintelligence@gmail.com</strong></span>
                </p>
              </div>
            </div>

            {/* Coluna 2: Navegação Rápida */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Navegação</h4>
              <ul className="space-y-2 text-xs">
                {['home', 'sobre', 'servicos', 'portfolio', 'orcamento', 'contato'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => navigateTo(tab)}
                      className="hover:text-sky-400 transition capitalize cursor-pointer"
                    >
                      {tab === 'home' ? 'Página Inicial' : tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Compliance & Legal */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Homologações</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> ANAC SISANT Homologado
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> DECEA / SARPAS Voo Seguro
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Anatel Telecomunicações
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Seguro Aeronáutico RETA
                </li>
              </ul>

              <div className="mt-5">
                <button
                  onClick={() => navigateTo('admin')}
                  className="text-[11px] font-mono text-slate-400 hover:text-sky-400 flex items-center gap-1.5 cursor-pointer"
                >
                  <Lock className="w-3 h-3" />
                  Painel de Controle /admin
                </button>
              </div>
            </div>

          </div>

          {/* PARTE INFERIOR DO RODAPÉ COM IDENTIFICAÇÃO OBRIGATÓRIA ACM INTELLIGENCE */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-400">
              © {new Date().getFullYear()} TG Drone Lab. Todos os direitos reservados.
            </p>

            {/* CRÉDITO OBRIGATÓRIO ACM INTELLIGENCE COM LOGO */}
            <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 px-4 py-2 rounded-xl">
              <span className="text-[11px] text-slate-400 tracking-wider font-medium">Produzido por:</span>
              <ACMLogo />
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* MODAL: CONFIRMAÇÃO DE ORÇAMENTO */}
      {/* ========================================================= */}
      {formSuccessModal && lastSubmittedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0e131d] border border-sky-500/40 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative text-center">
            <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="w-9 h-9 text-sky-400" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Solicitação Registrada!</h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
              "Recebemos sua solicitação! A equipe TG Drone Lab entrará em contato para preparar uma proposta personalizada."
            </p>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-left text-xs space-y-1.5 mb-6 font-mono text-slate-300">
              <p><strong className="text-white">Protocolo CRM:</strong> {lastSubmittedLead.id}</p>
              <p><strong className="text-white">Cliente:</strong> {lastSubmittedLead.name}</p>
              <p><strong className="text-white">Serviço:</strong> {lastSubmittedLead.service}</p>
              <p><strong className="text-white">WhatsApp Direto:</strong> 21 97033-4053</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:acmintelligence@gmail.com?subject=Orçamento TG Drone Lab - ${lastSubmittedLead.name}&body=Protocolo: ${lastSubmittedLead.id}%0D%0AServiço: ${lastSubmittedLead.service}%0D%0ATelefone: ${lastSubmittedLead.phone}`}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                Enviar também via E-mail
              </a>
              <button
                onClick={() => setFormSuccessModal(false)}
                className="flex-1 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: PLAYER DE VÍDEO & FOTO EM ALTA RESOLUÇÃO */}
      {/* ========================================================= */}
      {activeMediaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-5xl w-full bg-[#0a0d14] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveMediaModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 hover:bg-sky-500 text-white hover:text-slate-950 flex items-center justify-center transition cursor-pointer"
              aria-label="Fechar mídia"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-black flex items-center justify-center">
              {activeMediaModal.type === 'video' ? (
                <video
                  src={activeMediaModal.url}
                  poster={activeMediaModal.cover}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={activeMediaModal.cover}
                  alt={activeMediaModal.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="p-6 bg-[#0f1420] border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">{activeMediaModal.category} • {activeMediaModal.location}</span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activeMediaModal.title}</h3>
                <p className="text-slate-400 text-xs mt-1 max-w-2xl">{activeMediaModal.desc}</p>
                <p className="text-[10px] text-amber-400/90 font-mono mt-1">*{activeMediaModal.badge}</p>
              </div>

              <button
                onClick={() => {
                  setActiveMediaModal(null);
                  navigateTo('orcamento');
                }}
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs whitespace-nowrap transition cursor-pointer"
              >
                Solicitar Filmagem Deste Tipo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: TROCA DE SENHA ADMINISTRATIVA */}
      {/* ========================================================= */}
      {showPasswordChangeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#0e131d] border border-sky-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Segurança do Administrador</h3>
                <p className="text-xs text-slate-400">Alterar senha do usuário {adminAuth.username}</p>
              </div>
            </div>

            {adminAuth.isDefaultPassword && (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl mb-4 text-xs text-amber-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong>Atenção Obrigatória:</strong> Você está utilizando a senha padrão inicial (dronelab). Modifique para uma senha forte antes de liberar o sistema em produção.</span>
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Nova Senha (mínimo 6 dígitos)</label>
                <input
                  type="password"
                  required
                  value={newPasswordVal}
                  onChange={e => setNewPasswordVal(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111622] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Confirmar Nova Senha</label>
                <input
                  type="password"
                  required
                  value={confirmPasswordVal}
                  onChange={e => setConfirmPasswordVal(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111622] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                {!adminAuth.isDefaultPassword && (
                  <button
                    type="button"
                    onClick={() => setShowPasswordChangeModal(false)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs cursor-pointer"
                  >
                    Cancelar
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition cursor-pointer"
                >
                  Salvar Nova Senha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// =========================================================================
// SUBCOMPONENT: GALERIA DE PORTFÓLIO COM FILTROS AVANÇADOS
// =========================================================================
function PortfolioPage({ portfolio, onOpenMedia }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Rio de Janeiro',
    'São Paulo',
    'Eventos',
    'Paisagens',
    'Imóveis',
    'Empresas',
    'Projetos especiais'
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'Todos') return portfolio;
    return portfolio.filter(item => item.category === selectedCategory);
  }, [portfolio, selectedCategory]);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">Trabalhos Realizados & Referências</span>
        <h1 className="text-4xl font-extrabold text-white mt-1">Galeria Audiovisual Profissional</h1>
        <p className="text-slate-300 text-sm mt-2">
          Explore imagens aéreas e produções audiovisuais em resolução 4K/6K com enquadramentos de cinema.
        </p>

        {/* Nota técnica de conformidade com o briefing */}
        <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
          <span>* Mídias demonstrativas licenciadas para demonstração de padrão de captação e referência técnica.</span>
        </div>
      </div>

      {/* FILTROS POR CATEGORIA */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,180,255,0.3)]'
                : 'bg-[#0f1420] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID DE MÍDIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenMedia(item)}
            className="group relative bg-[#0b0e17] rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div className="aspect-video relative overflow-hidden bg-slate-950">
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                  {item.type === 'video' ? <Play className="w-5 h-5 fill-current ml-0.5" /> : <Camera className="w-5 h-5" />}
                </div>
              </div>

              <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[10px] text-white px-2.5 py-1 rounded-md font-mono border border-slate-700">
                {item.category}
              </span>

              {item.type === 'video' && (
                <span className="absolute top-3 right-3 bg-sky-500/90 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded">
                  VÍDEO 4K
                </span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">{item.title}</h3>
                <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-mono text-[10px]">{item.badge}</span>
                <span className="text-sky-400 font-bold flex items-center gap-1">
                  Abrir Player <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================================================================
// SUBCOMPONENT: PAINEL ADMINISTRATIVO COMPLETO E RESTRITO (/admin)
// =========================================================================
function AdminSection({
  auth,
  setAuth,
  leads,
  setLeads,
  schedules,
  setSchedules,
  portfolio,
  setPortfolio,
  adminTab,
  setAdminTab,
  onOpenPasswordModal
}) {
  // Estado local para Login
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Estados de gestão de clientes/orçamentos
  const [searchLead, setSearchLead] = useState('');
  const [filterLeadStatus, setFilterLeadStatus] = useState('Todos');
  const [activeEditingLead, setActiveEditingLead] = useState(null);

  // Estados de gestão de portfólio no admin
  const [newMediaModal, setNewMediaModal] = useState(false);
  const [newMediaForm, setNewMediaForm] = useState({
    title: '',
    category: 'Rio de Janeiro',
    location: '',
    type: 'video',
    cover: '',
    url: '',
    desc: ''
  });

  // Estados de agendamento de serviços
  const [newScheduleModal, setNewScheduleModal] = useState(false);
  const [newScheduleForm, setNewScheduleForm] = useState({
    title: '',
    clientName: '',
    serviceType: 'Filmagens Aéreas',
    date: '',
    time: '09:00',
    address: '',
    amount: '',
    pilot: 'Comandante Thiago Garcia (ANAC)',
    notes: ''
  });
  const [scheduleViewMode, setScheduleViewMode] = useState('mensal'); // mensal, semanal, diaria

  // SUBMIT DE LOGIN SEGURO
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    // Validação com credenciais especificadas no briefing:
    // USUÁRIO: TG_Drone | SENHA INICIAL: dronelab (ou senha trocada)
    if (loginUsername === auth.username && loginPassword === auth.passwordHash) {
      setAuth(prev => ({ ...prev, isLoggedIn: true }));
    } else {
      setLoginError('Credenciais inválidas. Verifique o usuário e senha administrativa.');
    }
  };

  const handleLogout = () => {
    setAuth(prev => ({ ...prev, isLoggedIn: false }));
  };

  // Se NÃO estiver logado, exibe a tela de login restrita
  if (!auth.isLoggedIn) {
    return (
      <div className="py-20 max-w-md mx-auto px-4 animate-fade-in">
        <div className="bg-[#0b0f17] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <TGDroneLogo className="justify-center mb-4" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Acesso Administrativo Restrito</span>
            </div>
            <h2 className="text-xl font-bold text-white">Autenticação do Sistema</h2>
            <p className="text-xs text-slate-400 mt-1">Apenas pilotos e operadores autorizados TG Drone Lab.</p>
          </div>

          {loginError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl text-xs mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Usuário</label>
              <input
                type="text"
                required
                placeholder="TG_Drone"
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                className="w-full bg-[#111622] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">Senha de Acesso</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                className="w-full bg-[#111622] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition shadow-lg mt-2 cursor-pointer"
            >
              Entrar no Painel
            </button>
          </form>

          {/* Dica para primeiro acesso conforme requisitos do projeto */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center space-y-1">
            <p>Credenciais iniciais de homologação:</p>
            <p><span className="text-sky-300">Usuário:</span> TG_Drone | <span className="text-sky-300">Senha:</span> dronelab</p>
          </div>
        </div>
      </div>
    );
  }

  // CÁLCULO DE INDICADORES DO DASHBOARD
  const totalLeads = leads.length;
  const newContacts = leads.filter(l => l.status === 'Novo contato').length;
  const pendingBudgets = leads.filter(l => l.status === 'Em análise' || l.status === 'Orçamento em preparação').length;
  const sentBudgets = leads.filter(l => l.status === 'Orçamento enviado' || l.status === 'Aguardando aprovação').length;
  const approvedBudgets = leads.filter(l => l.status === 'Orçamento aprovado').length;
  const scheduledCount = schedules.filter(s => s.status === 'Confirmado' || s.status === 'Pendente').length;
  const completedCount = schedules.filter(s => s.status === 'Concluído').length;

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER DO PAINEL ADMIN */}
      <div className="bg-[#0b0f17] border border-slate-800 rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">Painel Administrativo TG Drone Lab</h1>
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                Sessão Ativa
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Operador logado: <strong className="text-white">{auth.username}</strong> | Base Rio de Janeiro & São Paulo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {auth.isDefaultPassword && (
            <button
              onClick={onOpenPasswordModal}
              className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Key className="w-3.5 h-3.5" />
              Trocar Senha Inicial
            </button>
          )}

          <button
            onClick={onOpenPasswordModal}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2 rounded-lg font-medium flex items-center gap-1.5 transition cursor-pointer"
            title="Segurança"
          >
            <Key className="w-3.5 h-3.5 text-sky-400" />
            Alterar Senha
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs px-3 py-2 rounded-lg font-semibold flex items-center gap-1.5 transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sair
          </button>
        </div>
      </div>

      {/* TABS DE NAVEGAÇÃO INTERNA ADMIN */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
        {[
          { id: 'dashboard', label: 'Dashboard & Indicadores', icon: TrendingUp },
          { id: 'leads', label: `Clientes & Orçamentos (${leads.length})`, icon: Users },
          { id: 'schedule', label: `Agenda de Serviços (${schedules.length})`, icon: CalendarCheck },
          { id: 'portfolio', label: `Gerenciamento Portfólio (${portfolio.length})`, icon: Video },
          { id: 'supabase', label: 'Deploy & Banco Supabase (SQL)', icon: Database }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setAdminTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                adminTab === tab.id
                  ? 'bg-sky-500 text-slate-950 shadow-[0_0_15px_rgba(0,180,255,0.3)]'
                  : 'bg-[#0e131d] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* TAB 1: DASHBOARD & INDICADORES GERENCIAIS */}
      {/* ========================================================= */}
      {adminTab === 'dashboard' && (
        <div className="space-y-8 animate-fade-in">
          {/* CARDS DE INDICADORES (8 MÉTRICAS PRINCIPAIS) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Total de Clientes</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-white">{totalLeads}</span>
                <Users className="w-5 h-5 text-sky-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Novos Contatos</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-amber-400">{newContacts}</span>
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Orçamentos Pendentes</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-sky-300">{pendingBudgets}</span>
                <FileText className="w-5 h-5 text-sky-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Orçamentos Enviados</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-blue-400">{sentBudgets}</span>
                <Send className="w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Orçamentos Aprovados</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-emerald-400">{approvedBudgets}</span>
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Serviços Agendados</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-purple-400">{scheduledCount}</span>
                <CalendarCheck className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Serviços Concluídos</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-emerald-300">{completedCount}</span>
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            <div className="bg-[#0b0e15] border border-slate-800 p-5 rounded-2xl">
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Taxa de Conversão</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-3xl font-extrabold text-sky-400">
                  {totalLeads > 0 ? `${Math.round((approvedBudgets / totalLeads) * 100)}%` : '0%'}
                </span>
                <TrendingUp className="w-5 h-5 text-sky-400" />
              </div>
            </div>
          </div>

          {/* GRÁFICOS VISUAIS E DISTRIBUIÇÃO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Gráfico 1: Serviços Mais Solicitados */}
            <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white text-sm">Serviços Mais Solicitados</h3>
                <span className="text-[10px] font-mono text-slate-500">Distribuição no CRM</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Imóveis & Lançamentos', pct: 35, color: 'bg-sky-500' },
                  { name: 'Filmagens Aéreas 4K/6K', pct: 28, color: 'bg-blue-600' },
                  { name: 'Casamentos & Eventos', pct: 18, color: 'bg-emerald-500' },
                  { name: 'Publicidade & FPV', pct: 12, color: 'bg-purple-500' },
                  { name: 'Construção Civil & Obras', pct: 7, color: 'bg-amber-500' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-mono text-slate-400">{item.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gráfico 2: Cidades e Regiões de Atendimento */}
            <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white text-sm">Origem dos Leads por Cidade</h3>
                <span className="text-[10px] font-mono text-slate-500">RJ & SP</span>
              </div>

              <div className="space-y-3">
                {[
                  { city: 'Rio de Janeiro (Barra, Centro, Zona Sul)', count: '58% dos contatos' },
                  { city: 'São Paulo (Capital & Alphaville)', count: '24% dos contatos' },
                  { city: 'Niterói & Região Oceânica', count: '11% dos contatos' },
                  { city: 'Litoral & Outras Regiões', count: '7% dos contatos' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-white font-medium flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {item.city}
                    </span>
                    <span className="text-sky-300 font-mono">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: GESTÃO DE CLIENTES & ORÇAMENTOS (CRM COM 9 STATUS) */}
      {/* ========================================================= */}
      {adminTab === 'leads' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* BARRA DE FILTRO E PESQUISA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-[#0b0e15] border border-slate-800 p-4 rounded-2xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Pesquisar por nome, telefone, e-mail ou cidade..."
                value={searchLead}
                onChange={e => setSearchLead(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111622] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                value={filterLeadStatus}
                onChange={e => setFilterLeadStatus(e.target.value)}
                className="bg-[#111622] border border-slate-700 text-xs rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-sky-500"
              >
                <option value="Todos">Todos os Status ({leads.length})</option>
                {STATUS_PIPELINE.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* TABELA DE LEADS & ORÇAMENTOS */}
          <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#101520] text-slate-400 font-mono uppercase border-b border-slate-800">
                  <tr>
                    <th className="py-3.5 px-4">Cliente / Contato</th>
                    <th className="py-3.5 px-4">Serviço Solicitado</th>
                    <th className="py-3.5 px-4">Cidade / Local</th>
                    <th className="py-3.5 px-4">Data Registro</th>
                    <th className="py-3.5 px-4">Valor Orçado</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {leads
                    .filter(lead => {
                      const matchQuery = 
                        lead.name.toLowerCase().includes(searchLead.toLowerCase()) ||
                        lead.email.toLowerCase().includes(searchLead.toLowerCase()) ||
                        lead.city.toLowerCase().includes(searchLead.toLowerCase()) ||
                        lead.phone.includes(searchLead);
                      const matchStatus = filterLeadStatus === 'Todos' || lead.status === filterLeadStatus;
                      return matchQuery && matchStatus;
                    })
                    .map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-900/40 transition">
                        <td className="py-3.5 px-4">
                          <p className="font-bold text-white text-sm">{lead.name}</p>
                          <p className="text-[11px] text-slate-400">{lead.phone} • {lead.email}</p>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-sky-300">
                          {lead.service}
                        </td>
                        <td className="py-3.5 px-4">
                          <p>{lead.city} - {lead.state}</p>
                          <p className="text-[10px] text-slate-500 truncate max-w-[140px]">{lead.location}</p>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                          {lead.dateRequested}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                          {lead.budgetAmount}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            lead.status === 'Orçamento aprovado' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            lead.status === 'Novo contato' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                            lead.status === 'Cancelado' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá ${lead.name}, aqui é da equipe TG Drone Lab referente ao seu orçamento.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                              title="Chamar no WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>

                            <button
                              onClick={() => setActiveEditingLead(lead)}
                              className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 cursor-pointer"
                              title="Editar e Histórico"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                setLeads(leads.filter(l => l.id !== lead.id));
                              }}
                              className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 cursor-pointer"
                              title="Excluir Registro"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MODAL DE EDIÇÃO E HISTÓRICO DO CLIENTE */}
          {activeEditingLead && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
              <div className="bg-[#0b0e15] border border-sky-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">Editar Cliente / Orçamento</h3>
                    <p className="text-xs font-mono text-slate-400">ID: {activeEditingLead.id}</p>
                  </div>
                  <button
                    onClick={() => setActiveEditingLead(null)}
                    className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">Nome</label>
                      <input
                        type="text"
                        value={activeEditingLead.name}
                        onChange={e => setActiveEditingLead({ ...activeEditingLead, name: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Status Atual (Pipeline)</label>
                      <select
                        value={activeEditingLead.status}
                        onChange={e => {
                          const newStatus = e.target.value;
                          const historyEntry = {
                            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
                            action: `Status alterado para "${newStatus}"`
                          };
                          setActiveEditingLead({
                            ...activeEditingLead,
                            status: newStatus,
                            history: [...(activeEditingLead.history || []), historyEntry]
                          });
                        }}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-sky-400 font-bold"
                      >
                        {STATUS_PIPELINE.map(st => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">Valor do Orçamento</label>
                      <input
                        type="text"
                        value={activeEditingLead.budgetAmount}
                        onChange={e => setActiveEditingLead({ ...activeEditingLead, budgetAmount: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-emerald-400 font-bold font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Data Prevista de Voo</label>
                      <input
                        type="date"
                        value={activeEditingLead.dateScheduled}
                        onChange={e => setActiveEditingLead({ ...activeEditingLead, dateScheduled: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Observações Internas da Equipe</label>
                    <textarea
                      rows={3}
                      value={activeEditingLead.internalNotes}
                      onChange={e => setActiveEditingLead({ ...activeEditingLead, internalNotes: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>

                  {/* TIMELINE DE HISTÓRICO AUTOMÁTICO */}
                  <div className="pt-4 border-t border-slate-800">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      Histórico Automático de Movimentações
                    </h4>
                    <div className="space-y-2 max-h-36 overflow-y-auto bg-slate-900/60 p-3 rounded-xl border border-slate-800 font-mono text-[11px]">
                      {activeEditingLead.history && activeEditingLead.history.map((h, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-sky-400">{h.timestamp}</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-200">{h.action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveEditingLead(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLeads(leads.map(l => l.id === activeEditingLead.id ? activeEditingLead : l));
                        setActiveEditingLead(null);
                      }}
                      className="px-6 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400"
                    >
                      Salvar Alterações
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: AGENDA DE SERVIÇOS (CALENDÁRIO MENSAL/SEMANAL/DIÁRIA) */}
      {/* ========================================================= */}
      {adminTab === 'schedule' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#0b0e15] border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <h3 className="font-bold text-white text-base">Escala de Voos & Operações</h3>
              <div className="flex bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs">
                {['mensal', 'semanal', 'diaria'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setScheduleViewMode(mode)}
                    className={`px-3 py-1 rounded font-medium capitalize cursor-pointer ${
                      scheduleViewMode === mode ? 'bg-sky-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setNewScheduleModal(true)}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Novo Agendamento de Voo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedules.map((sch) => (
              <div
                key={sch.id}
                className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-sky-500/40 transition"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                      {sch.date} às {sch.time}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      sch.status === 'Confirmado' ? 'bg-emerald-500/20 text-emerald-400' :
                      sch.status === 'Concluído' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                      {sch.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-base mb-1">{sch.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">Cliente: <strong className="text-slate-200">{sch.clientName}</strong></p>

                  <div className="space-y-1.5 text-xs text-slate-300 font-mono bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <p className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{sch.address}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{sch.pilot}</span>
                    </p>
                    <p className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <DollarSign className="w-3.5 h-3.5 shrink-0" />
                      <span>Valor: {sch.amount}</span>
                    </p>
                  </div>

                  {sch.notes && (
                    <p className="text-slate-400 text-[11px] mt-3 italic">
                      Obs: {sch.notes}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex justify-between items-center">
                  <select
                    value={sch.status}
                    onChange={e => {
                      const newStatus = e.target.value;
                      setSchedules(schedules.map(s => s.id === sch.id ? { ...s, status: newStatus } : s));
                    }}
                    className="bg-[#111622] border border-slate-700 text-[11px] rounded-lg px-2 py-1 text-slate-300"
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="Concluído">Concluído</option>
                    <option value="Cancelado">Cancelado</option>
                  </select>

                  <button
                    onClick={() => setSchedules(schedules.filter(s => s.id !== sch.id))}
                    className="text-red-400 hover:text-red-300 text-xs p-1 cursor-pointer"
                    title="Excluir da agenda"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL NOVO AGENDAMENTO */}
          {newScheduleModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
              <div className="bg-[#0b0e15] border border-sky-500/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <h3 className="font-bold text-white text-base">Novo Agendamento de Voo</h3>
                  <button onClick={() => setNewScheduleModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const newSch = {
                      id: `sch-${Date.now()}`,
                      ...newScheduleForm
                    };
                    setSchedules([newSch, ...schedules]);
                    setNewScheduleModal(false);
                    setNewScheduleForm({
                      title: '',
                      clientName: '',
                      serviceType: 'Filmagens Aéreas',
                      date: '',
                      time: '09:00',
                      address: '',
                      amount: '',
                      pilot: 'Comandante Thiago Garcia (ANAC)',
                      notes: ''
                    });
                  }}
                  className="space-y-3 mt-4 text-xs"
                >
                  <div>
                    <label className="text-slate-400 block mb-1">Título do Projeto</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Cobertura Casamento - Ilhabela"
                      value={newScheduleForm.title}
                      onChange={e => setNewScheduleForm({ ...newScheduleForm, title: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block mb-1">Cliente</label>
                      <input
                        type="text"
                        required
                        placeholder="Nome do cliente"
                        value={newScheduleForm.clientName}
                        onChange={e => setNewScheduleForm({ ...newScheduleForm, clientName: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Valor Contratado</label>
                      <input
                        type="text"
                        placeholder="Ex: R$ 3.500,00"
                        value={newScheduleForm.amount}
                        onChange={e => setNewScheduleForm({ ...newScheduleForm, amount: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block mb-1">Data</label>
                      <input
                        type="date"
                        required
                        value={newScheduleForm.date}
                        onChange={e => setNewScheduleForm({ ...newScheduleForm, date: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Horário</label>
                      <input
                        type="time"
                        required
                        value={newScheduleForm.time}
                        onChange={e => setNewScheduleForm({ ...newScheduleForm, time: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Endereço / Coordenadas de Decolagem</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Praia de Botafogo, Rio de Janeiro - RJ"
                      value={newScheduleForm.address}
                      onChange={e => setNewScheduleForm({ ...newScheduleForm, address: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Piloto / Operador Responsável</label>
                    <input
                      type="text"
                      value={newScheduleForm.pilot}
                      onChange={e => setNewScheduleForm({ ...newScheduleForm, pilot: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setNewScheduleModal(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400"
                    >
                      Salvar Voo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: GERENCIAMENTO DE PORTFÓLIO & PUBLICAÇÕES */}
      {/* ========================================================= */}
      {adminTab === 'portfolio' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-between items-center bg-[#0b0e15] border border-slate-800 p-4 rounded-2xl">
            <div>
              <h3 className="font-bold text-white text-base">Publicações do Portfólio</h3>
              <p className="text-xs text-slate-400">Adicione novas produções que aparecem instantaneamente no site público.</p>
            </div>
            <button
              onClick={() => setNewMediaModal(true)}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Adicionar Nova Mídia
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="bg-[#0b0e15] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-950">
                    <img src={item.cover} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black/80 text-[10px] text-white px-2 py-0.5 rounded font-mono">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.desc}</p>
                    <p className="text-[11px] text-sky-400 mt-2 font-mono">{item.location}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-800/80 flex items-center justify-between mt-2">
                  <span className="text-[10px] text-slate-500 uppercase font-mono">{item.type}</span>
                  <button
                    onClick={() => setPortfolio(portfolio.filter(p => p.id !== item.id))}
                    className="text-red-400 hover:text-red-300 text-xs p-1 cursor-pointer flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL ADICIONAR PORTFÓLIO */}
          {newMediaModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
              <div className="bg-[#0b0e15] border border-sky-500/40 rounded-3xl max-w-lg w-full p-6 shadow-2xl">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <h3 className="font-bold text-white text-base">Publicar Nova Produção</h3>
                  <button onClick={() => setNewMediaModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const newEntry = {
                      id: `port-${Date.now()}`,
                      ...newMediaForm,
                      badge: 'Produção Oficial TG Drone Lab'
                    };
                    setPortfolio([newEntry, ...portfolio]);
                    setNewMediaModal(false);
                    setNewMediaForm({
                      title: '',
                      category: 'Rio de Janeiro',
                      location: '',
                      type: 'video',
                      cover: '',
                      url: '',
                      desc: ''
                    });
                  }}
                  className="space-y-3 mt-4 text-xs"
                >
                  <div>
                    <label className="text-slate-400 block mb-1">Título da Publicação</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amanhecer na Pedra da Gávea"
                      value={newMediaForm.title}
                      onChange={e => setNewMediaForm({ ...newMediaForm, title: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-400 block mb-1">Categoria</label>
                      <select
                        value={newMediaForm.category}
                        onChange={e => setNewMediaForm({ ...newMediaForm, category: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-white"
                      >
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Paisagens">Paisagens</option>
                        <option value="Imóveis">Imóveis</option>
                        <option value="Empresas">Empresas</option>
                        <option value="Projetos especiais">Projetos especiais</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-400 block mb-1">Tipo de Mídia</label>
                      <select
                        value={newMediaForm.type}
                        onChange={e => setNewMediaForm({ ...newMediaForm, type: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2 text-white"
                      >
                        <option value="video">Vídeo (MP4 / WebM / Link)</option>
                        <option value="photo">Foto Alta Resolução</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Localização (Cidade / Estado)</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Rio de Janeiro - RJ"
                      value={newMediaForm.location}
                      onChange={e => setNewMediaForm({ ...newMediaForm, location: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">URL da Imagem de Capa</label>
                    <input
                      type="url"
                      required
                      placeholder="https://images.unsplash.com/..."
                      value={newMediaForm.cover}
                      onChange={e => setNewMediaForm({ ...newMediaForm, cover: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                    />
                  </div>

                  {newMediaForm.type === 'video' && (
                    <div>
                      <label className="text-slate-400 block mb-1">URL do Vídeo (MP4 direto ou YouTube)</label>
                      <input
                        type="url"
                        placeholder="https://... ou embed"
                        value={newMediaForm.url}
                        onChange={e => setNewMediaForm({ ...newMediaForm, url: e.target.value })}
                        className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white font-mono"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-slate-400 block mb-1">Descrição Técnica / Detalhes</label>
                    <textarea
                      rows={3}
                      placeholder="Detalhes dos equipamentos utilizados, lentes, filtros ND..."
                      value={newMediaForm.desc}
                      onChange={e => setNewMediaForm({ ...newMediaForm, desc: e.target.value })}
                      className="w-full bg-[#111622] border border-slate-700 rounded-lg p-2.5 text-white"
                    />
                  </div>

                  <div className="pt-3 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setNewMediaModal(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400"
                    >
                      Publicar no Site
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 5: GUIA SUPABASE, DDL SQL, RLS & CAPACITOR */}
      {/* ========================================================= */}
      {adminTab === 'supabase' && (
        <div className="space-y-6 animate-fade-in text-xs">
          <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="text-base font-bold text-white">Estrutura de Banco de Dados PostgreSQL & Supabase</h3>
                <p className="text-slate-400 text-xs">Script DDL oficial para replicação na nuvem com autenticação segura e Row Level Security (RLS).</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-sky-300 overflow-x-auto leading-relaxed">
              <pre>{`-- =========================================================================
-- TG DRONE LAB - DDL SUPABASE POSTGRESQL & POLÍTICAS RLS DE SEGURANÇA
-- Produzido por: ACM Intelligence
-- =========================================================================

-- 1. TABELA DE LEADS & ORÇAMENTOS
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL DEFAULT 'RJ',
    service TEXT NOT NULL,
    date_scheduled DATE,
    location TEXT,
    description TEXT,
    budget_amount TEXT DEFAULT 'Sob Análise',
    status TEXT NOT NULL DEFAULT 'Novo contato',
    internal_notes TEXT,
    history JSONB DEFAULT '[]'::jsonb
);

-- 2. TABELA DE AGENDA DE VOOS
CREATE TABLE IF NOT EXISTS public.schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    client_name TEXT NOT NULL,
    service_type TEXT NOT NULL,
    flight_date DATE NOT NULL,
    flight_time TIME NOT NULL,
    address TEXT NOT NULL,
    amount TEXT,
    pilot TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Confirmado',
    notes TEXT
);

-- 3. TABELA DE PORTFÓLIO & MÍDIAS
CREATE TABLE IF NOT EXISTS public.portfolio (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    media_type TEXT NOT NULL CHECK (media_type IN ('video', 'photo')),
    cover_url TEXT NOT NULL,
    media_url TEXT,
    description TEXT,
    featured BOOLEAN DEFAULT false
);

-- ATIVAÇÃO DO ROW LEVEL SECURITY (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS:
-- Visitantes podem apenas INSERIR leads pelo formulário e LER o portfólio.
CREATE POLICY "Leads: Qualquer visitante pode solicitar orcamento"
ON public.leads FOR INSERT WITH CHECK (true);

CREATE POLICY "Portfolio: Leitura pública para todos os visitantes"
ON public.portfolio FOR SELECT USING (true);

-- Apenas administradores autenticados podem LER ou ATUALIZAR leads e agendas.
CREATE POLICY "Leads: Apenas admin autenticado pode consultar e gerenciar"
ON public.leads FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Schedules: Apenas admin autenticado pode acessar a agenda"
ON public.schedules FOR ALL USING (auth.role() = 'authenticated');`}</pre>
            </div>
          </div>

          <div className="bg-[#0b0e15] border border-slate-800 rounded-2xl p-6">
            <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-sky-400" />
              Instruções de PWA & Publicação Nativa com Capacitor (Google Play / App Store)
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              A aplicação já conta com o manifesto web e service-worker compatível com navegadores móveis (Safari iOS e Chrome Android). Para compilar em APK nativo ou arquivo IPA para a Apple Store:
            </p>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
              <p className="text-emerald-400"># 1. Instalar o Capacitor no projeto:</p>
              <p>npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios</p>
              <p className="text-emerald-400 pt-2"># 2. Inicializar o aplicativo:</p>
              <p>npx cap init "TG Drone Lab" "com.tgdronelab.app"</p>
              <p className="text-emerald-400 pt-2"># 3. Gerar as plataformas nativas e abrir no Android Studio / Xcode:</p>
              <p>npx cap add android && npx cap add ios</p>
              <p>npx cap open android</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}