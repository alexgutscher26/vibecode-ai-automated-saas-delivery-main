import type { NextConfig } from "next";
import path from "node:path";
import fs from "node:fs";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');
const enableVisualEdits = process.env.VISUAL_EDITS === '1' && fs.existsSync(LOADER);
const rules: Record<string, { loaders: string[] }> = {};
if (enableVisualEdits) {
  rules["*.{jsx,tsx}"] = { loaders: [LOADER] };
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // outputFileTracingRoot: path.resolve(__dirname, '../../'), // Removed to fix Turbopack filesystem path error
  turbopack: {
    rules
  }
};

export default nextConfig;
