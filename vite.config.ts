import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/<REPO>/',
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'axios'],
        },
      },
    },
  },
});
