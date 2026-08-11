import { useQuery } from "@tanstack/react-query";
import { getProjectsAction } from "../action/getProjects.action";

export const useProjects = () => {
  return useQuery({
    queryKey: ["landing", "projects"],
    queryFn: getProjectsAction,
    staleTime: Infinity,
  });
};
