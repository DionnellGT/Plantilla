import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { MobileMenu } from "../components/MobileMenu";
import { Footer } from "../components/Footer";
import { useNavigation } from "../hook/useNavigation";
import { useFooter } from "../hook/useFooter";
import { useLandingBundle } from "../hook/useLandingBundle";
import { useMobileMenu } from "../hook/useMobileMenu";

export const LandingLayout = () => {
  const { isLoading, isError } = useLandingBundle();
  const { data: navigationData } = useNavigation();
  const { data: footerData } = useFooter();
  const { isOpen, open, close } = useMobileMenu();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-muted-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-background px-margin-mobile text-center">
        <p className="font-headline-md text-headline-md text-primary">
          No pudimos cargar esta página
        </p>
        <p className="font-body-md text-body-md text-secondary max-w-md">
          Ocurrió un problema al conectarnos con el servidor. Intenta recargar la
          página en unos minutos.
        </p>
      </div>
    );
  }

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
