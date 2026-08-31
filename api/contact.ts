// api/contact.ts
import { Resend } from "resend";
import { buildContactEmailHtml } from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Método no permitido", { status: 405 });
  }

  try {
    const { nombre, email, telefono, proyecto } = await req.json();

    // Validación mínima de datos requeridos
    if (!nombre || !email || !telefono || !proyecto) {
      return new Response(
        JSON.stringify({ success: false, message: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }

    // 1. Correo interno — notifica al equipo de El Avellano
    const notificacion = resend.emails.send({
      from: "Pag Web El Avellano <noreply@elavellano.cl>",
      to: "marketing@elavellano.cl",
      replyTo: email,
      subject: `${nombre} — ${proyecto}`,
      html: buildContactEmailHtml({ nombre, email, telefono, proyecto }),
    });

    
    // Se envían en paralelo para no duplicar tiempo de espera
    const [resultNotificacion] = await Promise.allSettled([
      notificacion,
    ]);

    // El correo interno es crítico: si falla, se considera error
    if (resultNotificacion.status === "rejected") {
      console.error("Error enviando notificación interna:", resultNotificacion.reason);
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }

    // El autoresponder es deseable pero no crítico: si falla, solo se loguea
    // if (resultAutorespuesta.status === "rejected") {
    //   console.error("Error enviando autoresponder al cliente:", resultAutorespuesta.reason);
    // }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

export const config = { runtime: "edge" };