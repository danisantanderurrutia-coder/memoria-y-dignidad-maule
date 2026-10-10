import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Aporte } from '../types';
import { uid } from '../lib/meta';
import { useLanguage } from '../context/LanguageContext';

const TIPOS: Aporte['tipo'][] = ['Relato', 'Sugerencia de sitio', 'Testimonio', 'Archivo'];
const EMPTY = { tipo: 'Relato' as Aporte['tipo'], nombre: '', contacto: '', titulo: '', mensaje: '', enlace: '' };

export default function Contribute({ setAportes }: { setAportes: React.Dispatch<React.SetStateAction<Aporte[]>> }) {
  const { lang, t } = useLanguage();
  const [f, setF] = useState(EMPTY);
  const [ok, setOk] = useState(false);
  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setAportes((a) => [{ ...f, id: uid('ap'), fecha: new Date().toISOString(), revisado: false }, ...a]);
    setF(EMPTY);
    setOk(true);
  };

  const getTipoLabel = (tName: Aporte['tipo']) => {
    if (lang === 'de') {
      const deMap: Record<Aporte['tipo'], string> = {
        'Relato': 'Erlebnisbericht',
        'Sugerencia de sitio': 'Ortsvorschlag',
        'Testimonio': 'Zeitzeugenbericht',
        'Archivo': 'Archivmaterial / Foto',
      };
      return deMap[tName];
    }
    if (lang === 'en') {
      const enMap: Record<Aporte['tipo'], string> = {
        'Relato': 'Story',
        'Sugerencia de sitio': 'Site suggestion',
        'Testimonio': 'Testimony',
        'Archivo': 'Archive / Document',
      };
      return enMap[tName];
    }
    return tName;
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="font-serif text-3xl font-semibold text-zinc-50">{t.contribTitle}</h1>
      <p className="mt-2 text-zinc-400">{t.contribDesc}</p>

      {ok && (
        <div role="status" className="mt-5 flex items-start gap-2 rounded-md border border-ocre-500/40 bg-ocre-500/10 p-3 text-sm text-ocre-300">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> {t.contribSuccess}
        </div>
      )}

      <form onSubmit={submit} className="card mt-6 space-y-4 p-5">
        <div>
          <label className="label" htmlFor="ap-tipo">{t.contribType}</label>
          <select id="ap-tipo" className="input" value={f.tipo} onChange={set('tipo')}>
            {TIPOS.map((tipoVal) => (
              <option key={tipoVal} value={tipoVal}>
                {getTipoLabel(tipoVal)}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="ap-nombre">{t.contribName}</label>
            <input id="ap-nombre" className="input" value={f.nombre} onChange={set('nombre')} />
          </div>
          <div>
            <label className="label" htmlFor="ap-contacto">{t.contribContact}</label>
            <input id="ap-contacto" className="input" value={f.contacto} onChange={set('contacto')} placeholder={lang === 'de' ? 'E-Mail oder Telefon' : lang === 'en' ? 'email or phone' : 'correo o teléfono'} />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="ap-titulo">{t.contribTitleField}</label>
          <input id="ap-titulo" required className="input" value={f.titulo} onChange={set('titulo')} />
        </div>
        <div>
          <label className="label" htmlFor="ap-msg">{t.contribStory}</label>
          <textarea id="ap-msg" required className="input min-h-36" value={f.mensaje} onChange={set('mensaje')} />
        </div>
        <div>
          <label className="label" htmlFor="ap-link">{t.contribLink}</label>
          <input id="ap-link" type="url" className="input" value={f.enlace} onChange={set('enlace')} placeholder="https://" />
        </div>
        <p className="text-xs text-zinc-500">{t.contribNote}</p>
        <button className="btn-primary" type="submit"><Send size={16} /> {t.contribSendBtn}</button>
      </form>
    </div>
  );
}
