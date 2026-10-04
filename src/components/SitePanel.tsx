import { useEffect, useRef, useState } from 'react';
import { X, MapPin, Calendar, ExternalLink, ImageOff, Quote, Video, BookOpen, Images, Mic } from 'lucide-react';
import { Sitio } from '../types';
import { EPOCAS, TIPOS, youtubeEmbed } from '../lib/meta';

const TABS = [
  { id: 'resena', label: 'Reseña', icon: BookOpen },
  { id: 'galeria', label: 'Galería', icon: Images },
  { id: 'testimonio', label: 'Testimonio', icon: Mic },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'fuentes', label: 'Fuentes', icon: ExternalLink },
] as const;
type TabId = (typeof TABS)[number]['id'];

export default function SitePanel({ sitio, onClose }: { sitio: Sitio; onClose: () => void }) {
  const [tab, setTab] = useState<TabId>('resena');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTab('resena');
    closeRef.current?.focus();
  }, [sitio.id]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);

  const embed = youtubeEmbed(sitio.videoUrl);
  const epoca = EPOCAS[sitio.epoca];

  return (
    <aside
      role="dialog"
      aria-label={`Ficha del sitio: ${sitio.titulo}`}
      className="slide-in absolute inset-x-0 bottom-0 z-[1000] flex max-h-[80%] flex-col border-t border-zinc-700 bg-zinc-900 shadow-2xl md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[440px] md:border-l md:border-t-0"
    >
      <header className="border-b border-zinc-800 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: epoca.color }}>
              <span className="h-2 w-2 rounded-full" style={{ background: epoca.color }} />
              {epoca.label}
            </span>
            <h2 className="mt-1 font-serif text-xl font-semibold leading-snug text-zinc-50">{sitio.titulo}</h2>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Cerrar ficha" className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50">
            <X size={20} />
          </button>
        </div>
        <dl className="mt-3 space-y-1 text-xs text-zinc-400">
          <div className="flex items-center gap-2"><MapPin size={14} /><dt className="sr-only">Ubicación</dt><dd>{sitio.comuna}, Provincia de {sitio.provincia} · {sitio.lat.toFixed(4)}, {sitio.lng.toFixed(4)}</dd></div>
          <div className="flex items-center gap-2"><Calendar size={14} /><dt className="sr-only">Período</dt><dd>{sitio.periodo}</dd></div>
          <div><span className="rounded bg-zinc-800 px-2 py-0.5">{TIPOS[sitio.tipo].label}</span></div>
        </dl>
      </header>

      <div role="tablist" aria-label="Contenido del sitio" className="flex overflow-x-auto border-b border-zinc-800 px-2">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setTab(id)}
            className={`flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm transition-colors ${tab === id ? 'border-terra-400 text-ocre-300' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="fade-in flex-1 overflow-y-auto p-4" key={tab}>
        {tab === 'resena' && (
          <div className="space-y-3 font-serif leading-relaxed text-zinc-300">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-zinc-500">Reseña histórica y judicial</h3>
            {sitio.resena.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {tab === 'galeria' &&
          (sitio.galeria.length === 0 ? (
            <Empty text="Aún no hay imágenes ni documentos para este sitio." />
          ) : (
            <ul className="space-y-4">
              {sitio.galeria.map((g, i) => (
                <li key={i}>
                  {g.url ? (
                    <img src={g.url} alt={g.caption} loading="lazy" className="w-full rounded-md border border-zinc-800 object-cover" />
                  ) : (
                    <div className="flex h-36 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-zinc-700 bg-zinc-950 text-zinc-500">
                      <ImageOff size={24} />
                      <span className="text-xs">Imagen pendiente de digitalizar</span>
                    </div>
                  )}
                  <p className="mt-1 text-xs italic text-zinc-400">{g.caption}</p>
                </li>
              ))}
            </ul>
          ))}
        {tab === 'testimonio' &&
          (sitio.testimonio ? (
            <div className="space-y-4">
              <figure className="border-l-4 border-terra-500 pl-4">
                <Quote size={20} className="mb-2 text-terra-400" aria-hidden />
                <blockquote className="font-serif text-lg italic leading-relaxed text-zinc-100">{sitio.testimonio}</blockquote>
                {sitio.testimonioAutor && <figcaption className="mt-2 text-xs text-zinc-400">— {sitio.testimonioAutor}</figcaption>}
              </figure>
              {sitio.audioUrl ? (
                <audio controls src={sitio.audioUrl} className="w-full">Tu navegador no soporta audio.</audio>
              ) : (
                <p className="text-xs text-zinc-500">Sin registro de audio disponible.</p>
              )}
            </div>
          ) : (
            <Empty text="Este sitio aún no tiene testimonios. Puedes aportar el tuyo en «Archivo Abierto»." />
          ))}
        {tab === 'video' &&
          (embed ? (
            <div className="aspect-video overflow-hidden rounded-md border border-zinc-800">
              <iframe src={embed} title={`Video: ${sitio.titulo}`} className="h-full w-full" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          ) : (
            <Empty text="No hay video asociado. En el panel de administración se puede añadir un enlace de YouTube." />
          ))}
        {tab === 'fuentes' && (
          <ul className="space-y-2 text-sm">
            {sitio.fuentes.length === 0 && <Empty text="Sin fuentes registradas." />}
            {sitio.fuentes.map((f, i) => (
              <li key={i}>
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 rounded-md border border-zinc-800 p-3 text-zinc-300 hover:border-terra-500 hover:text-ocre-300">
                  <ExternalLink size={14} className="mt-0.5 shrink-0" />
                  {f.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="rounded-md border border-dashed border-zinc-700 p-6 text-center text-sm text-zinc-500">{text}</p>;
}
