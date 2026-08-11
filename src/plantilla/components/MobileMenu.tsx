import { X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import type { NavigationData } from "../data/interfaces";

interface MobileMenuProps {
  data: NavigationData;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ data, isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-surface w-full h-full flex flex-col px-margin-mobile py-stack-lg">
        <div className="flex justify-between items-center mb-section-gap">
          <img alt={data.logoAlt} className="h-10 w-auto" src={data.logo} />
          <button
            className="text-primary"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-stack-lg font-headline-md text-headline-md text-primary">
          {data.links.map((link) => (
            <a key={link.id} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <WhatsAppButton href={data.contact.whatsappLink} className="w-full" />
        </div>
      </div>
    </div>
  );
};
