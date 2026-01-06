import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://portal.visuapp.com.br/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;