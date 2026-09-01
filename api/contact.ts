import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido",
    });
  }

  try {
    const {
      nombre,
      telefono,
      email,
      proyecto,
      tiempoEntrega,
    } = req.body;

    if (!nombre || !telefono || !email) {
      return res.status(400).json({
        error: "Faltan campos obligatorios",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Web <noreply@elavellano.cl>",
      to: ["marketing@elavellano.cl"],
      replyTo: email,
      subject: `Nuevo contacto desde la web - ${nombre}`,
      html: `
        <h2>Nuevo contacto desde la página web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Proyecto:</strong> ${proyecto || "No especificado"}</p>
        <p><strong>Tiempo de entrega:</strong> ${tiempoEntrega || "No especificado"}</p>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        error: "No se pudo enviar el correo",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error interno del servidor",
    });
  }
}