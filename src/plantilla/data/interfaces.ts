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
  address: string;
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
  transitionDelayMs?: number;
}

export interface ProjectModalContent {
  secondaryImage: string;
  secondaryImageAlt: string;
  features: string[];
  mapLocation: string;
  mapImage: string;
  mapImageAlt: string;
  mapsUrl: string;
}

export interface ProjectsSectionData {
  title: string;
  subtitle: string;
  projects: Project[];
  modalContent: ProjectModalContent;
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
