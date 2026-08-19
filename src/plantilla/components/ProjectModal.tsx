import { MapPin, View } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "../data/interfaces";

interface ProjectModalProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({ project, onOpenChange }: ProjectModalProps) => {
  const gallery = project ? [...project.imagenesPopup].filter(Boolean) : [];

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent>
        {project && (
          <>
            <DialogTitle>{project.title}</DialogTitle>
            <p className="font-label-md text-label-xl text-secondary mt-0.5">
              {project.price}
            </p>
            <p className="font-label-md text-label-xl text-secondary mb-stack-lg">
              {project.lotesDisponibles !== undefined
                ? `${project.lotesDisponibles} lote(s) disponible(s)`
                : ""}
            </p>

            {/* Galería */}
            {gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-unit mb-stack-lg">
                {gallery.slice(0, 4).map((src, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="aspect-video bg-surface-variant rounded overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={`${project.title} ${index + 1}`}
                      src={src}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Descripción */}
            {project.descripcion && (
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                {project.descripcion}
              </p>
            )}

            {/* Características */}
            {project.caracteristicas.length > 0 && (
              <div className="mb-stack-lg">
                <h3 className="font-label-md text-label-md text-primary mb-stack-md uppercase">
                  Características
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2  gap-y-2 font-body-md text-body-md text-on-surface-variant list-disc pl-5">
                  {project.caracteristicas.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mapa */}
            {(project.linkGoogleMaps || project.link360Maps) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.linkGoogleMaps && (
                  <a
                    href={project.linkGoogleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Ver en Google Maps
                  </a>
                )}
                {project.link360Maps && (
                  <a
                    href={project.link360Maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-primary text-on-primary font-label-md hover:bg-muted-gold transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <View className="w-4 h-4" />
                    Mapa 360°
                  </a>
                )}
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
