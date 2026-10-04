import { useMemo, useState } from 'react';
import { ArrowLeft, MessageSquare, Newspaper, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { Articulo, Comentario } from '../types';
import { fmtFecha, uid } from '../lib/meta';

interface Props {
  articulos: Articulo[];
  comentarios: Comentario[];
  setComentarios: React.Dispatch<React.SetStateAction<Comentario[]>>;
}

export default function Blog({ articulos, comentarios, setComentarios }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  // Clasificación: Noticias a la izquierda, Crónicas y Archivo/Testimonios a la derecha
  const { noticias, cronicas } = useMemo(() => {
    const sorted = [...articulos].sort((a, b) => b.fecha.localeCompare(a.fecha));
    const n = sorted.filter((a) => a.categoria === 'Noticia');
    const c = sorted.filter((a) => a.categoria !== 'Noticia');
    return { noticias: n, cronicas: c };
  }, [articulos]);

  const abierto = articulos.find((a) => a.id === openId);

  if (abierto) {
    return <Lectura articulo={abierto} onBack={() => setOpenId(null)} comentarios={comentarios} setComentarios={setComentarios} />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 border-b border-zinc-800 pb-5">
        <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Noticias & Crónicas
        </h1>
        <p className="mt-2 text-zinc-400">
          Archivo vivo de memoria territorial: a la izquierda, el acontecer y notas informativas; a la derecha, crónicas de largo aliento, testimonios y rescate histórico.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Columna Izquierda: NOTICIAS */}
        <section aria-labelledby="noticias-heading" className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-terra-500 pb-2">
            <Newspaper className="h-6 w-6 text-terra-500" />
            <h2 id="noticias-heading" className="font-serif text-2xl font-semibold text-zinc-50">
              Noticias
            </h2>
            <span className="ml-auto rounded-full bg-terra-500/10 px-2.5 py-0.5 text-xs font-semibold text-terra-500">
              {noticias.length} notas
            </span>
          </div>

          <div className="space-y-5">
            {noticias.map((item) => (
              <ArticleCard
                key={item.id}
                articulo={item}
                comentariosCount={comentarios.filter((c) => c.articuloId === item.id && c.estado === 'aprobado').length}
                onSelect={() => setOpenId(item.id)}
              />
            ))}
            {noticias.length === 0 && (
              <p className="py-8 text-center text-sm text-zinc-500">No hay noticias registradas por el momento.</p>
            )}
          </div>
        </section>

        {/* Columna Derecha: CRÓNICAS */}
        <section aria-labelledby="cronicas-heading" className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-ocre-500 pb-2">
            <BookOpen className="h-6 w-6 text-ocre-500" />
            <h2 id="cronicas-heading" className="font-serif text-2xl font-semibold text-zinc-50">
              Crónicas & Testimonios
            </h2>
            <span className="ml-auto rounded-full bg-ocre-500/10 px-2.5 py-0.5 text-xs font-semibold text-ocre-500">
              {cronicas.length} relatos
            </span>
          </div>

          <div className="space-y-5">
            {cronicas.map((item) => (
              <ArticleCard
                key={item.id}
                articulo={item}
                comentariosCount={comentarios.filter((c) => c.articuloId === item.id && c.estado === 'aprobado').length}
                onSelect={() => setOpenId(item.id)}
              />
            ))}
            {cronicas.length === 0 && (
              <p className="py-8 text-center text-sm text-zinc-500">No hay crónicas registradas por el momento.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ArticleCard({ articulo, comentariosCount, onSelect }: { articulo: Articulo; comentariosCount: number; onSelect: () => void }) {
  return (
    <article className="card group overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-terra-500 hover:shadow-md">
      {articulo.imagen && (
        <div className="relative h-48 w-full overflow-hidden bg-stone-200">
          <img
            src={articulo.imagen}
            alt={articulo.titulo}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
            {articulo.categoria}
          </div>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <Calendar size={13} />
            {fmtFecha(articulo.fecha)}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <User size={13} />
            {articulo.autor}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-zinc-50 group-hover:text-terra-500">
          <button className="text-left" onClick={onSelect}>
            {articulo.titulo}
          </button>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {articulo.resumen}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3 text-xs">
          <button onClick={onSelect} className="font-semibold text-terra-500 hover:underline">
            Leer artículo completo →
          </button>
          <span className="inline-flex items-center gap-1 text-zinc-400">
            <MessageSquare size={13} />
            {comentariosCount} {comentariosCount === 1 ? 'comentario' : 'comentarios'}
          </span>
        </div>
      </div>
    </article>
  );
}

function Lectura({
  articulo: a,
  onBack,
  comentarios,
  setComentarios,
}: { articulo: Articulo; onBack: () => void } & Pick<Props, 'comentarios' | 'setComentarios'>) {
  const [autor, setAutor] = useState('');
  const [texto, setTexto] = useState('');
  const [enviado, setEnviado] = useState(false);
  const aprobados = comentarios.filter((c) => c.articuloId === a.id && c.estado === 'aprobado');

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setComentarios((cs) => [
      ...cs,
      {
        id: uid('c'),
        articuloId: a.id,
        autor: autor.trim() || 'Anónimo',
        texto: texto.trim(),
        fecha: new Date().toISOString(),
        estado: 'pendiente',
      },
    ]);
    setTexto('');
    setAutor('');
    setEnviado(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <button className="btn-ghost mb-6" onClick={onBack}>
        <ArrowLeft size={16} /> Volver a Noticias & Crónicas
      </button>

      <article>
        <div className="flex flex-wrap items-center gap-2 text-sm text-ocre-400">
          <span className="rounded bg-zinc-800 px-2 py-0.5 font-semibold text-zinc-200">{a.categoria}</span>
          <span>•</span>
          <span>{fmtFecha(a.fecha)}</span>
          <span>•</span>
          <span>Por {a.autor}</span>
        </div>

        <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
          {a.titulo}
        </h1>

        <p className="mt-4 font-serif text-xl italic leading-relaxed text-zinc-400">
          {a.resumen}
        </p>

        {a.imagen && (
          <figure className="my-6 overflow-hidden rounded-xl border border-zinc-700 bg-stone-100 shadow-sm">
            <img src={a.imagen} alt={a.titulo} className="max-h-[460px] w-full object-cover" />
            {a.imagenCredito && (
              <figcaption className="p-2 text-center text-xs text-zinc-400">
                Foto: {a.imagenCredito} (Unsplash)
              </figcaption>
            )}
          </figure>
        )}

        <div className="mt-8 space-y-6 font-serif text-lg leading-8 text-zinc-300">
          {a.contenido.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <section className="mt-14 border-t border-zinc-800 pt-8" aria-labelledby="com-h">
        <h2 id="com-h" className="font-serif text-2xl font-bold text-zinc-50">
          Comentarios ciudadanos ({aprobados.length})
        </h2>
        <ul className="mt-5 space-y-3">
          {aprobados.map((c) => (
            <li key={c.id} className="card p-4">
              <p className="text-sm font-semibold text-terra-500">
                {c.autor} <span className="font-normal text-zinc-500">· {fmtFecha(c.fecha)}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">{c.texto}</p>
            </li>
          ))}
          {aprobados.length === 0 && (
            <li className="card border-dashed p-6 text-center text-sm text-zinc-500">
              Aún no hay comentarios aprobados para esta publicación. ¡Sé el primero en aportar una reflexión!
            </li>
          )}
        </ul>

        <form onSubmit={enviar} className="card mt-8 space-y-4 p-5">
          <h3 className="font-serif text-lg font-semibold text-zinc-50">Deja tu comentario o reflexión</h3>
          <div>
            <label className="label" htmlFor="c-autor">Nombre o alias (opcional)</label>
            <input
              id="c-autor"
              className="input"
              value={autor}
              maxLength={60}
              placeholder="Ej: Vecina de Talca"
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
          <div>
            <label className="label" htmlFor="c-texto">Comentario</label>
            <textarea
              id="c-texto"
              className="input min-h-28"
              required
              maxLength={800}
              placeholder="Escribe tu reflexión, memoria o aporte sobre este tema..."
              value={texto}
              onChange={(e) => {
                setTexto(e.target.value);
                setEnviado(false);
              }}
            />
          </div>
          <button className="btn-primary" type="submit">
            Enviar comentario para moderación
          </button>
          {enviado && (
            <p role="status" className="rounded bg-amber-50 p-2 text-sm text-amber-900 border border-amber-200">
              Gracias por tu aporte. Tu comentario ha sido recibido y pasará a revisión del equipo antes de ser publicado.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
