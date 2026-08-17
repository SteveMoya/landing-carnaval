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
  },
  security: {
    checkOrigin: true,
  },
});
