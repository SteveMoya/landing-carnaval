import type { IconName } from '../components/ui/Icon.astro';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  tone: 'pink' | 'yellow' | 'blue' | 'gold';
}

export const services: Service[] = [
  {
    icon: 'spark',
    title: 'Producción de eventos',
    description:
      'Coordinación total: venue, logística, staff y cronograma. Tú llegas, el evento ya está en marcha.',
    tone: 'pink',
  },
  {
    icon: 'cube',
    title: 'Mapping 3D & audiovisual',
    description:
      'Proyecciones sobre cualquier superficie: fachadas, escenarios, productos. La arquitectura se convierte en pantalla.',
    tone: 'blue',
  },
  {
    icon: 'light',
    title: 'Iluminación & dirección de arte',
    description:
      'Diseño lumínico que construye atmósferas: del rave al gala, cada evento tiene su propia piel.',
    tone: 'gold',
  },
  {
    icon: 'zap',
    title: 'Activaciones de marca',
    description:
      'Experiencias que la gente recuerda y comparte. Tu marca, protagonista del momento.',
    tone: 'yellow',
  },
  {
    icon: 'music',
    title: 'Sonido inmersivo',
    description:
      'Ingeniería de audio para que la música se sienta, no solo se escuche. Sin zonas muertas.',
    tone: 'pink',
  },
  {
    icon: 'users',
    title: 'Marketing experiencial',
    description:
      'Estrategia, contenido y cobertura para que el evento siga vivo en redes mucho después de terminar.',
    tone: 'blue',
  },
];
