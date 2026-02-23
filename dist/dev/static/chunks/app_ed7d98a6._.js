(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/types/noticias.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// /app/types/noticias.ts
__turbopack_context__.s([
    "STORAGE_KEY",
    ()=>STORAGE_KEY,
    "configuracionPorDefecto",
    ()=>configuracionPorDefecto,
    "estilosPorDefecto",
    ()=>estilosPorDefecto,
    "generarId",
    ()=>generarId,
    "generarSlug",
    ()=>generarSlug
]);
const STORAGE_KEY = "vetchile_publicaciones_v2";
function generarId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function generarSlug(titulo) {
    return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const estilosPorDefecto = {
    titulo: {
        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: "700",
        lineHeight: "1.2",
        margin: "0 0 1rem 0",
        color: "#111827"
    },
    subtitulo: {
        fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
        fontWeight: "600",
        lineHeight: "1.3",
        margin: "0 0 0.75rem 0",
        color: "#374151"
    },
    texto: {
        fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
        lineHeight: "1.75",
        margin: "0 0 1rem 0",
        color: "#4b5563"
    },
    imagen: {
        width: "100%",
        borderRadius: "0.75rem",
        objectFit: "cover"
    },
    galeria: {
        display: "grid",
        gap: "1rem"
    },
    gif: {
        width: "100%",
        maxWidth: "100%",
        borderRadius: "0.5rem"
    },
    video: {
        width: "100%",
        borderRadius: "0.75rem"
    },
    card_texto: {
        padding: "1.5rem",
        background: "#ffffff",
        borderRadius: "1rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    card_imagen: {
        borderRadius: "1rem",
        overflow: "hidden"
    },
    card_mixta: {
        background: "#ffffff",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    card_cta: {
        padding: "2rem",
        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        borderRadius: "1rem",
        color: "#ffffff",
        textAlign: "center"
    },
    card_links: {
        padding: "1.5rem",
        background: "#f9fafb",
        borderRadius: "1rem",
        border: "1px solid #e5e7eb"
    },
    banner: {
        padding: "clamp(2rem, 8vw, 4rem) clamp(1rem, 5vw, 2rem)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#ffffff",
        textAlign: "center",
        borderRadius: "1rem"
    },
    carrusel: {
        borderRadius: "1rem",
        overflow: "hidden"
    },
    slider: {
        borderRadius: "1rem",
        overflow: "hidden"
    },
    testimonial: {
        padding: "1.5rem"
    },
    lista_iconos: {
        listStyle: "none",
        padding: "0"
    },
    tabla: {
        width: "100%",
        borderCollapse: "collapse"
    },
    accordion: {
        border: "1px solid #e5e7eb",
        borderRadius: "0.75rem",
        overflow: "hidden"
    },
    tabs: {
        width: "100%"
    },
    faq: {
        maxWidth: "800px",
        margin: "0 auto"
    },
    timeline: {
        position: "relative",
        padding: "1rem 0"
    },
    cita: {
        padding: "1.5rem",
        borderLeft: "4px solid #3b82f6",
        background: "#f8fafc",
        fontStyle: "italic",
        borderRadius: "0 0.75rem 0.75rem 0"
    },
    social: {
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
    },
    contador: {
        textAlign: "center",
        padding: "2rem"
    },
    newsletter: {
        padding: "2rem",
        background: "#f3f4f6",
        borderRadius: "1rem",
        textAlign: "center"
    },
    codigo: {
        padding: "1rem",
        background: "#1f2937",
        color: "#f9fafb",
        borderRadius: "0.75rem",
        overflow: "auto",
        fontSize: "0.875rem"
    },
    espaciador: {
        height: "2rem"
    },
    grid: {
        display: "grid",
        gap: "1rem"
    },
    flex: {
        display: "flex",
        gap: "1rem"
    },
    cta: {
        padding: "2rem",
        background: "#1f2937",
        color: "#ffffff",
        borderRadius: "1rem",
        textAlign: "center"
    },
    separador: {
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "2rem 0"
    },
    boton: {
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s"
    },
    spacer: {
        height: "2rem"
    },
    divider: {
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "1.5rem 0"
    }
};
const configuracionPorDefecto = {
    titulo: {},
    subtitulo: {},
    texto: {},
    imagen: {
        lazyLoading: true
    },
    galeria: {
        columns: 3,
        lightbox: true
    },
    gif: {
        lazyLoading: true
    },
    video: {
        autoplay: false,
        loop: false,
        muted: true,
        controls: true,
        aspectRatio: "16/9"
    },
    card_texto: {},
    card_imagen: {
        lazyLoading: true
    },
    card_mixta: {},
    card_cta: {
        tipoBoton: "primario",
        targetBlank: false
    },
    card_links: {},
    banner: {
        fullWidth: true
    },
    carrusel: {
        autoplay: true,
        intervalo: 5000,
        mostrarDots: true,
        mostrarFlechas: true,
        slides: []
    },
    slider: {
        autoplay: true,
        intervalo: 4000,
        mostrarDots: true,
        mostrarFlechas: true,
        slides: []
    },
    testimonial: {
        testimonios: []
    },
    lista_iconos: {
        iconos: []
    },
    tabla: {
        filas: [],
        striped: true,
        bordered: true
    },
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
    cita: {},
    social: {
        redes: []
    },
    contador: {
        duracion: 2000,
        prefijo: "",
        sufijo: "",
        separadorMiles: true,
        iniciarAlScroll: true
    },
    newsletter: {},
    codigo: {
        lenguaje: "javascript"
    },
    espaciador: {
        altura: "2rem"
    },
    grid: {
        columns: 2,
        responsiveColumns: {
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
        }
    },
    flex: {},
    cta: {},
    separador: {},
    boton: {
        variante: "solid",
        tamaño: "md",
        iconoPosicion: "left",
        deshabilitado: false,
        cargando: false
    },
    spacer: {
        alturaMobile: "1rem",
        alturaTablet: "2rem",
        alturaDesktop: "3rem"
    },
    divider: {
        grosor: "1px",
        estilo: "solid"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/noticiasvetchile/components.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BloqueRenderer",
    ()=>BloqueRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// /app/noticiasvetchile/components.tsx
"use client";
;
const BloqueRenderer = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(({ bloque })=>{
    _s();
    const { tipo, contenido, estilos, configuracion } = bloque;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contadorValor, setContadorValor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slideActual, setSlideActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tabActiva, setTabActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [accordionAbierto, setAccordionAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [faqAbierto, setFaqAbierto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const elementoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Intersection Observer para animaciones
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloqueRenderer.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "BloqueRenderer.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["BloqueRenderer.useEffect"], {
                threshold: 0.1,
                rootMargin: "50px"
            });
            if (elementoRef.current) {
                observer.observe(elementoRef.current);
            }
            return ({
                "BloqueRenderer.useEffect": ()=>observer.disconnect()
            })["BloqueRenderer.useEffect"];
        }
    }["BloqueRenderer.useEffect"], []);
    // Animación de contador
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloqueRenderer.useEffect": ()=>{
            if (tipo !== "contador" || !isVisible) return;
            const valorFinal = contenido.valor || 0;
            const duracion = configuracion.duracion || 2000;
            const pasos = 60;
            const incremento = valorFinal / pasos;
            let actual = 0;
            const timer = setInterval({
                "BloqueRenderer.useEffect.timer": ()=>{
                    actual += incremento;
                    if (actual >= valorFinal) {
                        setContadorValor(valorFinal);
                        clearInterval(timer);
                    } else {
                        setContadorValor(Math.floor(actual));
                    }
                }
            }["BloqueRenderer.useEffect.timer"], duracion / pasos);
            return ({
                "BloqueRenderer.useEffect": ()=>clearInterval(timer)
            })["BloqueRenderer.useEffect"];
        }
    }["BloqueRenderer.useEffect"], [
        tipo,
        isVisible,
        contenido.valor,
        configuracion.duracion
    ]);
    // Autoplay carrusel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BloqueRenderer.useEffect": ()=>{
            if (tipo !== "carrusel" && tipo !== "slider" || !configuracion.autoplay) return;
            const interval = setInterval({
                "BloqueRenderer.useEffect.interval": ()=>{
                    const slides = configuracion.slides || [];
                    setSlideActual({
                        "BloqueRenderer.useEffect.interval": (prev)=>(prev + 1) % slides.length
                    }["BloqueRenderer.useEffect.interval"]);
                }
            }["BloqueRenderer.useEffect.interval"], configuracion.intervalo || 5000);
            return ({
                "BloqueRenderer.useEffect": ()=>clearInterval(interval)
            })["BloqueRenderer.useEffect"];
        }
    }["BloqueRenderer.useEffect"], [
        tipo,
        configuracion.autoplay,
        configuracion.intervalo,
        configuracion.slides
    ]);
    // Construir estilos responsive
    const getEstilos = ()=>{
        const base = {
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
            opacity: isVisible ? estilos.opacity ? parseFloat(estilos.opacity) : 1 : 0,
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
            transform: isVisible ? "translateY(0)" : "translateY(20px)"
        };
        return base;
    };
    const estilosComputados = getEstilos();
    const toggleAccordion = (index)=>{
        setAccordionAbierto((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index) : [
                ...prev,
                index
            ]);
    };
    switch(tipo){
        case "titulo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                ref: elementoRef,
                style: estilosComputados,
                className: "break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
                children: contenido.texto || ""
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "subtitulo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: elementoRef,
                style: estilosComputados,
                className: "break-words text-xl sm:text-2xl md:text-3xl font-semibold leading-snug",
                children: contenido.texto || ""
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "texto":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                ref: elementoRef,
                style: estilosComputados,
                className: "break-words whitespace-pre-wrap text-sm sm:text-base md:text-lg leading-relaxed",
                children: contenido.texto || ""
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "imagen":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                ref: elementoRef,
                style: estilosComputados,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: contenido.src || "",
                        alt: contenido.alt || "",
                        loading: configuracion.lazyLoading ? "lazy" : "eager",
                        className: "w-full h-auto rounded-xl",
                        style: {
                            aspectRatio: configuracion.aspectRatio,
                            objectFit: estilos.objectFit || "cover"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    contenido.pie && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        className: "text-center text-xs sm:text-sm text-gray-500 mt-2 italic",
                        children: contenido.pie
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "gif":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: elementoRef,
                src: contenido.src || "",
                alt: contenido.alt || "",
                loading: configuracion.lazyLoading ? "lazy" : "eager",
                style: estilosComputados,
                className: "max-w-full h-auto rounded-xl"
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "video":
            const videoSrc = contenido.src || "";
            const isYouTube = videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "w-full",
                children: isYouTube ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full rounded-xl overflow-hidden",
                    style: {
                        paddingBottom: "56.25%"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: videoSrc.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/"),
                        title: "Video",
                        className: "absolute inset-0 w-full h-full",
                        allowFullScreen: true,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 198,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 197,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: videoSrc,
                    controls: configuracion.controls !== false,
                    autoPlay: configuracion.autoplay,
                    loop: configuracion.loop,
                    muted: configuracion.muted,
                    className: "w-full rounded-xl",
                    style: {
                        aspectRatio: configuracion.aspectRatio || "16/9"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_texto":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl p-4 sm:p-6",
                children: [
                    contenido.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg sm:text-xl mb-2 sm:mb-3",
                        children: contenido.titulo
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm sm:text-base leading-relaxed",
                        children: contenido.texto || ""
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_imagen":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: contenido.src || "",
                    alt: contenido.alt || "",
                    loading: configuracion.lazyLoading ? "lazy" : "eager",
                    className: "w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_mixta":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl overflow-hidden group",
                children: [
                    contenido.imagen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: contenido.imagen,
                            alt: "",
                            className: "w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 247,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6",
                        children: [
                            contenido.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg sm:text-xl mb-2",
                                children: contenido.titulo
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm sm:text-base leading-relaxed",
                                children: contenido.texto || ""
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_cta":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl p-6 sm:p-8 text-center",
                children: [
                    contenido.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-3 sm:mb-4",
                        children: contenido.titulo
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 267,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    contenido.texto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 opacity-90 text-sm sm:text-base leading-relaxed",
                        children: contenido.texto
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 272,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    contenido.enlace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: contenido.enlace,
                        target: configuracion.targetBlank ? "_blank" : undefined,
                        rel: configuracion.targetBlank ? "noopener noreferrer" : undefined,
                        className: `inline-block px-6 sm:px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm sm:text-base ${configuracion.tipoBoton === "secundario" ? "bg-white/20 text-white hover:bg-white/30" : configuracion.tipoBoton === "outline" ? "border-2 border-white text-white hover:bg-white hover:text-blue-600" : configuracion.tipoBoton === "ghost" ? "text-white hover:bg-white/10" : "bg-white text-blue-600 shadow-lg hover:shadow-xl"}`,
                        children: contenido.textoBoton || "Click aquí"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "card_links":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl p-4 sm:p-6",
                children: [
                    contenido.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg sm:text-xl mb-4",
                        children: contenido.titulo
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 sm:space-y-3",
                        children: (contenido.links || []).map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.url,
                                    className: "group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors text-sm sm:text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "transform group-hover:translate-x-1 transition-transform",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 309,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hover:underline",
                                            children: link.texto
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 310,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 305,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, idx, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 304,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "banner":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: {
                    ...estilosComputados,
                    background: estilos.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                },
                className: "rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [
                        contenido.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight",
                            children: contenido.titulo
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 331,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        contenido.subtitulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto",
                            children: contenido.subtitulo
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 336,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 329,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 321,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "cita":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                ref: elementoRef,
                style: estilosComputados,
                className: "relative pl-4 sm:pl-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-2 -left-2 text-4xl sm:text-5xl text-blue-200 font-serif",
                        children: '"'
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "relative z-10 text-base sm:text-lg italic leading-relaxed",
                        children: contenido.texto || ""
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    contenido.autor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                        className: "block mt-3 text-sm sm:text-base not-italic font-medium opacity-70",
                        children: [
                            "— ",
                            contenido.autor
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 346,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "espaciador":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: {
                    height: estilos.height || "2rem"
                }
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 358,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "separador":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                ref: elementoRef,
                style: estilosComputados,
                className: "border-gray-200"
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 361,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "grid":
            const cols = configuracion.columns || 2;
            const responsiveCols = configuracion.responsiveColumns;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: {
                    ...estilosComputados,
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 1fr)`
                },
                className: `gap-4 sm:gap-6 ${responsiveCols?.sm ? `sm:grid-cols-${responsiveCols.sm}` : ""} ${responsiveCols?.md ? `md:grid-cols-${responsiveCols.md}` : ""} ${responsiveCols?.lg ? `lg:grid-cols-${responsiveCols.lg}` : ""}`
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 367,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "flex":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: {
                    ...estilosComputados,
                    display: "flex"
                },
                className: "gap-4 flex-wrap"
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "carrusel":
        case "slider":
            const slides = configuracion.slides || [];
            if (slides.length === 0) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: elementoRef,
                    className: "p-8 bg-gray-100 rounded-2xl text-center text-gray-500",
                    children: "No hay slides configurados"
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 404,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "relative group rounded-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-500 ease-out",
                        style: {
                            transform: `translateX(-${slideActual * 100}%)`
                        },
                        children: slides.map((slide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex-shrink-0 relative",
                                children: [
                                    slide.imagen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: slide.imagen,
                                        alt: slide.titulo || "",
                                        className: "w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 419,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-48 sm:h-64 md:h-80 bg-gray-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: "Sin imagen"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 426,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 425,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (slide.titulo || slide.texto) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 text-white",
                                        children: [
                                            slide.titulo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg sm:text-xl font-bold mb-1",
                                                children: slide.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                                lineNumber: 431,
                                                columnNumber: 38
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            slide.texto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base opacity-90 line-clamp-2",
                                                children: slide.texto
                                            }, void 0, false, {
                                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                                lineNumber: 432,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 430,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 417,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    slides.length > 1 && configuracion.mostrarFlechas !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSlideActual((prev)=>(prev - 1 + slides.length) % slides.length),
                                className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95",
                                "aria-label": "Anterior",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 sm:w-6 sm:h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 447,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSlideActual((prev)=>(prev + 1) % slides.length),
                                className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all active:scale-95",
                                "aria-label": "Siguiente",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 sm:w-6 sm:h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 456,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    slides.length > 1 && configuracion.mostrarDots !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
                        children: slides.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSlideActual(idx),
                                className: `w-2.5 h-2.5 rounded-full transition-all ${idx === slideActual ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
                                "aria-label": `Ir a slide ${idx + 1}`
                            }, idx, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 465,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 463,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "testimonial":
            const testimonios = configuracion.testimonios || [];
            if (testimonios.length === 0) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: elementoRef,
                    className: "p-8 bg-gray-100 rounded-2xl text-center text-gray-500",
                    children: "No hay testimonios configurados"
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 484,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                    children: testimonios.map((test, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        test.imagen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: test.imagen,
                                            alt: test.nombre,
                                            className: "w-12 h-12 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 497,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-bold",
                                            children: test.nombre?.charAt(0) || "?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 503,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-sm sm:text-base",
                                                    children: test.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs sm:text-sm text-gray-500",
                                                    children: test.cargo
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                test.empresa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-400",
                                                    children: test.empresa
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 495,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                test.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-3",
                                    children: Array.from({
                                        length: 5
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm ${i < test.rating ? "text-yellow-400" : "text-gray-300"}`,
                                            children: "★"
                                        }, i, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 518,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 516,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm sm:text-base italic leading-relaxed",
                                    children: [
                                        '"',
                                        test.texto,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 524,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 494,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 492,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "lista_iconos":
            const iconos = configuracion.iconos || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: elementoRef,
                style: estilosComputados,
                className: "space-y-3 sm:space-y-4",
                children: iconos.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl sm:text-2xl flex-shrink-0",
                                style: {
                                    color: item.color || estilos.color
                                },
                                children: item.icono
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm sm:text-base leading-relaxed pt-0.5",
                                children: item.texto
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 536,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "tabla":
            const filas = configuracion.filas || [];
            const encabezados = configuracion.encabezados;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "overflow-x-auto rounded-xl border border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-xs sm:text-sm",
                    children: [
                        encabezados && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: encabezados.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700",
                                        children: h
                                    }, i, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 560,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 558,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 557,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filas.map((fila, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: `border-t ${configuracion.striped && rowIdx % 2 === 1 ? "bg-gray-50" : ""} ${configuracion.bordered ? "border-gray-200" : ""} hover:bg-blue-50/50 transition-colors`,
                                    children: fila.map((celda, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 sm:px-4 py-2 sm:py-3 text-gray-700",
                                            children: celda
                                        }, colIdx, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 574,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, rowIdx, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 567,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 565,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 555,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 554,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "accordion":
            const items = configuracion.items || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "space-y-2",
                children: items.map((item, idx)=>{
                    const isOpen = accordionAbierto.includes(idx);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-200 rounded-xl overflow-hidden bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleAccordion(idx),
                                className: "w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-sm sm:text-base pr-4",
                                        children: item.titulo
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 595,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                                            lineNumber: 602,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 596,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 591,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden transition-all duration-300",
                                style: {
                                    maxHeight: isOpen ? "500px" : "0",
                                    opacity: isOpen ? 1 : 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed",
                                    children: item.contenido
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 609,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 605,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 590,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "tabs":
            const tabs = configuracion.tabs || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gray-200 overflow-x-auto scrollbar-hide",
                        children: tabs.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTabActiva(idx),
                                className: `px-4 sm:px-6 py-3 font-medium whitespace-nowrap transition-colors text-sm sm:text-base border-b-2 ${tabActiva === idx ? "text-blue-600 border-blue-600" : "text-gray-500 border-transparent hover:text-gray-700"}`,
                                children: [
                                    tab.icono && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: tab.icono
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 634,
                                        columnNumber: 31
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    tab.titulo
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 625,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 623,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6",
                        children: tabs[tabActiva] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-700 text-sm sm:text-base leading-relaxed animate-fadeIn",
                            children: tabs[tabActiva].contenido
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 641,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 639,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 622,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "faq":
            const preguntas = configuracion.preguntas || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "space-y-3 sm:space-y-4",
                children: preguntas.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200 pb-3 sm:pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFaqAbierto(faqAbierto === idx ? null : idx),
                                className: "w-full flex justify-between items-center text-left group py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-base sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors pr-4",
                                        children: faq.pregunta
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xl sm:text-2xl text-gray-400 flex-shrink-0 transition-transform duration-200 ${faqAbierto === idx ? "rotate-45 text-blue-600" : ""}`,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden transition-all duration-300",
                                style: {
                                    maxHeight: faqAbierto === idx ? "200px" : "0",
                                    opacity: faqAbierto === idx ? 1 : 0,
                                    marginTop: faqAbierto === idx ? "0.75rem" : "0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm sm:text-base leading-relaxed",
                                    children: faq.respuesta
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 676,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 668,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 654,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 652,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "timeline":
            const eventos = configuracion.eventos || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 687,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 sm:space-y-8",
                        children: eventos.map((evento, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pl-8 sm:pl-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-1.5 sm:left-2.5 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-4 border-white shadow-md",
                                        style: {
                                            backgroundColor: evento.color || "#3b82f6"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 691,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs sm:text-sm font-medium mb-1",
                                        style: {
                                            color: evento.color || "#3b82f6"
                                        },
                                        children: evento.fecha
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 695,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-base sm:text-lg mb-1 text-gray-900",
                                        children: evento.titulo
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 698,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    evento.descripcion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm sm:text-base leading-relaxed",
                                        children: evento.descripcion
                                    }, void 0, false, {
                                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                                        lineNumber: 700,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 690,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 688,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 686,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "social":
            const redes = configuracion.redes || [];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "flex flex-wrap gap-3 sm:gap-4 justify-center",
                children: redes.map((red, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: red.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-2xl sm:text-3xl hover:scale-110 transition-transform p-2 rounded-full hover:bg-gray-100",
                        style: {
                            color: red.color || estilos.color
                        },
                        title: red.nombre,
                        children: red.icono
                    }, idx, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 713,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 711,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "contador":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums",
                        children: [
                            configuracion.prefijo || "",
                            configuracion.separadorMiles ? contadorValor.toLocaleString() : contadorValor,
                            configuracion.sufijo || ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 731,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    contenido.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-base sm:text-lg text-gray-500 mt-2 font-medium",
                        children: contenido.label
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 739,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 730,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "newsletter":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl p-6 sm:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-2",
                        children: contenido.titulo || "Newsletter"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 747,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 opacity-80 text-sm sm:text-base",
                        children: contenido.descripcion || "Suscríbete a nuestro boletín"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
                        onSubmit: (e)=>e.preventDefault(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                placeholder: contenido.placeholder || "tu@email.com",
                                className: "flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 750,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm whitespace-nowrap",
                                children: contenido.textoBoton || "Suscribirse"
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 755,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 749,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 746,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "codigo":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                ref: elementoRef,
                style: {
                    ...estilosComputados,
                    background: estilos.background || "#1f2937",
                    color: estilos.color || "#f9fafb"
                },
                className: "overflow-x-auto p-4 sm:p-6 rounded-xl text-xs sm:text-sm font-mono",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "break-all",
                    children: contenido.codigo || ""
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 776,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 767,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "cta":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "rounded-2xl p-6 sm:p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-3",
                        children: contenido.titulo || "¡Llama a la acción!"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 783,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 opacity-90 text-sm sm:text-base max-w-2xl mx-auto",
                        children: contenido.texto || ""
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 784,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: contenido.url || "#",
                        className: "inline-block px-8 py-3 bg-white text-gray-900 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-sm sm:text-base",
                        children: contenido.boton || "Comenzar"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 782,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "galeria":
            const imagenesGaleria = contenido.imagenes || []; // Renombrada
            const columnasGaleria = configuracion.columns || 3; // Renombrada
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: `grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-${Math.min(columnasGaleria, 3)} md:grid-cols-${columnasGaleria}`,
                children: imagenesGaleria.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative group overflow-hidden rounded-xl ${idx === 0 && columnasGaleria > 1 ? "col-span-2 row-span-2" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.src,
                                alt: img.alt || "",
                                loading: "lazy",
                                className: "w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 807,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            img.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs sm:text-sm",
                                    children: img.caption
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 815,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/noticiasvetchile/components.tsx",
                                lineNumber: 814,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 804,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 798,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "boton":
            const variantes = {
                solid: "bg-blue-600 text-white hover:bg-blue-700",
                outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
                ghost: "text-blue-600 hover:bg-blue-50",
                link: "text-blue-600 underline hover:no-underline"
            };
            const tamanos = {
                sm: "px-4 py-2 text-sm",
                md: "px-6 py-2.5 text-sm",
                lg: "px-8 py-3 text-base"
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                style: estilosComputados,
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: contenido.url || "#",
                    className: `inline-flex items-center gap-2 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 ${variantes[configuracion.variante || "solid"]} ${tamanos[configuracion.tamaño || "md"]} ${configuracion.deshabilitado ? "opacity-50 cursor-not-allowed" : ""}`,
                    children: [
                        configuracion.icono && configuracion.iconoPosicion !== "right" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: configuracion.icono
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 848,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        contenido.texto || "Botón",
                        configuracion.icono && configuracion.iconoPosicion === "right" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: configuracion.icono
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 852,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        configuracion.cargando && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin h-4 w-4",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 856,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                                    lineNumber: 857,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/noticiasvetchile/components.tsx",
                            lineNumber: 855,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/components.tsx",
                    lineNumber: 839,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 838,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "spacer":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                className: "hidden sm:block md:hidden",
                style: {
                    height: configuracion.alturaTablet || "2rem"
                }
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 866,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case "divider":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                className: "relative py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t",
                        style: {
                            borderTopWidth: configuracion.grosor || "1px",
                            borderTopStyle: configuracion.estilo || "solid",
                            borderColor: estilos.color || "#e5e7eb"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 876,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    configuracion.conTexto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500",
                        children: configuracion.conTexto
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/components.tsx",
                        lineNumber: 885,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 875,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementoRef,
                className: "p-4 bg-amber-50 text-amber-800 rounded-xl text-sm border border-amber-200",
                children: [
                    "Bloque no soportado: ",
                    tipo
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/components.tsx",
                lineNumber: 894,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
}, "x1EetdDoU3vtN/1juhDJlA9I85k=")), "x1EetdDoU3vtN/1juhDJlA9I85k=");
_c1 = BloqueRenderer;
BloqueRenderer.displayName = "BloqueRenderer";
var _c, _c1;
__turbopack_context__.k.register(_c, "BloqueRenderer$memo");
__turbopack_context__.k.register(_c1, "BloqueRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/noticiasvetchile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoticiasVetChilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$noticias$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/types/noticias.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$noticiasvetchile$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/noticiasvetchile/components.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// /app/noticiasvetchile/page.tsx
"use client";
;
;
;
const ITEMS_POR_PAGINA = 5;
function NoticiasVetChilePage() {
    _s();
    const [publicaciones, setPublicaciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [paginaActual, setPaginaActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [categoriaFiltro, setCategoriaFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todas");
    const [montado, setMontado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NoticiasVetChilePage.useEffect": ()=>{
            setMontado(true);
        }
    }["NoticiasVetChilePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NoticiasVetChilePage.useEffect": ()=>{
            const cargarDatos = {
                "NoticiasVetChilePage.useEffect.cargarDatos": ()=>{
                    try {
                        const dataGuardada = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$types$2f$noticias$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEY"]);
                        if (!dataGuardada) {
                            setPublicaciones([]);
                            setCargando(false);
                            return;
                        }
                        const parsed = JSON.parse(dataGuardada);
                        if (!Array.isArray(parsed)) {
                            throw new Error("Formato de datos inválido");
                        }
                        const publicadas = parsed.filter({
                            "NoticiasVetChilePage.useEffect.cargarDatos.publicadas": (pub)=>pub.estado === "publicado"
                        }["NoticiasVetChilePage.useEffect.cargarDatos.publicadas"]).sort({
                            "NoticiasVetChilePage.useEffect.cargarDatos.publicadas": (a, b)=>new Date(b.fechaPublicacion || b.fechaModificacion).getTime() - new Date(a.fechaPublicacion || a.fechaModificacion).getTime()
                        }["NoticiasVetChilePage.useEffect.cargarDatos.publicadas"]);
                        setPublicaciones(publicadas);
                    } catch (err) {
                        console.error("Error al cargar noticias:", err);
                        setError("Error al cargar las noticias");
                    } finally{
                        setTimeout({
                            "NoticiasVetChilePage.useEffect.cargarDatos": ()=>setCargando(false)
                        }["NoticiasVetChilePage.useEffect.cargarDatos"], 300);
                    }
                }
            }["NoticiasVetChilePage.useEffect.cargarDatos"];
            cargarDatos();
        }
    }["NoticiasVetChilePage.useEffect"], []);
    const categorias = [
        "todas",
        ...Array.from(new Set(publicaciones.map((p)=>p.meta?.categoria).filter(Boolean)))
    ];
    const publicacionesFiltradas = categoriaFiltro === "todas" ? publicaciones : publicaciones.filter((p)=>p.meta?.categoria === categoriaFiltro);
    const totalPaginas = Math.ceil(publicacionesFiltradas.length / ITEMS_POR_PAGINA);
    const publicacionesPagina = publicacionesFiltradas.slice((paginaActual - 1) * ITEMS_POR_PAGINA, paginaActual * ITEMS_POR_PAGINA);
    const cambiarPagina = (nuevaPagina)=>{
        if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
            setPaginaActual(nuevaPagina);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    if (cargando) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "Cargando noticias..."
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/noticiasvetchile/page.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-4",
                        children: "Algo salió mal"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 mb-6",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors",
                        children: "Intentar de nuevo"
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/noticiasvetchile/page.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm sticky top-0 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl",
                                    children: "V"
                                }, void 0, false, {
                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg sm:text-xl font-bold text-gray-900",
                                            children: "Noticias VetChile"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 hidden sm:block",
                                            children: "Actualidad veterinaria"
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: [
                                publicaciones.length,
                                " ",
                                publicaciones.length === 1 ? "artículo" : "artículos"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            categorias.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                        children: categorias.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCategoriaFiltro(cat);
                                    setPaginaActual(1);
                                },
                                className: `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${categoriaFiltro === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                children: cat === "todas" ? "Todas" : cat
                            }, cat, false, {
                                fileName: "[project]/app/noticiasvetchile/page.tsx",
                                lineNumber: 133,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
                children: publicacionesPagina.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "📭"
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-800 mb-2",
                            children: "No hay publicaciones"
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Vuelve más tarde para ver nuevo contenido"
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8 sm:space-y-12",
                            children: publicacionesPagina.map((pub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 mb-3",
                                                    children: [
                                                        pub.destacado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-shrink-0 px-2 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full",
                                                            children: "⭐ DESTACADO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 25
                                                        }, this),
                                                        pub.meta?.categoria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full",
                                                            children: pub.meta.categoria
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400 ml-auto",
                                                            children: montado && new Date(pub.fechaPublicacion || pub.fechaModificacion).toLocaleDateString("es-CL", {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-bold text-gray-900 text-xl sm:text-2xl md:text-3xl leading-tight",
                                                    children: pub.titulo || "Sin título"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                pub.meta?.descripcion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mt-2 text-base sm:text-lg leading-relaxed",
                                                    children: pub.meta.descripcion
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 sm:p-6 space-y-6",
                                            children: pub.bloques.map((bloque)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$noticiasvetchile$2f$components$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BloqueRenderer"], {
                                                    bloque: bloque
                                                }, bloque.id, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-100 text-right text-xs text-gray-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (navigator.share) {
                                                        navigator.share({
                                                            title: pub.titulo,
                                                            text: pub.meta?.descripcion || '',
                                                            url: window.location.href
                                                        });
                                                    } else {
                                                        navigator.clipboard.writeText(window.location.href);
                                                    }
                                                },
                                                className: "hover:text-blue-600 transition-colors",
                                                children: "Compartir ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, pub.id, true, {
                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        totalPaginas > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 sm:mt-12 flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cambiarPagina(paginaActual - 1),
                                            disabled: paginaActual === 1,
                                            className: "flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M15 19l-7-7 7-7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Anterior"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: Array.from({
                                                length: totalPaginas
                                            }, (_, i)=>i + 1).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>cambiarPagina(num),
                                                    className: `w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors ${paginaActual === num ? "bg-blue-600 text-white" : "border border-gray-300 hover:bg-white bg-white text-gray-700"}`,
                                                    children: num
                                                }, num, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cambiarPagina(paginaActual + 1),
                                            disabled: paginaActual === totalPaginas,
                                            className: "flex items-center gap-1 px-3 sm:px-4 py-2 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "Siguiente"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        "Página ",
                                        paginaActual,
                                        " de ",
                                        totalPaginas
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4",
                            children: "V"
                        }, void 0, false, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm sm:text-base",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " VetChile. Todos los derechos reservados."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/noticiasvetchile/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/noticiasvetchile/page.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/noticiasvetchile/page.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/noticiasvetchile/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(NoticiasVetChilePage, "l939yn6aH4EPVr7Ttsk5U9gKDUA=");
_c = NoticiasVetChilePage;
var _c;
__turbopack_context__.k.register(_c, "NoticiasVetChilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ed7d98a6._.js.map