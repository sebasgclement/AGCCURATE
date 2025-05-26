import { FaHeadset, FaTools, FaLeaf } from "react-icons/fa";

export default function AcercaDeNosotros() {
  return (
    <section className="w-full bg-white min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">ACERCA DE NOSOTROS</h2>
        <p className="text-lg text-gray-700 mb-20">
          En AGCCURATE, impulsamos la agricultura de precisión con tecnología avanzada para optimizar la producción y la sostenibilidad del campo.
          Como equipo, nuestro compromiso está en la implementación de tecnologías verdes para hacer del agro un entorno más eficiente y responsable.
          Haciendo énfasis en la innovación y rentabilidad, llevaremos tu producción al siguiente nivel.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Tarjeta 1 */}
          <div className="relative bg-black text-white p-6 pt-16 rounded-lg shadow-md">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <FaHeadset className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LA ATENCIÓN</h3>
            <p>
              Contamos con un equipo especializado dispuesto a responder cada inquietud y resolver problemas de manera personalizada.
              Nuestro objetivo es brindar un servicio cercano y confiable, manteniendo el compromiso de convertirnos en la opción preferida para el productor agropecuario.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="relative bg-black text-white p-6 pt-16 rounded-lg shadow-md">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <FaTools className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SERVICIOS</h3>
            <p>
              Nos destacamos por ofrecer servicios técnicos de campo full time, con profesionales disponibles las 24 horas del día, los 7 días de la semana.
              Nuestro equipo combina experiencia y tecnología para asegurar el máximo rendimiento de las soluciones aplicadas.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="relative bg-black text-white p-6 pt-16 rounded-lg shadow-md">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <FaLeaf className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">TECNOLOGÍAS VERDES</h3>
            <p>
              Impulsamos la innovación en agricultura, abarcando desde sistemas de monitoreo hasta herramientas de análisis,
              incorporando tecnologías verdes que buscan optimizar recursos, reducir impactos ambientales y mejorar la productividad del agro de manera responsable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}