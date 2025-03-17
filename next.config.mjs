/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    forceSwcTransforms: true,
  },
  poweredByHeader: false,
  compress: true,
}

export default nextConfig 