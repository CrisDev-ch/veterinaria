// /app/editnoticias/components.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import {
  Bloque,
  TipoBloque,
  Publicacion,
  EstilosBloque,
  ConfiguracionBloque,
  generarId,
  estilosPorDefecto,
  configuracionPorDefecto,
} from "@/app/types/noticias";

// ==========================================
// TIPOS LOCALES
// ==========================================

interface EditorProps {
  publicacion: Publicacion;
  onChange: (publicacion: Publicacion) => void;
  onGuardar: () => void;
}

interface VistaPreviaProps {
  publicacion: Publicacion | null;
  modo: "desktop" | "tablet" | "mobile";
}

interface SideMenuProps {
  vistaActiva: string;
  onCambiarVista: (vista: string) => void;
  publicaciones: Publicacion[];
  publicacionActiva: string | null;
  onSeleccionarPublicacion: (id: string) => void;
  onCrearPublicacion: () => void;
  onDuplicarPublicacion: (id: string) => void;
  onEliminarPublicacion: (id: string) => void;
  onCambiarEstado: (id: string, estado: "borrador" | "publicado") => void;
}

// ==========================================
// HOOK PERSONALIZADO PARA INPUTS ESTABLES (SOLUCIÓN TECLADO)
// ==========================================

function useStableInput<T>(initialValue: T, onChange: (value: T) => void) {
  const [localValue, setLocalValue] = useState<T>(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isTypingRef = useRef(false);

  useEffect(() => {
    if (!isTypingRef.current) {
      setLocalValue(initialValue);
    }
  }, [initialValue]);

  const handleChange = useCallback((newValue: T) => {
    isTypingRef.current = true;
    setLocalValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
      isTypingRef.current = false;
    }, 500);
  }, [onChange]);

  const handleBlur = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onChange(localValue);
    isTypingRef.current = false;
  }, [localValue, onChange]);

  return { value: localValue, handleChange, handleBlur };
}

// ==========================================
// COMPONENTE: SIDE MENU (MOBILE FIRST)
// ==========================================

export const SideMenu: React.FC<SideMenuProps> = memo(({
  vistaActiva,
  onCambiarVista,
  publicaciones,
  publicacionActiva,
  onSeleccionarPublicacion,
  onCrearPublicacion,
  onDuplicarPublicacion,
  onEliminarPublicacion,
  onCambiarEstado,
}) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState<"menu" | "publicaciones">("menu");

  const vistas = [
    { id: "editor", label: "Editor", icon: "✏️", color: "blue" },
    { id: "lista", label: "Publicaciones", icon: "📄", color: "purple" },
    { id: "preview", label: "Vista Previa", icon: "👁️", color: "green" },
  ];

  return (
    <>
      {/* Botón flotante para móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 active:scale-95 transition-all"
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuAbierto ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay para móvil */}
      {menuAbierto && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMenuAbierto(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 bg-white shadow-2xl z-50 w-full sm:w-80 transform transition-transform duration-300 ease-out lg:translate-x-0 lg:static lg:w-80 lg:shadow-none lg:border-l lg:border-gray-200 ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header móvil */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-800">Menú</h2>
          <button 
            onClick={() => setMenuAbierto(false)}
            className="p-2 hover:bg-gray-200 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-full overflow-y-auto p-4 sm:p-6">
          {/* Navegación principal */}
          <nav className="space-y-2 mb-6">
            {vistas.map((vista) => (
              <button
                key={vista.id}
                onClick={() => {
                  onCambiarVista(vista.id);
                  setMenuAbierto(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                  vistaActiva === vista.id
                    ? `bg-${vista.color}-100 text-${vista.color}-700 font-semibold shadow-sm`
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="text-xl">{vista.icon}</span>
                <span className="text-sm sm:text-base">{vista.label}</span>
                {vistaActiva === vista.id && (
                  <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </nav>

          {/* Acciones rápidas */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
              Acciones Rápidas
            </h3>
            <button
              onClick={() => {
                onCrearPublicacion();
                setMenuAbierto(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nueva Publicación
            </button>
          </div>

          {/* Publicaciones recientes */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
              Recientes ({publicaciones.length})
            </h3>
            <div className="space-y-2">
              {publicaciones.slice(0, 8).map((pub) => (
                <div
                  key={pub.id}
                  className={`group p-3 rounded-xl cursor-pointer transition-all border-2 ${
                    publicacionActiva === pub.id
                      ? "bg-blue-50 border-blue-300 shadow-sm"
                      : "bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div 
                    onClick={() => {
                      onSeleccionarPublicacion(pub.id);
                      setMenuAbierto(false);
                    }}
                    className="flex justify-between items-start mb-2"
                  >
                    <span className="font-medium text-sm text-gray-800 line-clamp-2 flex-1 pr-2">
                      {pub.titulo || "Sin título"}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                        pub.estado === "publicado"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {pub.estado === "publicado" ? "Pub" : "Bor"}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{new Date(pub.fechaModificacion).toLocaleDateString("es-CL")}</span>
                    <span>{pub.bloques.length} bloques</span>
                  </div>

                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDuplicarPublicacion(pub.id);
                      }}
                      className="flex-1 py-1.5 text-xs bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                      title="Duplicar"
                    >
                      📋 Duplicar
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCambiarEstado(
                          pub.id,
                          pub.estado === "publicado" ? "borrador" : "publicado"
                        );
                      }}
                      className="flex-1 py-1.5 text-xs bg-white border border-gray-200 rounded-lg hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-colors"
                      title="Cambiar estado"
                    >
                      🔄 {pub.estado === "publicado" ? "Borrador" : "Publicar"}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEliminarPublicacion(pub.id);
                      }}
                      className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                      title="Eliminar"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
              
              {publicaciones.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No hay publicaciones
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
});

SideMenu.displayName = "SideMenu";

// ==========================================
// COMPONENTE: EDITOR DE BLOQUES (OPTIMIZADO)
// ==========================================

export const EditorBloques: React.FC<EditorProps> = memo(({
  publicacion,
  onChange,
  onGuardar,
}) => {
  const [bloqueEditando, setBloqueEditando] = useState<string | null>(null);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todos");
  const guardandoRef = useRef(false);

  const agregarBloque = useCallback((tipo: TipoBloque) => {
    const nuevoBloque: Bloque = {
      id: generarId(),
      tipo,
      contenido: obtenerContenidoPorDefecto(tipo),
      estilos: { ...estilosPorDefecto[tipo] },
      configuracion: { ...configuracionPorDefecto[tipo] },
    };

    onChange({
      ...publicacion,
      bloques: [...publicacion.bloques, nuevoBloque],
      fechaModificacion: new Date().toISOString(),
    });
  }, [publicacion, onChange]);

  const actualizarBloque = useCallback((id: string, updates: Partial<Bloque>) => {
    const nuevosBloques = publicacion.bloques.map((b) =>
      b.id === id ? { ...b, ...updates } : b
    );

    onChange({
      ...publicacion,
      bloques: nuevosBloques,
      fechaModificacion: new Date().toISOString(),
    });
  }, [publicacion, onChange]);

  const eliminarBloque = useCallback((id: string) => {
    if (confirm("¿Eliminar este bloque?")) {
      onChange({
        ...publicacion,
        bloques: publicacion.bloques.filter((b) => b.id !== id),
        fechaModificacion: new Date().toISOString(),
      });
      if (bloqueEditando === id) {
        setBloqueEditando(null);
      }
    }
  }, [publicacion, onChange, bloqueEditando]);

  const moverBloque = useCallback((id: string, direccion: "arriba" | "abajo") => {
    const index = publicacion.bloques.findIndex((b) => b.id === id);
    if (
      (direccion === "arriba" && index === 0) ||
      (direccion === "abajo" && index === publicacion.bloques.length - 1)
    ) {
      return;
    }

    const nuevosBloques = [...publicacion.bloques];
    const newIndex = direccion === "arriba" ? index - 1 : index + 1;
    [nuevosBloques[index], nuevosBloques[newIndex]] = [
      nuevosBloques[newIndex],
      nuevosBloques[index],
    ];

    onChange({
      ...publicacion,
      bloques: nuevosBloques,
      fechaModificacion: new Date().toISOString(),
    });
  }, [publicacion, onChange]);

  const duplicarBloque = useCallback((id: string) => {
    const bloque = publicacion.bloques.find((b) => b.id === id);
    if (!bloque) return;

    const index = publicacion.bloques.findIndex((b) => b.id === id);
    const nuevoBloque: Bloque = {
      ...bloque,
      id: generarId(),
    };

    const nuevosBloques = [...publicacion.bloques];
    nuevosBloques.splice(index + 1, 0, nuevoBloque);

    onChange({
      ...publicacion,
      bloques: nuevosBloques,
      fechaModificacion: new Date().toISOString(),
    });
  }, [publicacion, onChange]);

  const categoriasBloques = [
    { id: "todos", label: "Todos", icon: "🎯" },
    { id: "texto", label: "Texto", icon: "📝" },
    { id: "media", label: "Media", icon: "🖼️" },
    { id: "cards", label: "Cards", icon: "🎴" },
    { id: "layout", label: "Layout", icon: "⚡" },
    { id: "avanzado", label: "Avanzado", icon: "🚀" },
  ];

  const tiposBloque: Array<{ tipo: TipoBloque; label: string; icon: string; categoria: string }> = [
    // Texto
    { tipo: "titulo", label: "Título", icon: "T", categoria: "texto" },
    { tipo: "subtitulo", label: "Subtítulo", icon: "H2", categoria: "texto" },
    { tipo: "texto", label: "Texto", icon: "¶", categoria: "texto" },
    { tipo: "cita", label: "Cita", icon: "💭", categoria: "texto" },
    
    // Media
    { tipo: "imagen", label: "Imagen", icon: "🖼️", categoria: "media" },
    { tipo: "galeria", label: "Galería", icon: "🖼️🖼️", categoria: "media" },
    { tipo: "gif", label: "GIF", icon: "GIF", categoria: "media" },
    { tipo: "video", label: "Video", icon: "▶️", categoria: "media" },
    
    // Cards
    { tipo: "card_texto", label: "Card Texto", icon: "📝", categoria: "cards" },
    { tipo: "card_imagen", label: "Card Imagen", icon: "🖼️", categoria: "cards" },
    { tipo: "card_mixta", label: "Card Mixta", icon: "🎴", categoria: "cards" },
    { tipo: "card_cta", label: "Card CTA", icon: "👆", categoria: "cards" },
    { tipo: "card_links", label: "Card Links", icon: "🔗", categoria: "cards" },
    
    // Layout
    { tipo: "banner", label: "Banner", icon: "🎯", categoria: "layout" },
    { tipo: "grid", label: "Grid", icon: "▦", categoria: "layout" },
    { tipo: "flex", label: "Flex", icon: "☰", categoria: "layout" },
    { tipo: "espaciador", label: "Espaciador", icon: "↕️", categoria: "layout" },
    { tipo: "separador", label: "Separador", icon: "—", categoria: "layout" },
    
    // Avanzado
    { tipo: "carrusel", label: "Carrusel", icon: "🎠", categoria: "avanzado" },
    { tipo: "slider", label: "Slider", icon: "🎢", categoria: "avanzado" },
    { tipo: "testimonial", label: "Testimonial", icon: "💬", categoria: "avanzado" },
    { tipo: "lista_iconos", label: "Lista Iconos", icon: "☑️", categoria: "avanzado" },
    { tipo: "tabla", label: "Tabla", icon: "📊", categoria: "avanzado" },
    { tipo: "accordion", label: "Acordeón", icon: "📋", categoria: "avanzado" },
    { tipo: "tabs", label: "Tabs", icon: "📑", categoria: "avanzado" },
    { tipo: "faq", label: "FAQ", icon: "❓", categoria: "avanzado" },
    { tipo: "timeline", label: "Timeline", icon: "⏱️", categoria: "avanzado" },
    { tipo: "social", label: "Redes", icon: "🌐", categoria: "avanzado" },
    { tipo: "contador", label: "Contador", icon: "🔢", categoria: "avanzado" },
    { tipo: "newsletter", label: "Newsletter", icon: "📧", categoria: "avanzado" },
    { tipo: "codigo", label: "Código", icon: "💻", categoria: "avanzado" },
    { tipo: "cta", label: "CTA", icon: "⚡", categoria: "avanzado" },
    { tipo: "boton", label: "Botón", icon: "🔘", categoria: "avanzado" },
  ];

  const tiposFiltrados = categoriaFiltro === "todos" 
    ? tiposBloque 
    : tiposBloque.filter(t => t.categoria === categoriaFiltro);

  return (
    <div className="space-y-4 sm:space-y-6 pb-24">
      {/* Header de la publicación */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Título de la publicación
              </label>
              <input
                type="text"
                value={publicacion.titulo}
                onChange={(e) =>
                  onChange({ ...publicacion, titulo: e.target.value })
                }
                placeholder="Escribe un título atractivo..."
                className="w-full text-xl sm:text-2xl font-bold border-b-2 border-gray-200 focus:border-blue-500 outline-none px-0 py-2 bg-transparent transition-colors text-gray-900"
              />
            </div>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 ${
                publicacion.estado === "publicado"
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-amber-100 text-amber-700 border border-amber-200"
              }`}
            >
              {publicacion.estado === "publicado" ? "● Publicado" : "○ Borrador"}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Descripción SEO
              </label>
              <textarea
                value={publicacion.meta?.descripcion || ""}
                onChange={(e) =>
                  onChange({
                    ...publicacion,
                    meta: { ...publicacion.meta, descripcion: e.target.value },
                  })
                }
                placeholder="Breve descripción para SEO..."
                className="w-full text-sm text-gray-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none bg-gray-50"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Categoría
              </label>
              <input
                type="text"
                value={publicacion.meta?.categoria || ""}
                onChange={(e) =>
                  onChange({
                    ...publicacion,
                    meta: { ...publicacion.meta, categoria: e.target.value },
                  })
                }
                placeholder="Ej: Noticias, Productos..."
                className="w-full text-sm text-gray-900 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={publicacion.destacado || false}
                onChange={(e) =>
                  onChange({ ...publicacion, destacado: e.target.checked })
                }
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Marcar como destacado</span>
            </label>
          </div>
        </div>
      </div>

      {/* Selector de bloques */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
            Agregar Bloque
          </h3>
          <span className="text-xs text-gray-500">{publicacion.bloques.length} bloques</span>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2 -mx-1 px-1">
          {categoriasBloques.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaFiltro(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                categoriaFiltro === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de bloques */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
          {tiposFiltrados.map(({ tipo, label, icon }) => (
            <button
              key={tipo}
              onClick={() => agregarBloque(tipo)}
              className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95 group"
              title={label}
            >
              <span className="text-lg sm:text-xl mb-1 group-hover:scale-110 transition-transform">
                {icon}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-600 text-center leading-tight font-medium">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lista de bloques */}
      <div className="space-y-3 sm:space-y-4">
        {publicacion.bloques.map((bloque, index) => (
          <BloqueEditor
            key={bloque.id}
            bloque={bloque}
            index={index}
            total={publicacion.bloques.length}
            isEditing={bloqueEditando === bloque.id}
            onToggleEdit={() => setBloqueEditando(bloqueEditando === bloque.id ? null : bloque.id)}
            onUpdate={(updates) => actualizarBloque(bloque.id, updates)}
            onDelete={() => eliminarBloque(bloque.id)}
            onMoveUp={() => moverBloque(bloque.id, "arriba")}
            onMoveDown={() => moverBloque(bloque.id, "abajo")}
            onDuplicate={() => duplicarBloque(bloque.id)}
          />
        ))}
        
        {publicacion.bloques.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-gray-500 text-sm">Agrega tu primer bloque para comenzar</p>
          </div>
        )}
      </div>

      {/* Botón guardar flotante */}
      <div className="fixed bottom-6 left-6 z-30">
        <button
          onClick={onGuardar}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 sm:px-6 py-3 rounded-full shadow-xl font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          <span className="hidden sm:inline">Guardar</span>
        </button>
      </div>
    </div>
  );
});

EditorBloques.displayName = "EditorBloques";

// ==========================================
// COMPONENTE: BLOQUE EDITOR INDIVIDUAL
// ==========================================

interface BloqueEditorProps {
  bloque: Bloque;
  index: number;
  total: number;
  isEditing: boolean;
  onToggleEdit: () => void;
  onUpdate: (updates: Partial<Bloque>) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: () => void;
}

const BloqueEditor: React.FC<BloqueEditorProps> = memo(({
  bloque,
  index,
  total,
  isEditing,
  onToggleEdit,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  onDuplicate,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-all ${
        isEditing
          ? "border-blue-500 shadow-lg ring-4 ring-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      {/* Header del bloque */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border-b border-gray-100 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 font-mono text-xs font-bold rounded-lg">
            {index + 1}
          </span>
          <div>
            <span className="font-semibold text-gray-700 capitalize text-sm sm:text-base">
              {bloque.tipo.replace(/_/g, " ")}
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 ml-2">
              ID: {bloque.id.slice(-6)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 flex-wrap">
          <button
            onClick={onMoveUp}
            disabled={index === 0}
            className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Mover arriba"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Mover abajo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="w-px h-6 bg-gray-200 mx-1" />
          <button
            onClick={onDuplicate}
            className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
            title="Duplicar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            onClick={onToggleEdit}
            className={`p-2 rounded-lg transition-colors ${
              isEditing ? "bg-blue-100 text-blue-700" : "hover:bg-blue-50 text-blue-600"
            }`}
            title={isEditing ? "Cerrar edición" : "Editar"}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
            title="Eliminar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Vista previa del bloque */}
      <div className="p-4 overflow-x-auto bg-gray-50/50">
        <VistaPreviaBloque bloque={bloque} />
      </div>

      {/* Panel de edición */}
      {isEditing && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <PanelEdicionBloque
            bloque={bloque}
            onChange={onUpdate}
          />
        </div>
      )}
    </div>
  );
});

BloqueEditor.displayName = "BloqueEditor";

// ==========================================
// COMPONENTE: VISTA PREVIA DE BLOQUE (EDITOR)
// ==========================================

const VistaPreviaBloque: React.FC<{ bloque: Bloque }> = memo(({ bloque }) => {
  const { tipo, contenido, estilos, configuracion } = bloque;

  const style: React.CSSProperties = {
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
    objectFit: estilos.objectFit,
    opacity: estilos.opacity ? parseFloat(estilos.opacity) : undefined,
    display: estilos.display,
    gridTemplateColumns: estilos.gridTemplateColumns,
    gap: estilos.gap,
    flexDirection: estilos.flexDirection,
    justifyContent: estilos.justifyContent,
    alignItems: estilos.alignItems,
    border: estilos.border,
    maxWidth: estilos.maxWidth,
    lineHeight: estilos.lineHeight,
    letterSpacing: estilos.letterSpacing,
    textTransform: estilos.textTransform,
  };

  switch (tipo) {
    case "titulo":
      return (
        <h1 style={style} className="break-words text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          {(contenido.texto as string) || "Título de ejemplo"}
        </h1>
      );
    case "subtitulo":
      return (
        <h2 style={style} className="break-words text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {(contenido.texto as string) || "Subtítulo de ejemplo"}
        </h2>
      );
    case "texto":
      return (
        <p style={style} className="break-words text-sm sm:text-base leading-relaxed text-gray-700">
          {(contenido.texto as string) || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>
      );
    case "imagen":
      return (
        <img
          src={(contenido.src as string) || "https://placehold.co/800x400/e2e8f0/64748b?text=Imagen"}
          alt={(contenido.alt as string) || "Imagen"}
          style={style}
          className="max-w-full h-auto rounded-lg"
        />
      );
    case "gif":
      return (
        <img
          src={(contenido.src as string) || "https://placehold.co/400x300/e2e8f0/64748b?text=GIF"}
          alt={(contenido.alt as string) || "GIF"}
          style={style}
          className="max-w-full h-auto rounded-lg"
        />
      );
    case "video":
      return (
        <div style={style} className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{(contenido.src as string) || "URL no configurada"}</span>
          </div>
        </div>
      );
    case "card_texto":
      return (
        <div style={style} className="rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-bold mb-2 text-base sm:text-lg text-gray-900">{(contenido.titulo as string) || "Card"}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{(contenido.texto as string) || "Contenido..."}</p>
        </div>
      );
    case "card_imagen":
      return (
        <div style={style} className="rounded-xl overflow-hidden">
          <img
            src={(contenido.src as string) || "https://placehold.co/400x300/e2e8f0/64748b?text=Card"}
            alt=""
            className="w-full h-32 sm:h-48 object-cover"
          />
        </div>
      );
    case "card_mixta":
      return (
        <div style={style} className="rounded-xl overflow-hidden bg-white shadow-sm">
          <img
            src={(contenido.imagen as string) || "https://placehold.co/400x200/e2e8f0/64748b?text=Imagen"}
            alt=""
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold mb-2 text-base sm:text-lg text-gray-900">{(contenido.titulo as string) || "Título"}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{(contenido.texto as string) || "Descripción..."}</p>
          </div>
        </div>
      );
    case "card_cta":
      return (
        <div style={style} className="rounded-xl p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{(contenido.titulo as string) || "¡Accede ahora!"}</h3>
          <p className="mb-4 text-sm opacity-90 text-gray-700 line-clamp-2">{(contenido.texto as string) || "Descripción"}</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
            {(contenido.textoBoton as string) || "Click aquí"}
          </button>
        </div>
      );
    case "card_links":
      return (
        <div style={style} className="rounded-xl p-4 bg-gray-50">
          <h3 className="font-bold mb-3 text-base sm:text-lg text-gray-900">{(contenido.titulo as string) || "Enlaces"}</h3>
          <ul className="space-y-1">
            {((contenido.links as Array<{texto: string, url: string}>) || []).slice(0, 3).map((link, i) => (
              <li key={i} className="text-blue-600 text-sm truncate">→ {link.texto}</li>
            ))}
            {((contenido.links as Array<unknown>) || []).length > 3 && (
              <li className="text-gray-500 text-sm">+{((contenido.links as Array<unknown>) || []).length - 3} más...</li>
            )}
          </ul>
        </div>
      );
    case "banner":
      return (
        <div style={style} className="rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900">{(contenido.titulo as string) || "Banner Hero"}</h2>
          <p className="text-sm sm:text-base opacity-90 text-gray-700">{(contenido.subtitulo as string) || "Subtítulo"}</p>
        </div>
      );
    case "cita":
      return (
        <blockquote style={style} className="border-l-4 border-blue-500 pl-4 italic text-sm sm:text-base text-gray-700">
          {(contenido.texto as string) || "Cita destacada..."}
        </blockquote>
      );
    case "espaciador":
      return <div style={{ height: estilos.height || "2rem" }} className="bg-gray-100 rounded" />;
    case "separador":
      return <hr style={style} className="border-gray-300" />;
    case "grid":
      return (
        <div style={style} className="min-h-[80px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm bg-gray-50">
          <div className="text-center">
            <div className="text-2xl mb-1">▦</div>
            Grid ({(configuracion.columns || 2)} cols)
          </div>
        </div>
      );
    case "flex":
      return (
        <div style={style} className="min-h-[80px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm bg-gray-50">
          <div className="text-center">
            <div className="text-2xl mb-1">☰</div>
            Flex ({estilos.flexDirection || "row"})
          </div>
        </div>
      );
    case "carrusel":
    case "slider":
      const slides = (configuracion.slides as Array<{imagen: string, titulo: string}>) || [];
      return (
        <div style={style} className="p-3 bg-gray-100 rounded-xl">
          <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
            <span className="text-lg">{tipo === "carrusel" ? "🎠" : "🎢"}</span>
            <span className="font-medium">{tipo === "carrusel" ? "Carrusel" : "Slider"}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {slides.slice(0, 3).map((slide, i) => (
              <div key={i} className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                {slide.imagen ? (
                  <img src={slide.imagen} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">Sin img</div>
                )}
              </div>
            ))}
            {slides.length === 0 && <span className="text-xs text-gray-400 py-4">Sin slides configurados</span>}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {slides.length} slides • Autoplay: {configuracion.autoplay ? "Sí" : "No"}
          </div>
        </div>
      );
    case "testimonial":
      return (
        <div style={style} className="rounded-xl p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
            <span className="text-lg">💬</span>
            <span className="font-medium">Testimonials</span>
          </div>
          <div className="text-xs text-gray-500">
            {((configuracion.testimonios as Array<unknown>) || []).length} testimonios configurados
          </div>
        </div>
      );
    case "lista_iconos":
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">☑️ Lista con Iconos</div>
          <div className="text-xs text-gray-500">
            {((configuracion.iconos as Array<unknown>) || []).length} items
          </div>
        </div>
      );
    case "tabla":
      return (
        <div style={style} className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-xs">
            <tbody>
              {((configuracion.filas as Array<string[]>) || []).slice(0, 2).map((fila, i) => (
                <tr key={i} className={i === 0 ? "bg-gray-100 font-semibold" : "border-t"}>
                  {fila.slice(0, 3).map((celda, j) => (
                    <td key={j} className="p-2 border-r last:border-r-0 text-gray-700">{celda}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "accordion":
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">📋 Acordeón</div>
          <div className="text-xs text-gray-500">
            {((configuracion.items as Array<unknown>) || []).length} items
          </div>
        </div>
      );
    case "tabs":
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">📑 Tabs</div>
          <div className="text-xs text-gray-500">
            {((configuracion.tabs as Array<unknown>) || []).length} pestañas
          </div>
        </div>
      );
    case "faq":
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">❓ FAQ</div>
          <div className="text-xs text-gray-500">
            {((configuracion.preguntas as Array<unknown>) || []).length} preguntas
          </div>
        </div>
      );
    case "timeline":
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">⏱️ Timeline</div>
          <div className="text-xs text-gray-500">
            {((configuracion.eventos as Array<unknown>) || []).length} eventos
          </div>
        </div>
      );
    case "social":
      return (
        <div style={style} className="p-4">
          <div className="flex gap-3 justify-center flex-wrap">
            {((configuracion.redes as Array<{icono: string}>) || []).slice(0, 4).map((red, i) => (
              <span key={i} className="text-2xl sm:text-3xl">{red.icono}</span>
            ))}
            {((configuracion.redes as Array<unknown>) || []).length > 4 && (
              <span className="text-gray-400 text-sm self-center">+{((configuracion.redes as Array<unknown>) || []).length - 4}</span>
            )}
          </div>
        </div>
      );
    case "contador":
      return (
        <div style={style} className="p-4">
          <div className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
            {(configuracion.prefijo || "")}
            {(contenido.valor as number) || 0}
            {(configuracion.sufijo || "")}
          </div>
          {(contenido.label as string) && (
            <div className="text-center text-gray-500 mt-1 text-xs sm:text-sm">{(contenido.label as string)}</div>
          )}
        </div>
      );
    case "newsletter":
      return (
        <div style={style} className="rounded-xl p-4">
          <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{(contenido.titulo as string) || "Newsletter"}</h3>
          <p className="mb-3 text-xs sm:text-sm opacity-80 text-gray-700">{(contenido.descripcion as string) || "Suscríbete"}</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 px-3 py-2 border rounded-lg text-xs sm:text-sm bg-white/50 text-gray-900" disabled />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium">Suscribir</button>
          </div>
        </div>
      );
    case "codigo":
      return (
        <pre style={{...style, background: "#1f2937", color: "#f9fafb"}} className="p-4 rounded-xl overflow-x-auto text-xs sm:text-sm font-mono">
          <code className="break-all text-gray-100">{(contenido.codigo as string) || "// Código..."}</code>
        </pre>
      );
    case "cta":
      return (
        <div style={style} className="rounded-xl p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{(contenido.titulo as string) || "¡Llama a la acción!"}</h3>
          <p className="mb-4 text-xs sm:text-sm opacity-90 text-gray-700">{(contenido.texto as string) || "Descripción"}</p>
          <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold text-xs sm:text-sm shadow-lg">
            {(contenido.boton as string) || "Comenzar"}
          </button>
        </div>
      );
    case "galeria":
      const imagenes = (contenido.imagenes as Array<{src: string}>) || [];
      return (
        <div style={style} className="p-4 bg-gray-50 rounded-xl">
          <div className="text-gray-600 mb-2 text-sm font-medium">🖼️ Galería ({imagenes.length} imgs)</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {imagenes.slice(0, 4).map((img, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {img.src ? (
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">Sin img</div>
                )}
              </div>
            ))}
            {imagenes.length > 4 && (
              <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 font-medium">
                +{imagenes.length - 4}
              </div>
            )}
          </div>
        </div>
      );
    case "boton":
      return (
        <div style={style} className="p-4 text-center">
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm shadow-md">
            {(contenido.texto as string) || "Botón"}
          </button>
        </div>
      );
    default:
      return (
        <div style={style} className="p-4 bg-gray-100 rounded-xl text-gray-600 text-sm">
          Bloque: {tipo}
        </div>
      );
  }
});

VistaPreviaBloque.displayName = "VistaPreviaBloque";

// ==========================================
// COMPONENTE: PANEL DE EDICIÓN (OPTIMIZADO - SIN CIERRE DE TECLADO)
// ==========================================

const PanelEdicionBloque: React.FC<{
  bloque: Bloque;
  onChange: (updates: Partial<Bloque>) => void;
}> = memo(({ bloque, onChange }) => {
  const { tipo, contenido, estilos, configuracion } = bloque;
  const [activeTab, setActiveTab] = useState<"contenido" | "estilos" | "config">("contenido");

  // Usar refs para evitar re-renders durante la escritura
  const contenidoRef = useRef(contenido);
  const estilosRef = useRef(estilos);
  const configRef = useRef(configuracion);

  useEffect(() => {
    contenidoRef.current = contenido;
    estilosRef.current = estilos;
    configRef.current = configuracion;
  }, [contenido, estilos, configuracion]);

  const updateContenido = useCallback((key: string, value: unknown) => {
    contenidoRef.current = { ...contenidoRef.current, [key]: value };
    onChange({ contenido: contenidoRef.current });
  }, [onChange]);

  const updateEstilo = useCallback((key: keyof EstilosBloque, value: string) => {
    estilosRef.current = { ...estilosRef.current, [key]: value };
    onChange({ estilos: estilosRef.current });
  }, [onChange]);

  const updateConfig = useCallback((key: keyof ConfiguracionBloque, value: unknown) => {
    configRef.current = { ...configRef.current, [key]: value };
    onChange({ configuracion: configRef.current });
  }, [onChange]);

  const updateArrayItem = useCallback((arrayKey: keyof ConfiguracionBloque, index: number, item: unknown) => {
    const currentArray = (configRef.current[arrayKey] as Array<unknown>) || [];
    const newArray = [...currentArray];
    newArray[index] = item;
    configRef.current = { ...configRef.current, [arrayKey]: newArray };
    onChange({ configuracion: configRef.current });
  }, [onChange]);

  const addArrayItem = useCallback((arrayKey: keyof ConfiguracionBloque, defaultItem: unknown) => {
    const currentArray = (configRef.current[arrayKey] as Array<unknown>) || [];
    configRef.current = { ...configRef.current, [arrayKey]: [...currentArray, defaultItem] };
    onChange({ configuracion: configRef.current });
  }, [onChange]);

  const removeArrayItem = useCallback((arrayKey: keyof ConfiguracionBloque, index: number) => {
    const currentArray = (configRef.current[arrayKey] as Array<unknown>) || [];
    configRef.current = { ...configRef.current, [arrayKey]: currentArray.filter((_, i) => i !== index) };
    onChange({ configuracion: configRef.current });
  }, [onChange]);

  // Componente de input estable que no causa re-renders
  const StableInput = memo(({ 
    label, 
    value, 
    onChange, 
    type = "text", 
    placeholder = "",
    multiline = false,
    rows = 3
  }: { 
    label: string; 
    value: string | number; 
    onChange: (val: string) => void; 
    type?: string;
    placeholder?: string;
    multiline?: boolean;
    rows?: number;
  }) => {
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const [localValue, setLocalValue] = useState(String(value));
    const isFocusedRef = useRef(false);

    useEffect(() => {
      if (!isFocusedRef.current && String(value) !== localValue) {
        setLocalValue(String(value));
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
    };

    const handleBlur = () => {
      isFocusedRef.current = false;
      onChange(localValue);
    };

    const handleFocus = () => {
      isFocusedRef.current = true;
    };

    const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900";

    return (
      <div className="mb-3">
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
          {label}
        </label>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder={placeholder}
            rows={rows}
            className={`${inputClass} resize-y min-h-[80px]`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={type}
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder={placeholder}
            className={inputClass}
          />
        )}
      </div>
    );
  });

  StableInput.displayName = "StableInput";

  // Renderizar campos específicos por tipo
  const renderContenidoFields = () => {
    switch (tipo) {
      case "titulo":
      case "subtitulo":
        return (
          <StableInput
            label="Texto"
            value={(contenido.texto as string) || ""}
            onChange={(v) => updateContenido("texto", v)}
            placeholder="Escribe el texto..."
          />
        );
      
      case "texto":
        return (
          <StableInput
            label="Contenido"
            value={(contenido.texto as string) || ""}
            onChange={(v) => updateContenido("texto", v)}
            multiline
            rows={6}
            placeholder="Escribe el contenido..."
          />
        );
      
      case "imagen":
      case "gif":
        return (
          <div className="space-y-3">
            <StableInput
              label="URL de la imagen"
              value={(contenido.src as string) || ""}
              onChange={(v) => updateContenido("src", v)}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <StableInput
              label="Texto alternativo (ALT)"
              value={(contenido.alt as string) || ""}
              onChange={(v) => updateContenido("alt", v)}
              placeholder="Descripción de la imagen"
            />
            {tipo === "imagen" && (
              <StableInput
                label="Pie de foto"
                value={(contenido.pie as string) || ""}
                onChange={(v) => updateContenido("pie", v)}
              />
            )}
            <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer">
              <input
                type="checkbox"
                checked={configuracion.lazyLoading || false}
                onChange={(e) => updateConfig("lazyLoading", e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Lazy loading</span>
            </label>
          </div>
        );
      
      case "video":
        return (
          <div className="space-y-3">
            <StableInput
              label="URL del Video"
              value={(contenido.src as string) || ""}
              onChange={(v) => updateContenido("src", v)}
              placeholder="https://youtube.com/watch?v=... o URL directa"
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Aspect Ratio</label>
                <select
                  value={configuracion.aspectRatio || "16/9"}
                  onChange={(e) => updateConfig("aspectRatio", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
                >
                  <option value="16/9">16:9</option>
                  <option value="4/3">4:3</option>
                  <option value="1/1">1:1</option>
                  <option value="9/16">9:16 (Vertical)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={configuracion.autoplay || false} onChange={(e) => updateConfig("autoplay", e.target.checked)} className="rounded" />
                  Autoplay
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={configuracion.loop || false} onChange={(e) => updateConfig("loop", e.target.checked)} className="rounded" />
                  Loop
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={configuracion.muted || false} onChange={(e) => updateConfig("muted", e.target.checked)} className="rounded" />
                  Muted
                </label>
              </div>
            </div>
          </div>
        );
      
      case "card_texto":
      case "card_cta":
        return (
          <div className="space-y-3">
            <StableInput
              label="Título"
              value={(contenido.titulo as string) || ""}
              onChange={(v) => updateContenido("titulo", v)}
            />
            <StableInput
              label="Texto"
              value={(contenido.texto as string) || ""}
              onChange={(v) => updateContenido("texto", v)}
              multiline
              rows={3}
            />
            {tipo === "card_cta" && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <StableInput
                    label="Texto del botón"
                    value={(contenido.textoBoton as string) || ""}
                    onChange={(v) => updateContenido("textoBoton", v)}
                  />
                  <StableInput
                    label="URL del enlace"
                    value={(contenido.enlace as string) || ""}
                    onChange={(v) => updateContenido("enlace", v)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Tipo de botón</label>
                  <select
                    value={configuracion.tipoBoton || "primario"}
                    onChange={(e) => updateConfig("tipoBoton", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
                  >
                    <option value="primario">Primario</option>
                    <option value="secundario">Secundario</option>
                    <option value="outline">Outline</option>
                    <option value="ghost">Ghost</option>
                  </select>
                </div>
              </>
            )}
          </div>
        );
      
      case "card_imagen":
        return (
          <div className="space-y-3">
            <StableInput
              label="URL de la imagen"
              value={(contenido.src as string) || ""}
              onChange={(v) => updateContenido("src", v)}
            />
            <StableInput
              label="Texto alternativo"
              value={(contenido.alt as string) || ""}
              onChange={(v) => updateContenido("alt", v)}
            />
          </div>
        );
      
      case "card_mixta":
        return (
          <div className="space-y-3">
            <StableInput
              label="URL de la imagen"
              value={(contenido.imagen as string) || ""}
              onChange={(v) => updateContenido("imagen", v)}
            />
            <StableInput
              label="Título"
              value={(contenido.titulo as string) || ""}
              onChange={(v) => updateContenido("titulo", v)}
            />
            <StableInput
              label="Texto"
              value={(contenido.texto as string) || ""}
              onChange={(v) => updateContenido("texto", v)}
              multiline
              rows={3}
            />
          </div>
        );
      
      case "card_links":
        return (
          <div className="space-y-3">
            <StableInput
              label="Título de la card"
              value={(contenido.titulo as string) || ""}
              onChange={(v) => updateContenido("titulo", v)}
            />
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-600 uppercase">Enlaces</label>
              {((contenido.links as Array<{texto: string, url: string}>) || []).map((link, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-2 p-3 bg-white rounded-lg border border-gray-200">
                  <input
                    type="text"
                    placeholder="Texto"
                    defaultValue={link.texto}
                    onBlur={(e) => {
                      const links = [...((contenido.links as Array<{texto: string, url: string}>) || [])];
                      links[index] = { ...link, texto: e.target.value };
                      updateContenido("links", links);
                    }}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    defaultValue={link.url}
                    onBlur={(e) => {
                      const links = [...((contenido.links as Array<{texto: string, url: string}>) || [])];
                      links[index] = { ...link, url: e.target.value };
                      updateContenido("links", links);
                    }}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900"
                  />
                  <button
                    onClick={() => {
                      const links = ((contenido.links as Array<{texto: string, url: string}>) || []).filter((_, i) => i !== index);
                      updateContenido("links", links);
                    }}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  const links = [...((contenido.links as Array<{texto: string, url: string}>) || []), { texto: "Nuevo enlace", url: "#" }];
                  updateContenido("links", links);
                }}
                className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-300"
              >
                + Agregar enlace
              </button>
            </div>
          </div>
        );
      
      case "banner":
        return (
          <div className="space-y-3">
            <StableInput
              label="Título"
              value={(contenido.titulo as string) || ""}
              onChange={(v) => updateContenido("titulo", v)}
            />
            <StableInput
              label="Subtítulo"
              value={(contenido.subtitulo as string) || ""}
              onChange={(v) => updateContenido("subtitulo", v)}
            />
            <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
              <input
                type="checkbox"
                checked={configuracion.fullWidth || false}
                onChange={(e) => updateConfig("fullWidth", e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-gray-700">Ancho completo</span>
            </label>
          </div>
        );
      
      case "cita":
        return (
          <div className="space-y-3">
            <StableInput
              label="Texto de la cita"
              value={(contenido.texto as string) || ""}
              onChange={(v) => updateContenido("texto", v)}
              multiline
              rows={4}
            />
            <StableInput
              label="Autor"
              value={(contenido.autor as string) || ""}
              onChange={(v) => updateContenido("autor", v)}
              placeholder="Nombre del autor"
            />
          </div>
        );
      
      case "espaciador":
        return (
          <StableInput
            label="Altura"
            value={estilos.height || "2rem"}
            onChange={(v) => updateEstilo("height", v)}
            placeholder="2rem, 50px, 100vh"
          />
        );
      
      case "carrusel":
      case "slider":
        return (
          <div className="space-y-4">
            <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
              <input
                type="checkbox"
                checked={configuracion.autoplay || false}
                onChange={(e) => updateConfig("autoplay", e.target.checked)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm font-medium text-gray-700">Autoplay</span>
            </label>
            
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Slides</label>
              <div className="space-y-3">
                {((configuracion.slides as Array<{imagen: string, titulo: string, texto: string}>) || []).map((slide, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm text-gray-700">Slide {index + 1}</span>
                      <button
                        onClick={() => removeArrayItem("slides", index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="URL imagen"
                        defaultValue={slide.imagen}
                        onBlur={(e) => updateArrayItem("slides", index, { ...slide, imagen: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900"
                      />
                      <input
                        type="text"
                        placeholder="Título"
                        defaultValue={slide.titulo}
                        onBlur={(e) => updateArrayItem("slides", index, { ...slide, titulo: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900"
                      />
                      <textarea
                        placeholder="Texto"
                        defaultValue={slide.texto}
                        onBlur={(e) => updateArrayItem("slides", index, { ...slide, texto: e.target.value })}
                        rows={2}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none text-gray-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => addArrayItem("slides", { imagen: "", titulo: "Nuevo slide", texto: "" })}
                className="mt-3 w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-300"
              >
                + Agregar slide
              </button>
            </div>
          </div>
        );
      
      case "testimonial":
        return (
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Testimonios</label>
            {((configuracion.testimonios as Array<any>) || []).map((test, index) => (
              <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm text-gray-700">Testimonio {index + 1}</span>
                  <button onClick={() => removeArrayItem("testimonios", index)} className="text-red-600 text-sm">Eliminar</button>
                </div>
                <div className="space-y-2">
                  <input type="text" placeholder="Nombre" defaultValue={test.nombre} onBlur={(e) => updateArrayItem("testimonios", index, { ...test, nombre: e.target.value })} className="w-full border rounded px-3 py-2 text-sm text-gray-900" />
                  <input type="text" placeholder="Cargo" defaultValue={test.cargo} onBlur={(e) => updateArrayItem("testimonios", index, { ...test, cargo: e.target.value })} className="w-full border rounded px-3 py-2 text-sm text-gray-900" />
                  <input type="text" placeholder="URL imagen" defaultValue={test.imagen || ""} onBlur={(e) => updateArrayItem("testimonios", index, { ...test, imagen: e.target.value })} className="w-full border rounded px-3 py-2 text-sm text-gray-900" />
                  <textarea placeholder="Texto" defaultValue={test.texto} onBlur={(e) => updateArrayItem("testimonios", index, { ...test, texto: e.target.value })} rows={2} className="w-full border rounded px-3 py-2 text-sm resize-none text-gray-900" />
                </div>
              </div>
            ))}
            <button onClick={() => addArrayItem("testimonios", { nombre: "Nombre", cargo: "Cargo", texto: "Texto" })} className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-300">+ Agregar testimonio</button>
          </div>
        );
      
      case "lista_iconos":
        return (
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Items</label>
            {((configuracion.iconos as Array<any>) || []).map((item, index) => (
              <div key={index} className="flex gap-2 p-2 bg-white rounded-lg border border-gray-200">
                <input type="text" placeholder="Icono" defaultValue={item.icono} onBlur={(e) => updateArrayItem("iconos", index, { ...item, icono: e.target.value })} className="w-16 border rounded px-2 py-2 text-center text-lg text-gray-900" />
                <input type="text" placeholder="Texto" defaultValue={item.texto} onBlur={(e) => updateArrayItem("iconos", index, { ...item, texto: e.target.value })} className="flex-1 border rounded px-3 py-2 text-sm text-gray-900" />
                <button onClick={() => removeArrayItem("iconos", index)} className="px-2 text-red-600 hover:bg-red-50 rounded">✕</button>
              </div>
            ))}
            <button onClick={() => addArrayItem("iconos", { icono: "✓", texto: "Nuevo item" })} className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-300">+ Agregar item</button>
          </div>
        );
      
      case "contador":
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <StableInput label="Valor final" type="number" value={(contenido.valor as number) || 0} onChange={(v) => updateContenido("valor", parseInt(v) || 0)} />
              <StableInput label="Duración (ms)" type="number" value={configuracion.duracion || 2000} onChange={(v) => updateConfig("duracion", parseInt(v) || 2000)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <StableInput label="Prefijo" value={configuracion.prefijo || ""} onChange={(v) => updateConfig("prefijo", v)} placeholder="$" />
              <StableInput label="Sufijo" value={configuracion.sufijo || ""} onChange={(v) => updateConfig("sufijo", v)} placeholder="+" />
            </div>
            <StableInput label="Label" value={(contenido.label as string) || ""} onChange={(v) => updateContenido("label", v)} placeholder="Clientes satisfechos" />
          </div>
        );
      
      case "newsletter":
        return (
          <div className="space-y-3">
            <StableInput label="Título" value={(contenido.titulo as string) || ""} onChange={(v) => updateContenido("titulo", v)} />
            <StableInput label="Descripción" value={(contenido.descripcion as string) || ""} onChange={(v) => updateContenido("descripcion", v)} multiline rows={3} />
            <div className="grid grid-cols-2 gap-3">
              <StableInput label="Placeholder" value={(contenido.placeholder as string) || "tu@email.com"} onChange={(v) => updateContenido("placeholder", v)} />
              <StableInput label="Texto botón" value={(contenido.textoBoton as string) || "Suscribirse"} onChange={(v) => updateContenido("textoBoton", v)} />
            </div>
          </div>
        );
      
      case "codigo":
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Lenguaje</label>
              <select
                value={(contenido.lenguaje as string) || "javascript"}
                onChange={(e) => updateContenido("lenguaje", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="python">Python</option>
                <option value="bash">Bash</option>
                <option value="json">JSON</option>
                <option value="sql">SQL</option>
              </select>
            </div>
            <StableInput label="Código" value={(contenido.codigo as string) || ""} onChange={(v) => updateContenido("codigo", v)} multiline rows={8} />
          </div>
        );
      
      case "cta":
        return (
          <div className="space-y-3">
            <StableInput label="Título" value={(contenido.titulo as string) || ""} onChange={(v) => updateContenido("titulo", v)} />
            <StableInput label="Texto" value={(contenido.texto as string) || ""} onChange={(v) => updateContenido("texto", v)} multiline rows={3} />
            <div className="grid grid-cols-2 gap-3">
              <StableInput label="Texto botón" value={(contenido.boton as string) || ""} onChange={(v) => updateContenido("boton", v)} />
              <StableInput label="URL" value={(contenido.url as string) || ""} onChange={(v) => updateContenido("url", v)} />
            </div>
          </div>
        );
      
      case "galeria":
        return (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Columnas</label>
              <input
                type="number"
                min={1}
                max={6}
                value={configuracion.columns || 3}
                onChange={(e) => updateConfig("columns", parseInt(e.target.value) || 3)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900"
              />
            </div>
            <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
              <input type="checkbox" checked={configuracion.lightbox || false} onChange={(e) => updateConfig("lightbox", e.target.checked)} className="rounded" />
              <span className="text-sm text-gray-700">Activar lightbox</span>
            </label>
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-600 uppercase">Imágenes</label>
              {((contenido.imagenes as Array<any>) || []).map((img, index) => (
                <div key={index} className="flex gap-2 p-2 bg-white rounded-lg border border-gray-200">
                  <input type="text" placeholder="URL" defaultValue={img.src} onBlur={(e) => {
                    const imgs = [...((contenido.imagenes as Array<any>) || [])];
                    imgs[index] = { ...img, src: e.target.value };
                    updateContenido("imagenes", imgs);
                  }} className="flex-1 border rounded px-3 py-2 text-sm text-gray-900" />
                  <input type="text" placeholder="Alt" defaultValue={img.alt} onBlur={(e) => {
                    const imgs = [...((contenido.imagenes as Array<any>) || [])];
                    imgs[index] = { ...img, alt: e.target.value };
                    updateContenido("imagenes", imgs);
                  }} className="w-24 border rounded px-3 py-2 text-sm text-gray-900" />
                  <button onClick={() => {
                    const imgs = ((contenido.imagenes as Array<any>) || []).filter((_, i) => i !== index);
                    updateContenido("imagenes", imgs);
                  }} className="px-2 text-red-600 hover:bg-red-50 rounded">✕</button>
                </div>
              ))}
              <button onClick={() => {
                const imgs = [...((contenido.imagenes as Array<any>) || []), { src: "", alt: "" }];
                updateContenido("imagenes", imgs);
              }} className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-dashed border-blue-300">+ Agregar imagen</button>
            </div>
          </div>
        );
      
      case "boton":
        return (
          <div className="space-y-3">
            <StableInput label="Texto del botón" value={(contenido.texto as string) || ""} onChange={(v) => updateContenido("texto", v)} />
            <StableInput label="URL" value={(contenido.url as string) || ""} onChange={(v) => updateContenido("url", v)} />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Variante</label>
                <select value={configuracion.variante || "solid"} onChange={(e) => updateConfig("variante", e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm bg-white text-gray-900">
                  <option value="solid">Sólido</option>
                  <option value="outline">Outline</option>
                  <option value="ghost">Ghost</option>
                  <option value="link">Link</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Tamaño</label>
                <select value={configuracion.tamaño || "md"} onChange={(e) => updateConfig("tamaño", e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm bg-white text-gray-900">
                  <option value="sm">Pequeño</option>
                  <option value="md">Mediano</option>
                  <option value="lg">Grande</option>
                </select>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-4 bg-gray-100 rounded-lg text-gray-600 text-sm text-center">
            Configuración básica disponible en la pestaña "Estilos"
          </div>
        );
    }
  };

  // Renderizar pestaña de estilos
  const renderEstilosFields = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Color texto</label>
        <div className="flex gap-2">
          <input
            type="color"
            value={estilos.color || "#000000"}
            onChange={(e) => updateEstilo("color", e.target.value)}
            className="w-12 h-10 rounded-lg cursor-pointer border border-gray-300"
          />
          <input
            type="text"
            value={estilos.color || ""}
            onChange={(e) => updateEstilo("color", e.target.value)}
            placeholder="#000000"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Color fondo</label>
        <div className="flex gap-2">
          <input
            type="color"
            value={estilos.background || "#ffffff"}
            onChange={(e) => updateEstilo("background", e.target.value)}
            className="w-12 h-10 rounded-lg cursor-pointer border border-gray-300"
          />
          <input
            type="text"
            value={estilos.background || ""}
            onChange={(e) => updateEstilo("background", e.target.value)}
            placeholder="transparent"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900"
          />
        </div>
      </div>

      <StableInput label="Padding" value={estilos.padding || ""} onChange={(v) => updateEstilo("padding", v)} placeholder="1rem, 16px" />
      <StableInput label="Margin" value={estilos.margin || ""} onChange={(v) => updateEstilo("margin", v)} placeholder="0" />
      <StableInput label="Border Radius" value={estilos.borderRadius || ""} onChange={(v) => updateEstilo("borderRadius", v)} placeholder="0.5rem" />
      <StableInput label="Sombra" value={estilos.boxShadow || ""} onChange={(v) => updateEstilo("boxShadow", v)} placeholder="0 4px 6px rgba(0,0,0,0.1)" />
      
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Alineación texto</label>
        <select
          value={estilos.textAlign || "left"}
          onChange={(e) => updateEstilo("textAlign", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
        >
          <option value="left">Izquierda</option>
          <option value="center">Centro</option>
          <option value="right">Derecha</option>
          <option value="justify">Justificado</option>
        </select>
      </div>

      <StableInput label="Tamaño fuente" value={estilos.fontSize || ""} onChange={(v) => updateEstilo("fontSize", v)} placeholder="1rem, 16px" />
      <StableInput label="Peso fuente" value={estilos.fontWeight || ""} onChange={(v) => updateEstilo("fontWeight", v)} placeholder="400, 700" />
      <StableInput label="Altura línea" value={estilos.lineHeight || ""} onChange={(v) => updateEstilo("lineHeight", v)} placeholder="1.5" />
      <StableInput label="Espaciado letras" value={estilos.letterSpacing || ""} onChange={(v) => updateEstilo("letterSpacing", v)} placeholder="0" />
      
      <div>
        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Transform</label>
        <select
          value={estilos.textTransform || "none"}
          onChange={(e) => updateEstilo("textTransform", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
        >
          <option value="none">Normal</option>
          <option value="uppercase">MAYÚSCULAS</option>
          <option value="lowercase">minúsculas</option>
          <option value="capitalize">Capitalizar</option>
        </select>
      </div>

      <StableInput label="Ancho máximo" value={estilos.maxWidth || ""} onChange={(v) => updateEstilo("maxWidth", v)} placeholder="100%, 1200px" />
    </div>
  );

  // Renderizar pestaña de configuración
  const renderConfigFields = () => {
    const configs: JSX.Element[] = [];

    if (tipo === "grid" || tipo === "galeria") {
      configs.push(
        <div key="cols" className="mb-4">
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Columnas (desktop)</label>
          <input
            type="number"
            min={1}
            max={12}
            value={configuracion.columns || 2}
            onChange={(e) => updateConfig("columns", parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900"
          />
        </div>
      );
    }

    if (tipo === "flex") {
      configs.push(
        <div key="flex" className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Dirección</label>
            <select
              value={estilos.flexDirection || "row"}
              onChange={(e) => updateEstilo("flexDirection", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
            >
              <option value="row">Fila</option>
              <option value="column">Columna</option>
              <option value="row-reverse">Fila inversa</option>
              <option value="column-reverse">Columna inversa</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Justify Content</label>
            <select
              value={estilos.justifyContent || "flex-start"}
              onChange={(e) => updateEstilo("justifyContent", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
            >
              <option value="flex-start">Inicio</option>
              <option value="center">Centro</option>
              <option value="flex-end">Final</option>
              <option value="space-between">Espacio entre</option>
              <option value="space-around">Espacio alrededor</option>
              <option value="space-evenly">Espacio uniforme</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Align Items</label>
            <select
              value={estilos.alignItems || "stretch"}
              onChange={(e) => updateEstilo("alignItems", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-900"
            >
              <option value="stretch">Estirar</option>
              <option value="flex-start">Inicio</option>
              <option value="center">Centro</option>
              <option value="flex-end">Final</option>
              <option value="baseline">Línea base</option>
            </select>
          </div>
          <StableInput label="Gap" value={estilos.gap || ""} onChange={(v) => updateEstilo("gap", v)} placeholder="1rem" />
        </div>
      );
    }

    if (tipo === "carrusel" || tipo === "slider") {
      configs.push(
        <div key="carousel" className="space-y-3">
          <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" checked={configuracion.mostrarDots !== false} onChange={(e) => updateConfig("mostrarDots", e.target.checked)} className="rounded" />
            <span className="text-sm text-gray-700">Mostrar dots</span>
          </label>
          <label className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" checked={configuracion.mostrarFlechas !== false} onChange={(e) => updateConfig("mostrarFlechas", e.target.checked)} className="rounded" />
            <span className="text-sm text-gray-700">Mostrar flechas</span>
          </label>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1.5">Intervalo (ms)</label>
            <input
              type="number"
              value={configuracion.intervalo || 5000}
              onChange={(e) => updateConfig("intervalo", parseInt(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900"
            />
          </div>
        </div>
      );
    }

    if (configs.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500 text-sm">
          No hay configuraciones adicionales para este tipo de bloque
        </div>
      );
    }

    return <div className="space-y-4">{configs}</div>;
  };

  return (
    <div className="space-y-4">
      {/* Tabs de navegación */}
      <div className="flex gap-1 p-1 bg-gray-200 rounded-lg">
        {[
          { id: "contenido", label: "Contenido", icon: "📝" },
          { id: "estilos", label: "Estilos", icon: "🎨" },
          { id: "config", label: "Config", icon: "⚙️" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="min-h-[200px]">
        {activeTab === "contenido" && renderContenidoFields()}
        {activeTab === "estilos" && renderEstilosFields()}
        {activeTab === "config" && renderConfigFields()}
      </div>
    </div>
  );
});

PanelEdicionBloque.displayName = "PanelEdicionBloque";

// ==========================================
// COMPONENTE: VISTA PREVIA (RESPONSIVE)
// ==========================================

export const VistaPrevia: React.FC<VistaPreviaProps> = memo(({
  publicacion,
  modo,
}) => {
  const [modoActual, setModoActual] = useState(modo);

  if (!publicacion) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <div className="text-4xl mb-3">👁️</div>
          <p>Selecciona una publicación para ver la vista previa</p>
        </div>
      </div>
    );
  }

  const containerClasses = {
    desktop: "w-full max-w-6xl",
    tablet: "w-full max-w-2xl",
    mobile: "w-full max-w-[375px]",
  };

  const frameClasses = {
    desktop: "border-0 shadow-2xl",
    tablet: "border-[12px] border-gray-800 rounded-[2rem]",
    mobile: "border-[12px] border-gray-800 rounded-[2.5rem]",
  };

  return (
    <div className="bg-gray-100 p-2 sm:p-4 min-h-screen">
      {/* Selector de dispositivo */}
      <div className="mb-4 flex justify-center gap-2 flex-wrap sticky top-4 z-10 bg-white/80 backdrop-blur p-2 rounded-xl shadow-sm">
        {([
          { id: "desktop", label: "Desktop", icon: "🖥️", width: "100%" },
          { id: "tablet", label: "Tablet", icon: "📱", width: "768px" },
          { id: "mobile", label: "Mobile", icon: "📲", width: "375px" },
        ] as const).map((m) => (
          <button
            key={m.id}
            onClick={() => setModoActual(m.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              modoActual === m.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <span>{m.icon}</span>
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        ))}
      </div>

      {/* Marco del dispositivo */}
      <div className={`${containerClasses[modoActual]} mx-auto transition-all duration-500`}>
        <div className={`bg-white overflow-hidden ${frameClasses[modoActual]}`}>
          {modoActual !== "desktop" && (
            <div className="bg-gray-800 h-6 flex items-center justify-center">
              <div className="w-20 h-4 bg-gray-700 rounded-full" />
            </div>
          )}
          
          <div className="p-4 sm:p-6 min-h-[400px] sm:min-h-[600px]">
            {/* Header de la publicación */}
            <header className="mb-6 pb-4 border-b border-gray-200">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {publicacion.titulo}
              </h1>
              {publicacion.meta?.descripcion && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {publicacion.meta.descripcion}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded-full">
                  {new Date(publicacion.fechaModificacion).toLocaleDateString("es-CL")}
                </span>
                {publicacion.meta?.categoria && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {publicacion.meta.categoria}
                  </span>
                )}
                {publicacion.destacado && (
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full">
                    ⭐ Destacado
                  </span>
                )}
              </div>
            </header>

            {/* Bloques */}
            <div className="space-y-4 sm:space-y-6">
              {publicacion.bloques.map((bloque) => (
                <VistaPreviaBloque key={bloque.id} bloque={bloque} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VistaPrevia.displayName = "VistaPrevia";

// ==========================================
// COMPONENTE: LISTA DE PUBLICACIONES
// ==========================================

export const ListaPublicaciones: React.FC<{
  publicaciones: Publicacion[];
  onSeleccionar: (id: string) => void;
  onEliminar: (id: string) => void;
  onDuplicar: (id: string) => void;
  onCambiarEstado: (id: string, estado: "borrador" | "publicado") => void;
}> = memo(({ publicaciones, onSeleccionar, onEliminar, onDuplicar, onCambiarEstado }) => {
  const [filtro, setFiltro] = useState<"todos" | "publicado" | "borrador">("todos");
  const [busqueda, setBusqueda] = useState("");

  const publicacionesFiltradas = publicaciones
    .filter(p => filtro === "todos" || p.estado === filtro)
    .filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
                 p.meta?.descripcion?.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Filtros y búsqueda */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar publicaciones..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {(["todos", "publicado", "borrador"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  filtro === f
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f === "todos" ? "Todos" : f === "publicado" ? "Publicados" : "Borradores"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de publicaciones */}
      <div className="grid gap-4">
        {publicacionesFiltradas.map((pub) => (
          <div
            key={pub.id}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 flex-1">
                    {pub.titulo || "Sin título"}
                  </h3>
                  <span
                    className={`flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold ${
                      pub.estado === "publicado"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {pub.estado === "publicado" ? "● Publicado" : "○ Borrador"}
                  </span>
                </div>
                
                {pub.meta?.descripcion && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {pub.meta.descripcion}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(pub.fechaModificacion).toLocaleDateString("es-CL")}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    {pub.bloques.length} bloques
                  </span>
                  {pub.destacado && (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                      ⭐ Destacado
                    </span>
                  )}
                  {pub.meta?.categoria && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                      {pub.meta.categoria}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSeleccionar(pub.id)}
                  className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar
                </button>
                <button
                  onClick={() => onCambiarEstado(pub.id, pub.estado === "publicado" ? "borrador" : "publicado")}
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2 ${
                    pub.estado === "publicado"
                      ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {pub.estado === "publicado" ? "Despublicar" : "Publicar"}
                </button>
                <button
                  onClick={() => onDuplicar(pub.id)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  title="Duplicar"
                >
                  📋
                </button>
                <button
                  onClick={() => {
                    if (confirm("¿Eliminar esta publicación permanentemente?")) {
                      onEliminar(pub.id);
                    }
                  }}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {publicacionesFiltradas.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-gray-500">
              {busqueda ? "No se encontraron publicaciones" : "No hay publicaciones"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

ListaPublicaciones.displayName = "ListaPublicaciones";

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

function obtenerContenidoPorDefecto(tipo: TipoBloque): Record<string, unknown> {
  const defaults: Record<TipoBloque, Record<string, unknown>> = {
    titulo: { texto: "Nuevo Título" },
    subtitulo: { texto: "Nuevo Subtítulo" },
    texto: { texto: "Escribe tu contenido aquí..." },
    imagen: { src: "", alt: "", pie: "" },
    galeria: { imagenes: [] },
    gif: { src: "", alt: "" },
    video: { src: "" },
    card_texto: { titulo: "", texto: "" },
    card_imagen: { src: "", alt: "" },
    card_mixta: { titulo: "", texto: "", imagen: "" },
    card_cta: { titulo: "", texto: "", textoBoton: "Click aquí", enlace: "#" },
    card_links: { titulo: "", links: [] },
    banner: { titulo: "", subtitulo: "" },
    carrusel: {},
    slider: {},
    testimonial: {},
    lista_iconos: {},
    tabla: {},
    accordion: {},
    tabs: {},
    faq: {},
    timeline: {},
    cita: { texto: "", autor: "" },
    social: {},
    contador: { valor: 100, label: "" },
    newsletter: { titulo: "Suscríbete", descripcion: "Recibe nuestras novedades", placeholder: "tu@email.com", textoBoton: "Suscribirse" },
    codigo: { codigo: "", lenguaje: "javascript" },
    espaciador: {},
    grid: {},
    flex: {},
    cta: { titulo: "", texto: "", boton: "Comenzar", url: "#" },
    separador: {},
    boton: { texto: "Click aquí", url: "#" },
    spacer: {},
    divider: {},
  };
  return defaults[tipo] || {};
}
