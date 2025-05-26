"use client";

import Logo from "@/components/Logo";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome, FaLightbulb, FaTractor } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-md",
        scrolled ? "bg-black/80 shadow-md py-2" : "bg-black py-4"
      )}
    >
      <div className="flex justify-between items-center px-4 md:px-8">
        <Logo />

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

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="cursor-pointer hover:text-green-300 transition">
              Productos y Servicios
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 w-80 bg-black/80 text-white rounded-xl shadow-xl border border-white/10 z-50 p-4 space-y-3">
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
      </div>

      {/* Menú mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start p-6 space-y-4 z-40 md:hidden shadow-lg border-t border-white/10">
          <Link
            href="/"
            className="hover:text-green-300 transition w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inicio
          </Link>

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
    </header>
  );
}
