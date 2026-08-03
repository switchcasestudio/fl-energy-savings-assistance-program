import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.js';
import './styles/global.css';

const container = document.getElementById('root');

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered HTML is present in production — hydrate it rather than throwing
// it away and re-rendering, which would blank the page until the JS parses.
// In `vite dev` the container is empty, so fall back to a fresh root.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
