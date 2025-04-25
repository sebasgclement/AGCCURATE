import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ReactNode } from "react";
import { FaHome, FaLightbulb, FaTractor } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "AGCCURATE",
  description: "Tecnología que cultiva el futuro",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">AGCCURATE 🌱</div>

            <nav className="space-x-6 flex items-center relative">
              <Link href="/" className="hover:text-green-300 transition">
                Inicio
              </Link>

              <div className="relative group">
                <span className="cursor-pointer hover:text-green-300 transition">
                  Productos y Servicios
                </span>

                <div className="absolute left-0 mt-3 w-80 bg-white/10 backdrop-blur-md text-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50 p-4 space-y-3">
                  <Link
                    href="/hogar"
                    className="flex items-start gap-4 hover:bg-white/10 p-3 rounded transition"
                  >
                    <FaHome className="text-xl mt-1 text-green-300" />
                    <div>
                      <div className="font-semibold">Para el Hogar</div>
                      <div className="text-sm text-white/90">
                        Soluciones tecnológicas para tu casa.
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/hogar12"
                    className="flex items-start gap-4 hover:bg-white/10 p-3 rounded transition"
                  >
                    <FaLightbulb className="text-xl mt-1 text-yellow-300" />
                    <div>
                      <div className="font-semibold">Para el Hogar 1.2</div>
                      <div className="text-sm text-white/90">
                        Versiones mejoradas para tu comodidad.
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/agro"
                    className="flex items-start gap-4 hover:bg-white/10 p-3 rounded transition"
                  >
                    <FaTractor className="text-xl mt-1 text-green-400" />
                    <div>
                      <div className="font-semibold">Para el Agro</div>
                      <div className="text-sm text-white/90">
                        Innovación al servicio del campo.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                href="/contacto"
                className="hover:text-green-300 transition"
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {session?.user ? (
                <>
                  <span className="text-sm">
                    Hola, {session.user.name || session.user.email}
                  </span>
                  <form action="/api/auth/signout" method="post">
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5 rounded-full transition shadow">
                      <FiLogOut className="text-lg" />
                      Cerrar sesión
                    </button>
                  </form>
                </>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full transition shadow"
                >
                  <FiLogIn className="text-lg" />
                  Iniciar sesión
                </Link>
              )}
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-black text-white p-4 text-center">
            © {new Date().getFullYear()} AGCCURATE - Todos los derechos
            reservados
          </footer>
        </Providers>
      </body>
    </html>
  );
}
