import { useEffect } from "react";

/**
 * Replica el comportamiento original de la plantilla: observa todos los
 * elementos con la clase `fade-and-slide-up` dentro del contenedor y les
 * agrega la clase `visible` cuando entran al viewport.
 */
export const useScrollReveal = (containerRef: React.RefObject<HTMLElement | null>, deps: unknown[] = []) => {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(".fade-and-slide-up");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
