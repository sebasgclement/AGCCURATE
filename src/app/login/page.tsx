"use client";

import { AnimatePresence, motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  useEffect(() => {
    if (errorParam) {
      const message =
        errorParam === "CredentialsSignin"
          ? "Email o contraseña incorrectos"
          : "Error desconocido al iniciar sesión";
      showToast(message, "error");
    }
  }, [errorParam]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      showToast("Sesión iniciada con éxito", "success");
      setTimeout(() => router.push("/"), 1500);
    } else {
      showToast("Email o contraseña incorrectos", "error");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 pt-20 text-white bg-[url('/fondo-plantas.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-sm font-medium transition-colors
              ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex gap-12 flex-wrap md:flex-nowrap">
        <div className="flex-1 max-w-md w-full text-center md:text-left space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">¿POR QUÉ CREAR UNA CUENTA?</h2>
            <p className="text-white/90 leading-relaxed text-base text-justify">
              Registrarte en <span className="font-semibold">AGCCURATE</span> te
              permitirá administrar y vincular fácilmente nuestras soluciones
              inteligentes con tus operaciones agrícolas...
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/20 mt-6">
            <Image
              src="/drone.png"
              alt="Drone en campo"
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
          </div>
        </div>

        <div className="flex-1 max-w-md w-full bg-white/20 border border-white/30 rounded-2xl p-8 shadow-lg backdrop-blur-md space-y-6 animate-fade-in delay-200">
          <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>

          <button
            onClick={() => signIn("google")}
            className="relative overflow-hidden flex items-center justify-center gap-2 w-full 
              bg-gradient-to-r from-white/20 via-white/30 to-white/20 
              text-white font-semibold py-2 rounded-xl 
              shadow hover:scale-105 hover:shadow-2xl 
              transition-all duration-300 backdrop-blur-md 
              hover:ring-2 hover:ring-white/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 animate-gradient-move opacity-50"></span>
            <span className="relative z-10 flex items-center gap-2">
              <FcGoogle className="text-2xl" />
              Iniciar sesión con Google
            </span>
          </button>

          <div className="text-center text-sm text-white/80">
            o utiliza tu E-mail y contraseña
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold transition-colors duration-300"
            >
              Ingresar
            </button>
          </form>

          <div className="text-center text-sm">
            ¿No tenés una cuenta?{" "}
            <Link href="/registro" className="text-green-300 hover:underline">
              Registrate aquí
            </Link>
          </div>

          <div className="text-center text-xs">
            <Link
              href="/restablecer-clave"
              className="text-white/60 hover:underline"
            >
              ¿Olvidaste tu contraseña? Presiona aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
