"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="w-full bg-[#1a1a1a] fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 md:px-32 py-4">
        <div className="flex items-center">
          <Image src="/logos.png" alt="Logo" width={40} height={40} />
          <h1 className="text-white text-xl md:text-3xl ml-4 font-bold">
            <span className="text-[#007BFF]">Luis</span> E. Diaz
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-[#007BFF] text-lg font-bold">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="#tecnologias" className="hover:text-cyan-400 transition">Tecnologias</Link>
          <Link href="#proyectos" className="hover:text-cyan-400 transition">Proyectos</Link>
          <Link href="#contacto" className="hover:text-cyan-400 transition">Contacto</Link>
        </nav>

        <div className="md:hidden text-white">
          {menu ? (
            <IoClose size={30} onClick={handleChange} className="cursor-pointer" />
          ) : (
            <TiThMenu size={30} onClick={handleChange} className="cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed bg-[#01020d] text-[#007BFF] top-0 left-0 w-full h-[50vh] flex flex-col items-center justify-center gap-6 text-2xl transition-transform duration-300 z-50`}
      >
        <button onClick={closeMenu} className="absolute top-4 right-6 text-white text-3xl">
          <IoClose />
        </button>

        <Link href="/" onClick={closeMenu} className="hover:text-blue-500 transition">Home</Link>
        <Link href="#tecnologias" onClick={closeMenu} className="hover:text-cyan-400 transition">Tecnologias</Link>
        <Link href="#proyectos" onClick={closeMenu} className="hover:text-cyan-400 transition">Proyectos</Link>
        <Link href="#contacto" onClick={closeMenu} className="hover:text-cyan-400 transition">Contacto</Link>
      </div>
    </div>
  );
};

export default Navbar;
