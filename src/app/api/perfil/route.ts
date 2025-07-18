import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: true },
  });

  if (!user) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const {
    nombre,
    fechaNacimiento,
    telefono,
    genero,
    domicilio,
    ciudad,
    provincia,
    pais,
    imagen,
  } = await req.json();

  if (typeof nombre !== "string" || nombre.trim() === "") {
    return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
  }

  try {
    const actualizado = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: nombre,
        image: imagen || undefined,
        profile: {
          upsert: {
            create: {
              fechaNacimiento: fechaNacimiento
                ? new Date(fechaNacimiento)
                : null,
              telefono,
              genero,
              domicilio,
              ciudad,
              provincia,
              pais,
            },
            update: {
              fechaNacimiento: fechaNacimiento
                ? new Date(fechaNacimiento)
                : null,
              telefono,
              genero,
              domicilio,
              ciudad,
              provincia,
              pais,
            },
          },
        },
      },
      include: { profile: true },
    });

    return NextResponse.json({ success: true, user: actualizado });
  } catch (error) {
    console.error("Error al actualizar perfil:", error);
    return NextResponse.json(
      { error: "Error al actualizar perfil" },
      { status: 500 }
    );
  }
}
