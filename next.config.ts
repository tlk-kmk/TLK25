import path from 'path'; // Import path module

const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias['@/fonts'] = path.join(__dirname, 'public/fonts');
    }
    return config;
  },
};

export default nextConfig;