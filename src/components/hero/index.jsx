"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#0d0d0d] text-[#007BFF]">
      <div data-aos="fade-left" className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Luis Enrique Díaz</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          Desarrollador Web Frontend
        </h2>
        <p className="text-[#00E7FF] mt-4 text-lg max-w-xl">
          Construyo interfaces modernas, rápidas y accesibles con las mejores tecnologías del ecosistema web. 
          Apasionado por el diseño y la experiencia de usuario.
        </p>
        <div className="mt-6">
          <a
            href="https://wa.me/54298417477?text=Hola quiero contactarte" target="_blank"
             className="bg-blue-500 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div className="relative w-48 h-48 mt-2 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-6 md:mb-0">
        <Image
          src="/foto.png"
          alt="Luis Enrique Díaz"
          layout="fill"
          className="rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
