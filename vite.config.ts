import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function checkResumePlugin(): Plugin {
  return {
    name: 'check-resume',
    buildStart() {
      const resumePath = path.resolve(__dirname, 'public/resume.pdf');
      if (!fs.existsSync(resumePath)) {
        console.warn(
          '\n[info] public/resume.pdf was not found. Place your resume PDF at public/resume.pdf (the site builds without errors even if missing).\n'
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checkResumePlugin()],
  base: './',
  server: {
    port: 3000,
    open: false,
  },
});

