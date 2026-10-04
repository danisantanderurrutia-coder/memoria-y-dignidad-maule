export type Epoca = 'pre' | 'dictadura' | 'transicion' | 'revuelta';
export type Provincia = 'Talca' | 'Curicó' | 'Linares' | 'Cauquenes';
export type TipoSitio = 'detencion' | 'memorial' | 'conflicto' | 'colonia';

export interface GaleriaItem {
  url: string;
  caption: string;
}

export interface Sitio {
  id: string;
  titulo: string;
  comuna: string;
  provincia: Provincia;
  epoca: Epoca;
  tipo: TipoSitio;
  lat: number;
  lng: number;
  periodo: string;
  resena: string;
  galeria: GaleriaItem[];
  testimonio: string;
  testimonioAutor: string;
  audioUrl: string;
  videoUrl: string;
  fuentes: { label: string; url: string }[];
}

export type FormatoDoc = 'PDF' | 'Audio' | 'Fotografía' | 'Video';

export interface Documento {
  id: string;
  titulo: string;
  descripcion: string;
  formato: FormatoDoc;
  etiquetas: string[];
  anio: number;
  fuente: string;
  url: string;
}

export type EstadoComentario = 'pendiente' | 'aprobado' | 'rechazado';

export interface Comentario {
  id: string;
  articuloId: string;
  autor: string;
  texto: string;
  fecha: string;
  estado: EstadoComentario;
}

export interface Articulo {
  id: string;
  titulo: string;
  resumen: string;
  categoria: 'Crónica' | 'Testimonio' | 'Noticia' | 'Archivo';
  autor: string;
  fecha: string;
  contenido: string; // párrafos separados por línea en blanco
  imagen?: string;
  imagenCredito?: string;
}

export interface Aporte {
  id: string;
  tipo: 'Relato' | 'Sugerencia de sitio' | 'Testimonio' | 'Archivo';
  nombre: string;
  contacto: string;
  titulo: string;
  mensaje: string;
  enlace: string;
  fecha: string;
  revisado: boolean;
}

export type CategoriaMuseo = 'Lugares' | 'Momentos' | 'Acciones' | 'Documentos' | 'Prensa';
export type TipoMedia = 'foto' | 'video' | 'documento' | 'prensa';

export interface RegistroMuseo {
  id: string;
  titulo: string;
  categoria: CategoriaMuseo;
  tipo: TipoMedia;
  mediaUrl: string;
  fuenteUrl: string;
  credito: string;
  anio: string;
  lugar: string;
  relato: string;
  audioUrl: string;
}

// -------------------------------------------------------------
// NUEVO MÓDULO 1: Los Sueños que Construían
// -------------------------------------------------------------
export type CategoriaSueno =
  | 'Oficios y Vida Cotidiana'
  | 'Proyectos Colectivos y Asentamientos'
  | 'Fiestas de la Solidaridad y Encuentro';

export interface HistoriaSueno {
  id: string;
  titulo: string;
  categoria: CategoriaSueno;
  comuna: string;
  territorioTipo: 'Rural' | 'Urbano';
  anio: string;
  quienesEran: string;
  queSonaban: string;
  comoCelebraban: string;
  elementoSonoroCulinario: string; // ej. La comida compartida / la música en la radio
  galeria: GaleriaItem[];
}

// -------------------------------------------------------------
// NUEVO MÓDULO 2: Arte, Memoria y Derechos Universales
// -------------------------------------------------------------
export type CategoriaArte =
  | 'Murales y Gráfica Barrial'
  | 'Poesía, Payas y Lira Popular'
  | 'Música y Cultura Urbana';

export interface ObraArte {
  id: string;
  titulo: string;
  categoria: CategoriaArte;
  autorColectivo: string;
  anio: string;
  comuna: string;
  descripcion: string;
  contenidoTexto?: string; // Por ejemplo versos, décimas o letras
  imagenUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  sitioRelacionadoId?: string; // ID para vincular con el mapa si tiene georreferencia
  coordenadas?: { lat: number; lng: number };
}

// -------------------------------------------------------------
// NUEVO MÓDULO 3: Talleres y Metodologías Comunitarias
// -------------------------------------------------------------
export type NivelTaller =
  | 'Escolar'
  | 'Familiar'
  | 'Escolar / Familiar'
  | 'Jóvenes'
  | 'Jóvenes / Comunitario'
  | 'Vecinal'
  | 'Vecinal / Adulto Mayor'
  | 'Comunitario / Adulto Mayor';

export interface PasoTaller {
  fase: string;
  titulo: string;
  descripcion: string;
  preguntasGuia?: string[];
}

export interface TallerComunitario {
  id: string;
  titulo: string;
  subtitulo: string;
  nivel: NivelTaller;
  duracion: string;
  materiales: string[];
  objetivo: string;
  pasos: PasoTaller;
  pasosList: PasoTaller[];
  consejosPedagogicos: string[];
}
