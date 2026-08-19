import { useLandingBundle } from "./useLandingBundle";
import { mapFooter } from "../data/mappers";

export const useFooter = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapFooter(data) : undefined };
};
