import Image from "next/image";

export default function OpinionesClientes() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Nuestros clientes opinan…</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-gray-600 italic mb-6">
            «En soja podemos arribar a la conclusión que a través de la tecnología y las herramientas que está brindando Aran Tecnologías se llegó a un saldo positivo a favor de agricultura de precisión
            comparándolo con un planteo común y racional en la zona de entre 40 y 70 dólares por hectárea».
          </p>
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/clientes/danel-leiva.png"
              alt="Danel Leiva"
              width={60}
              height={60}
              className="rounded-full mb-2"
            />
            <p className="font-semibold">Tec. Agr. Danel Leiva</p>
            <span className="text-sm text-gray-500">GEOAGRO</span>
          </div>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-gray-600 italic mb-6">
            «Hicimos pulverizaciones de todo el campo y luego hicimos selectiva donde ahorramos el 60% de producto»
          </p>
          <div className="flex items-center justify-center flex-col">
            <Image
              src="/clientes/julio-fernandez.png"
              alt="Julio Fernández"
              width={60}
              height={60}
              className="rounded-full mb-2"
            />
            <p className="font-semibold">Julio Fernández</p>
            <span className="text-sm text-gray-500">PRODUCTOR DE LA PELADA, SANTA FE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
