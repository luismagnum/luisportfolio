"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="bg-black py-16 text-white text-center mx-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contáctame</h2>
      <p className="text-lg text-gray-300 mb-8">Puedes comunicarte conmigo a través de los siguientes medios:</p>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:luismagnum1@gmail.com" 
          className="flex items-center gap-3 bg-blue-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
        >
          <FaEnvelope className="text-2xl" /> Enviar Correo
        </a>

        <a
          href="https://www.linkedin.com/in/luis-enrique-diaz-brice%C3%B1o-b4662124b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-700 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>

        <a
          href="https://github.com/luismagnum" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-2xl" /> GitHub
        </a>

        <a
          href= "https://drive.google.com/file/d/1-Xh_ptgpgLE44vi5v2OdRHfgLmoXPA8h/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
        >
          <FaFilePdf className="text-2xl" /> Ver CV (Español)
        </a>

        <a
          href="https://drive.google.com/file/d/1T0-zZuLvm8BUZdQ22tpTzF02zKRaFfvK/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
        >
          <FaFilePdf className="text-2xl" /> Ver CV (Portugués)
        </a>
      </div>
    </section>
  );
}
