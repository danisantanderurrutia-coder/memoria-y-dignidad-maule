import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Sitio } from '../types';
import { EPOCAS, TIPOS } from '../lib/meta';

interface Props {
  sitios: Sitio[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export default function MapView({ sitios, selectedId, onSelect }: Props) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const markers = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Inicializa el mapa una sola vez
  useEffect(() => {
    if (!el.current || map.current) return;
    const m = L.map(el.current, { center: [-35.4264, -71.6554], zoom: 9, zoomControl: true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(m);
    layer.current = L.layerGroup().addTo(m);
    map.current = m;
    return () => {
      m.remove();
      map.current = null;
      layer.current = null;
      markers.current.clear();
    };
  }, []);

  // Redibuja marcadores cuando cambian los filtros / datos
  useEffect(() => {
    const lg = layer.current;
    if (!lg) return;
    lg.clearLayers();
    markers.current.clear();
    sitios.forEach((s) => {
      const icon = L.divIcon({
        className: `maule-marker${s.id === selectedId ? ' active' : ''}`,
        html: `<span style="background:${EPOCAS[s.epoca].color}"><b>${TIPOS[s.tipo].glyph}</b></span>`,
        iconSize: [30, 30],
        iconAnchor: [4, 30],
      });
      const mk = L.marker([s.lat, s.lng], {
        icon,
        title: s.titulo,
        alt: s.titulo,
        keyboard: true,
      });
      mk.bindTooltip(escapeHtml(s.titulo), { direction: 'top', offset: [10, -28] });
      mk.on('click', () => onSelectRef.current(s.id));
      mk.addTo(lg);
      markers.current.set(s.id, mk);
    });
  }, [sitios, selectedId]);

  // Vuela hacia el sitio seleccionado
  useEffect(() => {
    if (!selectedId || !map.current) return;
    const s = sitios.find((x) => x.id === selectedId);
    if (s) map.current.flyTo([s.lat, s.lng], Math.max(map.current.getZoom(), 11), { duration: 0.8 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  return <div ref={el} className="h-full w-full" role="application" aria-label="Mapa interactivo de sitios de memoria del Maule" />;
}
