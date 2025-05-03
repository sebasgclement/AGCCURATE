"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ComoTrabajaPage() {
  return (
    <main className="min-h-screen bg-green-950 text-white px-4 py-16 relative overflow-hidden">
      {/* Fondo de plantas desenfocado */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          objectFit="cover"
        />
      </div>

      <div className="relative h-48 w-full flex items-center justify-center mb-16">
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center">
          ¿Cómo trabaja <span className="text-green-400">Soilscope</span>?
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
        {/* Lista de características */}
        <div className="flex flex-col gap-6 flex-1">
          {[
            {
              numero: "01",
              titulo: "Monitoreo Inteligente",
              descripcion:
                "Consultá en tiempo real la humedad, temperatura y estado de tus plantas.",
            },
            {
              numero: "02",
              titulo: "Análisis con IA",
              descripcion:
                "Recibí recomendaciones basadas en datos históricos para un cuidado óptimo.",
            },
            {
              numero: "03",
              titulo: "Interfaz Intuitiva",
              descripcion:
                "Navegá fácilmente y gestioná tus plantas sin complicaciones, a través de nuestra app.",
            },
          ].map((item) => (
            <div
              key={item.numero}
              className="relative bg-green-800 bg-opacity-70 rounded-xl pl-20 pr-6 py-4 shadow-lg"
            >
              {/* Número flotante a la izquierda */}
              <div className="absolute -left-4 top-4 w-16 h-16 bg-lime-400 text-black font-bold text-lg rounded-md flex items-center justify-center shadow-md">
                {item.numero}
              </div>
              <h3 className="font-bold text-white">{item.titulo}</h3>
              <p className="text-sm text-white">{item.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Descripción lateral */}
        <div className="max-w-md text-justify flex flex-col justify-between flex-1">
          <p className="mb-6 text-lg leading-relaxed">
            Imaginá tener en la palma de tu mano una app que te ayuda a conocer
            al instante lo que necesitan tus plantas para crecer saludables y
            radiantes. Con Soilscope, la tecnología se convierte en la aliada
            perfecta para transformar tu espacio en un{" "}
            <span className="text-green-400 font-semibold">oasis verde.</span>
          </p>

          {/* Botón de contacto */}
          <a
            href="https://wa.me/5493492325433?text=Hola!%20Estoy%20interesado%20en%20Soilscope%20y%20me%20gustaría%20recibir%20más%20información."
            className="mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all w-fit"
          >
            <FaWhatsapp className="text-2xl" />
            Contactanos para más detalles
          </a>
        </div>
      </div>
    </main>
  );
}
