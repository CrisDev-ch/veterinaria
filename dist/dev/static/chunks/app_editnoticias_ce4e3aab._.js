(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/editnoticias/components.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorBloques",
    ()=>EditorBloques,
    "ListaPublicaciones",
    ()=>ListaPublicaciones,
    "SideMenu",
    ()=>SideMenu,
    "VistaPrevia",
    ()=>VistaPrevia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../types/noticias'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// /app/editnoticias/components.tsx
"use client";
;
;
const SideMenu = ({ vistaActiva, onCambiarVista, publicaciones, publicacionActiva, onSeleccionarPublicacion, onCrearPublicacion, onDuplicarPublicacion, onEliminarPublicacion, onCambiarEstado })=>{
    _s();
    const [menuAbierto, setMenuAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const vistas = [
        {
            id: "editor",
            label: "Editor",
            icon: "✏️"
        },
        {
            id: "lista",
            label: "Publicaciones",
            icon: "📄"
        },
        {
            id: "preview",
            label: "Vista Previa",
            icon: "👁️"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setMenuAbierto(!menuAbierto),
                className: "lg:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg",
                "aria-label": "Toggle menu",
                children: menuAbierto ? "✕" : "☰"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed right-0 top-0 h-full bg-white shadow-2xl transform transition-transform duration-300 z-40 w-80 ${menuAbierto ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full overflow-y-auto p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-6 text-gray-800",
                            children: "Constructor"
                        }, void 0, false, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-2 mb-8",
                            children: vistas.map((vista)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onCambiarVista(vista.id);
                                        setMenuAbierto(false);
                                    },
                                    className: `w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${vistaActiva === vista.id ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-100 text-gray-700"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: vista.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/editnoticias/components.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        vista.label
                                    ]
                                }, vista.id, true, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3",
                                    children: "Acciones Rápidas"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onCrearPublicacion,
                                    className: "w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editnoticias/components.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Nueva Publicación"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3",
                                    children: "Recientes"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: publicaciones.slice(0, 5).map((pub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>onSeleccionarPublicacion(pub.id),
                                            className: `p-3 rounded-lg cursor-pointer transition-colors ${publicacionActiva === pub.id ? "bg-blue-50 border-2 border-blue-200" : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-sm text-gray-800 truncate flex-1",
                                                            children: pub.titulo || "Sin título"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editnoticias/components.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs px-2 py-1 rounded-full ${pub.estado === "publicado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
                                                            children: pub.estado === "publicado" ? "Pub" : "Bor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editnoticias/components.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editnoticias/components.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                onDuplicarPublicacion(pub.id);
                                                            },
                                                            className: "text-xs text-blue-600 hover:text-blue-800",
                                                            title: "Duplicar",
                                                            children: "📋"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editnoticias/components.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                onCambiarEstado(pub.id, pub.estado === "publicado" ? "borrador" : "publicado");
                                                            },
                                                            className: "text-xs text-gray-600 hover:text-gray-800",
                                                            title: "Cambiar estado",
                                                            children: "🔄"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editnoticias/components.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                onEliminarPublicacion(pub.id);
                                                            },
                                                            className: "text-xs text-red-600 hover:text-red-800",
                                                            title: "Eliminar",
                                                            children: "🗑️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/editnoticias/components.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/editnoticias/components.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, pub.id, true, {
                                            fileName: "[project]/app/editnoticias/components.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editnoticias/components.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            menuAbierto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30",
                onClick: ()=>setMenuAbierto(false)
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(SideMenu, "Zb+gSCFxOdAnEnh0lR4JBhhJeMM=");
_c = SideMenu;
const EditorBloques = ({ publicacion, onChange, onGuardar })=>{
    _s1();
    const [bloqueEditando, setBloqueEditando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const agregarBloque = (tipo)=>{
        const nuevoBloque = {
            id: generarId(),
            tipo,
            contenido: obtenerContenidoPorDefecto(tipo),
            estilos: {
                ...estilosPorDefecto[tipo]
            },
            configuracion: obtenerConfigPorDefecto(tipo)
        };
        const nuevaPublicacion = {
            ...publicacion,
            bloques: [
                ...publicacion.bloques,
                nuevoBloque
            ],
            fechaModificacion: new Date().toISOString()
        };
        onChange(nuevaPublicacion);
    };
    const actualizarBloque = (id, updates)=>{
        const nuevosBloques = publicacion.bloques.map((b)=>b.id === id ? {
                ...b,
                ...updates
            } : b);
        onChange({
            ...publicacion,
            bloques: nuevosBloques,
            fechaModificacion: new Date().toISOString()
        });
    };
    const eliminarBloque = (id)=>{
        onChange({
            ...publicacion,
            bloques: publicacion.bloques.filter((b)=>b.id !== id),
            fechaModificacion: new Date().toISOString()
        });
    };
    const moverBloque = (id, direccion)=>{
        const index = publicacion.bloques.findIndex((b)=>b.id === id);
        if (direccion === "arriba" && index === 0 || direccion === "abajo" && index === publicacion.bloques.length - 1) {
            return;
        }
        const nuevosBloques = [
            ...publicacion.bloques
        ];
        const newIndex = direccion === "arriba" ? index - 1 : index + 1;
        [nuevosBloques[index], nuevosBloques[newIndex]] = [
            nuevosBloques[newIndex],
            nuevosBloques[index]
        ];
        onChange({
            ...publicacion,
            bloques: nuevosBloques,
            fechaModificacion: new Date().toISOString()
        });
    };
    const tiposBloque = [
        {
            tipo: "titulo",
            label: "Título",
            icon: "T"
        },
        {
            tipo: "subtitulo",
            label: "Subtítulo",
            icon: "H2"
        },
        {
            tipo: "texto",
            label: "Texto",
            icon: "¶"
        },
        {
            tipo: "imagen",
            label: "Imagen",
            icon: "🖼️"
        },
        {
            tipo: "galeria",
            label: "Galería",
            icon: "🖼️🖼️"
        },
        {
            tipo: "gif",
            label: "GIF",
            icon: "GIF"
        },
        {
            tipo: "video",
            label: "Video",
            icon: "▶️"
        },
        {
            tipo: "card_texto",
            label: "Card Texto",
            icon: "📝"
        },
        {
            tipo: "card_imagen",
            label: "Card Imagen",
            icon: "🖼️"
        },
        {
            tipo: "card_mixta",
            label: "Card Mixta",
            icon: "🎴"
        },
        {
            tipo: "card_cta",
            label: "Card CTA",
            icon: "👆"
        },
        {
            tipo: "card_links",
            label: "Card Links",
            icon: "🔗"
        },
        {
            tipo: "banner",
            label: "Banner Hero",
            icon: "🎯"
        },
        {
            tipo: "carrusel",
            label: "Carrusel",
            icon: "🎠"
        },
        {
            tipo: "slider",
            label: "Slider",
            icon: "🎢"
        },
        {
            tipo: "testimonial",
            label: "Testimonial",
            icon: "💬"
        },
        {
            tipo: "lista_iconos",
            label: "Lista Iconos",
            icon: "☑️"
        },
        {
            tipo: "tabla",
            label: "Tabla",
            icon: "📊"
        },
        {
            tipo: "accordion",
            label: "Acordeón",
            icon: "📋"
        },
        {
            tipo: "tabs",
            label: "Tabs",
            icon: "📑"
        },
        {
            tipo: "faq",
            label: "FAQ",
            icon: "❓"
        },
        {
            tipo: "timeline",
            label: "Timeline",
            icon: "⏱️"
        },
        {
            tipo: "cita",
            label: "Cita",
            icon: "💭"
        },
        {
            tipo: "social",
            label: "Redes Sociales",
            icon: "🌐"
        },
        {
            tipo: "contador",
            label: "Contador",
            icon: "🔢"
        },
        {
            tipo: "newsletter",
            label: "Newsletter",
            icon: "📧"
        },
        {
            tipo: "codigo",
            label: "Código",
            icon: "💻"
        },
        {
            tipo: "espaciador",
            label: "Espaciador",
            icon: "↕️"
        },
        {
            tipo: "grid",
            label: "Grid",
            icon: "▦"
        },
        {
            tipo: "flex",
            label: "Flex",
            icon: "☰"
        },
        {
            tipo: "cta",
            label: "CTA",
            icon: "⚡"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: publicacion.titulo,
                                onChange: (e)=>onChange({
                                        ...publicacion,
                                        titulo: e.target.value
                                    }),
                                placeholder: "Título de la publicación",
                                className: "flex-1 text-2xl font-bold border-b-2 border-gray-200 focus:border-blue-500 outline-none px-2 py-1"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-3 py-1 rounded-full text-sm font-medium ${publicacion.estado === "publicado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
                                    children: publicacion.estado === "publicado" ? "Publicado" : "Borrador"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: publicacion.meta?.descripcion || "",
                        onChange: (e)=>onChange({
                                ...publicacion,
                                meta: {
                                    ...publicacion.meta,
                                    descripcion: e.target.value
                                }
                            }),
                        placeholder: "Descripción breve (SEO)",
                        className: "w-full text-gray-600 border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none",
                        rows: 2
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 p-4 rounded-xl border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-gray-700 mb-3",
                        children: "Agregar Bloque"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2",
                        children: tiposBloque.map(({ tipo, label, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>agregarBloque(tipo),
                                className: "flex flex-col items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group",
                                title: label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl mb-1 group-hover:scale-110 transition-transform",
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600 text-center leading-tight",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tipo, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: publicacion.bloques.map((bloque, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white rounded-xl border-2 transition-all ${bloqueEditando === bloque.id ? "border-blue-500 shadow-lg" : "border-gray-200 hover:border-gray-300"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 font-mono text-sm",
                                                children: [
                                                    "#",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-700 capitalize",
                                                children: bloque.tipo.replace(/_/g, " ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moverBloque(bloque.id, "arriba"),
                                                disabled: index === 0,
                                                className: "p-2 hover:bg-gray-100 rounded-lg disabled:opacity-30",
                                                title: "Mover arriba",
                                                children: "↑"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>moverBloque(bloque.id, "abajo"),
                                                disabled: index === publicacion.bloques.length - 1,
                                                className: "p-2 hover:bg-gray-100 rounded-lg disabled:opacity-30",
                                                title: "Mover abajo",
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setBloqueEditando(bloqueEditando === bloque.id ? null : bloque.id),
                                                className: "p-2 hover:bg-blue-50 text-blue-600 rounded-lg",
                                                title: "Editar",
                                                children: "✏️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>eliminarBloque(bloque.id),
                                                className: "p-2 hover:bg-red-50 text-red-600 rounded-lg",
                                                title: "Eliminar",
                                                children: "🗑️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VistaPreviaBloque, {
                                    bloque: bloque
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            bloqueEditando === bloque.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-200 p-4 bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelEdicionBloque, {
                                    bloque: bloque,
                                    onChange: (updates)=>actualizarBloque(bloque.id, updates)
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 439,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, bloque.id, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-6 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onGuardar,
                    className: "bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center gap-2 transition-all hover:scale-105",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "💾"
                        }, void 0, false, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 455,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " Guardar Cambios"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editnoticias/components.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/editnoticias/components.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(EditorBloques, "Gd2LqfXu323Xo0obXtR1u1ui2rA=");
_c1 = EditorBloques;
// ==========================================
// COMPONENTE: VISTA PREVIA DE BLOQUE (Editor)
// ==========================================
const VistaPreviaBloque = ({ bloque })=>{
    const { tipo, contenido, estilos } = bloque;
    const style = {
        color: estilos.color,
        backgroundColor: estilos.background,
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
        gap: estilos.gap || estilos.gridGap,
        flexDirection: estilos.flexDirection,
        flexWrap: estilos.flexWrap,
        justifyContent: estilos.justifyContent,
        alignItems: estilos.alignItems,
        border: estilos.border,
        maxWidth: estilos.maxWidth,
        lineHeight: estilos.lineHeight,
        letterSpacing: estilos.letterSpacing,
        textTransform: estilos.textTransform
    };
    switch(tipo){
        case "titulo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: style,
                children: contenido.texto || "Título de ejemplo"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 500,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "subtitulo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: style,
                children: contenido.texto || "Subtítulo de ejemplo"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 506,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "texto":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: style,
                children: contenido.texto || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 512,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "imagen":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: contenido.src || "https://via.placeholder.com/800x400",
                alt: contenido.alt || "Imagen",
                style: style,
                className: "max-w-full h-auto"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 519,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "gif":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: contenido.src || "https://media.giphy.com/media/example.gif",
                alt: contenido.alt || "GIF",
                style: style,
                className: "max-w-full h-auto"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 528,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "video":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                className: "aspect-video bg-gray-900 rounded-lg flex items-center justify-center text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "🎥 Video: ",
                        contenido.src || "URL no configurada"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editnoticias/components.tsx",
                    lineNumber: 538,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 537,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_texto":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold mb-2",
                        children: contenido.titulo || "Card"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: contenido.texto || "Contenido de la card..."
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 545,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 543,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_imagen":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: contenido.src || "https://via.placeholder.com/400x300",
                    alt: "",
                    className: "w-full h-48 object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/editnoticias/components.tsx",
                    lineNumber: 551,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 550,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_mixta":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: contenido.imagen || "https://via.placeholder.com/400x200",
                        alt: "",
                        className: "w-full h-48 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 561,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold mb-2",
                                children: contenido.titulo || "Título"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: contenido.texto || "Descripción..."
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 566,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 560,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_cta":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: contenido.titulo || "¡Accede ahora!"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 575,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4",
                        children: contenido.texto || "Descripción de la oferta"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 576,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-white text-blue-600 px-6 py-2 rounded-full font-medium",
                        children: contenido.textoBoton || "Click aquí"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 574,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "banner":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2",
                        children: contenido.titulo || "Banner Hero"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 585,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg opacity-90",
                        children: contenido.subtitulo || "Subtítulo del banner"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 586,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "cita":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                style: style,
                children: contenido.texto || "Cita destacada de ejemplo..."
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 591,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "espaciador":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: estilos.height || "2rem"
                }
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 596,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "grid":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                className: "min-h-[100px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400",
                children: [
                    "Grid Container (",
                    bloque.configuracion.columns || 2,
                    " columnas)"
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 599,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "flex":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                className: "min-h-[100px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400",
                children: "Flex Container"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 605,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: style,
                className: "p-4 bg-gray-100 rounded-lg text-gray-600",
                children: [
                    "Vista previa no disponible para: ",
                    tipo
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 611,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c2 = VistaPreviaBloque;
// ==========================================
// COMPONENTE: PANEL DE EDICIÓN DE BLOQUE
// ==========================================
const PanelEdicionBloque = ({ bloque, onChange })=>{
    const { tipo, contenido, estilos, configuracion } = bloque;
    const actualizarContenido = (key, value)=>{
        onChange({
            contenido: {
                ...contenido,
                [key]: value
            }
        });
    };
    const actualizarEstilo = (key, value)=>{
        onChange({
            estilos: {
                ...estilos,
                [key]: value
            }
        });
    };
    const actualizarConfig = (key, value)=>{
        onChange({
            configuracion: {
                ...configuracion,
                [key]: value
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    tipo === "titulo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Texto del Título"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 652,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: contenido.texto || "",
                                onChange: (e)=>actualizarContenido("texto", e.target.value),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 651,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tipo === "subtitulo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Texto del Subtítulo"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: contenido.texto || "",
                                onChange: (e)=>actualizarContenido("texto", e.target.value),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 669,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 665,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tipo === "texto" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Contenido"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 680,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: contenido.texto || "",
                                onChange: (e)=>actualizarContenido("texto", e.target.value),
                                rows: 4,
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 683,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 679,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (tipo === "imagen" || tipo === "gif") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "URL de la imagen/GIF"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 695,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.src || "",
                                        onChange: (e)=>actualizarContenido("src", e.target.value),
                                        placeholder: "https://ejemplo.com/imagen.jpg",
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 698,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 694,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Texto alternativo (ALT)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 707,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.alt || "",
                                        onChange: (e)=>actualizarContenido("alt", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 706,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    tipo === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "URL del Video (YouTube o directo)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 723,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.src || "",
                                        onChange: (e)=>actualizarContenido("src", e.target.value),
                                        placeholder: "https://youtube.com/watch?v=...",
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 726,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: configuracion.autoplay || false,
                                                onChange: (e)=>actualizarConfig("autoplay", e.target.checked),
                                                className: "rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 736,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Autoplay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 742,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: configuracion.loop || false,
                                                onChange: (e)=>actualizarConfig("loop", e.target.checked),
                                                className: "rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Loop"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 744,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: configuracion.muted || false,
                                                onChange: (e)=>actualizarConfig("muted", e.target.checked),
                                                className: "rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 754,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Muted"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 753,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 734,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    (tipo === "card_texto" || tipo === "card_cta") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Título"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 769,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.titulo || "",
                                        onChange: (e)=>actualizarContenido("titulo", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 772,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 768,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Texto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 780,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: contenido.texto || "",
                                        onChange: (e)=>actualizarContenido("texto", e.target.value),
                                        rows: 3,
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 783,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            tipo === "card_cta" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Texto del Botón"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 792,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.textoBoton || "",
                                        onChange: (e)=>actualizarContenido("textoBoton", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 795,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 791,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    tipo === "card_imagen" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "URL de la Imagen"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 808,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: contenido.src || "",
                                onChange: (e)=>actualizarContenido("src", e.target.value),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 811,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 807,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tipo === "card_mixta" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "URL de la Imagen"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.imagen || "",
                                        onChange: (e)=>actualizarContenido("imagen", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 822,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Título"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 834,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.titulo || "",
                                        onChange: (e)=>actualizarContenido("titulo", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 837,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 833,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Texto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: contenido.texto || "",
                                        onChange: (e)=>actualizarContenido("texto", e.target.value),
                                        rows: 3,
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 848,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    tipo === "banner" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Título del Banner"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 861,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.titulo || "",
                                        onChange: (e)=>actualizarContenido("titulo", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 860,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: "Subtítulo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 872,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: contenido.subtitulo || "",
                                        onChange: (e)=>actualizarContenido("subtitulo", e.target.value),
                                        className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 875,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 871,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    tipo === "cita" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Texto de la Cita"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: contenido.texto || "",
                                onChange: (e)=>actualizarContenido("texto", e.target.value),
                                rows: 3,
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 886,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tipo === "espaciador" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Altura (ej: 2rem, 50px)"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 901,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: estilos.height || "2rem",
                                onChange: (e)=>actualizarEstilo("height", e.target.value),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 904,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 900,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    (tipo === "grid" || tipo === "flex") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: tipo === "grid" ? "Columnas" : "Dirección"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            tipo === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: 1,
                                max: 12,
                                value: configuracion.columns || 2,
                                onChange: (e)=>actualizarConfig("columns", parseInt(e.target.value)),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 919,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: estilos.flexDirection || "column",
                                onChange: (e)=>actualizarEstilo("flexDirection", e.target.value),
                                className: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "row",
                                        children: "Fila"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 933,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "column",
                                        children: "Columna"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 934,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "row-reverse",
                                        children: "Fila inversa"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 935,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "column-reverse",
                                        children: "Columna inversa"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 936,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 928,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 914,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 649,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-medium text-gray-700 mb-3",
                        children: "Estilos"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 945,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Color texto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 948,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        value: estilos.color || "#000000",
                                        onChange: (e)=>actualizarEstilo("color", e.target.value),
                                        className: "w-full h-10 rounded cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 949,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Fondo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 957,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        value: estilos.background || "#ffffff",
                                        onChange: (e)=>actualizarEstilo("background", e.target.value),
                                        className: "w-full h-10 rounded cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 958,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Padding"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 966,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: estilos.padding || "",
                                        onChange: (e)=>actualizarEstilo("padding", e.target.value),
                                        placeholder: "1rem",
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 967,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 965,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Margin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 976,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: estilos.margin || "",
                                        onChange: (e)=>actualizarEstilo("margin", e.target.value),
                                        placeholder: "0",
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 977,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 975,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Border Radius"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 986,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: estilos.borderRadius || "",
                                        onChange: (e)=>actualizarEstilo("borderRadius", e.target.value),
                                        placeholder: "8px",
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 987,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 985,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Sombra"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 996,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: estilos.shadow || "",
                                        onChange: (e)=>actualizarEstilo("shadow", e.target.value),
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Ninguna"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "0 2px 4px rgba(0,0,0,0.1)",
                                                children: "Suave"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "0 4px 6px rgba(0,0,0,0.1)",
                                                children: "Media"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "0 10px 15px rgba(0,0,0,0.2)",
                                                children: "Fuerte"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 997,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 995,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Alineación"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: estilos.textAlign || "left",
                                        onChange: (e)=>actualizarEstilo("textAlign", e.target.value),
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "left",
                                                children: "Izquierda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "center",
                                                children: "Centro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "right",
                                                children: "Derecha"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 1008,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-gray-600 mb-1",
                                        children: "Tamaño fuente"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: estilos.fontSize || "",
                                        onChange: (e)=>actualizarEstilo("fontSize", e.target.value),
                                        placeholder: "1rem",
                                        className: "w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 1020,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 946,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 944,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/editnoticias/components.tsx",
        lineNumber: 647,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = PanelEdicionBloque;
const VistaPrevia = ({ publicacion, modo })=>{
    if (!publicacion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64 text-gray-500",
            children: "Selecciona una publicación para ver la vista previa"
        }, void 0, false, {
            fileName: "[project]/app/editnoticias/components.tsx",
            lineNumber: 1046,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const containerClasses = {
        desktop: "w-full max-w-6xl mx-auto",
        tablet: "w-full max-w-2xl mx-auto",
        mobile: "w-full max-w-sm mx-auto"
    };
    const frameClasses = {
        desktop: "border-0",
        tablet: "border-8 border-gray-800 rounded-[2rem]",
        mobile: "border-8 border-gray-800 rounded-[3rem]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 p-4 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex justify-center gap-2",
                children: [
                    "desktop",
                    "tablet",
                    "mobile"
                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 rounded-lg font-medium capitalize ${modo === m ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`,
                        children: [
                            m === "desktop" ? "🖥️" : m === "tablet" ? "📱" : "📲",
                            " ",
                            m
                        ]
                    }, m, true, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 1068,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 1066,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${containerClasses[modo]} transition-all duration-300`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white shadow-2xl overflow-hidden ${frameClasses[modo]}`,
                    children: [
                        modo !== "desktop" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 h-6 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-4 bg-gray-700 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 1085,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 1084,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 min-h-[500px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mb-4",
                                    children: publicacion.titulo
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 1089,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                publicacion.meta?.descripcion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: publicacion.meta.descripcion
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: publicacion.bloques.map((bloque)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VistaPreviaBloque, {
                                            bloque: bloque
                                        }, bloque.id, false, {
                                            fileName: "[project]/app/editnoticias/components.tsx",
                                            lineNumber: 1095,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/components.tsx",
                                    lineNumber: 1093,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 1088,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editnoticias/components.tsx",
                    lineNumber: 1082,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 1081,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/editnoticias/components.tsx",
        lineNumber: 1065,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = VistaPrevia;
const ListaPublicaciones = ({ publicaciones, onSeleccionar, onEliminar, onDuplicar, onCambiarEstado })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-800",
                children: "Todas las Publicaciones"
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 1118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: [
                    publicaciones.map((pub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-800 mb-1",
                                                children: pub.titulo || "Sin título"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "📅 ",
                                                            new Date(pub.fechaModificacion).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editnoticias/components.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "📝 ",
                                                            pub.bloques.length,
                                                            " bloques"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/editnoticias/components.tsx",
                                                        lineNumber: 1132,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded-full text-xs ${pub.estado === "publicado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`,
                                                        children: pub.estado === "publicado" ? "Publicado" : "Borrador"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/editnoticias/components.tsx",
                                                        lineNumber: 1133,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSeleccionar(pub.id),
                                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1145,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onCambiarEstado(pub.id, pub.estado === "publicado" ? "borrador" : "publicado"),
                                                className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                                                children: pub.estado === "publicado" ? "Despublicar" : "Publicar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1151,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onDuplicar(pub.id),
                                                className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                                                children: "Duplicar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1157,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onEliminar(pub.id),
                                                className: "px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors",
                                                children: "Eliminar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/editnoticias/components.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/editnoticias/components.tsx",
                                        lineNumber: 1144,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editnoticias/components.tsx",
                                lineNumber: 1125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, pub.id, false, {
                            fileName: "[project]/app/editnoticias/components.tsx",
                            lineNumber: 1121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    publicaciones.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12 text-gray-500",
                        children: "No hay publicaciones. Crea una nueva para comenzar."
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/components.tsx",
                        lineNumber: 1174,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/components.tsx",
                lineNumber: 1119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/editnoticias/components.tsx",
        lineNumber: 1117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = ListaPublicaciones;
// ==========================================
// FUNCIONES AUXILIARES
// ==========================================
function obtenerContenidoPorDefecto(tipo) {
    const defaults = {
        titulo: {
            texto: "Nuevo Título"
        },
        subtitulo: {
            texto: "Nuevo Subtítulo"
        },
        texto: {
            texto: "Escribe tu contenido aquí..."
        },
        imagen: {
            src: "",
            alt: ""
        },
        galeria: {
            imagenes: []
        },
        gif: {
            src: "",
            alt: ""
        },
        video: {
            src: ""
        },
        card: {
            titulo: "",
            texto: ""
        },
        banner: {
            titulo: "",
            subtitulo: ""
        },
        grid: {},
        flex: {},
        accordion: {
            items: []
        },
        tabs: {
            tabs: []
        },
        faq: {
            preguntas: []
        },
        timeline: {
            eventos: []
        },
        cta: {
            titulo: "",
            texto: "",
            boton: ""
        },
        custom: {
            html: ""
        },
        separador: {},
        carrusel: {
            slides: []
        },
        testimonial: {
            testimonios: []
        },
        lista_iconos: {
            iconos: []
        },
        tabla: {
            filas: []
        },
        cita: {
            texto: "",
            autor: ""
        },
        social: {
            redes: []
        },
        contador: {
            valor: 0,
            sufijo: ""
        },
        newsletter: {
            titulo: "",
            descripcion: ""
        },
        codigo: {
            codigo: "",
            lenguaje: ""
        },
        espaciador: {},
        card_texto: {
            titulo: "",
            texto: ""
        },
        card_imagen: {
            src: "",
            alt: ""
        },
        card_mixta: {
            titulo: "",
            texto: "",
            imagen: ""
        },
        card_cta: {
            titulo: "",
            texto: "",
            textoBoton: "Click aquí"
        },
        card_links: {
            titulo: "",
            links: []
        },
        slider: {
            slides: []
        }
    };
    return defaults[tipo] || {};
}
function obtenerConfigPorDefecto(tipo) {
    const configs = {
        titulo: {},
        subtitulo: {},
        texto: {},
        imagen: {
            lazyLoading: true
        },
        galeria: {
            columns: 3
        },
        gif: {
            lazyLoading: true
        },
        video: {
            autoplay: false,
            loop: false,
            muted: true,
            controls: true
        },
        card: {},
        banner: {
            fullWidth: true
        },
        grid: {
            columns: 2
        },
        flex: {},
        accordion: {},
        tabs: {},
        faq: {},
        timeline: {},
        cta: {},
        custom: {},
        separador: {},
        carrusel: {
            autoplay: true
        },
        testimonial: {},
        lista_iconos: {},
        tabla: {},
        cita: {},
        social: {},
        contador: {
            duracion: 2000
        },
        newsletter: {},
        codigo: {},
        espaciador: {},
        card_texto: {},
        card_imagen: {},
        card_mixta: {},
        card_cta: {
            tipoBoton: "primario"
        },
        card_links: {},
        slider: {
            autoplay: true
        }
    };
    return configs[tipo] || {};
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SideMenu");
__turbopack_context__.k.register(_c1, "EditorBloques");
__turbopack_context__.k.register(_c2, "VistaPreviaBloque");
__turbopack_context__.k.register(_c3, "PanelEdicionBloque");
__turbopack_context__.k.register(_c4, "VistaPrevia");
__turbopack_context__.k.register(_c5, "ListaPublicaciones");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/editnoticias/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditNoticiasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../types/noticias'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editnoticias$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/editnoticias/components.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// /app/editnoticias/page.tsx
"use client";
;
;
;
function EditNoticiasPage() {
    _s();
    // Estados
    const [publicaciones, setPublicaciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [publicacionActiva, setPublicacionActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vistaActiva, setVistaActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lista");
    const [modoPreview, setModoPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desktop");
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [guardado, setGuardado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ==========================================
    // EFECTOS
    // ==========================================
    // Cargar desde localStorage al iniciar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditNoticiasPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const dataGuardada = localStorage.getItem(STORAGE_KEY);
                if (dataGuardada) {
                    const parsed = JSON.parse(dataGuardada);
                    if (Array.isArray(parsed)) {
                        setPublicaciones(parsed);
                    }
                }
            } catch (error) {
                console.error("Error al cargar publicaciones:", error);
            } finally{
                setCargando(false);
            }
        }
    }["EditNoticiasPage.useEffect"], []);
    // Auto-guardar cuando cambian las publicaciones
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditNoticiasPage.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || cargando) return;
            const timeoutId = setTimeout({
                "EditNoticiasPage.useEffect.timeoutId": ()=>{
                    try {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(publicaciones));
                        setGuardado(true);
                        setTimeout({
                            "EditNoticiasPage.useEffect.timeoutId": ()=>setGuardado(false)
                        }["EditNoticiasPage.useEffect.timeoutId"], 2000);
                    } catch (error) {
                        console.error("Error al guardar:", error);
                    }
                }
            }["EditNoticiasPage.useEffect.timeoutId"], 1000);
            return ({
                "EditNoticiasPage.useEffect": ()=>clearTimeout(timeoutId)
            })["EditNoticiasPage.useEffect"];
        }
    }["EditNoticiasPage.useEffect"], [
        publicaciones,
        cargando
    ]);
    // ==========================================
    // HANDLERS
    // ==========================================
    const crearPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[crearPublicacion]": ()=>{
            const nuevaPublicacion = {
                id: generarId(),
                titulo: "Nueva Publicación",
                slug: `nueva-publicacion-${Date.now()}`,
                estado: "borrador",
                fechaCreacion: new Date().toISOString(),
                fechaModificacion: new Date().toISOString(),
                bloques: [],
                meta: {
                    descripcion: "",
                    tags: []
                }
            };
            setPublicaciones({
                "EditNoticiasPage.useCallback[crearPublicacion]": (prev)=>[
                        nuevaPublicacion,
                        ...prev
                    ]
            }["EditNoticiasPage.useCallback[crearPublicacion]"]);
            setPublicacionActiva(nuevaPublicacion.id);
            setVistaActiva("editor");
        }
    }["EditNoticiasPage.useCallback[crearPublicacion]"], []);
    const duplicarPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[duplicarPublicacion]": (id)=>{
            setPublicaciones({
                "EditNoticiasPage.useCallback[duplicarPublicacion]": (prev)=>{
                    const pub = prev.find({
                        "EditNoticiasPage.useCallback[duplicarPublicacion].pub": (p)=>p.id === id
                    }["EditNoticiasPage.useCallback[duplicarPublicacion].pub"]);
                    if (!pub) return prev;
                    const duplicada = {
                        ...pub,
                        id: generarId(),
                        titulo: `${pub.titulo} (Copia)`,
                        slug: `${pub.slug}-copia-${Date.now()}`,
                        estado: "borrador",
                        fechaCreacion: new Date().toISOString(),
                        fechaModificacion: new Date().toISOString()
                    };
                    return [
                        duplicada,
                        ...prev
                    ];
                }
            }["EditNoticiasPage.useCallback[duplicarPublicacion]"]);
        }
    }["EditNoticiasPage.useCallback[duplicarPublicacion]"], []);
    const eliminarPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[eliminarPublicacion]": (id)=>{
            if (!confirm("¿Estás seguro de eliminar esta publicación?")) return;
            setPublicaciones({
                "EditNoticiasPage.useCallback[eliminarPublicacion]": (prev)=>prev.filter({
                        "EditNoticiasPage.useCallback[eliminarPublicacion]": (p)=>p.id !== id
                    }["EditNoticiasPage.useCallback[eliminarPublicacion]"])
            }["EditNoticiasPage.useCallback[eliminarPublicacion]"]);
            if (publicacionActiva === id) {
                setPublicacionActiva(null);
                setVistaActiva("lista");
            }
        }
    }["EditNoticiasPage.useCallback[eliminarPublicacion]"], [
        publicacionActiva
    ]);
    const cambiarEstadoPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[cambiarEstadoPublicacion]": (id, estado)=>{
            setPublicaciones({
                "EditNoticiasPage.useCallback[cambiarEstadoPublicacion]": (prev)=>prev.map({
                        "EditNoticiasPage.useCallback[cambiarEstadoPublicacion]": (p)=>p.id === id ? {
                                ...p,
                                estado,
                                fechaModificacion: new Date().toISOString()
                            } : p
                    }["EditNoticiasPage.useCallback[cambiarEstadoPublicacion]"])
            }["EditNoticiasPage.useCallback[cambiarEstadoPublicacion]"]);
        }
    }["EditNoticiasPage.useCallback[cambiarEstadoPublicacion]"], []);
    const actualizarPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[actualizarPublicacion]": (publicacion)=>{
            setPublicaciones({
                "EditNoticiasPage.useCallback[actualizarPublicacion]": (prev)=>prev.map({
                        "EditNoticiasPage.useCallback[actualizarPublicacion]": (p)=>p.id === publicacion.id ? publicacion : p
                    }["EditNoticiasPage.useCallback[actualizarPublicacion]"])
            }["EditNoticiasPage.useCallback[actualizarPublicacion]"]);
        }
    }["EditNoticiasPage.useCallback[actualizarPublicacion]"], []);
    const seleccionarPublicacion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[seleccionarPublicacion]": (id)=>{
            setPublicacionActiva(id);
            setVistaActiva("editor");
        }
    }["EditNoticiasPage.useCallback[seleccionarPublicacion]"], []);
    const guardarManual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditNoticiasPage.useCallback[guardarManual]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(publicaciones));
                setGuardado(true);
                setTimeout({
                    "EditNoticiasPage.useCallback[guardarManual]": ()=>setGuardado(false)
                }["EditNoticiasPage.useCallback[guardarManual]"], 2000);
            } catch (error) {
                console.error("Error al guardar manualmente:", error);
                alert("Error al guardar. Intenta de nuevo.");
            }
        }
    }["EditNoticiasPage.useCallback[guardarManual]"], [
        publicaciones
    ]);
    // ==========================================
    // RENDER HELPERS
    // ==========================================
    const publicacionActual = publicaciones.find((p)=>p.id === publicacionActiva);
    if (cargando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Cargando editor..."
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/page.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/editnoticias/page.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "EditNoticias"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500 hidden sm:inline",
                                    children: "Constructor Visual"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editnoticias/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                guardado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-green-600 font-medium animate-pulse",
                                    children: "✓ Guardado"
                                }, void 0, false, {
                                    fileName: "[project]/app/editnoticias/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        publicaciones.length,
                                        " publicaciones"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editnoticias/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editnoticias/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editnoticias/page.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 lg:pr-80",
                children: [
                    vistaActiva === "lista" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editnoticias$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListaPublicaciones"], {
                        publicaciones: publicaciones,
                        onSeleccionar: seleccionarPublicacion,
                        onEliminar: eliminarPublicacion,
                        onDuplicar: duplicarPublicacion,
                        onCambiarEstado: cambiarEstadoPublicacion
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    vistaActiva === "editor" && publicacionActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editnoticias$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorBloques"], {
                        publicacion: publicacionActual,
                        onChange: actualizarPublicacion,
                        onGuardar: guardarManual
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    vistaActiva === "editor" && !publicacionActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 mb-4",
                                children: "Selecciona una publicación para editar"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setVistaActiva("lista"),
                                className: "text-blue-600 hover:text-blue-700 font-medium",
                                children: "Ver todas las publicaciones →"
                            }, void 0, false, {
                                fileName: "[project]/app/editnoticias/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    vistaActiva === "preview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editnoticias$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VistaPrevia"], {
                        publicacion: publicacionActual,
                        modo: modoPreview
                    }, void 0, false, {
                        fileName: "[project]/app/editnoticias/page.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editnoticias/page.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editnoticias$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SideMenu"], {
                vistaActiva: vistaActiva,
                onCambiarVista: (vista)=>setVistaActiva(vista),
                publicaciones: publicaciones,
                publicacionActiva: publicacionActiva,
                onSeleccionarPublicacion: seleccionarPublicacion,
                onCrearPublicacion: crearPublicacion,
                onDuplicarPublicacion: duplicarPublicacion,
                onEliminarPublicacion: eliminarPublicacion,
                onCambiarEstado: cambiarEstadoPublicacion
            }, void 0, false, {
                fileName: "[project]/app/editnoticias/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editnoticias/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(EditNoticiasPage, "kroMpqeHVv39sDko1bdRq7X1LVw=");
_c = EditNoticiasPage;
var _c;
__turbopack_context__.k.register(_c, "EditNoticiasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_editnoticias_ce4e3aab._.js.map