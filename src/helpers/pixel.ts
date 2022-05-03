const COLOR = {
  x: '#8e1e20',
  b: '#f44336',
  c: '#e91e63',
  d: '#9c27b0',
  v: '#ff66cc',
  y: '#ff9999',
  e: '#673ab7',
  f: '#3f51b5',
  g: '#2196f3',
  i: '#00bcd4',
  j: '#009688',
  k: '#4caf50',
  l: '#8bc34a',
  m: '#cddc39',
  n: '#ffeb3b',
  w: '#ffcc33',
  p: '#ff9800',
  z: '#bd6b09',
  q: '#ff5722',
  r: '#795548',
  s: '#607d8b',
  a: '#b7b7b7',
  t: '#ffffff',
  u: '#000000',
} as any;

const KEYS = {
  '#00bcd4': 'i',
  '#000000': 'u',
  '#3f51b5': 'f',
  '#4caf50': 'k',
  '#8e1e20': 'x',
  '#8bc34a': 'l',
  '#9c27b0': 'd',
  '#607d8b': 's',
  '#673ab7': 'e',
  '#2196f3': 'g',
  '#009688': 'j',
  '#795548': 'r',
  '#b7b7b7': 'a',
  '#bd6b09': 'z',
  '#ff66cc': 'v',
  '#ff9999': 'y',
  '#ffcc33': 'w',
  '#cddc39': 'm',
  '#e91e63': 'c',
  '#f44336': 'b',
  '#ff5722': 'q',
  '#ff9800': 'p',
  '#ffeb3b': 'n',
  '#ffffff': 't',
} as any;

export const getColor = (id: string) => COLOR[id] || '#fff';
export const getColors = () => Object.values(COLOR) as string[];

export const getKey = (color: string) => KEYS[color];

export const HEIGHT = 30;
export const WIDTH = 25;

export const DEFAULT_DATA = KEYS['#ffffff'].repeat(HEIGHT * WIDTH);
