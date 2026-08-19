import { useLandingBundle } from "./useLandingBundle";
import { mapHero } from "../data/mappers";

export const useHero = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapHero(data) : undefined };
};
