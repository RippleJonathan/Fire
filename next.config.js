const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firedrivenmedia.com',
      },
    ],
  },
  // Vercel optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
}

module.exports = withMDX(nextConfig)
