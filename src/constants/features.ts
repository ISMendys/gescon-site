import {
  Smartphone,
  Bell,
  Users,
  CalendarCheck,
  BarChart3,
  Package,
  UserPlus,
  Calendar,
  Car,
  DollarSign,
  Megaphone,
  Wallet,
  CreditCard,
  FileText,
  Vote,
  TrendingUp,
  Video,
  DoorOpen,
  AlertCircle,
  ClipboardList,
  Monitor,
} from 'lucide-react';

export const MAIN_FEATURES = [
  {
    icon: Smartphone,
    title: 'App Mobile',
    description: 'App nativo para iOS e Android. Moradores conectados 24/7.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: DollarSign,
    title: 'Gestão Financeira',
    description: 'Controle completo de receitas, despesas e balancetes detalhados.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Bell,
    title: 'Notificações em Tempo Real',
    description: 'WebSocket e push notifications para comunicação instantânea.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Controle de Acesso',
    description: 'QR Code para visitantes, registro de entrada e saída completo.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: CalendarCheck,
    title: 'Reserva de Espaços',
    description: 'Gestão inteligente de áreas comuns com calendário integrado.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Avançados',
    description: 'Dashboards visuais e exportação para Excel/PDF.',
    gradient: 'from-pink-500 to-rose-500',
  },
] as const;

export const MORADOR_FEATURES = [
  {
    icon: Package,
    title: 'Gestão de Encomendas',
    description: 'Notificação automática quando sua encomenda chega. Histórico completo de recebimentos.',
  },
  {
    icon: UserPlus,
    title: 'Cadastro de Visitantes',
    description: 'Pré-cadastre visitantes e gere QR Code para acesso rápido e seguro.',
  },
  {
    icon: Calendar,
    title: 'Reserva de Espaços',
    description: 'Reserve churrasqueira, salão de festas e outros espaços pelo app.',
  },
  {
    icon: Car,
    title: 'Controle de Veículos',
    description: 'Cadastre seus veículos e acompanhe acessos ao condomínio.',
  },
  {
    icon: DollarSign,
    title: 'Transparência Financeira',
    description: 'Visualize balancetes, despesas e receitas do condomínio.',
  },
  {
    icon: Megaphone,
    title: 'Comunicados e Enquetes',
    description: 'Receba comunicados importantes e participe de votações.',
  },
] as const;

export const SINDICO_FEATURES = [
  {
    icon: BarChart3,
    title: 'Dashboard Completo',
    description: 'Visão 360° do condomínio com gráficos e métricas em tempo real.',
  },
  {
    icon: Wallet,
    title: 'Gestão Financeira',
    description: 'Controle total de receitas, despesas, fornecedores e funcionários.',
  },
  {
    icon: CreditCard,
    title: 'Boletos Automáticos',
    description: 'Integração Asaas: gere boletos automaticamente com multas incluídas.',
  },
  {
    icon: FileText,
    title: 'Documentos e Atas',
    description: 'Armazene e compartilhe atas, regimento interno e documentos importantes.',
  },
  {
    icon: Vote,
    title: 'Assembleias Digitais',
    description: 'Realize assembleias online com votação em tempo real.',
  },
  {
    icon: TrendingUp,
    title: 'Relatórios Avançados',
    description: 'Balancetes, relatórios financeiros e exportação personalizada.',
  },
] as const;

export const PORTEIRO_FEATURES = [
  {
    icon: Video,
    title: 'Monitoramento de Câmeras',
    description: 'Visualize até 8 câmeras simultaneamente com layout configurável.',
  },
  {
    icon: Car,
    title: 'Reconhecimento de Placas (LPR)',
    description: 'Identifique automaticamente placas de veículos em tempo real. Registre entrada/saída sem necessidade de digitação manual.',
  },
  {
    icon: DoorOpen,
    title: 'Controle de Acesso',
    description: 'Registre entradas e saídas de moradores, visitantes e veículos.',
  },
  {
    icon: Package,
    title: 'Recebimento de Encomendas',
    description: 'Registre encomendas e notifique moradores automaticamente.',
  },
  {
    icon: AlertCircle,
    title: 'Botão de Pânico',
    description: 'Botão flutuante sempre visível para emergências.',
  },
  {
    icon: ClipboardList,
    title: 'Registro de Ocorrências',
    description: 'Documente incidentes com fotos e descrições detalhadas.',
  },
  {
    icon: Monitor,
    title: 'App Desktop',
    description: 'Electron app otimizado para Windows, macOS e Linux.',
  },
] as const;

export const INTEGRATIONS = [
  {
    icon: CreditCard,
    title: 'Asaas Pagamentos',
    description: 'Boletos, PIX, assinaturas recorrentes e baixa automática.',
    badge: 'Integrado',
  },
  {
    icon: Video,
    title: 'Câmeras IP',
    description: 'Compatível com câmeras RTSP, ONVIF e principais fabricantes.',
    badge: 'Compatível',
  },
  {
    icon: Smartphone,
    title: 'Email/SMS',
    description: 'Notificações automáticas por email e SMS.',
    badge: 'Ativo',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Notificações push nativas para iOS e Android.',
    badge: 'Nativo',
  },
] as const;
