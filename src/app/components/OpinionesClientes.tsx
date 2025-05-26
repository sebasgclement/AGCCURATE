import Image from "next/image";
import { FaTractor, FaStore, FaLeaf, FaHistory, FaUserTie, FaHandshake, FaGavel, FaNewspaper, FaChild, FaIndustry } from "react-icons/fa";

export default function OpinionesClientes() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Nuestros clientes opinan…</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 shadow-md rounded-lg flex flex-col justify-between">
            <p className="text-gray-600 italic mb-6 text-justify">
              «En soja podemos arribar a la conclusión que a través de la tecnología y las herramientas que está brindando Aran Tecnologías se llegó a un saldo positivo a favor de agricultura de precisión
              comparándolo con un planteo común y racional en la zona de entre 40 y 70 dólares por hectárea».
            </p>
            <div className="flex items-center justify-center flex-col">
              <div className="w-20 h-20 mb-2 rounded-full overflow-hidden">
                <Image
                  src="/clientes/danel-leiva.png"
                  alt="Danel Leiva"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold text-gray-800">Tec. Agr. Danel Leiva</p>
              <span className="text-sm text-gray-500">GEOAGRO</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 shadow-md rounded-lg flex flex-col justify-between">
            <p className="text-gray-600 italic mb-6 text-justify">
              «Hicimos pulverizaciones de todo el campo y luego hicimos selectiva donde ahorramos el 60% de producto»
            </p>
            <div className="flex items-center justify-center flex-col">
              <div className="w-20 h-20 mb-2 rounded-full overflow-hidden">
                <Image
                  src="/clientes/julio-fernandez.png"
                  alt="Julio Fernández"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold text-gray-800">Julio Fernández</p>
              <span className="text-sm text-gray-500">PRODUCTOR DE LA PELADA, SANTA FE</span>
            </div>
          </div>
        </div>

        {/* Sección inferior como en el prototipo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left text-sm text-gray-600 px-4 bg-gray-200 py-10 rounded-lg">
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Productos y Soporte</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaTractor className="text-green-700" /> Equipos</li>
              <li className="flex items-center gap-2"><FaStore className="text-green-700" /> Dónde Comprar</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Información de John Deere</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaLeaf className="text-green-700" /> Sobre Nosotros</li>
              <li className="flex items-center gap-2"><FaIndustry className="text-green-700" /> Sustentabilidad</li>
              <li className="flex items-center gap-2"><FaHistory className="text-green-700" /> Historia</li>
              <li className="flex items-center gap-2"><FaUserTie className="text-green-700" /> Trabajar en John Deere</li>
              <li className="flex items-center gap-2"><FaHandshake className="text-green-700" /> Relación con los Inversores</li>
              <li className="flex items-center gap-2"><FaGavel className="text-green-700" /> Política Empresarial (Inglés)</li>
              <li className="flex items-center gap-2"><FaNewspaper className="text-green-700" /> Noticias</li>
              <li className="flex items-center gap-2"><FaGavel className="text-green-700" /> Ética y Cumplimiento</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Conectado con John Deere</h3>
            <ul className="space-y-1">
              <li className="flex items-center gap-2"><FaStore className="text-green-700" /> Expoagro</li>
              <li className="flex items-center gap-2"><FaChild className="text-green-700" /> Rincón Infantil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
