import type { NavigationData } from "./interfaces";
import { BRAND_NAME, CONTACT_INFO, LOGO_URL, NAV_LINKS } from "./brand.data";

export const navigationData: NavigationData = {
  logo: LOGO_URL,
  logoAlt: BRAND_NAME,
  links: NAV_LINKS,
  contact: CONTACT_INFO,
};
