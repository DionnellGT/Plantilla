import { projectsSectionData } from "../data/projects.data";
import type { ProjectsSectionData } from "../data/interfaces";

/**
 * Simula la obtención del listado de parcelas/campos desde una fuente
 * externa (API / CMS). Hoy retorna la data estática del proyecto.
 */
export const getProjectsAction = async (): Promise<ProjectsSectionData> => {
  return Promise.resolve(projectsSectionData);
};
