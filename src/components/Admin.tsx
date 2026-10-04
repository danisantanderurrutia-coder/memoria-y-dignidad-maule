import { useState } from 'react';
import {
  Plus, Pencil, Trash2, Check, X, MapPin, FileText, MessageSquare, Inbox, RotateCcw,
  Sparkles, Palette, BookOpenCheck,
} from 'lucide-react';
import {
  Aporte, Articulo, Comentario, Sitio, Epoca, Provincia, TipoSitio,
  HistoriaSueno, ObraArte, TallerComunitario, CategoriaSueno, CategoriaArte, NivelTaller,
} from '../types';
import { EPOCAS, PROVINCIAS, TIPOS, fmtFecha, uid } from '../lib/meta';
import Modal from './Modal';

interface Props {
  sitios: Sitio[]; setSitios: React.Dispatch<React.SetStateAction<Sitio[]>>;
  articulos: Articulo[]; setArticulos: React.Dispatch<React.SetStateAction<Articulo[]>>;
  comentarios: Comentario[]; setComentarios: React.Dispatch<React.SetStateAction<Comentario[]>>;
  aportes: Aporte[]; setAportes: React.Dispatch<React.SetStateAction<Aporte[]>>;
  suenos: HistoriaSueno[]; setSuenos: React.Dispatch<React.SetStateAction<HistoriaSueno[]>>;
  arte: ObraArte[]; setArte: React.Dispatch<React.SetStateAction<ObraArte[]>>;
  talleres: TallerComunitario[]; setTalleres: React.Dispatch<React.SetStateAction<TallerComunitario[]>>;
  onResetAll: () => void;
}

type Tab = 'comentarios' | 'sitios' | 'articulos' | 'suenos' | 'arte' | 'talleres' | 'aportes';

export default function Admin(p: Props) {
  const [tab, setTab] = useState<Tab>('comentarios');
  const [editSitio, setEditSitio] = useState<Sitio | null>(null);
  const [editArt, setEditArt] = useState<Articulo | null>(null);
  const [editSueno, setEditSueno] = useState<HistoriaSueno | null>(null);
  const [editArte, setEditArte] = useState<ObraArte | null>(null);
  const [editTaller, setEditTaller] = useState<TallerComunitario | null>(null);

  const pend = p.comentarios.filter((c) => c.estado === 'pendiente').length;
  const nuevosAportes = p.aportes.filter((a) => !a.revisado).length;

  const tabs: { id: Tab; label: string; icon: typeof MapPin; badge?: number }[] = [
    { id: 'comentarios', label: 'Moderación', icon: MessageSquare, badge: pend },
    { id: 'sitios', label: 'Sitios', icon: MapPin },
    { id: 'articulos', label: 'Artículos', icon: FileText },
    { id: 'suenos', label: 'Sueños & Oficios', icon: Sparkles },
    { id: 'arte', label: 'Arte & Cultura', icon: Palette },
    { id: 'talleres', label: 'Talleres', icon: BookOpenCheck },
    { id: 'aportes', label: 'Aportes', icon: Inbox, badge: nuevosAportes },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl font-semibold text-zinc-50">Panel de administración</h1>
          <p className="text-xs text-zinc-400 mt-1">Gestión integral de sitios, artículos, cultura comunitaria y moderación.</p>
        </div>
        <button
          className="btn-danger text-xs"
          onClick={() => confirm('¿Restablecer todos los datos a los valores iniciales? Se perderán los cambios locales.') && p.onResetAll()}
        >
          <RotateCcw size={14} /> Restablecer datos iniciales
        </button>
      </div>

      {/* Tabs */}
      <div role="tablist" className="mt-6 flex gap-1 overflow-x-auto border-b border-zinc-800">
        {tabs.map(({ id, label, icon: I, badge }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-2.5 text-sm font-medium transition ${
              tab === id ? 'border-terra-400 text-terra-500 font-semibold' : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <I size={16} /> {label}
            {!!badge && <span className="rounded-full bg-terra-500 px-1.5 text-xs text-white">{badge}</span>}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {/* TAB: MODERACIÓN */}
        {tab === 'comentarios' && <Moderacion {...p} />}

        {/* TAB: SITIOS */}
        {tab === 'sitios' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">{p.sitios.length} sitios registrados</span>
              <button className="btn-primary" onClick={() => setEditSitio(nuevoSitio())}><Plus size={16} /> Nuevo sitio</button>
            </div>
            <ul className="space-y-2">
              {p.sitios.map((s) => (
                <Row
                  key={s.id}
                  title={s.titulo}
                  sub={`${s.comuna} · ${EPOCAS[s.epoca]?.rango ?? s.epoca} · ${s.lat.toFixed(4)}, ${s.lng.toFixed(4)}`}
                  onEdit={() => setEditSitio(s)}
                  onDelete={() => confirm(`¿Eliminar «${s.titulo}»?`) && p.setSitios((x) => x.filter((y) => y.id !== s.id))}
                />
              ))}
            </ul>
          </>
        )}

        {/* TAB: ARTICULOS */}
        {tab === 'articulos' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">{p.articulos.length} artículos registrados</span>
              <button className="btn-primary" onClick={() => setEditArt(nuevoArticulo())}><Plus size={16} /> Nuevo artículo</button>
            </div>
            <ul className="space-y-2">
              {p.articulos.map((a) => (
                <Row
                  key={a.id}
                  title={a.titulo}
                  sub={`${a.categoria} · ${fmtFecha(a.fecha)} · ${a.autor}`}
                  onEdit={() => setEditArt(a)}
                  onDelete={() =>
                    confirm(`¿Eliminar «${a.titulo}» y sus comentarios?`) &&
                    (p.setArticulos((x) => x.filter((y) => y.id !== a.id)),
                    p.setComentarios((c) => c.filter((y) => y.articuloId !== a.id)))
                  }
                />
              ))}
            </ul>
          </>
        )}

        {/* TAB: SUEÑOS & OFICIOS */}
        {tab === 'suenos' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">{p.suenos.length} relatos de oficios y proyectos</span>
              <button className="btn-primary" onClick={() => setEditSueno(nuevoSueno())}><Plus size={16} /> Nueva historia</button>
            </div>
            <ul className="space-y-2">
              {p.suenos.map((s) => (
                <Row
                  key={s.id}
                  title={s.titulo}
                  sub={`${s.categoria} · ${s.comuna} (${s.territorioTipo}) · ${s.anio}`}
                  onEdit={() => setEditSueno(s)}
                  onDelete={() => confirm(`¿Eliminar «${s.titulo}»?`) && p.setSuenos((x) => x.filter((y) => y.id !== s.id))}
                />
              ))}
            </ul>
          </>
        )}

        {/* TAB: ARTE & CULTURA */}
        {tab === 'arte' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">{p.arte.length} obras registradas</span>
              <button className="btn-primary" onClick={() => setEditArte(nuevoArte())}><Plus size={16} /> Nueva obra</button>
            </div>
            <ul className="space-y-2">
              {p.arte.map((o) => (
                <Row
                  key={o.id}
                  title={o.titulo}
                  sub={`${o.categoria} · ${o.autorColectivo} · ${o.comuna} (${o.anio})`}
                  onEdit={() => setEditArte(o)}
                  onDelete={() => confirm(`¿Eliminar «${o.titulo}»?`) && p.setArte((x) => x.filter((y) => y.id !== o.id))}
                />
              ))}
            </ul>
          </>
        )}

        {/* TAB: TALLERES */}
        {tab === 'talleres' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-zinc-400">{p.talleres.length} guías metodológicas</span>
              <button className="btn-primary" onClick={() => setEditTaller(nuevoTaller())}><Plus size={16} /> Nuevo taller</button>
            </div>
            <ul className="space-y-2">
              {p.talleres.map((t) => (
                <Row
                  key={t.id}
                  title={t.titulo}
                  sub={`Nivel: ${t.nivel} · ${t.duracion}`}
                  onEdit={() => setEditTaller(t)}
                  onDelete={() => confirm(`¿Eliminar «${t.titulo}»?`) && p.setTalleres((x) => x.filter((y) => y.id !== t.id))}
                />
              ))}
            </ul>
          </>
        )}

        {/* TAB: APORTES CIUDADANOS */}
        {tab === 'aportes' && (
          <ul className="space-y-3">
            {p.aportes.length === 0 && <li className="text-zinc-500 py-6 text-center">No hay aportes recibidos.</li>}
            {p.aportes.map((a) => (
              <li key={a.id} className="card p-4">
                <p className="text-xs text-ocre-500 font-semibold">{a.tipo} · {fmtFecha(a.fecha)} {a.revisado ? '· revisado' : '· nuevo'}</p>
                <h3 className="font-serif text-lg text-zinc-50 font-bold mt-1">{a.titulo}</h3>
                <p className="mt-1 whitespace-pre-line text-sm text-zinc-300">{a.mensaje}</p>
                <p className="mt-2 text-xs text-zinc-400">
                  {a.nombre || 'Anónimo'}
                  {a.contacto && ` · Contacto: ${a.contacto}`}
                  {a.enlace && (
                    <>
                      {' '}· <a className="text-terra-600 underline font-semibold" href={a.enlace} target="_blank" rel="noopener noreferrer">Ver enlace adjunto</a>
                    </>
                  )}
                </p>
                <div className="mt-3 flex gap-2">
                  {!a.revisado && (
                    <button
                      className="btn-ghost text-xs"
                      onClick={() => p.setAportes((x) => x.map((y) => (y.id === a.id ? { ...y, revisado: true } : y)))}
                    >
                      <Check size={14} /> Marcar revisado
                    </button>
                  )}
                  <button className="btn-danger text-xs" onClick={() => p.setAportes((x) => x.filter((y) => y.id !== a.id))}>
                    <Trash2 size={14} /> Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* MODALES DE FORMULARIO */}
      {editSitio && (
        <SitioForm
          inicial={editSitio}
          existe={p.sitios.some((s) => s.id === editSitio.id)}
          onClose={() => setEditSitio(null)}
          onSave={(s) => {
            p.setSitios((x) => (x.some((y) => y.id === s.id) ? x.map((y) => (y.id === s.id ? s : y)) : [...x, s]));
            setEditSitio(null);
          }}
        />
      )}

      {editArt && (
        <ArticuloForm
          inicial={editArt}
          existe={p.articulos.some((a) => a.id === editArt.id)}
          onClose={() => setEditArt(null)}
          onSave={(a) => {
            p.setArticulos((x) => (x.some((y) => y.id === a.id) ? x.map((y) => (y.id === a.id ? a : y)) : [a, ...x]));
            setEditArt(null);
          }}
        />
      )}

      {editSueno && (
        <SuenoForm
          inicial={editSueno}
          existe={p.suenos.some((s) => s.id === editSueno.id)}
          onClose={() => setEditSueno(null)}
          onSave={(s) => {
            p.setSuenos((x) => (x.some((y) => y.id === s.id) ? x.map((y) => (y.id === s.id ? s : y)) : [s, ...x]));
            setEditSueno(null);
          }}
        />
      )}

      {editArte && (
        <ArteForm
          inicial={editArte}
          existe={p.arte.some((o) => o.id === editArte.id)}
          onClose={() => setEditArte(null)}
          onSave={(o) => {
            p.setArte((x) => (x.some((y) => y.id === o.id) ? x.map((y) => (y.id === o.id ? o : y)) : [o, ...x]));
            setEditArte(null);
          }}
        />
      )}

      {editTaller && (
        <TallerForm
          inicial={editTaller}
          existe={p.talleres.some((t) => t.id === editTaller.id)}
          onClose={() => setEditTaller(null)}
          onSave={(t) => {
            p.setTalleres((x) => (x.some((y) => y.id === t.id) ? x.map((y) => (y.id === t.id ? t : y)) : [t, ...x]));
            setEditTaller(null);
          }}
        />
      )}
    </div>
  );
}

// Modelos Iniciales
const nuevoSitio = (): Sitio => ({
  id: uid('sitio'),
  titulo: '',
  comuna: '',
  provincia: 'Talca',
  epoca: 'dictadura',
  tipo: 'detencion',
  lat: -35.4264,
  lng: -71.6554,
  periodo: '',
  resena: '',
  galeria: [],
  testimonio: '',
  testimonioAutor: '',
  audioUrl: '',
  videoUrl: '',
  fuentes: [],
});

const nuevoArticulo = (): Articulo => ({
  id: uid('art'),
  titulo: '',
  resumen: '',
  categoria: 'Crónica',
  autor: 'Equipo editorial',
  fecha: new Date().toISOString().slice(0, 10),
  contenido: '',
});

const nuevoSueno = (): HistoriaSueno => ({
  id: uid('sueno'),
  titulo: '',
  categoria: 'Oficios y Vida Cotidiana',
  comuna: 'Talca',
  territorioTipo: 'Urbano',
  anio: '1970',
  quienesEran: '',
  queSonaban: '',
  comoCelebraban: '',
  elementoSonoroCulinario: '',
  galeria: [],
});

const nuevoArte = (): ObraArte => ({
  id: uid('arte'),
  titulo: '',
  categoria: 'Murales y Gráfica Barrial',
  autorColectivo: '',
  anio: '2020',
  comuna: 'Talca',
  descripcion: '',
  contenidoTexto: '',
  imagenUrl: '',
  audioUrl: '',
});

const nuevoTaller = (): TallerComunitario => ({
  id: uid('taller'),
  titulo: '',
  subtitulo: '',
  nivel: 'Vecinal',
  duracion: '90 minutos',
  materiales: ['Papel', 'Lápices'],
  objetivo: '',
  pasos: { fase: 'General', titulo: '', descripcion: '' },
  pasosList: [
    { fase: 'Paso 1', titulo: 'Inicio', descripcion: 'Bienvenida y conversación inicial.' }
  ],
  consejosPedagogicos: ['Fomentar la escucha activa.'],
});

function Row({ title, sub, onEdit, onDelete }: { title: string; sub: string; onEdit: () => void; onDelete: () => void }) {
  return (
    <li className="card flex items-center justify-between gap-3 p-3.5">
      <div className="min-w-0">
        <p className="truncate font-semibold text-zinc-100">{title}</p>
        <p className="truncate text-xs text-zinc-400 mt-0.5">{sub}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button className="btn-ghost py-1 px-2.5 text-xs" onClick={onEdit} aria-label={`Editar ${title}`}><Pencil size={14} /></button>
        <button className="btn-danger py-1 px-2.5 text-xs" onClick={onDelete} aria-label={`Eliminar ${title}`}><Trash2 size={14} /></button>
      </div>
    </li>
  );
}

function Moderacion({ comentarios, setComentarios, articulos }: Props) {
  const [filtro, setFiltro] = useState<'pendiente' | 'aprobado' | 'rechazado' | 'todos'>('pendiente');
  const lista = comentarios.filter((c) => filtro === 'todos' || c.estado === filtro);
  const set = (id: string, estado: Comentario['estado']) =>
    setComentarios((cs) => cs.map((c) => (c.id === id ? { ...c, estado } : c)));
  const badge = {
    pendiente: 'bg-amber-100 text-amber-900 border border-amber-300',
    aprobado: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    rechazado: 'bg-red-100 text-red-800 border border-red-300',
  };

  return (
    <div>
      <div className="mb-4 flex gap-2" role="group" aria-label="Filtrar por estado">
        {(['pendiente', 'aprobado', 'rechazado', 'todos'] as const).map((f) => (
          <button
            key={f}
            aria-pressed={filtro === f}
            onClick={() => setFiltro(f)}
            className={`rounded-full border px-3 py-1 text-xs capitalize font-medium transition ${
              filtro === f ? 'border-terra-500 bg-terra-500 text-white' : 'border-zinc-700 text-zinc-300 bg-white/60'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {lista.length === 0 && <li className="text-zinc-500 py-6 text-center">No hay comentarios en esta bandeja.</li>}
        {lista.map((c) => (
          <li key={c.id} className="card p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className={`rounded px-2 py-0.5 font-semibold text-[11px] ${badge[c.estado]}`}>{c.estado}</span>
              <span>{c.autor} · {fmtFecha(c.fecha)}</span>
              <span>en «{articulos.find((a) => a.id === c.articuloId)?.titulo ?? 'artículo'}»</span>
            </div>
            <p className="mt-2 text-sm text-zinc-200 font-serif leading-relaxed">{c.texto}</p>
            <div className="mt-3 flex gap-2">
              {c.estado !== 'aprobado' && (
                <button className="btn-primary py-1 px-3 text-xs" onClick={() => set(c.id, 'aprobado')}>
                  <Check size={14} /> Aprobar
                </button>
              )}
              {c.estado !== 'rechazado' && (
                <button className="btn-ghost py-1 px-3 text-xs" onClick={() => set(c.id, 'rechazado')}>
                  <X size={14} /> Rechazar
                </button>
              )}
              <button className="btn-danger py-1 px-3 text-xs" onClick={() => setComentarios((cs) => cs.filter((x) => x.id !== c.id))}>
                <Trash2 size={14} /> Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// -------------------------------------------------------------
// FORMULARIO: SITIO
// -------------------------------------------------------------
function SitioForm({ inicial, existe, onSave, onClose }: { inicial: Sitio; existe: boolean; onSave: (s: Sitio) => void; onClose: () => void }) {
  const [s, setS] = useState({
    ...inicial,
    lat: String(inicial.lat),
    lng: String(inicial.lng),
    galeria: inicial.galeria.map((g) => `${g.url} | ${g.caption}`).join('\n'),
    fuentes: inicial.fuentes.map((f) => `${f.label} | ${f.url}`).join('\n'),
  });
  const [err, setErr] = useState('');
  const set = (k: keyof typeof s) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setS({ ...s, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lat = parseFloat(s.lat.replace(',', '.')), lng = parseFloat(s.lng.replace(',', '.'));
    if (!isFinite(lat) || lat < -90 || lat > 90 || !isFinite(lng) || lng < -180 || lng > 180) {
      return setErr('Coordenadas inválidas (lat −90…90, lng −180…180).');
    }
    const pares = (txt: string) =>
      txt.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
        const i = l.indexOf('|');
        return i < 0 ? [l, ''] : [l.slice(0, i).trim(), l.slice(i + 1).trim()];
      });

    onSave({
      ...s,
      lat,
      lng,
      galeria: pares(s.galeria).map(([url, caption]) => ({
        url: /^https?:|^data:/.test(url) ? url : '',
        caption: /^https?:|^data:/.test(url) ? caption : url,
      })),
      fuentes: pares(s.fuentes).map(([label, url]) => ({ label, url })),
    });
  };

  return (
    <Modal title={existe ? 'Editar sitio de memoria' : 'Nuevo sitio de memoria'} onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <Field label="Título" id="s-t"><input id="s-t" required className="input" value={s.titulo} onChange={set('titulo')} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Comuna" id="s-c"><input id="s-c" required className="input" value={s.comuna} onChange={set('comuna')} /></Field>
          <Field label="Provincia" id="s-p">
            <select id="s-p" className="input" value={s.provincia} onChange={(e) => setS({ ...s, provincia: e.target.value as Provincia })}>
              {PROVINCIAS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </Field>
          <Field label="Época" id="s-e">
            <select id="s-e" className="input" value={s.epoca} onChange={(e) => setS({ ...s, epoca: e.target.value as Epoca })}>
              {(Object.keys(EPOCAS) as Epoca[]).map((k) => <option key={k} value={k}>{EPOCAS[k].label}</option>)}
            </select>
          </Field>
          <Field label="Tipo" id="s-ti">
            <select id="s-ti" className="input" value={s.tipo} onChange={(e) => setS({ ...s, tipo: e.target.value as TipoSitio })}>
              {(Object.keys(TIPOS) as TipoSitio[]).map((k) => <option key={k} value={k}>{TIPOS[k].label}</option>)}
            </select>
          </Field>
          <Field label="Latitud" id="s-la"><input id="s-la" required inputMode="decimal" className="input" value={s.lat} onChange={set('lat')} /></Field>
          <Field label="Longitud" id="s-lo"><input id="s-lo" required inputMode="decimal" className="input" value={s.lng} onChange={set('lng')} /></Field>
        </div>
        <Field label="Período" id="s-pe"><input id="s-pe" className="input" value={s.periodo} onChange={set('periodo')} /></Field>
        <Field label="Reseña histórica y judicial" id="s-r"><textarea id="s-r" required className="input min-h-28" value={s.resena} onChange={set('resena')} /></Field>
        <Field label="Galería (URL | descripción)" id="s-g"><textarea id="s-g" className="input min-h-16" value={s.galeria} onChange={set('galeria')} /></Field>
        <Field label="Testimonio" id="s-te"><textarea id="s-te" className="input" value={s.testimonio} onChange={set('testimonio')} /></Field>
        <Field label="URL Video YouTube" id="s-v"><input id="s-v" type="url" className="input" value={s.videoUrl} onChange={set('videoUrl')} placeholder="https://www.youtube.com/watch?v=…" /></Field>
        {err && <p role="alert" className="text-sm font-semibold text-red-700">{err}</p>}
        <div className="flex justify-end gap-2 pt-2"><button type="button" className="btn-ghost" onClick={onClose}>Cancelar</button><button className="btn-primary" type="submit">Guardar sitio</button></div>
      </form>
    </Modal>
  );
}

// -------------------------------------------------------------
// FORMULARIO: ARTICULO
// -------------------------------------------------------------
function ArticuloForm({ inicial, existe, onSave, onClose }: { inicial: Articulo; existe: boolean; onSave: (a: Articulo) => void; onClose: () => void }) {
  const [a, setA] = useState(inicial);
  const set = (k: keyof Articulo) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setA({ ...a, [k]: e.target.value });
  return (
    <Modal title={existe ? 'Editar artículo' : 'Nuevo artículo'} onClose={onClose}>
      <form onSubmit={(e) => { e.preventDefault(); onSave(a); }} className="space-y-3">
        <Field label="Título" id="a-t"><input id="a-t" required className="input" value={a.titulo} onChange={set('titulo')} /></Field>
        <Field label="Resumen" id="a-r"><input id="a-r" required className="input" value={a.resumen} onChange={set('resumen')} /></Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Categoría" id="a-c">
            <select id="a-c" className="input" value={a.categoria} onChange={set('categoria')}>
              {['Noticia', 'Crónica', 'Testimonio', 'Archivo'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Autor" id="a-a"><input id="a-a" className="input" value={a.autor} onChange={set('autor')} /></Field>
          <Field label="Fecha" id="a-f"><input id="a-f" type="date" required className="input" value={a.fecha} onChange={set('fecha')} /></Field>
        </div>
        <Field label="URL Imagen de portada (Unsplash u otra)" id="a-img"><input id="a-img" className="input" value={a.imagen || ''} onChange={set('imagen')} placeholder="https://..." /></Field>
        <Field label="Contenido completo" id="a-co"><textarea id="a-co" required className="input min-h-40" value={a.contenido} onChange={set('contenido')} /></Field>
        <div className="flex justify-end gap-2 pt-2"><button type="button" className="btn-ghost" onClick={onClose}>Cancelar</button><button className="btn-primary" type="submit">Guardar</button></div>
      </form>
    </Modal>
  );
}

// -------------------------------------------------------------
// FORMULARIO: SUEÑOS & OFICIOS
// -------------------------------------------------------------
function SuenoForm({ inicial, existe, onSave, onClose }: { inicial: HistoriaSueno; existe: boolean; onSave: (s: HistoriaSueno) => void; onClose: () => void }) {
  const [s, setS] = useState({
    ...inicial,
    galeriaTxt: inicial.galeria.map((g) => `${g.url} | ${g.caption}`).join('\n'),
  });
  const set = (k: keyof typeof s) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setS({ ...s, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const gal = s.galeriaTxt.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
      const idx = l.indexOf('|');
      return idx < 0 ? { url: l, caption: '' } : { url: l.slice(0, idx).trim(), caption: l.slice(idx + 1).trim() };
    });
    onSave({
      ...s,
      galeria: gal,
    });
  };

  return (
    <Modal title={existe ? 'Editar historia de vida o fiesta' : 'Nueva historia en «Los Sueños que Construían»'} onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <Field label="Título de la historia o fiesta" id="sn-t"><input id="sn-t" required className="input" value={s.titulo} onChange={set('titulo')} /></Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Categoría" id="sn-cat">
            <select id="sn-cat" className="input" value={s.categoria} onChange={(e) => setS({ ...s, categoria: e.target.value as CategoriaSueno })}>
              {['Oficios y Vida Cotidiana', 'Proyectos Colectivos y Asentamientos', 'Fiestas de la Solidaridad y Encuentro'].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Comuna" id="sn-com"><input id="sn-com" required className="input" value={s.comuna} onChange={set('comuna')} /></Field>
          <Field label="Territorio" id="sn-tt">
            <select id="sn-tt" className="input" value={s.territorioTipo} onChange={(e) => setS({ ...s, territorioTipo: e.target.value as 'Rural' | 'Urbano' })}>
              <option value="Urbano">Urbano</option>
              <option value="Rural">Rural</option>
            </select>
          </Field>
        </div>
        <Field label="Año o período" id="sn-a"><input id="sn-a" required className="input" value={s.anio} onChange={set('anio')} placeholder="Ej: 1970–1973" /></Field>
        <Field label="¿Quiénes eran?" id="sn-qe"><textarea id="sn-qe" required className="input min-h-20" value={s.quienesEran} onChange={set('quienesEran')} /></Field>
        <Field label="¿Qué soñaban?" id="sn-qs"><textarea id="sn-qs" required className="input min-h-20" value={s.queSonaban} onChange={set('queSonaban')} /></Field>
        <Field label="¿Cómo celebraban?" id="sn-cc"><textarea id="sn-cc" required className="input min-h-20" value={s.comoCelebraban} onChange={set('comoCelebraban')} /></Field>
        <Field label="Elemento sonoro o culinario («La comida compartida / la música»)" id="sn-ec">
          <input id="sn-ec" required className="input" value={s.elementoSonoroCulinario} onChange={set('elementoSonoroCulinario')} />
        </Field>
        <Field label="Galería de fotos (URL | leyenda por línea)" id="sn-g">
          <textarea id="sn-g" className="input min-h-16" value={s.galeriaTxt} onChange={set('galeriaTxt')} placeholder="https://... | Cancha de fútbol comunitaria" />
        </Field>
        <div className="flex justify-end gap-2 pt-2"><button type="button" className="btn-ghost" onClick={onClose}>Cancelar</button><button className="btn-primary" type="submit">Guardar historia</button></div>
      </form>
    </Modal>
  );
}

// -------------------------------------------------------------
// FORMULARIO: ARTE & CULTURA
// -------------------------------------------------------------
function ArteForm({ inicial, existe, onSave, onClose }: { inicial: ObraArte; existe: boolean; onSave: (o: ObraArte) => void; onClose: () => void }) {
  const [o, setO] = useState(inicial);
  const set = (k: keyof ObraArte) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setO({ ...o, [k]: e.target.value });

  return (
    <Modal title={existe ? 'Editar obra de arte' : 'Nueva obra en «Arte, Memoria y Derechos»'} onClose={onClose}>
      <form onSubmit={(e) => { e.preventDefault(); onSave(o); }} className="space-y-3">
        <Field label="Título de la obra o verso" id="ar-t"><input id="ar-t" required className="input" value={o.titulo} onChange={set('titulo')} /></Field>
        <div className="grid grid-cols-3 gap-3">
          <Field label="Categoría" id="ar-c">
            <select id="ar-c" className="input" value={o.categoria} onChange={(e) => setO({ ...o, categoria: e.target.value as CategoriaArte })}>
              {['Murales y Gráfica Barrial', 'Poesía, Payas y Lira Popular', 'Música y Cultura Urbana'].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>
          <Field label="Autor o Colectivo" id="ar-au"><input id="ar-au" required className="input" value={o.autorColectivo} onChange={set('autorColectivo')} /></Field>
          <Field label="Comuna / Año" id="ar-co"><input id="ar-co" required className="input" value={o.comuna} onChange={set('comuna')} placeholder="Talca, 2021" /></Field>
        </div>
        <Field label="Descripción de la obra" id="ar-d"><textarea id="ar-d" required className="input min-h-20" value={o.descripcion} onChange={set('descripcion')} /></Field>
        <Field label="Letra, décimas o versos (opcional)" id="ar-tx"><textarea id="ar-tx" className="input min-h-24 font-serif" value={o.contenidoTexto || ''} onChange={set('contenidoTexto')} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="URL Imagen de la obra / mural" id="ar-im"><input id="ar-im" className="input" value={o.imagenUrl || ''} onChange={set('imagenUrl')} placeholder="https://..." /></Field>
          <Field label="URL Video YouTube" id="ar-vi"><input id="ar-vi" className="input" value={o.videoUrl || ''} onChange={set('videoUrl')} placeholder="https://www.youtube.com/..." /></Field>
        </div>
        <Field label="URL Audio (canción o paisaje sonoro)" id="ar-au"><input id="ar-au" className="input" value={o.audioUrl || ''} onChange={set('audioUrl')} placeholder="https://... o archivo mp3" /></Field>
        <div className="flex justify-end gap-2 pt-2"><button type="button" className="btn-ghost" onClick={onClose}>Cancelar</button><button className="btn-primary" type="submit">Guardar obra</button></div>
      </form>
    </Modal>
  );
}

// -------------------------------------------------------------
// FORMULARIO: TALLERES
// -------------------------------------------------------------
function TallerForm({ inicial, existe, onSave, onClose }: { inicial: TallerComunitario; existe: boolean; onSave: (t: TallerComunitario) => void; onClose: () => void }) {
  const [t, setT] = useState({
    ...inicial,
    materialesTxt: inicial.materiales.join(', '),
    consejosTxt: inicial.consejosPedagogicos.join('\n'),
  });
  const set = (k: keyof typeof t) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setT({ ...t, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...t,
      materiales: t.materialesTxt.split(',').map((x) => x.trim()).filter(Boolean),
      consejosPedagogicos: t.consejosTxt.split('\n').map((x) => x.trim()).filter(Boolean),
    });
  };

  return (
    <Modal title={existe ? 'Editar taller pedagógico' : 'Nueva guía metodológica comunitaria'} onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        <Field label="Título del taller" id="tl-t"><input id="tl-t" required className="input" value={t.titulo} onChange={set('titulo')} /></Field>
        <Field label="Subtítulo o descripción sintética" id="tl-s"><input id="tl-s" required className="input" value={t.subtitulo} onChange={set('subtitulo')} /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nivel pedagógico recomendado" id="tl-n">
            <select id="tl-n" className="input" value={t.nivel} onChange={(e) => setT({ ...t, nivel: e.target.value as NivelTaller })}>
              {['Escolar', 'Familiar', 'Jóvenes', 'Vecinal', 'Comunitario / Adulto Mayor'].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>
          <Field label="Duración estimada" id="tl-d"><input id="tl-d" required className="input" value={t.duracion} onChange={set('duracion')} placeholder="Ej: 2 sesiones de 60 min" /></Field>
        </div>
        <Field label="Objetivo pedagógico comunitario" id="tl-o"><textarea id="tl-o" required className="input min-h-20" value={t.objetivo} onChange={set('objetivo')} /></Field>
        <Field label="Materiales (separados por coma)" id="tl-m"><input id="tl-m" required className="input" value={t.materialesTxt} onChange={set('materialesTxt')} /></Field>
        <Field label="Recomendaciones éticas y pedagógicas (una por línea)" id="tl-c"><textarea id="tl-c" className="input min-h-20" value={t.consejosTxt} onChange={set('consejosTxt')} /></Field>
        <div className="flex justify-end gap-2 pt-2"><button type="button" className="btn-ghost" onClick={onClose}>Cancelar</button><button className="btn-primary" type="submit">Guardar taller</button></div>
      </form>
    </Modal>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return <div><label className="label" htmlFor={id}>{label}</label>{children}</div>;
}
