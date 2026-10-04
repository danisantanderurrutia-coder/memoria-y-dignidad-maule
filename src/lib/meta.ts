import { Epoca, Provincia, TipoSitio } from '../types';

export const EPOCAS: Record<Epoca, { label: string; rango: string; color: string }> = {
  pre: { label: 'Pre-dictadura y Reforma Agraria', rango: '1964–1973', color: '#d9a441' },
  dictadura: { label: 'Dictadura Cívico-Militar', rango: '1973–1990', color: '#b91c1c' },
  transicion: { label: 'Post-dictadura / Transición', rango: '1990–2018', color: '#4f8a8b' },
  revuelta: { label: 'Revuelta Popular', rango: 'Octubre 2019', color: '#c2410c' },
};

export const PROVINCIAS: Provincia[] = ['Talca', 'Curicó', 'Linares', 'Cauquenes'];

export const TIPOS: Record<TipoSitio, { label: string; glyph: string }> = {
  detencion: { label: 'Centro de Detención/Tortura', glyph: 'D' },
  memorial: { label: 'Memorial/Espacio Público', glyph: 'M' },
  conflicto: { label: 'Conflicto Social/Resistencia', glyph: 'R' },
  colonia: { label: 'Colonia Dignidad', glyph: 'C' },
};

export const uid = (p = 'id') => `${p}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

/** Convierte una URL de YouTube (watch, youtu.be, embed) en URL embebible, o null. */
export function youtubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : null;
}

export const fmtFecha = (iso: string) =>
  new Date(iso).toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
