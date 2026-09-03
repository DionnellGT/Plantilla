import { Menu } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import type { NavigationData } from "../data/interfaces";

interface HeaderProps {
  data: NavigationData;
  onOpenMobileMenu: () => void;
}

export const Header = ({ data, onOpenMobileMenu }: HeaderProps) => {
  return (
    <header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl border-b border-slate-gray/10 sticky top-0 z-50 w-full transition-all duration-300">
      <div className="flex justify-between items-center w-full px-gutter max-w-[1280px] mx-auto h-22">
        <a className="flex-shrink-0" href="#">
          <img alt={data.logoAlt} className="h-20 w-auto" src={data.logo} />
        </a>

        <nav className="hidden md:flex gap-8 items-center font-label-md text-label-md">
          {data.links.map((link, index) => (
            <a
              key={link.id}
              className={
                index === 0
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-secondary hover:text-muted-gold transition-colors duration-300"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton href={data.contact.whatsappLink} />
        </div>

        <button
          className="md:hidden text-primary"
          onClick={onOpenMobileMenu}
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
