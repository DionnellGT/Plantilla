import { useQuery } from "@tanstack/react-query";
import { getNavigationAction } from "../action/getNavigation.action";

export const useNavigation = () => {
  return useQuery({
    queryKey: ["landing", "navigation"],
    queryFn: getNavigationAction,
    staleTime: Infinity,
  });
};
