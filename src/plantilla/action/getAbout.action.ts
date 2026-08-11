import { aboutData } from "../data/about.data";
import type { AboutData } from "../data/interfaces";

/**
 * Simula la obtención de la data de "Acerca de Nosotros" desde una fuente
 * externa (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getAboutAction = async (): Promise<AboutData> => {
  return Promise.resolve(aboutData);
};
