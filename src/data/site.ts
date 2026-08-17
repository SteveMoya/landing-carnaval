export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export type StickerTone = 'pink' | 'yellow' | 'blue' | 'gold';

export interface HeroSticker {
  text: string;
  tone: StickerTone;
  tilt: number;
  top: string;
  left?: string;
  right?: string;
}

export const site = {
  name: 'Carnaval Digital',
  shortName: 'CARNAVAL',
  tagline: 'Tu evento merece ser inolvidable.',
  description:
    'Agencia de eventos y experiencias inmersivas. Producción, iluminación, mapping 3D y activaciones que convierten eventos ordinarios en experiencias sensoriales.',
  url: 'https://carnaval.stevemoya.me',
  email: 'hola@carnaval.digital',
  founded: 2019,

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Trabajo', href: '#trabajo' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Precios', href: '#precios' },
    { label: 'Opiniones', href: '#opiniones' },
  ] satisfies NavItem[],

  hero: {
    kicker: 'Agencia de experiencias',
    title: { start: 'HACEMOS TU EVENTO', accent: 'INOLVIDABLE' },
    subtitle:
      'Producción, iluminación, sonido y mapping 3D para marcas que no quieren pasar desapercibidas. Caos controlado, desde 2019.',
    primaryCta: 'Pedir propuesta',
    secondaryCta: 'Ver el trabajo',
    stickers: [
      { text: '+250 EVENTOS', tone: 'pink', tilt: -4, top: '18%', left: '6%' },
      { text: 'DESDE 2019', tone: 'yellow', tilt: 3, top: '30%', right: '5%' },
      { text: '12 PREMIOS', tone: 'blue', tilt: -2, top: '58%', left: '9%' },
    ] satisfies HeroSticker[],
  },

  marquee: [
    'EVENTOS INOLVIDABLES',
    'ILUMINACIÓN',
    'MAPPING 3D',
    'SONIDO',
    'ACTIVACIONES',
    'CAOS CONTROLADO',
    'EXPERIENCIAS INMERSIVAS',
  ],

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/carnaval.digital', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/carnavaldigital', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@carnaval.digital', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@carnavaldigital', icon: 'youtube' },
  ] satisfies Social[],

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;
