import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sjmmajuresources.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;