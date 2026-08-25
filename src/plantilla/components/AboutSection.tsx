import type { AboutData } from "../data/interfaces";

interface AboutSectionProps {
  data: AboutData;
}

export const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-gutter max-w-[1280px] mx-auto scroll-mt-2"
      id="nosotros"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="fade-and-slide-up visible">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
            {data.title}
          </h2>
          <div className="h-1 w-16 bg-muted-gold mb-stack-lg" />
          {data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index < data.paragraphs.length - 1
                  ? "font-body-md text-body-md text-on-surface-variant mb-stack-md whitespace-pre-line"
                  : "font-body-md text-body-md text-on-surface-variant whitespace-pre-line"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div
          className="relative h-[320px] sm:h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden hover-scale fade-and-slide-up visible"
          style={{ transitionDelay: "200ms" }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt={data.imageAlt}
            src={data.image}
          />
        </div>
      </div>
    </section>
  );
};
