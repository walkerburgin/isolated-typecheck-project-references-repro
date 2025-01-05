import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "./",
    outDir: "bundle",
    plugins: [react()],
    optimizeDeps: {
        force: true,
    },
    server: {
        fs: {
            strict: false,
        },
        https: {
            cert: fs.readFileSync(path.join(import.meta.dirname, "./ssl/cert.pem")),
            key: fs.readFileSync(path.join(import.meta.dirname, "./ssl/dev.pem")),
        }
    }
});
