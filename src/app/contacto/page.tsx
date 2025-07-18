"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// Mapa cargado dinámicamente (sin SSR)
const MapFrame = dynamic(() => import("../../components/MapFrame"), {
  ssr: false,
});

export default function ContactPage() {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const toggleMapa = () => setMostrarMapa((prev) => !prev);

  return (
    <main className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Imagen superior solo para mobile */}
      <div className="relative w-full h-[200px] md:hidden">
        <Image
          src="/cartel-agccurate.png"
          alt="Cartel AGCCURATE"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Imagen fija izquierda solo para escritorio */}
      <div className="relative w-1/2 h-screen hidden md:block">
        <Image
          src="/cartel-agccurate.png"
          alt="Cartel AGCCURATE"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Contenido derecho scrollable */}
      <div className="w-full md:w-1/2 bg-white px-6 py-16 md:py-20 overflow-y-auto max-h-screen">
        <div className="max-w-2xl mx-auto flex flex-col items-center md:items-start gap-6 text-center md:text-left pb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-snug">
            CONTACTE CON SU <span className="text-green-700">TIENDA</span>{" "}
            <span className="font-black">MÁS CERCANA</span>
          </h2>

          <motion.button
            onClick={toggleMapa}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
          >
            {mostrarMapa ? (
              <>
                Ocultar mapa <ArrowLeft className="w-5 h-5" />
              </>
            ) : (
              <>
                Encontrá la más próxima <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {mostrarMapa && (
            <div className="w-full h-[400px] md:h-[500px]">
              <MapFrame />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
