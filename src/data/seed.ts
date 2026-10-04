import { Aporte, Articulo, Comentario, Documento, Sitio } from '../types';

const F_RETTIG = { label: 'Informe de la Comisión Nacional de Verdad y Reconciliación (Rettig, 1991)', url: 'https://bibliotecadigital.indh.cl/' };
const F_VALECH = { label: 'Informe de la Comisión Nacional sobre Prisión Política y Tortura (Valech, 2004–2005)', url: 'https://bibliotecadigital.indh.cl/' };
const F_INDH = { label: 'Instituto Nacional de Derechos Humanos (INDH)', url: 'https://www.indh.cl' };
const F_MV = { label: 'Memoria Viva – Archivo de derechos humanos', url: 'https://www.memoriaviva.com' };

export const SEED_SITIOS: Sitio[] = [
  {
    id: 'colonia-dignidad',
    titulo: 'Colonia Dignidad / Fundo El Lavadero (hoy Villa Baviera)',
    comuna: 'Parral',
    provincia: 'Linares',
    epoca: 'dictadura',
    tipo: 'colonia',
    lat: -36.0833,
    lng: -71.6667,
    periodo: '1961–2005 (uso represivo documentado: 1973–1990)',
    resena:
      'Enclave fundado en 1961 por el exmilitar alemán Paul Schäfer en la precordillera de Parral. Bajo un régimen interno de aislamiento, trabajo forzado y abuso sistemático —incluido el abuso sexual de menores—, durante la dictadura funcionó además como centro de detención, interrogatorio y tortura vinculado a la DINA, y se le asocian desapariciones de opositores.\n\nLa justicia chilena condenó a Schäfer y a varios de sus colaboradores, y a agentes de la DINA por crímenes cometidos allí. Los informes Rettig y Valech reconocen el recinto como lugar de detención. Hoy el sitio, rebautizado Villa Baviera, es objeto de debates sobre reparación a las víctimas, acceso a archivos y su eventual conversión en sitio de memoria.',
    galeria: [
      { url: '', caption: 'Acceso al recinto, precordillera de Parral (imagen por digitalizar).' },
      { url: '', caption: 'Planimetría del enclave presentada en causas judiciales (documento por digitalizar).' },
    ],
    testimonioAutor: 'Testimonio recogido de sobrevivientes (texto ilustrativo para el piloto)',
    testimonio:
      '«Nos decían que afuera no había nada para nosotros, que todo era pecado. Pasamos años sin saber que se podía decir que no. Hablar hoy es devolverle el nombre a quienes no pudieron hacerlo.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_VALECH, F_INDH, F_MV],
  },
  {
    id: 'escuela-artilleria-linares',
    titulo: 'Escuela de Artillería de Linares',
    comuna: 'Linares',
    provincia: 'Linares',
    epoca: 'dictadura',
    tipo: 'detencion',
    lat: -35.8467,
    lng: -71.5981,
    periodo: '1973–1975 (principal período documentado)',
    resena:
      'Recinto militar utilizado tras el golpe de 1973 como lugar de detención e interrogatorio de dirigentes campesinos, sindicales, estudiantiles y de partidos de izquierda de la provincia de Linares. Los testimonios ante las comisiones de verdad describen golpes, simulacros de fusilamiento, electricidad y condiciones de hacinamiento.\n\nEl recinto figura entre los lugares de detención reconocidos por la Comisión Valech. Diversas causas judiciales por detenciones y ejecuciones en la provincia involucran a personal que operó allí.',
    galeria: [{ url: '', caption: 'Fachada del recinto militar (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — ex-dirigente campesino',
    testimonio:
      '«Me sacaron del fundo de madrugada. En la Escuela no preguntaban: querían los nombres de los compañeros del sindicato.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_VALECH, F_INDH],
  },
  {
    id: 'regimiento-16-talca',
    titulo: 'Regimiento de Infantería N°16 «Talca»',
    comuna: 'Talca',
    provincia: 'Talca',
    epoca: 'dictadura',
    tipo: 'detencion',
    lat: -35.4339,
    lng: -71.6597,
    periodo: '1973–1990',
    resena:
      'Unidad militar de la capital regional que, desde septiembre de 1973, funcionó como centro de reclusión, interrogatorio y tortura de detenidos de toda la provincia de Talca y localidades vecinas. El informe Valech lo incluye entre los recintos con mayor número de testimonios en la región.\n\nDe este lugar se recuerdan traslados de prisioneros hacia otros recintos y casos de detenidos desaparecidos y ejecutados políticos que son parte de causas judiciales ante la Corte de Apelaciones de Talca.',
    galeria: [{ url: '', caption: 'Frontis del Regimiento (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — sobreviviente, Talca',
    testimonio:
      '«Éramos estudiantes, obreros, profesoras. Lo que más recuerdo es el silencio de la ciudad mientras nos llevaban.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_VALECH, F_INDH, F_MV],
  },
  {
    id: 'carcel-talca',
    titulo: 'Cárcel Pública de Talca',
    comuna: 'Talca',
    provincia: 'Talca',
    epoca: 'dictadura',
    tipo: 'detencion',
    lat: -35.4225,
    lng: -71.6522,
    periodo: '1973–1990',
    resena:
      'Establecimiento penal donde permanecieron cientos de presos políticos tras ser procesados por consejos de guerra o mantenidos bajo estado de sitio. Muchas personas pasaron primero por recintos militares y luego fueron trasladadas a la cárcel, donde sufrieron hacinamiento, aislamiento y malos tratos.\n\nFamiliares y organizaciones de derechos humanos de la zona organizaron visitas, ollas comunes y gestiones legales que constituyen una de las primeras redes de solidaridad del Maule.',
    galeria: [{ url: '', caption: 'Muro exterior de la cárcel (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — familiar de preso político',
    testimonio:
      '«Cada domingo hacíamos fila con la canasta. A veces era la única forma de saber que seguían vivos.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_VALECH, F_INDH],
  },
  {
    id: 'plaza-armas-talca-2019',
    titulo: 'Plaza de Armas / «Pentágono» de Talca',
    comuna: 'Talca',
    provincia: 'Talca',
    epoca: 'revuelta',
    tipo: 'conflicto',
    lat: -35.4264,
    lng: -71.6554,
    periodo: 'Octubre 2019 – 2020',
    resena:
      'Epicentro de las manifestaciones en Talca durante el estallido social de octubre de 2019. En la plaza y el casco céntrico se realizaron marchas multitudinarias, cacerolazos y asambleas, así como episodios de represión policial con uso de gases lacrimógenos, carros lanzaaguas y escopetas antidisturbios.\n\nEl INDH y organizaciones locales registraron querellas por apremios ilegítimos y lesiones oculares en la región. El lugar se mantiene como espacio de conmemoración y de reunión de colectivos de derechos humanos.',
    galeria: [{ url: '', caption: 'Marcha en el centro de Talca, octubre de 2019 (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — manifestante',
    testimonio:
      '«Volvimos a la plaza porque nuestros abuelos nos habían contado lo que pasaba cuando nadie salía.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_INDH, F_MV],
  },
  {
    id: 'memorial-ddd-talca',
    titulo: 'Memorial de Detenidos Desaparecidos y Ejecutados Políticos de Talca',
    comuna: 'Talca',
    provincia: 'Talca',
    epoca: 'transicion',
    tipo: 'memorial',
    lat: -35.4195,
    lng: -71.6443,
    periodo: 'Inaugurado en la Transición (ubicación referencial)',
    resena:
      'Ubicado al interior del Cementerio Municipal de Talca, es un espacio en forma de plazoleta con pilares y estructuras de piedra, láminas de bronce y placas de mármol con los nombres de víctimas de Talca y comunas aledañas. Es un espacio de homenaje a las personas detenidas desaparecidas y ejecutadas políticas de la región. Es lugar de ofrendas, actos de conmemoración cada 11 de septiembre y 30 de agosto (Día Internacional de las Víctimas de Desapariciones Forzadas) y punto de encuentro de agrupaciones de familiares.\n\nLos memoriales son parte de las medidas de reparación simbólica recomendadas por la Comisión Rettig.',
    galeria: [{ url: '', caption: 'Muro con nombres (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — agrupación de familiares',
    testimonio: '«Un nombre en un muro es una forma de decir: aquí estuvo, aquí lo esperamos, aquí seguimos exigiendo verdad.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_INDH, F_MV],
  },
  {
    id: 'curico-plaza-2019',
    titulo: 'Plaza de Armas de Curicó — Asambleas y protesta',
    comuna: 'Curicó',
    provincia: 'Curicó',
    epoca: 'revuelta',
    tipo: 'conflicto',
    lat: -34.9855,
    lng: -71.2394,
    periodo: 'Octubre 2019',
    resena:
      'Durante octubre de 2019, la plaza curicana fue lugar de concentración de marchas, cabildos y asambleas territoriales que debatieron demandas locales: salud, pensiones, agua y educación. Fue también escenario de enfrentamientos y detenciones durante el estado de emergencia.',
    galeria: [{ url: '', caption: 'Cabildo ciudadano (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — vecina de Curicó',
    testimonio: '«En el cabildo nos escuchamos por primera vez entre vecinos. Eso nadie nos lo quita.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_INDH],
  },
  {
    id: 'sindicato-cauquenes',
    titulo: 'Sindicatos campesinos y tomas de fundos (zona de Cauquenes)',
    comuna: 'Cauquenes',
    provincia: 'Cauquenes',
    epoca: 'pre',
    tipo: 'conflicto',
    lat: -35.9675,
    lng: -72.3167,
    periodo: '1964–1973 (ubicación referencial)',
    resena:
      'La Reforma Agraria (leyes de 1962 y 1967) y la sindicalización campesina (Ley 16.625, 1967) transformaron el campo del Maule. Federaciones y sindicatos organizaron peticiones, huelgas y tomas de fundos, enfrentando a la histórica estructura latifundista. Tras 1973, muchos dirigentes fueron perseguidos, detenidos o desaparecidos.',
    galeria: [{ url: '', caption: 'Asamblea campesina (imagen por digitalizar).' }],
    testimonioAutor: 'Testimonio ilustrativo — hijo de dirigente campesino',
    testimonio: '«Mi padre decía que por primera vez el patrón tenía que sentarse a conversar de igual a igual.»',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_RETTIG, F_MV],
  },
  {
    id: 'cordon-industrial-talca',
    titulo: 'Zona industrial de Talca — organización obrera',
    comuna: 'Talca',
    provincia: 'Talca',
    epoca: 'pre',
    tipo: 'conflicto',
    lat: -35.4415,
    lng: -71.6805,
    periodo: '1970–1973 (ubicación referencial)',
    resena:
      'Fábricas y empresas de Talca vivieron en los años de la Unidad Popular procesos de organización sindical y control obrero de la producción. Tras el golpe, trabajadores y dirigentes fueron objeto de detenciones y despidos masivos.',
    galeria: [],
    testimonioAutor: '',
    testimonio: '',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_MV],
  },
  {
    id: 'constitucion-socioambiental',
    titulo: 'Conflicto socioambiental — industria forestal y celulosa',
    comuna: 'Constitución',
    provincia: 'Talca',
    epoca: 'transicion',
    tipo: 'conflicto',
    lat: -35.3333,
    lng: -72.4167,
    periodo: '1990–2018',
    resena:
      'Comunidades costeras y campesinas del Maule han denunciado los impactos de la expansión forestal y de la industria de celulosa en el agua, los suelos y las economías locales, y han promovido la defensa de cuencas y la fiscalización ambiental.',
    galeria: [],
    testimonioAutor: '',
    testimonio: '',
    audioUrl: '',
    videoUrl: '',
    fuentes: [F_INDH],
  },
];

export const SEED_DOCUMENTOS: Documento[] = [
  { id: 'd1', titulo: 'Informe de la Comisión Nacional de Verdad y Reconciliación (Rettig)', descripcion: 'Informe de 1991 sobre violaciones graves a los derechos humanos con resultado de muerte o desaparición entre 1973 y 1990.', formato: 'PDF', etiquetas: ['Rettig', 'Informe oficial', 'Desaparecidos'], anio: 1991, fuente: 'Biblioteca Digital INDH', url: 'https://bibliotecadigital.indh.cl/' },
  { id: 'd2', titulo: 'Informe de la Comisión Nacional sobre Prisión Política y Tortura (Valech)', descripcion: 'Informe sobre personas calificadas como víctimas de prisión política y tortura. Incluye listado de recintos de detención.', formato: 'PDF', etiquetas: ['Valech', 'Tortura', 'Centros de detención'], anio: 2004, fuente: 'Biblioteca Digital INDH', url: 'https://bibliotecadigital.indh.cl/' },
  { id: 'd3', titulo: 'Informe Anual de Derechos Humanos — Situación en regiones', descripcion: 'Seguimiento del INDH a la situación de derechos humanos, incluidos hechos del estallido de 2019.', formato: 'PDF', etiquetas: ['INDH', 'Revuelta 2019', 'Trauma ocular'], anio: 2019, fuente: 'INDH', url: 'https://www.indh.cl' },
  { id: 'd4', titulo: 'Archivo de testimonios orales — Reforma Agraria en el Maule', descripcion: 'Colección piloto de entrevistas a dirigentes y trabajadores agrícolas (grabación por digitalizar).', formato: 'Audio', etiquetas: ['Testimonio', 'Reforma Agraria', 'Campesinado'], anio: 2012, fuente: 'Archivo Memoria y Dignidad Maule', url: 'https://www.memoriaviva.com' },
  { id: 'd5', titulo: 'Fotografías de marchas en Talca y Curicó, octubre 2019', descripcion: 'Registro fotográfico ciudadano de marchas y cabildos.', formato: 'Fotografía', etiquetas: ['Revuelta 2019', 'Fotografía', 'Cabildos'], anio: 2019, fuente: 'Aporte ciudadano', url: 'https://www.indh.cl' },
  { id: 'd6', titulo: 'Documental: Colonia Dignidad, memoria y justicia', descripcion: 'Ficha de referencia a materiales audiovisuales sobre el enclave de Parral.', formato: 'Video', etiquetas: ['Colonia Dignidad', 'Documental'], anio: 2015, fuente: 'Memoria Viva', url: 'https://www.memoriaviva.com' },
  { id: 'd7', titulo: 'Expedientes de causas por violaciones de DDHH — Corte de Apelaciones de Talca', descripcion: 'Guía de causas judiciales por detenciones, ejecuciones y desapariciones en la región.', formato: 'PDF', etiquetas: ['Expediente', 'Justicia', 'Desaparecidos'], anio: 2010, fuente: 'Memoria Viva', url: 'https://www.memoriaviva.com' },
];

export const SEED_ARTICULOS: Articulo[] = [
  {
    id: 'a1',
    imagen: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    imagenCredito: 'Memorial y arquitectura de recuerdo',
    titulo: 'Los nombres del Maule: la memoria que no se archiva',
    resumen: 'Un recorrido por los lugares donde la región aprendió a nombrar la ausencia.',
    categoria: 'Crónica',
    autor: 'Equipo editorial',
    fecha: '2025-09-11',
    contenido:
      'Hay ciudades que guardan su memoria en los museos y otras que la guardan en las esquinas. En el Maule, la memoria se esconde en un regimiento, en el muro de una cárcel, en una plaza que cambió de significado en 2019.\n\nEste mapa nace de una convicción simple: nombrar los lugares es el primer paso para que no se repitan. Cada marcador es un archivo; cada archivo, una pregunta abierta.\n\nInvitamos a las comunidades a sumar relatos, corregir datos y proponer nuevos sitios a través del Archivo Abierto.',
  },
  {
    id: 'a2',
    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    imagenCredito: 'Campos de cultivo y paisaje rural del Maule',
    titulo: 'Tierra y sindicato: el campo maulino antes de 1973',
    resumen: 'La Reforma Agraria cambió la vida de miles de familias campesinas.',
    categoria: 'Archivo',
    autor: 'Equipo editorial',
    fecha: '2025-08-30',
    contenido:
      'Entre 1964 y 1973, la sindicalización campesina y la Reforma Agraria alteraron siglos de relaciones de dependencia en los fundos. Surgieron sindicatos, cooperativas y asentamientos.\n\nEl golpe de Estado interrumpió brutalmente ese proceso. Muchos dirigentes fueron detenidos, y varias comunidades todavía buscan a sus desaparecidos.',
  },
  {
    id: 'a3',
    imagen: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    imagenCredito: 'Multitudes en la plaza pública',
    titulo: 'Octubre en la plaza: cabildos y asambleas barriales',
    resumen: 'Lo que dejó el estallido social en las ciudades del Maule.',
    categoria: 'Noticia',
    autor: 'Equipo editorial',
    fecha: '2025-10-18',
    contenido:
      'Para muchas personas, octubre de 2019 fue la primera experiencia de deliberación colectiva. Las plazas de Talca y Curicó se llenaron de asambleas.\n\nAl mismo tiempo, el INDH y organizaciones locales documentaron casos de violencia estatal, entre ellos lesiones oculares. La memoria reciente también es memoria de derechos humanos.',
  },
];

export const SEED_COMENTARIOS: Comentario[] = [
  { id: 'c1', articuloId: 'a1', autor: 'María P.', texto: 'Gracias por este trabajo. Mi abuelo estuvo detenido en Talca y nunca hablaba de eso.', fecha: '2025-09-12T10:00:00', estado: 'aprobado' },
  { id: 'c2', articuloId: 'a1', autor: 'Anónimo', texto: '¿Habrá recorridos guiados por los sitios de Talca?', fecha: '2025-09-14T16:30:00', estado: 'pendiente' },
  { id: 'c3', articuloId: 'a2', autor: 'Luis R.', texto: 'Mi familia vivió la toma de un fundo cerca de Cauquenes. Puedo aportar fotos.', fecha: '2025-09-02T09:15:00', estado: 'pendiente' },
];

export const SEED_APORTES: Aporte[] = [];
