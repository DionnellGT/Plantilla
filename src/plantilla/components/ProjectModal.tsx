import { Map as MapIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project, ProjectModalContent } from "../data/interfaces";

interface ProjectModalProps {
  project: Project | null;
  modalContent: ProjectModalContent;
  onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({ project, modalContent, onOpenChange }: ProjectModalProps) => {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent>
        {project && (
          <>
            <DialogTitle>{project.title}</DialogTitle>
            <p className="font-label-md text-label-md text-secondary mb-stack-lg">
              {project.price}
            </p>

            {/* Galería */}
            <div className="grid grid-cols-2 gap-unit mb-stack-lg">
              <div className="aspect-video bg-surface-variant rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={project.imageAlt}
                  src={project.image}
                />
              </div>
              <div className="aspect-video bg-surface-variant rounded overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={modalContent.secondaryImageAlt}
                  src={modalContent.secondaryImage}
                />
              </div>
            </div>

            {/* Características */}
            <div className="mb-stack-lg">
              <h3 className="font-label-md text-label-md text-primary mb-stack-md uppercase">
                Características
              </h3>
              <ul className="grid grid-cols-2 gap-y-2 font-body-md text-body-md text-on-surface-variant list-disc pl-5">
                {modalContent.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Mapa */}
            <div className="mb-stack-lg">
              <div className="w-full h-48 bg-surface-variant flex items-center justify-center rounded border border-slate-gray/10 mb-stack-md relative overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  alt={modalContent.mapImageAlt}
                  src={modalContent.mapImage}
                />
                <MapIcon className="w-10 h-10 text-primary relative z-10" />
              </div>
              <div className="flex gap-4">
                <a
                  href={modalContent.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 border border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-colors text-center"
                >
                  Ver en Google Maps
                </a>
                <button
                  type="button"
                  className="flex-1 py-3 bg-primary text-on-primary font-label-md hover:bg-muted-gold transition-colors text-center"
                >
                  Mapa 360
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
