export const en = {
  topBar: {
    authority: 'Home energy upgrade programs for Florida homeowners',
    rightText: 'Now accepting 2026 applications',
    langToggle: { en: 'EN', es: 'ES', aria: 'Select language' }
  },
  header: {
    brandAria: 'Florida Energy Assistance home',
    brandName: 'Florida Energy Assistance',
    phoneAria: 'Call us at',
    cta: 'Check eligibility'
  },
  nav: {
    home: 'Home',
    programs: 'Programs',
    counties: 'Counties',
    faq: 'FAQ',
    ariaMain: 'Main navigation',
    ariaBreadcrumb: 'Breadcrumb'
  },
  hero: {
    eyebrow: 'Florida Homeowner Programs',
    titlePart1: 'Florida home energy upgrades ',
    titleEm: 'with $0 down.',
    lede: 'Three programs that help Florida homeowners pay for solar, HVAC replacement, windows, and insulation - with $0 down, 100% financing, and grants up to $8,000. Free eligibility check, no obligation.',
    metaDown: 'Down payment',
    metaFinancing: 'Financing available',
    metaPrograms: 'Tailored programs',
    caption: 'Solar, HVAC, windows & insulation - all eligible upgrades.',
    imageAlt: 'Newly built two-story Florida home with a covered front porch, three-car garage, and solar panels on the roof'
  },
  programs: {
    title: 'Three Florida home energy programs. One purpose: upgrades you can actually afford.',
    intro: 'Every program covers 100% of the approved project cost with no down payment. They differ in how much they fund, how much grant money they carry, and how long before the first payment is due.',
    learnMore: 'Program details'
  },
  programCard: {
    fundingLabel: 'Up to in funding',
    grantLabel: 'Up to in grant'
  },
  compare: {
    title: 'Compare the three programs',
    caption: 'Florida home energy upgrade programs compared by funding cap, grant amount, and first-payment deferral.',
    colProgram: 'Program',
    colBestFor: 'Best for',
    colFunding: 'Funding up to',
    colGrant: 'Grant up to',
    colDown: 'Down payment',
    colFirst: 'First payment',
    months: 'months'
  },
  howItWorks: {
    title: 'How the Florida home energy programs work'
  },
  faq: {
    title: 'Frequently asked questions',
    intro: 'Straight answers about eligibility, funding amounts, grants, and how the programs actually work.'
  },
  countiesSection: {
    title: 'Programs by Florida county',
    intro: 'Florida spans two climate zones, and the upgrades that save the most money differ by region. Select your county for local detail.',
    viewAll: 'All counties'
  },
  countyPage: {
    eyebrowTpl: 'Florida home energy programs',
    h1Tpl: (name) => `Home energy upgrade programs in ${name}`,
    atAGlance: 'County at a glance',
    countySeat: 'County seat',
    utility: 'Electric utility',
    population: 'Population',
    climateZone: 'IECC climate zone',
    summerHigh: 'Typical summer high',
    region: 'Region',
    housingTitle: 'Housing stock and where the savings are',
    utilityTitle: 'Who provides your electricity',
    whyTitle: 'What makes this county different',
    citiesTitle: 'Communities served',
    citiesIntro: 'Homeowners across the county are eligible, including:',
    programsTitle: 'Programs available to homeowners here',
    ctaTitle: (name) => `Check your eligibility in ${name}`,
    ctaBody: 'The eligibility check is free, takes about a minute, and carries no obligation. A program specialist responds within one business day.',
    ctaButton: 'Check my eligibility',
    nearbyTitle: 'Other Florida counties'
  },
  programPage: {
    eyebrow: 'Program detail',
    atAGlance: 'At a glance',
    fundingLabel: 'Funding up to',
    grantLabel: 'Grant up to',
    downLabel: 'Down payment',
    firstLabel: 'First payment',
    monthsAfter: (n) => `After ${n} months`,
    bestForLabel: 'Best for',
    upgradesTitle: 'Eligible upgrades',
    howTitle: 'How this program works',
    otherTitle: 'The other programs',
    ctaTitle: 'Check eligibility for this program',
    ctaBody: 'Free, no obligation, and a specialist responds within one business day.',
    ctaButton: 'Check my eligibility'
  },
  cta: {
    eyebrow: 'Get Started',
    titlePart1: 'Want to upgrade your ',
    titleEm: 'Florida home?',
    titlePart2: " We're here to help.",
    sub: 'Tell us a little about your project and a program specialist will reach out within one business day to confirm availability and find the option that fits.',
    bullet1: 'No obligation — eligibility check only',
    bullet2: 'Response within one business day',
    bullet3: 'Florida homeowners only',
    phoneLabel: 'Prefer to talk?',
    phoneAria: 'Call us at',
    phoneHours: 'Mon–Fri, 9 AM – 6 PM ET · No obligation',
    panelEyebrow: 'Check your eligibility'
  },
  contactForm: {
    options: [
      { value: '', label: 'Select a program' },
      { value: 'Essential Home Energy Upgrade', label: 'Essential — up to $25,000 funding' },
      { value: 'Whole-Home Energy Upgrade', label: 'Whole-Home — up to $55,000 funding' },
      { value: 'Premium Home Energy Upgrade', label: 'Premium — up to $100,000 funding' },
      { value: 'Not sure', label: 'Not sure — help me decide' }
    ],
    validation: {
      name: 'Please enter your name.',
      emailReq: 'Please enter your email.',
      emailInv: 'Please enter a valid email.',
      phoneReq: 'Please enter your phone number.',
      phoneInv: 'Please enter a valid phone number.',
      zipReq: 'Please enter your ZIP code.',
      zipInv: 'ZIP must be 5 digits.',
      program: 'Please select a program.'
    },
    successTitle: 'Application received.',
    successBody: 'A program specialist will reach out within one business day to confirm eligibility and next steps.',
    errorBanner: 'Something went wrong. Please try again or refresh the page.',
    botLabel: "Don't fill this out: ",
    labels: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone number',
      zip: 'Florida ZIP code',
      program: 'Program of interest',
      message: 'Tell us about your project',
      optional: '(optional)'
    },
    placeholders: {
      phone: '(555) 555-5555',
      message: 'Solar panels, HVAC replacement, new windows…'
    },
    buttons: {
      sending: 'Sending…',
      submit: 'Check my eligibility'
    },
    consent: {
      before: 'By submitting this form, you agree to the ',
      terms: 'Terms of Service',
      middle: ' and ',
      privacy: 'Privacy Policy',
      after: ', and you give your express written consent for Florida Energy Assistance and participating program providers to contact you at the phone number and email address you provided \u2014 including by automatic telephone dialing system, prerecorded or artificial voice, and text message \u2014 about home energy upgrade programs. Consent is not a condition of any purchase. Message and data rates may apply. Reply STOP to opt out.'
    }
  },
  thanks: {
    title: 'Application received.',
    body: 'A program specialist will reach out within one business day to confirm eligibility and next steps. If you would rather talk sooner, call us directly.',
    phoneLabel: 'Call a specialist',
    backHome: 'Back to home'
  },
  notFound: {
    title: 'Page not found',
    body: 'That page does not exist. Try the homepage, or check eligibility directly.',
    backHome: 'Back to home',
    checkCta: 'Check eligibility'
  },
  legal: {
    updated: 'Last updated',
    privacyLink: 'Read the Privacy Policy',
    termsLink: 'Read the Terms of Service'
  },
  footer: {
    brandName: 'Florida Energy Assistance',
    noObligation: 'No obligation',
    phoneAria: 'Call us at',
    hours: 'Mon–Fri, 9 AM – 6 PM ET',
    programsTitle: 'Programs',
    countiesTitle: 'Florida counties',
    legalTitle: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer:
      'Florida Energy Assistance is a private company that helps Florida homeowners access home energy upgrade financing and grant programs. Program availability, funding amounts, and grant amounts are subject to eligibility and approval.'
  }
};
