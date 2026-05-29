import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Üst dizindeki (/Users/.../package-lock.json) yanlış workspace algısını engeller
  turbopack: {
    root: projectRoot,
  },
  experimental: {
    // viewTransition dev modda Turbopack ile ağır derlemeye yol açabiliyor
    viewTransition: !isDev,
  },
};

export default nextConfig;
