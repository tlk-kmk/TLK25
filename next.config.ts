import path from 'path';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/fonts': path.join(__dirname, 'public/fonts'),
      };
    }
    return config;
  },
};

export default nextConfig;