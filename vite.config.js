import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you deploy to a project page (username.github.io/repo-name),
// change base to '/repo-name/'. If you deploy to a user page
// (username.github.io, the site itself is the repo root), keep base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/bibian-portfolio/',
});
