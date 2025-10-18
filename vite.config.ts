import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 👈 use relative paths so it works from /docs/
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


