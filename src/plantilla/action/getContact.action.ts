import { contactData } from "../data/contact.data";
import type { ContactData } from "../data/interfaces";

/**
 * Simula la obtención de la data de la sección de Contacto desde una fuente
 * externa (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getContactAction = async (): Promise<ContactData> => {
  return Promise.resolve(contactData);
};
