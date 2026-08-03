import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { resolveRoute, normalizePath } from './routes.js';

/**
 * ~70-line path router. Deliberately not react-router: this site has five
 * page shapes and every URL is prerendered, so the only runtime job is
 * pushState navigation + re-render. A dependency here would cost more bundle
 * than the feature is worth.
 */

const RouterContext = createContext(null);

export function RouterProvider({ initialPath, children }) {
  const [path, setPath] = useState(() =>
    normalizePath(initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/'))
  );

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to, { replace = false, hash = '' } = {}) => {
    if (typeof window === 'undefined') return;
    const next = normalizePath(to);
    const url = next + hash;
    if (replace) window.history.replaceState({}, '', url);
    else window.history.pushState({}, '', url);
    setPath(next);
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, []);

  const route = useMemo(() => resolveRoute(path), [path]);

  const value = useMemo(() => ({ path, route, navigate }), [path, route, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used inside <RouterProvider>');
  return ctx;
}

/**
 * Internal link. Renders a real <a href> so crawlers see a normal href
 * (client-side routers that render <a onClick> with href="#" are a classic
 * way to make an entire site's internal linking invisible).
 */
export function Link({ to, hash = '', children, onClick, ...rest }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    // Respect modifier clicks and middle-click — let the browser handle them
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to, { hash });
  };

  return (
    <a href={normalizePath(to) + hash} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
