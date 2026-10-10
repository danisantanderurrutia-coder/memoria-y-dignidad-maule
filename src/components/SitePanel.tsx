import { useEffect, useRef, useState } from 'react';
import { X, MapPin, Calendar, ExternalLink, ImageOff, Quote, Video, BookOpen, Images, Mic } from 'lucide-react';
import { Sitio, Epoca, TipoSitio } from '../types';
import { EPOCAS, TIPOS, youtubeEmbed } from '../lib/meta';
import { useLanguage } from '../context/LanguageContext';

export default function SitePanel({ sitio, onClose }: { sitio: Sitio; onClose: () => void }) {
  const { lang, t } = useLanguage();
  const [tab, setTab] = useState<'resena' | 'galeria' | 'testimonio' | 'video' | 'fuentes'>('resena');
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

  const tabs = [
    { id: 'resena', label: t.tabResena, icon: BookOpen },
    { id: 'galeria', label: t.tabGaleria, icon: Images },
    { id: 'testimonio', label: t.tabTestimonio, icon: Mic },
    { id: 'video', label: t.tabVideo, icon: Video },
    { id: 'fuentes', label: t.tabFuentes, icon: ExternalLink },
  ] as const;

  const getEpocaLabel = (k: Epoca) => {
    if (lang === 'de') {
      const deLabels: Record<Epoca, string> = {
        pre: 'Agrarreform & Vor-Diktatur',
        dictadura: 'Zivil-Militärische Diktatur',
        transicion: 'Post-Diktatur / Übergang',
        revuelta: 'Soziale Revolte von Oktober',
      };
      return deLabels[k];
    }
    if (lang === 'en') {
      const enLabels: Record<Epoca, string> = {
        pre: 'Agrarian Reform & Pre-dictatorship',
        dictadura: 'Civic-Military Dictatorship',
        transicion: 'Post-dictatorship / Transition',
        revuelta: 'Popular Uprising',
      };
      return enLabels[k];
    }
    return EPOCAS[k].label;
  };

  const getTipoLabel = (k: TipoSitio) => {
    if (lang === 'de') {
      const deTipos: Record<TipoSitio, string> = {
        detencion: 'Haft- & Folterzentrum',
        memorial: 'Mahnmal / Öffentlicher Raum',
        conflicto: 'Sozialer Konflikt / Widerstand',
        colonia: 'Colonia Dignidad',
      };
      return deTipos[k];
    }
    if (lang === 'en') {
      const enTipos: Record<TipoSitio, string> = {
        detencion: 'Detention / Torture Center',
        memorial: 'Memorial / Public Space',
        conflicto: 'Social Conflict / Resistance',
        colonia: 'Colonia Dignidad',
      };
      return enTipos[k];
    }
    return TIPOS[k].label;
  };

  return (
    <aside
      role="dialog"
      aria-label={`${t.sitePanelHistory}: ${sitio.titulo}`}
      className="slide-in absolute inset-x-0 bottom-0 z-[1000] flex max-h-[80%] flex-col border-t border-zinc-700 bg-zinc-900 shadow-2xl md:inset-y-0 md:left-auto md:right-0 md:max-h-none md:w-[440px] md:border-l md:border-t-0"
    >
      <header className="border-b border-zinc-800 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: epoca.color }}>
              <span className="h-2 w-2 rounded-full" style={{ background: epoca.color }} />
              {getEpocaLabel(sitio.epoca)}
            </span>
            <h2 className="mt-1 font-serif text-xl font-semibold leading-snug text-zinc-50">{sitio.titulo}</h2>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label={t.closeBtn} className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50">
            <X size={20} />
          </button>
        </div>
        <dl className="mt-3 space-y-1 text-xs text-zinc-400">
          <div className="flex items-center gap-2"><MapPin size={14} /><dt className="sr-only">Ubicación</dt><dd>{sitio.comuna}, {lang === 'de' ? 'Provinz' : lang === 'en' ? 'Province of' : 'Provincia de'} {sitio.provincia} · {sitio.lat.toFixed(4)}, {sitio.lng.toFixed(4)}</dd></div>
          <div className="flex items-center gap-2"><Calendar size={14} /><dt className="sr-only">Período</dt><dd>{sitio.periodo}</dd></div>
          <div><span className="rounded bg-zinc-800 px-2 py-0.5">{getTipoLabel(sitio.tipo)}</span></div>
        </dl>
      </header>

      <div role="tablist" aria-label="Contenido del sitio" className="flex overflow-x-auto border-b border-zinc-800 px-2">
        {tabs.map(({ id, label, icon: Icon }) => (
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
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-zinc-500">{t.sitePanelHistory}</h3>
            {sitio.resena.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        {tab === 'galeria' &&
          (sitio.galeria.length === 0 ? (
            <Empty text={t.sitePanelEmptyGallery} />
          ) : (
            <ul className="space-y-4">
              {sitio.galeria.map((g, i) => (
                <li key={i}>
                  {g.url ? (
                    <img src={g.url} alt={g.caption} loading="lazy" className="w-full rounded-md border border-zinc-800 object-cover" />
                  ) : (
                    <div className="flex h-36 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-zinc-700 bg-zinc-950 text-zinc-500">
                      <ImageOff size={24} />
                      <span className="text-xs">{t.sitePanelPendingImage}</span>
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
                <p className="text-xs text-zinc-500">{t.sitePanelNoAudio}</p>
              )}
            </div>
          ) : (
            <Empty text={t.sitePanelEmptyTestimony} />
          ))}
        {tab === 'video' &&
          (embed ? (
            <div className="aspect-video overflow-hidden rounded-md border border-zinc-800">
              <iframe src={embed} title={`Video: ${sitio.titulo}`} className="h-full w-full" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
            </div>
          ) : (
            <Empty text={t.sitePanelEmptyVideo} />
          ))}
        {tab === 'fuentes' && (
          <ul className="space-y-2 text-sm">
            {sitio.fuentes.length === 0 && <Empty text={t.sitePanelEmptySources} />}
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
