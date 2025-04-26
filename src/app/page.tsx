import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/fondo-home.png" // <-- nombre de la nueva imagen de fondo
        alt="Imagen de cultivo"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />

      {/* Capa oscura de fondo para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenido centrado */}
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
    </div>
  );
}
