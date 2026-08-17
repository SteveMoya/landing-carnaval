export type Tone = 'pink' | 'yellow' | 'blue' | 'gold';

export interface GalleryItem {
  title: string;
  category: string;
  tone: Tone;
  year: string;
  span: 'tall' | 'wide' | 'normal';
}

// mock: proyectos ficticios de la agencia
export const gallery: GalleryItem[] = [
  { title: 'Neón Riot', category: 'Festival urbano', tone: 'pink', year: '2026', span: 'wide' },
  { title: 'Silencio Dorado', category: 'Cena inmersiva', tone: 'gold', year: '2026', span: 'tall' },
  { title: 'Algoritmo Vivo', category: 'Lanzamiento tech', tone: 'blue', year: '2025', span: 'normal' },
  { title: 'Feria de Colores', category: 'Experiencia familiar', tone: 'yellow', year: '2025', span: 'normal' },
  { title: 'Bajo el Mapa', category: 'Mapping en fachada', tone: 'blue', year: '2025', span: 'wide' },
  { title: 'Eco Rave', category: 'Festival sostenible', tone: 'pink', year: '2024', span: 'tall' },
];
