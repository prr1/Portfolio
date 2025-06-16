import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'Portfolio';

export default defineConfig({
  base: `/${repoName}/`, // 👈 important for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
