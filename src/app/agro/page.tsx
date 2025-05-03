"use client";

import Image from "next/image";

export default function AgroPage() {
  return (
    <main className="relative min-h-screen bg-green-950 text-white flex flex-col items-center px-4 pt-28 pb-10 overflow-hidden">
      {/* Fondo de plantas desenfocado */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          className="object-cover"
        />
      </div>
      {/* Contenedor */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="max-w-md text-justify">
          {/* Contenido principal */}
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              PARA EL <span className="text-orange-400">AGRO</span>
            </h2>
            <h3 className="text-2xl md:text-3xl mb-6">Presentamos...</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-orange-400">
              PMP FieldSense
            </h1>
            <p className="text-orange-300 mb-10">
              Innovación en el monitoreo del campo.
            </p>
          </div>
          {/* Texto descriptivo */}
          <p>
            PMP FieldSense es una solución avanzada de monitoreo agrícola
            diseñada para el agro argentino. Integra sensores de suelo y clima
            en maquinaria agrícola, recopilando datos en tiempo real sobre
            variables como humedad, temperatura y condiciones atmosféricas. Esta
            información es centralizada y analizada mediante inteligencia
            artificial, optimizando la toma de decisiones y promoviendo
            prácticas agrícolas más eficientes y sostenibles.
          </p>
        </div>

        {/* Imágenes circulares */}
        <div className="flex flex-col gap-6 items-center">
          <div className="w-40 h-40 md:w-52 md:h-52 bg-white rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
            <Image
              src="/campo-celu.png"
              alt="Celular PMP"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="w-40 h-40 md:w-52 md:h-52 bg-white rounded-full overflow-hidden border-4 border-orange-400 shadow-lg">
            <Image
              src="/campo-sensores.png"
              alt="Campo Sensores"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
