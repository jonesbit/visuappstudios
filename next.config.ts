import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        has: [
          {
            type: "host",
            value: "visuapp.com.br",
          },
        ],
        destination: "https://portal.visuapp.com.br/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;