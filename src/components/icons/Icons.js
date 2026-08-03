// Lightweight inline SVG icons. All accept standard SVG props.

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function ShieldCheck(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Shield(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function House(props) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function Phone(props) {
  return (
    <svg {...baseProps} strokeWidth={2} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* --------------------------------------------------------------------- *
 * Flags — inline, simplified.
 *
 * These replace `react-country-flag`, which fetched both flags from
 * cdn.jsdelivr.net on every page load: two render-blocking third-party
 * requests, in the header, for 16px decorative images. Inline SVG costs
 * ~400 bytes and zero requests.
 * --------------------------------------------------------------------- */

const flagProps = {
  width: '1.05em',
  height: '1.05em',
  viewBox: '0 0 24 18',
  'aria-hidden': 'true',
  focusable: 'false',
  style: { display: 'inline-block', verticalAlign: '-0.15em', borderRadius: '1px' },
};

export function FlagUS(props) {
  return (
    <svg {...flagProps} {...props}>
      <rect width="24" height="18" fill="#fff" />
      <g fill="#b22234">
        <rect width="24" height="1.385" y="0" />
        <rect width="24" height="1.385" y="2.77" />
        <rect width="24" height="1.385" y="5.54" />
        <rect width="24" height="1.385" y="8.31" />
        <rect width="24" height="1.385" y="11.08" />
        <rect width="24" height="1.385" y="13.85" />
        <rect width="24" height="1.385" y="16.62" />
      </g>
      <rect width="10" height="9.7" fill="#3c3b6e" />
    </svg>
  );
}

export function FlagES(props) {
  return (
    <svg {...flagProps} {...props}>
      <rect width="24" height="18" fill="#c60b1e" />
      <rect width="24" height="9" y="4.5" fill="#ffc400" />
    </svg>
  );
}

// Map icon name -> component (used by ProgramCard)
export const iconMap = {
  shield: Shield,
  clock: Clock,
  house: House,
};
