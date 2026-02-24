/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Necesario para static export
  },
  trailingSlash: true,
  typescript: {
    // ⚠️ Ignorar errores de TypeScript durante el build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignorar errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
