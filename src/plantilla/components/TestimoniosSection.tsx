import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { TestimoniosSectionData } from "../data/interfaces";
import  { cn } from "@/lib/utils";

interface TestimoniosSectionProps {
  data: TestimoniosSectionData;
}

export const TestimoniosSection = ({ data }: TestimoniosSectionProps) => {
  const [visibleCards, setVisibleCards] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 768) setVisibleCards(3);
      else setVisibleCards(2);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalTestimonials = data.testimonios.length;
  const maxIndex = Math.max(0, totalTestimonials - visibleCards);
  const hasCarousel = totalTestimonials > visibleCards;

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrevious = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section
      className="py-20 bg-surface-container-low px-margin-mobile md:px-gutter scroll-mt-2"
      id="testimonios"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20 fade-and-slide-up visible">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
            {data.title}
          </h2>
          <div className="h-1 w-16 bg-muted-gold mx-auto" />
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-stack-lg transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * ((100% + 1.5rem) / ${visibleCards})))`,
              }}
            >
              {data.testimonios.map((testimonio) => (
                <div
                  key={testimonio.id}
                  className="shrink-0 w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)] mx-auto"
                >
                  <div
                    className="h-full bg-surface p-stack-lg rounded-lg border border-slate-gray/10 fade-and-slide-up visible"
                    style={
                      testimonio.transitionDelayMs
                        ? { transitionDelay: `${testimonio.transitionDelayMs}ms` }
                        : undefined
                    }
                  >
                    <div className="aspect-square bg-surface-variant rounded-lg mb-stack-md overflow-hidden relative">
                      {testimonio.media ? (
                        testimonio.tipoMedia === "video" ? (
                          <video src={testimonio.media} controls className="w-full h-full object-cover" />
                        ) : (
                          <img
                            src={testimonio.media}
                            alt={testimonio.authorName}
                            className="w-full h-full object-cover"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Quote className="w-10 h-10 text-primary/30" />
                        </div>
                      )}
                    </div>

                    {testimonio.quote && (
                      <p className="font-body-md text-body-md text-on-surface-variant italic mb-stack-md">
                        "{testimonio.quote}"
                      </p>
                    )}

                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-muted-gold flex items-center justify-center text-primary font-bold">
                        {testimonio.authorInitials}
                      </div>
                      <p className="font-label-md text-label-md text-primary font-semibold">
                        {testimonio.authorName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {hasCarousel && (
            <>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                aria-label="Testimonios anteriores"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-surface border border-slate-gray/20 shadow-md flex items-center justify-center text-primary transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                aria-label="Siguiente testimonio"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-surface border border-slate-gray/20 shadow-md flex items-center justify-center text-primary transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ir al grupo de testimonios ${index + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      currentIndex === index
                        ? "w-6 bg-primary"
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
