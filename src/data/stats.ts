export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 250, suffix: '+', label: 'Eventos producidos' },
  { value: 40, suffix: '', label: 'Ciudades alcanzadas' },
  { value: 98, suffix: '%', label: 'Clientes que repiten' },
  { value: 12, suffix: '', label: 'Premios de industria' },
];
