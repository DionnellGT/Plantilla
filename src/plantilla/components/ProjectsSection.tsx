import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectsSectionData } from "../data/interfaces";

interface ProjectsSectionProps {
  data: ProjectsSectionData;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection = ({ data, onSelectProject }: ProjectsSectionProps) => {
  return (
    <section
      className="py-20 bg-surface-container-low px-margin-mobile md:px-gutter"
      id="parcelas"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20 fade-and-slide-up visible">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
            {data.title}
          </h2>
          <p className="font-body-md text-body-md text-secondary">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
          ))}
        </div>
      </div>
    </section>
  );
};
