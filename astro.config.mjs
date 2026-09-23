import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://pradhikta.my.id',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  i18n: {
    defaultLocale: 'id',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
