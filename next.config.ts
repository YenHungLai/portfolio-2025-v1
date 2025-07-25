import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v4.brittanychiang.com",
      },
      {
        protocol: "https",
        hostname: "fs.mingpao.com",
      },
    ],
  },
};

export default nextConfig;
