import { useQuery } from "@tanstack/react-query";
import { getLandingBundleAction } from "../action/getLandingBundle.action";

/**
 * Trae toda la data del landing del asesor en un solo request. Todos los
 * hooks de sección (useHero, useAbout, useProjects, etc.) usan esta misma
 * queryKey, así que aunque cada uno llame a este hook por separado,
 * react-query solo dispara el fetch una vez y comparte el resultado
 * cacheado entre todos.
 */
export const useLandingBundle = () => {
  return useQuery({
    queryKey: ["landing-bundle"],
    queryFn: getLandingBundleAction,
    staleTime: 5 * 60 * 1000,
  });
};
