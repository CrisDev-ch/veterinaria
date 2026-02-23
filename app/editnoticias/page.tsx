// /app/editnoticias/page.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Publicacion, Bloque, STORAGE_KEY, generarId, generarSlug } from "@/app/types/noticias";
import { SideMenu, EditorBloques, VistaPrevia, ListaPublicaciones } from "./components";

export default function EditNoticiasPage(): JSX.Element {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);
  const [publicacionActiva, setPublicacionActiva] = useState<string | null>(null);
  const [vistaActiva, setVistaActiva] = useState<"editor" | "lista" | "preview">("lista");
  const [modoPreview, setModoPreview] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [cargando, setCargando] = useState(true);
  const [mensaje, setMensaje] = useState<{tipo: "success" | "error", texto: string} | null>(null);
  const autoSaveRef = useRef<NodeJS.Timeout>();

  // Cargar datos iniciales
  useEffect(() => {
    const cargarDatos = () => {
      try {
        const dataGuardada = localStorage.getItem(STORAGE_KEY);
        if (dataGuardada) {
          const parsed = JSON.parse(dataGuardada);
          if (Array.isArray(parsed)) {
            setPublicaciones(parsed);
          }
        }
      } catch (error) {
        console.error("Error al cargar:", error);
        mostrarMensaje("error", "Error al cargar las publicaciones");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Autoguardado
  useEffect(() => {
    if (publicaciones.length > 0) {
      if (autoSaveRef.current) clearTimeout(autoSaveRef.current);
      autoSaveRef.current = setTimeout(() => {
        guardarEnStorage(publicaciones);
      }, 3000);
    }
  }, [publicaciones]);

  const mostrarMensaje = (tipo: "success" | "error", texto: string) => {
    setMensaje({ tipo, texto });
    setTimeout(() => setMensaje(null), 3000);
  };

  const guardarEnStorage = (data: Publicacion[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  const crearPublicacion = useCallback(() => {
    const nueva: Publicacion = {
      id: generarId(),
      titulo: "Nueva Publicación",
      slug: generarSlug("nueva-publicacion"),
      estado: "borrador",
      fechaCreacion: new Date().toISOString(),
      fechaModificacion: new Date().toISOString(),
      bloques: [],
      destacado: false,
    };

    setPublicaciones(prev => [nueva, ...prev]);
    setPublicacionActiva(nueva.id);
    setVistaActiva("editor");
    mostrarMensaje("success", "Publicación creada");
  }, []);

  const duplicarPublicacion = useCallback((id: string) => {
    const original = publicaciones.find(p => p.id === id);
    if (!original) return;

    const duplicada: Publicacion = {
      ...original,
      id: generarId(),
      titulo: `${original.titulo} (copia)`,
      slug: generarSlug(`${original.titulo}-copia`),
      estado: "borrador",
      fechaCreacion: new Date().toISOString(),
      fechaModificacion: new Date().toISOString(),
    };

    setPublicaciones(prev => [duplicada, ...prev]);
    mostrarMensaje("success", "Publicación duplicada");
  }, [publicaciones]);

  const eliminarPublicacion = useCallback((id: string) => {
    setPublicaciones(prev => prev.filter(p => p.id !== id));
    if (publicacionActiva === id) {
      setPublicacionActiva(null);
      setVistaActiva("lista");
    }
    mostrarMensaje("success", "Publicación eliminada");
  }, [publicacionActiva]);

  const cambiarEstado = useCallback((id: string, estado: "borrador" | "publicado") => {
    setPublicaciones(prev => prev.map(p => {
      if (p.id === id) {
        return {
          ...p,
          estado,
          fechaModificacion: new Date().toISOString(),
          fechaPublicacion: estado === "publicado" ? new Date().toISOString() : p.fechaPublicacion,
        };
      }
      return p;
    }));
    mostrarMensaje("success", `Publicación ${estado === "publicado" ? "publicada" : "movida a borradores"}`);
  }, []);

  const actualizarPublicacion = useCallback((actualizada: Publicacion) => {
    setPublicaciones(prev => prev.map(p => 
      p.id === actualizada.id ? actualizada : p
    ));
  }, []);

  const guardarManual = useCallback(() => {
    guardarEnStorage(publicaciones);
    mostrarMensaje("success", "Guardado manual completado");
  }, [publicaciones]);

  const publicacionActual = publicaciones.find(p => p.id === publicacionActiva) || null;

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mensaje flotante */}
      {mensaje && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-lg font-medium text-sm animate-fade-in ${
          mensaje.tipo === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {mensaje.texto}
        </div>
      )}

      {/* Contenido principal */}
      <main className="flex-1 lg:mr-80">
        <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          {vistaActiva === "lista" && (
            <ListaPublicaciones
              publicaciones={publicaciones}
              onSeleccionar={(id) => {
                setPublicacionActiva(id);
                setVistaActiva("editor");
              }}
              onEliminar={eliminarPublicacion}
              onDuplicar={duplicarPublicacion}
              onCambiarEstado={cambiarEstado}
            />
          )}

          {vistaActiva === "editor" && publicacionActual && (
            <EditorBloques
              publicacion={publicacionActual}
              onChange={actualizarPublicacion}
              onGuardar={guardarManual}
            />
          )}

          {vistaActiva === "editor" && !publicacionActual && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Selecciona una publicación</h2>
              <p className="text-gray-600 mb-6">Elige una publicación del menú o crea una nueva</p>
              <button
                onClick={crearPublicacion}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Crear nueva publicación
              </button>
            </div>
          )}

          {vistaActiva === "preview" && (
            <VistaPrevia
              publicacion={publicacionActual}
              modo={modoPreview}
            />
          )}
        </div>
      </main>

      {/* Sidebar */}
      <SideMenu
        vistaActiva={vistaActiva}
        onCambiarVista={(v) => setVistaActiva(v as any)}
        publicaciones={publicaciones}
        publicacionActiva={publicacionActiva}
        onSeleccionarPublicacion={(id) => {
          setPublicacionActiva(id);
          setVistaActiva("editor");
        }}
        onCrearPublicacion={crearPublicacion}
        onDuplicarPublicacion={duplicarPublicacion}
        onEliminarPublicacion={eliminarPublicacion}
        onCambiarEstado={cambiarEstado}
      />
    </div>
  );
}
