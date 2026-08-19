import { globalApi } from "@/api/globalApi";
import type { ApiLandingBundle } from "../data/interfaces";

const ASESOR_EMAIL = import.meta.env.VITE_ASESOR_EMAIL ?? "test3@google.com";

/**
 * Trae la data real del landing del asesor desde GlobalApi:
 * GET /landing-asesores/:email (endpoint público).
 */
export const getLandingBundleAction = async (): Promise<ApiLandingBundle> => {
  const { data } = await globalApi.get<ApiLandingBundle>(
    `/landing-asesores/${encodeURIComponent(ASESOR_EMAIL)}`,
  );
  return data;
};
