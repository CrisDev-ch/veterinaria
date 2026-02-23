"use client";

import { useEffect, useRef, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import InfoBoton from "@/components/InfoBoton";
import Separador from "@/components/Separador";
import CardInfo from "@/components/CardInfo";
import Clima from "@/components/Clima";
import SegundoSeparador from "@/components/SegundoSeparador";
import { FaStethoscope, FaSyringe } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import AuthModal from "@/components/AuthModal";

// Hook personalizado para detectar cuando un elemento entra en la vista
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isInView] as const;
}

export default function Page() {
  // Creamos un ref y estado independiente para cada tarjeta
  const [refCard1, inViewCard1] = useInView({ triggerOnce: true });
  const [refCard2, inViewCard2] = useInView({ triggerOnce: true });
  const [refCard3, inViewCard3] = useInView({ triggerOnce: true });
  const [refCard4, inViewCard4] = useInView({ triggerOnce: true });

  // estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HeroBanner
        titulo="Veterinaria"
        subtitulo="Agenda tu hora online en simples pasos 🐾"
      >
        {/* InfoBoton con clase agendar-hora-btn para que el menú lo encuentre */}
        <div className="agendar-hora-btn" onClick={() => setShowModal(true)}>
          <InfoBoton />
        </div>
      </HeroBanner>

      <Separador />

      <div className="w-screen relative left-1/2 -ml-[50vw] bg-emerald-300 py-10" >
        {/* Cambiamos la clase por un id para poder navegar hacia él */}
        <div 
          id="infoServicios" 
          className="text-center text-2xl font-bold text-white mb-8"
        >
          ─── SERVICIOS ───
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 sm:px-10">
          {/* Card 1 */}
          <div
            ref={refCard1}
            className={`transition-opacity duration-1000 ${
              inViewCard1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <CardInfo
              titulo="Consultas médicas"
              descripcion="Agenda tu consulta con nuestros especialistas"
              icono={<FaStethoscope />}
              img="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def"
            />
          </div>

          {/* Card 2 */}
          <div
            ref={refCard2}
            className={`transition-opacity duration-1000 ${
              inViewCard2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <CardInfo
              titulo="Vacunas"
              descripcion="Protege a tu mascota con nuestro plan de vacunación"
              icono={<FaSyringe />}
              img="https://www.sitandplas.com/wp-content/uploads/2014/11/perro-vacunacion-sitandplas.webp"
            />
          </div>

          {/* Card 3 */}
          <div
            ref={refCard3}
            className={`transition-opacity duration-1000 ${
              inViewCard3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <CardInfo
              titulo="PetShop"
              descripcion="Encuentra los mejores productos calidad/precio"
              icono={<MdOutlinePets />}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWYcgRtxOfXcOLBYyI2jtCx1N34EatqPNAwqWxJWG-nlAyYPgHcCVmc4&s=10"
            />
          </div>

          {/* Card 4 */}
          <div
            ref={refCard4}
            className={`transition-opacity duration-1000 ${
              inViewCard4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <CardInfo
              titulo="Esterilización"
              descripcion="La esterilización protege su salud hoy y su bienestar mañana"
              icono={<FaDog />}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTeUPTMZCVrlOU9aPe5oduLm06QVYAO22iPAFha792tPkAnNJwJSjLE-Xr&s=10"
            />
          </div>
        </div>
        <div className="mt-8 mb-6 rounded-full w-full bg-emerald-500 py-4 flex justify-center items-center">
          <h2 className="text-white text-xl md:text-2xl font-semibold text-center">
            Cuidamos a quienes llenan tu vida de amor 🐾
          </h2>
        </div>
        <div className="flex justify-center">
          <SegundoSeparador />
        </div>
      </div>

      {/* Renderizamos el modal condicionalmente */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}