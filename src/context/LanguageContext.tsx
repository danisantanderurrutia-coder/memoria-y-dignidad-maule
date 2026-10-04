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
