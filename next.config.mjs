/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/my-weather-app",
  assetPrefix: "/my-weather-app/",

  distDir: "out",
};

module.exports = nextConfig;
