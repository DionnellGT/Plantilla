import type { HeroData } from "../data/interfaces";

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section
      className="relative h-[80vh] min-h-[600px] flex items-center justify-center parallax-bg overflow-hidden"
      style={{ backgroundImage: `url("${data.backgroundImage}")` }}
      aria-label={data.backgroundAlt}
    >
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 text-center px-margin-mobile md:px-gutter max-w-4xl mx-auto fade-and-slide-up visible">
        <h1 className="font-display-lg text-on-primary mb-stack-md drop-shadow-lg text-headline-lg-mobile md:text-display-lg">
          {data.title}
        </h1>
        <p className="font-body-lg text-body-lg text-surface-container-highest mb-stack-lg drop-shadow">
          {data.subtitle}
        </p>
        <a
          className="inline-flex items-center justify-center px-8 py-4 bg-muted-gold text-primary font-label-md hover:bg-surface transition-colors duration-300"
          href={data.ctaHref}
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  );
};
