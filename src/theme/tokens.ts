export const colors = {
  bg: '#0A0A0A',
  panel: '#111111',
  text: '#E8E8E0',
  textLede: '#B8B8B0',
  muted: '#6B6B66',
  line: '#2A2A2A',
  accent: '#7CFF6B',
} as const;

export const fonts = {
  pixel: '"Press Start 2P", monospace',
  body: '"VT323", monospace',
} as const;

export type ColorToken = keyof typeof colors;
export type FontToken = keyof typeof fonts;
