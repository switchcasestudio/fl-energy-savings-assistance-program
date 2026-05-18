const programsEn = [
  {
    id: 1,
    number: 'No. 01',
    title: 'Program One',
    icon: 'shield',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 6 months' },
    ],
    funding: '$25,000',
    grant: '$3,000',
  },
  {
    id: 2,
    number: 'No. 02',
    title: 'Program Two',
    icon: 'clock',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 12 months' },
    ],
    funding: '$55,000',
    grant: '$5,000',
  },
  {
    id: 3,
    number: 'No. 03',
    title: 'Program Three',
    icon: 'house',
    rows: [
      { label: 'Down payment', value: '$0' },
      { label: 'Financing', value: '100% covered' },
      { label: 'First payment', value: 'After 24 months' },
    ],
    funding: '$100,000',
    grant: '$8,000',
  },
];

const programsEs = [
  {
    id: 1,
    number: 'No. 01',
    title: 'Programa Uno',
    icon: 'shield',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 6 meses' },
    ],
    funding: '$25,000',
    grant: '$3,000',
  },
  {
    id: 2,
    number: 'No. 02',
    title: 'Programa Dos',
    icon: 'clock',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 12 meses' },
    ],
    funding: '$55,000',
    grant: '$5,000',
  },
  {
    id: 3,
    number: 'No. 03',
    title: 'Programa Tres',
    icon: 'house',
    rows: [
      { label: 'Pago inicial', value: '$0' },
      { label: 'Financiamiento', value: '100% cubierto' },
      { label: 'Primer pago', value: 'Después de 24 meses' },
    ],
    funding: '$100,000',
    grant: '$8,000',
  },
];

export const programs = { en: programsEn, es: programsEs };