import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // 👈 Use 3001 for frontend
    open: true  // 👈 Optional: auto-opens in browser
  }
});
