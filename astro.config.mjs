// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sitio 100 % estático (SSG): Cloudflare Pages sirve `dist/` directamente,
// sin adaptador. Si algún día se añaden API routes, instalar @astrojs/cloudflare.
export default defineConfig({
  site: 'https://carnaval.stevemoya.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Los scripts pequeños (<4KB) se inlinean por defecto y la CSP 'self' los
      // bloquea → contenido invisible. Forzamos scripts externos siempre.
      assetsInlineLimit: 0,
    },
  },
  security: {
    checkOrigin: true,
  },
});
