// Constantes de marca reutilizadas entre secciones (header, footer, menú móvil)

export const BRAND_NAME = "Nina Belén Propiedades";

export const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AP1WRLu_m1J9sw5g4VfheiZatPWs_MIhAj4HUVw9tR8mjGX6GAdwmfuaMAALU1RlLlVmJ22PwQTlXPBJeb39tg3qJotLckp5jnB5nP80HuktD3IpyC1DwZWksbir5fdfsITxRUFbsxTQtruE9xqZjhHIit7gX219b6nsXyhl0bZts9DBKagDhT1mTy7Hiv5m62cVUBqeLHhkenJ9FraUs4GzgeOarRYfEcQqECFksUcTARuY3PnSMgQT2pNq80c";

/**
 * Contacto de respaldo: solo se usa si el backend no devuelve
 * `misDatos` para el asesor (por ejemplo, mientras no ha cargado sus
 * datos, o ante un error de red).
 */
export const CONTACT_INFO_FALLBACK = {
  whatsappNumber: "+56 9 7914 8372",
  whatsappLink: "https://wa.me/56979148372",
  phone: "+56 9 7914 8372",
  email: "conecta@ninabelen.cl",
};

export const NAV_LINKS = [
  { id: "inicio", label: "Inicio", href: "#" },
  { id: "nosotros", label: "Nosotros", href: "#nosotros" },
  { id: "parcelas", label: "Parcelas", href: "#parcelas" },
  { id: "testimonios", label: "Testimonios", href: "#testimonios" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

export const FOOTER_LINK_GROUP = {
  title: "Enlaces",
  links: [
    { id: "inicio", label: "Inicio", href: "#" },
    { id: "nosotros", label: "Nosotros", href: "#nosotros" },
    { id: "parcelas", label: "Proyectos", href: "#parcelas" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ],
};

export const FOOTER_DESCRIPTION =
  "Corredora de propiedades, campos y parcelas al sur de Chile.";

export const FOOTER_COPYRIGHT = "© 2026 Derechos Reservados El Avellano";
