import { defineConfig } from 'astro/config';

// Integrations
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Astro Configuration
export default defineConfig({
  integrations: [
    tailwind(), // Tailwind CSS integration
    react(),    // React integration
  ],
});
