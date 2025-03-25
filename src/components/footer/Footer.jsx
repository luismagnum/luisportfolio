"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Nombre y descripción */}
        <h2 className="text-2xl font-bold text-cyan-400">Luis Enrique Díaz</h2>
        <p className="text-gray-400 text-sm mt-2">
          Desarrollador Frontend | Creando experiencias web increíbles 🚀
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/luismagnum" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:luismagnum1@gmail.com" 
            className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Derechos de autor */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Luis Enrique Díaz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
