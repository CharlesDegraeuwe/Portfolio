// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://charlesdegraeuwe.com',
  integrations: [
    react(),
    sitemap({
      // blog is noindex until it has posts — keep it out of the sitemap
      filter: (page) => !page.includes('/blog'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});