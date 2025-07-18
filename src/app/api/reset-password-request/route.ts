import { sendPasswordResetEmail } from "@/app/lib/mail";
import prisma from "@/app/lib/prisma";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email requerido." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({
        message:
          "Si el correo existe, recibirás un enlace para restablecer tu contraseña.",
      });
    }

    const token = randomUUID();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

    await prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    await sendPasswordResetEmail(email, token);

    return NextResponse.json({
      message: "Te enviamos un email para restablecer tu contraseña.",
    });
  } catch (error: any) {
    console.error(error);

    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
