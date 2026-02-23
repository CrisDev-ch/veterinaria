"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

export default function Separador() {
  return (
    <div className="relative w-screen left-1/2 transform -translate-x-1/2 bg-green-200 text-white font-bold z-50 flex items-center justify-center py-4 overflow-hidden ">
      {/* 👆 w-screen + left-1/2 + -translate-x-1/2 lo hace ocupar todo el ancho de la pantalla */}
      
      {/* Patitas izquierda - ajustadas para no desbordar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-marquee whitespace-nowrap text-xl md:text-2xl opacity-30 pl-4">
        🐾 🐾 🐾 🐾 🐾 🐾
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 px-6 max-w-7xl mx-auto">
        <span className="font-bold text-lg md:text-xl text-black">
          ¿Tienes dudas o consulta?
        </span>

        <div className="flex items-center gap-4 text-emerald-0">
          <a
            href="tel:+56933465843"
            className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition"
          >
            <BsTelephone /> 933465843
          </a>

          <a
            href="https://wa.me/56933465843"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Patitas derecha - ajustadas para no desbordar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-marquee whitespace-nowrap text-xl md:text-2xl opacity-30 pr-4">
        🐾 🐾 🐾 🐾 🐾 🐾
      </div>
    </div>
  );
}