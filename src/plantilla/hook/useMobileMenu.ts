import { useCallback, useEffect, useState } from "react";

/**
 * Maneja el estado del menú móvil, replicando el comportamiento original de
 * bloquear el scroll del body mientras el menú está abierto.
 */
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { isOpen, open, close };
};
