import prisma from "@/app/lib/prisma"; // Ajustá este import si tu prisma está en otra ruta
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend"; // Vamos a usar Resend para mandar emails

const resend = new Resend(process.env.RESEND_API_KEY); // Poné tu API Key en tu .env

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email es requerido" }, { status: 400 });
  }

  // Verificar que el email exista
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  // Generar token
  const token = randomUUID();
  const expires = new Date(Date.now() + 1000 * 60 * 60); // Expira en 1 hora

  await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expiresAt: expires,
    },
  });

  // Mandar email
  const resetLink = `${process.env.NEXT_PUBLIC_URL}/restablecer-clave?token=${token}`;

  await resend.emails.send({
    from: "tuapp@tudominio.com", // Tiene que estar validado en Resend
    to: email,
    subject: "Recuperar contraseña",
    html: `
      <p>Hola,</p>
      <p>Solicitaste cambiar tu contraseña. Haz click aquí para restablecerla:</p>
      <a href="${resetLink}">Restablecer contraseña</a>
      <p>Este enlace expirará en 1 hora.</p>
    `,
  });

  return NextResponse.json({ message: "Correo de recuperación enviado." });
}
