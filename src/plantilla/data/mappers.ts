import {
  BRAND_NAME,
  LOGO_URL,
  CONTACT_INFO_FALLBACK,
  NAV_LINKS,
  FOOTER_LINK_GROUP,
  FOOTER_DESCRIPTION,
  FOOTER_COPYRIGHT,
} from "./brand.data";
import type {
  ApiLandingBundle,
  ContactData,
  ContactInfo,
  FooterData,
  HeroData,
  AboutData,
  NavigationData,
  Project,
  ProjectsSectionData,
  SocialLink,
  Testimonio,
  TestimoniosSectionData,
} from "./interfaces";

/** Saca las iniciales (hasta 2) de un nombre completo, para el avatar. */
const getInitials = (fullName: string): string =>
  fullName
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** Arma un link de WhatsApp (wa.me) a partir de un teléfono con cualquier formato. */
const buildWhatsappLink = (telefono: string): string => {
  const digits = telefono.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
};

export const mapContactInfo = (bundle: ApiLandingBundle): ContactInfo => {
  const { misDatos } = bundle;

  if (!misDatos?.telefono) {
    return CONTACT_INFO_FALLBACK;
  }

  return {
    whatsappNumber: misDatos.telefono,
    whatsappLink: buildWhatsappLink(misDatos.telefono),
    phone: misDatos.telefono,
    email: misDatos.correo || CONTACT_INFO_FALLBACK.email,
  };
};

export const mapNavigation = (bundle: ApiLandingBundle): NavigationData => ({
  logo: bundle.misDatos?.logo || LOGO_URL,
  logoAlt: bundle.fullName || BRAND_NAME,
  links: NAV_LINKS,
  contact: mapContactInfo(bundle),
});

export const mapHero = (bundle: ApiLandingBundle): HeroData => {
  const { banner } = bundle;

  return {
    title: banner?.titulo || "Es tiempo de cumplir un sueño",
    subtitle: banner?.subtitulo || banner?.descripcion || "",
    ctaLabel: "Ver Parcelas",
    ctaHref: "#parcelas",
    backgroundImage: banner?.imagen || LOGO_URL,
    backgroundAlt: banner?.titulo || BRAND_NAME,
  };
};

export const mapAbout = (bundle: ApiLandingBundle): AboutData => {
  const { sobreMi } = bundle;

  return {
    title: sobreMi?.titulo || "Acerca de Nosotros",
    paragraphs: sobreMi?.paragraph ? sobreMi.paragraph.split(/\n{2,}/) : [],
    image: sobreMi?.imagen || LOGO_URL,
    imageAlt: sobreMi?.titulo || BRAND_NAME,
  };
};

export const mapProjects = (bundle: ApiLandingBundle): ProjectsSectionData => {
  const projects: Project[] = bundle.proyectos.map((proyecto, index) => ({
    id: proyecto.id,
    title: proyecto.nombre,
    price: proyecto.precio || "Consultar precio",
    image: proyecto.imagenCaratula || LOGO_URL,
    imageAlt: proyecto.nombre,
    badge: proyecto.badgeLabel || undefined,
    badgeColor: proyecto.badgeColor || undefined,
    transitionDelayMs: (index % 3) * 100,
    descripcion: proyecto.descripcion || undefined,
    caracteristicas: proyecto.caracteristicas ?? [],
    lotesDisponibles: proyecto.lotesDisponibles,
    linkGoogleMaps: proyecto.linkGoogleMaps || undefined,
    link360Maps: proyecto.link360Maps || undefined,
    imagenesPopup: proyecto.imagenesPopup ?? [],
  }));

  return {
    title: "Parcelas y Campos",
    subtitle: "Crédito directo a 11, 24 y 36 meses.",
    projects,
  };
};

export const mapTestimonios = (bundle: ApiLandingBundle): TestimoniosSectionData => {
  const testimonios: Testimonio[] = bundle.testimonios.map((testimonio, index) => ({
    id: testimonio.id,
    quote: testimonio.descripcion || "",
    authorName: testimonio.nombreTestimonio,
    authorInitials: getInitials(testimonio.nombreTestimonio),
    media: testimonio.media || undefined,
    tipoMedia: testimonio.tipoMedia || undefined,
    transitionDelayMs: (index % 3) * 100,
  }));

  return {
    title: "Lo que dicen nuestros clientes",
    testimonios,
  };
};

export const mapContact = (bundle: ApiLandingBundle): ContactData => ({
  title: "Contáctanos",
  subtitle:
    "¿Tienes dudas sobre algún proyecto? Déjanos tus datos y un asesor se pondrá en contacto contigo a la brevedad.",
  namePlaceholder: "Tu nombre",
  phonePlaceholder: "+56 9 ...",
  emailPlaceholder: "ejemplo@correo.com",
  projectPlaceholder: "Selecciona un proyecto",
  submitLabel: "Enviar Mensaje",
  contact: mapContactInfo(bundle),
});

export const mapFooter = (bundle: ApiLandingBundle): FooterData => {
  const { misDatos } = bundle;

  const socialLinks: SocialLink[] = [
    misDatos?.instagram
      ? { id: "instagram", name: "Instagram", href: misDatos.instagram, icon: "instagram" as const }
      : null,
    misDatos?.facebook
      ? { id: "facebook", name: "Facebook", href: misDatos.facebook, icon: "facebook" as const }
      : null,
  ].filter((link): link is SocialLink => link !== null);

  return {
    logo: misDatos?.logo || LOGO_URL,
    logoAlt: bundle.fullName || BRAND_NAME,
    description: FOOTER_DESCRIPTION,
    copyright: FOOTER_COPYRIGHT,
    linkGroup: FOOTER_LINK_GROUP,
    socialLinks,
    contact: mapContactInfo(bundle),
  };
};
