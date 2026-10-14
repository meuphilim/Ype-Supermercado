const isStaticExport = process.env.NEXT_OUTPUT === 'export'
const isVercel = !!process.env.VERCEL

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel gerencia o build nativamente; Docker precisa de standalone; Pages usa export
  output: isStaticExport ? 'export' : isVercel ? undefined : 'standalone',
  basePath: process.env.NEXT_BASE_PATH || '',
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
