interface ContactEmailData {
  nombre: string;
  email: string;
  telefono: string;
  proyecto: string;
}

const LOGO_URL = "https://elavellano.cl/logo1.png";

export function buildContactEmailHtml(data: ContactEmailData): string {
  const { nombre, email, telefono, proyecto } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f0eb; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0eb; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.06);">

          <!-- Header con logo -->
          <tr>
            <td style="background-color:#a07030; padding:28px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${LOGO_URL}" alt="El Avellano" width="185" height="50" style="display:block; border-radius:8px; background-color:#ffffff; padding:4px;" />
                  </td>
                  <td style="padding-left:14px; vertical-align:middle;">
                    <p style="margin:0; color:#ffffff; font-size:11px; letter-spacing:2px; text-transform:uppercase; opacity:0.85;">
                      El Avellano
                    </p>
                    <h1 style="margin:4px 0 0; color:#ffffff; font-size:20px; font-weight:700;">
                      Nuevo mensaje de contacto
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px; color:#57534e; font-size:14px; line-height:1.6;">
                Has recibido un nuevo mensaje desde el formulario de contacto del sitio web.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; width:140px; color:#a8a29e; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; vertical-align:top;">
                    Nombre
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#1c1917; font-size:15px; font-weight:600;">
                    ${escapeHtml(nombre)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#a8a29e; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; vertical-align:top;">
                    Email
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#1c1917; font-size:15px;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#a07030; text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#a8a29e; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; vertical-align:top;">
                    Teléfono
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#1c1917; font-size:15px;">
                    <a href="tel:${escapeHtml(telefono)}" style="color:#1c1917; text-decoration:none;">${escapeHtml(telefono)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4; color:#a8a29e; font-size:12px; text-transform:uppercase; letter-spacing:0.5px; vertical-align:top;">
                    Proyecto
                  </td>
                  <td style="padding:12px 0; border-bottom:1px solid #e7e5e4;">
                    <span style="display:inline-block; background-color:#f5f0eb; color:#a07030; font-size:13px; font-weight:700; padding:4px 12px; border-radius:999px; border:1px solid #e0d0bc;">
                      ${escapeHtml(proyecto)}
                    </span>
                  </td>
                </tr>
                
              </table>

              <!-- CTA -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td style="border-radius:999px; background-color:#a07030;">
                    <a href="mailto:${escapeHtml(email)}"
                       style="display:inline-block; padding:12px 28px; color:#ffffff; font-size:13px; font-weight:700; text-decoration:none; text-transform:uppercase; letter-spacing:1px; border-radius:999px;">
                      Responder a ${escapeHtml(nombre)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px; background-color:#f5f0eb;">
              <p style="margin:0; color:#a8a29e; font-size:11px; text-align:center;">
                Este mensaje fue enviado automáticamente desde el formulario de contacto de
                <a href="https://elavellano.cl" style="color:#a07030; text-decoration:none;">elavellano.cl</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// Previene inyección de HTML desde los datos del formulario
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}