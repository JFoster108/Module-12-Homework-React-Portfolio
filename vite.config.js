import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set base path to match Netlify's root directory
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: './src/main.jsx',
//     },
//   },
});
