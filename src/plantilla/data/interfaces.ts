// Interfaces compartidas para la data de la Landing "Nina Belén Propiedades"

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactInfo {
  whatsappNumber: string;
  whatsappLink: string;
  phone: string;
  email: string;
  /** No viene del backend (LandingMisDatos no tiene dirección); se omite si no hay valor. */
  address?: string;
}

export type SocialPlatform = "instagram" | "facebook";

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: SocialPlatform;
}

export interface NavigationData {
  logo: string;
  logoAlt: string;
  links: NavLink[];
  contact: ContactInfo;
}

export interface HeroData {
  title: string;
  subtitle: string;
  descripcion: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  title: string;
  price: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: string;
  transitionDelayMs?: number;
  descripcion?: string;
  caracteristicas: string[];
  lotesDisponibles?: number;
  linkGoogleMaps?: string;
  link360Maps?: string;
  /** Imágenes adicionales para la galería del modal (además de `image`). */
  imagenesPopup: string[];
}

export interface ProjectsSectionData {
  title: string;
  subtitle: string;
  projects: Project[];
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  copyright: string;
  linkGroup: FooterLinkGroup;
  socialLinks: SocialLink[];
  contact: ContactInfo;
}

export interface ContactFormOption {
  id: string;
  label: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  projectPlaceholder: string;
  submitLabel: string;
  contact: ContactInfo;
}

export type TestimonioTipoMedia = "video" | "foto";

export interface Testimonio {
  id: string;
  quote: string;
  authorName: string;
  authorInitials: string;
  media?: string;
  tipoMedia?: TestimonioTipoMedia;
  transitionDelayMs?: number;
}

export interface TestimoniosSectionData {
  title: string;
  testimonios: Testimonio[];
}

// ───────────────────────── Forma real de la API (GlobalApi) ─────────────────────────
// GET /landing-asesores/:email

export interface ApiLandingBanner {
  id: string;
  imagen: string | null;
  titulo: string;
  subtitulo: string | null;
  descripcion: string | null;
}

export interface ApiLandingSobreMi {
  id: string;
  titulo: string;
  paragraph: string | null;
  imagen: string | null;
}

export interface ApiLandingMisDatos {
  id: string;
  logo: string | null;
  nombre: string;
  apellido: string | null;
  correo: string | null;
  telefono: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface ApiLandingProyecto {
  id: string;
  imagenCaratula: string | null;
  nombre: string;
  ubicacion: string | null;
  precio: string | null;
  badgeLabel: string | null;
  badgeColor: string | null;
  lotesDisponibles: number;
  descripcion: string | null;
  caracteristicas: string[];
  linkGoogleMaps: string | null;
  link360Maps: string | null;
  imagenesPopup: string[];
}

export type ApiTestimonioTipoMedia = "video" | "foto";

export interface ApiLandingTestimonio {
  id: string;
  media: string | null;
  tipoMedia: ApiTestimonioTipoMedia | null;
  nombreTestimonio: string;
  descripcion: string | null;
}

export interface ApiLandingBundle {
  email: string;
  fullName: string;
  banner: ApiLandingBanner | null;
  sobreMi: ApiLandingSobreMi | null;
  misDatos: ApiLandingMisDatos | null;
  proyectos: ApiLandingProyecto[];
  testimonios: ApiLandingTestimonio[];
}
