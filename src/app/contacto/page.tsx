"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      {/* Imagen a la izquierda */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-full">
        <Image
          src="/cartel-agccurate.png"
          alt="Cartel AGCCURATE"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center md:items-start px-6 py-10 gap-8 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold text-black leading-snug">
          CONTACTE CON SU <span className="text-green-700">TIENDA</span>{" "}
          <span className="font-black">MÁS CERCANA</span>
        </h2>
        <Link
          href="https://www.google.com/maps/search/?api=1&query=AGCCURATE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
          >
            Encontrá la más próxima
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
