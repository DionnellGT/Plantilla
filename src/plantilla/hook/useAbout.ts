import { useLandingBundle } from "./useLandingBundle";
import { mapAbout } from "../data/mappers";

export const useAbout = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapAbout(data) : undefined };
};
