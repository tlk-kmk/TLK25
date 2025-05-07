import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias['@/fonts'] = path.join(__dirname, 'public/fonts');
    }
    return config;
  },
}


export default nextConfig;
