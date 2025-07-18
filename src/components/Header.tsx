"use client";

import Logo from "@/components/Logo";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome, FaTractor } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiUserLight } from "react-icons/pi";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
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

  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  const handleSignOut = async () => {
    const confirmed = confirm("¿Estás seguro que querés cerrar sesión?");
    if (confirmed) await signOut({ callbackUrl: "/" });
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

        {/* Botón Hamburguesa */}
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

        {/* Menú Escritorio */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8 uppercase text-sm font-normal text-[#00FF99] pr-6">
            <Link
              href="/"
              className="underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
            >
              Inicio
            </Link>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition cursor-pointer"
            >
              Productos y Servicios
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
            <Link
              href="/contacto"
              className="underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
            >
              Contacto
            </Link>
            {session?.user && (
              <Link
                href="/perfil"
                className="underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
              >
                Mi perfil
              </Link>
            )}
          </nav>

          <div className="flex items-center">
            <div className="h-6 border-l border-[#00FF99] mx-4"></div>
            {session?.user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm px-4 py-1.5 rounded transition uppercase"
              >
                <FiLogOut className="text-lg" />
                Cerrar sesión
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 border border-[#00FF99] text-[#00FF99] hover:bg-white/10 hover:drop-shadow-[0_0_6px_#00FF99] text-sm px-4 py-1.5 rounded transition uppercase"
              >
                <PiUserLight className="text-lg" />
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 text-[#00FF99] px-6 py-6 text-sm font-normal uppercase z-40">
          <Link
            href="/"
            onClick={handleCloseMobileMenu}
            className="block underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
          >
            Inicio
          </Link>
          <div className="space-y-2">
            <div className="underline">Productos y Servicios</div>
            <Link
              href="/hogar"
              onClick={handleCloseMobileMenu}
              className="block ml-4 text-white hover:text-[#00FF99] transition"
            >
              • Para el Hogar
            </Link>
            <Link
              href="/agro"
              onClick={handleCloseMobileMenu}
              className="block ml-4 text-white hover:text-[#00FF99] transition"
            >
              • Para el Agro
            </Link>
          </div>
          <Link
            href="/contacto"
            onClick={handleCloseMobileMenu}
            className="block underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
          >
            Contacto
          </Link>
          {session?.user && (
            <Link
              href="/perfil"
              onClick={handleCloseMobileMenu}
              className="block underline hover:text-white hover:drop-shadow-[0_0_6px_#00FF99] transition"
            >
              Mi perfil
            </Link>
          )}
          {session?.user ? (
            <button
              onClick={() => {
                handleCloseMobileMenu();
                handleSignOut();
              }}
              className="mt-4 flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-sm px-4 py-1.5 rounded transition uppercase"
            >
              <FiLogOut className="text-lg" />
              Cerrar sesión
            </button>
          ) : (
            <Link
              href="/login"
              onClick={handleCloseMobileMenu}
              className="flex items-center gap-2 border border-[#00FF99] text-[#00FF99] hover:bg-white/10 hover:drop-shadow-[0_0_6px_#00FF99] text-sm px-4 py-1.5 rounded transition uppercase"
            >
              <PiUserLight className="text-lg" />
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
