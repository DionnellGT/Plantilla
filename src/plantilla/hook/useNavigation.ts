import { useLandingBundle } from "./useLandingBundle";
import { mapNavigation } from "../data/mappers";

export const useNavigation = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapNavigation(data) : undefined };
};
