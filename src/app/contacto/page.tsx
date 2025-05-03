"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-green-950 text-white pt-[7rem] overflow-hidden">
      {/* Fondo de plantas desenfocado */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenedor principal 50/50 */}
      <div className="relative z-10 flex flex-col md:flex-row h-[calc(100vh-7rem)]">
        {/* Imagen grande a la izquierda */}
        <motion.div
          className="md:w-1/2 w-full h-1/2 md:h-full flex justify-center items-center p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/cartel-agccurate.png"
              alt="Cartel AGCCURATE"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Texto y botón a la derecha */}
        <motion.div
          className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center items-center md:items-start px-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-center md:text-left">
            CONTACTE CON SU <span className="text-green-300">TIENDA</span>{" "}
            <span className="text-white font-black">MÁS CERCANA</span>
          </h2>

          <Link href="#encuentra-tiendas">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
            >
              Encontrá la más próxima
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
