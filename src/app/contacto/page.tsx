"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-green-900 text-white flex flex-col items-center px-4 py-10">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* Imagen animada al hacer scroll */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/cartel-agccurate.png"
            alt="Cartel AGCCURATE"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Texto y botón animados al hacer scroll */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            CONTACTE CON SU <span className="text-green-300">TIENDA</span>{" "}
            <span className="text-white font-black">MÁS CERCANA</span>
          </h2>

          <Link href="#encuentra-tiendas">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Encontrá la más próxima
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
