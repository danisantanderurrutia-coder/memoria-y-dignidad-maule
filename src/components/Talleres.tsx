import { useState } from 'react';
import { BookOpenCheck, Clock, Users, Wrench, Printer, CheckCircle2, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { TallerComunitario } from '../types';
import Modal from './Modal';

export default function Talleres({ talleres }: { talleres: TallerComunitario[] }) {
  const [activeTaller, setActiveTaller] = useState<TallerComunitario | null>(null);

  const imprimirGuia = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Encabezado */}
      <header className="mb-8 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
          <BookOpenCheck size={16} /> Pedagogía de la Memoria & Caja de Herramientas
        </div>
        <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          Talleres y Metodologías Comunitarias
        </h1>
        <p className="mt-3 max-w-3xl font-serif text-base leading-relaxed text-zinc-400">
          Orientado a docentes, profesoras rurales, asambleas de barrio, clubes de adulto mayor y colectivos de jóvenes.
          Metodologías paso a paso, listas para llevar a la práctica, fotocopiar o descargar e imprimir con materiales sencillos.
        </p>
      </header>

      {/* Grid de Fichas de Talleres */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {talleres.map((taller) => (
          <article
            key={taller.id}
            className="card group flex flex-col justify-between p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-600 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="rounded-full bg-teal-100 px-2.5 py-0.5 font-semibold text-teal-800">
                  {taller.nivel}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-zinc-400">
                  <Clock size={13} /> {taller.duracion}
                </span>
              </div>

              <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-zinc-50 group-hover:text-teal-700">
                {taller.titulo}
              </h2>

              <p className="mt-2 font-serif text-sm leading-relaxed text-zinc-400">
                {taller.subtitulo}
              </p>

              {/* Materiales destacados */}
              <div className="mt-4 rounded-md border border-zinc-800 bg-stone-100/70 p-3 text-xs">
                <span className="font-semibold text-zinc-300 flex items-center gap-1 mb-1.5">
                  <Wrench size={13} className="text-teal-700" /> Materiales requeridos:
                </span>
                <ul className="space-y-1 text-zinc-400 list-disc list-inside">
                  {taller.materiales.slice(0, 3).map((mat, i) => (
                    <li key={i} className="truncate">{mat}</li>
                  ))}
                  {taller.materiales.length > 3 && (
                    <li className="italic text-zinc-500">+ {taller.materiales.length - 3} más...</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => setActiveTaller(taller)}
                className="btn-primary text-xs w-full justify-between"
              >
                <span>Ver pauta y preguntas guía</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Guía Metodológica Detallada con soporte para impresión */}
      {activeTaller && (
        <Modal title={activeTaller.titulo} onClose={() => setActiveTaller(null)}>
          <div className="space-y-6 printable-area">
            {/* Cabecera para impresión y pantalla */}
            <div className="border-b border-zinc-800 pb-4">
              <p className="font-serif text-sm italic text-zinc-400">{activeTaller.subtitulo}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-teal-100 px-2 py-0.5 font-bold text-teal-800">
                  Nivel: {activeTaller.nivel}
                </span>
                <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300">
                  Duración: {activeTaller.duracion}
                </span>
              </div>
            </div>

            {/* Botón de Impresión / Descarga PDF */}
            <div className="flex items-center justify-between rounded-lg border border-teal-200 bg-teal-50/70 p-3 no-print">
              <span className="text-xs font-medium text-teal-900">
                ¿Deseas llevar esta guía a tu sala de clases o reunión vecinal?
              </span>
              <button
                onClick={imprimirGuia}
                className="btn-primary py-1.5 text-xs inline-flex items-center gap-1.5"
              >
                <Printer size={15} /> Imprimir / Guardar en PDF
              </button>
            </div>

            {/* Objetivo del Taller */}
            <div className="rounded-lg bg-white/40 p-4 border border-zinc-700">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                <Lightbulb size={15} /> Objetivo Comunitario
              </h3>
              <p className="mt-1 font-serif text-sm leading-relaxed text-zinc-200">{activeTaller.objetivo}</p>
            </div>

            {/* Materiales Completos */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Wrench size={15} /> Lista de Materiales Simples
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs">
                {activeTaller.materiales.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2 rounded bg-stone-100 p-2 text-zinc-200">
                    <CheckCircle2 size={14} className="text-teal-700 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paso a Paso */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Paso a Paso de la Metodología
              </h3>
              {activeTaller.pasosList.map((paso, idx) => (
                <div key={idx} className="rounded-lg border border-zinc-700 bg-white/50 p-4 shadow-sm">
                  <span className="text-[11px] font-bold uppercase text-terra-600">{paso.fase}</span>
                  <h4 className="mt-0.5 font-serif text-lg font-bold text-zinc-50">{paso.titulo}</h4>
                  <p className="mt-1 font-serif text-sm leading-relaxed text-zinc-300">{paso.descripcion}</p>

                  {paso.preguntasGuia && paso.preguntasGuia.length > 0 && (
                    <div className="mt-3 rounded border border-amber-200 bg-amber-50/70 p-3">
                      <p className="text-xs font-bold text-amber-900 flex items-center gap-1 mb-1">
                        <HelpCircle size={13} /> Preguntas detonantes recomendadas:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs italic text-amber-950 font-serif">
                        {paso.preguntasGuia.map((preg, pidx) => (
                          <li key={pidx}>«{preg}»</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Consejos Pedagógicos y Éticos */}
            <div className="rounded-lg border border-zinc-700 bg-stone-100/60 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Recomendaciones pedagógicas y de cuidado
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                {activeTaller.consejosPedagogicos.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
