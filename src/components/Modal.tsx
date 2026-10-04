import { ReactNode, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/** Modal accesible: role=dialog, cierra con Esc / clic fuera, atrapa foco básico y lo restaura. */
export default function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="fade-in fixed inset-0 z-[2000] flex items-end justify-center bg-stone-900/50 p-0 sm:items-center sm:p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={title} className="slide-in max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-xl border border-zinc-700 bg-zinc-900 p-5 shadow-2xl sm:rounded-xl">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="font-serif text-xl font-semibold text-zinc-50">{title}</h2>
          <button onClick={onClose} aria-label="Cerrar" className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50"><X size={20} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
