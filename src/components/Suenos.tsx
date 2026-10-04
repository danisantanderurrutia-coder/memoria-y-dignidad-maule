import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, MapPin, Calendar, Play, Pause, Volume2, VolumeX, ZoomIn,
  Sparkles, Hammer, Users, PartyPopper, LayoutGrid, ImageOff, Utensils, Music, Heart,
} from 'lucide-react';
import { CategoriaSueno, HistoriaSueno } from '../types';
import { useLanguage } from '../context/LanguageContext';
import Modal from './Modal';

export default function Suenos({ historias }: { historias: HistoriaSueno[] }) {
  const { lang, t } = useLanguage();
  const [cat, setCat] = useState<CategoriaSueno | 'Todos'>('Todos');
  const [idx, setIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);
  const [auto, setAuto] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const touch = useRef<number | null>(null);

  const CATS: { id: CategoriaSueno | 'Todos'; icon: typeof Sparkles; label: string; hint: string }[] = [
    { id: 'Todos', icon: LayoutGrid, label: t.filterAll, hint: 'Todos los proyectos y memorias' },
    { id: 'Oficios y Vida Cotidiana', icon: Hammer, label: lang === 'de' ? 'Handwerk & Alltag' : lang === 'en' ? 'Trades & Daily Life' : 'Oficios y Vida', hint: 'Zapateros, maestras y arpilleristas' },
    { id: 'Proyectos Colectivos y Asentamientos', icon: Users, label: lang === 'de' ? 'Gemeinschaftsprojekte' : lang === 'en' ? 'Collective Projects' : 'Proyectos Colectivos', hint: 'Asentamientos, cooperativas y huertos' },
    { id: 'Fiestas de la Solidaridad y Encuentro', icon: PartyPopper, label: lang === 'de' ? 'Feste & Solidarität' : lang === 'en' ? 'Festivals & Solidarity' : 'Fiestas y Encuentro', hint: 'Peñas, rayuela y navidades populares' },
  ];

  const lista = useMemo(
    () => historias.filter((h) => cat === 'Todos' || h.categoria === cat),
    [historias, cat]
  );

  const conteo = useMemo(() => {
    const c: Record<string, number> = { Todos: historias.length };
    historias.forEach((h) => (c[h.categoria] = (c[h.categoria] ?? 0) + 1));
    return c;
  }, [historias]);

  const n = lista.length;
  const actual = lista[Math.min(idx, Math.max(n - 1, 0))];

  const stopVoice = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  const go = useCallback(
    (d: number) => {
      stopVoice();
      setGalIdx(0);
      setIdx((i) => (n ? (i + d + n) % n : 0));
    },
    [n, stopVoice]
  );

  useEffect(() => {
    setIdx(0);
    setGalIdx(0);
    stopVoice();
  }, [cat, stopVoice]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  // Autoplay
  useEffect(() => {
    if (!auto || n < 2 || zoom || speaking) return;
    const t = setTimeout(() => go(1), 9000);
    return () => clearTimeout(t);
  }, [auto, idx, n, zoom, speaking, go]);

  // Teclado
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

  const hablar = () => {
    if (!actual || !('speechSynthesis' in window)) return;
    if (speaking) return stopVoice();
    const texto = `${actual.titulo}. Comuna de ${actual.comuna}. Período ${actual.anio}. ${t.suenosWho} ${actual.quienesEran} ${t.suenosDream} ${actual.queSonaban} ${t.suenosCelebrated} ${actual.comoCelebraban} ${t.suenosFlavorSound}: ${actual.elementoSonoroCulinario}`;
    const u = new SpeechSynthesisUtterance(texto);
    const langCode = lang === 'de' ? 'de-DE' : lang === 'en' ? 'en-US' : 'es-CL';
    u.lang = langCode;
    const v = window.speechSynthesis.getVoices().find((x) => x.lang.startsWith(lang));
    if (v) u.voice = v;
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  if (!actual) {
    return <div className="p-10 text-center text-zinc-500">No hay historias registradas en esta categoría.</div>;
  }

  const galeria = actual.galeria || [];
  const currentPhoto = galeria[galIdx] || galeria[0] || { url: '', caption: '' };
  const imgKey = `${actual.id}-${galIdx}`;
  const imgFail = broken[imgKey];

  return (
    <div className="mx-auto flex min-h-full max-w-7xl flex-col gap-4 p-3 md:p-6">
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terra-500">
          <Sparkles size={16} /> {t.suenosBadge}
        </div>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-zinc-50">{t.suenosTitle}</h1>
        <p className="text-sm text-zinc-400">
          {t.suenosDesc}
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
        {/* Escenario de Medios (Carrusel Izquierdo) */}
        <section
          aria-roledescription="carrusel"
          aria-label="Registro visual del sueño comunitario"
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-700 bg-stone-200 shadow-md lg:aspect-auto lg:min-h-[500px]"
        >
          {imgFail || !currentPhoto.url ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500">
              <ImageOff size={36} />
              <span className="text-sm">Registro histórico testimonial preservado en el archivo.</span>
            </div>
          ) : (
            <img
              key={imgKey}
              src={currentPhoto.url}
              alt={`${actual.titulo} - ${currentPhoto.caption}`}
              onError={() => setBroken((b) => ({ ...b, [imgKey]: true }))}
              className="fade-in h-full w-full object-cover"
            />
          )}

          {/* Menú flotante de categorías */}
          <nav
            aria-label="Categorías de memorias comunitarias"
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

          {/* Sub-selector de galería de fotos (si la historia tiene varias) */}
          {galeria.length > 1 && (
            <div className="absolute right-3 top-3 z-10 flex gap-1.5 rounded-full bg-black/60 p-1 backdrop-blur">
              {galeria.map((_, gi) => (
                <button
                  key={gi}
                  onClick={() => setGalIdx(gi)}
                  aria-label={`Foto ${gi + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    gi === galIdx ? 'w-6 bg-terra-500' : 'w-2.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Epígrafe inferior de la foto */}
          {currentPhoto.caption && (
            <div className="absolute inset-x-0 bottom-12 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-2 pt-6 text-xs text-stone-200">
              <span className="font-serif italic">{currentPhoto.caption}</span>
            </div>
          )}

          {/* Controles de navegación */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
            <span className="text-xs">
              {Math.min(idx, n - 1) + 1} / {n}
            </span>
            <div className="flex items-center gap-1">
              <Ctl label="Anterior historia" onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </Ctl>
              <Ctl
                label={auto ? 'Pausar pase automático' : 'Pase automático'}
                onClick={() => setAuto((a) => !a)}
              >
                {auto ? <Pause size={18} /> : <Play size={18} />}
              </Ctl>
              <Ctl label="Siguiente historia" onClick={() => go(1)}>
                <ChevronRight size={20} />
              </Ctl>
              {!imgFail && currentPhoto.url && (
                <Ctl label="Ampliar imagen" onClick={() => setZoom(true)}>
                  <ZoomIn size={18} />
                </Ctl>
              )}
            </div>
          </div>
        </section>

        {/* Ficha Descriptiva Profunda (Panel Derecho) */}
        <article className="card flex flex-col p-5" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-terra-500">
              {actual.categoria}
            </p>
            <span className="rounded-full bg-stone-200 px-2 py-0.5 text-[11px] font-medium text-zinc-700">
              Territorio {actual.territorioTipo}
            </span>
          </div>

          <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug text-zinc-50">
            {actual.titulo}
          </h2>

          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} /> {actual.anio}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> Comuna de {actual.comuna}
            </span>
          </p>

          {/* Bloques de relato: Quiénes eran, Qué soñaban, Cómo celebraban */}
          <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1 text-sm leading-relaxed lg:max-h-[340px]">
            <div className="rounded-lg border border-stone-200 bg-stone-100/80 p-3.5">
              <h3 className="flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-ocre-600">
                <Users size={14} /> {t.suenosWho}
              </h3>
              <p className="mt-1 font-serif text-zinc-800">{actual.quienesEran}</p>
            </div>

            <div className="rounded-lg border border-stone-200 bg-stone-100/80 p-3.5">
              <h3 className="flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-terra-500">
                <Heart size={14} /> {t.suenosDream}
              </h3>
              <p className="mt-1 font-serif text-zinc-800">{actual.queSonaban}</p>
            </div>

            <div className="rounded-lg border border-stone-200 bg-stone-100/80 p-3.5">
              <h3 className="flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-emerald-700">
                <PartyPopper size={14} /> {t.suenosCelebrated}
              </h3>
              <p className="mt-1 font-serif text-zinc-800">{actual.comoCelebraban}</p>
            </div>

            {actual.elementoSonoroCulinario && (
              <div className="rounded-lg border border-amber-300 bg-amber-50/70 p-3.5 text-amber-950">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <Utensils size={14} /> <Music size={14} /> {t.suenosFlavorSound}
                </h4>
                <p className="mt-1 font-serif text-sm italic">{actual.elementoSonoroCulinario}</p>
              </div>
            )}
          </div>

          {/* Barra de Audio y Lectura */}
          <div className="mt-4 space-y-2 border-t border-zinc-800 pt-3">
            {'speechSynthesis' in window && (
              <button className="btn-ghost w-full" onClick={hablar} aria-pressed={speaking}>
                {speaking ? (
                  <>
                    <VolumeX size={16} /> {t.stopSpeech}
                  </>
                ) : (
                  <>
                    <Volume2 size={16} /> {t.listenSpeech}
                  </>
                )}
              </button>
            )}
            <p className="text-[11px] leading-snug text-zinc-500">
              Archivo Abierto de Historia Popular · Memoria Comunitaria del Maule
            </p>
          </div>
        </article>
      </div>

      {/* Tira de Miniaturas Inferior */}
      <ul className="flex gap-2 overflow-x-auto pb-2" aria-label="Miniaturas de relatos de vida">
        {lista.map((item, i) => {
          const thumb = item.galeria[0]?.url;
          return (
            <li key={item.id} className="shrink-0">
              <button
                onClick={() => {
                  stopVoice();
                  setGalIdx(0);
                  setIdx(i);
                }}
                aria-label={`Ver historia ${item.titulo}`}
                aria-current={i === idx}
                className={`relative block h-16 w-24 overflow-hidden rounded-md border-2 bg-stone-200 transition ${
                  i === idx
                    ? 'border-terra-500 shadow-md ring-2 ring-terra-500/30'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                {thumb ? (
                  <img
                    src={thumb}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => ((e.target as HTMLImageElement).style.visibility = 'hidden')}
                  />
                ) : (
                  <span className="grid h-full place-items-center text-xs text-zinc-400">
                    <Sparkles size={16} />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-1 py-0.5 text-[9px] text-white">
                  {item.comuna}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {zoom && currentPhoto.url && (
        <Modal title={`${actual.titulo} - ${actual.comuna}`} onClose={() => setZoom(false)}>
          <img
            src={currentPhoto.url}
            alt={actual.titulo}
            className="max-h-[70vh] w-full rounded object-contain"
          />
          <p className="mt-2 font-serif text-xs text-zinc-400">{currentPhoto.caption}</p>
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
