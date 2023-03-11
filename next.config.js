/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    domains: [
      'gogocdn.net',
      'img.zorores.com',
      'www.crunchyroll.com',
      'cdn.myanimelist.net',
      'i0.wp.com',
      'zoro.to',
      'img.youtube.com'
    ],
  },
  experimental: {
    // Required:
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;