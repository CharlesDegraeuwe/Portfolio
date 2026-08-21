import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://charlesdegraeuwe.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/blog'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});