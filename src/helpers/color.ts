const COLOR = {
  b: '#f44336',
  c: '#e91e63',
  d: '#9c27b0',
  e: '#673ab7',
  f: '#3f51b5',
  g: '#2196f3',
  i: '#00bcd4',
  j: '#009688',
  k: '#4caf50',
  l: '#8bc34a',
  m: '#cddc39',
  n: '#ffeb3b',
  p: '#ff9800',
  q: '#ff5722',
  r: '#795548',
  s: '#607d8b',
  t: '#ffffff',
  u: '#000000',
} as any;

export const getColor = (id: string) => COLOR[id] || '#fff';
export const getColors = () => Object.values(COLOR) as string[];
