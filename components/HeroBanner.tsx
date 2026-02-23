interface HeroBannerProps {
  titulo?: string;
  subtitulo?: string;
  children?: React.ReactNode;
}

export default function HeroBanner({
  titulo,
  subtitulo,
  children,
}: HeroBannerProps) {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[40vh] overflow-hidden">
      
      {/* Imagen fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://moewalls.com/wp-content/uploads/2025/04/kitten-thumb-728x410.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-green-100 text-center px-4">
        {titulo && <h1 className="text-3xl md:text-5xl font-bold">{titulo}</h1>}
        {subtitulo && <p className="mt-2 text-lg md:text-xl">{subtitulo}</p>}
        {children}
      </div>

    </section>
  );
}