import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en' | 'de';

export interface Translations {
  // Global & Navigation
  siteTitle: string;
  siteSubtitle: string;
  navMapa: string;
  navSuenos: string;
  navArte: string;
  navTalleres: string;
  navMuseo: string;
  navBiblioteca: string;
  navBlog: string;
  navExposicion: string;
  navAporte: string;
  panelAdmin: string;
  adminLoginTitle: string;
  adminPinLabel: string;
  adminPinHelp: string;
  adminPinError: string;
  adminEnterBtn: string;
  closeBtn: string;
  cancelBtn: string;
  saveBtn: string;
  deleteBtn: string;
  editBtn: string;
  viewMapBtn: string;
  listenSpeech: string;
  stopSpeech: string;

  // Landing Page
  landingTitle: string;
  landingSubtitle: string;
  landingDesc: string;
  exploreMapBtn: string;
  landingPeriodPre: string;
  landingPeriodDic: string;
  landingPeriodTra: string;
  landingPeriodRev: string;
  landingPeriodPreSub: string;
  landingPeriodDicSub: string;
  landingPeriodTraSub: string;
  landingPeriodRevSub: string;

  // Modulos
  suenosBadge: string;
  suenosTitle: string;
  suenosDesc: string;
  suenosWho: string;
  suenosDream: string;
  suenosCelebrated: string;
  suenosFlavorSound: string;

  arteBadge: string;
  arteTitle: string;
  arteDesc: string;
  artePoetryTitle: string;
  arteDeclaim: string;

  talleresBadge: string;
  talleresTitle: string;
  talleresDesc: string;
  talleresPrintPdf: string;
  talleresMaterials: string;
  talleresObjective: string;
  talleresSteps: string;
  talleresAdvice: string;

  museoTitle: string;
  museoDesc: string;
  museoOriginalSource: string;
  museoCredit: string;

  // Common UI
  filterAll: string;
  categories: string;

  // Map & Filters
  filterTitle: string;
  filterCount: string;
  filterEpoch: string;
  filterProvince: string;
  filterType: string;
  filterReset: string;
  filterLegend: string;
  filterLegendDesc: string;
  filterEmpty: string;
  routeParralTitle: string;
  routeParralDesc: string;
  routeParralBtn: string;
  routeParralTag: string;

  // SitePanel
  tabResena: string;
  tabGaleria: string;
  tabTestimonio: string;
  tabVideo: string;
  tabFuentes: string;
  sitePanelHistory: string;
  sitePanelEmptyGallery: string;
  sitePanelEmptyTestimony: string;
  sitePanelEmptyVideo: string;
  sitePanelEmptySources: string;
  sitePanelNoAudio: string;
  sitePanelPendingImage: string;

  // Blog / News
  blogTitle: string;
  blogDesc: string;
  blogNewsTab: string;
  blogChroniclesTab: string;
  blogReadFull: string;
  blogComments: string;
  blogNoNews: string;
  blogNoChronicles: string;
  blogLeaveComment: string;
  blogCommentName: string;
  blogCommentText: string;
  blogCommentSend: string;
  blogCommentSuccess: string;
  blogBackBtn: string;

  // Library
  libTitle: string;
  libDesc: string;
  libSearchPlaceholder: string;
  libAllFormats: string;
  libAllTags: string;
  libCount: string;
  libNotFound: string;
  libOpen: string;
  libDownload: string;

  // Contribute (Archivo Abierto)
  contribTitle: string;
  contribDesc: string;
  contribSuccess: string;
  contribType: string;
  contribName: string;
  contribContact: string;
  contribTitleField: string;
  contribStory: string;
  contribLink: string;
  contribNote: string;
  contribSendBtn: string;

  // Landing Cards
  landingCardExhibitionTitle: string;
  landingCardExhibitionDesc: string;
  landingCardExhibitionTag: string;
  landingCardSuenosTitle: string;
  landingCardSuenosDesc: string;
  landingCardArteTitle: string;
  landingCardArteDesc: string;
  landingCardTalleresTitle: string;
  landingCardTalleresDesc: string;
  landingCardMuseoTitle: string;
  landingCardMuseoDesc: string;
  landingCardBlogTitle: string;
  landingCardBlogDesc: string;
  landingCardLibraryTitle: string;
  landingCardLibraryDesc: string;

  // Blog extra
  blogCitizenComments: string;
  blogNoApprovedComments: string;
  blogCommentAuthorPlaceholder: string;
}

export const DICTIONARY: Record<Language, Translations> = {
  es: {
    siteTitle: 'Memoria y Dignidad Maule',
    siteSubtitle: 'Museo digital de derechos humanos, memorias populares y oficios del Maule',
    navMapa: 'Mapa',
    navSuenos: 'Los Sueños que Construían',
    navArte: 'Arte & Cultura',
    navTalleres: 'Talleres',
    navMuseo: 'Museo',
    navBiblioteca: 'Biblioteca',
    navBlog: 'Noticias & Crónicas',
    navExposicion: 'Colonia Dignidad & Europa',
    navAporte: 'Archivo Abierto',
    panelAdmin: 'Panel Admin',
    adminLoginTitle: 'Acceso de administración',
    adminPinLabel: 'PIN de administrador',
    adminPinHelp: 'PIN de ejemplo para la demo: 1973',
    adminPinError: 'PIN incorrecto. Intenta nuevamente.',
    adminEnterBtn: 'Ingresar al panel',
    closeBtn: 'Cerrar',
    cancelBtn: 'Cancelar',
    saveBtn: 'Guardar',
    deleteBtn: 'Eliminar',
    editBtn: 'Editar',
    viewMapBtn: 'Ver sitio en Mapa',
    listenSpeech: 'Escuchar relato',
    stopSpeech: 'Detener narración oral',

    landingTitle: 'Memoria y Dignidad Maule',
    landingSubtitle: 'Museo Digital & Archivo Comunitario',
    landingDesc: 'Un espacio abierto para recordar, investigar y visibilizar la memoria histórica, los derechos humanos, los oficios populares y las luchas sociales de Talca, Curicó, Linares y Cauquenes.',
    exploreMapBtn: 'Explorar el Mapa Interactivo',
    landingPeriodPre: 'Reforma Agraria y Pre-dictadura',
    landingPeriodDic: 'Dictadura Cívico-Militar',
    landingPeriodTra: 'Transición y Post-dictadura',
    landingPeriodRev: 'Revuelta Popular de Octubre',
    landingPeriodPreSub: '1964–1973 · Sindicatos campesinos y cordones industriales',
    landingPeriodDicSub: '1973–1990 · Centros de detención, fosas y Colonia Dignidad',
    landingPeriodTraSub: '1990–2018 · Memoriales, justicia y resistencias ambientales',
    landingPeriodRevSub: '2019 · Protesta social, cabildos barriales y verdad',

    suenosBadge: 'Memoria de la Alegría, Oficios y Vida Cotidiana',
    suenosTitle: 'Los Sueños que Construían',
    suenosDesc: 'Vidas laboriosas, oficios centenarios, canchas de rayuela y peñas solidarias previas al silencio. Explora las fichas con el menú flotante, flechas o deslizando.',
    suenosWho: '¿Quiénes eran?',
    suenosDream: '¿Qué soñaban?',
    suenosCelebrated: '¿Cómo celebraban?',
    suenosFlavorSound: 'Sabor y sonido del encuentro',

    arteBadge: 'Expresión, Dignidad y Derechos Humanos Universales',
    arteTitle: 'Arte, Memoria y Cultura',
    arteDesc: 'Murales comunitarios en los barrios maulinos, décimas campesinas que desafiaron el silencio y rimas urbanas por la dignidad humana.',
    artePoetryTitle: 'Texto / Poesía / Lira Popular',
    arteDeclaim: 'Escuchar lectura / declamación',

    talleresBadge: 'Pedagogía de la Memoria & Caja de Herramientas',
    talleresTitle: 'Talleres y Metodologías Comunitarias',
    talleresDesc: 'Orientado a docentes, profesoras rurales, asambleas de barrio, clubes de adulto mayor y colectivos de jóvenes. Metodologías paso a paso, listas para llevar a la práctica, fotocopiar o descargar e imprimir con materiales sencillos.',
    talleresPrintPdf: 'Imprimir / Guardar en PDF',
    talleresMaterials: 'Materiales requeridos:',
    talleresObjective: 'Objetivo Comunitario',
    talleresSteps: 'Paso a Paso de la Metodología',
    talleresAdvice: 'Recomendaciones pedagógicas y de cuidado',

    museoTitle: 'Museo Digital',
    museoDesc: 'Fotografías, documentos, portadas de prensa y videos con su relato. Usa el menú flotante, las flechas del teclado o desliza para recorrer.',
    museoOriginalSource: 'Ver ficha original',
    museoCredit: 'Crédito:',

    filterAll: 'Todos',
    categories: 'Categorías',

    // Map & Filters
    filterTitle: 'Filtrar sitios',
    filterCount: 'sitios',
    filterEpoch: 'Época histórica',
    filterProvince: 'Provincia',
    filterType: 'Tipo de sitio',
    filterReset: 'Limpiar filtros',
    filterLegend: 'Leyenda',
    filterLegendDesc: 'El color indica la época; la letra, el tipo de sitio (D, M, R, C).',
    filterEmpty: 'Ningún sitio coincide con los filtros.',
    routeParralTitle: 'Ruta Parral & Colonia Dignidad',
    routeParralDesc: 'Fosas clandestinas, cuarteles DINA y red de túneles en Parral.',
    routeParralBtn: 'Ver Enclave y Fosas Parral',
    routeParralTag: 'Especial',

    // SitePanel
    tabResena: 'Reseña',
    tabGaleria: 'Galería',
    tabTestimonio: 'Testimonio',
    tabVideo: 'Video',
    tabFuentes: 'Fuentes',
    sitePanelHistory: 'Reseña histórica y judicial',
    sitePanelEmptyGallery: 'Aún no hay imágenes ni documentos para este sitio.',
    sitePanelEmptyTestimony: 'Este sitio aún no tiene testimonios. Puedes aportar el tuyo en «Archivo Abierto».',
    sitePanelEmptyVideo: 'No hay video asociado. En el panel de administración se puede añadir un enlace de YouTube.',
    sitePanelEmptySources: 'Sin fuentes registradas.',
    sitePanelNoAudio: 'Sin registro de audio disponible.',
    sitePanelPendingImage: 'Imagen pendiente de digitalizar',

    // Blog / News
    blogTitle: 'Noticias & Crónicas',
    blogDesc: 'Archivo vivo de memoria territorial: a la izquierda, el acontecer y notas informativas; a la derecha, crónicas de largo aliento, testimonios y rescate histórico.',
    blogNewsTab: 'Noticias',
    blogChroniclesTab: 'Crónicas & Testimonios',
    blogReadFull: 'Leer artículo completo →',
    blogComments: 'comentarios',
    blogNoNews: 'No hay noticias registradas por el momento.',
    blogNoChronicles: 'No hay crónicas registradas por el momento.',
    blogLeaveComment: 'Deja un comentario o testimonio sobre este texto',
    blogCommentName: 'Tu nombre (o anónimo)',
    blogCommentText: 'Escribe tu reflexión, memoria o dato…',
    blogCommentSend: 'Publicar comentario',
    blogCommentSuccess: 'Tu comentario fue enviado y quedará visible tras revisión editorial.',
    blogBackBtn: 'Volver a Noticias y Crónicas',

    // Library
    libTitle: 'Biblioteca digital y archivo documental',
    libDesc: 'Informes oficiales, expedientes judiciales, películas, documentales, audios y fotografías para investigar y preservar la memoria del Maule.',
    libSearchPlaceholder: 'Buscar por título, tema o fuente…',
    libAllFormats: 'Todos los formatos',
    libAllTags: 'Todas las etiquetas',
    libCount: 'documento(s)',
    libNotFound: 'No se encontraron documentos.',
    libOpen: 'Abrir / leer',
    libDownload: 'Descargar',

    // Contribute (Archivo Abierto)
    contribTitle: 'Archivo Abierto',
    contribDesc: '¿Tienes un relato, una fotografía, un documento o conoces un lugar que debería estar en el mapa? Compártelo. Nuestro equipo revisará cada aporte antes de publicarlo, resguardando la dignidad de las personas.',
    contribSuccess: 'Recibimos tu aporte. Será revisado por el equipo. ¡Gracias por cuidar la memoria!',
    contribType: 'Tipo de aporte',
    contribName: 'Nombre (opcional)',
    contribContact: 'Contacto (opcional)',
    contribTitleField: 'Título',
    contribStory: 'Relato o descripción',
    contribLink: 'Enlace a archivo (Drive, YouTube, etc.)',
    contribNote: 'Los aportes se guardan localmente en este navegador (demo). Para un despliegue real se requiere un backend.',
    contribSendBtn: 'Enviar aporte',

    // Landing Cards
    landingCardExhibitionTitle: 'Exposición Especial: Colonia Dignidad, Redes Nazis y Dictadura',
    landingCardExhibitionDesc: 'Dossier y paneles curatoriales para conferencias y exposiciones en Europa: fuga de Alemania en 1961, cuartel de la DINA en Parral, fosas comunes del río Perquilauquén, complicidad consular del BND y resoluciones del Bundestag alemán.',
    landingCardExhibitionTag: 'Parral · DE/EN/ES',
    landingCardSuenosTitle: 'Los Sueños que Construían',
    landingCardSuenosDesc: 'Oficios de antaño, asentamientos de la Reforma Agraria, peñas parroquiales y la alegría compartida antes del silencio.',
    landingCardArteTitle: 'Arte y Derechos Universales',
    landingCardArteDesc: 'Murales barriales georreferenciados, décimas campesinas y rap maulino por la dignidad de las comunidades.',
    landingCardTalleresTitle: 'Talleres Comunitarios',
    landingCardTalleresDesc: 'Guías metodológicas descargables e imprimibles: Cartografía familiar («El mapa de tus abuelos»), arpilleras y notas de voz.',
    landingCardMuseoTitle: 'Museo Digital',
    landingCardMuseoDesc: 'Galería interactiva con fotografías de archivo, momentos, prensa histórica y relatos narrados con voz.',
    landingCardBlogTitle: 'Noticias & Crónicas',
    landingCardBlogDesc: 'Doble columna: noticias y contingencia regional a la izquierda, crónicas y testimonios en profundidad a la derecha.',
    landingCardLibraryTitle: 'Biblioteca Digital',
    landingCardLibraryDesc: 'Informes oficiales Rettig, Valech, expedientes judiciales y documentos históricos para descarga libre.',

    // Blog extra
    blogCitizenComments: 'Comentarios ciudadanos',
    blogNoApprovedComments: 'Aún no hay comentarios aprobados para esta publicación. ¡Sé el primero en aportar una reflexión!',
    blogCommentAuthorPlaceholder: 'Ej: Vecina de Talca',
  },
  en: {
    siteTitle: 'Memory & Dignity Maule',
    siteSubtitle: 'Digital museum of human rights, popular memories and trades of Maule',
    navMapa: 'Map',
    navSuenos: 'Dreams They Built',
    navArte: 'Art & Culture',
    navTalleres: 'Workshops',
    navMuseo: 'Museum',
    navBiblioteca: 'Library',
    navBlog: 'News & Chronicles',
    navExposicion: 'Colonia Dignidad & Europe',
    navAporte: 'Open Archive',
    panelAdmin: 'Admin Panel',
    adminLoginTitle: 'Administration Access',
    adminPinLabel: 'Admin PIN',
    adminPinHelp: 'Demo PIN: 1973',
    adminPinError: 'Incorrect PIN. Please try again.',
    adminEnterBtn: 'Enter panel',
    closeBtn: 'Close',
    cancelBtn: 'Cancel',
    saveBtn: 'Save',
    deleteBtn: 'Delete',
    editBtn: 'Edit',
    viewMapBtn: 'View Site on Map',
    listenSpeech: 'Listen to narration',
    stopSpeech: 'Stop oral narration',

    landingTitle: 'Memory and Dignity Maule',
    landingSubtitle: 'Digital Museum & Community Archive',
    landingDesc: 'An open space to remember, investigate and highlight historical memory, human rights, traditional crafts and social struggles across Talca, Curicó, Linares and Cauquenes.',
    exploreMapBtn: 'Explore Interactive Map',
    landingPeriodPre: 'Agrarian Reform & Pre-dictatorship',
    landingPeriodDic: 'Civic-Military Dictatorship',
    landingPeriodTra: 'Transition & Post-dictatorship',
    landingPeriodRev: 'October Popular Uprising',
    landingPeriodPreSub: '1964–1973 · Peasant unions and industrial belts',
    landingPeriodDicSub: '1973–1990 · Detention centers, graves and Colonia Dignidad',
    landingPeriodTraSub: '1990–2018 · Memorials, justice and environmental defense',
    landingPeriodRevSub: '2019 · Social protest, neighborhood assemblies and truth',

    suenosBadge: 'Memory of Joy, Traditional Trades and Daily Life',
    suenosTitle: 'The Dreams They Built',
    suenosDesc: 'Laborious lives, century-old crafts, rayuela fields and solidarity festivals before the silence. Explore cards via floating menu, keys or swiping.',
    suenosWho: 'Who were they?',
    suenosDream: 'What did they dream of?',
    suenosCelebrated: 'How did they celebrate?',
    suenosFlavorSound: 'Flavor & sound of communion',

    arteBadge: 'Expression, Dignity and Universal Human Rights',
    arteTitle: 'Art, Memory and Culture',
    arteDesc: 'Community murals in Maule neighborhoods, peasant verses that defied silence and urban rhymes for human dignity.',
    artePoetryTitle: 'Text / Peasant Verses / Popular Broadsheet',
    arteDeclaim: 'Listen to recitation',

    talleresBadge: 'Pedagogy of Memory & Community Toolkit',
    talleresTitle: 'Workshops & Community Methodologies',
    talleresDesc: 'Designed for educators, rural teachers, neighborhood assemblies, senior citizen clubs and youth collectives. Step-by-step methodologies ready to practice or export as PDF.',
    talleresPrintPdf: 'Print / Save as PDF',
    talleresMaterials: 'Required materials:',
    talleresObjective: 'Community Objective',
    talleresSteps: 'Step by Step Methodology',
    talleresAdvice: 'Pedagogical & Ethical Care Recommendations',

    museoTitle: 'Digital Museum',
    museoDesc: 'Photographs, archival documents, press headlines and videos with historical accounts. Browse with floating menu, keys or swipe.',
    museoOriginalSource: 'View original record',
    museoCredit: 'Credit:',

    filterAll: 'All',
    categories: 'Categories',

    // Map & Filters
    filterTitle: 'Filter sites',
    filterCount: 'sites',
    filterEpoch: 'Historical era',
    filterProvince: 'Province',
    filterType: 'Site type',
    filterReset: 'Reset filters',
    filterLegend: 'Legend',
    filterLegendDesc: 'Color indicates era; letter indicates site type (D, M, R, C).',
    filterEmpty: 'No sites match the current filters.',
    routeParralTitle: 'Parral & Colonia Dignidad Route',
    routeParralDesc: 'Clandestine graves, DINA headquarters and underground tunnels in Parral.',
    routeParralBtn: 'View Parral Enclave & Graves',
    routeParralTag: 'Special',

    // SitePanel
    tabResena: 'Overview',
    tabGaleria: 'Gallery',
    tabTestimonio: 'Testimony',
    tabVideo: 'Video',
    tabFuentes: 'Sources',
    sitePanelHistory: 'Historical & Judicial Account',
    sitePanelEmptyGallery: 'No images or documents yet for this site.',
    sitePanelEmptyTestimony: 'No testimonies yet for this site. You can contribute yours in "Open Archive".',
    sitePanelEmptyVideo: 'No video linked. A YouTube URL can be added in the Admin Panel.',
    sitePanelEmptySources: 'No sources recorded.',
    sitePanelNoAudio: 'No audio record available.',
    sitePanelPendingImage: 'Image awaiting digitization',

    // Blog / News
    blogTitle: 'News & Chronicles',
    blogDesc: 'Living archive of territorial memory: on the left, regional news; on the right, investigative chronicles, testimonies and historical recovery.',
    blogNewsTab: 'News',
    blogChroniclesTab: 'Chronicles & Testimonies',
    blogReadFull: 'Read full article →',
    blogComments: 'comments',
    blogNoNews: 'No news records at this time.',
    blogNoChronicles: 'No chronicles recorded at this time.',
    blogLeaveComment: 'Leave a comment or testimony on this article',
    blogCommentName: 'Your name (or anonymous)',
    blogCommentText: 'Write your reflection, memory or data…',
    blogCommentSend: 'Submit comment',
    blogCommentSuccess: 'Your comment was submitted and will appear following editorial review.',
    blogBackBtn: 'Back to News & Chronicles',

    // Library
    libTitle: 'Digital Library & Documentary Archive',
    libDesc: 'Official reports, court records, films, documentaries, audio recordings, and photographs to research and preserve the memory of Maule.',
    libSearchPlaceholder: 'Search by title, topic or source…',
    libAllFormats: 'All formats',
    libAllTags: 'All tags',
    libCount: 'document(s)',
    libNotFound: 'No documents found.',
    libOpen: 'Open / Read',
    libDownload: 'Download',

    // Contribute (Archivo Abierto)
    contribTitle: 'Open Archive',
    contribDesc: 'Do you have a story, a photo, a document or know a place that should be on the map? Share it. Our team will review each contribution before publication, safeguarding human dignity.',
    contribSuccess: 'We received your submission. It will be reviewed by the team. Thank you for safeguarding memory!',
    contribType: 'Contribution type',
    contribName: 'Name (optional)',
    contribContact: 'Contact (optional)',
    contribTitleField: 'Title',
    contribStory: 'Account or description',
    contribLink: 'Link to file (Drive, YouTube, etc.)',
    contribNote: 'Submissions are stored locally in this browser (demo). A production backend is required for permanent storage.',
    contribSendBtn: 'Send contribution',

    // Landing Cards
    landingCardExhibitionTitle: 'Special Exhibition: Colonia Dignidad, Nazi Networks & Dictatorship',
    landingCardExhibitionDesc: 'Curated international panels for exhibitions in Europe: Schäfer’s escape from West Germany, secret DINA torture command, clandestine graves by the Perquilauquén River, German diplomatic complicity, and the German Bundestag resolution.',
    landingCardExhibitionTag: 'Parral · DE/EN/ES',
    landingCardSuenosTitle: 'The Dreams They Built',
    landingCardSuenosDesc: 'Centuries-old crafts, Agrarian Reform settlements, community music clubs, and shared joy before the silence.',
    landingCardArteTitle: 'Art & Universal Human Rights',
    landingCardArteDesc: 'Georeferenced neighborhood murals, peasant décima verses, and local rap defending community dignity.',
    landingCardTalleresTitle: 'Community Workshops',
    landingCardTalleresDesc: 'Downloadable and printable methodological toolkits: Family cartography ("Your Grandparents’ Map"), arpilleras, and oral recordings.',
    landingCardMuseoTitle: 'Digital Museum',
    landingCardMuseoDesc: 'Interactive gallery with archival photographs, historical press front pages, and voice-narrated records.',
    landingCardBlogTitle: 'News & Chronicles',
    landingCardBlogDesc: 'Two-column format: regional news and current affairs on the left; in-depth chronicles and testimonies on the right.',
    landingCardLibraryTitle: 'Digital Library & Archive',
    landingCardLibraryDesc: 'Official Rettig and Valech reports, judicial case files, and declassified historical documents for open download.',

    // Blog extra
    blogCitizenComments: 'Citizen comments',
    blogNoApprovedComments: 'No approved comments yet for this post. Be the first to share your thoughts!',
    blogCommentAuthorPlaceholder: 'E.g.: Neighbor from Talca',
  },
  de: {
    siteTitle: 'Erinnerung & Würde Maule',
    siteSubtitle: 'Digitales Museum für Menschenrechte, Volkskultur und Berufe der Region Maule',
    navMapa: 'Karte',
    navSuenos: 'Die Träume, die sie bauten',
    navArte: 'Kunst & Kultur',
    navTalleres: 'Workshops',
    navMuseo: 'Museum',
    navBiblioteca: 'Bibliothek',
    navBlog: 'Nachrichten & Chroniken',
    navExposicion: 'Colonia Dignidad & Europa',
    navAporte: 'Offenes Archiv',
    panelAdmin: 'Admin-Bereich',
    adminLoginTitle: 'Administrator-Zugang',
    adminPinLabel: 'Admin-PIN',
    adminPinHelp: 'Demo-PIN: 1973',
    adminPinError: 'Falsche PIN. Bitte erneut versuchen.',
    adminEnterBtn: 'Anmelden',
    closeBtn: 'Schließen',
    cancelBtn: 'Abbrechen',
    saveBtn: 'Speichern',
    deleteBtn: 'Löschen',
    editBtn: 'Bearbeiten',
    viewMapBtn: 'Ort auf Karte ansehen',
    listenSpeech: 'Erzählung anhören',
    stopSpeech: 'Vorlesen stoppen',

    landingTitle: 'Erinnerung und Würde Maule',
    landingSubtitle: 'Digitales Museum & Gemeinschaftsarchiv',
    landingDesc: 'Ein offener Raum zur Erforschung und Sichtbarmachung des historischen Gedächtnisses, der Menschenrechte, des traditionellen Handwerks und der sozialen Kämpfe in Talca, Curicó, Linares und Cauquenes (einschließlich der Aufarbeitung der Colonia Dignidad).',
    exploreMapBtn: 'Interaktive Karte erkunden',
    landingPeriodPre: 'Agrarreform & Vor-Diktatur',
    landingPeriodDic: 'Zivil-Militärische Diktatur',
    landingPeriodTra: 'Übergang & Nach-Diktatur',
    landingPeriodRev: 'Soziale Revolte von Oktober',
    landingPeriodPreSub: '1964–1973 · Bauerngewerkschaften und Industriezentren',
    landingPeriodDicSub: '1973–1990 · Haftzentren, Massengräber und Colonia Dignidad',
    landingPeriodTraSub: '1990–2018 · Mahnmale, Justiz und Umweltwiderstand',
    landingPeriodRevSub: '2019 · Bürgerproteste, Nachbarschaftsversammlungen und Wahrheit',

    suenosBadge: 'Erinnerung an Lebensfreude, Handwerk und Alltag',
    suenosTitle: 'Die Träume, die sie bauten',
    suenosDesc: 'Fleißige Leben, jahrhundertealtes Handwerk, Gemeinschaftsfeste und Solidarität vor der Zeit des Schweigens. Erkunden Sie die Stationen über das Menü oder durch Wischen.',
    suenosWho: 'Wer waren sie?',
    suenosDream: 'Wovon träumten sie?',
    suenosCelebrated: 'Wie feierten sie?',
    suenosFlavorSound: 'Geschmack und Klang der Begegnung',

    arteBadge: 'Ausdruck, Würde und universelle Menschenrechte',
    arteTitle: 'Kunst, Erinnerung und Kultur',
    arteDesc: 'Gemeinschaftliche Wandmalereien, ländliche Reime gegen das Schweigen und urbane Poesie für die Menschenwürde.',
    artePoetryTitle: 'Text / Bäuerliche Verse / Flugblätter',
    arteDeclaim: 'Rezitation anhören',

    talleresBadge: 'Pädagogik der Erinnerung & Werkzeugkasten',
    talleresTitle: 'Workshops & Methoden der Gemeinschaft',
    talleresDesc: 'Für Lehrkräfte, Dorfschulen, Nachbarschaftsinitiativen und Jugendgruppen. Schritt-für-Schritt-Methoden zum Ausdrucken oder als PDF-Export.',
    talleresPrintPdf: 'Drucken / Als PDF speichern',
    talleresMaterials: 'Benötigte Materialien:',
    talleresObjective: 'Gemeinschaftsziel',
    talleresSteps: 'Schritt-für-Schritt-Methode',
    talleresAdvice: 'Pädagogische und ethische Empfehlungen',

    museoTitle: 'Digitales Museum',
    museoDesc: 'Fotografien, Archivdokumente, historische Zeitungsberichte und Videos mit Erläuterungen. Blättern Sie mit den Pfeiltasten oder durch Wischen.',
    museoOriginalSource: 'Originaldokument ansehen',
    museoCredit: 'Quelle / Urheber:',

    filterAll: 'Alle',
    categories: 'Kategorien',

    // Map & Filters
    filterTitle: 'Orte filtern',
    filterCount: 'Orte',
    filterEpoch: 'Historische Epoche',
    filterProvince: 'Provinz',
    filterType: 'Art des Ortes',
    filterReset: 'Filter zurücksetzen',
    filterLegend: 'Legende',
    filterLegendDesc: 'Farbe zeigt Epoche an; Buchstabe die Art des Ortes (D, M, R, C).',
    filterEmpty: 'Keine Orte entsprechen den Filtern.',
    routeParralTitle: 'Route Parral & Colonia Dignidad',
    routeParralDesc: 'Geheime Gräber, DINA-Quartiere und Tunnelsysteme in Parral.',
    routeParralBtn: 'Enklave & Gräber in Parral anzeigen',
    routeParralTag: 'Spezial',

    // SitePanel
    tabResena: 'Übersicht',
    tabGaleria: 'Galerie',
    tabTestimonio: 'Zeugnis',
    tabVideo: 'Video',
    tabFuentes: 'Quellen',
    sitePanelHistory: 'Historische und juristische Darstellung',
    sitePanelEmptyGallery: 'Noch keine Bilder oder Dokumente für diesen Ort vorhanden.',
    sitePanelEmptyTestimony: 'Für diesen Ort liegen noch keine Zeugenaussagen vor. Sie können im „Offenen Archiv“ beitragen.',
    sitePanelEmptyVideo: 'Kein Video verknüpft. Kann im Admin-Bereich hinzugefügt werden.',
    sitePanelEmptySources: 'Keine Quellen hinterlegt.',
    sitePanelNoAudio: 'Keine Tonaufnahme verfügbar.',
    sitePanelPendingImage: 'Bild wartet auf Digitalisierung',

    // Blog / News
    blogTitle: 'Nachrichten & Chroniken',
    blogDesc: 'Lebendiges Archiv der regionalen Erinnerung: links aktuelle Berichte; rechts vertiefende Chroniken, Zeugnisse und historische Aufarbeitung.',
    blogNewsTab: 'Nachrichten',
    blogChroniclesTab: 'Chroniken & Zeugnisse',
    blogReadFull: 'Ganzen Artikel lesen →',
    blogComments: 'Kommentare',
    blogNoNews: 'Derzeit keine Nachrichten vorhanden.',
    blogNoChronicles: 'Derzeit keine Chroniken vorhanden.',
    blogLeaveComment: 'Kommentar oder Zeugnis zu diesem Text hinterlassen',
    blogCommentName: 'Ihr Name (oder anonym)',
    blogCommentText: 'Schreiben Sie Ihre Gedanken, Erinnerungen oder Hinweise…',
    blogCommentSend: 'Kommentar absenden',
    blogCommentSuccess: 'Ihr Kommentar wurde übermittelt und wird nach redaktioneller Prüfung freigeschaltet.',
    blogBackBtn: 'Zurück zu Nachrichten & Chroniken',

    // Library
    libTitle: 'Digitale Bibliothek & Dokumentenarchiv',
    libDesc: 'Offizielle Berichte, Gerichtsakten, Filme, Dokumentationen, Tondokumente und Fotografien zur Erforschung der Erinnerung der Region Maule.',
    libSearchPlaceholder: 'Nach Titel, Thema oder Quelle suchen…',
    libAllFormats: 'Alle Formate',
    libAllTags: 'Alle Schlagworte',
    libCount: 'Dokument(e)',
    libNotFound: 'Keine Dokumente gefunden.',
    libOpen: 'Öffnen / Lesen',
    libDownload: 'Herunterladen',

    // Contribute (Offenes Archiv)
    contribTitle: 'Offenes Archiv',
    contribDesc: 'Haben Sie einen Bericht, ein Foto, ein Dokument oder kennen Sie einen Ort, der auf die Karte gehört? Teilen Sie ihn mit uns. Unser Team prüft jeden Beitrag unter Wahrung der Menschenwürde vor der Veröffentlichung.',
    contribSuccess: 'Wir haben Ihren Beitrag erhalten. Er wird von unserem Team geprüft. Vielen Dank für Ihren Beitrag zur Erinnerungskultur!',
    contribType: 'Art des Beitrags',
    contribName: 'Name (optional)',
    contribContact: 'Kontakt (optional)',
    contribTitleField: 'Titel',
    contribStory: 'Bericht oder Beschreibung',
    contribLink: 'Dateilink (Drive, YouTube, usw.)',
    contribNote: 'Beiträge werden lokal in diesem Browser gespeichert (Demo). Für den dauerhaften Betrieb ist ein Server-Backend erforderlich.',
    contribSendBtn: 'Beitrag absenden',

    // Landing Cards
    landingCardExhibitionTitle: 'Sonderausstellung: Colonia Dignidad, NS-Netzwerke & Diktatur',
    landingCardExhibitionDesc: 'Kuratierte Ausstellungstafeln für Vorträge und Gedenkveranstaltungen in Europa: Paul Schäfers Flucht aus der BRD, DINA-Folterzentrum, Operation Fernseher-Rückzug am Rio Perquilauquén, deutsches diplomatisches Versagen und Beschluss des Deutschen Bundestages.',
    landingCardExhibitionTag: 'Parral · DE/EN/ES',
    landingCardSuenosTitle: 'Die Träume, die sie bauten',
    landingCardSuenosDesc: 'Traditionelles Handwerk, ländliche Agrarreformsiedlungen, Musikfeste und gelebte Solidarität vor der Zeit des Schweigens.',
    landingCardArteTitle: 'Kunst & Universelle Menschenrechte',
    landingCardArteDesc: 'Georeferenzierte Wandgemälde, bäuerliche Reime und regionaler Rap für die Würde der Gemeinschaften.',
    landingCardTalleresTitle: 'Gemeinschafts-Workshops',
    landingCardTalleresDesc: 'Herunterladbare und druckbare Leitfäden: Familienkartografie („Die Karte deiner Großeltern“), Wandbehänge (Arpilleras) und Audiointerviews.',
    landingCardMuseoTitle: 'Digitales Museum',
    landingCardMuseoDesc: 'Interaktive Galerie mit Archivfotos, Zeitungsberichten, Videodokumenten und Audioerzählungen.',
    landingCardBlogTitle: 'Nachrichten & Chroniken',
    landingCardBlogDesc: 'Zweispalten-Archiv: Aktuelle Meldungen links; vertiefende Chroniken, Zeugenberichte und historische Aufarbeitung rechts.',
    landingCardLibraryTitle: 'Digitale Bibliothek',
    landingCardLibraryDesc: 'Offizielle Wahrheitsberichte (Rettig, Valech), Gerichtsakten und historische Dokumente zum freien Download.',

    // Blog extra
    blogCitizenComments: 'Bürgerkommentare',
    blogNoApprovedComments: 'Noch keine genehmigten Kommentare für diesen Beitrag. Seien Sie der Erste!',
    blogCommentAuthorPlaceholder: 'Z.B.: Bürgerin aus Talca',
  },
};

interface LanguageContextProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'es',
  setLang: () => {},
  t: DICTIONARY.es,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('mdm:lang') as Language;
    return saved === 'en' || saved === 'de' || saved === 'es' ? saved : 'es';
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('mdm:lang', l);
  };

  const t = DICTIONARY[lang] || DICTIONARY.es;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
