import { defineConfig } from 'astro/config';

// GitHub Pages serves the repo at /PUB-P-APP-ROUTEHOUND/.
export default defineConfig({
  site: 'https://issacbrizuela1.github.io',
  base: '/PUB-P-APP-ROUTEHOUND/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
