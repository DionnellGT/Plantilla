import { footerData } from "../data/footer.data";
import type { FooterData } from "../data/interfaces";

/**
 * Simula la obtención de la data del footer desde una fuente externa
 * (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getFooterAction = async (): Promise<FooterData> => {
  return Promise.resolve(footerData);
};
