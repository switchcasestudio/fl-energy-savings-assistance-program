export const es = {
  topBar: {
    authority: 'Programas de mejoras energéticas para propietarios en Florida',
    rightText: 'Aceptando solicitudes para 2026',
    langToggle: { en: 'EN', es: 'ES', aria: 'Seleccionar idioma' }
  },
  header: {
    brandAria: 'Inicio de Florida Energy Assistance',
    brandName: 'Florida Energy Assistance',
    phoneAria: 'Llámenos al',
    cta: 'Verificar elegibilidad'
  },
  nav: {
    home: 'Inicio',
    programs: 'Programas',
    counties: 'Condados',
    faq: 'Preguntas frecuentes',
    ariaMain: 'Navegación principal',
    ariaBreadcrumb: 'Ruta de navegación'
  },
  hero: {
    eyebrow: 'Programas para Propietarios en Florida',
    titlePart1: 'Mejoras energéticas en Florida ',
    titleEm: 'sin pago inicial.',
    lede: 'Tres programas que ayudan a los propietarios en Florida a pagar energía solar, reemplazo de aire acondicionado, ventanas y aislamiento, con $0 de pago inicial, financiamiento del 100% y subvenciones de hasta $8,000. Verificación de elegibilidad gratuita y sin compromiso.',
    metaDown: 'Pago inicial',
    metaFinancing: 'Financiamiento disponible',
    metaPrograms: 'Programas personalizados',
    caption: 'Solar, aire acondicionado, ventanas y aislamiento: todas son mejoras elegibles.',
    imageAlt: 'Casa de dos plantas recién construida en Florida con porche cubierto, garaje para tres autos y paneles solares en el techo'
  },
  programs: {
    title: 'Tres programas de energía para el hogar en Florida. Un propósito: mejoras que realmente puede pagar.',
    intro: 'Cada programa cubre el 100% del costo aprobado del proyecto sin pago inicial. Se diferencian en cuánto financian, cuánto dinero de subvención incluyen y cuánto tiempo pasa antes del primer pago.',
    learnMore: 'Detalles del programa'
  },
  programCard: {
    fundingLabel: 'Hasta en financiamiento',
    grantLabel: 'Hasta en subvención'
  },
  compare: {
    title: 'Compare los tres programas',
    caption: 'Programas de mejoras energéticas en Florida comparados por límite de financiamiento, monto de subvención y diferimiento del primer pago.',
    colProgram: 'Programa',
    colBestFor: 'Ideal para',
    colFunding: 'Financiamiento hasta',
    colGrant: 'Subvención hasta',
    colDown: 'Pago inicial',
    colFirst: 'Primer pago',
    months: 'meses'
  },
  howItWorks: {
    title: 'Cómo funcionan los programas de energía para el hogar en Florida'
  },
  faq: {
    title: 'Preguntas frecuentes',
    intro: 'Respuestas directas sobre elegibilidad, montos de financiamiento, subvenciones y cómo funcionan realmente los programas.'
  },
  countiesSection: {
    title: 'Programas por condado de Florida',
    intro: 'Florida abarca dos zonas climáticas y las mejoras que más ahorran varían según la región. Seleccione su condado para ver detalles locales.',
    viewAll: 'Todos los condados'
  },
  countyPage: {
    eyebrowTpl: 'Programas de energía para el hogar en Florida',
    h1Tpl: (name) => `Programas de mejoras energéticas en ${name}`,
    atAGlance: 'El condado en resumen',
    countySeat: 'Sede del condado',
    utility: 'Empresa eléctrica',
    population: 'Población',
    climateZone: 'Zona climática IECC',
    summerHigh: 'Máxima típica de verano',
    region: 'Región',
    housingTitle: 'Parque de viviendas y dónde están los ahorros',
    utilityTitle: 'Quién le suministra la electricidad',
    whyTitle: 'Qué hace diferente a este condado',
    citiesTitle: 'Comunidades atendidas',
    citiesIntro: 'Los propietarios de todo el condado son elegibles, incluyendo:',
    programsTitle: 'Programas disponibles para propietarios aquí',
    ctaTitle: (name) => `Verifique su elegibilidad en ${name}`,
    ctaBody: 'La verificación de elegibilidad es gratuita, toma alrededor de un minuto y no genera ninguna obligación. Un especialista responde dentro de un día hábil.',
    ctaButton: 'Verificar mi elegibilidad',
    nearbyTitle: 'Otros condados de Florida'
  },
  programPage: {
    eyebrow: 'Detalle del programa',
    atAGlance: 'En resumen',
    fundingLabel: 'Financiamiento hasta',
    grantLabel: 'Subvención hasta',
    downLabel: 'Pago inicial',
    firstLabel: 'Primer pago',
    monthsAfter: (n) => `Después de ${n} meses`,
    bestForLabel: 'Ideal para',
    upgradesTitle: 'Mejoras elegibles',
    howTitle: 'Cómo funciona este programa',
    otherTitle: 'Los otros programas',
    ctaTitle: 'Verifique la elegibilidad para este programa',
    ctaBody: 'Gratis, sin compromiso, y un especialista responde dentro de un día hábil.',
    ctaButton: 'Verificar mi elegibilidad'
  },
  cta: {
    eyebrow: 'Comenzar',
    titlePart1: '¿Quiere mejorar su ',
    titleEm: 'hogar en Florida?',
    titlePart2: ' Estamos aquí para ayudar.',
    sub: 'Cuéntenos un poco sobre su proyecto y un especialista del programa se comunicará dentro de un día hábil para confirmar la disponibilidad y encontrar la opción adecuada.',
    bullet1: 'Sin compromiso — solo verificación de elegibilidad',
    bullet2: 'Respuesta dentro de un día hábil',
    bullet3: 'Solo propietarios de vivienda en Florida',
    phoneLabel: '¿Prefiere hablar?',
    phoneAria: 'Llámenos al',
    phoneHours: 'Lun–Vie, 9 AM – 6 PM ET · Sin compromiso',
    panelEyebrow: 'Verifique su elegibilidad'
  },
  contactForm: {
    options: [
      { value: '', label: 'Seleccione un programa' },
      { value: 'Essential Home Energy Upgrade', label: 'Esenciales — hasta $25,000 de financiamiento' },
      { value: 'Whole-Home Energy Upgrade', label: 'Hogar Completo — hasta $55,000 de financiamiento' },
      { value: 'Premium Home Energy Upgrade', label: 'Premium — hasta $100,000 de financiamiento' },
      { value: 'Not sure', label: 'No estoy seguro — ayúdenme a decidir' }
    ],
    validation: {
      name: 'Por favor ingrese su nombre.',
      emailReq: 'Por favor ingrese su correo electrónico.',
      emailInv: 'Por favor ingrese un correo electrónico válido.',
      phoneReq: 'Por favor ingrese su número de teléfono.',
      phoneInv: 'Por favor ingrese un número de teléfono válido.',
      zipReq: 'Por favor ingrese su código postal.',
      zipInv: 'El código postal debe tener 5 dígitos.',
      program: 'Por favor seleccione un programa.'
    },
    successTitle: 'Solicitud recibida.',
    successBody: 'Un especialista del programa se comunicará dentro de un día hábil para confirmar la elegibilidad y los siguientes pasos.',
    errorBanner: 'Algo salió mal. Por favor intente de nuevo o actualice la página.',
    botLabel: 'No complete esto: ',
    labels: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      zip: 'Código postal de Florida',
      program: 'Programa de interés',
      message: 'Cuéntenos sobre su proyecto',
      optional: '(opcional)'
    },
    placeholders: {
      phone: '(555) 555-5555',
      message: 'Paneles solares, reemplazo de aire acondicionado, ventanas nuevas…'
    },
    buttons: {
      sending: 'Enviando…',
      submit: 'Verificar mi elegibilidad'
    },
    consent: {
      before: 'Al enviar este formulario, usted acepta los ',
      terms: 'T\u00e9rminos de Servicio',
      middle: ' y la ',
      privacy: 'Pol\u00edtica de Privacidad',
      after: ', y otorga su consentimiento expreso por escrito para que Florida Energy Assistance y los proveedores de programas participantes se comuniquen con usted en el n\u00famero de tel\u00e9fono y el correo electr\u00f3nico que proporcion\u00f3 \u2014 incluso mediante sistema de marcaci\u00f3n telef\u00f3nica autom\u00e1tica, voz pregrabada o artificial, y mensaje de texto \u2014 sobre programas de mejoras energ\u00e9ticas del hogar. El consentimiento no es condici\u00f3n para ninguna compra. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para excluirse.'
    }
  },
  thanks: {
    title: 'Solicitud recibida.',
    body: 'Un especialista del programa se comunicará dentro de un día hábil para confirmar la elegibilidad y los siguientes pasos. Si prefiere hablar antes, llámenos directamente.',
    phoneLabel: 'Llamar a un especialista',
    backHome: 'Volver al inicio'
  },
  notFound: {
    title: 'Página no encontrada',
    body: 'Esa página no existe. Pruebe la página de inicio o verifique su elegibilidad directamente.',
    backHome: 'Volver al inicio',
    checkCta: 'Verificar elegibilidad'
  },
  legal: {
    updated: 'Última actualización',
    privacyLink: 'Leer la Política de Privacidad',
    termsLink: 'Leer los Términos de Servicio'
  },
  footer: {
    brandName: 'Florida Energy Assistance',
    noObligation: 'Sin compromiso',
    phoneAria: 'Llámenos al',
    hours: 'Lun–Vie, 9 AM – 6 PM ET',
    programsTitle: 'Programas',
    countiesTitle: 'Condados de Florida',
    legalTitle: 'Legal',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    disclaimer:
      'Florida Energy Assistance es una empresa privada que ayuda a propietarios de vivienda en Florida a acceder a financiamiento y programas de subvención para mejoras energéticas del hogar. La disponibilidad de los programas, los montos de financiamiento y los montos de subvención están sujetos a elegibilidad y aprobación.'
  }
};
