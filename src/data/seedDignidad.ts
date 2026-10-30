import { Articulo, Documento, RegistroMuseo, Sitio } from '../types';

/**
 * DOSSIER HISTÓRICO ESPECIAL: PARRAL, COLONIA DIGNIDAD & DICTADURA
 * Fuentes oficiales y judiciales:
 * - Informes de Verdad: Comisión Rettig (1991), Comisión Valech (2004/2011)
 * - Causas Judiciales: Sentencias Ministro Jorge Zepeda Arancibia (Corte de Apelaciones de Santiago)
 * - Bundestag Alemán: Beschluss Drucksache 18/12943 (2017) sobre Aufarbeitung Colonia Dignidad
 * - Consejo de Monumentos Nacionales de Chile (CMN) - Declaratoria MH Cuartel Parral (2022)
 * - Archivos Desclasificados de la Cancillería Alemana (Auswärtiges Amt, 2016)
 * - Informes de Amnistía Internacional (1977)
 */

const F_BUNDESTAG = { label: 'Deutscher Bundestag – Drucksache 18/12943: Aufarbeitung Colonia Dignidad', url: 'https://www.bundestag.de' };
const F_AA = { label: 'Auswärtiges Amt (Alemania) – Freigabe der Akten zu Colonia Dignidad (2016)', url: 'https://www.auswaertiges-amt.de' };
const F_ZEPEDA = { label: 'Poder Judicial de Chile – Sentencias Ministro en Visita Jorge Zepeda', url: 'https://www.pjud.cl' };
const F_AMNESTY = { label: 'Amnesty International – Report on Disappearances & Colonia Dignidad (1977)', url: 'https://www.amnesty.org' };
const F_CMN = { label: 'Consejo de Monumentos Nacionales (Chile) – Monumento Histórico Cuartel Parral', url: 'https://www.monumentos.gob.cl' };
const F_VALECH = { label: 'Comisión Nacional sobre Prisión Política y Tortura (Valech)', url: 'https://bibliotecadigital.indh.cl/' };
const F_INDH = { label: 'Instituto Nacional de Derechos Humanos (INDH)', url: 'https://www.indh.cl' };
const F_MV = { label: 'Memoria Viva – Archivo Digital de Derechos Humanos', url: 'https://www.memoriaviva.com' };

// =========================================================================
// 1. SITIOS GEOREFERENCIADOS EN PARRAL Y COLONIA DIGNIDAD
// =========================================================================
export const DIGNIDAD_SITIOS: Sitio[] = [
  {
    id: 'fosas-perquilauquen-parral',
    titulo: 'Fosas Clandestinas del Río Perquilauquén y «Operación Retiro de Televisores» (Parral)',
    comuna: 'Parral',
    provincia: 'Linares',
    epoca: 'dictadura',
    tipo: 'colonia',
    lat: -36.1042,
    lng: -71.6421,
    periodo: '1973–1978 · Excavaciones y peritajes 2005–presente',
    resena:
      'En los faldeos precordilleranos de Parral, junto a las quebradas del río Perquilauquén dentro del fundo El Lavadero de Colonia Dignidad, operaron fosas clandestinas donde fueron inhumados prisioneros políticos trasladados por agentes de la DINA desde Santiago y otras zonas del país, según han establecido las investigaciones judiciales.\n\nA fines de 1978, tras el hallazgo de los hornos de Lonquén, la dictadura ordenó la secreta «Operación Retiro de Televisores»: con maquinaria pesada del enclave y la participación de colonos de la cúpula, los restos fueron desenterrados e incinerados, y sus cenizas y fragmentos óseos arrojados a las aguas del río Perquilauquén para borrar todo rastro.\n\nPeritajes del Servicio Médico Legal y la Policía de Investigaciones encabezados por el ministro Jorge Zepeda han identificado puntos de fosas y recuperado fragmentos óseos calcinados y otros indicios.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fosas_en_Colonia_Dignidad_01.JPG',
        caption: 'Excavaciones judiciales de fosas clandestinas en los terrenos de Colonia Dignidad, Parral (Peritajes SML / PDI).',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Fosa_en_Colonia_Dignidad_detenidos_desaparecidos.jpg',
        caption: 'Fosa clandestina periciada por la justicia chilena en la precordillera de Parral.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Fosa_en_Colonia_Dignidad.JPG',
        caption: 'Fosa perimetral y demarcación en los operativos de búsqueda de detenidos desaparecidos.',
      },
    ],
    testimonioAutor: '',
    testimonio: '',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_ZEPEDA, F_BUNDESTAG, F_INDH, F_MV],
  },
  {
    id: 'bunker-tuneles-dignidad',
    titulo: 'Red de Túneles, Búnker Subterráneo y Depósitos Clandestinos de Armas (Parral)',
    comuna: 'Parral',
    provincia: 'Linares',
    epoca: 'dictadura',
    tipo: 'colonia',
    lat: -36.0895,
    lng: -71.6582,
    periodo: '1973–2005 · Incautación del mayor arsenal privado en Chile (junio de 2005)',
    resena:
      'Complejo subterráneo de hormigón armado, búnkeres de comando y túneles de comunicación construidos bajo la dirección de la jerarquía de Paul Schäfer con asesoría técnica militar. Este recinto albergó sistemas de infraestructura de comunicaciones del enclave.\n\nEn 2005, tras la captura de Paul Schäfer, la policía chilena halló en el predio depósitos subterráneos con armamento de guerra y munición, además de indicios de sustancias químicas.\n\nEstos hallazgos reforzaron la evidencia de la relación entre el enclave, la dictadura de Augusto Pinochet y los servicios de inteligencia.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Villa_Baviera.jpg',
        caption: 'Instalaciones centrales del enclave en Parral bajo las cuales se emplazaba la red subterránea y recintos de encierro.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Hito_entrada_Villa_Baviera.jpg',
        caption: 'Hito y portal de control perimetral que mantuvo incomunicado el predio durante más de cuatro décadas.',
      },
    ],
    testimonioAutor: '',
    testimonio: '',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_ZEPEDA, F_BUNDESTAG, F_MV],
  },
  {
    id: 'hospital-colonia-dignidad',
    titulo: 'Hospital de Colonia Dignidad: Fachada Social, Sedación Sistemática y Fármacos (Parral)',
    comuna: 'Parral',
    provincia: 'Linares',
    epoca: 'dictadura',
    tipo: 'colonia',
    lat: -36.0811,
    lng: -71.6705,
    periodo: '1962–1990',
    resena:
      'El hospital del enclave fue promovido por la secta como un servicio de beneficencia gratuita hacia los campesinos y pobladores vulnerables de Parral y San Fabián de Alico. Esta fachada de asistencia médica fue clave para conseguir la simpatía de autoridades locales y la exención tributaria estatal.\n\nSin embargo, las investigaciones judiciales acreditaron que en su interior operó un régimen de control psiquiátrico represivo: colonos disidentes y jóvenes eran sometidos a electroshocks y sedación forzada con psicofármacos para anular la voluntad. Según testimonios judiciales, durante los años 70 se administraron drogas a prisioneros políticos trasladados al enclave.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Escuela_Villa_Baviera.jpg',
        caption: 'Infraestructura escolar y hospitalaria de la secta utilizada para justificar su estatus de beneficencia ante el Estado.',
      },
    ],
    testimonioAutor: '',
    testimonio: '',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_VALECH, F_BUNDESTAG, F_ZEPEDA],
  },
];

// =========================================================================
// 2. REGISTROS DEL MUSEO DIGITAL: EXPOSICIÓN INTERNACIONAL
// =========================================================================
export const DIGNIDAD_MUSEO: RegistroMuseo[] = [
  {
    id: 'dignidad-fosas-01',
    titulo: 'Excavaciones y Peritajes de Fosas Clandestinas en Parral',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fosas_en_Colonia_Dignidad_01.JPG',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Fosas_en_Colonia_Dignidad_01.JPG',
    credito: 'Archivos periciales de derechos humanos / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '2005–2012',
    lugar: 'Fundo El Lavadero, Parral',
    relato:
      'Evidencia arqueológica y forense de las fosas clandestinas cavadas en los faldeos cordilleranos de Parral. En este sitio fueron sepultados prisioneros políticos trasladados por la DINA, cuyos cuerpos fueron exhumados y quemados ilegalmente en 1978 en la «Operación Retiro de Televisores».',
    audioUrl: '',
  },
  {
    id: 'dignidad-fosa-ddhh',
    titulo: 'Fosa de Detenidos Desaparecidos y Operación Retiro de Televisores',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Fosa_en_Colonia_Dignidad_detenidos_desaparecidos.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Fosa_en_Colonia_Dignidad_detenidos_desaparecidos.jpg',
    credito: 'Registro de memoria histórica / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '2005',
    lugar: 'Ribera del Río Perquilauquén, Parral',
    relato:
      'Punto de excavación forense donde peritos del SML identificaron restos óseos calcinados y vestimentas de opositores a la dictadura. Testimonios judiciales ratificaron la orden militar de exterminio de evidencias tras el escándalo de Lonquén.',
    audioUrl: '',
  },
  {
    id: 'dignidad-prensa-alemana-1966',
    titulo: 'Prensa Austríaco-Alemana: Primeras Denuncias de Familias (1966)',
    categoria: 'Prensa',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Kleine_Zeitung_vom_29._April_1966%2C_Seite_5.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Kleine_Zeitung_vom_29._April_1966,_Seite_5.jpg',
    credito: 'Kleine Zeitung (29. April 1966) / Wikimedia Commons',
    anio: '1966',
    lugar: 'Graz / Bonn / Parral',
    relato:
      'Página histórica del diario Kleine Zeitung del 29 de abril de 1966 documentando la desesperada búsqueda de familias austríacas y alemanas retenidas contra su voluntad por Paul Schäfer en Parral. Evidencia de la temprana alerta internacional desoída por la diplomacia alemana de la época.',
    audioUrl: '',
  },
  {
    id: 'dignidad-familiares-lucha',
    titulo: 'Familiares del Maule en Vigilia Permanente por Verdad y Justicia',
    categoria: 'Acciones',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
    credito: 'Agrupaciones de DDHH del Maule / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '1974–presente',
    lugar: 'Parral / Talca / Linares',
    relato:
      'Mujeres y familiares portando las fotografías de sus detenidos desaparecidos ante los tribunales y el enclave. Su persistencia forzó la intervención de la justicia chilena y debates oficiales en el parlamento alemán (Bundestag) para exigir un sitio de memoria y reparación integral.',
    audioUrl: '',
  },
  {
    id: 'dignidad-conferencia-unige',
    titulo: 'Exposición y Conferencia Internacional Colonia Dignidad (Ginebra/Europa)',
    categoria: 'Momentos',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Conf%C3%A9rence_Colonia_Dignidad_Unige_22_mai_2025_-_11.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Conf%C3%A9rence_Colonia_Dignidad_Unige_22_mai_2025_-_11.jpg',
    credito: 'Université de Genève / Natacha LSP (CC BY-SA 4.0)',
    anio: '2025',
    lugar: 'Ginebra / Berlín',
    relato:
      'Coloquio internacional de juristas, historiadores y sobrevivientes europeos sobre la responsabilidad del Estado alemán, la diplomacia y el imperativo ético de convertir los terrenos de Parral en un Sitio de Memoria y Centro de Documentación internacional (Gedenkstätte).',
    audioUrl: '',
  },
  {
    id: 'dignidad-estacion-parral',
    titulo: 'Estación de Ferrocarriles de Parral y el Clamor de las Familias',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Estaci%C3%B3n_Parral.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Estaci%C3%B3n_Parral.jpg',
    credito: 'Patrimonio Ferroviario Chileno / Wikimedia Commons (CC BY-SA 4.0)',
    anio: 'Histórico',
    lugar: 'Parral',
    relato:
      'Estación de ferrocarriles de Parral, en la línea sur del Maule. Fotografía de 2015.',
    audioUrl: '',
  },
  {
    id: 'dignidad-perquilauquen-rio',
    titulo: 'Río Perquilauquén: Destino Final de las Cenizas de la «Operación Retiro de Televisores»',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Parral_and_river_Perquilauqu%C3%A9n.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Parral_and_river_Perquilauqu%C3%A9n.jpg',
    credito: 'Cethos / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '1978–presente',
    lugar: 'Límite Parral - Ñuble, Río Perquilauquén',
    relato:
      'Caudal del río Perquilauquén en la precordillera de Parral. En estas aguas fueron arrojadas las cenizas y restos óseos calcinados de decenas de opositores a la dictadura tras ser exhumados clandestinamente con maquinaria pesada en 1978.',
    audioUrl: '',
  },
  {
    id: 'dignidad-hotel-turismo-negacionismo',
    titulo: 'El Dilema de «Villa Baviera»: Turismo Comercial sobre un Centro de Tortura',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Hotel_Villa_Baviera.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Hotel_Villa_Baviera.jpg',
    credito: 'Wikimedia Commons (CC BY-SA 3.0)',
    anio: 'Actualidad',
    lugar: 'Fundo El Lavadero, Parral',
    relato:
      'Instalaciones hoteleras y gastronómicas abiertas al turismo en los mismos terrenos donde operaron el búnker y las celdas de aislamiento. Agrupaciones de derechos humanos de Chile y Alemania exigen su expropiación para transformarlo en un Sitio de Memoria sin fines de lucro.',
    audioUrl: '',
  },
  {
    id: 'dignidad-myrna-troncoso',
    titulo: 'Myrna Troncoso: Medio Siglo de Lucha contra la Impunidad de Schäfer',
    categoria: 'Acciones',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Myrna_Troncoso.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Myrna_Troncoso.jpg',
    credito: 'Archivo Agrupación de Familiares / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '1975–presente',
    lugar: 'Parral / Talca',
    relato:
      'Retrato de Myrna Troncoso, emblemática dirigenta de la Agrupación de Familiares de Detenidos Desaparecidos y Ejecutados Políticos de Talca y Parral. Su hermano Ricardo Troncoso Muñoz, profesor y militante del MIR, fue detenido por la DINA el 15 de agosto de 1974 en Santiago y permanece desaparecido; las investigaciones lo vinculan con Colonia Dignidad.',
    audioUrl: '',
  },
  {
    id: 'dignidad-margarita-romero',
    titulo: 'Asociación por la Memoria y los Derechos Humanos Colonia Dignidad',
    categoria: 'Acciones',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Margarita_Romero_M%C3%A9ndez.JPG',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Margarita_Romero_M%C3%A9ndez.JPG',
    credito: 'Wikimedia Commons (CC BY-SA 4.0)',
    anio: '2014–presente',
    lugar: 'Berlín / Santiago / Parral',
    relato:
      'Margarita Romero Méndez, médica y presidenta de la Asociación por la Memoria y los Derechos Humanos Colonia Dignidad (fundada en 2014), que exige verdad, justicia, reparación y la conversión del lugar en un sitio de memoria.',
    audioUrl: '',
  },
  {
    id: 'dignidad-plaza-armas-parral',
    titulo: 'Plaza de Armas de Parral: Epicentro Cívico del Maule Sur',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plaza_de_Armas_de_Parral.JPG',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Plaza_de_Armas_de_Parral.JPG',
    credito: 'Wikimedia Commons (CC BY-SA 3.0)',
    anio: 'Contemporáneo',
    lugar: 'Parral',
    relato:
      'Plaza principal de Parral, centro cívico de la ciudad más cercana al enclave de Colonia Dignidad.',
    audioUrl: '',
  },
  {
    id: 'dignidad-mural-parral-alameda',
    titulo: 'Mural de la Identidad y Memoria en la Alameda de Parral',
    categoria: 'Lugares',
    tipo: 'foto',
    mediaUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Mural_Alameda_Parral.jpg',
    fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Mural_Alameda_Parral.jpg',
    credito: 'Xarucoponce / Wikimedia Commons (CC BY-SA 4.0)',
    anio: '2020',
    lugar: 'Alameda de las Delicias, Parral',
    relato:
      'Mural patrimonial en Parral que rinde homenaje a la historia popular del territorio, al campesinado maulino y a la memoria de un pueblo que se negó a vivir bajo la sombra del silencio y el miedo impuesto por el enclave.',
    audioUrl: '',
  },
];

// =========================================================================
// 3. DOCUMENTOS OFICIALES PARA BIBLIOTECA DIGITAL (ALEMÁN, INGLÉS Y ESPAÑOL)
// =========================================================================
export const DIGNIDAD_DOCUMENTOS: Documento[] = [
  {
    id: 'doc-bundestag-2017',
    titulo: 'Deutscher Bundestag: Beschluss Drucksache 18/12943 (Aufarbeitung Colonia Dignidad)',
    descripcion:
      'Resolución histórica unánime del Parlamento Federal Alemán (Bundestag) aprobada en junio de 2017 sobre la responsabilidad del Estado alemán, apoyo a las víctimas chilenas y alemanas, y creación de una Gedenkstätte (Sitio de Memoria y Centro de Documentación) en el predio de Parral.',
    formato: 'PDF',
    etiquetas: ['Bundestag', 'Alemania', 'Gedenkstätte', 'Colonia Dignidad', 'Derechos Humanos'],
    anio: 2017,
    fuente: 'Deutscher Bundestag (Parlamento Federal Alemán)',
    url: 'https://dserver.bundestag.de/btd/18/129/1812943.pdf',
  },
  {
    id: 'doc-auswaertiges-amt-2016',
    titulo: 'Auswärtiges Amt: Rede von Bundesaußenminister Frank-Walter Steinmeier zu Colonia Dignidad',
    descripcion:
      'Discurso y declaración oficial del entonces ministro de Relaciones Exteriores (y posterior Presidente Federal) Frank-Walter Steinmeier el 26 de abril de 2016 reconociendo el fracaso diplomático, la pasividad de la embajada en Santiago y la apertura anticipada de los archivos diplomáticos alemanes.',
    formato: 'PDF',
    etiquetas: ['Diplomacia', 'Steinmeier', 'Alemania', 'Archivos Desclasificados', 'BND'],
    anio: 2016,
    fuente: 'Auswärtiges Amt Deutschland',
    url: 'https://www.auswaertiges-amt.de',
  },
  {
    id: 'doc-amnesty-1977',
    titulo: 'Amnesty International: Disappeared Prisoners in Chile and Colonia Dignidad (1977)',
    descripcion:
      'Primer informe internacional de Amnistía Internacional publicado en 1977 que mencionó la existencia de un centro de torturas y desaparición en el enclave alemán de Parral.',
    formato: 'PDF',
    etiquetas: ['Amnesty International', '1977', 'Informe Internacional', 'Tortura'],
    anio: 1977,
    fuente: 'Amnesty International Archives',
    url: 'https://www.amnesty.org',
  },
  {
    id: 'doc-trailer-colonia-watson',
    titulo: 'Película «Colonia» (Florian Gallenberger, 2015) — Tráiler',
    descripcion:
      'Largometraje de ficción histórica protagonizado por Emma Watson (Lena) y Daniel Brühl (Daniel), con Michael Nyqvist como Paul Schäfer. Ambientado en 1973, relata la búsqueda desesperada de una joven cuyo novio es secuestrado por la DINA tras el golpe de Estado y trasladado a los túneles y celdas de Colonia Dignidad en Parral.',
    formato: 'Video',
    etiquetas: ['Cine', 'Emma Watson', 'Daniel Brühl', 'Colonia Dignidad', 'DINA', 'Ficción Histórica'],
    anio: 2015,
    fuente: 'Majestic Filmverleih / Screen Media Films',
    url: 'https://www.youtube.com/results?search_query=Colonia+2015+trailer+oficial+Emma+Watson+Daniel+Bruhl',
  },
  {
    id: 'doc-trailer-serie-netflix',
    titulo: 'Serie Documental «Colonia Dignidad: Una secta alemana en Chile» (Netflix / WDR, 2021) — Tráiler',
    descripcion:
      'Serie documental coproducida por Netflix y WDR (2021) que combina material de archivo y testimonios sobre la secta. Aborda el adoctrinamiento infantil de Paul Schäfer, la colaboración con la DINA en torturas y desaparición forzada, y testimonios de víctimas chilenas y alemanas.',
    formato: 'Video',
    etiquetas: ['Serie', 'Netflix', 'Documental', 'Colonia Dignidad', 'Archivos Inéditos', 'DINA'],
    anio: 2021,
    fuente: 'Netflix Latinoamérica / WDR',
    url: 'https://www.youtube.com/results?search_query=Colonia+Dignidad+una+secta+alemana+en+Chile+Netflix+trailer',
  },
  {
    id: 'doc-trailer-serie-dignidad',
    titulo: 'Serie «Dignidad» (Joyn / Mega / Amazon Prime Video, 2019)',
    descripcion:
      'Serie de ficción y suspenso chileno-alemana creada por María Elena Wood y Patricio Pereira. Con saltos temporales hacia fines de los años 90, sigue al joven abogado Leo Ramírez en la investigación para capturar a Paul Schäfer.',
    formato: 'Video',
    etiquetas: ['Serie', 'Amazon Prime', 'Thriller', 'Colonia Dignidad', 'Justicia', 'Mega'],
    anio: 2019,
    fuente: 'Invercine & Wood / Mega / Joyn',
    url: 'https://www.youtube.com/results?search_query=serie+Dignidad+Mega+2019+trailer+Colonia+Dignidad',
  },
  {
    id: 'doc-trailer-casa-lobo',
    titulo: 'Largometraje «La Casa Lobo» (The Wolf House / Cristóbal León & Joaquín Cociña, 2018) — Tráiler',
    descripcion:
      'Película chilena de animación stop-motion aclamada internacionalmente y galardonada con el Premio Caligari en la Berlinale. Inspirada en la atmósfera siniestra de Colonia Dignidad, narra la huida de María, una joven que escapa del enclave y se refugia en una casa del bosque que muta constantemente.',
    formato: 'Video',
    etiquetas: ['Cine', 'Animación Stop-Motion', 'Berlinale', 'Arte', 'Memoria'],
    anio: 2018,
    fuente: 'Diluvio Producciones / Festival de Berlín',
    url: 'https://www.youtube.com/results?search_query=La+Casa+Lobo+The+Wolf+House+trailer+oficial',
  },
  {
    id: 'doc-trailer-cantos-represion',
    titulo: 'Documental «Cantos de Represión» (Songs of Repression, 2020) — Tráiler',
    descripcion:
      'Documental danés-chileno dirigido por Marianne Hougen-Moraga y Estephan Wagner (Gran Premio CPH:DOX). Retrata el complejo presente de los residentes de la actual «Villa Baviera», los cantos folclóricos alemanes como coraza psicológica y la difícil convivencia entre víctimas de abusos y exjerarcas.',
    formato: 'Video',
    etiquetas: ['Documental', 'CPH:DOX', 'Villa Baviera', 'Trauma Colectivo', 'Memoria'],
    anio: 2020,
    fuente: 'Final Cut for Real / CPH:DOX',
    url: 'https://www.youtube.com/results?search_query=Songs+of+Repression+Cantos+de+Represion+trailer',
  },
  {
    id: 'doc-trailer-pacto-adriana',
    titulo: 'Documental «El Pacto de Adriana» (Lissette Orozco, 2017) — Tráiler',
    descripcion:
      'Documental chileno premiado internacionalmente sobre los secretos de Adriana Rivas, secretaria de Manuel Contreras en la Dirección de Inteligencia Nacional (DINA). Expone la estructura de cuarteles clandestinos de exterminio y la búsqueda de justicia ciudadana.',
    formato: 'Video',
    etiquetas: ['Documental', 'DINA', 'Justicia', 'Derechos Humanos'],
    anio: 2017,
    fuente: 'Salmón Producciones',
    url: 'https://www.youtube.com/results?search_query=El+Pacto+de+Adriana+trailer+oficial',
  },
];

// =========================================================================
// 4. CRÓNICAS Y NOTICIAS EN PROFUNDIDAD (INVESTIGACIÓN DE CRÍMENES Y VERDAD)
// =========================================================================
export const DIGNIDAD_ARTICULOS: Articulo[] = [
  {
    id: 'art-dignidad-berlin',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Conf%C3%A9rence_Colonia_Dignidad_Unige_22_mai_2025_-_11.jpg',
    imagenCredito: 'Coloquio internacional de memoria histórica en Europa',
    titulo: 'Parral, Colonia Dignidad y Europa: Los hilos nazis de la dictadura y la lucha por la Gedenkstätte',
    resumen:
      'Cómo un enclave sectario en la precordillera de Parral unió el pasado nazi alemán, la red represiva de la DINA y una batalla diplomática que hoy convoca a tribunales y exposiciones en Berlín y Ginebra.',
    categoria: 'Crónica',
    autor: 'Equipo de Investigación Histórica',
    fecha: '2026-03-24',
    contenido:
      'A principios de la década de 1960, Paul Schäfer —un exenfermero de la Wehrmacht y predicador fundamentalista— huyó de Alemania Occidental tras órdenes de arresto por abuso de menores y fundó la Sociedad Benefactora y Educacional Dignidad en el fundo El Lavadero, en la precordillera de Parral, Región del Maule.\n\nCon el golpe de Estado de 1973, el enclave selló un pacto criminal con la Dirección de Inteligencia Nacional (DINA) de Manuel Contreras. Colonia Dignidad no fue un mero campo de trabajo forzado para sus colonos: se transformó en un cuartel clandestino de torturas e interrogatorios de prisioneros políticos trasladados desde Santiago y el Maule, una fábrica clandestina de armas y un laboratorio de experimentación química con gas sarín encabezado por el bioquímico Eugenio Berríos.\n\nEn 1978, la dictadura orquestó la siniestra «Operación Retiro de Televisores»: fosas comunes en las riberas del río Perquilauquén fueron desenterradas con maquinaria pesada, los restos incinerados y las cenizas arrojadas al río para impedir cualquier prueba forense futura.\n\nDurante cuatro décadas, la embajada alemana en Santiago y la diplomacia de Bonn miraron hacia otro lado a pesar de las denuncias de fugitivos heroicos como Wolfgang Müller y Salo Luna, y de los informes de Amnistía Internacional de 1977. No fue sino hasta 2016 cuando el ministro de Relaciones Exteriores Frank-Walter Steinmeier reconoció públicamente la corresponsabilidad moral del Estado alemán, y en 2017 el Bundestag aprobó por unanimidad exigir memoria, archivos y una Gedenkstätte (Sitio de Memoria binacional).\n\nHoy, la comuna de Parral y las agrupaciones de familiares del Maule se encuentran en el centro de un debate memorial de alcance mundial: la recuperación de los terrenos para erigir un espacio de dignidad humana, educación y verdad histórica sin fines turísticos ni comerciales.',
  },
  {
    id: 'art-fosas-retiro-televisores',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fosas_en_Colonia_Dignidad_01.JPG',
    imagenCredito: 'Peritajes forenses judiciales SML y PDI en Parral',
    titulo: 'La Operación Retiro de Televisores en Parral: La orden secreta de Pinochet para desenterrar y calcinar los cuerpos',
    resumen: 'Investigación judicial sobre la maquinaria pesada, las fosas del río Perquilauquén y las declaraciones judiciales de excolonos.',
    categoria: 'Archivo',
    autor: 'Equipo de Investigación Histórica',
    fecha: '2026-02-15',
    contenido:
      'En noviembre de 1978, el hallazgo fortuito de los restos de quince campesinos en los antiguos hornos de cal de Lonquén provocó una conmoción nacional e internacional que desbarató la tesis de la dictadura sobre los «presuntos desaparecidos».\n\nAnte el temor a nuevos descubrimientos que expusieran al régimen, Augusto Pinochet ordenó una directiva militar confidencial a nivel nacional denominada en clave «Operación Retiro de Televisores». La misión: ubicar todas las fosas clandestinas del país donde se hubiesen inhumado prisioneros políticos, desenterrar los cadáveres y destruirlos por completo.\n\nEn Colonia Dignidad, la orden fue ejecutada con frialdad y disciplina militar. Colonos del círculo de hierro de Schäfer, entre ellos miembros de la cúpula de la secta, operaron las retroexcavadoras pesadas del enclave en las quebradas cercanas al río Perquilauquén. Durante noches enteras removieron las fosas comunes. Según los antecedentes judiciales, los restos fueron incinerados con combustible.\n\nLas hogueras ardieron durante días hasta convertir los restos óseos en cenizas. Luego, utilizando palas y cribas metálicas, recogieron los residuos calcinados y los lanzaron a la corriente del río Perquilauquén, mientras arrojaban la tierra removida a otras quebradas.\n\nDécadas después, los peritajes científicos dirigidos por el ministro en visita extraordinaria Jorge Zepeda Arancibia, junto al Servicio Médico Legal, peritos de la Policía de Investigaciones y arqueólogos forenses, lograron ubicar fosas en el predio y recuperar fragmentos óseos calcinados y otros indicios que forman parte de las causas judiciales.',
  },
  {
    id: 'art-cuartel-carrera-pinto-parral',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
    imagenCredito: 'Familiares de Parral y Linares en manifestación por la memoria',
    titulo: 'De Cuartel de Torturas a Monumento Nacional: El inmueble de Ignacio Carrera Pinto 262 en Parral',
    resumen: 'Cómo la perseverancia de las agrupaciones de familiares del Maule logró proteger la casa que unió a la DINA con Colonia Dignidad.',
    categoria: 'Noticia',
    autor: 'Equipo editorial',
    fecha: '2026-01-20',
    contenido:
      'A solo cuadras del centro de Parral, en la calle Ignacio Carrera Pinto N° 262, una casona de fachada continua albergó entre 1974 y 1977 uno de los secretos más oscuros de la inteligencia militar: el cuartel de la Brigada de Inteligencia Regional Sur de la DINA.\n\nEl inmueble pertenecía formalmente a la Sociedad Benefactora y Educacional Dignidad y fue cedido directamente a los mandos de la DINA como base de operaciones. Según los antecedentes recopilados por organizaciones de derechos humanos, funcionó como recinto de detención y tortura de prisioneros políticos.\n\nDurante la transición democrática, el inmueble corrió serio riesgo de demolición o alteración comercial para borrar las marcas de su pasado represivo. A partir de 2016, la Agrupación de Familiares de Detenidos Desaparecidos y Ejecutados Políticos de Talca, la Agrupación de Parral y colectivos de derechos humanos del Maule iniciaron una tenaz campaña ciudadana.\n\nEn sesión plenaria del Consejo de Monumentos Nacionales (CMN) se acogió la solicitud y el inmueble fue declarado Monumento Histórico mediante el Decreto Supremo N° 41, publicado en el Diario Oficial el 13 de septiembre de 2022. La declaratoria protege la edificación como vestigio material de la relación entre la DINA y Colonia Dignidad.',
  },
  {
    id: 'art-laboratorio-quimico-berrios',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Escuela_Villa_Baviera.jpg',
    imagenCredito: 'Instalaciones del enclave donde operaron arsenales y laboratorios',
    titulo: 'Armas químicas y el laboratorio secreto: El paso del bioquímico de la DINA Eugenio Berríos por Parral',
    resumen: 'Las investigaciones judiciales vinculan al enclave con experimentos de armas químicas y con un arsenal oculto.',
    categoria: 'Archivo',
    autor: 'Equipo de Investigación Histórica',
    fecha: '2025-11-10',
    contenido:
      'Las investigaciones de los ministros Alejandro Madrid y Jorge Zepeda dejaron al descubierto uno de los capítulos más siniestros de la colaboración entre la inteligencia de Augusto Pinochet y los jerarcas alemanes de Colonia Dignidad: la producción de armamento químico y biológico con el «Proyecto Andrea».\n\nEn la segunda mitad de los años 70, el químico de la DINA Eugenio Berríos (quien más tarde fuera asesinado en Uruguay por agentes de inteligencia para evitar que testificara) habría trabajado en un laboratorio clandestino vinculado al fundo El Lavadero en Parral. Según las investigaciones judiciales, allí se experimentó con gas sarín y otras sustancias.\n\nA ello se sumó el hallazgo, en 2005, de depósitos subterráneos con armamento de guerra y munición en el predio.\n\nEstos hallazgos refuerzan la evidencia de que el enclave operó como un espacio de poder armado al margen de la ley, vinculado a los aparatos de la dictadura.',
  },
];

