import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/founder/music",
        destination: "/founder-music-v2.html",
      },
    ];
  },
};

export default nextConfig;
