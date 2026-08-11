import type { FooterData } from "./interfaces";
import { BRAND_NAME, CONTACT_INFO, LOGO_URL } from "./brand.data";

export const footerData: FooterData = {
  logo: LOGO_URL,
  logoAlt: BRAND_NAME,
  description: "Corredora de propiedades, campos y parcelas al sur de Chile.",
  copyright: "© 2026 Derechos Reservados El Avellano",
  linkGroup: {
    title: "Enlaces",
    links: [
      { id: "inicio", label: "Inicio", href: "#" },
      { id: "nosotros", label: "Nosotros", href: "#nosotros" },
      { id: "parcelas", label: "Proyectos", href: "#parcelas" },
      { id: "contacto", label: "Contacto", href: "#contacto" },
    ],
  },
  socialLinks: [
    {
      id: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/ninabelen.propiedades",
      icon: "instagram",
    },
    {
      id: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/share/19tVWABjB2/",
      icon: "facebook",
    },
  ],
  contact: CONTACT_INFO,
};
