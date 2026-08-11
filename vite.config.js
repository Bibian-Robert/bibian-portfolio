import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this project from a subpath (username.github.io/bibian-portfolio/),
// so it needs base: '/bibian-portfolio/'. Vercel serves it from the domain root, so it
// needs base: '/'. Vercel sets a VERCEL env var during its builds, so we detect that
// automatically rather than needing to toggle this by hand.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/bibian-portfolio/',
});
