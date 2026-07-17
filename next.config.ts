import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Strict mode for better React hydration warnings in dev
  reactStrictMode: true,
};

export default nextConfig;
