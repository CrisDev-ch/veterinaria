"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaw,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

interface FooterProps {
  children?: React.ReactNode;
  socialLinks?: {
    icon: React.ReactNode;
    href: string;
    label: string;
  }[];
  interestLinks?: {
    label: string;
    href: string;
  }[];
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
    hours?: string;
  };
  mapEmbedUrl?: string;
  mapTitle?: string;
  customSocialSection?: React.ReactNode;
  companyName?: string;
  logo?: React.ReactNode;
}

const defaultSocialLinks = [
  { icon: <FaFacebookF />, href: "", label: "Facebook" },
  { icon: <FaTwitter />, href: "", label: "Twitter" },
  { icon: <FaInstagram />, href: "", label: "Instagram" },
  { icon: <FaLinkedinIn />, href: "", label: "LinkedIn" },
];

const defaultInterestLinks = [
  { label: "Noticias", href: "/noticiasvetchile" },
  { label: "Servicios", href: "/services" },
  { label: "Equipo veterinario", href: "/team" },
  { label: "Términos y condiciones", href: "/terms" },
  { label: "Política de privacidad", href: "/privacy" },
  { label: "Contacto", href: "/contact" },
];

const defaultContactInfo = {
  phone: "+56 9 1234 5678",
  email: "contacto@vetchile.cl",
  address: "Av. Principal 123, Santiago",
  hours: "Lun-Vie: 9:00 - 19:00, Sáb: 9:00 - 14:00",
};

const defaultMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212752.561931387!2d-70.70751145!3d-33.4377968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1699999999999!5m2!1ses!2scl";

const Footer: React.FC<FooterProps> = ({
  children,
  socialLinks = defaultSocialLinks,
  interestLinks = defaultInterestLinks,
  contactInfo = defaultContactInfo,
  mapEmbedUrl = defaultMapEmbedUrl,
  mapTitle = "Ubicación en mapa",
  customSocialSection,
  companyName = "Veterinaria",
  logo,
}) => {
  // Paleta de colores verdes
  const colors = {
    primary: "#10b981", // verde esmeralda
    secondary: "#059669", // verde más oscuro
    light: "#d1fae5", // verde muy claro
    dark: "#064e3b", // verde oscuro
    gradient: "from-emerald-600 to-teal-600",
  };

  const pawPrints = [
    { top: "5%", left: "2%", size: 32, rotate: -15, opacity: 0.1 },
    { top: "15%", right: "5%", size: 48, rotate: 25, opacity: 0.08 },
    { bottom: "10%", left: "10%", size: 40, rotate: 45, opacity: 0.1 },
    { bottom: "20%", right: "8%", size: 56, rotate: -30, opacity: 0.07 },
    { top: "40%", left: "20%", size: 28, rotate: 70, opacity: 0.12 },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white">
      {/* Fondo con huellas */}
      <div className="absolute inset-0 pointer-events-none">
        {pawPrints.map((paw, index) => (
          <FaPaw
            key={index}
            className="absolute text-white"
            style={{
              top: paw.top,
              left: paw.left,
              right: paw.right,
              bottom: paw.bottom,
              transform: `rotate(${paw.rotate}deg)`,
              fontSize: paw.size,
              opacity: paw.opacity,
            }}
          />
        ))}
      </div>

      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Logo y título */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            {logo || <FaPaw className="text-3xl text-emerald-300" />}
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              {companyName}
            </span>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Redes sociales */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="bg-emerald-400/20 p-2 rounded-lg mr-2">
                🐾
              </span>
              Redes Sociales
            </h3>
            {customSocialSection ? (
              <div className="flex justify-center">{customSocialSection}</div>
            ) : (
              <div className="flex flex-wrap gap-3 justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="bg-white/10 hover:bg-emerald-400 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <span className="text-white text-lg">{link.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Enlaces de interés */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="bg-emerald-400/20 p-2 rounded-lg mr-2">
                🔗
              </span>
              Enlaces de Interés
            </h3>
            <ul className="space-y-2">
              {interestLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-emerald-300 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Información de Contacto */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="bg-emerald-400/20 p-2 rounded-lg mr-2">
                📞
              </span>
              Contacto
            </h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start space-x-2">
                <FaPhone className="mt-1 flex-shrink-0 text-emerald-300" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaEnvelope className="mt-1 flex-shrink-0 text-emerald-300" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-emerald-300" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaClock className="mt-1 flex-shrink-0 text-emerald-300" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Ubicación */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="bg-emerald-400/20 p-2 rounded-lg mr-2">
                📍
              </span>
              Ubicación
            </h3>
            <div className="rounded-xl overflow-hidden border-2 border-white/20 h-40">
              <iframe
                title={mapTitle}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Children content */}
        {children && (
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {children}
          </div>
        )}

        {/* Newsletter section (opcional) */}
        <div className="mt-10 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2">
              ¡Suscríbete a nuestro newsletter!
            </h4>
            <p className="text-white/70 mb-4">
              Recibe las últimas noticias y consejos para el cuidado de tu mascota
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 text-white placeholder-white/50"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-white rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {companyName}. Todos los derechos reservados. 
            <span className="inline-block mx-2">🐾</span>
            Diseñado con amor para tus mascotas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;