import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const isExport = process.env.STATIC_EXPORT === "1";
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // برای خروجی استاتیک (هاست اشتراکی): npm run build:static
  cacheComponents: !isExport,
  partialPrefetching: !isExport,
  output: isExport ? "export" : undefined,
  images: isExport ? { unoptimized: true } : undefined,
  turbopack: {
    root: rootDir,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
