import { Quote } from "lucide-react";
import type { TestimoniosSectionData } from "../data/interfaces";
import  { cn } from "@/lib/utils";

interface TestimoniosSectionProps {
  data: TestimoniosSectionData;
}

export const TestimoniosSection = ({ data }: TestimoniosSectionProps) => {
  return (
    <section
      className="py-20 bg-surface-container-low px-margin-mobile md:px-gutter scroll-mt-20"
      id="testimonios"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20 fade-and-slide-up visible">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
            {data.title}
          </h2>
          <div className="h-1 w-16 bg-muted-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
          {data.testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-surface p-stack-lg rounded-lg border border-slate-gray/10 fade-and-slide-up visible"
              style={
                testimonio.transitionDelayMs
                  ? { transitionDelay: `${testimonio.transitionDelayMs}ms` }
                  : undefined
              }
            >
              <div className={cn(testimonio.tipoMedia === "video" ? 
                                  "aspect-square bg-surface-variant rounded-lg mb-stack-md overflow-hidden relative"
                                  : "aspect-square bg-surface-variant rounded-lg mb-stack-md overflow-hidden relative")}>
                {testimonio.media ? (
                  testimonio.tipoMedia === "video" ? (
                    <video
                      src={testimonio.media}
                      controls
                      className="w-full h-full object-cover"
                    />
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
          ))}
        </div>
      </div>
    </section>
  );
};
