/**
 * Privacy policy and terms of service content, EN + ES.
 *
 * Written against what the code actually does — the exact form fields in
 * ContactForm.js, the advertising parameters captured in lib/attribution.js
 * (including the localStorage key), and the processors actually in use
 * (Netlify Forms, Google Tag Manager, Google Analytics, Google Ads).
 *
 * If you change what the form collects, what you store, or who you share it
 * with, change the corresponding section here in the same commit. A privacy
 * policy that describes different behaviour from the code is the single most
 * common source of enforcement exposure for a site like this.
 *
 * Block types rendered by pages/LegalPage.js: 'p', 'ul', 'table'.
 */

const privacyEn = {
  title: 'Privacy Policy',
  intro:
    'This policy explains what information Florida Energy Assistance collects when you use this website, how we use it, who we share it with, and the choices you have. It applies to floridaenergyassistance.com and to the eligibility form on this site.',
  sections: [
    {
      h: 'Who we are',
      blocks: [
        {
          type: 'p',
          text: 'Florida Energy Assistance is a private company that helps Florida homeowners identify and access home energy upgrade financing and grant programs. We are not a lender, a contractor, or an installer.',
        },
      ],
    },
    {
      h: 'Information you give us',
      blocks: [
        { type: 'p', text: 'When you submit the eligibility form, we collect:' },
        {
          type: 'ul',
          items: [
            'Your full name',
            'Your email address',
            'Your phone number',
            'Your Florida ZIP code',
            'The program you are interested in',
            'Any project details you choose to add in the optional message field',
          ],
        },
        {
          type: 'p',
          text: 'The message field is optional and free-form. Please do not enter Social Security numbers, financial account numbers, or other sensitive identifiers there. We do not ask for them and do not need them to check eligibility.',
        },
      ],
    },
    {
      h: 'Information we collect automatically',
      blocks: [
        {
          type: 'p',
          text: 'When you visit the site, we and our analytics providers may collect your IP address, browser and device type, the pages you view, the time and date of your visit, and the page or advertisement that referred you.',
        },
        {
          type: 'p',
          text: 'If you arrive from an advertisement, we record the campaign identifiers contained in the link. These include Google click identifiers (gclid, wbraid, gbraid), Microsoft (msclkid), Meta (fbclid), TikTok (ttclid), and standard UTM campaign parameters. We store these in your browser under the key fea_attribution and submit them with your form so we can tell which advertising produced your inquiry. We keep both the first campaign that brought you to the site and the most recent one.',
        },
      ],
    },
    {
      h: 'How we use your information',
      blocks: [
        {
          type: 'ul',
          items: [
            'To review your eligibility and identify which program fits your project',
            'To contact you about your inquiry by phone, text message, and email',
            'To connect you with participating program providers, lenders, and contractors',
            'To measure which marketing campaigns produce inquiries, and to improve them',
            'To operate, secure, and improve the website',
            'To comply with legal obligations and enforce our terms',
          ],
        },
      ],
    },
    {
      h: 'Who we share it with',
      blocks: [
        {
          type: 'p',
          text: 'Connecting you with providers is the service we perform, so sharing your inquiry is central to how this site works. We share the information you submit with:',
        },
        {
          type: 'ul',
          items: [
            'Participating program providers, lenders, and contractors who evaluate your eligibility and may contact you about your project. They may receive consideration for the referral, and under some state privacy laws that arrangement is treated as a sale or sharing of personal information. You can opt out — see "Your rights and choices" below.',
            'Service providers who operate the site on our behalf: Netlify (website hosting and form processing) and Google (Tag Manager, Analytics, and Ads).',
            'Legal recipients, where required by law, subpoena, or court order, or to protect our rights, safety, or property.',
            'A successor entity, in connection with a merger, acquisition, or sale of assets.',
          ],
        },
        {
          type: 'p',
          text: 'We do not share your information with unrelated third parties for their own independent marketing.',
        },
      ],
    },
    {
      h: 'Cookies and tracking',
      blocks: [
        {
          type: 'p',
          text: 'We use Google Tag Manager to load Google Analytics and Google Ads tags. These set cookies that help us understand how the site is used and measure advertising performance. We also use your browser\'s local storage to retain the campaign parameters described above.',
        },
        {
          type: 'p',
          text: 'You can block or delete cookies through your browser settings, and you can opt out of Google Analytics using Google\'s browser add-on. Clearing your browser storage removes the campaign identifiers we have kept. Blocking these does not prevent you from using the site or submitting the form.',
        },
      ],
    },
    {
      h: 'Calls, texts, and email',
      blocks: [
        {
          type: 'p',
          text: 'When you submit the form, you consent to be contacted at the phone number and email address you provide, including by automatic telephone dialing system, prerecorded or artificial voice, and text message. Consent is not a condition of any purchase. Message and data rates may apply.',
        },
        {
          type: 'p',
          text: 'You can stop text messages at any time by replying STOP, stop marketing email by using the unsubscribe link, and withdraw consent for calls by telling us during any call or by contacting us using the details below.',
        },
      ],
    },
    {
      h: 'Your rights and choices',
      blocks: [
        {
          type: 'p',
          text: 'Under the Florida Digital Bill of Rights and comparable laws in other states, you may have the right to request access to the personal information we hold about you, request correction or deletion of it, obtain a portable copy, and opt out of the sale or sharing of your personal information and of targeted advertising.',
        },
        {
          type: 'p',
          text: 'To exercise any of these rights, or to opt out of the sale or sharing of your personal information, call 866-627-9518 or write to us using the contact details below. We will not discriminate against you for exercising a privacy right. If we decline a request, you may ask us to reconsider.',
        },
      ],
    },
    {
      h: 'How long we keep it',
      blocks: [
        {
          type: 'p',
          text: 'We keep inquiry records for as long as needed to serve your request and to meet our legal, accounting, and reporting obligations, after which we delete them or render them anonymous. You may ask us to delete your information sooner, subject to those obligations.',
        },
      ],
    },
    {
      h: 'Security',
      blocks: [
        {
          type: 'p',
          text: 'This site is served over HTTPS and form submissions are transmitted encrypted. We restrict access to inquiry data to people who need it to do their work. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        },
      ],
    },
    {
      h: 'Children',
      blocks: [
        {
          type: 'p',
          text: 'This site is intended for Florida homeowners aged 18 and over. It is not directed to children, and we do not knowingly collect personal information from anyone under 18. If you believe a child has provided us information, contact us and we will delete it.',
        },
      ],
    },
    {
      h: 'Other websites',
      blocks: [
        {
          type: 'p',
          text: 'If you are referred to a provider, lender, or contractor, their own privacy policy governs the information you give them. We are not responsible for how other organizations handle your information.',
        },
      ],
    },
    {
      h: 'Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this policy as our practices or the law change. The date at the top of this page shows when it was last revised. Material changes take effect when posted here.',
        },
      ],
    },
    {
      h: 'Contact us',
      blocks: [
        {
          type: 'p',
          text: 'For any privacy question or request, call 866-627-9518, Monday through Friday, 9 AM to 6 PM Eastern.',
        },
      ],
    },
  ],
};

const privacyEs = {
  title: 'Política de Privacidad',
  intro:
    'Esta política explica qué información recopila Florida Energy Assistance cuando usted usa este sitio web, cómo la usamos, con quién la compartimos y qué opciones tiene. Se aplica a floridaenergyassistance.com y al formulario de elegibilidad de este sitio.',
  sections: [
    {
      h: 'Quiénes somos',
      blocks: [
        {
          type: 'p',
          text: 'Florida Energy Assistance es una empresa privada que ayuda a los propietarios de vivienda en Florida a identificar y acceder a financiamiento y programas de subvención para mejoras energéticas del hogar. No somos un prestamista, un contratista ni un instalador.',
        },
      ],
    },
    {
      h: 'Información que usted nos proporciona',
      blocks: [
        { type: 'p', text: 'Cuando envía el formulario de elegibilidad, recopilamos:' },
        {
          type: 'ul',
          items: [
            'Su nombre completo',
            'Su correo electrónico',
            'Su número de teléfono',
            'Su código postal de Florida',
            'El programa que le interesa',
            'Cualquier detalle del proyecto que decida agregar en el campo opcional de mensaje',
          ],
        },
        {
          type: 'p',
          text: 'El campo de mensaje es opcional y de texto libre. Por favor no ingrese números de Seguro Social, números de cuentas financieras u otros identificadores delicados. No los solicitamos y no los necesitamos para verificar la elegibilidad.',
        },
      ],
    },
    {
      h: 'Información que recopilamos automáticamente',
      blocks: [
        {
          type: 'p',
          text: 'Cuando visita el sitio, nosotros y nuestros proveedores de analítica podemos recopilar su dirección IP, el tipo de navegador y dispositivo, las páginas que ve, la hora y fecha de su visita, y la página o el anuncio que lo remitió.',
        },
        {
          type: 'p',
          text: 'Si llega desde un anuncio, registramos los identificadores de campaña contenidos en el enlace. Estos incluyen identificadores de clic de Google (gclid, wbraid, gbraid), Microsoft (msclkid), Meta (fbclid), TikTok (ttclid) y los parámetros de campaña UTM estándar. Los guardamos en su navegador bajo la clave fea_attribution y los enviamos junto con su formulario para saber qué publicidad generó su consulta. Conservamos tanto la primera campaña que lo trajo al sitio como la más reciente.',
        },
      ],
    },
    {
      h: 'Cómo usamos su información',
      blocks: [
        {
          type: 'ul',
          items: [
            'Para revisar su elegibilidad e identificar qué programa se ajusta a su proyecto',
            'Para comunicarnos con usted sobre su consulta por teléfono, mensaje de texto y correo electrónico',
            'Para conectarlo con proveedores de programas, prestamistas y contratistas participantes',
            'Para medir qué campañas de marketing generan consultas y mejorarlas',
            'Para operar, proteger y mejorar el sitio web',
            'Para cumplir con obligaciones legales y hacer valer nuestros términos',
          ],
        },
      ],
    },
    {
      h: 'Con quién la compartimos',
      blocks: [
        {
          type: 'p',
          text: 'Conectarlo con proveedores es el servicio que prestamos, así que compartir su consulta es esencial para el funcionamiento de este sitio. Compartimos la información que usted envía con:',
        },
        {
          type: 'ul',
          items: [
            'Proveedores de programas, prestamistas y contratistas participantes que evalúan su elegibilidad y pueden comunicarse con usted sobre su proyecto. Pueden recibir una contraprestación por la referencia y, según algunas leyes estatales de privacidad, ese arreglo se considera una venta o divulgación de información personal. Usted puede optar por excluirse; consulte "Sus derechos y opciones" más abajo.',
            'Proveedores de servicios que operan el sitio en nuestro nombre: Netlify (alojamiento del sitio y procesamiento de formularios) y Google (Tag Manager, Analytics y Ads).',
            'Destinatarios legales, cuando lo exija la ley, una citación o una orden judicial, o para proteger nuestros derechos, seguridad o propiedad.',
            'Una entidad sucesora, en relación con una fusión, adquisición o venta de activos.',
          ],
        },
        {
          type: 'p',
          text: 'No compartimos su información con terceros no relacionados para su propio marketing independiente.',
        },
      ],
    },
    {
      h: 'Cookies y rastreo',
      blocks: [
        {
          type: 'p',
          text: 'Usamos Google Tag Manager para cargar las etiquetas de Google Analytics y Google Ads. Estas colocan cookies que nos ayudan a entender cómo se usa el sitio y a medir el rendimiento publicitario. También usamos el almacenamiento local de su navegador para conservar los parámetros de campaña descritos arriba.',
        },
        {
          type: 'p',
          text: 'Puede bloquear o eliminar cookies desde la configuración de su navegador, y puede excluirse de Google Analytics con el complemento de navegador de Google. Borrar el almacenamiento de su navegador elimina los identificadores de campaña que hayamos conservado. Bloquearlos no le impide usar el sitio ni enviar el formulario.',
        },
      ],
    },
    {
      h: 'Llamadas, mensajes de texto y correo electrónico',
      blocks: [
        {
          type: 'p',
          text: 'Al enviar el formulario, usted acepta ser contactado en el número de teléfono y el correo electrónico que proporcione, incluso mediante sistema de marcación telefónica automática, voz pregrabada o artificial, y mensaje de texto. El consentimiento no es condición para ninguna compra. Pueden aplicarse tarifas de mensajes y datos.',
        },
        {
          type: 'p',
          text: 'Puede detener los mensajes de texto en cualquier momento respondiendo STOP, cancelar los correos de marketing con el enlace para darse de baja, y retirar el consentimiento para llamadas indicándolo durante cualquier llamada o comunicándose con nosotros a los datos que aparecen abajo.',
        },
      ],
    },
    {
      h: 'Sus derechos y opciones',
      blocks: [
        {
          type: 'p',
          text: 'Conforme a la Carta de Derechos Digitales de Florida y a leyes comparables de otros estados, usted puede tener derecho a solicitar acceso a la información personal que tenemos sobre usted, solicitar su corrección o eliminación, obtener una copia portátil, y excluirse de la venta o divulgación de su información personal y de la publicidad dirigida.',
        },
        {
          type: 'p',
          text: 'Para ejercer cualquiera de estos derechos, o para excluirse de la venta o divulgación de su información personal, llame al 866-627-9518 o escríbanos a los datos de contacto que aparecen abajo. No lo discriminaremos por ejercer un derecho de privacidad. Si rechazamos una solicitud, puede pedirnos que la reconsideremos.',
        },
      ],
    },
    {
      h: 'Cuánto tiempo la conservamos',
      blocks: [
        {
          type: 'p',
          text: 'Conservamos los registros de consultas durante el tiempo necesario para atender su solicitud y cumplir con nuestras obligaciones legales, contables y de reporte, tras lo cual los eliminamos o los volvemos anónimos. Puede pedirnos que eliminemos su información antes, sujeto a esas obligaciones.',
        },
      ],
    },
    {
      h: 'Seguridad',
      blocks: [
        {
          type: 'p',
          text: 'Este sitio se sirve mediante HTTPS y los envíos del formulario se transmiten cifrados. Restringimos el acceso a los datos de consultas a las personas que los necesitan para su trabajo. Ningún método de transmisión o almacenamiento es completamente seguro, y no podemos garantizar seguridad absoluta.',
        },
      ],
    },
    {
      h: 'Menores de edad',
      blocks: [
        {
          type: 'p',
          text: 'Este sitio está dirigido a propietarios de vivienda en Florida de 18 años o más. No está dirigido a menores y no recopilamos a sabiendas información personal de personas menores de 18 años. Si cree que un menor nos ha proporcionado información, comuníquese con nosotros y la eliminaremos.',
        },
      ],
    },
    {
      h: 'Otros sitios web',
      blocks: [
        {
          type: 'p',
          text: 'Si se le remite a un proveedor, prestamista o contratista, su propia política de privacidad rige la información que usted les entregue. No somos responsables de cómo otras organizaciones manejan su información.',
        },
      ],
    },
    {
      h: 'Cambios a esta política',
      blocks: [
        {
          type: 'p',
          text: 'Podemos actualizar esta política a medida que cambien nuestras prácticas o la ley. La fecha en la parte superior de esta página indica cuándo se revisó por última vez. Los cambios importantes entran en vigor al publicarse aquí.',
        },
      ],
    },
    {
      h: 'Contáctenos',
      blocks: [
        {
          type: 'p',
          text: 'Para cualquier pregunta o solicitud sobre privacidad, llame al 866-627-9518, de lunes a viernes de 9 AM a 6 PM hora del Este.',
        },
      ],
    },
  ],
};

const termsEn = {
  title: 'Terms of Service',
  intro:
    'These terms govern your use of floridaenergyassistance.com. By using this site or submitting the eligibility form, you agree to them. If you do not agree, please do not use the site.',
  sections: [
    {
      h: 'What we do',
      blocks: [
        {
          type: 'p',
          text: 'Florida Energy Assistance helps Florida homeowners identify and access home energy upgrade financing and grant programs, and connects them with participating providers. We provide a referral and eligibility-matching service.',
        },
        { type: 'p', text: 'We want to be precise about what we are not:' },
        {
          type: 'ul',
          items: [
            'We are not a lender, and we do not make credit decisions.',
            'We are not a contractor or installer, and we do not perform the work.',
            'We do not provide legal, tax, financial, or engineering advice.',
          ],
        },
      ],
    },
    {
      h: 'Who can use this site',
      blocks: [
        {
          type: 'p',
          text: 'The programs described here are available to homeowners aged 18 or over who own a property located in Florida. Renters and owners of property outside Florida are not eligible. By submitting the form you confirm that you meet these conditions and that the information you provide is accurate and belongs to you.',
        },
      ],
    },
    {
      h: 'No guarantee of approval',
      blocks: [
        {
          type: 'p',
          text: 'Submitting the eligibility form is an inquiry, not an application for credit and not an offer. Nothing on this site is a commitment to lend, to award grant funds, or to perform work.',
        },
        {
          type: 'p',
          text: 'The funding amounts, grant amounts, and payment deferral periods shown are program maximums and typical terms. The amount you may receive, and whether you qualify at all, depend on your circumstances, the scope of your project, and the criteria and decision of the provider. Program availability and terms can change without notice, and funding may be limited.',
        },
      ],
    },
    {
      h: 'Consent to be contacted',
      blocks: [
        {
          type: 'p',
          text: 'By submitting the form, you give your express written consent for Florida Energy Assistance and participating program providers to contact you at the phone number and email address you provide, including by automatic telephone dialing system, prerecorded or artificial voice, and text message, about home energy upgrade programs.',
        },
        {
          type: 'p',
          text: 'This consent is not a condition of purchasing any goods or services. Message and data rates may apply. Reply STOP to any text message to opt out, use the unsubscribe link in any email, or tell us during a call that you wish to be removed. You may also call 866-627-9518 to withdraw consent.',
        },
      ],
    },
    {
      h: 'Information you provide',
      blocks: [
        {
          type: 'p',
          text: 'You agree to provide accurate, current, and complete information, and to keep it accurate. You may not submit another person\'s information without their permission, use the site for any unlawful purpose, attempt to interfere with its operation or security, or use automated means to submit the form.',
        },
      ],
    },
    {
      h: 'Third-party providers',
      blocks: [
        {
          type: 'p',
          text: 'Providers, lenders, and contractors you are connected with are independent businesses. We do not control them and we are not responsible for their acts, omissions, pricing, workmanship, financing terms, or decisions. Any agreement you enter into is between you and that business. Read every agreement before signing it, and consider getting independent advice on financing terms.',
        },
      ],
    },
    {
      h: 'Site content',
      blocks: [
        {
          type: 'p',
          text: 'Information on this site, including program details, climate and utility information, and figures, is provided for general information and is believed accurate when published. It may become out of date, and it is not a substitute for the terms of any specific offer you receive.',
        },
        {
          type: 'p',
          text: 'The content, design, text, graphics, and code of this site are owned by Florida Energy Assistance or its licensors and are protected by intellectual property law. You may view and print pages for your own personal, non-commercial use. You may not copy, republish, or use them commercially without our written permission.',
        },
      ],
    },
    {
      h: 'Disclaimers',
      blocks: [
        {
          type: 'p',
          text: 'This site and its content are provided "as is" and "as available", without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, secure, or error-free, or that any particular result will be achieved.',
        },
      ],
    },
    {
      h: 'Limitation of liability',
      blocks: [
        {
          type: 'p',
          text: 'To the fullest extent permitted by law, Florida Energy Assistance and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost savings, or loss of data, arising out of or relating to your use of this site or your dealings with any provider, even if advised of the possibility of such damages.',
        },
        {
          type: 'p',
          text: 'Some jurisdictions do not allow the exclusion of certain warranties or the limitation of certain damages, so parts of the two sections above may not apply to you.',
        },
      ],
    },
    {
      h: 'Indemnification',
      blocks: [
        {
          type: 'p',
          text: 'You agree to indemnify and hold harmless Florida Energy Assistance from any claim, loss, liability, or expense, including reasonable attorneys\' fees, arising out of your use of this site, your breach of these terms, or your violation of any law or the rights of a third party.',
        },
      ],
    },
    {
      h: 'Governing law',
      blocks: [
        {
          type: 'p',
          text: 'These terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws rules. Any dispute arising out of these terms or your use of this site will be brought in the state or federal courts located in Florida, and you consent to the jurisdiction of those courts.',
        },
      ],
    },
    {
      h: 'Changes to these terms',
      blocks: [
        {
          type: 'p',
          text: 'We may revise these terms from time to time. The date at the top of this page shows when they were last revised, and changes take effect when posted. Your continued use of the site after a change means you accept the revised terms.',
        },
      ],
    },
    {
      h: 'Severability',
      blocks: [
        {
          type: 'p',
          text: 'If any provision of these terms is found unenforceable, that provision will be limited or removed to the minimum extent necessary and the remaining provisions will stay in full effect.',
        },
      ],
    },
    {
      h: 'Contact us',
      blocks: [
        {
          type: 'p',
          text: 'Questions about these terms: call 866-627-9518, Monday through Friday, 9 AM to 6 PM Eastern.',
        },
      ],
    },
  ],
};

const termsEs = {
  title: 'Términos de Servicio',
  intro:
    'Estos términos rigen el uso de floridaenergyassistance.com. Al usar este sitio o enviar el formulario de elegibilidad, usted los acepta. Si no está de acuerdo, por favor no use el sitio.',
  sections: [
    {
      h: 'Qué hacemos',
      blocks: [
        {
          type: 'p',
          text: 'Florida Energy Assistance ayuda a los propietarios de vivienda en Florida a identificar y acceder a financiamiento y programas de subvención para mejoras energéticas del hogar, y los conecta con proveedores participantes. Prestamos un servicio de referencia y de coincidencia de elegibilidad.',
        },
        { type: 'p', text: 'Queremos ser precisos sobre lo que no somos:' },
        {
          type: 'ul',
          items: [
            'No somos un prestamista y no tomamos decisiones de crédito.',
            'No somos un contratista ni un instalador, y no realizamos el trabajo.',
            'No brindamos asesoría legal, fiscal, financiera ni de ingeniería.',
          ],
        },
      ],
    },
    {
      h: 'Quién puede usar este sitio',
      blocks: [
        {
          type: 'p',
          text: 'Los programas descritos aquí están disponibles para propietarios de 18 años o más que sean dueños de una propiedad ubicada en Florida. Los inquilinos y los dueños de propiedades fuera de Florida no son elegibles. Al enviar el formulario, usted confirma que cumple estas condiciones y que la información que proporciona es exacta y le pertenece.',
        },
      ],
    },
    {
      h: 'Sin garantía de aprobación',
      blocks: [
        {
          type: 'p',
          text: 'Enviar el formulario de elegibilidad es una consulta, no una solicitud de crédito ni una oferta. Nada en este sitio constituye un compromiso de prestar, de otorgar fondos de subvención ni de realizar trabajo.',
        },
        {
          type: 'p',
          text: 'Los montos de financiamiento, los montos de subvención y los períodos de diferimiento de pago que se muestran son máximos del programa y condiciones típicas. El monto que usted pueda recibir, y si califica o no, dependen de sus circunstancias, del alcance de su proyecto y de los criterios y la decisión del proveedor. La disponibilidad y las condiciones de los programas pueden cambiar sin previo aviso y los fondos pueden ser limitados.',
        },
      ],
    },
    {
      h: 'Consentimiento para ser contactado',
      blocks: [
        {
          type: 'p',
          text: 'Al enviar el formulario, usted otorga su consentimiento expreso por escrito para que Florida Energy Assistance y los proveedores de programas participantes se comuniquen con usted en el número de teléfono y el correo electrónico que proporcione, incluso mediante sistema de marcación telefónica automática, voz pregrabada o artificial, y mensaje de texto, sobre programas de mejoras energéticas del hogar.',
        },
        {
          type: 'p',
          text: 'Este consentimiento no es condición para comprar ningún bien o servicio. Pueden aplicarse tarifas de mensajes y datos. Responda STOP a cualquier mensaje de texto para excluirse, use el enlace para darse de baja en cualquier correo, o indíquenos durante una llamada que desea ser eliminado. También puede llamar al 866-627-9518 para retirar su consentimiento.',
        },
      ],
    },
    {
      h: 'Información que usted proporciona',
      blocks: [
        {
          type: 'p',
          text: 'Usted acepta proporcionar información exacta, actual y completa, y mantenerla exacta. No puede enviar información de otra persona sin su permiso, usar el sitio con fines ilícitos, intentar interferir con su funcionamiento o seguridad, ni usar medios automatizados para enviar el formulario.',
        },
      ],
    },
    {
      h: 'Proveedores externos',
      blocks: [
        {
          type: 'p',
          text: 'Los proveedores, prestamistas y contratistas con los que se le conecte son empresas independientes. No los controlamos y no somos responsables de sus actos, omisiones, precios, calidad del trabajo, condiciones de financiamiento ni decisiones. Cualquier acuerdo que usted celebre es entre usted y esa empresa. Lea todo acuerdo antes de firmarlo y considere obtener asesoría independiente sobre las condiciones de financiamiento.',
        },
      ],
    },
    {
      h: 'Contenido del sitio',
      blocks: [
        {
          type: 'p',
          text: 'La información de este sitio, incluidos los detalles de los programas, la información sobre clima y empresas eléctricas, y las cifras, se proporciona con fines informativos generales y se considera exacta al momento de su publicación. Puede quedar desactualizada y no sustituye las condiciones de ninguna oferta específica que usted reciba.',
        },
        {
          type: 'p',
          text: 'El contenido, diseño, texto, gráficos y código de este sitio son propiedad de Florida Energy Assistance o de sus licenciantes y están protegidos por la ley de propiedad intelectual. Puede ver e imprimir páginas para su uso personal y no comercial. No puede copiarlas, volver a publicarlas ni usarlas comercialmente sin nuestro permiso por escrito.',
        },
      ],
    },
    {
      h: 'Renuncias de garantía',
      blocks: [
        {
          type: 'p',
          text: 'Este sitio y su contenido se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas, incluidas las garantías implícitas de comerciabilidad, idoneidad para un fin determinado y no infracción. No garantizamos que el sitio sea ininterrumpido, seguro o libre de errores, ni que se logre ningún resultado en particular.',
        },
      ],
    },
    {
      h: 'Limitación de responsabilidad',
      blocks: [
        {
          type: 'p',
          text: 'En la máxima medida permitida por la ley, Florida Energy Assistance y sus directivos, empleados y agentes no serán responsables por daños indirectos, incidentales, especiales, consecuentes, ejemplares o punitivos, ni por pérdida de ganancias, ahorros o datos, que surjan del uso de este sitio o de sus tratos con cualquier proveedor, incluso si se advirtió de la posibilidad de tales daños.',
        },
        {
          type: 'p',
          text: 'Algunas jurisdicciones no permiten la exclusión de ciertas garantías ni la limitación de ciertos daños, por lo que partes de las dos secciones anteriores podrían no aplicarse a usted.',
        },
      ],
    },
    {
      h: 'Indemnización',
      blocks: [
        {
          type: 'p',
          text: 'Usted acepta indemnizar y eximir de responsabilidad a Florida Energy Assistance por cualquier reclamo, pérdida, responsabilidad o gasto, incluidos honorarios razonables de abogados, que surja de su uso de este sitio, de su incumplimiento de estos términos, o de su violación de cualquier ley o de los derechos de un tercero.',
        },
      ],
    },
    {
      h: 'Ley aplicable',
      blocks: [
        {
          type: 'p',
          text: 'Estos términos se rigen por las leyes del Estado de Florida, sin considerar sus normas sobre conflicto de leyes. Cualquier disputa que surja de estos términos o de su uso de este sitio se presentará ante los tribunales estatales o federales ubicados en Florida, y usted acepta la jurisdicción de dichos tribunales.',
        },
      ],
    },
    {
      h: 'Cambios a estos términos',
      blocks: [
        {
          type: 'p',
          text: 'Podemos revisar estos términos periódicamente. La fecha en la parte superior de esta página indica cuándo se revisaron por última vez, y los cambios entran en vigor al publicarse. Su uso continuado del sitio después de un cambio significa que acepta los términos revisados.',
        },
      ],
    },
    {
      h: 'Divisibilidad',
      blocks: [
        {
          type: 'p',
          text: 'Si alguna disposición de estos términos resulta inaplicable, esa disposición se limitará o eliminará en la medida mínima necesaria y las disposiciones restantes seguirán en pleno vigor.',
        },
      ],
    },
    {
      h: 'Contáctenos',
      blocks: [
        {
          type: 'p',
          text: 'Preguntas sobre estos términos: llame al 866-627-9518, de lunes a viernes de 9 AM a 6 PM hora del Este.',
        },
      ],
    },
  ],
};

export const legal = {
  privacy: { en: privacyEn, es: privacyEs },
  terms: { en: termsEn, es: termsEs },
};
