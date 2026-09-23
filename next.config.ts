import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/LabProject",

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
