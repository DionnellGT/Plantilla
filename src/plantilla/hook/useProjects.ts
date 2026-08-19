import { useLandingBundle } from "./useLandingBundle";
import { mapProjects } from "../data/mappers";

export const useProjects = () => {
  const { data, ...rest } = useLandingBundle();
  return { ...rest, data: data ? mapProjects(data) : undefined };
};
