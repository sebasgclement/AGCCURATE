"use client";

import Image from "next/image";

export default function AgroPage() {
  return (
    <main className="relative min-h-screen bg-green-950 text-white overflow-hidden flex items-center justify-center px-4">
      {/* Fondo de plantas desenfocado */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenedor principal centrado */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full min-h-[80vh]">
        <div className="flex-1 text-justify">
          {/* Contenido principal */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              PARA EL <span className="text-orange-400">AGRO</span>
            </h2>
            <h3 className="text-xl md:text-2xl mb-4">Presentamos...</h3>
            <div className="flex justify-center">
              <Image
                src="/logoPMF.png"
                alt="Logo PMP FieldSense"
                width={300}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Texto descriptivo */}
          <p className="text-sm md:text-base leading-relaxed">
            PMP FieldSense es una solución avanzada de monitoreo agrícola
            diseñada para el agro argentino. Integra sensores de suelo y clima
            en maquinaria agrícola, recopilando datos en tiempo real sobre
            variables como humedad, temperatura y condiciones atmosféricas. Esta
            información es centralizada y analizada mediante inteligencia
            artificial, optimizando la toma de decisiones y promoviendo
            prácticas agrícolas más eficientes y sostenibles.
          </p>
        </div>

        {/* Imágenes lado a lado con desplazamiento vertical */}
        <div className="flex flex-row gap-4 items-start flex-shrink-0">
          <div className="w-40 h-60 md:w-48 md:h-72 bg-white rounded-[10rem] overflow-hidden border-4 border-orange-400 shadow-lg">
            <Image
              src="/campo-celu.png"
              alt="Celular PMP"
              width={250}
              height={360}
              className="object-cover"
            />
          </div>
          <div className="w-40 h-60 md:w-48 md:h-72 bg-white rounded-[10rem] overflow-hidden border-4 border-orange-400 shadow-lg mt-10">
            <Image
              src="/campo-sensores.png"
              alt="Campo Sensores"
              width={250}
              height={360}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
