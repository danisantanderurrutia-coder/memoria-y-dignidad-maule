import { useMemo, useState } from 'react';
import { Search, FileText, Headphones, Image as Img, Film, Download, ExternalLink } from 'lucide-react';
import { Documento, FormatoDoc } from '../types';
import { useLanguage } from '../context/LanguageContext';
import Modal from './Modal';

const FORMATOS: FormatoDoc[] = ['PDF', 'Audio', 'Fotografía', 'Video'];
const ICON = { PDF: FileText, Audio: Headphones, Fotografía: Img, Video: Film } as const;

export default function Library({ docs }: { docs: Documento[] }) {
  const { lang, t } = useLanguage();
  const [q, setQ] = useState('');
  const [formato, setFormato] = useState<FormatoDoc | ''>('');
  const [tag, setTag] = useState('');
  const [open, setOpen] = useState<Documento | null>(null);

  const tags = useMemo(() => Array.from(new Set(docs.flatMap((d) => d.etiquetas))).sort((a, b) => a.localeCompare(b, 'es')), [docs]);
  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    return docs.filter(
      (d) =>
        (!formato || d.formato === formato) &&
        (!tag || d.etiquetas.includes(tag)) &&
        (!n || `${d.titulo} ${d.descripcion} ${d.fuente} ${d.etiquetas.join(' ')}`.toLowerCase().includes(n)),
    );
  }, [docs, q, formato, tag]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-serif text-3xl font-semibold text-zinc-50">{t.libTitle}</h1>
      <p className="mt-2 max-w-2xl text-zinc-400">{t.libDesc}</p>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_200px_220px]">
        <div className="relative">
          <label htmlFor="lib-q" className="sr-only">Buscar documentos</label>
          <Search size={16} className="absolute left-3 top-3 text-zinc-500" aria-hidden />
          <input id="lib-q" className="input pl-9" placeholder={t.libSearchPlaceholder} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lib-f" className="sr-only">Formato</label>
          <select id="lib-f" className="input" value={formato} onChange={(e) => setFormato(e.target.value as FormatoDoc | '')}>
            <option value="">{t.libAllFormats}</option>
            {FORMATOS.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="lib-t" className="sr-only">Etiqueta</label>
          <select id="lib-t" className="input" value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="">{t.libAllTags}</option>
            {tags.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <p className="mt-4 text-xs text-zinc-500" aria-live="polite">{list.length} {t.libCount}</p>
      <ul className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((d) => {
          const I = ICON[d.formato];
          return (
            <li key={d.id}>
              <button onClick={() => setOpen(d)} className="card h-full w-full p-4 text-left transition hover:-translate-y-0.5 hover:border-terra-500">
                <div className="flex items-center gap-2 text-xs text-ocre-400"><I size={16} /> {d.formato} · {d.anio}</div>
                <h2 className="mt-2 font-serif text-lg leading-snug text-zinc-50">{d.titulo}</h2>
                <p className="mt-1 line-clamp-3 text-sm text-zinc-400">{d.descripcion}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {d.etiquetas.map((t) => <span key={t} className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-300">{t}</span>)}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
      {list.length === 0 && <p className="mt-8 text-center text-zinc-500">{t.libNotFound}</p>}

      {open && (
        <Modal title={open.titulo} onClose={() => setOpen(null)}>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div><dt className="label">{lang === 'de' ? 'Format' : lang === 'en' ? 'Format' : 'Formato'}</dt><dd>{open.formato}</dd></div>
            <div><dt className="label">{lang === 'de' ? 'Jahr' : lang === 'en' ? 'Year' : 'Año'}</dt><dd>{open.anio}</dd></div>
            <div className="col-span-2"><dt className="label">{lang === 'de' ? 'Quelle' : lang === 'en' ? 'Source' : 'Fuente'}</dt><dd>{open.fuente}</dd></div>
          </dl>
          <p className="my-4 font-serif leading-relaxed text-zinc-300">{open.descripcion}</p>
          <div className="mb-5 flex flex-wrap gap-1">
            {open.etiquetas.map((t) => <span key={t} className="rounded bg-zinc-800 px-2 py-0.5 text-xs">{t}</span>)}
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="btn-primary" href={open.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> {t.libOpen}</a>
            <a className="btn-ghost" href={open.url} target="_blank" rel="noopener noreferrer" download><Download size={16} /> {t.libDownload}</a>
          </div>
        </Modal>
      )}
    </div>
  );
}
