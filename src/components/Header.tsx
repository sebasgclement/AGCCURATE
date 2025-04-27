"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaLightbulb, FaTractor } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold">AGCCURATE 🌱</div>

      {/* Botón hamburguesa (solo en mobile) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
      >
        <span
          className={`block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-8 h-0.5 bg-white transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Menú escritorio */}
      <nav className="hidden md:flex space-x-6 items-center relative">
        <Link href="/" className="hover:text-green-300 transition">
          Inicio
        </Link>

        {/* Productos y Servicios */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="cursor-pointer hover:text-green-300 transition">
            Productos y Servicios
          </div>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-3 w-80 bg-white/10 backdrop-blur-md text-white rounded-xl shadow-xl border border-white/20 drop-shadow-lg z-50 p-4 space-y-3 transition-all duration-300 ease-out">
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
                href="/hogar/como-trabaja"
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
          )}
        </div>

        <Link href="/contacto" className="hover:text-green-300 transition">
          Contacto
        </Link>
      </nav>

      {/* Menú mobile */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-start p-6 space-y-4 z-40 md:hidden shadow-lg border-t border-white/10 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <Link
            href="/"
            className="hover:text-green-300 transition w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inicio
          </Link>

          {/* Productos y Servicios en Mobile */}
          <div className="w-full">
            <div
              className="cursor-pointer hover:text-green-300 transition w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Productos y Servicios
            </div>

            {isDropdownOpen && (
              <div className="flex flex-col pl-4 pt-2 space-y-2">
                <Link
                  href="/hogar"
                  className="hover:text-green-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Para el Hogar
                </Link>
                <Link
                  href="/hogar/como-trabaja"
                  className="hover:text-green-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Para el Hogar 1.2
                </Link>
                <Link
                  href="/agro"
                  className="hover:text-green-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Para el Agro
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            className="hover:text-green-300 transition w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </Link>

          {/* Login / Logout en mobile */}
          {session?.user ? (
            <form action="/api/auth/signout" method="post" className="w-full">
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded-full w-full justify-center mt-4">
                <FiLogOut className="text-lg" />
                Cerrar sesión
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-full w-full justify-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiLogIn className="text-lg" />
              Iniciar sesión
            </Link>
          )}
        </div>
      )}

      {/* Login / Logout en escritorio */}
      <div className="hidden md:flex items-center space-x-4">
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
  );
}
