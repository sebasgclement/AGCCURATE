import AcercaDeNosotros from "@/app/components/AcercaDeNosotros";
import OpinionesClientes from "@/app/components/OpinionesClientes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fondo de plantas desenfocado para secciones inferiores */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/fondo-plantas.png"
          alt="Fondo de cultivo"
          fill
          className="object-cover"
        />
      </div>

      {/* Sección principal con imagen de fondo */}
      <section className="relative min-h-screen w-full bg-black overflow-hidden">
        <Image
          src="/fondo-home.png"
          alt="Imagen de cultivo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            AGCCU
            <span className="text-green-600">R</span>
            ATE
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-light text-white">
            Tecnología que cultiva el{" "}
            <span className="font-bold text-green-400">futuro</span>
          </p>
        </div>

        {/* Indicador de scroll con texto */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none">
          <a
            href="#acerca"
            aria-label="Scroll hacia abajo"
            className="flex flex-col items-center animate-bounce text-white pointer-events-auto"
          >
            <p className="text-sm opacity-80 mb-1">Deslizá para explorar</p>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Sección Acerca de Nosotros */}
      <section id="acerca" className="relative z-10 bg-white py-20">
        <AcercaDeNosotros />
      </section>

      {/* Pausa visual */}
      <section id="pausa" className="relative z-0 h-98 w-full" />

      {/* Sección Opiniones de Clientes */}
      <section
        id="opiniones"
        className="relative z-10 bg-white bg-opacity-90 py-20"
      >
        <OpinionesClientes />
      </section>
    </div>
  );
}
