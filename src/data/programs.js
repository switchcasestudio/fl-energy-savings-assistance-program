/**
 * Program data — powers cards, program detail pages, comparison table,
 * form options, and Service JSON-LD.
 *
 * ⚠️ Titles were changed from "Program One/Two/Three" to descriptive names.
 * "Program One" has no search volume and gives an AI answer engine nothing
 * to attach meaning to. Replace `title` and the slugs in src/lib/site.js
 * with the real program names if they differ — everything reads from here.
 */

const programsEn = [
  {
    id: 1,
    number: 'No. 01',
    title: 'Essential Home Energy Upgrade',
    tagline: 'For single-system projects — one HVAC replacement, one insulation job, one set of windows.',
    icon: 'shield',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 6 months' },
    ],
    funding: '$25,000',
    fundingValue: 25000,
    grant: '$3,000',
    grantValue: 3000,
    deferMonths: 6,
    bestFor: 'A single upgrade — HVAC, insulation, or windows',
    upgrades: [
      'HVAC / heat pump replacement',
      'Attic and wall insulation',
      'Window and door replacement',
      'Duct sealing',
    ],
    description:
      'The Essential Home Energy Upgrade covers Florida home improvement projects up to $25,000 with no down payment, 100% financing, and grant funds of up to $3,000. The first payment is deferred six months. It is the right tier for homeowners replacing one system rather than upgrading a whole house — most commonly a failing air conditioner, an under-insulated attic, or a set of original single-pane windows.',
  },
  {
    id: 2,
    number: 'No. 02',
    title: 'Whole-Home Energy Upgrade',
    tagline: 'For combined projects — HVAC plus insulation, or windows plus envelope work.',
    icon: 'clock',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 12 months' },
    ],
    funding: '$55,000',
    fundingValue: 55000,
    grant: '$5,000',
    grantValue: 5000,
    deferMonths: 12,
    bestFor: 'Two or more upgrades done together',
    upgrades: [
      'HVAC / heat pump replacement',
      'Attic and wall insulation',
      'Window and door replacement',
      'Duct sealing',
      'Solar panel installation',
    ],
    description:
      'The Whole-Home Energy Upgrade covers Florida home improvement projects up to $55,000 with no down payment, 100% financing, and grant funds of up to $5,000. The first payment is deferred twelve months. This tier fits homeowners doing more than one upgrade at once — the sequence that actually works, since a new air conditioner sized for a leaky, under-insulated house is a larger and more expensive unit than the same house needs after envelope work.',
  },
  {
    id: 3,
    number: 'No. 03',
    title: 'Premium Home Energy Upgrade',
    tagline: 'For full retrofits and solar — the whole envelope, mechanical systems, and generation.',
    icon: 'house',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 24 months' },
    ],
    funding: '$100,000',
    fundingValue: 100000,
    grant: '$8,000',
    grantValue: 8000,
    deferMonths: 24,
    bestFor: 'Full retrofit including solar',
    upgrades: [
      'Solar panel installation',
      'HVAC / heat pump replacement',
      'Attic and wall insulation',
      'Impact window and door replacement',
      'Duct sealing and air sealing',
    ],
    description:
      'The Premium Home Energy Upgrade covers Florida home improvement projects up to $100,000 with no down payment, 100% financing, and grant funds of up to $8,000. The first payment is deferred twenty-four months — the longest deferral of the three programs. This tier is built for full-home retrofits that combine solar generation with the envelope and mechanical work that makes the solar array smaller and cheaper to begin with.',
  },
];

const programsEs = [
  {
    id: 1,
    number: 'No. 01',
    title: 'Mejoras Energéticas Esenciales',
    tagline: 'Para proyectos de un solo sistema: un reemplazo de aire acondicionado, un trabajo de aislamiento o un juego de ventanas.',
    icon: 'shield',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 6 meses' },
    ],
    funding: '$25,000',
    fundingValue: 25000,
    grant: '$3,000',
    grantValue: 3000,
    deferMonths: 6,
    bestFor: 'Una sola mejora: aire acondicionado, aislamiento o ventanas',
    upgrades: [
      'Reemplazo de aire acondicionado / bomba de calor',
      'Aislamiento de ático y paredes',
      'Reemplazo de ventanas y puertas',
      'Sellado de conductos',
    ],
    description:
      'Mejoras Energéticas Esenciales cubre proyectos de mejora del hogar en Florida de hasta $25,000 sin pago inicial, con financiamiento del 100% y subvenciones de hasta $3,000. El primer pago se difiere seis meses. Es el nivel adecuado para propietarios que reemplazan un solo sistema en lugar de renovar toda la casa: normalmente un aire acondicionado que está fallando, un ático con poco aislamiento o un juego de ventanas originales de un solo vidrio.',
  },
  {
    id: 2,
    number: 'No. 02',
    title: 'Mejoras Energéticas de Hogar Completo',
    tagline: 'Para proyectos combinados: aire acondicionado más aislamiento, o ventanas más trabajo de envolvente.',
    icon: 'clock',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 12 meses' },
    ],
    funding: '$55,000',
    fundingValue: 55000,
    grant: '$5,000',
    grantValue: 5000,
    deferMonths: 12,
    bestFor: 'Dos o más mejoras realizadas en conjunto',
    upgrades: [
      'Reemplazo de aire acondicionado / bomba de calor',
      'Aislamiento de ático y paredes',
      'Reemplazo de ventanas y puertas',
      'Sellado de conductos',
      'Instalación de paneles solares',
    ],
    description:
      'Mejoras Energéticas de Hogar Completo cubre proyectos de mejora del hogar en Florida de hasta $55,000 sin pago inicial, con financiamiento del 100% y subvenciones de hasta $5,000. El primer pago se difiere doce meses. Este nivel se ajusta a propietarios que hacen más de una mejora a la vez, que es la secuencia que realmente funciona: un aire acondicionado nuevo dimensionado para una casa con fugas y poco aislamiento es una unidad más grande y más cara de la que esa misma casa necesita después del trabajo de envolvente.',
  },
  {
    id: 3,
    number: 'No. 03',
    title: 'Mejoras Energéticas Premium',
    tagline: 'Para renovaciones completas y energía solar: toda la envolvente, los sistemas mecánicos y la generación.',
    icon: 'house',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 24 meses' },
    ],
    funding: '$100,000',
    fundingValue: 100000,
    grant: '$8,000',
    grantValue: 8000,
    deferMonths: 24,
    bestFor: 'Renovación completa incluyendo energía solar',
    upgrades: [
      'Instalación de paneles solares',
      'Reemplazo de aire acondicionado / bomba de calor',
      'Aislamiento de ático y paredes',
      'Reemplazo de ventanas y puertas de impacto',
      'Sellado de conductos y de aire',
    ],
    description:
      'Mejoras Energéticas Premium cubre proyectos de mejora del hogar en Florida de hasta $100,000 sin pago inicial, con financiamiento del 100% y subvenciones de hasta $8,000. El primer pago se difiere veinticuatro meses, el diferimiento más largo de los tres programas. Este nivel está diseñado para renovaciones completas que combinan generación solar con el trabajo de envolvente y mecánico que, de entrada, hace que el sistema solar sea más pequeño y más barato.',
  },
];

export const programs = { en: programsEn, es: programsEs };

export function findProgram(lang, id) {
  const list = programs[lang] || programs.en;
  return list.find((p) => p.id === Number(id)) || null;
}
