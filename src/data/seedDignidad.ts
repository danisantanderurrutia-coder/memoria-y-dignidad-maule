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
      'En los faldeos precordilleranos de Parral, junto a las quebradas del río Perquilauquén dentro del fundo El Lavadero de Colonia Dignidad, operaron fosas clandestinas donde fueron inhumados prisioneros políticos trasladados por agentes de la DINA desde cuarteles secretos de Santiago (como Londres 38, Villa Grimaldi y José Domingo Cañas) y de la Región del Maule.\n\nA fines de 1978, tras el hallazgo de los hornos de Lonquén, la dictadura ordenó la secreta «Operación Retiro de Televisores»: con maquinaria pesada del enclave y colaboración de colonos de confianza liderados por Gerhard Mücke, los cuerpos fueron desenterrados, quemados con fósforo y combustible en fosas de combustión, y sus cenizas y restos óseos arrojados a las aguas del río Perquilauquén para borrar todo rastro.\n\nPeritajes del Servicio Médico Legal y la Policía de Investigaciones encabezados por el ministro Jorge Zepeda han identificado más de una treintena de puntos de fosas, trozos de proyectiles, restos óseos calcinados y pertenencias personales.',
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
    testimonioAutor: 'Declaración judicial de excolono Gerhard Mücke ante ministro Jorge Zepeda',
    testimonio:
      '«Se nos ordenó cavar fosas profundas con la retroexcavadora cerca del río. Años después, de noche, recibimos la orden militar de remover la tierra, apilar maderas y quemar todo hasta que no quedara nada visible, tirando las cenizas a las aguas del río Perquilauquén.»',
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
      'Complejo subterráneo de hormigón armado, búnkeres de comando y túneles de comunicación construidos bajo la dirección de la jerarquía de Paul Schäfer con asesoría técnica militar. Este recinto albergó sistemas de radiocomunicaciones que enlazaban directamente con la DINA en Santiago y estaciones de onda corta hacia Europa.\n\nEn junio de 2005, la policía civil chilena allanó tres arsenales subterráneos ocultos bajo contenedores sellados, incautando el mayor arsenal bélico privado registrado en la historia de Chile: fusiles de asalto automáticos (incluidos lanzacohetes antitanque, ametralladoras MG3, explosivos C4, granadas, componentes de fabricación de armas y tecnología de armamento químico desarrollada junto al bioquímico de la DINA Eugenio Berríos).\n\nEstos antecedentes confirmaron los vínculos orgánicos entre criminales nazis refugiados en Sudamérica, la dictadura de Augusto Pinochet y los servicios de inteligencia.',
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
    testimonioAutor: 'Informe de incautación judicial de arsenales (Corte de Apelaciones de Santiago, 2005)',
    testimonio:
      '«El hallazgo de búnkeres herméticos con blindaje de acero y compuertas automáticas dio cuenta de una infraestructura bélica subterránea concebida para la guerra irregular y la protección de jerarcas buscados internacionalmente.»',
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
      'El hospital del enclave fue promovido por la secta como un servicio de beneficencia gratuita hacia los campesinos y pobladores vulnerables de Parral y San Fabián de Alico. Esta fachada de asistencia médica fue clave para conseguir la simpatía de autoridades locales y la exención tributaria estatal.\n\nSin embargo, las investigaciones judiciales acreditaron que en su interior operó un régimen de control psiquiátrico represivo: colonos disidentes y jóvenes eran sometidos a electroshocks, sedación forzada con psicofármacos pesados para anular la voluntad, y esterilizaciones encubiertas. Durante los años 70, médicos del enclave colaboraron con la DINA administrando drogas e inyecciones a prisioneros políticos traídos encapuchados desde Santiago.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Escuela_Villa_Baviera.jpg',
        caption: 'Infraestructura escolar y hospitalaria de la secta utilizada para justificar su estatus de beneficencia ante el Estado.',
      },
    ],
    testimonioAutor: 'Testimonio de sobreviviente ante la Comisión Valech',
    testimonio:
      '«Si alguien protestaba o quería salir a ver a sus parientes a Parral, el doctor lo declaraba mentalmente perturbado. Nos inyectaban tranquilizantes en el hospital y nos dejaban en camas de aislamiento sin poder movernos durante semanas.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_VALECH, F_BUNDESTAG, F_ZEPEDA],
  },
  {
    id: 'plaza-parral-memoria-ddhh',
    titulo: 'Plaza de la Memoria y Ruta Urbana de Derechos Humanos de Parral',
    comuna: 'Parral',
    provincia: 'Linares',
    epoca: 'transicion',
    tipo: 'memorial',
    lat: -36.1438,
    lng: -71.8262,
    periodo: '2016–presente',
    resena:
      'En el núcleo urbano de Parral, la Agrupación de Familiares de Detenidos Desaparecidos y Ejecutados Políticos de Talca y Parral (junto a organizaciones de derechos humanos del Maule) ha consolidado una ruta de dignidad cívica.\n\nParral no solo fue la comuna receptora involuntaria del enclave de Paul Schäfer: fue ante todo una comunidad donde familias campesinas, obreros ferroviarios y jóvenes lucharon por desmantelar el manto de impunidad que protegió a la secta. Desde la Plaza de Armas y la Estación de Ferrocarriles partían las caravanas de búsqueda y vigilias de familiares que desafiaron las amenazas y la censura de la dictadura.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Estaci%C3%B3n_Parral.jpg',
        caption: 'Estación de Ferrocarriles de Parral: punto neurálgico del arribo de familiares y observadores internacionales de derechos humanos.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
        caption: 'Familiares de víctimas de Parral y el Maule en vigilias permanentes por verdad y justicia.',
      },
    ],
    testimonioAutor: 'Myrna Troncoso, dirigenta de la Agrupación de Familiares del Maule',
    testimonio:
      '«Caminamos por las calles de Parral cuando nadie se atrevía a mirar hacia la cordillera. Exigir saber dónde están nuestros seres queridos frente a los portones de la Colonia fue un acto de amor inquebrantable que abrió las puertas de la verdad.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_INDH, F_MV],
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
      'Llegada histórica del tren al sur del Maule: por estos andenes arribaron delegaciones de Amnistía Internacional en 1977, jueces de la República y madres que buscaban a sus hijos en el fundo El Lavadero.',
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
      'Retrato de Myrna Troncoso, emblemática dirigenta de la Agrupación de Familiares de Detenidos Desaparecidos y Ejecutados Políticos de Talca y Parral. Su hermano Ricardo Troncoso Muñoz fue secuestrado en Santiago por la DINA y hecho desaparecer en Colonia Dignidad.',
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
      'Dra. Margarita Romero Méndez, presidenta de la Asociación por la Memoria y los Derechos Humanos Colonia Dignidad, impulsora ante el Bundestag alemán y el gobierno de Chile de la comisión binacional para el esclarecimiento de crímenes y la creación de la Gedenkstätte.',
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
      'La plaza principal de Parral ha sido el espacio cívico donde se reunieron comisiones parlamentarias, periodistas internacionales que investigaban a Schäfer y las vigilias anuales de organizaciones maulinas demandando justicia.',
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
    id: 'doc-sentencia-zepeda',
    titulo: 'Sentencia Causa Rol 2.182-98: Desaparición Forzada y Fosas Clandestinas en Parral',
    descripcion:
      'Fallo histórico del ministro en visita extraordinaria de la Corte de Apelaciones de Santiago, Jorge Zepeda Arancibia, que acreditó la asociación ilícita entre Paul Schäfer, la jerarquía de Colonia Dignidad y la DINA para cometer secuestros calificados, torturas, inhumaciones y exhumaciones ilegales en Parral.',
    formato: 'PDF',
    etiquetas: ['Poder Judicial', 'Sentencia', 'DINA', 'Parral', 'Fosas'],
    anio: 2013,
    fuente: 'Corte de Apelaciones de Santiago / Poder Judicial',
    url: 'https://www.pjud.cl',
  },
  {
    id: 'doc-amnesty-1977',
    titulo: 'Amnesty International: Disappeared Prisoners in Chile and Colonia Dignidad (1977)',
    descripcion:
      'Primer informe internacional de Amnistía Internacional publicado en marzo de 1977 que denunció ante la ONU y gobiernos occidentales la existencia de un centro de torturas y desaparición en el enclave alemán de Parral.',
    formato: 'PDF',
    etiquetas: ['Amnesty International', '1977', 'Informe Internacional', 'Tortura'],
    anio: 1977,
    fuente: 'Amnesty International Archives',
    url: 'https://www.amnesty.org',
  },
  {
    id: 'doc-trailer-colonia-watson',
    titulo: 'Película «Colonia» (Florian Gallenberger, 2015) — Tráiler Oficial',
    descripcion:
      'Largometraje de ficción histórica protagonizado por Emma Watson (Lena) y Daniel Brühl (Daniel), con Michael Nyqvist como Paul Schäfer. Ambientado en 1973, relata la búsqueda desesperada de una joven cuyo novio es secuestrado por la DINA tras el golpe de Estado y trasladado a los túneles y celdas de Colonia Dignidad en Parral.',
    formato: 'Video',
    etiquetas: ['Cine', 'Emma Watson', 'Daniel Brühl', 'Colonia Dignidad', 'DINA', 'Ficción Histórica'],
    anio: 2015,
    fuente: 'Majestic Filmverleih / Screen Media Films (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=sI91_W9VwJE',
  },
  {
    id: 'doc-trailer-serie-netflix',
    titulo: 'Serie Documental «Colonia Dignidad: Una secta alemana en Chile» (Netflix / WDR, 2021) — Tráiler Oficial',
    descripcion:
      'Aclamada serie documental en 6 episodios coproducida por Netflix, WDR, NDR y Arte. Exhibe material inédito en película de 16mm y video registrado durante más de cuatro décadas por los propios colonos. Aborda el adoctrinamiento infantil de Paul Schäfer, la colaboración con la DINA en torturas y desaparición forzada, y testimonios de víctimas chilenas y alemanas.',
    formato: 'Video',
    etiquetas: ['Serie', 'Netflix', 'Documental', 'Colonia Dignidad', 'Archivos Inéditos', 'DINA'],
    anio: 2021,
    fuente: 'Netflix Latinoamérica / WDR (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=Gk6Wb8iJ7Lg',
  },
  {
    id: 'doc-trailer-serie-dignidad',
    titulo: 'Serie «Dignidad» (Amazon Prime Video / Joyn / Mega, 2020) — Tráiler Oficial',
    descripcion:
      'Serie de ficción y suspenso político chileno-alemana en 8 episodios creada por María Elena Wood y Patricio Pereira. Ambientada en 1997, dramatiza la compleja investigación judicial y policial liderada por el joven fiscal Leo Ramírez para desmantelar la red de impunidad y capturar a Paul Schäfer.',
    formato: 'Video',
    etiquetas: ['Serie', 'Amazon Prime', 'Thriller', 'Colonia Dignidad', 'Justicia', 'Mega'],
    anio: 2020,
    fuente: 'Invercine & Wood / Mega / Joyn (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=qT_Rz0a2dC4',
  },
  {
    id: 'doc-trailer-casa-lobo',
    titulo: 'Largometraje «La Casa Lobo» (The Wolf House / Cristóbal León & Joaquín Cociña, 2018) — Tráiler Oficial',
    descripcion:
      'Película chilena de animación stop-motion aclamada internacionalmente y galardonada con el Premio Caligari en la Berlinale. Inspirada en la atmósfera siniestra de Colonia Dignidad, narra la huida de María, una joven que escapa del enclave y se refugia en una casa del bosque que muta constantemente.',
    formato: 'Video',
    etiquetas: ['Cine', 'Animación Stop-Motion', 'Berlinale', 'Arte', 'Memoria'],
    anio: 2018,
    fuente: 'Diluvio Producciones / Festival de Berlín (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=7DcL62n9i2M',
  },
  {
    id: 'doc-trailer-cantos-represion',
    titulo: 'Documental «Cantos de Represión» (Songs of Repression, 2020) — Tráiler Oficial',
    descripcion:
      'Documental danés-chileno dirigido por Marianne Hougen-Moraga y Estephan Wagner (Gran Premio CPH:DOX). Retrata el complejo presente de los residentes de la actual «Villa Baviera», los cantos folclóricos alemanes como coraza psicológica y la difícil convivencia entre víctimas de abusos y exjerarcas.',
    formato: 'Video',
    etiquetas: ['Documental', 'CPH:DOX', 'Villa Baviera', 'Trauma Colectivo', 'Memoria'],
    anio: 2020,
    fuente: 'Final Cut for Real / CPH:DOX (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=U0q2Q6vQp5Y',
  },
  {
    id: 'doc-trailer-pacto-adriana',
    titulo: 'Documental «El Pacto de Adriana» (Lissette Orozco, 2017) — Tráiler Oficial',
    descripcion:
      'Documental chileno premiado internacionalmente sobre los secretos de Adriana Rivas, secretaria de Manuel Contreras en la Dirección de Inteligencia Nacional (DINA). Expone la estructura de cuarteles clandestinos de exterminio y la búsqueda de justicia ciudadana.',
    formato: 'Video',
    etiquetas: ['Documental', 'DINA', 'Justicia', 'Derechos Humanos'],
    anio: 2017,
    fuente: 'Salmón Producciones (YouTube Oficial)',
    url: 'https://www.youtube.com/watch?v=r_Gk6xY1y3M',
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
      'A principios de la década de 1960, Paul Schäfer —un exenfermero de la Wehrmacht y predicador fundamentalista— huyó de Alemania Occidental tras órdenes de arresto por abuso de menores y fundó la Sociedad Benefactora y Educacional Dignidad en el fundo El Lavadero, en la precordillera de Parral, Región del Maule.\n\nCon el golpe de Estado de 1973, el enclave selló un pacto criminal con la Dirección de Inteligencia Nacional (DINA) de Manuel Contreras. Colonia Dignidad no fue un mero campo de trabajo forzado para sus colonos: se transformó en un cuartel clandestino de torturas e interrogatorios de prisioneros políticos trasladados desde Santiago y el Maule, una fábrica clandestina de armas y un laboratorio de experimentación química con gas sarín encabezado por el bioquímico Eugenio Berríos.\n\nEn 1978, la dictadura orquestó la siniestra «Operación Retiro de Televisores»: fosas comunes en las riberas del río Perquilauquén fueron desenterradas con maquinaria pesada, los restos quemados con fósforo químico y las cenizas arrojadas al río para impedir cualquier prueba forense futura.\n\nDurante cuatro décadas, la embajada alemana en Santiago y la diplomacia de Bonn miraron hacia otro lado a pesar de las denuncias de fugitivos heroicos como Wolfgang Müller y Salo Luna, y de los informes de Amnistía Internacional de 1977. No fue sino hasta 2016 cuando el ministro de Relaciones Exteriores Frank-Walter Steinmeier reconoció públicamente la corresponsabilidad moral del Estado alemán, y en 2017 el Bundestag aprobó por unanimidad exigir memoria, archivos y una Gedenkstätte (Sitio de Memoria binacional).\n\nHoy, la comuna de Parral y las agrupaciones de familiares del Maule se encuentran en el centro de un debate memorial de alcance mundial: la recuperación de los terrenos para erigir un espacio de dignidad humana, educación y verdad histórica sin fines turísticos ni comerciales.',
  },
  {
    id: 'art-fosas-retiro-televisores',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fosas_en_Colonia_Dignidad_01.JPG',
    imagenCredito: 'Peritajes forenses judiciales SML y PDI en Parral',
    titulo: 'La Operación Retiro de Televisores en Parral: La orden secreta de Pinochet para desenterrar y calcinar los cuerpos',
    resumen: 'Investigación judicial sobre la maquinaria pesada, las fosas del río Perquilauquén y el testimonio clave de Gerhard Mücke.',
    categoria: 'Archivo',
    autor: 'Equipo de Investigación Histórica',
    fecha: '2026-02-15',
    contenido:
      'En noviembre de 1978, el hallazgo fortuito de los restos de quince campesinos en los antiguos hornos de cal de Lonquén provocó una conmoción nacional e internacional que desbarató la tesis de la dictadura sobre los «presuntos desaparecidos».\n\nAnte el temor a nuevos descubrimientos que expusieran al régimen, Augusto Pinochet ordenó una directiva militar confidencial a nivel nacional denominada en clave «Operación Retiro de Televisores». La misión: ubicar todas las fosas clandestinas del país donde se hubiesen inhumado prisioneros políticos, desenterrar los cadáveres y destruirlos por completo.\n\nEn Colonia Dignidad, la orden fue ejecutada con frialdad y disciplina militar. Colonos del círculo de hierro de Schäfer —entre ellos Gerhard Mücke y Rudolf Koffel— operaron las retroexcavadoras pesadas del enclave en las quebradas cercanas al río Perquilauquén. Durante noches enteras removieron las fosas comunes. Apilaron maderas nativas, neumáticos y vertieron toneladas de combustible y acelerantes químicos fosforados.\n\nLas hogueras ardieron durante días hasta convertir los restos óseos en cenizas. Luego, utilizando palas y cribas metálicas, recogieron los residuos calcinados y los lanzaron a la corriente del río Perquilauquén, mientras arrojaban la tierra removida a otras quebradas.\n\nDécadas después, los peritajes científicos dirigidos por el ministro en visita extraordinaria Jorge Zepeda Arancibia, junto al Servicio Médico Legal, peritos de la Policía de Investigaciones y arqueólogos forenses, lograron ubicar más de 30 fosas periciadas. En el lecho de tierra quemada se recuperaron dientes calcinados, proyectiles balísticos de armas de guerra reglamentarias, restos de ropa descompuesta y fragmentos de objetos personales que constituyen hoy prueba judicial irrefutable ante los tribunales chilenos e internacionales.',
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
      'A solo cuadras del centro de Parral, en la calle Ignacio Carrera Pinto N° 262, una casona de fachada continua albergó entre 1974 y 1977 uno de los secretos más oscuros de la inteligencia militar: el cuartel de la Brigada de Inteligencia Regional Sur de la DINA.\n\nEl inmueble pertenecía formalmente a la Sociedad Benefactora y Educacional Dignidad y fue cedido directamente a los mandos de la DINA como base de operaciones. Por sus habitaciones pasaron decenas de prisioneros políticos secuestrados en las provincias de Linares, Talca, Ñuble y Concepción antes de ser derivados a los subterráneos del enclave precordillerano o asesinados.\n\nDurante la transición democrática, el inmueble corrió serio riesgo de demolición o alteración comercial para borrar las marcas de su pasado represivo. A partir de 2016, la Agrupación de Familiares de Detenidos Desaparecidos y Ejecutados Políticos de Talca, la Agrupación de Parral y colectivos de derechos humanos del Maule iniciaron una tenaz campaña ciudadana.\n\nEn sesión plenaria del Consejo de Monumentos Nacionales (CMN) se aprobó unánimemente su declaratoria como Monumento Histórico, oficializada por el Ministerio de las Culturas en 2022. La declaratoria protege no solo la edificación física como vestigio material de la alianza criminal entre la DINA y Colonia Dignidad, sino que abre el camino para su consolidación como Casa de la Memoria y Espacio de Encuentro de la comunidad de Parral.',
  },
  {
    id: 'art-laboratorio-quimico-berrios',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Escuela_Villa_Baviera.jpg',
    imagenCredito: 'Instalaciones del enclave donde operaron arsenales y laboratorios',
    titulo: 'Armas químicas y el laboratorio secreto: El paso del bioquímico de la DINA Eugenio Berríos por Parral',
    resumen: 'Documentación judicial revela el desarrollo clandestino de gas sarín, toxinas botulínicas y el arsenal militar oculto.',
    categoria: 'Archivo',
    autor: 'Equipo de Investigación Histórica',
    fecha: '2025-11-10',
    contenido:
      'Las investigaciones de los ministros Alejandro Madrid y Jorge Zepeda dejaron al descubierto uno de los capítulos más siniestros de la colaboración entre la inteligencia de Augusto Pinochet y los jerarcas alemanes de Colonia Dignidad: la producción de armamento químico y biológico con el «Proyecto Andrea».\n\nEn la segunda mitad de los años 70, el químico de la DINA Eugenio Berríos (quien más tarde fuera asesinado en Uruguay por agentes de inteligencia para evitar que testificara) instaló un laboratorio clandestino al interior del fundo El Lavadero en Parral. Protegido por el aislamiento del enclave y con el apoyo logístico de médicos y técnicos de la secta, Berríos produjo y experimentó con gas sarín, cianuro y toxinas bacterianas destinadas a la eliminación selectiva de opositores dentro y fuera de Chile.\n\nA ello se sumó el hallazgo, en junio de 2005, del mayor arsenal clandestino incautado a particulares en la historia del país: tres depósitos subterráneos blindados con más de 90 toneladas de armamento bélico, incluyendo lanzacohetes LAW antitanque, fusiles de combate automáticos Steyr AUG, ametralladoras pesadas MG3, granadas de fragmentación, explosivos C4 y prensas hidráulicas para la fabricación no autorizada de componentes militares.\n\nEste hallazgo selló la evidencia incontrovertible ante la justicia internacional de que Colonia Dignidad funcionó como una base militar autónoma y estratégica al servicio de la dictadura y del tráfico ilegal de armas en el Cono Sur.',
  },
];

