export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subCapabilities: string[];
  tags: string[];
  impactMetric: string;
}

export interface SectorCase {
  year: string;
  category: string;
  title: string;
  clients: string;
  description: string;
  solution: string;
  results: string[];
}

export interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ia-generativa',
    number: '01.',
    title: 'Integración de IA Generativa',
    shortDesc: 'Diseñamos e implementamos asistentes virtuales con IA, prompts optimizados y agentes autónomos para automatizar prospección y atención.',
    fullDesc: 'No dejamos la IA en experimentos aislados. Construimos herramientas operativas adaptadas a los flujos reales de tu empresa con Claude, ChatGPT y Gemini.',
    subCapabilities: [
      'Asistentes Virtuales y Bots de Atención 24/7 (WhatsApp & Web)',
      'Agentes Autónomos para Prospección y Cualificación de Leads',
      'Ingeniería de Prompts Ejecutivos para Equipos Operativos',
      'Automatización de Documentación, Reportes y Análisis con IA'
    ],
    tags: ['Claude 3.7', 'ChatGPT', 'Gemini API', 'Make & n8n'],
    impactMetric: '+45% velocidad en prospección'
  },
  {
    id: 'estrategia-modelos',
    number: '02.',
    title: 'Estrategia & Rediseño de Modelos',
    shortDesc: 'Análisis integral de viabilidad, optimización de márgenes y reestructuración de la propuesta de valor para escalar ventas.',
    fullDesc: 'Evaluamos la rentabilidad de cada línea de negocio, identificamos cuellos de botella y reconfiguramos la oferta para competir con ventajas difíciles de replicar.',
    subCapabilities: [
      'Diagnóstico de Viabilidad Económica y Rentabilidad de Canales',
      'Reestructuración de Propuesta de Valor y Customer Journey',
      'Estrategia de Pricing, Empaquetado y Reducción de Churn',
      'Hoja de Ruta Estratégica con Hitos Trimestrales Medibles'
    ],
    tags: ['Business Model Canvas', 'Estrategia Competitiva', 'Unit Economics'],
    impactMetric: '+30% incremento en margen bruto'
  },
  {
    id: 'capacitacion-ejecutiva',
    number: '03.',
    title: 'Capacitación Ejecutiva & Equipos',
    shortDesc: 'Programas intensivos y talleres a la medida para directivos y colaboradores sobre adopción práctica, ética e inmediata de IA.',
    fullDesc: 'El software no genera resultados si el equipo no sabe cómo exprimirlo. Desarrollamos capacidades internas sólidas bajo la metodología Embajadores del Tec de Monterrey.',
    subCapabilities: [
      'Talleres Prácticos Directivos: IA para Toma de Decisiones',
      'Capacitación Operativa en Ofimática Potenciada por IA',
      'Protocolos de Seguridad de Datos, Privacidad y Gobernanza',
      'Certificación y Evaluación de Madurez Digital de Colaboradores'
    ],
    tags: ['Tec de Mty Standard', 'Talleres In-Company', 'Gobernanza IA'],
    impactMetric: '100% aplicabilidad al día siguiente'
  },
  {
    id: 'marketing-performance',
    number: '04.',
    title: 'Marketing Digital & Performance',
    shortDesc: 'Estrategias omnicanal con retornos medibles: Meta Ads, Google Ads, Inbound Marketing y captación optimizada de leads.',
    fullDesc: 'Eliminamos el gasto publicitario sin retorno. Diseñamos embudos de conversión continuos con atribución clara para que sepas el costo de cada cliente adquirido.',
    subCapabilities: [
      'Campañas de Adquisición en Meta Ads (Facebook & Instagram)',
      'Publicidad de Alta Intención en Google Ads y Red de Búsqueda',
      'Inbound Marketing y Automatización en HubSpot / ActiveCampaign',
      'Dashboards de Control de KPIs y Costo de Adquisición (CAC)'
    ],
    tags: ['Meta Ads Partner', 'Google Ads', 'HubSpot Inbound', 'ROAS x4+'],
    impactMetric: 'Reducción de hasta 35% en CAC'
  },
  {
    id: 'ecommerce-canales',
    number: '05.',
    title: 'E-commerce & Canales Digitales',
    shortDesc: 'Despliegue y optimización de tiendas en línea en Shopify, WooCommerce e integración en marketplaces globales.',
    fullDesc: 'Construimos infraestructuras comerciales fluidas donde el cliente compra sin fricciones y los pedidos se sincronizan automáticamente con inventarios y facturación.',
    subCapabilities: [
      'Diseño y Lanzamiento de Tiendas Shopify y WooCommerce',
      'Integración con Marketplaces (Amazon México, Mercado Libre)',
      'Optimización de Tasa de Conversión (CRO) y Checkout Seguro',
      'Sincronización de Inventarios y Logística Automatizada'
    ],
    tags: ['Shopify Partner', 'WooCommerce', 'Stripe & MercadoPago'],
    impactMetric: '+40% en tasa de conversión digital'
  },
  {
    id: 'proyectos-especiales',
    number: '06.',
    title: 'Proyectos Especiales & Web3',
    shortDesc: 'Asesoría estratégica para startups y proyectos de base tecnológica, integraciones Blockchain y credenciales digitales.',
    fullDesc: 'Acompañamiento a fundadores y empresas visionarias que requieren estructuración técnica, validación rápida de MVP y tracción en fases iniciales.',
    subCapabilities: [
      'Validación Ágil de Modelos MVP y Growth Hacking',
      'Arquitectura de Credenciales Digitales y Certificados Seguros',
      'Estrategia de Tokenomics y Aplicaciones Prácticas Blockchain',
      'Mentoría de Escalamiento para Startups Tecnológicas'
    ],
    tags: ['Web3', 'Blockchain', 'MVP Growth', 'Venture Strategy'],
    impactMetric: 'Time-to-market reducido a semanas'
  }
];

export const SECTORS_CASES: SectorCase[] = [
  {
    year: '2026',
    category: 'TURISMO & HOSPITALIDAD',
    title: 'FIESTA AMERICANA REAL DEL PUENTE & 100% NATURAL',
    clients: 'Fiesta Americana Real del Puente, Restaurante 100% Natural, Balnearios Morelos',
    description: 'Transformación de los canales de reserva directa y atención a comensales y huéspedes mediante automatización inteligente.',
    solution: 'Implementación de agente de IA conversacional en WhatsApp para consultas inmediatas de habitaciones y menús, junto con campañas geolocalizadas de Meta Ads dirigidas al turismo de fin de semana de CDMX y Puebla.',
    results: [
      '+52% incremento en reservas directas sin pagar comisiones de OTA',
      'Tiempo de respuesta a clientes reducido de 45 minutos a 12 segundos',
      'Retorno sobre inversión publicitaria (ROAS) de 5.4x en fines de semana'
    ]
  },
  {
    year: '2026',
    category: 'EDUCACIÓN & FORMACIÓN',
    title: 'UNIVERSIDADES UTEZ, UPEMOR & CEPS',
    clients: 'Universidad Tecnológica Emiliano Zapata (UTEZ), UPEMOR, Centro de Estudios Políticos y Sociales (CEPS)',
    description: 'Atracción de matrícula estudiantil, modernización de planes de capacitación ejecutiva e integración de herramientas de IA en el cuerpo docente.',
    solution: 'Diseño de programas de alfabetización en IA Generativa para profesores y personal administrativo, acompañado de embudos digitales automatizados para captación de aspirantes.',
    results: [
      '+38% incremento en prospectos calificados para programas de posgrado',
      'Más de 350 directores y docentes capacitados en IA responsable',
      'Ahorro de 18 horas semanales por departamento en gestión académica'
    ]
  },
  {
    year: '2026',
    category: 'SALUD & SERVICIOS ESPECIALIZADOS',
    title: 'CLÍNICAS DERMATOSS, INFORMATIUM & THRAD',
    clients: 'Clínicas Dermatoss, Thrad Soluciones, Innovatium Consultores, DOCE',
    description: 'Digitalización integral de la captación de pacientes y clientes B2B, centralización del expediente y prestigio de marca.',
    solution: 'Sistema integrado de agendamiento automatizado, asistente de triaje preliminar y generación de contenido educativo de autoridad médica con apoyo de IA.',
    results: [
      'Tasa de inasistencia (no-show) reducida en un 64%',
      'Crecimiento de 3.2x en leads mensuales para servicios de alta especialidad',
      'Posicionamiento orgánico líder en búsquedas locales en Google'
    ]
  },
  {
    year: '2026',
    category: 'RETAIL, AGRO & VIVERISMO',
    title: 'PLAZA IKONOS, TIENDAS PLATINO & VIVEROS MORELOS',
    clients: 'Plaza Ikonos, Tiendas Platino, Productores Ornamentales de Querétaro y Morelos',
    description: 'Despliegue de comercio omnicanal B2B para mayoristas y arquitectos con automatización de catálogos e inventarios vivos.',
    solution: 'Desarrollo de catálogo B2B interactivo con cotizador automático en tiempo real y campañas segmentadas por proyecto paisajístico y desarrollo inmobiliario.',
    results: [
      'Apertura de canales de venta nacional hacia 6 nuevos estados',
      'Reducción del 70% en el tiempo dedicado a elaborar cotizaciones manuales',
      '+44% de incremento en el ticket promedio por comprador profesional'
    ]
  },
  {
    year: '2025',
    category: 'EMPRENDIMIENTO & STARTUPS TECH',
    title: 'SKILLROUTE & MEZCAL MIXBALL',
    clients: 'SkillRoute EdTech, Mezcal Mixball, Plataformas basadas en Blockchain',
    description: 'Estrategias de Growth Hacking, validación de producto-mercado y certificación digital de autenticidad.',
    solution: 'Diseño de propuesta de valor disruptiva, pruebas A/B aceleradas de adquisición y arquitectura de contratos inteligentes para trazabilidad de botellas artesanales.',
    results: [
      'Validación de PMF y primeras ventas recurrentes en menos de 60 días',
      'Certificación digital antifraude para exportación a Estados Unidos',
      'Reconocimiento en foros de innovación y capital semilla regional'
    ]
  },
  {
    year: '2025',
    category: 'SECTOR PÚBLICO & LEGISLATIVO',
    title: 'ASESORÍA LEGISLATIVA & GOBIERNOS LOCALES',
    clients: 'Oficinas Parlamentarias, Organismos Públicos Descentralizados, Administraciones Locales',
    description: 'Capacitación institucional en el uso ético, trazable y seguro de IA Generativa para la gestión documental y análisis de políticas públicas.',
    solution: 'Talleres de redacción normativa asistida por IA, protocolos de protección de datos confidenciales y sistemas de resumen de dictámenes legislativos.',
    results: [
      'Tiempo de análisis comparativo de iniciativas reducido en un 80%',
      'Cero incidencias de fuga de información confidencial mediante protocolos cerrados',
      'Capacitación certificada a más de 120 servidores públicos'
    ]
  }
];

export const PRINCIPLES_DATA: Principle[] = [
  {
    number: '01',
    title: 'Claridad Absoluta',
    subtitle: 'Sin jerga técnica innecesaria',
    description: 'Hablamos en tu idioma de negocio. Te explicamos exactamente cómo funciona la tecnología, qué hace cada algoritmo y por qué generará rentabilidad.'
  },
  {
    number: '02',
    title: 'Acompañamiento Real',
    subtitle: 'No nos vamos tras el reporte',
    description: 'A diferencia de consultoras tradicionales que entregan un PDF y desaparecen, capacitamos a tu equipo y ajustamos las tácticas semana a semana hasta que funcionen.'
  },
  {
    number: '03',
    title: 'Integridad y Sinceridad',
    subtitle: 'Diagnóstico transparente',
    description: 'Honestidad radical en presupuestos y expectativas. Si una herramienta de IA o software no conviene a tu negocio, te lo decimos de frente antes de que gastes un peso.'
  },
  {
    number: '04',
    title: 'Métricas de Impacto',
    subtitle: 'Cada peso evaluado',
    description: 'Eliminamos la intuición y las suposiciones. Diseñamos tableros de control con KPIs concretos: horas ahorradas, leads generados, margen operativo y ROI.'
  },
  {
    number: '05',
    title: 'Practicidad Inmediata',
    subtitle: 'Aplicación desde el primer día',
    description: 'Lo que aprendes en nuestras sesiones de consultoría lo implementas al día siguiente en tus operaciones. Soluciones ágiles con retorno tangible.'
  }
];
