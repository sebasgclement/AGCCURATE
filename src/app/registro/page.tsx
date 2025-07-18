"use client";

import { AnimatePresence, motion } from "framer-motion";
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

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const isPasswordStrong = (password: string) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  };

  const getPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 5:
        return "#16a34a";
      case 4:
        return "#4ade80";
      case 3:
        return "#facc15";
      case 2:
        return "#fb923c";
      default:
        return "#ef4444";
    }
  };

  const getStrengthLabel = (score: number) => {
    switch (score) {
      case 5:
        return "Muy segura";
      case 4:
        return "Segura";
      case 3:
        return "Moderada";
      case 2:
        return "Débil";
      default:
        return "Muy débil";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPasswordStrong(formData.password)) {
      showToast(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.",
        "error"
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast("Las contraseñas no coinciden", "error");
      return;
    }

    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        showToast("Cuenta creada con éxito", "success");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        let errorMessage = "Error al registrar";
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch (err) {
          console.error("Error parseando JSON de respuesta:", err);
        }
        showToast(errorMessage, "error");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      showToast("Error de red. Intentalo nuevamente.", "error");
    }
  };

  const strengthScore = getPasswordStrength(formData.password);
  const strengthPercent = (strengthScore / 5) * 100;

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 pt-20 bg-[url('/fondo-plantas.png')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-colors ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-6xl gap-8"
      >
        {/* Columna izquierda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            ¿POR QUÉ CREAR UNA CUENTA?
          </h2>
          <p className="text-white/90 mb-6 leading-relaxed text-justify">
            Registrarte en AGCCURATE te permitirá administrar y vincular
            fácilmente nuestras soluciones inteligentes...
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

        {/* Columna derecha */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            Crear una cuenta
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
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
              {formData.password.length > 0 && (
                <div className="mt-2">
                  <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      animate={{
                        width: `${strengthPercent}%`,
                        backgroundColor: getStrengthColor(strengthScore),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="text-xs text-white mt-1 opacity-80">
                    Fortaleza: {getStrengthLabel(strengthScore)}
                  </p>
                </div>
              )}
            </div>

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
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
