import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "teddy-table-microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./Table": "./src/components/Table.tsx",
      },
      shared: ["react", "react-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  server: {
    host: true,
    port: 5001,
    watch: {
      usePolling: true,
    },
  },
})
