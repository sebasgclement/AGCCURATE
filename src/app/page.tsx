import Image from "next/image";
import AcercaDeNosotros from "@/app/components/AcercaDeNosotros";
import OpinionesClientes from "@/app/components/OpinionesClientes";



export default function Home() {
  return (
    <div className="w-full">
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
            Tecnología que cultiva el {" "}
            <span className="font-bold text-green-400">futuro</span>
          </p>
        </div>
      </section>

      {/* Sección Acerca de Nosotros */}
      <section id="acerca" className="bg-white py-20">
        <AcercaDeNosotros />
      </section>

      {/* Sección Opiniones de Clientes */}
      <section id="opiniones" className="bg-gray-100 py-20">
        <OpinionesClientes />
      </section>
    </div>
  );
} 
