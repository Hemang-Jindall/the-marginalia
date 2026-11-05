import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hemang-jindall.github.io',
  base: '/the-marginalia',
  integrations: [sitemap()],
});