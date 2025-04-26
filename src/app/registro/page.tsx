"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const res = await fetch("/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const error = await res.json();
      alert(error.message || "Error al registrar");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row bg-white/10 border border-white/30 rounded-2xl shadow-lg backdrop-blur-md p-6 md:p-10 w-full max-w-6xl gap-8"
      >
        {/* Columna izquierda - Texto + Imagen */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            ¿POR QUÉ CREAR UNA CUENTA?
          </h2>
          <p className="text-white/90 mb-6 leading-relaxed text-justify">
            Registrarte en AGCCURATE te permitirá administrar y vincular
            fácilmente nuestras soluciones inteligentes con tus operaciones
            agrícolas. Desde tu cuenta, podrás gestionar dispositivos, acceder a
            información clave y conectar tus aplicaciones para optimizar el
            rendimiento de tus cultivos. Forma parte de una plataforma diseñada
            para brindarte control, precisión e innovación en cada etapa de tu
            producción.
          </p>
          <div className="rounded-xl overflow-hidden border border-white/30">
            <Image
              src="/drone.png"
              alt="Drone en campo"
              width={800}
              height={500}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Columna derecha - Formulario */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 bg-white/10 border border-white/30 rounded-2xl p-8 shadow-lg backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            Crear una cuenta
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <div>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
            >
              Registrarse
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            ¿Ya tenés una cuenta?{" "}
            <Link href="/login" className="text-green-300 hover:underline">
              Iniciá sesión acá
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
