"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PerfilPage() {
  const { data: session } = useSession();
  const [modoEdicion, setModoEdicion] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [pais, setPais] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch("/api/perfil")
      .then((res) => res.json())
      .then((data) => {
        setNombre(data.name || "");
        setEmail(data.email || "");
        setTelefono(data.profile?.telefono || "");
        setCiudad(data.profile?.ciudad || "");
        setProvincia(data.profile?.provincia || "");
        setPais(data.profile?.pais || "");
        setFechaNacimiento(
          data.profile?.fechaNacimiento?.substring(0, 10) || ""
        );
        if (data.image) {
          setPreview(data.image);
        }
      });
  }, [session]);

  if (!session?.user) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-red-600">
        No está autorizado para ver esta página.
      </div>
    );
  }

  const calcularEdad = (fechaStr: string) => {
    if (!fechaStr) return null;
    const nacimiento = new Date(fechaStr);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const formatearFechaArg = (fechaStr: string) => {
    if (!fechaStr) return "";
    const [yyyy, mm, dd] = fechaStr.split("-");
    return `${dd}/${mm}/${yyyy}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imagenUrl: string | null = preview;

    if (imagen) {
      const formData = new FormData();
      formData.append("file", imagen);

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Error al subir imagen");
        imagenUrl = json.url;
      } catch (error) {
        alert("Error al subir la imagen.");
        console.error(error);
        return;
      }
    }

    const res = await fetch("/api/perfil", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        telefono,
        ciudad,
        provincia,
        pais,
        fechaNacimiento,
        imagen: imagenUrl,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Perfil actualizado correctamente.");
      setModoEdicion(false);
    } else {
      alert("Error: " + result.error);
    }
  };

  return (
    <main className="min-h-screen bg-[url('/fondo-plantas.png')] bg-cover bg-center px-6 py-16 md:py-20">
      <div className="bg-black/90 text-white rounded-2xl shadow-xl p-8 w-full max-w-xl mx-auto space-y-6 backdrop-blur">
        <h1 className="text-3xl font-bold text-[#00FF99] text-center">
          {modoEdicion ? "Editar Perfil" : "Perfil"}
        </h1>

        {modoEdicion ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
                required
              />
              <input
                type="email"
                value={email}
                readOnly
                className="bg-white text-gray-500 px-4 py-2 rounded shadow"
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              <input
                type="text"
                placeholder="Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              <input
                type="text"
                placeholder="Provincia"
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              <input
                type="text"
                placeholder="País"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setImagen(file);
                  setPreview(file ? URL.createObjectURL(file) : preview);
                }}
                className="bg-white text-black px-4 py-2 rounded shadow"
              />
              {preview && (
                <Image
                  src={preview}
                  alt="Preview"
                  width={100}
                  height={100}
                  className="rounded-full border mt-2 border-[#00FF99]"
                />
              )}
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <button
                type="submit"
                className="bg-[#00FF99] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#00FF99]/80 transition"
              >
                Guardar cambios
              </button>
              <button
                type="button"
                onClick={() => setModoEdicion(false)}
                className="text-white underline hover:text-[#00FF99]"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-sm">
            <div className="flex flex-col items-center gap-2 mb-4">
              <Image
                src={preview || "/avatar-placeholder.png"}
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-full border border-[#00FF99]"
              />
              <p className="text-xl font-bold">{nombre}</p>
              <p className="text-white/80">{email}</p>
            </div>
            <p>
              <span className="text-[#00FF99] font-semibold">Teléfono:</span>{" "}
              {telefono}
            </p>
            <p>
              <span className="text-[#00FF99] font-semibold">Ciudad:</span>{" "}
              {ciudad}
            </p>
            <p>
              <span className="text-[#00FF99] font-semibold">Provincia:</span>{" "}
              {provincia}
            </p>
            <p>
              <span className="text-[#00FF99] font-semibold">País:</span> {pais}
            </p>
            <p>
              <span className="text-[#00FF99] font-semibold">
                Fecha de nacimiento:
              </span>{" "}
              {formatearFechaArg(fechaNacimiento)}
            </p>
            {fechaNacimiento && (
              <p>
                <span className="text-[#00FF99] font-semibold">Edad:</span>{" "}
                {calcularEdad(fechaNacimiento)} años
              </p>
            )}

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setModoEdicion(true)}
                className="bg-[#00FF99] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#00FF99]/80 transition"
              >
                Editar perfil
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
