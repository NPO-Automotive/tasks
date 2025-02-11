import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        plugins: [],
      },
    }),
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'named',
        ref: true,
        svgo: false,
        titleProp: true,
        icon: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mjs', '.ts', '.tsx'],
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsInlineLimit: 4096,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'], // Статические ассеты
  base: process.env.BASE_URL || '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
