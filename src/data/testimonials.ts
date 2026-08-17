export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

// mock: testimonios ficticios de organizadores
export const testimonials: Testimonial[] = [
  {
    quote:
      'Esperábamos 300 personas y vinieron 900. El mapping en la fachada se volvió trending topic sin pagar un peso.',
    name: 'Valeria Castro',
    role: 'Brand Manager · Bebida energética',
    initials: 'VC',
  },
  {
    quote:
      'El equipo más preciso con el que hemos trabajado. El evento empezó puntual, terminó puntual y nadie quería irse.',
    name: 'Diego Santana',
    role: 'Director de marketing · Retail',
    initials: 'DS',
  },
  {
    quote:
      'Convirtieron un lanzamiento aburrido en una experiencia que nuestros clientes aún mencionan un año después.',
    name: 'Camila Rojas',
    role: 'Fundadora · Startup de moda',
    initials: 'CR',
  },
];
