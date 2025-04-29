"use client";

import Image from "next/image";

export default function HogarPage() {
  return (
    <main className="min-h-screen bg-green-900 text-white flex flex-col items-center px-4 py-10">
      {/* Contenedor principal */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4">
        <div className="max-w-md text-justify">
          {/* Títulos principales */}
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              PARA EL <span className="text-green-400">HOGAR</span>
            </h2>
            <h3 className="text-2xl md:text-3xl mb-6">Presentamos...</h3>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-green-300">
              Soilscope
            </h1>
            <p className="text-green-200 mb-10">
              Monitoreo inteligente para plantas indoor.
            </p>
          </div>
          {/* Texto descriptivo */}
          <p className="mb-4">
            Soilscope es una solución inteligente diseñada para el monitoreo
            preciso de la humedad del suelo y las condiciones ambientales en
            plantas de interior. A través de sensores de alta precisión y
            conectividad en tiempo real, Soilscope te permite conocer el estado
            de tus plantas en todo momento, optimizando el riego y asegurando su
            crecimiento saludable.
          </p>
          <p>
            Con una interfaz intuitiva y herramientas avanzadas, es la opción
            ideal para quienes buscan combinar tecnología y cuidado eficiente de
            sus espacios verdes.
          </p>
        </div>

        {/* Imágenes de los "celulares" */}
        <div className="flex gap-6 justify-center">
          {/* Primer celular */}
          <div className="w-40 md:w-48 bg-gray-900 rounded-3xl p-2 shadow-2xl flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300/40">
            <Image
              src="/celu1.png"
              alt="Soilscope Monitoreo"
              width={220}
              height={440}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Segundo celular */}
          <div className="w-40 md:w-48 bg-gray-900 rounded-3xl p-2 shadow-2xl flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300/40">
            <Image
              src="/celu2.png"
              alt="Soilscope Datos"
              width={220}
              height={440}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
