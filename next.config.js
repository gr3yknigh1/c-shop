/* eslint-env commonjs */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["via.placeholder.com"],
    loader: "imgix",
    path: "https://via.placeholder.com/",
  },
};

module.exports = nextConfig;
