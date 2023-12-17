/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,

  // Enable CSS modules
  cssModules: true,

  // Additional CSS options
  cssLoaderOptions: {
    // Enable or disable CSS modules global scope behavior
    // (true enables global scope, false enables local scope)
    modules: {
      mode: "local",
      localIdentName: "[local]__[hash:base64:5]",
    },
  },
};
