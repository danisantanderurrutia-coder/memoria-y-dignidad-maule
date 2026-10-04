import { ArrowRight, Library, Newspaper, HandHeart, Landmark, Sparkles, Palette, BookOpenCheck } from 'lucide-react';
import { EPOCAS } from '../lib/meta';

type Dest = 'museo' | 'mapa' | 'suenos' | 'arte' | 'talleres' | 'biblioteca' | 'blog' | 'aporte';

export default function Landing({ go }: { go: (v: Dest) => void }) {
  const logoUrl = `${import.meta.env.BASE_URL}logo.svg`;

  return (
    <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center px-4 py-12 text-center">
      <img
        src={logoUrl}
        alt="Logo de Memoria y Dignidad Maule: sol terracota sobre la cordillera"
        width={128}
        height={128}
        className="fade-in h-28 w-28 drop-shadow-md sm:h-32 sm:w-32"
      />
      <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-zinc-50 sm:text-5xl">
        Memoria y Dignidad Maule
      </h1>
      <p className="mt-1 font-serif text-xl italic text-ocre-500">Museo Digital & Archivo Comunitario</p>
      <p className="mt-6 max-w-3xl font-serif text-lg leading-8 text-zinc-300">
        Un espacio abierto para recordar, investigar y visibilizar la memoria histórica, los derechos humanos, los oficios populares y las luchas sociales de Talca, Curicó, Linares y Cauquenes.
      </p>

      {/* Botones de acción directa */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button className="btn-primary px-6 py-3 text-base shadow-sm" onClick={() => go('mapa')}>
          Explorar el Mapa Interactivo <ArrowRight size={18} />
        </button>
        <button className="btn-ghost px-6 py-3 text-base shadow-sm" onClick={() => go('suenos')}>
          <Sparkles size={18} className="text-terra-500" /> Los Sueños que Construían
        </button>
        <button className="btn-ghost px-6 py-3 text-base shadow-sm" onClick={() => go('arte')}>
          <Palette size={18} className="text-ocre-600" /> Arte y Derechos
        </button>
        <button className="btn-ghost px-6 py-3 text-base shadow-sm" onClick={() => go('talleres')}>
          <BookOpenCheck size={18} className="text-teal-700" /> Caja de Herramientas
        </button>
      </div>

      {/* Períodos Históricos */}
      <ul className="mt-14 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Períodos históricos">
        {(Object.keys(EPOCAS) as (keyof typeof EPOCAS)[]).map((k) => (
          <li key={k} className="card border-t-4 p-4 text-left shadow-sm" style={{ borderTopColor: EPOCAS[k].color }}>
            <p className="text-xs font-semibold" style={{ color: EPOCAS[k].color }}>{EPOCAS[k].rango}</p>
            <p className="mt-1 font-serif text-lg font-bold leading-snug text-zinc-50">{EPOCAS[k].label}</p>
          </li>
        ))}
      </ul>

      {/* Tarjetas de Módulos */}
      <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button onClick={() => go('suenos')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-terra-500 hover:shadow-md">
          <Sparkles className="mt-1 h-6 w-6 shrink-0 text-terra-500 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Los Sueños que Construían</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Oficios de antaño, asentamientos de la Reforma Agraria, peñas parroquiales y la alegría compartida antes del silencio.
            </span>
          </span>
        </button>

        <button onClick={() => go('arte')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-ocre-500 hover:shadow-md">
          <Palette className="mt-1 h-6 w-6 shrink-0 text-ocre-600 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Arte y Derechos Universales</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Murales barriales georreferenciados, décimas campesinas y rap maulino por la dignidad de las comunidades.
            </span>
          </span>
        </button>

        <button onClick={() => go('talleres')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-teal-600 hover:shadow-md">
          <BookOpenCheck className="mt-1 h-6 w-6 shrink-0 text-teal-700 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Talleres Comunitarios</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Guías metodológicas descargables e imprimibles: Cartografía familiar («El mapa de tus abuelos»), arpilleras y notas de voz.
            </span>
          </span>
        </button>

        <button onClick={() => go('museo')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-terra-500 hover:shadow-md">
          <Landmark className="mt-1 h-6 w-6 shrink-0 text-terra-500 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Museo Digital</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Galería interactiva con fotografías de archivo, momentos, prensa histórica y relatos narrados con voz.
            </span>
          </span>
        </button>

        <button onClick={() => go('blog')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-ocre-500 hover:shadow-md">
          <Newspaper className="mt-1 h-6 w-6 shrink-0 text-ocre-500 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Noticias & Crónicas</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Doble columna: noticias y contingencia regional a la izquierda, crónicas y testimonios en profundidad a la derecha.
            </span>
          </span>
        </button>

        <button onClick={() => go('biblioteca')} className="card group flex items-start gap-3.5 p-5 text-left transition hover:border-teal-600 hover:shadow-md">
          <Library className="mt-1 h-6 w-6 shrink-0 text-teal-700 group-hover:scale-110 transition-transform" />
          <span>
            <b className="block font-serif text-lg text-zinc-50 group-hover:text-terra-500">Biblioteca Digital</b>
            <span className="mt-1 block text-sm text-zinc-400">
              Informes oficiales Rettig, Valech, expedientes judiciales y documentos históricos para descarga libre.
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
