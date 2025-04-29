"use client";

import Image from "next/image";

export default function ComoTrabajaPage() {
  return (
    <main className="min-h-screen bg-green-950 text-white flex flex-col items-center px-4 py-10 relative overflow-hidden">
      {/* Fondo de plantas desenfocado */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          objectFit="cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          ¿Cómo trabaja <span className="text-green-400">Soilscope</span>?
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Lista de características */}
          <div className="flex flex-col gap-6">
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
                className="flex items-start gap-4 bg-green-800 bg-opacity-70 rounded-xl p-4 shadow-lg"
              >
                <div className="bg-green-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center bg-opacity-80">
                  {item.numero}
                </div>
                <div>
                  <h3 className="font-bold">{item.titulo}</h3>
                  <p className="text-sm">{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Descripción lateral */}
          <div className="max-w-md text-justify flex flex-col justify-between">
            <p className="mb-6 text-lg leading-relaxed">
              Imaginá tener en la palma de tu mano una app que te ayuda a
              conocer al instante lo que necesitan tus plantas para crecer
              saludables y radiantes. Con Soilscope, la tecnología se convierte
              en la aliada perfecta para transformar tu espacio en un{" "}
              <span className="text-green-400 font-semibold">oasis verde.</span>
            </p>
            {/* Botón de contacto */}
            <a
              href="#"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              Contactanos para más detalles
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
