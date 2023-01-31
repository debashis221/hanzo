/** @type {import('next').NextConfig} */
const path = require('node:path');

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    domains: ['gogocdn.net', 'img.zorores.com'],
  },
  experimental: {
    // Required:
    appDir: true,
    outputStandalone: true,
    outputFileTracingRoot: path.join(__dirname, './'),
  },
};

module.exports = nextConfig;
