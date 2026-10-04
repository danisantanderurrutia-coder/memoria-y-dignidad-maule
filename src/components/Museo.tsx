import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, MapPin, Calendar, Play, Pause, Volume2, VolumeX, ExternalLink, ZoomIn,
  Landmark, Clock, Megaphone, FileText, Newspaper, LayoutGrid, ImageOff,
} from 'lucide-react';
import { CategoriaMuseo, RegistroMuseo } from '../types';
import { youtubeEmbed } from '../lib/meta';
import Modal from './Modal';

const CATS: { id: CategoriaMuseo | 'Todos'; icon: typeof Landmark; hint: string }[] = [
  { id: 'Todos', icon: LayoutGrid, hint: 'Todos los registros' },
  { id: 'Lugares', icon: Landmark, hint: 'Sitios, memoriales y paisajes' },
  { id: 'Momentos', icon: Clock, hint: 'Hechos y fechas' },
  { id: 'Acciones', icon: Megaphone, hint: 'Marchas, luchas y conmemoraciones' },
  { id: 'Documentos', icon: FileText, hint: 'Informes y archivos' },
  { id: 'Prensa', icon: Newspaper, hint: 'Portadas y notas de diario' },
];

export default function Museo({ registros }: { registros: RegistroMuseo[] }) {
  const [cat, setCat] = useState<CategoriaMuseo | 'Todos'>('Todos');
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const touch = useRef<number | null>(null);

  const lista = useMemo(() => registros.filter((r) => cat === 'Todos' || r.categoria === cat), [registros, cat]);
  const conteo = useMemo(() => {
    const c: Record<string, number> = { Todos: registros.length };
    registros.forEach((r) => (c[r.categoria] = (c[r.categoria] ?? 0) + 1));
    return c;
  }, [registros]);

  const n = lista.length;
  const actual = lista[Math.min(idx, Math.max(n - 1, 0))];

  const stopVoice = useCallback(() => { window.speechSynthesis?.cancel(); setSpeaking(false); }, []);
  const go = useCallback((d: number) => { stopVoice(); setIdx((i) => (n ? (i + d + n) % n : 0)); }, [n, stopVoice]);

  useEffect(() => { setIdx(0); stopVoice(); }, [cat, stopVoice]);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  // Autoplay (pausado si hay video o voz activa o zoom)
  useEffect(() => {
    if (!auto || n < 2 || zoom || speaking || actual?.tipo === 'video') return;
    const t = setTimeout(() => go(1), 9000);
    return () => clearTimeout(t);
  }, [auto, idx, n, zoom, speaking, actual, go]);

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
    const u = new SpeechSynthesisUtterance(`${actual.titulo}. ${actual.relato}`);
    u.lang = 'es-CL';
    const v = window.speechSynthesis.getVoices().find((x) => x.lang.startsWith('es'));
    if (v) u.voice = v;
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  if (!actual) {
    return <div className="p-10 text-center text-zinc-500">Aún no hay registros en esta categoría.</div>;
  }

  const embed = actual.tipo === 'video' ? youtubeEmbed(actual.mediaUrl) : null;
  const imgFail = broken[actual.id];

  const media = (
    <>
      {actual.tipo === 'video' ? (
        embed ? (
          <iframe src={embed} title={actual.titulo} className="h-full w-full" allowFullScreen allow="encrypted-media; picture-in-picture" />
        ) : (
          <video key={actual.id} src={actual.mediaUrl} controls className="h-full w-full bg-black object-contain" />
        )
      ) : imgFail ? (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500"><ImageOff size={36} /><span className="text-sm">No se pudo cargar la imagen. Ver ficha original.</span></div>
      ) : (
        <img
          key={actual.id} src={actual.mediaUrl} alt={`${actual.titulo}. ${actual.lugar}, ${actual.anio}`}
          onError={() => setBroken((b) => ({ ...b, [actual.id]: true }))}
          className={`fade-in h-full w-full ${actual.tipo === 'foto' ? 'object-cover' : 'bg-stone-200 object-contain p-2'}`}
        />
      )}
    </>
  );

  return (
    <div className="mx-auto flex min-h-full max-w-7xl flex-col gap-4 p-3 md:p-6">
      <header>
        <h1 className="font-serif text-3xl font-semibold text-zinc-50">Museo Digital</h1>
        <p className="text-sm text-zinc-400">Fotografías, documentos, portadas de prensa y videos con su relato. Usa el menú flotante, las flechas del teclado o desliza para recorrer.</p>
      </header>

      <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
        onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
        onTouchEnd={(e) => { if (touch.current == null) return; const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 60) go(d < 0 ? 1 : -1); touch.current = null; }}>
        {/* Escenario */}
        <section aria-roledescription="carrusel" aria-label="Registros del museo" className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-700 bg-stone-200 shadow-md lg:aspect-auto lg:min-h-[480px]">
          {media}

          {/* Menú flotante de categorías */}
          <nav aria-label="Categorías del museo" className="absolute left-2 top-2 z-10 flex gap-1 overflow-x-auto rounded-2xl bg-white/90 p-1.5 shadow-lg backdrop-blur md:left-3 md:top-3 md:flex-col md:overflow-visible" style={{ maxWidth: 'calc(100% - 1rem)' }}>
            {CATS.map(({ id, icon: I, hint }) => (
              <button key={id} title={hint} aria-pressed={cat === id} onClick={() => setCat(id)}
                className={`group flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium transition ${cat === id ? 'bg-terra-500 text-white' : 'text-zinc-300 hover:bg-zinc-800'}`}>
                <I size={16} />
                <span className="hidden sm:inline">{id}</span>
                <span className={`rounded-full px-1.5 text-[10px] ${cat === id ? 'bg-white/25' : 'bg-zinc-800 text-zinc-400'}`}>{conteo[id] ?? 0}</span>
              </button>
            ))}
          </nav>

          {/* Controles */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
            <span className="text-xs">{Math.min(idx, n - 1) + 1} / {n}</span>
            <div className="flex items-center gap-1">
              <Ctl label="Anterior" onClick={() => go(-1)}><ChevronLeft size={20} /></Ctl>
              <Ctl label={auto ? 'Pausar pase automático' : 'Pase automático'} onClick={() => setAuto((a) => !a)}>{auto ? <Pause size={18} /> : <Play size={18} />}</Ctl>
              <Ctl label="Siguiente" onClick={() => go(1)}><ChevronRight size={20} /></Ctl>
              {actual.tipo !== 'video' && !imgFail && <Ctl label="Ampliar imagen" onClick={() => setZoom(true)}><ZoomIn size={18} /></Ctl>}
            </div>
          </div>
        </section>

        {/* Ficha */}
        <article className="card flex flex-col p-5" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wide text-terra-500">{actual.categoria} · {actual.tipo}</p>
          <h2 className="mt-1 font-serif text-2xl font-semibold leading-snug text-zinc-50">{actual.titulo}</h2>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1"><Calendar size={13} />{actual.anio}</span>
            <span className="inline-flex items-center gap-1"><MapPin size={13} />{actual.lugar}</span>
          </p>
          <div className="mt-4 flex-1 space-y-3 overflow-y-auto font-serif leading-relaxed text-zinc-300 lg:max-h-[300px]">
            {actual.relato.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="mt-4 space-y-2 border-t border-zinc-800 pt-3">
            {actual.audioUrl && <audio controls src={actual.audioUrl} className="w-full" aria-label="Audio del registro" />}
            {'speechSynthesis' in window && (
              <button className="btn-ghost w-full" onClick={hablar} aria-pressed={speaking}>
                {speaking ? <><VolumeX size={16} /> Detener lectura</> : <><Volume2 size={16} /> Escuchar relato</>}
              </button>
            )}
            <p className="text-[11px] leading-snug text-zinc-500">Crédito: {actual.credito}</p>
            {actual.fuenteUrl && (
              <a href={actual.fuenteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-ocre-400 underline"><ExternalLink size={12} /> Ver ficha original</a>
            )}
          </div>
        </article>
      </div>

      {/* Tira de miniaturas */}
      <ul className="flex gap-2 overflow-x-auto pb-2" aria-label="Miniaturas">
        {lista.map((r, i) => (
          <li key={r.id} className="shrink-0">
            <button onClick={() => { stopVoice(); setIdx(i); }} aria-label={`Ver ${r.titulo}`} aria-current={i === idx}
              className={`block h-16 w-24 overflow-hidden rounded-md border-2 bg-stone-200 ${i === idx ? 'border-terra-500' : 'border-transparent opacity-80 hover:opacity-100'}`}>
              {r.tipo === 'video' ? (
                <span className="grid h-full place-items-center text-zinc-400"><Play size={18} /></span>
              ) : (
                <img src={r.mediaUrl} alt="" loading="lazy" className="h-full w-full object-cover" onError={(e) => ((e.target as HTMLImageElement).style.visibility = 'hidden')} />
              )}
            </button>
          </li>
        ))}
      </ul>

      {zoom && actual.tipo !== 'video' && (
        <Modal title={actual.titulo} onClose={() => setZoom(false)}>
          <img src={actual.mediaUrl} alt={actual.titulo} className="max-h-[70vh] w-full rounded object-contain" />
          <p className="mt-2 text-xs text-zinc-500">{actual.credito}</p>
        </Modal>
      )}
    </div>
  );
}

function Ctl({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} aria-label={label} title={label} className="grid h-9 w-9 place-items-center rounded-full bg-black/40 hover:bg-black/60">{children}</button>;
}
