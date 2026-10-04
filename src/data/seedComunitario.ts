import { HistoriaSueno, ObraArte, TallerComunitario } from '../types';

// =========================================================================
// 1. SEMILLA: Los Sueños que Construían (Vidas, Oficios y Fiestas Comunitarias)
// =========================================================================
export const SEED_SUENOS: HistoriaSueno[] = [
  {
    id: 'sueno-1',
    titulo: 'Peña de la Parroquia San Luis y el Canto Campesino',
    categoria: 'Fiestas de la Solidaridad y Encuentro',
    comuna: 'Talca',
    territorioTipo: 'Urbano',
    anio: '1976–1985',
    quienesEran:
      'Jóvenes pobladores, profesoras de escuela básica y cantores campesinos de los valles del Maule que encontraron en la parroquia un refugio de encuentro fraterno y resistencia cultural en los años más duros de la dictadura.',
    queSonaban:
      'Soñaban con mantener viva la identidad de los pueblos maulinos, tejer redes solidarias frente a la censura y recuperar la libertad para cantar sin miedo a la palabra compartida.',
    comoCelebraban:
      'Organizaban peñas acústicas a la luz de las velas. El salón parroquial se llenaba de bancos de madera, un escenario improvisado con mantas de lana y una guitarra que pasaba de mano en mano entre versos al compás de la cueca brava y el canto a lo poeta.',
    elementoSonoroCulinario:
      'Sopaipillas pasadas caseras con chancaca recién hervida, té caliente con canela y el rasgueo entrañable de una guitarra chilena afinada en traspuesta.',
    galeria: [
      {
        url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
        caption: 'Guitarras de madera y cancioneros populares transcritos a mimeógrafo.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/El_hombre_de_la_guitarra%2C_La_Serena_Chile.jpg',
        caption: 'Cantores populares y guitarra campesina chilena.',
      },
    ],
  },
  {
    id: 'sueno-2',
    titulo: 'Asentamiento «El Sol Naciente»: La Tierra y la Primera Cosecha',
    categoria: 'Proyectos Colectivos y Asentamientos',
    comuna: 'Linares',
    territorioTipo: 'Rural',
    anio: '1969–1973',
    quienesEran:
      'Familias campesinas, medieros e inquilinos que, tras décadas de trabajo ajeno, formaron una cooperativa de la Reforma Agraria en las fértiles tierras regadas por el río Ancoa y Achibueno.',
    queSonaban:
      'El sueño de ver a sus hijos con zapatos nuevos y cuadernos para ir a la escuela, ser dueños del fruto de sus brazos, y construir viviendas sólidas de adobe y teja con huertos familiares autosustentables.',
    comoCelebraban:
      'Al terminar la trilla y la primera gran cosecha de trigo dorado, levantaban una ramada de ramas de sauce. Autoconstruyeron una cancha de rayuela y de fútbol donde jugaban torneos inter-asentamientos celebrando la dignidad de la tierra libre.',
    elementoSonoroCulinario:
      'Harina tostada recién molida con agua de vertiente, cazuela de campo con choclo fresco y el bullicio de la radio a transistores sonando tonadas campesinas al amanecer.',
    galeria: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Chile.Linares.Rio.Achibueno.jpg/1280px-Chile.Linares.Rio.Achibueno.jpg',
        caption: 'Río Achibueno y tierras fértiles de la precordillera de Linares.',
      },
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80',
        caption: 'Campos de trigo y surcos abiertos del Maule profundo.',
      },
    ],
  },
  {
    id: 'sueno-3',
    titulo: 'Navidad Popular de la Población Oriente: Juguetes de Madera y Esperanza',
    categoria: 'Fiestas de la Solidaridad y Encuentro',
    comuna: 'Talca',
    territorioTipo: 'Urbano',
    anio: '1982–1988',
    quienesEran:
      'Carpinteros de barrio, dueñas de casa, costureras y el comité de cesantes que se negaron a que la crisis económica y el toque de queda borraran la sonrisa de los niños en la populosa Población Oriente de Talca.',
    queSonaban:
      'Con un Maule donde ningún niño pasara hambre ni frío, donde el trabajo obrero fuese respetado y la infancia floreciera en plazas seguras, comunitarias y arboladas.',
    comoCelebraban:
      'Meses antes recolectaban retazos de madera en las barracas del río Claro. En talleres clandestinos tallaban trompos, camiones y cunas que luego las costureras vestían. En Nochebuena hacían una gran chocolatada comunal en el pasaje.',
    elementoSonoroCulinario:
      'Pan de pascua casero con nueces del campo maulino, leche con plátano batida a mano y el sonido del martilleo cariñoso en los patios traseros.',
    galeria: [
      {
        url: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?w=900&q=80',
        caption: 'Artesanías y juguetes de madera tallados a mano con dedicación.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Calle_de_Talca%2C_Agust%C3%ADn_Abarca.jpg',
        caption: 'Calles tradicionales de Talca, óleo histórico de Agustín Abarca.',
      },
    ],
  },
  {
    id: 'sueno-4',
    titulo: 'El Taller de los Zapateros y Curtidores de la 11 Oriente',
    categoria: 'Oficios y Vida Cotidiana',
    comuna: 'Talca',
    territorioTipo: 'Urbano',
    anio: '1965–1975',
    quienesEran:
      'Maestros artesanos del cuero y zapateros remendones con bancos de madera llenos de leznas, clavillos y cuero curtido con corteza de lingual maulino a pasos del Mercado Central.',
    queSonaban:
      'Formar una cooperativa gremial con seguro de salud mutuo, tener su propio almacén de materias primas y vestir a las familias trabajadoras con calzado digno, accesible y duradero.',
    comoCelebraban:
      'Los sábados a mediodía cerraban la media cortina, limpiaban el mesón de trabajo y compartían un arrollado de huaso con pan batido caliente y vino pipeño de San Javier.',
    elementoSonoroCulinario:
      'El golpeteo rítmico del martillo de asentar sobre la suela, el olor penetrante a cuero noble y el sonido de tangos y boleros en la radio Minería.',
    galeria: [
      {
        url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=80',
        caption: 'Herramientas de oficio y manos laboriosas trabajando el cuero.',
      },
      {
        url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=80',
        caption: 'Mesón de taller artesanal centenario en el casco histórico.',
      },
    ],
  },
  {
    id: 'sueno-5',
    titulo: 'Bordadoras de la Memoria y Arpilleristas del Valle de Linares',
    categoria: 'Oficios y Vida Cotidiana',
    comuna: 'Linares',
    territorioTipo: 'Rural',
    anio: '1975–1989',
    quienesEran:
      'Mujeres campesinas y dueñas de casa que transformaron sacos de harina de quintal y retazos de lana de oveja en crónicas visuales de resistencia, dolor y ternura en las poblaciones de Linares y Longaví.',
    queSonaban:
      'Con el retorno de sus familiares ausentes, con la justicia que tardaba en llegar y con la dignidad de las manos laboriosas que no se rindieron al silencio ni al miedo.',
    comoCelebraban:
      'Compartían mate con hierba luisa alrededor de la cocina a leña mientras hilaban juntas y cantaban tonadas tradicionales campesinas.',
    elementoSonoroCulinario:
      'Mate con cedrón en calabaza, tortilla de rescoldo con mantequilla de campo y el crujido suave de las hebras de lana trenzándose en la aguja.',
    galeria: [
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80',
        caption: 'Textiles e hilados comunitarios hechos con paciencia y memoria.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Agrupaci%C3%B3n_de_Familiares_de_Detenidos_Desaparecidos_de_Chile_%28de_Kena_Lorenzini%29.jpg/1280px-Agrupaci%C3%B3n_de_Familiares_de_Detenidos_Desaparecidos_de_Chile_%28de_Kena_Lorenzini%29.jpg',
        caption: 'Mujeres y familiares de la memoria organizadas en resistencia colectiva.',
      },
    ],
  },
  {
    id: 'sueno-6',
    titulo: 'Escuela Normal de Curicó: La Vocación de las Maestras Rurales',
    categoria: 'Oficios y Vida Cotidiana',
    comuna: 'Curicó',
    territorioTipo: 'Urbano',
    anio: '1962–1973',
    quienesEran:
      'Jóvenes profesoras y profesores normalistas formados con rigor pedagógico y mística social para alfabetizar en escuelas unidocentes de cordillera a mar por toda la cuenca del Mataquito.',
    queSonaban:
      'Con erradicar el analfabetismo infantil en el campo maulino, llevar bibliotecas móviles en carretas y abrir las puertas de la universidad a los hijos de inquilinos y peones.',
    comoCelebraban:
      'Las veladas bucólicas de fin de año con declamaciones poéticas de Gabriela Mistral, bailes folclóricos campesinos y guitarras en el patio de los tilos de la Normal.',
    elementoSonoroCulinario:
      'Tortas curicanas tradicionales de milhojas con manjar casero, café de trigo caliente y el tintineo de la campana de bronce llamando al recreo.',
    galeria: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/%C3%81rboles_nativos_de_la_Plaza_de_Armas_de_Curic%C3%B3.jpg/1280px-%C3%81rboles_nativos_de_la_Plaza_de_Armas_de_Curic%C3%B3.jpg',
        caption: 'Árboles nativos centenarios de Curicó donde paseaban las maestras normalistas.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Curic%C3%B3_%2816694014024%29.jpg',
        caption: 'Vista histórica de Curicó y su paisaje cívico y educacional.',
      },
    ],
  },
  {
    id: 'sueno-7',
    titulo: 'Vendimia Campesina y Cooperativa Vitivinícola de Cauquenes',
    categoria: 'Proyectos Colectivos y Asentamientos',
    comuna: 'Cauquenes',
    territorioTipo: 'Rural',
    anio: '1968–1973',
    quienesEran:
      'Pequeños viñateros del secano costero de Cauquenes, guardianes de parras centenarias de cepa País y Torontel que se unieron en cooperativas agrícolas para sortear los abusos de los intermediarios.',
    queSonaban:
      'Lograr un precio justo por la uva del secano, construir bodegas comunales con cubas de roble maulino y dignificar el trabajo del campesino del secano interior.',
    comoCelebraban:
      'La fiesta de la pisa de la uva al son del acordeón y la guitarra campesina, donde familias enteras desgranaban racimos bajo parronales aromáticos.',
    elementoSonoroCulinario:
      'Mosto fresco de uva tinta recién estrujada, chancho en piedra molido en mortero de piedra de río con pan amasado al rescoldo y cuecas campesinas.',
    galeria: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Plaza_Cauquenes.jpg',
        caption: 'Plaza histórica de Cauquenes, punto de encuentro del campesinado del secano.',
      },
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Parral%2C_Chile_-_rice_fields.JPG/960px-Parral%2C_Chile_-_rice_fields.JPG',
        caption: 'Campos agrícolas del Maule sur regados por canales tradicionales.',
      },
    ],
  },
  {
    id: 'sueno-8',
    titulo: 'Ollas Comunes y Campeonatos de Rayuela en La Florida de Talca',
    categoria: 'Fiestas de la Solidaridad y Encuentro',
    comuna: 'Talca',
    territorioTipo: 'Urbano',
    anio: '1983–1989',
    quienesEran:
      'Vecinas del Club de Madres, dirigentes de la junta de vecinos y trabajadores del POJH/PEM que organizaron la subsistencia con alegría desafiante.',
    queSonaban:
      'Con el fin de la dictadura, el regreso de la democracia y la creación de puestos de trabajo dignos con salarios justos para el pueblo maulino.',
    comoCelebraban:
      'Al terminar la jornada de olla común, los domingos organizaban campeonatos de rayuela pro-fondos de salud. La lienza tensa y los tejos de bronce sonaban entre aplausos y risas.',
    elementoSonoroCulinario:
      'Porotos con riendas compartidos en platos enlozados, pebre bien picante con ají cacho de cabra y el golpe seco del tejo en la greda húmeda.',
    galeria: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Olla_y_cuchara.jpg/1280px-Olla_y_cuchara.jpg',
        caption: 'Olla común y cuchara de madera: símbolos vivos de la solidaridad popular.',
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Chile_-_34660_-_Cueca_dance.jpg',
        caption: 'Cueca popular campesina y celebración comunitaria en el Maule.',
      },
    ],
  },
];

// =========================================================================
// 2. SEMILLA: Arte, Memoria y Derechos Universales
// =========================================================================
export const SEED_ARTE: ObraArte[] = [
  {
    id: 'arte-1',
    titulo: 'Mural «Memoria, Verdad y Porvenir»',
    categoria: 'Murales y Gráfica Barrial',
    autorColectivo: 'Brigada Ramona Parra & Colectivos Barriales de Talca',
    anio: '2020',
    comuna: 'Talca',
    descripcion:
      'Gran mural comunitario emplazado en los muros perimetrales de la ribera poniente de Talca. Con trazos coloridos y rostros de campesinos, obreros y estudiantes, reivindica el derecho inalienable a la memoria viva, la justicia y la dignidad humana.',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Mural_en_Chile_-_A740002.jpg',
    sitioRelacionadoId: 'plaza-armas-talca-2019',
    coordenadas: { lat: -35.4264, lng: -71.6554 },
    contenidoTexto:
      '«Por los que sembraron el trigo sin ver el pan,\npor los que cantaron bajito en la tempestad,\naquí estamos de pie como el río Maule:\nfluyendo con fuerza hacia la libertad.»',
  },
  {
    id: 'arte-2',
    titulo: 'Décimas a los Hombres del Surco y la Niebla',
    categoria: 'Poesía, Payas y Lira Popular',
    autorColectivo: 'Don Segundo Morales (Cantor a lo poeta de Colbún)',
    anio: '1974 / rescate oral 2018',
    comuna: 'Linares',
    descripcion:
      'Poema en décima espinela transmitido por tradición oral en las faldas de la cordillera de Linares y Colbún. Denuncia con honda metáfora campesina la desaparición de los dirigentes del asentamiento y proclama la persistencia invencible de la semilla.',
    imagenUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
    audioUrl: '',
    contenidoTexto: `I
El arado quedó mudo
en la tierra sin sembrar,
al amigo del telar
se lo llevaron desnudo.
El patrón apretó el nudo
creyendo apagar la luz,
pero floreció la cruz
en la quebrada del cerro,
no hay cadena ni destierro
que doblegue a esta virtud.

II
Si arrancaron la raíz
la semilla está guardada,
volverá la madrugada
a alumbrar este país.
El trigo que floreció
en el surco del dolor
no lo marchita el terror
ni el invierno más helado,
porque el pueblo organizado
es su propio sembrador.`,
  },
  {
    id: 'arte-3',
    titulo: '«Voces del Maule Profundo» (Rap y Conciencia)',
    categoria: 'Música y Cultura Urbana',
    autorColectivo: 'MC Territorio & Colectivo Hip-Hop Curicó',
    anio: '2021',
    comuna: 'Curicó',
    descripcion:
      'Composición musical urbana independiente que cruza samplers de payadores curicanos con rimas contemporáneas sobre los derechos laborales de los temporeros agrícolas de la fruta y la defensa del río Mataquito frente a la contaminación industrial.',
    imagenUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Rio_Mataquito_oeste.jpg/1280px-Rio_Mataquito_oeste.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    sitioRelacionadoId: 'curico-ruta5-uribe',
    coordenadas: { lat: -34.9855, lng: -71.2394 },
    contenidoTexto:
      '«(Coro)\nDel Maule a la costa el río reclama,\nla voz del abuelo que aún nos inflama.\nDerechos humanos no son mercancía,\nson pan en la mesa, memoria y osadía.\n\n(Estrofa)\nDesde el cerro Condell hasta Licantén,\nmiramos la tierra que sangra también,\npor el temporero que dobla la espalda,\npor la cordillera que el frío resguarda.\nNo olvidamos el tiro ni el pacto secreto,\nexigimos verdad con puño y respeto.»',
  },
  {
    id: 'arte-4',
    titulo: 'Mosaico Conmemorativo «Nombres que no se Olvidan»',
    categoria: 'Murales y Gráfica Barrial',
    autorColectivo: 'Taller de Cerámica y Memoria Cauquenes',
    anio: '2022',
    comuna: 'Cauquenes',
    descripcion:
      'Mosaico de azulejos fragmentados construido en la esquina histórica de la plaza de Cauquenes. Cada pieza de cerámica fue intervenida con una palabra elegida por vecinos: Memoria, Paz, Cariño, Verdad y Justicia en homenaje a las víctimas de la Caravana de la Muerte.',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Mural_en_Chile_-_A740113.jpg',
    sitioRelacionadoId: 'memorial-cauquenes',
    coordenadas: { lat: -35.966, lng: -72.314 },
    contenidoTexto:
      '«Fragmentos unidos por manos de pueblo.\nCada trozo de greda guarda una lágrima,\ncada color encendido anuncia la vida que no pudieron borrar.\nCauquenes recuerda con dignidad.»',
  },
  {
    id: 'arte-5',
    titulo: 'Lira Popular Maulína: «Versos por la Vida y el Pan»',
    categoria: 'Poesía, Payas y Lira Popular',
    autorColectivo: 'Poetas Populares del Valle Central y Rari',
    anio: '1986',
    comuna: 'Linares',
    descripcion:
      'Pliego de lira popular impreso en papel de envolver con xilografías talladas a mano en madera nativa. Se distribuía clandestinamente en ferias libres de Linares y Talca denunciando el costo de la vida y la falta de libertades civiles.',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Entrada_Rari.jpg',
    sitioRelacionadoId: 'escuela-artilleria-linares',
    coordenadas: { lat: -35.8454, lng: -71.5979 },
    contenidoTexto:
      '«Alerta al pobre y al campesino,\nque no le engañen con falsedad,\nsolo unidos en el camino\nconquistaremos la libertad.\n\nCanten los gallos en la enramada,\nque ya la noche se va a acabar,\nviene la aurora tan esperada\ncon su justicia que va a llegar.»',
  },
  {
    id: 'arte-6',
    titulo: 'Esténcil y Muro Testimonial «Dignidad en la 1 Sur»',
    categoria: 'Murales y Gráfica Barrial',
    autorColectivo: 'Colectivo Gráfico Maulino',
    anio: '2019',
    comuna: 'Talca',
    descripcion:
      'Intervención gráfica callejera realizada con esténcil multicapa en las cortinas metálicas y muros de la calle 1 Sur de Talca durante las jornadas de la revuelta popular de octubre de 2019. Resalta el derecho a la salud digna y la no impunidad ante el trauma ocular.',
    imagenUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Protestas_en_Chile_2019_Talca.jpg/1280px-Protestas_en_Chile_2019_Talca.jpg',
    sitioRelacionadoId: 'plaza-armas-talca-2019',
    coordenadas: { lat: -35.4264, lng: -71.6554 },
    contenidoTexto:
      '«Por los ojos de nuestros hermanos,\npor las manos cansadas de esperar,\nno habrá olvido ni perdón barato,\nla dignidad florecerá en la ciudad.»',
  },
  {
    id: 'arte-7',
    titulo: 'Cueca Larga de la Resistencia Campesina',
    categoria: 'Música y Cultura Urbana',
    autorColectivo: 'Conjunto Tradición y Esperanza de Parral',
    anio: '1983',
    comuna: 'Parral',
    descripcion:
      'Cueca larga compuesta en la clandestinidad campesina del sur del Maule. Relata la lucha de las familias colindantes al enclave de Colonia Dignidad y su resistencia frente a los abusos patronales y la represión militar.',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/La_Cueca_-_Chile_Central.jpg',
    sitioRelacionadoId: 'colonia-dignidad',
    coordenadas: { lat: -36.1428, lng: -71.825 },
    contenidoTexto:
      '«Río Perquilauquén corres callado,\ntestigo amargo de lo que han tapado,\npero tus aguas lavan la herida,\ny en cada orilla renace la vida.\n\n(Remate)\n¡Arriba la manta, firme el talón,\nque viva la tierra y la rebelión!»',
  },
  {
    id: 'arte-8',
    titulo: 'Poema Colectivo «Las Aguas del Maule no Callan»',
    categoria: 'Poesía, Payas y Lira Popular',
    autorColectivo: 'Taller Literario Carlos René Ibacache',
    anio: '2015',
    comuna: 'Constitución',
    descripcion:
      'Poema coral escrito por poetas y pescadores de la desembocadura del río Maule, entrelazando las memorias de la resistencia sindical con la defensa de las aguas y la biodiversidad costera.',
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/R%C3%ADo_Achibueno.jpg',
    coordenadas: { lat: -35.3333, lng: -72.4167 },
    contenidoTexto:
      '«Somos la desembocadura de los dolores antiguos,\nel delta donde confluyen los susurros de los caídos.\nAquí el río no muere en el mar:\nse convierte en ola gigante que vuelve a empezar.»',
  },
];

// =========================================================================
// 3. SEMILLA: Talleres y Metodologías Comunitarias (Caja de Herramientas)
// =========================================================================
export const SEED_TALLERES: TallerComunitario[] = [
  {
    id: 'taller-cartografia',
    titulo: 'Cartografía Social Familiar: «El Mapa de tus Abuelos»',
    subtitulo: 'Metodología intergeneracional para redescubrir la historia viva del barrio y la memoria territorial cotidiana.',
    nivel: 'Escolar / Familiar',
    duracion: '2 sesiones de 60 a 90 minutos',
    materiales: [
      'Pliego grande de cartulina blanca o papel kraft',
      'Plumones, lápices de colores y regla',
      'Fotografías antiguas familiares o recortes de periódicos locales',
      'Cinta adhesiva o pegamento en barra',
    ],
    objetivo:
      'Permitir que niños y jóvenes dialoguen con sus abuelos o personas mayores del barrio para mapear recuerdos afectivos: dónde quedaba el almacén de barrio, la fuente de agua, la sede de huelga o la cancha donde jugaban.',
    pasos: {
      fase: 'Guía General',
      titulo: 'Estructura metodológica',
      descripcion: 'Recorrido por las tres fases centrales del ejercicio dialógico.',
    },
    pasosList: [
      {
        fase: 'Fase 1: Preparación de la conversación',
        titulo: 'La sobremesa y las preguntas detonantes',
        descripcion:
          'Se invita al abuelo o vecino mayor a una merienda tranquila. El estudiante o joven tiene su libreta lista sin apuro ni tono de interrogatorio.',
        preguntasGuia: [
          '¿Cómo era esta calle cuando tenías mi edad? ¿Había pavimento o tierra?',
          '¿Dónde se juntaba la gente a conversar cuando pasaba algo importante?',
          '¿Qué comida o aroma recuerdas de las fiestas del barrio?',
          '¿Hubo algún momento difícil en que los vecinos se tuvieron que ayudar entre sí?',
        ],
      },
      {
        fase: 'Fase 2: El trazado del mapa',
        titulo: 'Dibujar el territorio desde los afectos',
        descripcion:
          'Sobre el papel kraft se dibuja el mapa actual del barrio con plumón negro. Con colores cálidos se van marcando los hitos recordados por los mayores: un árbol centenario, una fábrica que cerró, una esquina de asambleas.',
        preguntasGuia: [
          '¿Qué lugares ya no existen físicamente pero siguen vivos en la memoria?',
          '¿Qué nombre popular tenía este rincón que no sale en el mapa oficial?',
        ],
      },
      {
        fase: 'Fase 3: Socialización y cierre',
        titulo: 'Exposición y agradecimiento comunitario',
        descripcion:
          'Se cuelga el mapa en la sala de clases o en la sede de la junta de vecinos. Los participantes leen en voz alta una dedicatoria a la generación que construyó el territorio.',
      },
    ],
    consejosPedagogicos: [
      'Escuchar con respeto los silencios: si el entrevistado se emociona, dar tiempo y validar sus sentimientos.',
      'No calificar la memoria como "correcta o incorrecta": el valor radica en el relato vivencial y afectivo.',
      'Se puede fotografiar el mapa final para subirlo como aporte a la sección «Archivo Abierto» de esta web.',
    ],
  },
  {
    id: 'taller-arpillera',
    titulo: 'Taller de Arpillera y Memoria Textil Doméstica',
    subtitulo: 'Aprender el lenguaje del bordado colectivo sobre arpillera para plasmar un derecho fundamental o recuerdo comunitario.',
    nivel: 'Vecinal / Adulto Mayor',
    duracion: '3 a 4 horas (idealmente en 2 encuentros)',
    materiales: [
      'Base de tela de saco (arpillera de yute o tela crea gruesa) de 30x40 cm',
      'Retazos de telas variadas (camisas en desuso, lana, retazos con estampados)',
      'Agujas de lana gruesas sin punta (para seguridad) e hilos de colores',
      'Tijeras de tela',
    ],
    objetivo:
      'Heredar la técnica histórica de las arpilleristas chilenas como herramienta de encuentro colectivo, expresión artística y defensa de los Derechos Humanos Universales.',
    pasos: {
      fase: 'Guía General',
      titulo: 'Estructura metodológica',
      descripcion: 'De la idea al retazo bordado.',
    },
    pasosList: [
      {
        fase: 'Fase 1: La ronda de la palabra',
        titulo: 'Elegir el tema o derecho a bordar',
        descripcion:
          'El grupo se sienta en círculo. Se pone en el centro la Declaración Universal de los DDHH o un tema común (el derecho al agua en el Maule, la educación de los niños, la dignidad de la vejez). Cada participante comparte qué escena desea retratar.',
        preguntasGuia: [
          '¿Qué derecho humano siento que hoy necesita más cuidado en mi comunidad?',
          '¿Qué escena de mi vida representa la solidaridad más pura?',
        ],
      },
      {
        fase: 'Fase 2: El boceto en tela',
        titulo: 'Cortar figuras y diseñar la composición',
        descripcion:
          'Sin lápiz sofisticado, se recortan siluetas de personas, árboles, soles y casas en los retazos. Las telas cobran vida al combinarse por colores y texturas sobre la arpillera de base.',
      },
      {
        fase: 'Fase 3: Puntadas de historia',
        titulo: 'Bordar y coser en comunidad',
        descripcion:
          'Se fijan las figuras con punto festón o puntada simple. Durante el bordado se fomenta el canto colectivo, la conversación distendida y el intercambio de retazos entre compañeras.',
      },
    ],
    consejosPedagogicos: [
      'No se requiere experiencia previa en costura: la belleza de la arpillera radica en su fuerza expresiva, no en la perfección técnica.',
      'Vincular cada arpillera con una ficha escrita breve donde el autor explique su obra.',
    ],
  },
  {
    id: 'taller-grabacion-oral',
    titulo: 'Taller de Grabación Oral Comunitaria: «Micrófono Abierto»',
    subtitulo: 'Pautas prácticas y éticas para registrar testimonios orales de calidad usando un teléfono celular.',
    nivel: 'Jóvenes / Comunitario',
    duracion: '1 sesión teórica de 45 min + salidas a terreno',
    materiales: [
      'Teléfono celular inteligente con aplicación grabadora de voz (o notas de voz)',
      'Cuaderno de notas y lápiz pasta',
      'Consentimiento informado impreso o leído en audio',
      'Audífonos sencillos para monitorear el sonido',
    ],
    objetivo:
      'Capacitar a jóvenes y agentes culturales locales para registrar archivos orales sonoros de abuelos y dirigentas con respeto ético y claridad técnica.',
    pasos: {
      fase: 'Guía General',
      titulo: 'Estructura metodológica',
      descripcion: 'Protocolo de registro sonoro con sentido ético.',
    },
    pasosList: [
      {
        fase: 'Fase 1: Ética del testimonio y consentimiento',
        titulo: 'El acuerdo de respeto y confianza',
        descripcion:
          'Explicar con total transparencia para qué se utilizará la grabación. El entrevistado debe saber que puede detener la entrevista en cualquier momento y decidir si su nombre es público o anónimo.',
        preguntasGuia: [
          '«¿Está de acuerdo con que grabemos esta conversación para el archivo comunitario de memoria?»',
        ],
      },
      {
        fase: 'Fase 2: Configuración técnica simple',
        titulo: 'Garantizar un audio limpio con el celular',
        descripcion:
          'Colocar el teléfono a unos 25–30 cm de la boca del hablante sobre una mesa acolchada (con una servilleta o chaleco para evitar vibraciones). Activar el modo avión para evitar interrupciones de llamadas.',
      },
      {
        fase: 'Fase 3: El arte de preguntar sin interrumpir',
        titulo: 'Silencio activo y preguntas abiertas',
        descripcion:
          'Hacer preguntas que comiencen con «¿Cómo fue cuando...?», «¿Qué sintió en ese instante?», «¿Qué recuerda del sonido de ese día?». No interrumpir con comentarios propios mientras la persona relata.',
      },
    ],
    consejosPedagogicos: [
      'Respaldar inmediatamente el archivo de audio en la nube o en un computador con el nombre de la persona, lugar y fecha.',
      'Subir fragmentos destacados a la sección «Archivo Abierto» de esta plataforma web.',
    ],
  },
];
