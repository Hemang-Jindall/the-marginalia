import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Hemang-Jindall.github.io',
  base: '/the-marginalia',
  integrations: [sitemap()],
});