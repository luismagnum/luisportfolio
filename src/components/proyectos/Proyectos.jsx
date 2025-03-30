"use client";

import Image from "next/image";

const proyectos = [
  {
    id: 1,
    nombre: "Proyecto 1",
    imagen: "/psico.png", 
    descripcion: "Aplicación web desarrollada con Nextjs y TailwindCSS.",
    tecnologias: ["Nextjs", "TailwindCSS"],
    enlace: "https://www.zullydiaz.com",
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    imagen: "/cursos.png",
    descripcion: "Sitio web estático construido con Next.js y Tailwindcss.",
    tecnologias: ["Next.js", "Tailwindcss"],
    enlace: "https://cursos-nine-lac.vercel.app/",
  },
  {
    id: 3,
    nombre: "Proyecto 3",
    imagen: "/frank.png",
    descripcion: "Landing page construido con Next.js y Tailwindcss.",
    tecnologias: ["Next.js", "Tailwindcss"],
    enlace: "https://frankservice.vercel.app/",
  },
  {
    id: 4,
    nombre: "Proyecto 4",
    imagen: "/sabor.png",
    descripcion: "E-commerce con Reactjs y Tailwindcss.",
    tecnologias: ["Reactjs", "Tailwindcss"],
    enlace: "https://www.saboresdevenezuela.online/",
  },
  {
    id: 5,
    nombre: "Proyecto 5",
    imagen: "/gemi.png",
    descripcion: "Pagina Web clon de Geminis.",
    tecnologias: ["Reactjs", "Api"],
    enlace: "https://luismagnum.github.io/gemini/",
  },
  {
    id: 6,
    nombre: "Proyecto 6",
    imagen: "/deliver.png",
    descripcion: "Landing Page Astro y TailwindCSS.",
    tecnologias: ["Astro", "TailwindCSS"],
    enlace: "https://spontaneous-sunshine-99ff47.netlify.app/"
  },
];

export default function Proyectos() {
  return (
    <section className="bg-black py-16 text-white text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Mis ultimos Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={proyecto.imagen}
                alt={proyecto.nombre}
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-400">{proyecto.nombre}</h3>
              <p className="mt-2 text-gray-300">{proyecto.descripcion}</p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {proyecto.tecnologias.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500 text-black px-3 py-1 text-sm rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-110"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
