import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import type { ContactData, Project } from "../data/interfaces";

interface ContactSectionProps {
  data: ContactData;
  projects: Project[];
}

interface ContactForm {
  nombre: string;
  telefono: string;
  email: string;
  proyecto: string;
}

const inputClasses =
  "w-full bg-surface-container-low text-on-surface-variant font-body-md text-body-md placeholder:text-on-surface-variant/50 rounded-md px-4 py-3 border border-transparent focus:outline-none focus:border-muted-gold transition-colors";

export const ContactSection = ({ data, projects }: ContactSectionProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError]     = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSuccess(false);
    setIsError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  return (
    <section
      className="py-20 px-margin-mobile md:px-gutter max-w-[1280px] mx-auto scroll-mt-2"
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
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("nombre", { required: true })}
            type="text"
            className={inputClasses}
            placeholder={data.namePlaceholder}
          />
          {errors.nombre && (
            <p className="text-danger font-label-md">Este campo es obligatorio</p>
          )}
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
            {...register("telefono", { required: true })}
            type="tel"
            className={inputClasses}
            placeholder={data.phonePlaceholder}
          />
          {errors.telefono && (
            <p className="text-danger font-label-md">Este campo es obligatorio</p>
          )}
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
            {...register("email", { required: true })}
            type="email"
            className={inputClasses}
            placeholder={data.emailPlaceholder}
          />
          {errors.email && (
            <p className="text-danger font-label-md">Este campo es obligatorio</p>
          )}
        </div>

        <div className="mb-6 md:mb-3">
          <label
            htmlFor="contact-project"
            className="block font-label-md text-label-md text-gray-500 font-bold mb-3"
          >
            Proyecto de Interés
          </label>
          <div className="relative">

            <Controller
                    name="proyecto"
                    control={control}
                    rules={{
                      validate: (v) => (v && v !== "") || "Debes seleccionar un proyecto",
                    }}
                    render={({ field }) => (
                      <select
                        id="contact-project"
                        className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
                        value={field.value}
                        onChange={(event) => field.onChange(event.target.value)}
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
                    )}
              />
          </div>
        </div>

        {/* Feedback */}
        {isSuccess && (
          <p className="text-green-600 font-manrope text-[13px] text-center">
            ✓ Mensaje enviado. ¡Pronto nos pondremos en contacto!
          </p>
        )}
        {isError && (
          <p className="text-red-400 font-manrope text-[13px] text-center">
            Ocurrió un error al enviar. Inténtalo de nuevo.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mb-6 md:mb-3 rounded-xl md:col-span-2 bg-primary text-on-primary font-label-md uppercase tracking-wide py-4 hover:bg-muted-gold hover:text-primary transition-colors duration-300"
        >
          {isSubmitting ? "Enviando..." : data.submitLabel}
        </button>
      </form>
    </section>
  );
};
