import { useEffect, useMemo, useState } from 'react';
import { Filter, RotateCcw } from 'lucide-react';
import { Epoca, Provincia, Sitio, TipoSitio } from '../types';
import { EPOCAS, PROVINCIAS, TIPOS } from '../lib/meta';
import { useLanguage } from '../context/LanguageContext';
import MapView from './MapView';
import SitePanel from './SitePanel';

interface Props {
  sitios: Sitio[];
  initialSelectedId?: string | null;
}

export default function MapPage({ sitios, initialSelectedId }: Props) {
  const { lang, t } = useLanguage();
  const [epoca, setEpoca] = useState<Epoca | ''>('');
  const [provincia, setProvincia] = useState<Provincia | ''>('');
  const [tipo, setTipo] = useState<TipoSitio | ''>('');
  const [selectedId, setSelectedId] = useState<string | null>(initialSelectedId || null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialSelectedId) {
      setSelectedId(initialSelectedId);
    }
  }, [initialSelectedId]);

  const filtrados = useMemo(
    () => sitios.filter((s) => (!epoca || s.epoca === epoca) && (!provincia || s.provincia === provincia) && (!tipo || s.tipo === tipo)),
    [sitios, epoca, provincia, tipo],
  );
  const selected = sitios.find((s) => s.id === selectedId) ?? null;
  const activos = [epoca, provincia, tipo].filter(Boolean).length;

  const reset = () => { setEpoca(''); setProvincia(''); setTipo(''); };

  // Translated epoch label function
  const getEpocaLabel = (k: Epoca) => {
    if (lang === 'de') {
      const deLabels: Record<Epoca, string> = {
        pre: 'Agrarreform & Vor-Diktatur',
        dictadura: 'Zivil-Militärische Diktatur',
        transicion: 'Post-Diktatur / Übergang',
        revuelta: 'Soziale Revolte von Oktober',
      };
      return `${deLabels[k]} (${EPOCAS[k].rango})`;
    }
    if (lang === 'en') {
      const enLabels: Record<Epoca, string> = {
        pre: 'Agrarian Reform & Pre-dictatorship',
        dictadura: 'Civic-Military Dictatorship',
        transicion: 'Post-dictatorship / Transition',
        revuelta: 'Popular Uprising',
      };
      return `${enLabels[k]} (${EPOCAS[k].rango})`;
    }
    return `${EPOCAS[k].label} (${EPOCAS[k].rango})`;
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
    <div className="flex h-full flex-col md:flex-row">
      <section aria-label="Filtros del mapa" className="border-b border-zinc-800 bg-white md:w-72 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r">
        <div className="flex items-center justify-between p-3 md:hidden">
          <button className="btn-ghost" aria-expanded={showFilters} onClick={() => setShowFilters((v) => !v)}>
            <Filter size={16} /> {t.filterTitle}{activos ? ` (${activos})` : ''}
          </button>
          <span className="text-xs text-zinc-400" aria-live="polite">{filtrados.length} {t.filterCount}</span>
        </div>
        <div className={`${showFilters ? 'block' : 'hidden'} space-y-5 p-4 md:block`}>
          <div className="hidden items-center justify-between md:flex">
            <h2 className="font-serif text-lg text-zinc-50 font-bold">{t.filterTitle}</h2>
            <span className="text-xs text-zinc-400" aria-live="polite">{filtrados.length} {lang === 'de' ? 'von' : lang === 'en' ? 'of' : 'de'} {sitios.length}</span>
          </div>

          {/* Acceso Rápido Destacado: Ruta Parral & Colonia Dignidad */}
          <div className="rounded-lg border border-terra-500/40 bg-terra-950/20 p-3 text-xs">
            <div className="flex items-center justify-between font-bold text-terra-400">
              <span>{t.routeParralTitle}</span>
              <span className="rounded bg-terra-500/20 px-1.5 py-0.5 text-[10px]">{t.routeParralTag}</span>
            </div>
            <p className="mt-1 text-zinc-400">{t.routeParralDesc}</p>
            <button
              onClick={() => {
                setProvincia('Linares');
                setTipo('colonia');
              }}
              className="mt-2 w-full rounded bg-terra-600 px-2 py-1 text-center font-semibold text-white shadow-sm hover:bg-terra-500 transition"
            >
              {t.routeParralBtn}
            </button>
          </div>

          <fieldset>
            <legend className="label">{t.filterEpoch}</legend>
            <div className="space-y-1">
              <Radio name="epoca" checked={epoca === ''} onChange={() => setEpoca('')} label={t.filterAll} />
              {(Object.keys(EPOCAS) as Epoca[]).map((k) => (
                <Radio key={k} name="epoca" checked={epoca === k} onChange={() => setEpoca(k)} label={getEpocaLabel(k)} dot={EPOCAS[k].color} />
              ))}
            </div>
          </fieldset>

          <div>
            <label className="label" htmlFor="f-prov">{t.filterProvince}</label>
            <select id="f-prov" className="input" value={provincia} onChange={(e) => setProvincia(e.target.value as Provincia | '')}>
              <option value="">{t.filterAll}</option>
              {PROVINCIAS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="label" htmlFor="f-tipo">{t.filterType}</label>
            <select id="f-tipo" className="input" value={tipo} onChange={(e) => setTipo(e.target.value as TipoSitio | '')}>
              <option value="">{t.filterAll}</option>
              {(Object.keys(TIPOS) as TipoSitio[]).map((k) => <option key={k} value={k}>{getTipoLabel(k)}</option>)}
            </select>
          </div>

          <button className="btn-ghost w-full" onClick={reset} disabled={!activos}><RotateCcw size={14} /> {t.filterReset}</button>

          <div className="border-t border-zinc-800 pt-3 text-xs text-zinc-500">
            <p className="mb-1 font-medium text-zinc-400">{t.filterLegend}</p>
            <p>{t.filterLegendDesc}</p>
          </div>

          <ul className="space-y-1" aria-label="Lista de sitios filtrados">
            {filtrados.map((s) => (
              <li key={s.id}>
                <button onClick={() => setSelectedId(s.id)} className={`w-full rounded px-2 py-1.5 text-left text-xs hover:bg-zinc-800 ${s.id === selectedId ? 'bg-zinc-800 font-bold text-terra-500' : 'text-zinc-300'}`}>
                  {s.titulo}
                </button>
              </li>
            ))}
            {filtrados.length === 0 && <li className="text-xs text-zinc-500">{t.filterEmpty}</li>}
          </ul>
        </div>
      </section>

      <div className="relative min-h-0 flex-1">
        <MapView sitios={filtrados} selectedId={selectedId} onSelect={setSelectedId} />
        {selected && <SitePanel sitio={selected} onClose={() => setSelectedId(null)} />}
      </div>
    </div>
  );
}

function Radio({ name, checked, onChange, label, dot }: { name: string; checked: boolean; onChange: () => void; label: string; dot?: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-2 rounded px-1 py-1 text-sm text-zinc-300 hover:bg-zinc-800">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="mt-1 accent-orange-700" />
      {dot && <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: dot }} aria-hidden />}
      <span>{label}</span>
    </label>
  );
}
