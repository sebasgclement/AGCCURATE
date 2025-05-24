export default function AcercaDeNosotros() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">ACERCA DE NOSOTROS</h2>
      <p className="text-lg text-gray-700 mb-12">
        En AGCCURATE, impulsamos la agricultura de precisión con tecnología avanzada para optimizar la producción y la sostenibilidad del campo.
        Como equipo, nuestro compromiso está en la implementación de tecnologías verdes para hacer del agro un entorno más eficiente y responsable.
        Haciendo énfasis en la innovación y rentabilidad, llevaremos tu producción al siguiente nivel.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-black text-white p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-green-500 p-3 rounded-full">
              💬
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">LA ATENCIÓN</h3>
          <p>
            Contamos con un equipo especializado dispuesto a responder cada inquietud y resolver problemas de manera personalizada.
            Nuestro objetivo es brindar un servicio cercano y confiable, manteniendo el compromiso de convertirnos en la opción preferida para el productor agropecuario.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-green-500 p-3 rounded-full">
              💼
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">SERVICIOS</h3>
          <p>
            Nos destacamos por ofrecer servicios técnicos de campo full time, con profesionales disponibles las 24 horas del día, los 7 días de la semana.
            Nuestro equipo combina experiencia y tecnología para asegurar el máximo rendimiento de las soluciones aplicadas.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <span className="bg-green-500 p-3 rounded-full">
              💡
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">TECNOLOGÍAS VERDES</h3>
          <p>
            Impulsamos la innovación en agricultura, abarcando desde sistemas de monitoreo hasta herramientas de análisis,
            incorporando tecnologías verdes que buscan optimizar recursos, reducir impactos ambientales y mejorar la productividad del agro de manera responsable.
          </p>
        </div>
      </div>
    </div>
  );
}
