"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HogarPage() {
  return (
    <div className="w-full">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de plantas"
          fill
          className="object-cover"
        />
      </div>

      <section id="hogar" className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 min-h-screen py-20 w-full bg-green-950 bg-opacity-90">
        <div className="max-w-md text-justify px-4">
          <div className="text-center max-w-4xl">
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

        <div className="flex gap-6 justify-center px-4">
          <div className="w-40 md:w-48 bg-gray-900 rounded-3xl p-2 shadow-2xl flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-green-300/40">
            <Image
              src="/celu1.png"
              alt="Soilscope Monitoreo"
              width={220}
              height={440}
              className="rounded-2xl object-cover"
            />
          </div>

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

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none">
          <a href="#acerca" aria-label="Scroll hacia abajo" className="flex flex-col items-center animate-bounce text-white pointer-events-auto">
            <p className="text-sm opacity-80 mb-1">Deslizá para explorar</p>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      <section id="separador" className="relative z-0 h-48 w-full" />

      <section id="como-trabaja" className="relative flex flex-col items-center justify-center w-full min-h-screen py-20 bg-green-950 bg-opacity-90">
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            ¿Cómo trabaja <span className="text-green-400">Soilscope</span>?
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-12">
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
                  <div className="absolute -left-4 top-4 w-16 h-16 bg-lime-400 text-black font-bold text-lg rounded-md flex items-center justify-center shadow-md">
                    {item.numero}
                  </div>
                  <h3 className="font-bold text-white">{item.titulo}</h3>
                  <p className="text-sm text-white">{item.descripcion}</p>
                </div>
              ))}
            </div>

            <div className="max-w-md text-justify flex flex-col justify-between flex-1">
              <p className="mb-6 text-lg leading-relaxed">
                Imaginá tener en la palma de tu mano una app que te ayuda a conocer
                al instante lo que necesitan tus plantas para crecer saludables y
                radiantes. Con Soilscope, la tecnología se convierte en la aliada
                perfecta para transformar tu espacio en un {" "}
                <span className="text-green-400 font-semibold">oasis verde.</span>
              </p>
              <a
                href="https://wa.me/5493492325433?text=Hola!%20Estoy%20interesado%20en%20Soilscope%20y%20me%20gustaría%20recibir%20más%20información."
                className="mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all w-fit"
              >
                <FaWhatsapp className="text-2xl" />
                Contactanos para más detalles
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
