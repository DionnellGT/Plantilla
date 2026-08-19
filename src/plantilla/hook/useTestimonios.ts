import { useLandingBundle } from "./useLandingBundle";
import { mapTestimonios } from "../data/mappers";

export const useTestimonios = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapTestimonios(data) : undefined };
};
