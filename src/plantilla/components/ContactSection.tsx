import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import type { ContactData, Project } from "../data/interfaces";

interface ContactSectionProps {
  data: ContactData;
  projects: Project[];
}

const inputClasses =
  "w-full bg-surface-container-low text-on-surface-variant font-body-md text-body-md placeholder:text-on-surface-variant/50 rounded-md px-4 py-3 border border-transparent focus:outline-none focus:border-muted-gold transition-colors";

export const ContactSection = ({ data, projects }: ContactSectionProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectId, setProjectId] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const projectTitle = projects.find((project) => project.id === projectId)?.title;

    const lines = [
      "Hola, me gustaría recibir más información.",
      name && `Nombre: ${name}`,
      phone && `Teléfono: ${phone}`,
      email && `Correo: ${email}`,
      projectTitle && `Proyecto de interés: ${projectTitle}`,
    ].filter(Boolean);

    const whatsappUrl = `${data.contact.whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="py-section-gap px-margin-mobile md:px-gutter max-w-[1280px] mx-auto scroll-mt-20"
      id="contacto"
    >
      <div className="text-center mb-20 fade-and-slide-up visible">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
          {data.title}
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-outline rounded-xl px-6 py-12 max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-md fade-and-slide-up visible"
      >
        <div className="mb-6 md:mb-3">
          <label
            htmlFor="contact-name"
            className="block font-label-md text-label-md text-gray-500 font-bold mb-3"
          >
            Nombre Completo
          </label>
          <input
            id="contact-name"
            type="text"
            className={inputClasses}
            placeholder={data.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="mb-6 md:mb-3">
          <label
            htmlFor="contact-phone"
            className="block font-label-md text-label-md text-gray-500 font-bold mb-3"
          >
            Teléfono
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={inputClasses}
            placeholder={data.phonePlaceholder}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>

        <div className="mb-6 md:mb-3">
          <label
            htmlFor="contact-email"
            className="block font-label-md text-label-md text-gray-500 font-bold mb-3"
          >
            Correo Electrónico
          </label>
          <input
            id="contact-email"
            type="email"
            className={inputClasses}
            placeholder={data.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="mb-6 md:mb-3">
          <label
            htmlFor="contact-project"
            className="block font-label-md text-label-md text-gray-500 font-bold mb-3"
          >
            Proyecto de Interés
          </label>
          <div className="relative">
            <select
              id="contact-project"
              className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
            >
              <option value="" disabled>
                {data.projectPlaceholder}
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
          </div>
        </div>

        <button
          type="submit"
          className="mb-6 md:mb-3 rounded-xl md:col-span-2 bg-primary text-on-primary font-label-md uppercase tracking-wide py-4 hover:bg-muted-gold hover:text-primary transition-colors duration-300"
        >
          {data.submitLabel}
        </button>
      </form>
    </section>
  );
};
