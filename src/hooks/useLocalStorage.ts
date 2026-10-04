import { useCallback, useEffect, useState } from 'react';

/** useState con persistencia en localStorage (tolerante a errores y a JSON corrupto). */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* cuota excedida o modo privado: se ignora */
    }
  }, [key, value]);

  const reset = useCallback(() => setValue(initial), [initial]);
  return [value, setValue, reset] as const;
}
