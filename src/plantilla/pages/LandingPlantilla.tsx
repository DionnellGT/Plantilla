import { useRef, useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ProjectModal } from "../components/ProjectModal";
import { TestimoniosSection } from "../components/TestimoniosSection";
import { ContactSection } from "../components/ContactSection";
import { useHero } from "../hook/useHero";
import { useAbout } from "../hook/useAbout";
import { useProjects } from "../hook/useProjects";
import { useTestimonios } from "../hook/useTestimonios";
import { useContact } from "../hook/useContact";
import { useScrollReveal } from "../hook/useScrollReveal";
import type { Project } from "../data/interfaces";


export const LandingPlantilla = () => {
  const { data: heroData } = useHero();
  const { data: aboutData } = useAbout();
  const { data: projectsData } = useProjects();
  const { data: testimoniosData } = useTestimonios();
  const { data: contactData } = useContact();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef, [
    heroData,
    aboutData,
    projectsData,
    testimoniosData,
    contactData,
  ]);

  const hasProjects = !!projectsData?.projects.length;
  const hasTestimonios = !!testimoniosData?.testimonios.length;

  return (
    <div ref={containerRef}>
      {heroData && <HeroSection data={heroData} />}
      {aboutData && <AboutSection data={aboutData} />}
      {hasProjects && (
        <ProjectsSection data={projectsData} onSelectProject={setSelectedProject} />
      )}
      {hasProjects && (
        <ProjectModal
          project={selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null);
          }}
        />
      )}
      {hasTestimonios && <TestimoniosSection data={testimoniosData} />}
      {contactData && (
        <ContactSection data={contactData} projects={projectsData?.projects ?? []} />
      )}
    </div>
  );
};
