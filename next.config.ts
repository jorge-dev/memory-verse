import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: '',
        pathname: "/seed/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: '',
        pathname: "/a/gqr91h87ll/**",
      }
    ],
  },
};

export default nextConfig;
