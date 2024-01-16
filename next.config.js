const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dsds3j1bi/image/upload/**",
      },
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
