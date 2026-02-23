// /app/types/noticias.ts

export type TipoBloque = 
  | "titulo" 
  | "subtitulo" 
  | "texto" 
  | "imagen" 
  | "galeria" 
  | "gif" 
  | "video" 
  | "card_texto" 
  | "card_imagen" 
  | "card_mixta" 
  | "card_cta" 
  | "card_links" 
  | "banner" 
  | "carrusel" 
  | "slider" 
  | "testimonial" 
  | "lista_iconos" 
  | "tabla" 
  | "accordion" 
  | "tabs" 
  | "faq" 
  | "timeline" 
  | "cita" 
  | "social" 
  | "contador" 
  | "newsletter" 
  | "codigo" 
  | "espaciador" 
  | "grid" 
  | "flex" 
  | "cta" 
  | "separador"
  | "boton"
  | "spacer"
  | "divider";

export interface EstilosBloque {
  color?: string;
  background?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  minHeight?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  opacity?: string;
  display?: "block" | "flex" | "grid" | "inline" | "inline-block" | "none";
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  gap?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "center" | "flex-end" | "baseline";
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  textDecoration?: string;
  zIndex?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  cursor?: string;
  transition?: string;
  transform?: string;
  hover?: Partial<EstilosBloque>;
}

export interface ConfiguracionBloque {
  // Imagen/GIF/Video
  lazyLoading?: boolean;
  aspectRatio?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  
  // Cards
  tipoBoton?: "primario" | "secundario" | "outline" | "ghost";
  targetBlank?: boolean;
  
  // Layout
  columns?: number;
  fullWidth?: boolean;
  container?: boolean;
  
  // Carrusel/Slider
  slides?: Array<{
    imagen: string;
    titulo?: string;
    texto?: string;
    enlace?: string;
  }>;
  intervalo?: number;
  mostrarDots?: boolean;
  mostrarFlechas?: boolean;
  
  // Testimonial
  testimonios?: Array<{
    nombre: string;
    cargo?: string;
    empresa?: string;
    texto: string;
    imagen?: string;
    rating?: number;
  }>;
  
  // Lista iconos
  iconos?: Array<{
    icono: string;
    texto: string;
    color?: string;
  }>;
  
  // Tabla
  filas?: string[][];
  encabezados?: string[];
  striped?: boolean;
  bordered?: boolean;
  
  // Accordion
  items?: Array<{
    titulo: string;
    contenido: string;
    abierto?: boolean;
  }>;
  
  // Tabs
  tabs?: Array<{
    titulo: string;
    contenido: string;
    icono?: string;
  }>;
  
  // FAQ
  preguntas?: Array<{
    pregunta: string;
    respuesta: string;
  }>;
  
  // Timeline
  eventos?: Array<{
    fecha: string;
    titulo: string;
    descripcion?: string;
    icono?: string;
    color?: string;
  }>;
  
  // Social
  redes?: Array<{
    nombre: string;
    url: string;
    icono: string;
    color?: string;
  }>;
  
  // Contador
  duracion?: number;
  prefijo?: string;
  sufijo?: string;
  separadorMiles?: boolean;
  iniciarAlScroll?: boolean;
  
  // Galería
  imagenes?: Array<{
    src: string;
    alt?: string;
    caption?: string;
  }>;
  lightbox?: boolean;
  
  // Grid/Flex
  responsiveColumns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  
  // Botón
  variante?: "solid" | "outline" | "ghost" | "link";
  tamaño?: "sm" | "md" | "lg";
  icono?: string;
  iconoPosicion?: "left" | "right";
  deshabilitado?: boolean;
  cargando?: boolean;
  
  // Spacer
  altura?: string;
  alturaMobile?: string;
  alturaTablet?: string;
  alturaDesktop?: string;
  
  // Divider
  grosor?: string;
  estilo?: "solid" | "dashed" | "dotted";
  conTexto?: string;
  
  // Animaciones
  animacionEntrada?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "none";
  delayAnimacion?: number;
  duracionAnimacion?: number;
  
  // Visibilidad responsive
  mostrarEn?: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };
}

export interface Bloque {
  id: string;
  tipo: TipoBloque;
  contenido: Record<string, unknown>;
  estilos: EstilosBloque;
  configuracion: ConfiguracionBloque;
}

export interface MetaPublicacion {
  descripcion?: string;
  keywords?: string[];
  imagen?: string;
  autor?: string;
  categoria?: string;
  tags?: string[];
}

export interface Publicacion {
  id: string;
  titulo: string;
  slug?: string;
  estado: "borrador" | "publicado" | "archivado";
  fechaCreacion: string;
  fechaModificacion: string;
  fechaPublicacion?: string;
  bloques: Bloque[];
  meta?: MetaPublicacion;
  destacado?: boolean;
  orden?: number;
}

export const STORAGE_KEY = "vetchile_publicaciones_v2";

export function generarId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function generarSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const estilosPorDefecto: Record<TipoBloque, EstilosBloque> = {
  titulo: {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 1rem 0",
    color: "#111827",
  },
  subtitulo: {
    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
    fontWeight: "600",
    lineHeight: "1.3",
    margin: "0 0 0.75rem 0",
    color: "#374151",
  },
  texto: {
    fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
    lineHeight: "1.75",
    margin: "0 0 1rem 0",
    color: "#4b5563",
  },
  imagen: {
    width: "100%",
    borderRadius: "0.75rem",
    objectFit: "cover",
  },
  galeria: {
    display: "grid",
    gap: "1rem",
  },
  gif: {
    width: "100%",
    maxWidth: "100%",
    borderRadius: "0.5rem",
  },
  video: {
    width: "100%",
    borderRadius: "0.75rem",
  },
  card_texto: {
    padding: "1.5rem",
    background: "#ffffff",
    borderRadius: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  card_imagen: {
    borderRadius: "1rem",
    overflow: "hidden",
  },
  card_mixta: {
    background: "#ffffff",
    borderRadius: "1rem",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  card_cta: {
    padding: "2rem",
    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    borderRadius: "1rem",
    color: "#ffffff",
    textAlign: "center",
  },
  card_links: {
    padding: "1.5rem",
    background: "#f9fafb",
    borderRadius: "1rem",
    border: "1px solid #e5e7eb",
  },
  banner: {
    padding: "clamp(2rem, 8vw, 4rem) clamp(1rem, 5vw, 2rem)",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: "1rem",
  },
  carrusel: {
    borderRadius: "1rem",
    overflow: "hidden",
  },
  slider: {
    borderRadius: "1rem",
    overflow: "hidden",
  },
  testimonial: {
    padding: "1.5rem",
  },
  lista_iconos: {
    listStyle: "none",
    padding: "0",
  },
  tabla: {
    width: "100%",
    borderCollapse: "collapse",
  },
  accordion: {
    border: "1px solid #e5e7eb",
    borderRadius: "0.75rem",
    overflow: "hidden",
  },
  tabs: {
    width: "100%",
  },
  faq: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  timeline: {
    position: "relative",
    padding: "1rem 0",
  },
  cita: {
    padding: "1.5rem",
    borderLeft: "4px solid #3b82f6",
    background: "#f8fafc",
    fontStyle: "italic",
    borderRadius: "0 0.75rem 0.75rem 0",
  },
  social: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  contador: {
    textAlign: "center",
    padding: "2rem",
  },
  newsletter: {
    padding: "2rem",
    background: "#f3f4f6",
    borderRadius: "1rem",
    textAlign: "center",
  },
  codigo: {
    padding: "1rem",
    background: "#1f2937",
    color: "#f9fafb",
    borderRadius: "0.75rem",
    overflow: "auto",
    fontSize: "0.875rem",
  },
  espaciador: {
    height: "2rem",
  },
  grid: {
    display: "grid",
    gap: "1rem",
  },
  flex: {
    display: "flex",
    gap: "1rem",
  },
  cta: {
    padding: "2rem",
    background: "#1f2937",
    color: "#ffffff",
    borderRadius: "1rem",
    textAlign: "center",
  },
  separador: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "2rem 0",
  },
  boton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  spacer: {
    height: "2rem",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "1.5rem 0",
  },
};

export const configuracionPorDefecto: Record<TipoBloque, ConfiguracionBloque> = {
  titulo: {},
  subtitulo: {},
  texto: {},
  imagen: { lazyLoading: true },
  galeria: { columns: 3, lightbox: true },
  gif: { lazyLoading: true },
  video: { 
    autoplay: false, 
    loop: false, 
    muted: true, 
    controls: true, 
    aspectRatio: "16/9" 
  },
  card_texto: {},
  card_imagen: { lazyLoading: true },
  card_mixta: {},
  card_cta: { 
    tipoBoton: "primario",
    targetBlank: false 
  },
  card_links: {},
  banner: { fullWidth: true },
  carrusel: { 
    autoplay: true, 
    intervalo: 5000,
    mostrarDots: true,
    mostrarFlechas: true,
    slides: [] 
  },
  slider: { 
    autoplay: true, 
    intervalo: 4000,
    mostrarDots: true,
    mostrarFlechas: true,
    slides: [] 
  },
  testimonial: { testimonios: [] },
  lista_iconos: { iconos: [] },
  tabla: { 
    filas: [], 
    striped: true, 
    bordered: true 
  },
  accordion: { items: [] },
  tabs: { tabs: [] },
  faq: { preguntas: [] },
  timeline: { eventos: [] },
  cita: {},
  social: { redes: [] },
  contador: { 
    duracion: 2000, 
    prefijo: "", 
    sufijo: "",
    separadorMiles: true,
    iniciarAlScroll: true
  },
  newsletter: {},
  codigo: { lenguaje: "javascript" },
  espaciador: { altura: "2rem" },
  grid: { 
    columns: 2,
    responsiveColumns: { sm: 1, md: 2, lg: 3, xl: 4 }
  },
  flex: {},
  cta: {},
  separador: {},
  boton: {
    variante: "solid",
    tamaño: "md",
    iconoPosicion: "left",
    deshabilitado: false,
    cargando: false
  },
  spacer: {
    alturaMobile: "1rem",
    alturaTablet: "2rem",
    alturaDesktop: "3rem"
  },
  divider: {
    grosor: "1px",
    estilo: "solid"
  },
};
