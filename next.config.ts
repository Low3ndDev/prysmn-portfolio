import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "space-z.ai",
    "space.chatglm.site",
    "localhost",
  ],
};

export default nextConfig;
