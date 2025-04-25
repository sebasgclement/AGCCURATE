"use client";

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
      <div className="bg-white/10 border border-white/30 rounded-2xl p-8 w-full max-w-md shadow-lg backdrop-blur-md">
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
      </div>
    </div>
  );
}
