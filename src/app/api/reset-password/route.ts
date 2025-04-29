import prisma from "@/app/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { error: "Token y contraseña requeridos." },
        { status: 400 }
      );
    }

    // Buscar el token
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!resetToken) {
      return NextResponse.json({ error: "Token inválido." }, { status: 400 });
    }

    // Verificar expiración
    if (resetToken.expiresAt < new Date()) {
      // Token expirado, lo eliminamos
      await prisma.passwordResetToken.delete({ where: { token } });

      return NextResponse.json({ error: "Token expirado." }, { status: 400 });
    }

    // Buscar el usuario
    const user = await prisma.user.findUnique({
      where: { email: resetToken.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado." },
        { status: 404 }
      );
    }

    // Actualizar la contraseña
    const hashedPassword = await hash(password, 10);

    await prisma.user.update({
      where: { email: user.email },
      data: { password: hashedPassword },
    });

    // Eliminar el token usado
    await prisma.passwordResetToken.delete({
      where: { token },
    });

    return NextResponse.json({
      message: "Contraseña actualizada correctamente.",
    });
  } catch (error) {
    console.error("Error al actualizar la contraseña:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
