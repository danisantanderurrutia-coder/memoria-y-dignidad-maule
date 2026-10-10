import { useEffect, useState } from 'react';
import {
  Map, Library as LibIcon, Newspaper, HandHeart, ShieldCheck, Menu, X, LogOut, Lock,
  Sparkles, Palette, BookOpenCheck, Landmark, Globe
} from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useLanguage } from './context/LanguageContext';
import { SEED_APORTES, SEED_ARTICULOS, SEED_COMENTARIOS, SEED_DOCUMENTOS, SEED_SITIOS } from './data/seed';
import { SEED_VERSION, SEED_SITIOS_V2, SEED_ARTICULOS_V2, SEED_DOCUMENTOS_V2 } from './data/seedV2';
import { SEED_MUSEO } from './data/seedMuseo';
import { SEED_SUENOS, SEED_ARTE, SEED_TALLERES } from './data/seedComunitario';
import { DIGNIDAD_SITIOS, DIGNIDAD_MUSEO, DIGNIDAD_DOCUMENTOS, DIGNIDAD_ARTICULOS } from './data/seedDignidad';
import MapPage from './components/MapPage';
import Library from './components/Library';
import Blog from './components/Blog';
import Contribute from './components/Contribute';
import Admin from './components/Admin';
import Modal from './components/Modal';
import Landing from './components/Landing';
import Museo from './components/Museo';
import Suenos from './components/Suenos';
import Arte from './components/Arte';
import Talleres from './components/Talleres';
import ColoniaDignidadExhibition from './components/ColoniaDignidadExhibition';

export type View =
  | 'inicio'
  | 'mapa'
  | 'suenos'
  | 'arte'
  | 'talleres'
  | 'museo'
  | 'exposicion'
  | 'biblioteca'
  | 'blog'
  | 'aporte'
  | 'admin';

const ADMIN_PIN = '1973';


export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [view, setView] = useState<View>('inicio');
  const [selectedMapSiteId, setSelectedMapSiteId] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [isAdmin, setIsAdmin] = useLocalStorage('mdm:admin', false);
  const [login, setLogin] = useState(false);
  const [pin, setPin] = useState('');
  const [pinErr, setPinErr] = useState(false);

  const navItems = [
    { id: 'mapa', label: t.navMapa, icon: Map },
    { id: 'exposicion', label: t.navExposicion, icon: Globe },
    { id: 'museo', label: t.navMuseo, icon: Landmark },
    { id: 'suenos', label: t.navSuenos, icon: Sparkles },
    { id: 'arte', label: t.navArte, icon: Palette },
    { id: 'talleres', label: t.navTalleres, icon: BookOpenCheck },
    { id: 'biblioteca', label: t.navBiblioteca, icon: LibIcon },
    { id: 'blog', label: t.navBlog, icon: Newspaper },
    { id: 'aporte', label: t.navAporte, icon: HandHeart },
  ] as const;

  // Estados persistentes con localStorage
  const [sitios, setSitios] = useLocalStorage('mdm:sitios', [...SEED_SITIOS, ...SEED_SITIOS_V2, ...DIGNIDAD_SITIOS]);
  const [articulos, setArticulos] = useLocalStorage('mdm:articulos', [...SEED_ARTICULOS, ...SEED_ARTICULOS_V2, ...DIGNIDAD_ARTICULOS]);
  const [comentarios, setComentarios] = useLocalStorage('mdm:comentarios', SEED_COMENTARIOS);
  const [aportes, setAportes] = useLocalStorage('mdm:aportes', SEED_APORTES);
  const [documentos, setDocumentos] = useLocalStorage('mdm:documentos', [...SEED_DOCUMENTOS, ...SEED_DOCUMENTOS_V2, ...DIGNIDAD_DOCUMENTOS]);
  const [registrosMuseo, setRegistrosMuseo] = useLocalStorage('mdm:museo', [...SEED_MUSEO, ...DIGNIDAD_MUSEO]);

  // Nuevos 3 módulos
  const [suenos, setSuenos] = useLocalStorage('mdm:suenos', SEED_SUENOS);
  const [arte, setArte] = useLocalStorage('mdm:arte', SEED_ARTE);
  const [talleres, setTalleres] = useLocalStorage('mdm:talleres', SEED_TALLERES);

  const [seedVer, setSeedVer] = useLocalStorage('mdm:seedver_v7', 0);

  // Sincronización de migraciones en localStorage
  useEffect(() => {
    if (seedVer >= 7) return;
    const merge = <T extends { id: string }>(cur: T[], extra: T[]) => [
      ...cur,
      ...extra.filter((e) => !cur.some((c) => c.id === e.id)),
    ];
    setSitios((c) => merge(c, [...SEED_SITIOS_V2, ...DIGNIDAD_SITIOS]));
    setArticulos((c) => merge(c, [...SEED_ARTICULOS_V2, ...DIGNIDAD_ARTICULOS]));
    setDocumentos((c) => merge(c, [...SEED_DOCUMENTOS_V2, ...DIGNIDAD_DOCUMENTOS]));
    setRegistrosMuseo((c) => merge(c, DIGNIDAD_MUSEO));
    setSuenos(() => SEED_SUENOS);
    setArte(() => SEED_ARTE);
    setTalleres((c) => merge(c, SEED_TALLERES));
    setSeedVer(7);
  }, [seedVer, setSitios, setArticulos, setDocumentos, setRegistrosMuseo, setSuenos, setArte, setTalleres, setSeedVer]);

  const go = (v: View) => {
    setView(v);
    setMenu(false);
  };

  const handleIrAlMapa = (sitioId?: string) => {
    if (sitioId) {
      setSelectedMapSiteId(sitioId);
    }
    go('mapa');
  };

  const tryLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAdmin(true);
      setLogin(false);
      setPin('');
      setPinErr(false);
      go('admin');
    } else {
      setPinErr(true);
    }
  };

  const logout = () => {
    setIsAdmin(false);
    go('inicio');
  };

  const resetAll = () => {
    setSitios([...SEED_SITIOS, ...SEED_SITIOS_V2]);
    setArticulos([...SEED_ARTICULOS, ...SEED_ARTICULOS_V2]);
    setDocumentos([...SEED_DOCUMENTOS, ...SEED_DOCUMENTOS_V2]);
    setComentarios(SEED_COMENTARIOS);
    setAportes(SEED_APORTES);
    setRegistrosMuseo(SEED_MUSEO);
    setSuenos(SEED_SUENOS);
    setArte(SEED_ARTE);
    setTalleres(SEED_TALLERES);
  };

  const current = view === 'admin' && !isAdmin ? 'inicio' : view;

  return (
    <div className="flex h-screen flex-col bg-zinc-950 text-zinc-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[3000] focus:bg-ocre-400 focus:p-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* Header Institucional en Dos Filas */}
      <header className="z-[1500] border-b border-zinc-800 bg-white/95 backdrop-blur-md shadow-sm">
        {/* Fila 1: Identidad con Logo Más Grande y Acceso Directo de Candado */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-zinc-800/60">
          <button
            onClick={() => go('inicio')}
            className="group flex items-center gap-3.5 text-left transition hover:opacity-90"
            aria-label="Ir al inicio de Memoria y Dignidad Maule"
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="Logo Memoria y Dignidad Maule"
              className="h-12 w-12 sm:h-14 sm:w-14 drop-shadow-sm transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold leading-tight text-zinc-50 group-hover:text-terra-600 transition-colors">
                {t.siteTitle}
              </span>
              <span className="block text-xs sm:text-sm font-medium text-terra-500">
                {t.siteSubtitle}
              </span>
            </div>
          </button>

          {/* Selector de Idiomas + Acciones de administración */}
          <div className="flex items-center gap-2">
            {/* Selector de idioma */}
            <div className="flex items-center rounded-lg border border-zinc-700 bg-stone-100/90 p-0.5 text-xs font-semibold shadow-inner" role="group" aria-label="Seleccionar idioma">
              <span className="hidden sm:flex items-center gap-1 px-1.5 text-zinc-400">
                <Globe size={13} />
              </span>
              <button
                onClick={() => setLang('es')}
                aria-pressed={lang === 'es'}
                title="Español"
                className={`rounded px-2 py-1 transition ${
                  lang === 'es' ? 'bg-terra-500 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                title="English"
                className={`rounded px-2 py-1 transition ${
                  lang === 'en' ? 'bg-terra-500 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('de')}
                aria-pressed={lang === 'de'}
                title="Deutsch"
                className={`rounded px-2 py-1 transition ${
                  lang === 'de' ? 'bg-terra-500 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                DE
              </button>
            </div>

            {isAdmin ? (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => go('admin')}
                  aria-current={current === 'admin' ? 'page' : undefined}
                  className={`btn py-1.5 px-3 text-xs font-semibold ${
                    current === 'admin' ? 'bg-terra-500 text-white' : 'btn-ghost'
                  }`}
                  title="Ir al panel de administración"
                >
                  <ShieldCheck size={16} /> <span className="hidden sm:inline">{t.panelAdmin}</span>
                </button>
                <button
                  className="btn-danger p-2 text-xs"
                  onClick={logout}
                  title="Salir de la sesión de administración"
                  aria-label="Cerrar sesión de administración"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                className="btn-ghost p-2 text-zinc-400 hover:text-terra-600 hover:border-terra-500 rounded-full"
                onClick={() => setLogin(true)}
                title="Acceso de administración"
                aria-label="Acceso administrador"
              >
                <Lock size={18} />
              </button>
            )}

            {/* Botón Menú Móvil */}
            <button
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 md:hidden"
              aria-label="Abrir menú"
              aria-expanded={menu}
              onClick={() => setMenu((m) => !m)}
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Fila 2: Barra de Navegación Espaciosa */}
        <div className="hidden md:flex items-center justify-center px-4 py-2 bg-stone-50/70">
          <nav aria-label="Navegación principal" className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {navItems.map(({ id, label, icon: I }) => (
              <button
                key={id}
                onClick={() => go(id)}
                aria-current={current === id ? 'page' : undefined}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                  current === id
                    ? 'bg-terra-500 font-semibold text-white shadow-sm'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50'
                }`}
              >
                <I size={16} /> {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Drawer Móvil Desplegable */}
        {menu && (
          <nav aria-label="Menú móvil" className="fade-in space-y-1.5 border-t border-zinc-800 bg-white p-4 md:hidden max-h-[80vh] overflow-y-auto">
            {navItems.map(({ id, label, icon: I }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  current === id ? 'bg-terra-500 font-bold text-white shadow-sm' : 'text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                <I size={18} /> {label}
              </button>
            ))}

            {isAdmin && (
              <button
                onClick={() => go('admin')}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-terra-600 bg-amber-50 mt-2"
              >
                <ShieldCheck size={18} /> Panel de administración
              </button>
            )}
          </nav>
        )}
      </header>

      {/* Contenedor de Vistas */}
      <main id="main" className="min-h-0 flex-1 overflow-y-auto">
        {current === 'inicio' && <Landing go={go} />}
        {current === 'mapa' && (
          <MapPage sitios={sitios} initialSelectedId={selectedMapSiteId} />
        )}
        {current === 'exposicion' && (
          <ColoniaDignidadExhibition onIrAlSitioEnMapa={handleIrAlMapa} />
        )}
        {current === 'suenos' && <Suenos historias={suenos} />}
        {current === 'arte' && <Arte obras={arte} onIrAlMapa={handleIrAlMapa} />}
        {current === 'talleres' && <Talleres talleres={talleres} />}
        {current === 'museo' && <Museo registros={registrosMuseo} />}
        {current === 'biblioteca' && <Library docs={documentos} />}
        {current === 'blog' && (
          <Blog articulos={articulos} comentarios={comentarios} setComentarios={setComentarios} />
        )}
        {current === 'aporte' && <Contribute setAportes={setAportes} />}
        {current === 'admin' && (
          <Admin
            sitios={sitios}
            setSitios={setSitios}
            articulos={articulos}
            setArticulos={setArticulos}
            comentarios={comentarios}
            setComentarios={setComentarios}
            aportes={aportes}
            setAportes={setAportes}
            suenos={suenos}
            setSuenos={setSuenos}
            arte={arte}
            setArte={setArte}
            talleres={talleres}
            setTalleres={setTalleres}
            registrosMuseo={registrosMuseo}
            setRegistrosMuseo={setRegistrosMuseo}
            onResetAll={resetAll}
          />
        )}
      </main>

      {/* Modal Acceso Admin */}
      {login && (
        <Modal
          title="Acceso de administración"
          onClose={() => {
            setLogin(false);
            setPin('');
            setPinErr(false);
          }}
        >
          <form onSubmit={tryLogin} className="space-y-4">
            <div>
              <label className="label" htmlFor="pin">
                PIN de administrador
              </label>
              <input
                id="pin"
                type="password"
                inputMode="numeric"
                autoFocus
                className="input"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinErr(false);
                }}
                aria-invalid={pinErr}
                aria-describedby="pin-help"
              />
              <p
                id="pin-help"
                className={`mt-1 text-xs ${pinErr ? 'font-medium text-red-700' : 'text-zinc-500'}`}
                role={pinErr ? 'alert' : undefined}
              >
                {pinErr ? 'PIN incorrecto. Intenta nuevamente.' : 'PIN de ejemplo para la demo: 1973'}
              </p>
            </div>
            <button className="btn-primary w-full" type="submit">
              Ingresar al panel
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
