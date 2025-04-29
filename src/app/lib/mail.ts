import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Falta RESEND_API_KEY en las variables de entorno");
}

if (!process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error("Falta NEXT_PUBLIC_APP_URL en las variables de entorno");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/restablecer-clave/confirmar?token=${token}`;

  try {
    const data = await resend.emails.send({
      from: "AGCCURATE <onboarding@resend.dev>",
      to: email,
      subject: "Restablecer tu contraseña",
      html: `
        <p>Hola,</p>
        <p>Hacé click en el siguiente enlace para restablecer tu contraseña:</p>
        <p><a href="${resetLink}">Restablecer contraseña</a></p>
        <p>Si no solicitaste este cambio, ignorá este correo.</p>
      `,
    });

    if (data.error) {
      console.error("Error enviando correo:", data.error);
      throw new Error("No se pudo enviar el correo de restablecimiento");
    }

    return data;
  } catch (error) {
    console.error("Error en sendPasswordResetEmail:", error);
    throw error;
  }
}
