/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    config.resolve.fallback = {
      fs: false,
      process: false,
      buffer: false,
      module: false,
      path: false,
    };
    return config;
  },
  // experimental: { esmExternals: true },
  // experimental: {
  //   paths: {
  //     binaryen: ["./node_modules/binaryen/index.js"],
  //     long: ["./node_modules/long/index.js"],
  //     assemblyscript: ["./node_modules/assemblyscript/index.js"],
  //     "assemblyscript/asc": ["./node_modules/assemblyscript/dist/asc.js"],
  //   },
  // },
};

module.exports = nextConfig;
