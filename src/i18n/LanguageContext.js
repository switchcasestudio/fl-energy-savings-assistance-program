import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { en } from './en.js';
import { es } from './es.js';

const DICTIONARIES = { en, es };
const STORAGE_KEY = 'fl-energy-lang';
const DEFAULT_LANG = 'en';

const LanguageContext = createContext(null);

function resolve(dict, path) {
  const value = path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
  return value == null ? path : value;
}

function detectInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'es') return stored;
  const browser = (window.navigator.language || '').toLowerCase();
  return browser.startsWith('es') ? 'es' : DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((next) => {
    if (next === 'en' || next === 'es') setLangState(next);
  }, []);

  const t = useCallback((path) => resolve(DICTIONARIES[lang], path), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used inside <LanguageProvider>');
  return ctx;
}