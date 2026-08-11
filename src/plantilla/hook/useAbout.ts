import { useQuery } from "@tanstack/react-query";
import { getAboutAction } from "../action/getAbout.action";

export const useAbout = () => {
  return useQuery({
    queryKey: ["landing", "about"],
    queryFn: getAboutAction,
    staleTime: Infinity,
  });
};
