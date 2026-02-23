import React from "react";

interface MapSVGProps {
  onClick?: () => void;
  className?: string;
}

const MapSVG: React.FC<MapSVGProps> = ({ onClick, className = "" }) => {
  // 5 huellas con posiciones, escalas y rotaciones variadas
  const pawPrints = [
    { x: 40, y: 30, scale: 0.4, rotate: 15 },
    { x: 220, y: 50, scale: 0.6, rotate: -10 },
    { x: 100, y: 160, scale: 0.5, rotate: 25 },
    { x: 250, y: 170, scale: 0.7, rotate: -5 },
    { x: 180, y: 80, scale: 0.45, rotate: 30 },
  ];

  // Path de una huella (estándar)
  const pawPath = "M4.5 9.5c0 1.38-1.12 2.5-2.5 2.5S-.5 10.88-.5 9.5.62 7 2 7s2.5 1.12 2.5 2.5zm7 0c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5S7.62 7 9 7s2.5 1.12 2.5 2.5zm7 0c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5S14.62 7 16 7s2.5 1.12 2.5 2.5zm-14 7c0 1.38-1.12 2.5-2.5 2.5S0 17.88 0 16.5 1.12 14 2.5 14s2.5 1.12 2.5 2.5zm7 0c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5S8.62 14 10 14s2.5 1.12 2.5 2.5z";

  return (
    <div
      className={`relative w-full h-full cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <svg
        viewBox="0 0 300 200"
        className="w-full h-full rounded-lg"
        style={{ background: "#1f2937" }}
      >
        {/* Fondo del mapa */}
        <rect width="300" height="200" fill="#2d3748" />

        {/* Cuadrícula de calles */}
        <path d="M50 0 V200 M100 0 V200 M150 0 V200 M200 0 V200 M250 0 V200" stroke="#4a5568" strokeWidth="1" />
        <path d="M0 50 H300 M0 100 H300 M0 150 H300" stroke="#4a5568" strokeWidth="1" />

        {/* Zonas verdes (parques) */}
        <circle cx="80" cy="70" r="20" fill="#2f855a" opacity="0.6" />
        <circle cx="220" cy="130" r="25" fill="#2f855a" opacity="0.6" />

        {/* Huellas decorativas - 5 unidades con variaciones */}
        {pawPrints.map((paw, index) => (
          <g
            key={index}
            transform={`translate(${paw.x}, ${paw.y}) rotate(${paw.rotate}) scale(${paw.scale})`}
            fill="#975f0d"
            opacity="0.4"
          >
            <path d={pawPath} />
          </g>
        ))}

        {/* Marcador de ubicación */}
        <g transform="translate(150, 100)">
          <circle cx="0" cy="0" r="12" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="white" />
          <path d="M0 12 L-8 24 L0 20 L8 24 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        </g>

        {/* Efecto hover */}
        <rect
          width="300"
          height="200"
          fill="white"
          className="opacity-0 group-hover:opacity-10 transition-opacity"
        />
      </svg>

      {/* Texto flotante al hover */}
      <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
          Ampliar el mapa 🐾
        </span>
      </div>
    </div>
  );
};

export default MapSVG;