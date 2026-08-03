/**
 * Florida county landing-page data.
 *
 * Every field here is a verifiable, stable fact (county seat, serving electric
 * utility, IECC climate zone, approximate population, typical summer high).
 * Deliberately NO invented rebate amounts or utility-specific incentive figures —
 * fabricated local data is exactly what turns programmatic pages into thin content.
 *
 * If you later obtain real per-utility rebate data, add it as a `localIncentives`
 * array and render it in CountyPage; the page template already leaves room.
 */

export const counties = [
  {
    id: 'miami-dade',
    slug: { en: 'miami-dade-county', es: 'condado-miami-dade' },
    name: { en: 'Miami-Dade County', es: 'Condado de Miami-Dade' },
    shortName: { en: 'Miami-Dade', es: 'Miami-Dade' },
    seat: 'Miami',
    region: { en: 'South Florida', es: 'Sur de Florida' },
    utilities: ['Florida Power & Light (FPL)'],
    population: '2.6 million',
    climateZone: '1A',
    summerHigh: '90°F',
    cities: ['Miami', 'Hialeah', 'Miami Beach', 'Homestead', 'Coral Gables', 'Doral'],
    en: {
      intro:
        'Miami-Dade is Florida\'s most populous county and the only major metro on the U.S. mainland in IECC climate zone 1A — the hottest and most humid designation in the country. Cooling runs close to year-round, which is why air conditioning typically dominates a Miami-Dade electric bill rather than heating.',
      housing:
        'A large share of the county\'s single-family housing was built between the 1950s and the 1980s, before modern attic insulation and impact-window standards. Homes from that era commonly have R-11 to R-19 attic insulation where current Florida code calls for substantially more, and single-pane aluminum-frame windows that conduct heat directly into conditioned space.',
      utility:
        'Nearly all of Miami-Dade is served by Florida Power & Light. Because FPL bills are heavily cooling-weighted, upgrades that cut cooling load — attic insulation, duct sealing, high-SEER2 heat pumps, and solar-control glazing — tend to move the bill more here than in northern Florida.',
      why:
        'Coastal salt air also shortens outdoor HVAC condenser life across Miami-Dade, so equipment replacement cycles arrive sooner than the national average. Financing a replacement before a failure usually costs less than an emergency swap.',
    },
    es: {
      intro:
        'Miami-Dade es el condado más poblado de Florida y el único gran centro urbano de la parte continental de EE. UU. en la zona climática 1A del IECC, la designación más calurosa y húmeda del país. La refrigeración funciona casi todo el año, por lo que el aire acondicionado suele dominar la factura eléctrica en Miami-Dade en lugar de la calefacción.',
      housing:
        'Gran parte de las viviendas unifamiliares del condado se construyeron entre las décadas de 1950 y 1980, antes de las normas modernas de aislamiento de áticos y ventanas de impacto. Las casas de esa época suelen tener aislamiento de ático de R-11 a R-19, cuando el código actual de Florida exige bastante más, además de ventanas de un solo vidrio con marco de aluminio que transmiten el calor directamente al espacio climatizado.',
      utility:
        'Casi todo Miami-Dade recibe servicio de Florida Power & Light. Como las facturas de FPL están muy cargadas hacia la refrigeración, las mejoras que reducen la carga de enfriamiento — aislamiento del ático, sellado de conductos, bombas de calor de alto SEER2 y vidrios de control solar — suelen tener más impacto aquí que en el norte de Florida.',
      why:
        'El aire salino de la costa también acorta la vida útil de los condensadores exteriores de aire acondicionado en Miami-Dade, por lo que los ciclos de reemplazo llegan antes que el promedio nacional. Financiar un reemplazo antes de una falla suele costar menos que un cambio de emergencia.',
    },
  },
  {
    id: 'broward',
    slug: { en: 'broward-county', es: 'condado-broward' },
    name: { en: 'Broward County', es: 'Condado de Broward' },
    shortName: { en: 'Broward', es: 'Broward' },
    seat: 'Fort Lauderdale',
    region: { en: 'South Florida', es: 'Sur de Florida' },
    utilities: ['Florida Power & Light (FPL)'],
    population: '1.9 million',
    climateZone: '1A',
    summerHigh: '91°F',
    cities: ['Fort Lauderdale', 'Hollywood', 'Pembroke Pines', 'Coral Springs', 'Miramar', 'Davie'],
    en: {
      intro:
        'Broward County sits in IECC climate zone 1A alongside Miami-Dade, with roughly 1.9 million residents concentrated in a narrow, densely built coastal corridor between the Atlantic and the Everglades conservation area.',
      housing:
        'Broward grew explosively in the 1970s and 1980s, and much of that housing stock is now at the point where original HVAC systems, water heaters, and windows have been replaced once and are due again. The county also has an unusually high share of low-slung single-story homes with large, sun-exposed roof areas — a favorable profile for both attic insulation work and rooftop solar.',
      utility:
        'Florida Power & Light serves the county. Broward\'s combination of high cooling degree days and large per-home roof area means solar and envelope upgrades often pencil out together rather than as separate decisions.',
      why:
        'Because Broward is a coastal wind-borne-debris region, window and door replacements must meet impact standards. That raises project cost relative to inland Florida — which is precisely where $0-down financing changes whether the work happens at all.',
    },
    es: {
      intro:
        'El condado de Broward se encuentra en la zona climática 1A del IECC junto con Miami-Dade, con aproximadamente 1.9 millones de residentes concentrados en un corredor costero estrecho y densamente construido entre el Atlántico y el área de conservación de los Everglades.',
      housing:
        'Broward creció de forma explosiva en las décadas de 1970 y 1980, y gran parte de esa vivienda ya llegó al punto en que los sistemas de aire acondicionado, calentadores de agua y ventanas originales se reemplazaron una vez y necesitan reemplazo otra vez. El condado también tiene una proporción inusualmente alta de casas de una sola planta con techos amplios y expuestos al sol, un perfil favorable tanto para el aislamiento del ático como para la energía solar en el techo.',
      utility:
        'Florida Power & Light presta servicio en el condado. La combinación en Broward de muchos grados-día de refrigeración y una gran superficie de techo por vivienda hace que las mejoras solares y de envolvente a menudo tengan sentido en conjunto y no como decisiones separadas.',
      why:
        'Como Broward es una región costera de escombros arrastrados por el viento, los reemplazos de ventanas y puertas deben cumplir normas de impacto. Eso eleva el costo del proyecto en comparación con el interior de Florida, y es justo ahí donde el financiamiento sin pago inicial decide si el trabajo se hace o no.',
    },
  },
  {
    id: 'palm-beach',
    slug: { en: 'palm-beach-county', es: 'condado-palm-beach' },
    name: { en: 'Palm Beach County', es: 'Condado de Palm Beach' },
    shortName: { en: 'Palm Beach', es: 'Palm Beach' },
    seat: 'West Palm Beach',
    region: { en: 'South Florida', es: 'Sur de Florida' },
    utilities: ['Florida Power & Light (FPL)', 'Lake Worth Beach Electric Utility'],
    population: '1.5 million',
    climateZone: '2A',
    summerHigh: '91°F',
    cities: ['West Palm Beach', 'Boca Raton', 'Boynton Beach', 'Delray Beach', 'Jupiter', 'Wellington'],
    en: {
      intro:
        'Palm Beach is Florida\'s largest county by land area and spans a wide range of housing types — dense coastal condominiums in Boca Raton and Delray Beach, sprawling suburban subdivisions in Wellington and Royal Palm Beach, and agricultural communities inland around Belle Glade.',
      housing:
        'That spread matters for energy work: a 1980s Boynton Beach ranch, a 1990s Wellington two-story, and a 2000s Jupiter build have very different weak points. Older inland homes typically gain the most from insulation and duct sealing, while coastal properties often see bigger returns from glazing and HVAC efficiency.',
      utility:
        'Most of the county is served by Florida Power & Light, with Lake Worth Beach operating its own municipal electric utility. Palm Beach\'s cooling season runs roughly eight to nine months.',
      why:
        'Palm Beach also has a large share of retired homeowners on fixed incomes, for whom a predictable monthly payment matters more than headline project cost — the deferred-first-payment structure exists for exactly that situation.',
    },
    es: {
      intro:
        'Palm Beach es el condado más extenso de Florida y abarca una gran variedad de tipos de vivienda: condominios costeros densos en Boca Ratón y Delray Beach, urbanizaciones suburbanas amplias en Wellington y Royal Palm Beach, y comunidades agrícolas del interior cerca de Belle Glade.',
      housing:
        'Esa diversidad importa para el trabajo energético: una casa de una planta de los años ochenta en Boynton Beach, una de dos pisos de los noventa en Wellington y una construcción de los 2000 en Jupiter tienen puntos débiles muy distintos. Las casas más antiguas del interior suelen beneficiarse más del aislamiento y el sellado de conductos, mientras que las propiedades costeras obtienen mayores retornos con ventanas y eficiencia del aire acondicionado.',
      utility:
        'La mayor parte del condado recibe servicio de Florida Power & Light, y Lake Worth Beach opera su propia empresa eléctrica municipal. La temporada de refrigeración en Palm Beach dura aproximadamente de ocho a nueve meses.',
      why:
        'Palm Beach también tiene una gran proporción de propietarios jubilados con ingresos fijos, para quienes un pago mensual predecible importa más que el costo total del proyecto: la estructura de primer pago diferido existe precisamente para esa situación.',
    },
  },
  {
    id: 'hillsborough',
    slug: { en: 'hillsborough-county', es: 'condado-hillsborough' },
    name: { en: 'Hillsborough County', es: 'Condado de Hillsborough' },
    shortName: { en: 'Hillsborough', es: 'Hillsborough' },
    seat: 'Tampa',
    region: { en: 'Tampa Bay', es: 'Bahía de Tampa' },
    utilities: ['Tampa Electric (TECO)'],
    population: '1.5 million',
    climateZone: '2A',
    summerHigh: '91°F',
    cities: ['Tampa', 'Brandon', 'Riverview', 'Plant City', 'Temple Terrace'],
    en: {
      intro:
        'Hillsborough County anchors the Tampa Bay metro and is one of Florida\'s fastest-growing counties. Its housing mix runs from early-1900s bungalows in Tampa\'s Seminole Heights and Ybor City to 2010s-and-newer construction across Riverview and Apollo Beach.',
      housing:
        'The pre-war and mid-century core of Tampa has some of the least energy-efficient housing in the state: uninsulated walls, minimal attic insulation, and ductwork routed through unconditioned crawl or attic space. These homes routinely lose a meaningful share of conditioned air before it reaches a register, which is why duct sealing is often the highest-return first step here.',
      utility:
        'Tampa Electric serves Hillsborough County. Summer humidity in the Bay area keeps latent cooling load high well into October.',
      why:
        'Hillsborough\'s inland areas run hotter than the coastal counties during summer afternoons because they lack the sea-breeze moderation, so peak-hour cooling demand — and the bill impact of an inefficient system — is often higher than homeowners expect.',
    },
    es: {
      intro:
        'El condado de Hillsborough es el eje del área metropolitana de Tampa Bay y uno de los condados de más rápido crecimiento en Florida. Su mezcla de viviendas va desde bungalós de principios del siglo XX en Seminole Heights y Ybor City hasta construcciones de la década de 2010 en adelante en Riverview y Apollo Beach.',
      housing:
        'El núcleo antiguo y de mediados de siglo de Tampa tiene algunas de las viviendas menos eficientes del estado: paredes sin aislamiento, poco aislamiento en el ático y conductos que pasan por espacios sin climatizar. Estas casas pierden habitualmente una parte importante del aire acondicionado antes de que llegue a las rejillas, por lo que sellar los conductos suele ser el primer paso de mayor retorno.',
      utility:
        'Tampa Electric presta servicio en el condado de Hillsborough. La humedad del verano en la bahía mantiene alta la carga de refrigeración latente hasta bien entrado octubre.',
      why:
        'Las zonas del interior de Hillsborough se calientan más que los condados costeros durante las tardes de verano porque no tienen la moderación de la brisa marina, así que la demanda de refrigeración en horas pico — y el impacto en la factura de un sistema ineficiente — suele ser mayor de lo que los propietarios esperan.',
    },
  },
  {
    id: 'orange',
    slug: { en: 'orange-county', es: 'condado-orange' },
    name: { en: 'Orange County', es: 'Condado de Orange' },
    shortName: { en: 'Orange County', es: 'Condado de Orange' },
    seat: 'Orlando',
    region: { en: 'Central Florida', es: 'Florida Central' },
    utilities: ['Orlando Utilities Commission (OUC)', 'Duke Energy Florida'],
    population: '1.4 million',
    climateZone: '2A',
    summerHigh: '92°F',
    cities: ['Orlando', 'Apopka', 'Winter Park', 'Ocoee', 'Winter Garden', 'Maitland'],
    en: {
      intro:
        'Orange County covers Orlando and the surrounding Central Florida suburbs, with roughly 1.4 million residents. Inland location means Orlando records some of the highest summer afternoon temperatures of any major Florida metro — typically around 92°F in July and August.',
      housing:
        'Orange County has an unusually wide construction-era spread. Winter Park and College Park contain substantial pre-1960 housing, while the western corridor through Winter Garden and Horizon West is largely post-2000. Older neighborhoods typically benefit most from envelope work; newer subdivisions more often gain from HVAC efficiency and solar.',
      utility:
        'The City of Orlando and parts of the surrounding area are served by Orlando Utilities Commission, a municipal utility, while Duke Energy Florida serves much of the rest of the county. Which utility serves an address affects net-metering and interconnection specifics for solar.',
      why:
        'Without coastal breeze moderation, Orange County homes carry cooling load later into the evening than coastal counties — a pattern that makes high-efficiency variable-speed equipment more valuable here than a straight SEER2 comparison suggests.',
    },
    es: {
      intro:
        'El condado de Orange abarca Orlando y los suburbios circundantes de Florida Central, con aproximadamente 1.4 millones de residentes. Su ubicación en el interior hace que Orlando registre algunas de las temperaturas más altas de las tardes de verano entre las grandes áreas metropolitanas de Florida, normalmente alrededor de 92°F en julio y agosto.',
      housing:
        'El condado de Orange tiene una distribución de épocas de construcción inusualmente amplia. Winter Park y College Park tienen bastante vivienda anterior a 1960, mientras que el corredor occidental de Winter Garden y Horizon West es en gran parte posterior al año 2000. Los vecindarios antiguos suelen beneficiarse más del trabajo de envolvente; las urbanizaciones nuevas, de la eficiencia del aire acondicionado y de la energía solar.',
      utility:
        'La ciudad de Orlando y parte del área circundante reciben servicio de Orlando Utilities Commission, una empresa municipal, mientras que Duke Energy Florida atiende gran parte del resto del condado. La empresa que atiende una dirección afecta los detalles de medición neta e interconexión para energía solar.',
      why:
        'Sin la moderación de la brisa costera, las casas del condado de Orange mantienen carga de refrigeración hasta más tarde en la noche que los condados costeros, un patrón que hace que los equipos de velocidad variable de alta eficiencia valgan más aquí de lo que sugiere una simple comparación de SEER2.',
    },
  },
  {
    id: 'duval',
    slug: { en: 'duval-county', es: 'condado-duval' },
    name: { en: 'Duval County', es: 'Condado de Duval' },
    shortName: { en: 'Duval', es: 'Duval' },
    seat: 'Jacksonville',
    region: { en: 'Northeast Florida', es: 'Noreste de Florida' },
    utilities: ['JEA'],
    population: '1.0 million',
    climateZone: '2A',
    summerHigh: '92°F',
    cities: ['Jacksonville', 'Jacksonville Beach', 'Neptune Beach', 'Atlantic Beach', 'Baldwin'],
    en: {
      intro:
        'Duval County is coextensive with the consolidated City of Jacksonville and is the northernmost major metro in Florida. That position gives Duval something most of the state does not have: a real heating season.',
      housing:
        'Jacksonville homes regularly see winter lows in the 30s and occasional freezes, so heating cost is a genuine line item rather than a rounding error. Many older Duval homes still run electric resistance strip heat, which is roughly three times as expensive to operate as a modern heat pump for the same delivered warmth. Replacing strip heat is often the single largest available saving in this county.',
      utility:
        'JEA, a municipal utility owned by the City of Jacksonville, serves Duval County. JEA rate structures and solar interconnection rules differ from the investor-owned utilities that serve most of the state.',
      why:
        'Because Duval carries both a meaningful cooling season and a meaningful heating season, heat-pump upgrades here pay back on both ends of the year — a dual benefit that South Florida homes do not get.',
    },
    es: {
      intro:
        'El condado de Duval coincide con la ciudad consolidada de Jacksonville y es la principal área metropolitana más al norte de Florida. Esa posición le da a Duval algo que la mayor parte del estado no tiene: una verdadera temporada de calefacción.',
      housing:
        'Las casas de Jacksonville registran con regularidad mínimas invernales en los 30°F y heladas ocasionales, así que el costo de calefacción es un gasto real y no un detalle menor. Muchas viviendas antiguas de Duval todavía usan calefacción eléctrica de resistencia, que cuesta operar aproximadamente el triple que una bomba de calor moderna para el mismo calor entregado. Reemplazar la calefacción de resistencia suele ser el mayor ahorro disponible en este condado.',
      utility:
        'JEA, una empresa municipal propiedad de la ciudad de Jacksonville, presta servicio en el condado de Duval. Las estructuras tarifarias y las reglas de interconexión solar de JEA se diferencian de las de las empresas privadas que atienden la mayor parte del estado.',
      why:
        'Como Duval tiene tanto una temporada de refrigeración importante como una de calefacción importante, las mejoras con bomba de calor se amortizan en ambos extremos del año, un beneficio doble que las casas del sur de Florida no obtienen.',
    },
  },
  {
    id: 'pinellas',
    slug: { en: 'pinellas-county', es: 'condado-pinellas' },
    name: { en: 'Pinellas County', es: 'Condado de Pinellas' },
    shortName: { en: 'Pinellas', es: 'Pinellas' },
    seat: 'Clearwater',
    region: { en: 'Tampa Bay', es: 'Bahía de Tampa' },
    utilities: ['Duke Energy Florida'],
    population: '960,000',
    climateZone: '2A',
    summerHigh: '90°F',
    cities: ['St. Petersburg', 'Clearwater', 'Largo', 'Pinellas Park', 'Dunedin', 'Palm Harbor'],
    en: {
      intro:
        'Pinellas is the most densely populated county in Florida and, notably, the most built-out — there is very little undeveloped land left. That single fact shapes its entire energy profile.',
      housing:
        'Because Pinellas ran out of room decades ago, its housing stock skews older than fast-growing counties like Polk or Pasco. A large share of St. Petersburg, Largo, and Pinellas Park homes date to the 1950s through 1970s, built to codes with no meaningful insulation requirements. Retrofit work — not new construction — is effectively the only path to efficiency here, which makes Pinellas one of the strongest retrofit markets in the state.',
      utility:
        'Duke Energy Florida serves Pinellas County. The peninsula geography gives Pinellas slightly milder summer highs than inland Hillsborough thanks to Gulf and Bay breezes.',
      why:
        'Pinellas also has a high concentration of older homeowners who have lived in the same property for decades and are running original or first-replacement systems well past their efficient life.',
    },
    es: {
      intro:
        'Pinellas es el condado más densamente poblado de Florida y también el más urbanizado: queda muy poco terreno sin desarrollar. Ese solo hecho define todo su perfil energético.',
      housing:
        'Como Pinellas se quedó sin espacio hace décadas, su parque de viviendas es más antiguo que el de condados en rápido crecimiento como Polk o Pasco. Gran parte de las casas de St. Petersburg, Largo y Pinellas Park datan de las décadas de 1950 a 1970, construidas con códigos sin requisitos reales de aislamiento. El trabajo de modernización, y no la construcción nueva, es prácticamente el único camino hacia la eficiencia aquí, lo que hace de Pinellas uno de los mercados de retrofit más fuertes del estado.',
      utility:
        'Duke Energy Florida presta servicio en el condado de Pinellas. La geografía de península le da a Pinellas máximas de verano algo más suaves que el interior de Hillsborough gracias a las brisas del Golfo y de la bahía.',
      why:
        'Pinellas también tiene una alta concentración de propietarios mayores que llevan décadas en la misma vivienda y operan sistemas originales o de primer reemplazo mucho más allá de su vida útil eficiente.',
    },
  },
  {
    id: 'lee',
    slug: { en: 'lee-county', es: 'condado-lee' },
    name: { en: 'Lee County', es: 'Condado de Lee' },
    shortName: { en: 'Lee County', es: 'Condado de Lee' },
    seat: 'Fort Myers',
    region: { en: 'Southwest Florida', es: 'Suroeste de Florida' },
    utilities: ['Florida Power & Light (FPL)', 'Lee County Electric Cooperative (LCEC)'],
    population: '840,000',
    climateZone: '2A',
    summerHigh: '92°F',
    cities: ['Cape Coral', 'Fort Myers', 'Lehigh Acres', 'Bonita Springs', 'Estero', 'Sanibel'],
    en: {
      intro:
        'Lee County covers Fort Myers, Cape Coral, and the Southwest Florida Gulf coast. Cape Coral alone is one of the largest cities in the state by land area, built on an extensive canal system with a housing pattern unlike anywhere else in Florida.',
      housing:
        'Lee County took a direct hit from Hurricane Ian in September 2022, and large parts of the county have been in active repair and rebuild ever since. That created an unusual situation: many homeowners are already replacing roofs, windows, and mechanical systems, which is the lowest-cost moment to upgrade efficiency rather than replace like-for-like.',
      utility:
        'Lee County is split between Florida Power & Light and Lee County Electric Cooperative, a member-owned cooperative serving Cape Coral, Sanibel, and parts of North Fort Myers. Cooperative and investor-owned utilities have different solar interconnection processes.',
      why:
        'Lehigh Acres and inland Lee also contain a large stock of modest 1970s–1990s homes where attic insulation and duct sealing remain the highest-return improvements available.',
    },
    es: {
      intro:
        'El condado de Lee abarca Fort Myers, Cape Coral y la costa del Golfo del suroeste de Florida. Cape Coral por sí sola es una de las ciudades más extensas del estado, construida sobre un amplio sistema de canales con un patrón de vivienda distinto a cualquier otro lugar de Florida.',
      housing:
        'El condado de Lee recibió el impacto directo del huracán Ian en septiembre de 2022, y gran parte del condado ha estado en reparación y reconstrucción activa desde entonces. Eso creó una situación poco común: muchos propietarios ya están reemplazando techos, ventanas y sistemas mecánicos, que es el momento de menor costo para mejorar la eficiencia en lugar de reemplazar por lo mismo.',
      utility:
        'El condado de Lee se reparte entre Florida Power & Light y Lee County Electric Cooperative, una cooperativa de miembros que atiende Cape Coral, Sanibel y partes del norte de Fort Myers. Las cooperativas y las empresas privadas tienen procesos de interconexión solar diferentes.',
      why:
        'Lehigh Acres y el interior de Lee también tienen una gran cantidad de casas modestas de los años setenta a noventa, donde el aislamiento del ático y el sellado de conductos siguen siendo las mejoras de mayor retorno disponibles.',
    },
  },
  {
    id: 'polk',
    slug: { en: 'polk-county', es: 'condado-polk' },
    name: { en: 'Polk County', es: 'Condado de Polk' },
    shortName: { en: 'Polk', es: 'Polk' },
    seat: 'Bartow',
    region: { en: 'Central Florida', es: 'Florida Central' },
    utilities: ['Duke Energy Florida', 'Lakeland Electric', 'Tampa Electric (TECO)'],
    population: '810,000',
    climateZone: '2A',
    summerHigh: '92°F',
    cities: ['Lakeland', 'Winter Haven', 'Bartow', 'Haines City', 'Davenport', 'Auburndale'],
    en: {
      intro:
        'Polk County sits between the Tampa and Orlando metros along the I-4 corridor and has been one of the fastest-growing counties in the United States. Its county seat is Bartow; Lakeland is its largest city.',
      housing:
        'Polk\'s growth has produced a split housing market. New subdivisions around Davenport and Haines City are built to current Florida energy code, while Lakeland, Winter Haven, and Bartow retain substantial mid-century and older stock — including a notable number of homes with original single-pane windows and under-insulated attics.',
      utility:
        'Polk is served by three different electric providers depending on address: Duke Energy Florida across most of the county, Lakeland Electric as a municipal utility inside Lakeland, and Tampa Electric in western areas. Homeowners should confirm their provider before assuming any utility-specific process applies.',
      why:
        'As a fully inland county, Polk gets no coastal breeze relief. Summer afternoon highs around 92°F combined with older housing make cooling cost a persistent burden in the county\'s established neighborhoods.',
    },
    es: {
      intro:
        'El condado de Polk se ubica entre las áreas metropolitanas de Tampa y Orlando a lo largo del corredor I-4 y ha sido uno de los condados de más rápido crecimiento de Estados Unidos. Su sede es Bartow; Lakeland es su ciudad más grande.',
      housing:
        'El crecimiento de Polk ha producido un mercado de vivienda dividido. Las urbanizaciones nuevas cerca de Davenport y Haines City se construyen bajo el código energético vigente de Florida, mientras que Lakeland, Winter Haven y Bartow conservan bastante vivienda de mediados de siglo y anterior, incluyendo un número notable de casas con ventanas originales de un solo vidrio y áticos poco aislados.',
      utility:
        'Polk recibe servicio de tres proveedores eléctricos distintos según la dirección: Duke Energy Florida en la mayor parte del condado, Lakeland Electric como empresa municipal dentro de Lakeland, y Tampa Electric en las zonas occidentales. Conviene confirmar el proveedor antes de suponer que aplica algún proceso específico de una empresa.',
      why:
        'Al ser un condado totalmente interior, Polk no recibe alivio de la brisa costera. Máximas de tarde de verano cercanas a 92°F combinadas con vivienda antigua hacen que el costo de refrigeración sea una carga constante en los vecindarios establecidos del condado.',
    },
  },
  {
    id: 'brevard',
    slug: { en: 'brevard-county', es: 'condado-brevard' },
    name: { en: 'Brevard County', es: 'Condado de Brevard' },
    shortName: { en: 'Brevard', es: 'Brevard' },
    seat: 'Titusville',
    region: { en: 'Space Coast', es: 'Costa Espacial' },
    utilities: ['Florida Power & Light (FPL)'],
    population: '630,000',
    climateZone: '2A',
    summerHigh: '90°F',
    cities: ['Palm Bay', 'Melbourne', 'Titusville', 'Rockledge', 'Cocoa', 'Merritt Island'],
    en: {
      intro:
        'Brevard County runs along Florida\'s Space Coast, a narrow barrier-island and mainland strip stretching roughly 70 miles from Titusville south to Palm Bay. Nearly the entire county is within a few miles of salt water.',
      housing:
        'Brevard expanded rapidly during the Apollo era, leaving a concentrated band of 1960s and 1970s housing around Cocoa, Rockledge, and Merritt Island. Homes from that period were built well before Florida had meaningful residential energy code, and many still have their original attic insulation depth.',
      utility:
        'Florida Power & Light serves Brevard County.',
      why:
        'Constant salt exposure is the defining maintenance factor here. Outdoor condenser coils corrode faster in Brevard than in inland counties, which shortens equipment life and quietly degrades efficiency years before outright failure. Homeowners often run a badly degraded system for several summers without realizing it — replacing it is where the saving actually comes from.',
    },
    es: {
      intro:
        'El condado de Brevard se extiende a lo largo de la Costa Espacial de Florida, una franja estrecha de islas de barrera y tierra firme de unas 70 millas desde Titusville hasta Palm Bay. Casi todo el condado está a pocas millas del agua salada.',
      housing:
        'Brevard se expandió rápidamente durante la era Apolo, dejando una banda concentrada de viviendas de las décadas de 1960 y 1970 alrededor de Cocoa, Rockledge y Merritt Island. Las casas de ese período se construyeron mucho antes de que Florida tuviera un código energético residencial significativo, y muchas conservan su aislamiento de ático original.',
      utility:
        'Florida Power & Light presta servicio en el condado de Brevard.',
      why:
        'La exposición constante a la sal es el factor de mantenimiento determinante aquí. Los serpentines de los condensadores exteriores se corroen más rápido en Brevard que en los condados del interior, lo que acorta la vida del equipo y degrada silenciosamente la eficiencia años antes de una falla total. Los propietarios a menudo operan un sistema muy deteriorado durante varios veranos sin darse cuenta; reemplazarlo es de donde realmente proviene el ahorro.',
    },
  },
  {
    id: 'volusia',
    slug: { en: 'volusia-county', es: 'condado-volusia' },
    name: { en: 'Volusia County', es: 'Condado de Volusia' },
    shortName: { en: 'Volusia', es: 'Volusia' },
    seat: 'DeLand',
    region: { en: 'Central Florida', es: 'Florida Central' },
    utilities: ['Florida Power & Light (FPL)', 'Duke Energy Florida'],
    population: '580,000',
    climateZone: '2A',
    summerHigh: '91°F',
    cities: ['Deltona', 'Daytona Beach', 'Port Orange', 'Ormond Beach', 'DeLand', 'New Smyrna Beach'],
    en: {
      intro:
        'Volusia County covers the Daytona Beach area and stretches inland to DeLand and Deltona. Its county seat is DeLand, though Deltona and Daytona Beach are larger.',
      housing:
        'Deltona is one of Florida\'s largest planned developments from the 1960s, and much of its housing is original to that build-out — modest concrete-block homes with the insulation and window specifications of the period. Along the coast, Daytona Beach and Ormond Beach contain a mix of older beachside cottages and mid-rise condominiums.',
      utility:
        'Volusia is split between Florida Power & Light and Duke Energy Florida depending on location, so the applicable interconnection and rate details vary by address within the same county.',
      why:
        'Volusia sits far enough north that winter nights get genuinely cold by Florida standards, giving heat-pump replacements a modest heating-season benefit on top of the primary cooling-season saving.',
    },
    es: {
      intro:
        'El condado de Volusia abarca el área de Daytona Beach y se extiende hacia el interior hasta DeLand y Deltona. Su sede es DeLand, aunque Deltona y Daytona Beach son más grandes.',
      housing:
        'Deltona es uno de los desarrollos planificados más grandes de Florida de la década de 1960, y gran parte de su vivienda es original de esa construcción: casas modestas de bloque de concreto con las especificaciones de aislamiento y ventanas de la época. En la costa, Daytona Beach y Ormond Beach tienen una mezcla de casas de playa antiguas y condominios de mediana altura.',
      utility:
        'Volusia se reparte entre Florida Power & Light y Duke Energy Florida según la ubicación, así que los detalles de interconexión y tarifas varían por dirección dentro del mismo condado.',
      why:
        'Volusia está lo bastante al norte como para que las noches de invierno sean realmente frías para los estándares de Florida, lo que da a los reemplazos con bomba de calor un beneficio adicional en la temporada de calefacción además del ahorro principal en refrigeración.',
    },
  },
  {
    id: 'pasco',
    slug: { en: 'pasco-county', es: 'condado-pasco' },
    name: { en: 'Pasco County', es: 'Condado de Pasco' },
    shortName: { en: 'Pasco', es: 'Pasco' },
    seat: 'Dade City',
    region: { en: 'Tampa Bay', es: 'Bahía de Tampa' },
    utilities: ['Duke Energy Florida', 'Withlacoochee River Electric Cooperative'],
    population: '620,000',
    climateZone: '2A',
    summerHigh: '92°F',
    cities: ['New Port Richey', 'Wesley Chapel', 'Land O\' Lakes', 'Zephyrhills', 'Dade City', 'Hudson'],
    en: {
      intro:
        'Pasco County sits directly north of Hillsborough and Pinellas and has absorbed much of the Tampa Bay area\'s outward growth. Dade City is the county seat; Wesley Chapel and New Port Richey are its main population centers.',
      housing:
        'Pasco contains two very different housing markets. West Pasco — Hudson, Port Richey, New Port Richey — has a dense concentration of 1970s and 1980s retirement-community housing, much of it small, single-story, and never substantially updated. East Pasco around Wesley Chapel is dominated by post-2000 construction. The western half is where retrofit work typically produces the largest bill change.',
      utility:
        'Duke Energy Florida serves most of Pasco, with Withlacoochee River Electric Cooperative covering rural eastern and northern portions of the county.',
      why:
        'Pasco\'s older west-side communities also have a high share of fixed-income homeowners, where the practical barrier to an HVAC or insulation upgrade is upfront cost rather than willingness — the case $0-down structures are designed for.',
    },
    es: {
      intro:
        'El condado de Pasco se ubica justo al norte de Hillsborough y Pinellas y ha absorbido gran parte del crecimiento hacia afuera del área de Tampa Bay. Dade City es la sede del condado; Wesley Chapel y New Port Richey son sus principales centros de población.',
      housing:
        'Pasco contiene dos mercados de vivienda muy distintos. El oeste de Pasco — Hudson, Port Richey, New Port Richey — tiene una alta concentración de viviendas de comunidades de retiro de los años setenta y ochenta, en su mayoría pequeñas, de una planta y nunca actualizadas de forma significativa. El este de Pasco, alrededor de Wesley Chapel, está dominado por construcción posterior al año 2000. La mitad occidental es donde el trabajo de modernización suele producir el mayor cambio en la factura.',
      utility:
        'Duke Energy Florida atiende la mayor parte de Pasco, y Withlacoochee River Electric Cooperative cubre las zonas rurales del este y el norte del condado.',
      why:
        'Las comunidades más antiguas del oeste de Pasco también tienen una alta proporción de propietarios con ingresos fijos, donde la barrera práctica para mejorar el aire acondicionado o el aislamiento es el costo inicial y no la disposición: justamente el caso para el que se diseñaron las estructuras sin pago inicial.',
    },
  },
];

export function findCountyBySlug(slug, lang) {
  return counties.find((c) => c.slug[lang] === slug) || null;
}

export function findCountyById(id) {
  return counties.find((c) => c.id === id) || null;
}
