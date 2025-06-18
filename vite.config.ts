import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
      plugins: [react(), tailwindcss()],
      resolve: {
            alias: [
                  {
                        find: '@',
                        replacement: path.resolve(__dirname, 'src'),
                  },
            ],
      },
      optimizeDeps: {
            include: [
                  'swiper',
                  '@emotion/styled',
                  '@mui/material/styles',
                  '@mui/material',
                  '@emotion/react',
            ],
      },
      css: {
            preprocessorOptions: {
                  scss: {
                        additionalData: `@use "@/styles/variables.scss";`,
                  },
            },
      },
      server: {
            port: 3000,
            open: true,
      },
      build: {
            outDir: 'dist',
            sourcemap: true,
      },
});
