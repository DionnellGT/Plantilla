import { useLandingBundle } from "./useLandingBundle";
import { mapContact } from "../data/mappers";

export const useContact = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapContact(data) : undefined };
};
