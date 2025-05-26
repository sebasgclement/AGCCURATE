"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full">
      {/* Imagen a la izquierda */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <Image
          src="/cartel-agccurate.png"
          alt="Cartel AGCCURATE"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido a la derecha */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-start px-8 py-12 md:py-0">
        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-snug mb-6">
          CONTACTE CON SU <span className="text-green-700">TIENDA</span>{" "}
          <span className="font-black">MÁS CERCANA</span>
        </h2>
        <Link
          href="https://www.google.com/maps/search/tienda+AGCCURATE/"
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
