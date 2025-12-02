import { Service, Testimonial, FaqItem, GalleryItem } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Sobre', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const SPECIALTIES: Service[] = [
  {
    id: 'alisamento',
    title: 'Alisamento Progressivo',
    description: 'Cabelo liso por até 3 meses, sem formol. Resultado profissional e duradouro.',
    icon: 'Sparkles'
  },
  {
    id: 'tratamento',
    title: 'Tratamento Capilar',
    description: 'Reconstrução profunda e hidratação intensiva. Restaura brilho e vitalidade.',
    icon: 'Droplets'
  },
  {
    id: 'hidratacao',
    title: 'Hidratação Profunda',
    description: 'Nutrição completa do fio. Maciez e brilho intenso garantidos.',
    icon: 'Waves'
  },
  {
    id: 'reconstrucao',
    title: 'Reconstrução',
    description: 'Repara fios danificados e ressecados. Força e elasticidade restauradas.',
    icon: 'ShieldCheck'
  }
];

export const DETAILED_SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Progressiva Premium',
    description: 'Alisamento perfeito com produtos de alta tecnologia.',
    icon: 'Sparkles',
    benefits: ['Sem formol', 'Brilho espelhado', 'Duração de 3 meses'],
    duration: '3h - 4h',
    price: '180'
  },
  {
    id: 's2',
    title: 'Botox Capilar',
    description: 'Redução de volume e tratamento profundo.',
    icon: 'Zap',
    benefits: ['Reduz o frizz', 'Hidratação profunda', 'Alinhamento dos fios'],
    duration: '2h',
    price: '120'
  },
  {
    id: 's3',
    title: 'Cronograma Capilar',
    description: 'Pacote completo de recuperação dos fios.',
    icon: 'Calendar',
    benefits: ['4 sessões', 'Nutrição + Reconstrução', 'Análise capilar inclusa'],
    duration: '1h / sessão',
    price: '350'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Amanda Silva',
    text: 'A melhor progressiva que já fiz! Meu cabelo ficou super natural e brilhoso. A Benedita é uma profissional incrível.',
    rating: 5,
    image: 'https://picsum.photos/id/64/150/150'
  },
  {
    id: 2,
    name: 'Carla Dias',
    text: 'Ambiente maravilhoso e atendimento impecável. Recuperei meu cabelo que estava super danificado.',
    rating: 5,
    image: 'https://picsum.photos/id/65/150/150'
  },
  {
    id: 3,
    name: 'Juliana Costa',
    text: 'Faço meu cabelo com a Benedita há 3 anos e não troco por nada. Confiança total!',
    rating: 5,
    image: 'https://picsum.photos/id/342/150/150'
  },
  {
    id: 4,
    name: 'Patricia Lima',
    text: 'Amei o resultado da hidratação. O atendimento é personalizado e faz toda a diferença.',
    rating: 5,
    image: 'https://picsum.photos/id/338/150/150'
  },
  {
    id: 5,
    name: 'Roberta Martins',
    text: 'Profissionalismo nota 10. O alisamento dura muito e o cabelo continua saudável.',
    rating: 5,
    image: 'https://picsum.photos/id/447/150/150'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Quanto tempo dura o alisamento?',
    answer: 'Nosso alisamento progressivo tem durabilidade média de 3 meses, dependendo do crescimento da raiz e dos cuidados pós-procedimento.'
  },
  {
    id: 'f2',
    question: 'O procedimento faz mal aos cabelos?',
    answer: 'Não. Utilizamos produtos sem formol e com tecnologia avançada que alisa enquanto trata, preservando a saúde da fibra capilar.'
  },
  {
    id: 'f3',
    question: 'Posso lavar o cabelo no mesmo dia?',
    answer: 'Sim! Nossos produtos permitem a lavagem imediata, pois a ação é termoativada e selada na hora.'
  },
  {
    id: 'f4',
    question: 'Preciso agendar com antecedência?',
    answer: 'Recomendamos agendar com pelo menos 3 dias de antecedência para garantir o melhor horário para você.'
  },
  {
    id: 'f5',
    question: 'Qual é o preço?',
    answer: 'Os valores variam de acordo com o tamanho e volume do cabelo. Consulte nossa tabela de referência acima ou agende uma avaliação gratuita.'
  },
  {
    id: 'f6',
    question: 'Vocês trabalham com qual marca?',
    answer: 'Trabalhamos apenas com linhas profissionais de alta performance, reconhecidas nacional e internacionalmente pela qualidade e segurança.'
  }
];

export const CONTACT_INFO = {
  phone: '(85) 98646-0688',
  instagram: '@benedita_0609',
  address: 'R. Aloísio Lorscheider - Jóquei Clube, Fortaleza - CE, 60510-065'
};