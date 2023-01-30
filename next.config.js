/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  images: {
    domains: ['gogocdn.net'],
  },
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
