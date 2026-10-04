import { Articulo, Documento, Sitio } from '../types';

/**
 * Ampliación 2 de la base de datos (investigación en fuentes públicas: Memoria Viva, INDH,
 * Museo de la Memoria, Consejo de Monumentos Nacionales, Ministerio de las Culturas, prensa regional).
 * Las coordenadas son REFERENCIALES (aprox. al centro del lugar) y deben validarse en terreno.
 * No se incluyen testimonios inventados: los campos de testimonio quedan vacíos hasta contar con registros reales.
 */
export const SEED_VERSION = 2;

const F_INDH = { label: 'Instituto Nacional de Derechos Humanos (INDH)', url: 'https://www.indh.cl' };
const F_MV = { label: 'Memoria Viva – Recintos y casos por región', url: 'https://www.memoriaviva.com' };
const F_MUSEO = { label: 'Museo de la Memoria y los Derechos Humanos', url: 'https://www.museodelamemoria.cl' };
const F_CMN = { label: 'Consejo de Monumentos Nacionales', url: 'https://www.monumentos.gob.cl' };
const F_CULT = { label: 'Ministerio de las Culturas, las Artes y el Patrimonio', url: 'https://www.cultura.gob.cl' };
const F_CONF = { label: 'INDH – Mapa de Conflictos Socioambientales', url: 'https://mapaconflictos.indh.cl' };
const F_RUTA = { label: 'Ruta de la Memoria, Región del Maule (Bienes Nacionales)', url: 'https://www.bienes.cl' };

const base = { galeria: [], testimonio: '', testimonioAutor: '', audioUrl: '', videoUrl: '' };

export const SEED_SITIOS_V2: Sitio[] = [
  {
    ...base, id: 'dina-parral-carrera-pinto', titulo: 'Cuartel DINA de Parral (Brigada de Inteligencia Regional Sur) — Monumento Histórico',
    comuna: 'Parral', provincia: 'Linares', epoca: 'dictadura', tipo: 'detencion', lat: -36.1415, lng: -71.824,
    periodo: '1974–1977 · Monumento Histórico desde 2022',
    resena:
      'Inmueble de calle Ignacio Carrera Pinto N° 262, perteneciente a la Sociedad Benefactora y Educacional Dignidad (Colonia Dignidad) y cedido a la DINA, que lo usó entre 1974 y 1977 como cuartel de la Brigada de Inteligencia Regional Sur. Funcionó como centro de operaciones, detención y tortura, con coordinación estrecha entre agentes y jerarcas del enclave.\n\nTras una campaña iniciada en 2016 por agrupaciones de familiares y organizaciones de derechos humanos de Talca, Parral y Linares, el Consejo de Monumentos Nacionales acogió la solicitud y el inmueble fue declarado Monumento Nacional en la categoría de Monumento Histórico (decreto publicado en 2022).',
    fuentes: [F_CMN, F_CULT, F_MV, F_RUTA],
  },
  {
    ...base, id: 'monolito-trabancura', titulo: 'Monolito y placa a los detenidos desaparecidos de Colonia Dignidad (Puente Trabancura)',
    comuna: 'Parral', provincia: 'Linares', epoca: 'transicion', tipo: 'memorial', lat: -36.08, lng: -71.62,
    periodo: 'Transición (ubicación referencial)',
    resena:
      'Monolito con placa recordatoria ubicado en la ribera sur del río Perquilauquén, junto al puente Trabancura, en la zona precordillerana de Parral, próxima al enclave de Colonia Dignidad. Rinde homenaje a las personas detenidas desaparecidas en ese lugar y es punto de conmemoración de agrupaciones de familiares.',
    fuentes: [F_MUSEO, F_MV],
  },
  {
    ...base, id: 'memorial-linares-plaza', titulo: 'Memorial de Detenidos Desaparecidos y Ejecutados Políticos de Linares',
    comuna: 'Linares', provincia: 'Linares', epoca: 'transicion', tipo: 'memorial', lat: -35.845, lng: -71.5935,
    periodo: 'Inaugurado en julio de 2005',
    resena:
      'Ubicado en la Plaza de Armas de Linares, en la intersección de Av. Bernardo O\'Higgins con calle Kurt Moller. Obra del escultor linarense Carlos Moya: una escultura de bronce de unos 10 metros que representa a un hombre con las manos elevadas, acompañada de columnas con los nombres de 68 víctimas de la dictadura en la zona (según fuentes del Consejo de Monumentos Nacionales y prensa local).\n\nFue inaugurado el 2 de julio de 2005 (algunas fuentes señalan el 1 de julio).',
    fuentes: [F_CMN, F_MV],
  },
  {
    ...base, id: 'memorial-curico-cementerio', titulo: 'Memorial en el Cementerio General de Curicó',
    comuna: 'Curicó', provincia: 'Curicó', epoca: 'transicion', tipo: 'memorial', lat: -34.9783, lng: -71.2392,
    periodo: 'Transición (ubicación referencial)',
    resena:
      'Memorial en homenaje a los detenidos desaparecidos y ejecutados políticos de la zona de Curicó. Destaca la figura del obrero agrícola y dirigente campesino Luis Eduardo Vega Ramírez, vicepresidente de la Confederación Campesina Ranquil y militante socialista.',
    fuentes: [F_MUSEO, F_MV],
  },
  {
    ...base, id: 'memorial-cauquenes', titulo: 'Memorial a los ejecutados del 4 de octubre de 1973 — Cauquenes',
    comuna: 'Cauquenes', provincia: 'Cauquenes', epoca: 'transicion', tipo: 'memorial', lat: -35.966, lng: -72.314,
    periodo: 'Transición · conmemoración anual cada 3–4 de octubre (ubicación referencial)',
    resena:
      'Memorial erigido en la ciudad para mantener vivo el recuerdo de los cauqueninos ejecutados en octubre de 1973, en el marco del paso de la comitiva militar conocida como «Caravana de la Muerte». Cada año se realizan actos conmemorativos en torno al 3 y 4 de octubre.',
    fuentes: [F_MV, F_INDH],
  },
  {
    ...base, id: 'regimiento-andalien-cauquenes', titulo: 'Regimiento de Infantería N°13 «Andalién» — Cauquenes',
    comuna: 'Cauquenes', provincia: 'Cauquenes', epoca: 'dictadura', tipo: 'detencion', lat: -35.974, lng: -72.325,
    periodo: '1973 (ejecuciones del 4 de octubre) y años siguientes',
    resena:
      'Recinto militar de Cauquenes reconocido entre los lugares de detención de la provincia. El 4 de octubre de 1973, la comitiva del general Sergio Arellano Stark («Caravana de la Muerte») fusiló allí a cuatro jóvenes detenidos: Claudio Arturo Manuel Lavín Loyola (29), Miguel Enrique Muñoz Flores (23), Manuel Benito Plaza Arellano (25) y Pablo Renán Vera Torres (22).\n\nEn el Cuartel de Investigaciones y la Cárcel Pública de la ciudad se documentaron detenciones, torturas y simulacros de ejecución. Según informó la prensa, en marzo de 2023 la Corte Suprema dictó condenas contra exoficiales del Ejército por estos crímenes.',
    fuentes: [F_INDH, F_MV, F_MUSEO],
  },
  {
    ...base, id: 'regimiento-telecom-curico', titulo: 'Regimiento de Telecomunicaciones N°3 — Curicó',
    comuna: 'Curicó', provincia: 'Curicó', epoca: 'dictadura', tipo: 'detencion', lat: -34.986, lng: -71.232,
    periodo: '1973–1990 (ubicación referencial)',
    resena:
      'Unidad militar de Curicó listada entre los recintos de detención de la provincia por Memoria Viva y por la Comisión Valech, junto con el Cuartel de Investigaciones, la Cárcel de Curicó, la Cárcel de Mujeres del Buen Pastor, un recinto de la CNI en la piscicultura y la Comisaría de Carabineros.',
    fuentes: [F_MV, F_INDH],
  },
  {
    ...base, id: 'dina-cni-talca', titulo: 'Cuartel DINA-CNI de Talca (calle 4 Oriente)',
    comuna: 'Talca', provincia: 'Talca', epoca: 'dictadura', tipo: 'detencion', lat: -35.4262, lng: -71.6485,
    periodo: '1974–1990 (ubicación referencial)',
    resena:
      'Memoria Viva identifica en Talca un cuartel DINA-CNI en calle 4 Oriente y otro recinto de la CNI en calle Dos Sur N° 1403, además del Regimiento N°16, comisarías y retenes de Carabineros (N° 3 y N° 4, Abate Molina, Cancha Rayada, Plaza Arturo Prat, Barrio Norte), la Cárcel de Talca y la Cárcel de Mujeres del Buen Pastor. La dirección exacta debe verificarse con el registro de cada recinto.',
    fuentes: [F_MV, F_INDH],
  },
  {
    ...base, id: 'fundo-la-piedad-longavi', titulo: 'Fundo La Piedad (Longaví) — Asesinato de Hernán Mery Fuenzalida',
    comuna: 'Longaví', provincia: 'Linares', epoca: 'pre', tipo: 'conflicto', lat: -35.97, lng: -71.68,
    periodo: '30 de abril de 1970 (ubicación referencial)',
    resena:
      'Hernán Mery Fuenzalida, ingeniero agrónomo y director zonal de la CORA en Linares, fue asesinado el 30 de abril de 1970 mientras intentaba notificar legalmente la expropiación del fundo «La Piedad». El hecho es emblemático de la reacción violenta de sectores terratenientes ante la Reforma Agraria, que en la zona incluyó a las llamadas «guardias blancas».',
    fuentes: [{ label: 'Vicaría de la Solidaridad – archivo', url: 'https://www.vicariadelasolidaridad.cl' }, F_MV],
  },
  {
    ...base, id: 'huelga-campesina-linares-1970', titulo: 'Huelga campesina de Linares (septiembre de 1970) — Federación «Nuevo Horizonte»',
    comuna: 'Linares', provincia: 'Linares', epoca: 'pre', tipo: 'conflicto', lat: -35.85, lng: -71.6,
    periodo: 'Septiembre de 1970',
    resena:
      'En septiembre de 1970, Linares fue escenario de una masiva huelga campesina que involucró a unos 160 fundos, impulsada por la federación «Nuevo Horizonte». Se inscribe en el ciclo de sindicalización (Ley 16.625, 1967) y reforma agraria (Ley 16.640, 1967) que reconfiguró el mundo rural del Maule, con tomas de fundos frecuentes en Linares, Parral y Cauquenes.',
    fuentes: [F_MV],
  },
  {
    ...base, id: 'curico-ruta5-uribe', titulo: 'Ruta 5 Sur, Curicó — Muerte de José Miguel Uribe Antipani',
    comuna: 'Curicó', provincia: 'Curicó', epoca: 'revuelta', tipo: 'conflicto', lat: -34.97, lng: -71.26,
    periodo: '21 de octubre de 2019 (ubicación referencial)',
    resena:
      'La noche del 21 de octubre de 2019, José Miguel Uribe Antipani (25 años) murió por un disparo en una manifestación en la Ruta 5 Sur a la altura de Curicó. Las primeras sospechas apuntaron a una patrulla militar, pero los peritajes establecieron que el disparo provino de una pistola de un civil. En octubre de 2021, el Tribunal de Juicio Oral en lo Penal de Curicó condenó al empresario agrícola Francisco Fuenzalida Calvo a 15 años de presidio efectivo.\n\nEn su balance de octubre de 2020, el INDH reportó para la Región del Maule 119 querellas, tres lesiones oculares, 112 lesiones físicas y 28 casos de consecuencias psicológicas, además de este fallecido en Curicó.',
    fuentes: [F_INDH],
  },
  {
    ...base, id: 'licancel-licanten', titulo: 'Planta Licancel (Celulosa Arauco) — Derrame en el río Mataquito',
    comuna: 'Licantén', provincia: 'Curicó', epoca: 'transicion', tipo: 'conflicto', lat: -34.9833, lng: -72.0,
    periodo: '2007 (derrame) · 2010 (acuerdo) · 2023 (cierre indefinido) — ubicación referencial',
    resena:
      'En 2007, un derrame de cerca de 70.000 m³ de residuos industriales líquidos de la planta Licancel provocó mortandad masiva de peces y aves en la cuenca del río Mataquito. El Consejo de Defensa del Estado demandó a la empresa, que en 2010 pagó 600 millones de pesos por reparación del daño ambiental; hubo además sanciones penales a exgerentes. En septiembre de 2023, la empresa anunció el cierre indefinido de la planta.',
    fuentes: [F_CONF, F_INDH],
  },
  {
    ...base, id: 'achibueno-linares', titulo: 'Río Achibueno — «Salvemos el Achibueno»',
    comuna: 'Linares', provincia: 'Linares', epoca: 'transicion', tipo: 'conflicto', lat: -35.95, lng: -71.45,
    periodo: 'c. 2008–2018 (ubicación referencial)',
    resena:
      'Hidroeléctrica Centinela S.A. proyectó dos centrales de pasada (El Castillo y Centinela) en un sector precordillerano de alto valor ambiental y turístico. El movimiento «Salvemos el Achibueno», junto a organizaciones ciudadanas y la Municipalidad de Linares, sostuvo cerca de una década de oposición social y legal. En 2018, la Comisión de Evaluación Ambiental del Maule aprobó por unanimidad la renuncia de la empresa a las RCA, cancelando definitivamente los proyectos.',
    fuentes: [F_CONF],
  },
];

export const SEED_ARTICULOS_V2: Articulo[] = [
  {
    id: 'a4',
    imagen: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    imagenCredito: 'Archivos de prensa y memoria histórica', titulo: 'La Caravana de la Muerte en el Maule: Linares y Cauquenes, octubre de 1973',
    resumen: 'Dos ciudades, cuatro fusilamientos en cada una y décadas de búsqueda de justicia.',
    categoria: 'Archivo', autor: 'Equipo editorial', fecha: '2025-10-02',
    contenido:
      'A fines de septiembre y comienzos de octubre de 1973, una comitiva militar encabezada por el general Sergio Arellano Stark, actuando como oficial delegado, recorrió ciudades del país ejecutando a prisioneros políticos. En el Maule pasó por Curicó, Talca, Linares y Cauquenes.\n\nEn Linares, el 2 de octubre, cuatro personas detenidas fueron ejecutadas en las cercanías de la Escuela de Artillería. Arellano Stark fue condenado por la Corte Suprema en 2008 por este caso.\n\nEn Cauquenes, el 4 de octubre, fueron fusilados en el Regimiento «Andalién» Claudio Lavín, Miguel Muñoz, Manuel Plaza y Pablo Vera. Cada año, las organizaciones de derechos humanos conmemoran la fecha. Según la prensa, en 2023 la Corte Suprema condenó a exoficiales del Ejército por estos hechos.',
  },
  {
    id: 'a5',
    imagen: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
    imagenCredito: 'Documentación legal y patrimonial', titulo: 'Un cuartel en Parral: de recinto DINA a Monumento Histórico',
    resumen: 'Cómo una campaña de familiares logró proteger el inmueble de Carrera Pinto 262.',
    categoria: 'Noticia', autor: 'Equipo editorial', fecha: '2025-09-20',
    contenido:
      'Entre 1974 y 1977, la DINA instaló en Parral la Brigada de Inteligencia Regional Sur, en un inmueble cedido por Colonia Dignidad. Desde allí se coordinaron detenciones y torturas en una amplia zona del sur de Chile.\n\nDesde 2016, agrupaciones de familiares de Talca, Parral y Linares pidieron declararlo Monumento Nacional. El Consejo de Monumentos Nacionales acogió la solicitud y la declaratoria se publicó en 2022. Es un hito de reparación simbólica y de resguardo de la prueba material de lo ocurrido.',
  },
  {
    id: 'a6',
    imagen: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    imagenCredito: 'Río cordillerano y cuencas protegidas', titulo: 'La memoria del agua: Mataquito y Achibueno',
    resumen: 'Dos luchas socioambientales que marcaron a las comunidades del Maule.',
    categoria: 'Crónica', autor: 'Equipo editorial', fecha: '2025-08-12',
    contenido:
      'En 2007, el derrame de la planta Licancel dejó miles de peces muertos en la cuenca del Mataquito. La demanda del Consejo de Defensa del Estado y la presión ciudadana derivaron en reparaciones y, años más tarde, en el cierre de la planta.\n\nEn Linares, el movimiento «Salvemos el Achibueno» logró en 2018 que se cancelaran dos centrales hidroeléctricas proyectadas en el río. Ambos casos muestran que la defensa del territorio también es defensa de derechos humanos.',
  },
  {
    id: 'a7',
    imagen: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    imagenCredito: 'Espacio cívico y asambleas ciudadanas', titulo: 'Octubre de 2019 en el Maule: lo que dicen las cifras del INDH',
    resumen: 'Querellas, lesiones y un fallecido en Curicó: un balance regional.',
    categoria: 'Noticia', autor: 'Equipo editorial', fecha: '2025-10-19',
    contenido:
      'El INDH informó en octubre de 2020 la presentación de 119 querellas en la Región del Maule, con tres lesiones oculares, 112 lesiones físicas y 28 casos de consecuencias psicológicas, dirigidas contra Carabineros, Ejército y Gendarmería.\n\nLa muerte de José Miguel Uribe Antipani en Curicó fue inicialmente atribuida a una patrulla militar; la justicia determinó que el disparo provino de un civil, condenado a 15 años. Los criterios de conteo del trauma ocular han cambiado con el tiempo, por lo que conviene revisar siempre la fuente y la fecha de cada cifra.',
  },
];

export const SEED_DOCUMENTOS_V2: Documento[] = [
  { id: 'd8', titulo: 'Declaratoria de Monumento Histórico — Cuartel DINA de Parral', descripcion: 'Ficha y antecedentes de la declaratoria del inmueble de Ignacio Carrera Pinto N° 262.', formato: 'PDF', etiquetas: ['Monumento Histórico', 'DINA', 'Colonia Dignidad'], anio: 2022, fuente: 'Consejo de Monumentos Nacionales', url: 'https://www.monumentos.gob.cl' },
  { id: 'd9', titulo: 'Mapa de Conflictos Socioambientales (INDH)', descripcion: 'Plataforma con fichas de conflictos, incluidos Licancel/Mataquito y Achibueno.', formato: 'PDF', etiquetas: ['Socioambiental', 'INDH', 'Agua'], anio: 2018, fuente: 'INDH', url: 'https://mapaconflictos.indh.cl' },
  { id: 'd10', titulo: 'Recintos de detención por región — Maule', descripcion: 'Buscador de recintos (regimientos, cuarteles, cárceles, retenes) en Talca, Curicó, Linares y Cauquenes.', formato: 'PDF', etiquetas: ['Centros de detención', 'Memoria Viva', 'Valech'], anio: 2005, fuente: 'Memoria Viva', url: 'https://www.memoriaviva.com' },
  { id: 'd11', titulo: 'Ruta de la Memoria — Región del Maule', descripcion: 'Iniciativa de Bienes Nacionales que pone en valor lugares de violaciones a los derechos humanos, resistencia y conmemoración en Talca, Curicó, Linares, Cauquenes y Parral.', formato: 'PDF', etiquetas: ['Ruta de la Memoria', 'Patrimonio', 'Memoriales'], anio: 2020, fuente: 'Bienes Nacionales', url: 'https://www.bienes.cl' },
  { id: 'd12', titulo: 'Testimonios audiovisuales: Talca, Linares, Parral y Curicó', descripcion: 'Investigaciones y registros audiovisuales del Museo de la Memoria sobre la historia reciente en el Maule.', formato: 'Video', etiquetas: ['Testimonio', 'Museo de la Memoria', 'Audiovisual'], anio: 2018, fuente: 'Museo de la Memoria y los Derechos Humanos', url: 'https://www.museodelamemoria.cl' },
  { id: 'd13', titulo: 'Reforma Agraria y sindicalización campesina en el Maule (Leyes 16.625 y 16.640)', descripcion: 'Contexto histórico de la sindicalización campesina y la Reforma Agraria de 1967 en Talca, Linares y Cauquenes.', formato: 'PDF', etiquetas: ['Reforma Agraria', 'Campesinado', 'Historia'], anio: 1967, fuente: 'Biblioteca del Congreso Nacional', url: 'https://www.bcn.cl' },
];
