import { heroData } from "../data/hero.data";
import type { HeroData } from "../data/interfaces";

/**
 * Simula la obtención de la data del Hero desde una fuente externa
 * (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getHeroAction = async (): Promise<HeroData> => {
  return Promise.resolve(heroData);
};
