// /app/noticiasvetchile/components.tsx
"use client";

import React, { useEffect, useState, useRef, memo } from "react";
import { Bloque, Publicacion, EstilosBloque, ConfiguracionBloque } from "@/app/types/noticias";

// ==========================================
// COMPONENTE: RENDERIZADOR DE BLOQUES PÚBLICO (OPTIMIZADO)
// ==========================================

interface BloqueRendererProps {
  bloque: Bloque;
}

export const BloqueRenderer: React.FC<BloqueRendererProps> = memo(({ bloque }) => {
  const { tipo, contenido, estilos, configuracion } = bloque;
  const [isVisible, setIsVisible] = useState(false);
  const [contadorValor, setContadorValor] = useState(0);
  const [slideActual, setSlideActual] = useState(0);
  const [tabActiva, setTabActiva] = useState(0);
  const [accordionAbierto, setAccordionAbierto] = useState<number[]>([]);
  const [faqAbierto, setFaqAbierto] = useState<number | null>(null);
  const elementoRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (elementoRef.current) {
      observer.observe(elementoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animación de contador
  useEffect(() => {
    if (tipo !== "contador" || !isVisible) return;

    const valorFinal = (contenido.valor as number) || 0;
    const duracion = configuracion.duracion || 2000;
    const pasos = 60;
    const incremento = valorFinal / pasos;
    let actual = 0;

    const timer = setInterval(() => {
      actual += incremento;
      if (actual >= valorFinal) {
        setContadorValor(valorFinal);
        clearInterval(timer);
      } else {
        setContadorValor(Math.floor(actual));
      }
    }, duracion / pasos);

    return () => clearInterval(timer);
  }, [tipo, isVisible, contenido.valor, configuracion.duracion]);

  // Autoplay carrusel
  useEffect(() => {
    if ((tipo !== "carrusel" && tipo !== "slider") || !configuracion.autoplay) return;

    const interval = setInterval(() => {
      const slides = (configuracion.slides as Array<unknown>) || [];
      setSlideActual((prev) => (prev + 1) % slides.length);
    }, configuracion.intervalo || 5000);

    return () => clearInterval(interval);
  }, [tipo, configuracion.autoplay, configuracion.intervalo, configuracion.slides]);

  // Construir estilos responsive
  const getEstilos = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      color: estilos.color,
      backgroundColor: estilos.background,
      backgroundImage: estilos.backgroundImage,
      padding: estilos.padding,
      margin: estilos.margin,
      borderRadius: estilos.borderRadius,
      boxShadow: estilos.shadow,
      textAlign: estilos.textAlign,
      fontSize: estilos.fontSize,
      fontWeight: estilos.fontWeight,
      width: estilos.width,
      height: estilos.height,
      maxWidth: estilos.maxWidth,
      minHeight: estilos.minHeight,
      objectFit: estilos.objectFit,
      opacity: isVisible ? (estilos.opacity ? parseFloat(estilos.opacity) : 1) : 0,
      display: estilos.display,
      gridTemplateColumns: estilos.gridTemplateColumns,
      gap: estilos.gap,
      flexDirection: estilos.flexDirection,
      flexWrap: estilos.flexWrap,
      justifyContent: estilos.justifyContent,
      alignItems: estilos.alignItems,
      border: estilos.border,
      lineHeight: estilos.lineHeight,
      letterSpacing: estilos.letterSpacing,
      textTransform: estilos.textTransform,
      transition: `opacity ${configuracion.duracionAnimacion || 0.5}s ease-out, transform ${configuracion.duracionAnimacion || 0.5}s ease-out`,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
    };

    return base;
  };

  const estilosComputados = getEstilos();

  const toggleAccordion = (index: number) => {
    setAccordionAbierto(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  switch (tipo) {
    case "titulo":
      return (
        <h1 
          ref={elementoRef}
          style={estilosComputados} 
          className="break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          {(contenido.texto as string) || ""}
        </h1>
      );

    case "subtitulo":
      return (
        <h2 
          ref={elementoRef}
          style={estilosComputados} 
          className="break-words text-xl sm:text-2xl md:text-3xl font-semibold leading-snug"
        >
          {(contenido.texto as string) || ""}
        </h2>
      );

    case "texto":
      return (
        <p 
          ref={elementoRef}
          style={estilosComputados} 
          className="break-words whitespace-pre-wrap text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {(contenido.texto as string) || ""}
        </p>
      );

    case "imagen":
      return (
        <figure ref={elementoRef} style={estilosComputados} className="w-full">
          <img
            src={(contenido.src as string) || ""}
            alt={(contenido.alt as string) || ""}
            loading={configuracion.lazyLoading ? "lazy" : "eager"}
            className="w-full h-auto rounded-xl"
            style={{
              aspectRatio: configuracion.aspectRatio,
              objectFit: estilos.objectFit || "cover",
            }}
          />
          {contenido.pie && (
            <figcaption className="text-center text-xs sm:text-sm text-gray-500 mt-2 italic">
              {contenido.pie as string}
            </figcaption>
          )}
        </figure>
      );

    case "gif":
      return (
        <img
          ref={elementoRef}
          src={(contenido.src as string) || ""}
          alt={(contenido.alt as string) || ""}
          loading={configuracion.lazyLoading ? "lazy" : "eager"}
          style={estilosComputados}
          className="max-w-full h-auto rounded-xl"
        />
      );

    case "video":
      const videoSrc = (contenido.src as string) || "";
      const isYouTube = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");
      
      return (
        <div ref={elementoRef} style={estilosComputados} className="w-full">
          {isYouTube ? (
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videoSrc.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                title="Video"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : (
            <video
              src={videoSrc}
              controls={configuracion.controls !== false}
              autoPlay={configuracion.autoplay}
              loop={configuracion.loop}
              muted={configuracion.muted}
              className="w-full rounded-xl"
              style={{ aspectRatio: configuracion.aspectRatio || "16/9" }}
            />
          )}
        </div>
      );

    case "card_texto":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl p-4 sm:p-6">
          {(contenido.titulo as string) && (
            <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{(contenido.titulo as string)}</h3>
          )}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{(contenido.texto as string) || ""}</p>
        </div>
      );

    case "card_imagen":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl overflow-hidden">
          <img
            src={(contenido.src as string) || ""}
            alt={(contenido.alt as string) || ""}
            loading={configuracion.lazyLoading ? "lazy" : "eager"}
            className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      );

    case "card_mixta":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl overflow-hidden group">
          {(contenido.imagen as string) && (
            <div className="overflow-hidden">
              <img
                src={contenido.imagen as string}
                alt=""
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-4 sm:p-6">
            {(contenido.titulo as string) && (
              <h3 className="font-bold text-lg sm:text-xl mb-2">{(contenido.titulo as string)}</h3>
            )}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{(contenido.texto as string) || ""}</p>
          </div>
        </div>
      );

    case "card_cta":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl p-6 sm:p-8 text-center">
          {(contenido.titulo as string) && (
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {(contenido.titulo as string)}
            </h3>
          )}
          {(contenido.texto as string) && (
            <p className="mb-6 opacity-90 text-sm sm:text-base leading-relaxed">{(contenido.texto as string)}</p>
          )}
          {(contenido.enlace as string) && (
            <a
              href={contenido.enlace as string}
              target={configuracion.targetBlank ? "_blank" : undefined}
              rel={configuracion.targetBlank ? "noopener noreferrer" : undefined}
              className={`inline-block px-6 sm:px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm sm:text-base ${
                configuracion.tipoBoton === "secundario"
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : configuracion.tipoBoton === "outline"
                  ? "border-2 border-white text-white hover:bg-white hover:text-blue-600"
                  : configuracion.tipoBoton === "ghost"
                  ? "text-white hover:bg-white/10"
                  : "bg-white text-blue-600 shadow-lg hover:shadow-xl"
              }`}
            >
              {(contenido.textoBoton as string) || "Click aquí"}
            </a>
          )}
        </div>
      );

    case "card_links":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl p-4 sm:p-6">
          {(contenido.titulo as string) && (
            <h3 className="font-bold text-lg sm:text-xl mb-4">{(contenido.titulo as string)}</h3>
          )}
          <ul className="space-y-2 sm:space-y-3">
            {((contenido.links as Array<{ texto: string; url: string }>) || []).map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base"
                  >
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    <span className="hover:underline">{link.texto}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      );

    case "banner":
      return (
        <div
          ref={elementoRef}
          style={{
            ...estilosComputados,
            background: estilos.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
          className="rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            {(contenido.titulo as string) && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {(contenido.titulo as string)}
              </h2>
            )}
            {(contenido.subtitulo as string) && (
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                {(contenido.subtitulo as string)}
              </p>
            )}
          </div>
        </div>
      );

    case "cita":
      return (
        <blockquote ref={elementoRef} style={estilosComputados} className="relative pl-4 sm:pl-6 py-4">
          <span className="absolute -top-2 -left-2 text-4xl sm:text-5xl text-blue-200 font-serif">"</span>
          <p className="relative z-10 text-base sm:text-lg italic leading-relaxed">{(contenido.texto as string) || ""}</p>
          {(contenido.autor as string) && (
            <cite className="block mt-3 text-sm sm:text-base not-italic font-medium opacity-70">
              — {(contenido.autor as string)}
            </cite>
          )}
        </blockquote>
      );

    case "espaciador":
      return <div ref={elementoRef} style={{ height: estilos.height || "2rem" }} />;

    case "separador":
      return <hr ref={elementoRef} style={estilosComputados} className="border-gray-200" />;

    case "grid":
      const cols = configuracion.columns || 2;
      const responsiveCols = configuracion.responsiveColumns;
      return (
        <div
          ref={elementoRef}
          style={{
            ...estilosComputados,
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
          }}
          className={`gap-4 sm:gap-6 ${
            responsiveCols?.sm ? `sm:grid-cols-${responsiveCols.sm}` : ""
          } ${responsiveCols?.md ? `md:grid-cols-${responsiveCols.md}` : ""} ${
            responsiveCols?.lg ? `lg:grid-cols-${responsiveCols.lg}` : ""
          }`}
        >
          {/* Grid container - los items se renderizan como bloques hijos */}
        </div>
      );

    case "flex":
      return (
        <div
          ref={elementoRef}
          style={{
            ...estilosComputados,
            display: "flex",
          }}
          className="gap-4 flex-wrap"
        >
          {/* Flex container */}
        </div>
      );

    case "carrusel":
    case "slider":
      const slides = (configuracion.slides as Array<{imagen: string; titulo?: string; texto?: string}>) || [];
      
      if (slides.length === 0) {
        return (
          <div ref={elementoRef} className="p-8 bg-gray-100 rounded-2xl text-center text-gray-500">
            No hay slides configurados
          </div>
        );
      }

      return (
        <div ref={elementoRef} style={estilosComputados} className="relative group rounded-2xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slideActual * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0 relative">
                {slide.imagen ? (
                  <img
                    src={slide.imagen}
                    alt={slide.titulo || ""}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 sm:h-64 md:h-80 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Sin imagen</span>
                  </div>
                )}
                {(slide.titulo || slide.texto) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white">
                    {slide.titulo && <h4 className="text-lg sm:text-xl font-bold mb-1">{slide.titulo}</h4>}
                    {slide.texto && <p className="text-sm sm:text-base opacity-90 line-clamp-2">{slide.texto}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {slides.length > 1 && configuracion.mostrarFlechas !== false && (
            <>
              <button
                onClick={() => setSlideActual((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                aria-label="Anterior"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSlideActual((prev) => (prev + 1) % slides.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                aria-label="Siguiente"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {slides.length > 1 && configuracion.mostrarDots !== false && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideActual(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === slideActual ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      );

    case "testimonial":
      const testimonios = (configuracion.testimonios as Array<any>) || [];
      
      if (testimonios.length === 0) {
        return (
          <div ref={elementoRef} className="p-8 bg-gray-100 rounded-2xl text-center text-gray-500">
            No hay testimonios configurados
          </div>
        );
      }

      return (
        <div ref={elementoRef} style={estilosComputados}>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((test, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  {test.imagen ? (
                    <img
                      src={test.imagen}
                      alt={test.nombre}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-bold">
                      {test.nombre?.charAt(0) || "?"}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{test.nombre}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{test.cargo}</div>
                    {test.empresa && (
                      <div className="text-xs text-gray-400">{test.empresa}</div>
                    )}
                  </div>
                </div>
                {test.rating && (
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < test.rating ? "text-yellow-400" : "text-gray-300"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed">"{test.texto}"</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "lista_iconos":
      const iconos = (configuracion.iconos as Array<any>) || [];
      return (
        <ul ref={elementoRef} style={estilosComputados} className="space-y-3 sm:space-y-4">
          {iconos.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 sm:gap-4">
              <span 
                className="text-xl sm:text-2xl flex-shrink-0"
                style={{ color: item.color || estilos.color }}
              >
                {item.icono}
              </span>
              <span className="text-sm sm:text-base leading-relaxed pt-0.5">{item.texto}</span>
            </li>
          ))}
        </ul>
      );

    case "tabla":
      const filas = (configuracion.filas as Array<string[]>) || [];
      const encabezados = configuracion.encabezados;
      
      return (
        <div ref={elementoRef} style={estilosComputados} className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-xs sm:text-sm">
            {encabezados && (
              <thead className="bg-gray-50">
                <tr>
                  {encabezados.map((h, i) => (
                    <th key={i} className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {filas.map((fila, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`border-t ${configuracion.striped && rowIdx % 2 === 1 ? "bg-gray-50" : ""} ${
                    configuracion.bordered ? "border-gray-200" : ""
                  } hover:bg-blue-50/50 transition-colors`}
                >
                  {fila.map((celda, colIdx) => (
                    <td key={colIdx} className="px-3 sm:px-4 py-2 sm:py-3 text-gray-700">{celda}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "accordion":
      const items = (configuracion.items as Array<any>) || [];
      return (
        <div ref={elementoRef} style={estilosComputados} className="space-y-2">
          {items.map((item, idx) => {
            const isOpen = accordionAbierto.includes(idx);
            return (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-sm sm:text-base pr-4">{item.titulo}</span>
                  <svg 
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "500px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.contenido}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );

    case "tabs":
      const tabs = (configuracion.tabs as Array<any>) || [];
      return (
        <div ref={elementoRef} style={estilosComputados}>
          <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setTabActiva(idx)}
                className={`px-4 sm:px-6 py-3 font-medium whitespace-nowrap transition-colors text-sm sm:text-base border-b-2 ${
                  tabActiva === idx
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab.icono && <span className="mr-2">{tab.icono}</span>}
                {tab.titulo}
              </button>
            ))}
          </div>
          <div className="p-4 sm:p-6">
            {tabs[tabActiva] && (
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
                {tabs[tabActiva].contenido}
              </div>
            )}
          </div>
        </div>
      );

    case "faq":
      const preguntas = (configuracion.preguntas as Array<any>) || [];
      return (
        <div ref={elementoRef} style={estilosComputados} className="space-y-3 sm:space-y-4">
          {preguntas.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 sm:pb-4">
              <button
                onClick={() => setFaqAbierto(faqAbierto === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left group py-2"
              >
                <span className="font-medium text-base sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                  {faq.pregunta}
                </span>
                <span className={`text-xl sm:text-2xl text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  faqAbierto === idx ? "rotate-45 text-blue-600" : ""
                }`}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: faqAbierto === idx ? "200px" : "0",
                  opacity: faqAbierto === idx ? 1 : 0,
                  marginTop: faqAbierto === idx ? "0.75rem" : "0",
                }}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "timeline":
      const eventos = (configuracion.eventos as Array<any>) || [];
      return (
        <div ref={elementoRef} style={estilosComputados} className="relative">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-6 sm:space-y-8">
            {eventos.map((evento, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-12">
                <div 
                  className="absolute left-1.5 sm:left-2.5 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-4 border-white shadow-md"
                  style={{ backgroundColor: evento.color || "#3b82f6" }}
                />
                <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: evento.color || "#3b82f6" }}>
                  {evento.fecha}
                </div>
                <h4 className="font-bold text-base sm:text-lg mb-1 text-gray-900">{evento.titulo}</h4>
                {evento.descripcion && (
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{evento.descripcion}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "social":
      const redes = (configuracion.redes as Array<any>) || [];
      return (
        <div ref={elementoRef} style={estilosComputados} className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          {redes.map((red, idx) => (
            <a
              key={idx}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:scale-110 transition-transform p-2 rounded-full hover:bg-gray-100"
              style={{ color: red.color || estilos.color }}
              title={red.nombre}
            >
              {red.icono}
            </a>
          ))}
        </div>
      );

    case "contador":
      return (
        <div ref={elementoRef} style={estilosComputados}>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums">
            {(configuracion.prefijo || "")}
            {configuracion.separadorMiles 
              ? contadorValor.toLocaleString() 
              : contadorValor}
            {(configuracion.sufijo || "")}
          </div>
          {(contenido.label as string) && (
            <div className="text-base sm:text-lg text-gray-500 mt-2 font-medium">{(contenido.label as string)}</div>
          )}
        </div>
      );

    case "newsletter":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{(contenido.titulo as string) || "Newsletter"}</h3>
          <p className="mb-6 opacity-80 text-sm sm:text-base">{(contenido.descripcion as string) || "Suscríbete a nuestro boletín"}</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={(contenido.placeholder as string) || "tu@email.com"}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm whitespace-nowrap"
            >
              {(contenido.textoBoton as string) || "Suscribirse"}
            </button>
          </form>
        </div>
      );

    case "codigo":
      return (
        <pre
          ref={elementoRef}
          style={{
            ...estilosComputados,
            background: estilos.background || "#1f2937",
            color: estilos.color || "#f9fafb",
          }}
          className="overflow-x-auto p-4 sm:p-6 rounded-xl text-xs sm:text-sm font-mono"
        >
          <code className="break-all">{(contenido.codigo as string) || ""}</code>
        </pre>
      );

    case "cta":
      return (
        <div ref={elementoRef} style={estilosComputados} className="rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">{(contenido.titulo as string) || "¡Llama a la acción!"}</h3>
          <p className="mb-6 opacity-90 text-sm sm:text-base max-w-2xl mx-auto">{(contenido.texto as string) || ""}</p>
          <a
            href={(contenido.url as string) || "#"}
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            {(contenido.boton as string) || "Comenzar"}
          </a>
        </div>
      );

    case "galeria":
      const imagenesGaleria = (contenido.imagenes as Array<any>) || []; // Renombrada
      const columnasGaleria = configuracion.columns || 3; // Renombrada
      return (
        <div
          ref={elementoRef}
          style={estilosComputados}
          className={`grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-${Math.min(columnasGaleria, 3)} md:grid-cols-${columnasGaleria}`}
        >
          {imagenesGaleria.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-xl ${
              idx === 0 && columnasGaleria > 1 ? "col-span-2 row-span-2" : ""
            }`}>
              <img
                src={img.src}
                alt={img.alt || ""}
                loading="lazy"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4">
                  <span className="text-white text-xs sm:text-sm">{img.caption}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      );


    case "boton":
      const variantes = {
        solid: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "text-blue-600 hover:bg-blue-50",
        link: "text-blue-600 underline hover:no-underline",
      };
      const tamanos = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3 text-base",
      };
      
      return (
        <div ref={elementoRef} style={estilosComputados} className="text-center">
          <a
            href={(contenido.url as string) || "#"}
            className={`inline-flex items-center gap-2 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 ${
              variantes[configuracion.variante || "solid"]
            } ${tamanos[configuracion.tamaño || "md"]} ${
              configuracion.deshabilitado ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {configuracion.icono && configuracion.iconoPosicion !== "right" && (
              <span>{configuracion.icono}</span>
            )}
            {(contenido.texto as string) || "Botón"}
            {configuracion.icono && configuracion.iconoPosicion === "right" && (
              <span>{configuracion.icono}</span>
            )}
            {configuracion.cargando && (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
          </a>
        </div>
      );

    case "spacer":
      return (
        <div 
          ref={elementoRef} 
          className="hidden sm:block md:hidden" 
          style={{ height: configuracion.alturaTablet || "2rem" }} 
        />
      );

    case "divider":
      return (
        <div ref={elementoRef} className="relative py-4">
          <div 
            className="border-t" 
            style={{ 
              borderTopWidth: configuracion.grosor || "1px",
              borderTopStyle: configuracion.estilo || "solid",
              borderColor: estilos.color || "#e5e7eb"
            }} 
          />
          {configuracion.conTexto && (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
              {configuracion.conTexto}
            </span>
          )}
        </div>
      );

    default:
      return (
        <div ref={elementoRef} className="p-4 bg-amber-50 text-amber-800 rounded-xl text-sm border border-amber-200">
          Bloque no soportado: {tipo}
        </div>
      );
  }
});

BloqueRenderer.displayName = "BloqueRenderer";
