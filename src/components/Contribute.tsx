import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Aporte } from '../types';
import { uid } from '../lib/meta';

const TIPOS: Aporte['tipo'][] = ['Relato', 'Sugerencia de sitio', 'Testimonio', 'Archivo'];
const EMPTY = { tipo: 'Relato' as Aporte['tipo'], nombre: '', contacto: '', titulo: '', mensaje: '', enlace: '' };

export default function Contribute({ setAportes }: { setAportes: React.Dispatch<React.SetStateAction<Aporte[]>> }) {
  const [f, setF] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setAportes((a) => [{ ...f, id: uid('ap'), fecha: new Date().toISOString(), revisado: false }, ...a]);
    setF(EMPTY);
    setOk(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="font-serif text-3xl font-semibold text-zinc-50">Archivo Abierto</h1>
      <p className="mt-2 text-zinc-400">¿Tienes un relato, una fotografía, un documento o conoces un lugar que debería estar en el mapa? Compártelo. Nuestro equipo revisará cada aporte antes de publicarlo, resguardando la dignidad de las personas.</p>

      {ok && (
        <div role="status" className="mt-5 flex items-start gap-2 rounded-md border border-ocre-500/40 bg-ocre-500/10 p-3 text-sm text-ocre-300">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> Recibimos tu aporte. Será revisado por el equipo. ¡Gracias por cuidar la memoria!
        </div>
      )}

      <form onSubmit={submit} className="card mt-6 space-y-4 p-5">
        <div>
          <label className="label" htmlFor="ap-tipo">Tipo de aporte</label>
          <select id="ap-tipo" className="input" value={f.tipo} onChange={set('tipo')}>{TIPOS.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label className="label" htmlFor="ap-nombre">Nombre (opcional)</label><input id="ap-nombre" className="input" value={f.nombre} onChange={set('nombre')} /></div>
          <div><label className="label" htmlFor="ap-contacto">Contacto (opcional)</label><input id="ap-contacto" className="input" value={f.contacto} onChange={set('contacto')} placeholder="correo o teléfono" /></div>
        </div>
        <div><label className="label" htmlFor="ap-titulo">Título</label><input id="ap-titulo" required className="input" value={f.titulo} onChange={set('titulo')} /></div>
        <div><label className="label" htmlFor="ap-msg">Relato o descripción</label><textarea id="ap-msg" required className="input min-h-36" value={f.mensaje} onChange={set('mensaje')} /></div>
        <div><label className="label" htmlFor="ap-link">Enlace a archivo (Drive, YouTube, etc.)</label><input id="ap-link" type="url" className="input" value={f.enlace} onChange={set('enlace')} placeholder="https://" /></div>
        <p className="text-xs text-zinc-500">Los aportes se guardan localmente en este navegador (demo). Para un despliegue real se requiere un backend.</p>
        <button className="btn-primary" type="submit"><Send size={16} /> Enviar aporte</button>
      </form>
    </div>
  );
}
