import { createContext, useContext, useEffect, useCallback, useMemo } from 'react';
import { en } from './en.js';
import { es } from './es.js';

const DICTIONARIES = { en, es };

const LanguageContext = createContext(null);

function resolve(dict, path) {
  const value = path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
  return value == null ? path : value;
}

/**
 * Language is derived from the URL, not from localStorage.
 *
 * This is the change that makes Spanish indexable: a client-side-only toggle
 * means /es content has no URL, so it can never be crawled, ranked, or cited.
 * The router resolves `lang` from the path and passes it down here; the
 * toggle in TopBar navigates to the alternate URL instead of flipping state.
 */
export function LanguageProvider({ lang, children }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((path) => resolve(DICTIONARIES[lang] || en, path), [lang]);

  const value = useMemo(() => ({ lang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used inside <LanguageProvider>');
  return ctx;
}
