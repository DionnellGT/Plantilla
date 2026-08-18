import { testimoniosSectionData } from "../data/testimonios.data";
import type { TestimoniosSectionData } from "../data/interfaces";

/**
 * Simula la obtención de los testimonios desde una fuente externa
 * (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getTestimoniosAction = async (): Promise<TestimoniosSectionData> => {
  return Promise.resolve(testimoniosSectionData);
};
