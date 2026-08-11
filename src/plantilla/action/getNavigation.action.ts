import { navigationData } from "../data/navigation.data";
import type { NavigationData } from "../data/interfaces";

/**
 * Simula la obtención de la data de navegación desde una fuente externa
 * (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getNavigationAction = async (): Promise<NavigationData> => {
  return Promise.resolve(navigationData);
};
