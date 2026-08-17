export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  tone: 'pink' | 'yellow' | 'blue' | 'gold';
}

export const pricing: PricingTier[] = [
  {
    name: 'RAVE',
    price: 'Desde $2,500',
    description: 'Para eventos que necesitan energía inmediata.',
    features: [
      'Producción técnica básica',
      'Sonido + iluminación',
      'Staff de montaje (2 personas)',
      'Coordinación día del evento',
    ],
    cta: 'Pedir cotización',
    tone: 'blue',
  },
  {
    name: 'EXPERIENCE',
    price: 'Desde $7,500',
    description: 'La experiencia completa, inmersiva y memorable.',
    features: [
      'Todo lo de RAVE',
      'Dirección de arte + escenografía',
      'Mapping 3D o pantallas LED',
      'Activación de marca',
      'Cobertura foto + video',
    ],
    cta: 'Pedir cotización',
    featured: true,
    tone: 'yellow',
  },
  {
    name: 'INMERSIÓN TOTAL',
    price: 'Desde $15,000',
    description: 'Producción de alto impacto, sin límites.',
    features: [
      'Todo lo de EXPERIENCE',
      'Experiencia multisensorial (audio 360, aroma, tacto)',
      'Equipo creativo dedicado',
      'Marketing experiencial + influencers',
      'Reporte de impacto post-evento',
    ],
    cta: 'Hablemos',
    tone: 'pink',
  },
];
