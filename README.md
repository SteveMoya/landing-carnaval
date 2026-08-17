# 🎪 Carnaval Digital — Landing Page

> **Tu evento merece ser inolvidable.** — Landing page de marca para *Carnaval Digital*, agencia de eventos y experiencias inmersivas.

Landing page estática construida con **Astro 7 + Tailwind CSS v4 + TypeScript + Three.js**, preparada para **Cloudflare Pages**. Serie de 9 landing pages por estilo de diseño (este proyecto: **Maximalismo**).

---

## 🚀 Demo en producción

| Recurso | URL |
|---|---|
| Producción (Cloudflare Pages) | `https://carnaval.stevemoya.me` *(cuando conectes el repo)* |
| Preview Pages | `https://landing-carnaval.pages.dev` |

---

## 🧱 Stack

- **Astro 7** — SSG puro (`output: static`), sin adaptador (Cloudflare Pages sirve `dist/`)
- **Tailwind CSS v4** — tokens de marca en `src/styles/global.css` (`@theme`)
- **TypeScript 5** estricto
- **Three.js 0.185** — campo de partículas 3D en el hero (isla con carga diferida + pausa fuera de viewport)
- **Web Audio API** — sonido sintetizado opcional (toggle visible, **off por defecto**, persistencia en localStorage)
- **@astrojs/sitemap** + Fontsource (Anton, Bungee, Space Grotesk) auto-hospedadas

## 📁 Arquitectura

```
src/
├── components/
│   ├── ui/          → Button, Card (collage), Sticker, Icon, Section, Container
│   ├── layout/      → Header, Navigation, MobileMenu, Footer, SoundToggle
│   ├── sections/    → Hero (3D), Marquee, Services, Gallery, Process, Stats, Pricing, Testimonials, CTA
│   └── brand/       → Logo
├── data/            → todo el contenido tipado: site, services, gallery, process, stats, pricing, testimonials
├── layouts/BaseLayout.astro  → SEO + OG + Twitter + JSON-LD + skip-link + SoundToggle
├── pages/           → index.astro, 404.astro
├── scripts/         → header, reveal, stats (contadores), sound (Web Audio), hero-particles (Three.js)
└── styles/global.css → Design System maximalista: tokens + textura noise + utilidades
public/              → _headers (CSP), favicon.svg, robots.txt, og.png
```

## 🎨 Design System (maximalismo controlado)

| Token | Valor | Uso |
|---|---|---|
| `black` | `#0D0D0D` | fondo base |
| `paper` | `#F5F1E8` | superficies claras |
| `pink` | `#FF3D9A` | primario shock |
| `yellow` | `#FFE600` | secundario eléctrico |
| `blue` | `#2B6CFF` | azul eléctrico |
| `gold` | `#FFB800` | acento premium |

- **Tipografías (3 voces):** Anton (display), Bungee (acentos/stickers), Space Grotesk (body)
- **Lenguaje visual:** bordes duros 2px, sombras offset de neón (`6px 6px 0`), stickers rotados, collage, marquee infinito, textura de ruido SVG
- **Movimiento:** marquee, flotación de stickers, contadores animados (IO + rAF), partículas 3D (Three.js), glitch/hover; todo respeta `prefers-reduced-motion`

## 🛠️ Scripts

```bash
pnpm install
pnpm dev            # desarrollo → http://localhost:4321
pnpm build          # build → dist/
pnpm preview        # preview local
pnpm check          # astro check (tipos)
```

## 🔐 Variables de entorno

Ninguna requerida. Sitio 100 % estático.

## ☁️ Deploy en Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git** → repo `landing-carnaval`.
2. Build: **Build command** `pnpm build` · **Output directory** `dist` · Node 22+.
3. Deploy → Custom domains → `carnaval.stevemoya.me`.

> `packageManager: pnpm@11.16.0` + `packages: []` en el workspace garantizan compatibilidad con el pnpm de Cloudflare (ver commit `08e4142` de landing-lumina).

## 🛡️ Seguridad

- `_headers`: CSP (`default-src 'self'`, `img-src blob:` para WebGL), HSTS, nosniff, frame DENY
- Sin secretos; `.env`/`.dev.vars` ignorados
- `security.checkOrigin: true`

## 📝 Decisiones de implementación

- **Three.js cargado con `import()` diferido** (solo cuando el hero es visible) para no penalizar LCP; pausa con `visibilitychange` e IntersectionObserver
- **Sonido opt-in**: AudioContext se crea en el primer gesto del usuario (autoplay policies + a11y); off por defecto
- **Sin CMS**: contenido en `src/data/*.ts` tipado
- **Datos mock** (servicios, galería, stats, precios, testimonios) marcados con `// mock` — marca ficticia
- Precios en rangos "Desde $X" (B2B), CTA vía `mailto:`

## 🧪 QA

```bash
pnpm check
pnpm build
```

Verificado: build limpio, contraste AA, sin overflow (desktop/móvil), interacciones probadas (menú, contadores, marquee, toggle sonido, partículas 3D).

---

© 2026 Carnaval Digital — Proyecto de portafolio de Steve Moya.
