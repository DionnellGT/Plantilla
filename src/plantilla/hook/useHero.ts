import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../action/getHero.action";

export const useHero = () => {
  return useQuery({
    queryKey: ["landing", "hero"],
    queryFn: getHeroAction,
    staleTime: Infinity,
  });
};
