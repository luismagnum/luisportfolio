"use client";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Tecnologias() {
  const tecnologias = [
    { id: 1, nombre: "HTML", icono: <FaHtml5 className="text-orange-500" /> },
    { id: 2, nombre: "CSS", icono: <FaCss3Alt className="text-blue-500" /> },
    { id: 3, nombre: "JavaScript", icono: <FaJs className="text-yellow-400" /> },
    { id: 4, nombre: "React", icono: <FaReact className="text-cyan-400" /> },
    { id: 5, nombre: "Next.js", icono: <SiNextdotjs className="text-white" /> },
    { id: 6, nombre: "TailwindCSS", icono: <SiTailwindcss className="text-cyan-500" /> },
    { id: 7, nombre: "Bootstrap", icono: <FaBootstrap className="text-purple-600" /> },
    { id: 8, nombre: "Git", icono: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section className="bg-black py-16 text-white text-center mx-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Tecnologías que manejo</h2>
      <div data-aos="zoom-in-up" className="flex flex-wrap justify-center gap-6">
        {tecnologias.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center p-4 bg-[#1a1a1a] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="text-5xl">{tech.icono}</div>
            <p className="mt-2 text-lg">{tech.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
