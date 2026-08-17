export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tone: 'pink' | 'yellow' | 'blue' | 'gold';
}

export const process: ProcessStep[] = [
  {
    number: '01',
    title: 'Escuchamos tu idea',
    description:
      'Objetivos, público, presupuesto y sueños. Todo lo que tienes en la cabeza, sobre la mesa.',
    tone: 'pink',
  },
  {
    number: '02',
    title: 'Diseñamos el concepto',
    description:
      'Dirección de arte, narrativa y experiencia. Un concepto que se siente antes de empezar.',
    tone: 'yellow',
  },
  {
    number: '03',
    title: 'Producimos sin miedo',
    description:
      'Equipo, proveedores, montaje y ensayos. El caos controlado se vuelve espectáculo.',
    tone: 'blue',
  },
  {
    number: '04',
    title: 'La experiencia vive',
    description:
      'Noche del evento: ejecución impecable y capacidad de improvisar en tiempo real.',
    tone: 'gold',
  },
  {
    number: '05',
    title: 'Medimos el impacto',
    description:
      'Reporte con datos, cobertura y lecciones. La próxima edición será aún más grande.',
    tone: 'pink',
  },
];
