// /app/noticiasvetchile/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Publicacion, STORAGE_KEY } from "@/app/types/noticias";
import { BloqueRenderer } from "./components";

const ITEMS_POR_PAGINA = 5;

export default function NoticiasVetChilePage(): JSX.Element {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todas");
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  useEffect(() => {
    const cargarDatos = () => {
      try {
        const dataGuardada = localStorage.getItem(STORAGE_KEY);
        
        if (!dataGuardada) {
          setPublicaciones([]);
          setCargando(false);
          return;
        }

        const parsed = JSON.parse(dataGuardada);
        
        if (!Array.isArray(parsed)) {
          throw new Error("Formato de datos inválido");
        }

        const publicadas = parsed
          .filter((pub: Publicacion) => pub.estado === "publicado")
          .sort((a: Publicacion, b: Publicacion) => 
            new Date(b.fechaPublicacion || b.fechaModificacion).getTime() - 
            new Date(a.fechaPublicacion || a.fechaModificacion).getTime()
          );

        setPublicaciones(publicadas);
      } catch (err) {
        console.error("Error al cargar noticias:", err);
        setError("Error al cargar las noticias");
      } finally {
        setTimeout(() => setCargando(false), 300);
      }
    };

    cargarDatos();
  }, []);

  const categorias = ["todas", ...Array.from(new Set(publicaciones.map(p => p.meta?.categoria).filter(Boolean)))];

  const publicacionesFiltradas = categoriaFiltro === "todas" 
    ? publicaciones 
    : publicaciones.filter(p => p.meta?.categoria === categoriaFiltro);

  const totalPaginas = Math.ceil(publicacionesFiltradas.length / ITEMS_POR_PAGINA);
  
  const publicacionesPagina = publicacionesFiltradas.slice(
    (paginaActual - 1) * ITEMS_POR_PAGINA,
    paginaActual * ITEMS_POR_PAGINA
  );

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (cargando) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Cargando noticias...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Algo salió mal</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Noticias VetChile</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Actualidad veterinaria</p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {publicaciones.length} {publicaciones.length === 1 ? "artículo" : "artículos"}
          </div>
        </div>
      </header>

      {/* Filtros de categoría */}
      {categorias.length > 1 && (
        <div className="bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoriaFiltro(cat);
                    setPaginaActual(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    categoriaFiltro === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat === "todas" ? "Todas" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {publicacionesPagina.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No hay publicaciones</h2>
            <p className="text-gray-600">Vuelve más tarde para ver nuevo contenido</p>
          </div>
        ) : (
          <>
            {/* Feed de publicaciones renderizadas completas */}
            <div className="space-y-8 sm:space-y-12">
              {publicacionesPagina.map((pub) => (
                <article
                  key={pub.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  {/* Header de la publicación */}
                  <div className="p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex items-start gap-3 mb-3">
                      {pub.destacado && (
                        <span className="flex-shrink-0 px-2 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                          ⭐ DESTACADO
                        </span>
                      )}
                      {pub.meta?.categoria && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {pub.meta.categoria}
                        </span>
                      )}
                      <span className="text-xs text-gray-400 ml-auto">
                        {montado && new Date(pub.fechaPublicacion || pub.fechaModificacion).toLocaleDateString("es-CL", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h2 className="font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl leading-tight">
                      {pub.titulo || "Sin título"}
                    </h2>
                    
                    {pub.meta?.descripcion && (
                      <p className="text-gray-600 mt-2 text-base sm:text-lg leading-relaxed">
                        {pub.meta.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Contenido renderizado completo */}
                  <div className="p-4 sm:p-6 space-y-6">
                    {pub.bloques.map((bloque) => (
                      <BloqueRenderer key={bloque.id} bloque={bloque} />
                    ))}
                  </div>

                  {/* Footer de la publicación - SIN CONTADOR DE BLOQUES */}
                  <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-100 text-right text-xs text-gray-500">
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: pub.titulo,
                            text: pub.meta?.descripcion || '',
                            url: window.location.href
                          });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                        }
                      }}
                      className="hover:text-blue-600 transition-colors"
                    >
                      Compartir ↗
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Paginación */}
            {totalPaginas > 1 && (
              <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => cambiarPagina(paginaActual - 1)}
                    disabled={paginaActual === 1}
                    className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium bg-white"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Anterior</span>
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => cambiarPagina(num)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors ${
                          paginaActual === num
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 hover:bg-white bg-white text-gray-700"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => cambiarPagina(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                    className="flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium bg-white"
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  Página {paginaActual} de {totalPaginas}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
            V
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} VetChile. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
