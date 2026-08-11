import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { Footer } from "../components/Footer";
import { useNavigation } from "../hook/useNavigation";
import { useFooter } from "../hook/useFooter";
import { useMobileMenu } from "../hook/useMobileMenu";

export const LandingLayout = () => {
  const { data: navigationData } = useNavigation();
  const { data: footerData } = useFooter();
  const { isOpen, open, close } = useMobileMenu();

  return (
    <div className="bg-background text-on-background font-body-md antialiased selection:bg-muted-gold selection:text-primary">
      {navigationData && (
        <>
          <Header data={navigationData} onOpenMobileMenu={open} />
          <MobileMenu data={navigationData} isOpen={isOpen} onClose={close} />
        </>
      )}

      <Outlet />

      {footerData && <Footer data={footerData} />}
    </div>
  );
};
