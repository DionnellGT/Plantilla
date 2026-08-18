import type { TestimoniosSectionData } from "./interfaces";

export const testimoniosSectionData: TestimoniosSectionData = {
  title: "Lo que dicen nuestros clientes",
  testimonios: [
    {
      id: "juan-pablo-soto",
      quote:
        "Excelente asesoría legal. Compramos nuestra parcela con total tranquilidad gracias al equipo de abogados.",
      authorName: "Juan Pablo Soto",
      authorLabel: "Cliente Hacienda Río Frío",
      authorInitials: "JP",
    },
    {
      id: "maria-angelica",
      quote:
        "La transparencia en el proceso fue clave. Nos explicaron cada detalle del contrato y el rol propio.",
      authorName: "María Angélica",
      authorLabel: "Cliente El Avellano",
      authorInitials: "MA",
      transitionDelayMs: 100,
    },
    {
      id: "ricardo-castro",
      quote:
        "Buscábamos un lugar seguro para invertir y Nina Belén nos dio la confianza que necesitábamos.",
      authorName: "Ricardo Castro",
      authorLabel: "Inversionista",
      authorInitials: "RC",
      transitionDelayMs: 200,
    },
  ],
};
