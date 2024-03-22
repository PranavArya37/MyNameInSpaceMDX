import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

// ... other configurations

export default defineConfig({
  plugins: [react(), mdx()],
  // ... other options
});
