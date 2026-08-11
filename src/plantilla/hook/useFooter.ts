import { useQuery } from "@tanstack/react-query";
import { getFooterAction } from "../action/getFooter.action";

export const useFooter = () => {
  return useQuery({
    queryKey: ["landing", "footer"],
    queryFn: getFooterAction,
    staleTime: Infinity,
  });
};
