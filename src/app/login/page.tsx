"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) router.push("/");
    else alert("Error al iniciar sesión");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900 text-white px-4">
      <div className="flex flex-col md:flex-row bg-white/10 border border-white/30 rounded-2xl shadow-lg backdrop-blur-md p-6 md:p-10 w-full max-w-6xl gap-8">
        {/* Izquierda - Texto + Imagen */}
        <div className="flex-1 flex flex-col justify-center">
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
        </div>

        {/* Derecha - Formulario */}
        <div className="flex-1 bg-white/10 border border-white/30 rounded-2xl p-8 shadow-lg backdrop-blur-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            Iniciar Sesión
          </h1>

          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-2 w-full bg-white text-black font-semibold py-2 rounded shadow hover:bg-gray-100 mb-4"
          >
            <FcGoogle className="text-xl" />
            Iniciar sesión con Google
          </button>

          <div className="text-center text-sm text-white/80 mb-4">
            o utiliza tu E-mail y contraseña
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/60 text-white placeholder-white/70 focus:outline-none py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 font-semibold"
            >
              Ingresar
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            ¿No tenés una cuenta?{" "}
            <Link href="/registro" className="text-green-300 hover:underline">
              Registrate aquí
            </Link>
          </div>

          <div className="text-center text-xs mt-2">
            <Link
              href="/olvide-mi-clave"
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
