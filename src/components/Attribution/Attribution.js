import { useEffect } from 'react';
import { captureAttribution } from '../../lib/attribution.js';
import { useRouter } from '../../router/Router.js';

/**
 * Captures campaign parameters on first paint and on every client-side
 * navigation. Renders nothing.
 */
function Attribution() {
  const { path } = useRouter();

  useEffect(() => {
    captureAttribution();
  }, [path]);

  return null;
}

export default Attribution;
