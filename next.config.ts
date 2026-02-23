/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Necesario para static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
