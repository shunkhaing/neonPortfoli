import { defineConfig } from 'astro/config';

// Integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import github from '@astrojs/github';

// Astro Configuration
export default defineConfig({
  site: 'https://blacksheepshaun.github.io/neonPortfoli/', // replace with your GitHub Pages URL
  outDir: 'dist', // default build output
  base: '/neonPortfoli/', // add this if the project is not deployed on your root domain
  integrations: [
    github(),
    tailwind(), // Tailwind CSS integration
    react(),    // React integration
  ],
});
