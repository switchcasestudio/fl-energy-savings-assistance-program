/**
 * FAQ content — powers both the on-page FAQ section and FAQPage JSON-LD.
 *
 * Written for GEO (Generative Engine Optimization): each answer is
 * self-contained, leads with the direct answer, and includes concrete
 * figures. AI answer engines quote spans, not pages — an answer that only
 * makes sense in context of the surrounding page will not get cited.
 *
 * ⚠️ VERIFY BEFORE LAUNCH — the entries flagged `needsOwnerReview: true`
 * assert things the source site did not state (credit handling, approval
 * timelines, program authorization). Confirm each with the business and
 * correct the copy. Publishing unverified claims about financing terms is
 * both a compliance and a Google-policy exposure.
 */

const faqEn = [
  {
    id: 'what-is',
    q: 'What is Florida Energy Assistance?',
    a: 'Florida Energy Assistance connects Florida homeowners with three home energy upgrade programs that cover projects such as solar, HVAC replacement, windows, and insulation. All three offer $0 down and 100% financing, with grant funds of up to $8,000 depending on the program. Eligibility checks are free and carry no obligation.',
    needsOwnerReview: true,
  },
  {
    id: 'who-qualifies',
    q: 'Who qualifies for Florida home energy upgrade programs?',
    a: 'The programs are open to Florida homeowners only — you must own the property and it must be located in Florida. Renters and out-of-state property owners are not eligible. Beyond that, program placement depends on the scope of your project and the funding tier that fits it. A specialist confirms which of the three programs you qualify for after reviewing your eligibility check.',
    needsOwnerReview: true,
  },
  {
    id: 'how-much',
    q: 'How much funding can a Florida homeowner receive?',
    a: 'Funding is tiered across three programs. The Essential program covers projects up to $25,000 with grant funds up to $3,000. The Whole-Home program covers up to $55,000 with grant funds up to $5,000. The Premium program covers up to $100,000 with grant funds up to $8,000. All three require $0 down and finance 100% of the approved project cost.',
  },
  {
    id: 'zero-down',
    q: 'Is $0 down real, or are there hidden upfront costs?',
    a: 'All three programs require no down payment. 100% of the approved project cost is financed, and the first payment is deferred — 6 months on the Essential program, 12 months on Whole-Home, and 24 months on Premium. The eligibility check itself is free and creates no obligation to proceed.',
    needsOwnerReview: true,
  },
  {
    id: 'eligible-upgrades',
    q: 'What home upgrades are eligible?',
    a: 'Eligible projects include solar panel installation, HVAC and heat pump replacement, window and door replacement, and attic and wall insulation. In Florida\'s climate, cooling-related upgrades typically deliver the largest bill reduction, since air conditioning accounts for the majority of a Florida home\'s annual electricity use.',
  },
  {
    id: 'first-payment',
    q: 'When does the first payment start?',
    a: 'The first payment is deferred based on which program you are approved for: 6 months for the Essential program, 12 months for the Whole-Home program, and 24 months for the Premium program. That deferral means the upgrade is typically installed and producing savings before the first payment comes due.',
  },
  {
    id: 'grant-vs-financing',
    q: 'What is the difference between the grant and the financing?',
    a: 'The financing covers 100% of the approved project cost and is repaid over time. The grant portion — up to $3,000, $5,000, or $8,000 depending on program tier — reduces the amount owed and is not repaid. Every program combines both: financing makes the project possible with no money down, and the grant lowers the total.',
    needsOwnerReview: true,
  },
  {
    id: 'how-long',
    q: 'How long does the process take?',
    a: 'After you submit an eligibility check, a program specialist responds within one business day to confirm availability and identify the program that fits your project. Timeline from there depends on project scope and contractor scheduling.',
  },
  {
    id: 'which-counties',
    q: 'Which Florida counties are covered?',
    a: 'Programs are available to homeowners statewide across Florida, including Miami-Dade, Broward, Palm Beach, Hillsborough, Orange, Duval, Pinellas, Lee, Polk, Brevard, Volusia, and Pasco counties. Because Florida spans two climate zones, the upgrades that save the most differ by region — cooling-focused work in South Florida, heat-pump replacement in North Florida where a real heating season exists.',
  },
  {
    id: 'spanish',
    q: 'Are Spanish-speaking specialists available?',
    a: 'Yes. The full application is available in Spanish, and Spanish-speaking program specialists are available during business hours, Monday through Friday, 9 AM to 6 PM Eastern.',
    needsOwnerReview: true,
  },
  {
    id: 'how-apply',
    q: 'How do I apply?',
    a: 'Complete the free eligibility check with your name, email, phone number, Florida ZIP code, and the program you are interested in — or select "help me decide" if you are unsure. A specialist reaches out within one business day. You can also call 866-627-9518 Monday through Friday, 9 AM to 6 PM Eastern. There is no obligation and no cost to check.',
  },
];

const faqEs = [
  {
    id: 'what-is',
    q: '¿Qué es Florida Energy Assistance?',
    a: 'Florida Energy Assistance conecta a los propietarios de viviendas en Florida con tres programas de mejoras energéticas que cubren proyectos como energía solar, reemplazo de aire acondicionado, ventanas y aislamiento. Los tres ofrecen $0 de pago inicial y financiamiento del 100%, con fondos de subvención de hasta $8,000 según el programa. Las verificaciones de elegibilidad son gratuitas y sin compromiso.',
  },
  {
    id: 'who-qualifies',
    q: '¿Quién califica para los programas de mejoras energéticas en Florida?',
    a: 'Los programas están disponibles únicamente para propietarios de vivienda en Florida: usted debe ser dueño de la propiedad y esta debe estar ubicada en Florida. Los inquilinos y los propietarios de otros estados no son elegibles. Más allá de eso, la asignación de programa depende del alcance de su proyecto y del nivel de financiamiento que le corresponda. Un especialista confirma para cuál de los tres programas califica después de revisar su verificación de elegibilidad.',
  },
  {
    id: 'how-much',
    q: '¿Cuánto financiamiento puede recibir un propietario en Florida?',
    a: 'El financiamiento se organiza en tres niveles. El programa Esencial cubre proyectos de hasta $25,000 con subvenciones de hasta $3,000. El programa de Hogar Completo cubre hasta $55,000 con subvenciones de hasta $5,000. El programa Premium cubre hasta $100,000 con subvenciones de hasta $8,000. Los tres requieren $0 de pago inicial y financian el 100% del costo aprobado del proyecto.',
  },
  {
    id: 'zero-down',
    q: '¿El pago inicial de $0 es real o hay costos ocultos por adelantado?',
    a: 'Los tres programas no requieren pago inicial. Se financia el 100% del costo aprobado del proyecto y el primer pago se difiere: 6 meses en el programa Esencial, 12 meses en Hogar Completo y 24 meses en Premium. La verificación de elegibilidad es gratuita y no genera ninguna obligación de continuar.',
  },
  {
    id: 'eligible-upgrades',
    q: '¿Qué mejoras del hogar son elegibles?',
    a: 'Los proyectos elegibles incluyen instalación de paneles solares, reemplazo de aire acondicionado y bombas de calor, reemplazo de ventanas y puertas, y aislamiento de áticos y paredes. En el clima de Florida, las mejoras relacionadas con la refrigeración suelen generar la mayor reducción en la factura, ya que el aire acondicionado representa la mayor parte del consumo eléctrico anual de una vivienda en Florida.',
  },
  {
    id: 'first-payment',
    q: '¿Cuándo comienza el primer pago?',
    a: 'El primer pago se difiere según el programa para el que sea aprobado: 6 meses para el programa Esencial, 12 meses para Hogar Completo y 24 meses para Premium. Ese diferimiento significa que la mejora normalmente ya está instalada y generando ahorros antes de que venza el primer pago.',
  },
  {
    id: 'grant-vs-financing',
    q: '¿Cuál es la diferencia entre la subvención y el financiamiento?',
    a: 'El financiamiento cubre el 100% del costo aprobado del proyecto y se paga con el tiempo. La parte de subvención — hasta $3,000, $5,000 u $8,000 según el nivel del programa — reduce el monto adeudado y no se devuelve. Cada programa combina ambos: el financiamiento hace posible el proyecto sin dinero inicial y la subvención reduce el total.',
  },
  {
    id: 'how-long',
    q: '¿Cuánto tiempo toma el proceso?',
    a: 'Después de enviar una verificación de elegibilidad, un especialista del programa responde dentro de un día hábil para confirmar la disponibilidad e identificar el programa que se ajusta a su proyecto. El plazo a partir de ahí depende del alcance del proyecto y de la agenda del contratista.',
  },
  {
    id: 'which-counties',
    q: '¿Qué condados de Florida están cubiertos?',
    a: 'Los programas están disponibles para propietarios en todo el estado de Florida, incluidos los condados de Miami-Dade, Broward, Palm Beach, Hillsborough, Orange, Duval, Pinellas, Lee, Polk, Brevard, Volusia y Pasco. Como Florida abarca dos zonas climáticas, las mejoras que más ahorran varían por región: trabajo enfocado en refrigeración en el sur de Florida y reemplazo con bomba de calor en el norte, donde sí existe una temporada de calefacción real.',
  },
  {
    id: 'spanish',
    q: '¿Hay especialistas que hablan español?',
    a: 'Sí. La solicitud completa está disponible en español y hay especialistas de programa que hablan español durante el horario de atención, de lunes a viernes de 9 AM a 6 PM hora del Este.',
  },
  {
    id: 'how-apply',
    q: '¿Cómo puedo solicitar?',
    a: 'Complete la verificación de elegibilidad gratuita con su nombre, correo electrónico, número de teléfono, código postal de Florida y el programa que le interesa, o seleccione "ayúdenme a decidir" si no está seguro. Un especialista se comunicará dentro de un día hábil. También puede llamar al 866-627-9518 de lunes a viernes, de 9 AM a 6 PM hora del Este. No hay obligación ni costo por verificar.',
  },
];

export const faq = { en: faqEn, es: faqEs };
