import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file: File | null = formData.get("file") as unknown as File;

  if (!file || !file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Archivo inválido" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${uuidv4()}-${file.name.replaceAll(" ", "_")}`;
  const filePath = path.join(process.cwd(), "public", "uploads", filename);

  try {
    await writeFile(filePath, buffer);
    const url = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url });
  } catch (err) {
    console.error("Error al guardar imagen:", err);
    return NextResponse.json(
      { error: "No se pudo guardar el archivo" },
      { status: 500 }
    );
  }
}
