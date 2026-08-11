import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "../data/interfaces";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <Card
      className="group relative bg-surface overflow-hidden rounded-lg border border-slate-gray/10 hover-scale cursor-pointer fade-and-slide-up visible p-0 gap-0"
      style={
        project.transitionDelayMs
          ? { transitionDelay: `${project.transitionDelayMs}ms` }
          : undefined
      }
      onClick={() => onSelect(project)}
    >
      {project.badge && (
        <div className="absolute top-4 right-4 z-10 bg-muted-gold text-primary px-3 py-1 font-label-sm uppercase">
          {project.badge}
        </div>
      )}
      <div className="aspect-[1.5] overflow-hidden">
        <img
          alt={project.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={project.image}
        />
      </div>
      <CardContent className="p-stack-md">
        <h3 className="font-headline-md text-headline-md text-primary mb-unit">
          {project.title}
        </h3>
        <p className="font-label-md text-label-md text-secondary mb-stack-md">
          {project.price}
        </p>
        <span className="inline-block font-label-sm text-primary uppercase border-b border-primary pb-1 group-hover:text-muted-gold group-hover:border-muted-gold transition-colors">
          Ver más
        </span>
      </CardContent>
    </Card>
  );
};
