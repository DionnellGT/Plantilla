import { useQuery } from "@tanstack/react-query";
import { getTestimoniosAction } from "../action/getTestimonios.action";

export const useTestimonios = () => {
  return useQuery({
    queryKey: ["landing", "testimonios"],
    queryFn: getTestimoniosAction,
    staleTime: Infinity,
  });
};
