import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, MapPin, Calendar, Play, Pause, Volume2, VolumeX, ZoomIn,
  Palette, BookText, Music2, LayoutGrid, ImageOff, ExternalLink, Map, Mic,
} from 'lucide-react';
import { CategoriaArte, ObraArte } from '../types';
import { youtubeEmbed } from '../lib/meta';
import { useLanguage } from '../context/LanguageContext';
import Modal from './Modal';

interface Props {
  obras: ObraArte[];
  onIrAlMapa?: (sitioId?: string) => void;
}

export default function Arte({ obras, onIrAlMapa }: Props) {
  const { lang, t } = useLanguage();
  const [cat, setCat] = useState<CategoriaArte | 'Todos'>('Todos');
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const touch = useRef<number | null>(null);

  const CATS: { id: CategoriaArte | 'Todos'; icon: typeof Palette; label: string; hint: string }[] = [
    { id: 'Todos', icon: LayoutGrid, label: t.filterAll, hint: 'Murales, poesía y música' },
    { id: 'Murales y Gráfica Barrial', icon: Palette, label: lang === 'de' ? 'Wandmalerei & Grafik' : lang === 'en' ? 'Murals & Street Art' : 'Murales y Gráfica', hint: 'Brigadas, esténciles y mosaicos territoriales' },
    { id: 'Poesía, Payas y Lira Popular', icon: BookText, label: lang === 'de' ? 'Poesie & Reime' : lang === 'en' ? 'Poetry & Popular Verse' : 'Poesía y Lira Popular', hint: 'Décimas campesinas, versos y oralidad' },
    { id: 'Música y Cultura Urbana', icon: Music2, label: lang === 'de' ? 'Musik & Subkultur' : lang === 'en' ? 'Music & Urban Culture' : 'Música y Cultura', hint: 'Canto campesino, peñas y hip-hop maulino' },
  ];

  const lista = useMemo(
    () => obras.filter((o) => cat === 'Todos' || o.categoria === cat),
    [obras, cat]
  );

  const conteo = useMemo(() => {
    const c: Record<string, number> = { Todos: obras.length };
    obras.forEach((o) => (c[o.categoria] = (c[o.categoria] ?? 0) + 1));
    return c;
  }, [obras]);

  const n = lista.length;
  const actual = lista[Math.min(idx, Math.max(n - 1, 0))];

  const stopVoice = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  const go = useCallback(
    (d: number) => {
      stopVoice();
      setIdx((i) => (n ? (i + d + n) % n : 0));
    },
    [n, stopVoice]
  );

  useEffect(() => {
    setIdx(0);
    stopVoice();
  }, [cat, stopVoice]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  // Autoplay (pausado si hay video o recitación de voz activa)
  useEffect(() => {
    if (!auto || n < 2 || zoom || speaking || actual?.videoUrl) return;
    const t = setTimeout(() => go(1), 9000);
    return () => clearTimeout(t);
  }, [auto, idx, n, zoom, speaking, actual, go]);

  // Navegación con teclado
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (zoom) return;
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [go, zoom]);

  const recitar = () => {
    if (!actual || !('speechSynthesis' in window)) return;
    if (speaking) return stopVoice();
    const texto = `${actual.titulo}, de ${actual.autorColectivo}. Comuna de ${actual.comuna}. ${actual.descripcion}. ${actual.contenidoTexto || ''}`;
    const u = new SpeechSynthesisUtterance(texto);
    const langCode = lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-US' : 'es-CL';
    u.lang = langCode;
    const v = window.speechSynthesis.getVoices().find((x) => x.lang.startsWith(lang));
    if (v) u.voice = v;
    u.rate = 0.92;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  if (!actual) {
    return <div className="p-10 text-center text-zinc-500">No hay obras registradas en esta categoría.</div>;
  }

  const embed = actual.videoUrl ? youtubeEmbed(actual.videoUrl) : null;
  const imgFail = broken[actual.id];

  const media = (
    <>
      {embed ? (
        <iframe
          src={embed}
          title={actual.titulo}
          className="h-full w-full"
          allowFullScreen
          allow="encrypted-media; picture-in-picture"
        />
      ) : actual.imagenUrl && !imgFail ? (
        <img
          key={actual.id}
          src={actual.imagenUrl}
          alt={`${actual.titulo} - ${actual.autorColectivo}`}
          onError={() => setBroken((b) => ({ ...b, [actual.id]: true }))}
          className="fade-in h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500">
          <Palette size={40} />
          <span className="text-sm">Obra registrada en el archivo artístico maulino.</span>
        </div>
      )}
    </>
  );

  return (
    <div className="mx-auto flex min-h-full max-w-7xl flex-col gap-4 p-3 md:p-6">
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocre-600">
          <Palette size={16} /> {t.arteBadge}
        </div>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-zinc-50">{t.arteTitle}</h1>
        <p className="text-sm text-zinc-400">
          {t.arteDesc}
        </p>
      </header>

      <div
        className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const d = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(d) > 60) go(d < 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        {/* Escenario de la Obra (Izquierda) */}
        <section
          aria-roledescription="carrusel"
          aria-label="Galería de obras y arte memorial"
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-700 bg-stone-200 shadow-md lg:aspect-auto lg:min-h-[500px]"
        >
          {media}

          {/* Menú flotante de categorías */}
          <nav
            aria-label="Categorías de arte y memoria"
            className="absolute left-2 top-2 z-10 flex gap-1 overflow-x-auto rounded-2xl bg-white/90 p-1.5 shadow-lg backdrop-blur md:left-3 md:top-3 md:flex-col md:overflow-visible"
            style={{ maxWidth: 'calc(100% - 1rem)' }}
          >
            {CATS.map(({ id, icon: I, label, hint }) => (
              <button
                key={id}
                title={hint}
                aria-pressed={cat === id}
                onClick={() => setCat(id)}
                className={`group flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${
                  cat === id ? 'bg-terra-500 text-white' : 'text-zinc-700 hover:bg-stone-200'
                }`}
              >
                <I size={16} />
                <span className="hidden sm:inline">{label}</span>
                <span
                  className={`rounded-full px-1.5 text-[10px] ${
                    cat === id ? 'bg-white/25 text-white' : 'bg-stone-200 text-zinc-600'
                  }`}
                >
                  {conteo[id] ?? 0}
                </span>
              </button>
            ))}
          </nav>

          {/* Controles de navegación */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
            <span className="text-xs">
              {Math.min(idx, n - 1) + 1} / {n}
            </span>
            <div className="flex items-center gap-1">
              <Ctl label="Anterior obra" onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </Ctl>
              <Ctl
                label={auto ? 'Pausar pase automático' : 'Pase automático'}
                onClick={() => setAuto((a) => !a)}
              >
                {auto ? <Pause size={18} /> : <Play size={18} />}
              </Ctl>
              <Ctl label="Siguiente obra" onClick={() => go(1)}>
                <ChevronRight size={20} />
              </Ctl>
              {actual.imagenUrl && !imgFail && !embed && (
                <Ctl label="Ampliar obra" onClick={() => setZoom(true)}>
                  <ZoomIn size={18} />
                </Ctl>
              )}
            </div>
          </div>
        </section>

        {/* Ficha Descriptiva y Poética (Derecha) */}
        <article className="card flex flex-col p-5" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-terra-500">
              {actual.categoria}
            </p>
            {actual.sitioRelacionadoId && onIrAlMapa && (
              <button
                onClick={() => onIrAlMapa(actual.sitioRelacionadoId)}
                className="inline-flex items-center gap-1 rounded-full border border-terra-500/40 bg-terra-500/10 px-2.5 py-0.5 text-[11px] font-medium text-terra-600 transition hover:bg-terra-500 hover:text-white"
              >
                <Map size={12} /> {t.viewMapBtn}
              </button>
            )}
          </div>

          <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug text-zinc-50">
            {actual.titulo}
          </h2>
          <p className="font-serif text-sm font-medium text-ocre-600">
            Por {actual.autorColectivo}
          </p>

          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} /> {actual.anio}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> {actual.comuna}
            </span>
          </p>

          <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1 text-sm leading-relaxed lg:max-h-[320px]">
            <p className="font-serif leading-relaxed text-zinc-700">{actual.descripcion}</p>

            {/* Versos, Décimas o Rimas estilizadas en pergamino */}
            {actual.contenidoTexto && (
              <div className="rounded-lg border-l-4 border-terra-500 bg-stone-100/90 p-4 shadow-inner">
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-terra-500">
                  <BookText size={14} /> {t.artePoetryTitle}
                </p>
                <pre className="whitespace-pre-line font-serif text-xs italic leading-relaxed text-zinc-800">
                  {actual.contenidoTexto}
                </pre>
              </div>
            )}
          </div>

          {/* Reproductor de Audio y Recitación */}
          <div className="mt-4 space-y-2 border-t border-zinc-800 pt-3">
            {actual.audioUrl && (
              <audio
                controls
                src={actual.audioUrl}
                className="w-full"
                aria-label={`Audio de la obra ${actual.titulo}`}
              />
            )}

            {'speechSynthesis' in window && (
              <button className="btn-ghost w-full" onClick={recitar} aria-pressed={speaking}>
                {speaking ? (
                  <>
                    <VolumeX size={16} /> {t.stopSpeech}
                  </>
                ) : (
                  <>
                    <Volume2 size={16} /> {t.arteDeclaim}
                  </>
                )}
              </button>
            )}

            <p className="text-[11px] leading-snug text-zinc-500">
              Patrimonio Cultural Inmaterial y Derechos Humanos · Región del Maule
            </p>
          </div>
        </article>
      </div>

      {/* Tira de Miniaturas Inferior */}
      <ul className="flex gap-2 overflow-x-auto pb-2" aria-label="Miniaturas de obras de arte">
        {lista.map((obra, i) => (
          <li key={obra.id} className="shrink-0">
            <button
              onClick={() => {
                stopVoice();
                setIdx(i);
              }}
              aria-label={`Ver obra ${obra.titulo}`}
              aria-current={i === idx}
              className={`relative block h-16 w-24 overflow-hidden rounded-md border-2 bg-stone-200 transition ${
                i === idx
                  ? 'border-terra-500 shadow-md ring-2 ring-terra-500/30'
                  : 'border-transparent opacity-75 hover:opacity-100'
              }`}
            >
              {obra.imagenUrl ? (
                <img
                  src={obra.imagenUrl}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).style.visibility = 'hidden')}
                />
              ) : obra.videoUrl ? (
                <span className="grid h-full place-items-center text-zinc-500">
                  <Play size={18} />
                </span>
              ) : (
                <span className="grid h-full place-items-center text-zinc-400">
                  <Palette size={18} />
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-1 py-0.5 text-[9px] text-white">
                {obra.comuna}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {zoom && actual.imagenUrl && (
        <Modal
          title={`${actual.titulo} - ${actual.autorColectivo}`}
          onClose={() => setZoom(false)}
        >
          <img
            src={actual.imagenUrl}
            alt={actual.titulo}
            className="max-h-[70vh] w-full rounded object-contain"
          />
          <p className="mt-2 text-xs text-zinc-400">
            {actual.comuna}, {actual.anio} · {actual.autorColectivo}
          </p>
        </Modal>
      )}
    </div>
  );
}

function Ctl({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white transition hover:bg-black/70"
    >
      {children}
    </button>
  );
}
