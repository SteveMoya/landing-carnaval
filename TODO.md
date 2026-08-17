# 📋 TODO — landing-carnaval (Backlog de mejoras)

> **Creado:** 2026-08-17
> **Repo:** [SteveMoya/landing-carnaval](https://github.com/SteveMoya/landing-carnaval)
> **Estado:** pendiente de implementación — orden propuesto por prioridad

---

## 🎯 Resumen

| # | Tarea | Estado | Prioridad |
|---|-------|--------|-----------|
| 1 | Imágenes de eventos con estilo cartoon | ⏳ Pendiente | 🔴 Alta |
| 2 | Animaciones de scroll | ⏳ Pendiente | 🟠 Media |
| 3 | Corregir el carrusel del hero (marquee) para que sea infinito | ⏳ Pendiente | 🟠 Media |
| 4 | Animaciones de órbita con más elementos de texto en el hero | ⏳ Pendiente | 🔴 Alta |
| 5 | Corregir el botón de Mute (dos iconos visibles + no funcional) | ✅ Completado | 🔴 Alta |
| 6 | Sección "Servicios que gritan": cards con icono/personaje cartoon por disciplina | ⏳ Pendiente | 🔴 Alta |
| 7 | Sección de casos de éxito animada (fotografías + descripción, imágenes a colocar) | ⏳ Pendiente | 🔴 Alta |
| 8 | "Cómo lo hacemos": línea de tiempo animada con datos mock | ⏳ Pendiente | 🟠 Media |
| 9 | Archivos mock de las Opiniones | ⏳ Pendiente | 🟠 Media |
| 10 | Patrón de fondo en la sección CTA acorde con la web | ⏳ Pendiente | 🟠 Media |
| 11 | Iconos de redes sociales con el color oficial de cada red en hover | ⏳ Pendiente | 🟢 Baja |

**Leyenda:** ✅ Completado | 🔄 En progreso | ⏳ Pendiente

---

## 🔴 TODO 1: Imágenes de eventos con estilo cartoon

### 🎯 Objetivo
Ilustrar la galería/casos de éxito con **imágenes estilo cartoon** (acordes al maximalismo: colores vibrantes, trazo grueso, humor) en lugar de los placeholders de color actuales.

### 📝 Pasos
- [ ] **1.1** — Definir estilo cartoon: trazo 2px negro, paleta de marca (pink/yellow/blue/gold), fondos paper
- [ ] **1.2** — Crear/generar set inicial: 6 escenas de eventos (festival, cena inmersiva, mapping, rave, lanzamiento tech, activación)
- [ ] **1.3** — Optimizar con `astro:assets` (AVIF/WebP, `srcset`, lazy loading)
- [ ] **1.4** — Alt text descriptivo por imagen
- [ ] **1.5** — Fallback: mantener el card de color actual si la imagen no carga

### ⚠️ Consideraciones
- El estilo cartoon debe ser coherente en TODAS las imágenes (mismo trazo, misma paleta)
- Fuentes: ilustrador (Midjourney/DALL·E con prompt consistente, o ilustración SVG propia)

---

## 🟠 TODO 2: Animaciones de scroll

### 🎯 Objetivo
Añadir scroll-driven animations y micro-interacciones que refuercen la energía de la marca.

### 📝 Pasos
- [ ] **2.1** — `animation-timeline: view()` para reveal de secciones y parallax en galería
- [ ] **2.2** — Stickers que reaccionan al scroll (rotación/desplazamiento por velocidad)
- [ ] **2.3** — Fallback IntersectionObserver (sistema actual) + `prefers-reduced-motion`
- [ ] **2.4** — Solo `transform`/`opacity` para no penalizar CWV

---

## 🟠 TODO 3: Corregir el carrusel del hero (marquee) para que sea infinito

### 🎯 Objetivo
El marquee (cinta amarilla de palabras) debe repetirse **sin salto visible** (infinito perfecto).

### 📝 Pasos
- [ ] **3.1** — Diagnosticar el salto: el `gap-10` entre las dos mitades del track rompe la alineación del `translateX(-50%)`
- [ ] **3.2** — Fix: sustituir el gap por `padding-right`/`margin-right` en cada copia (o track con 2 copias idénticas incluyendo su espaciado)
- [ ] **3.3** — Verificar: sin salto en desktop y móvil, pausa al hover, `prefers-reduced-motion`

### 📝 Nota
- El "carrusel del hero" hace referencia a la cinta marquee que está justo debajo del hero (la sección amarilla de palabras que se desplaza).

---

## 🔴 TODO 4: Animaciones de órbita con más elementos de texto en el hero

### 🎯 Objetivo
Añadir elementos **orbitando** alrededor del hero (texto girando en órbita, badges circulares con texto circular) para reforzar la energía maximalista.

### 📝 Pasos
- [ ] **4.1** — Texto circular giratorio (SVG `textPath` sobre círculo) con frases tipo "EVENTOS INOLVIDABLES • CAOS CONTROLADO •"
- [ ] **4.2** — 2–3 elementos orbitando (CSS `transform-origin` + rotación) alrededor del título o del centro del hero
- [ ] **4.3** — Palabras sueltas flotando con distintas velocidades/órbitas
- [ ] **4.4** — Coordinar con las partículas Three.js (no saturar el centro)
- [ ] **4.5** — `prefers-reduced-motion` → estáticos

### ⚠️ Consideraciones
- No saturar: 2–3 elementos como máximo, ocultos en móvil si estorban

---

## ✅ TODO 5: Corregir el botón de Mute (COMPLETADO)

### 🎯 Qué estaba mal
- Se mostraban **los dos iconos** (volumen y mute) a la vez: el CSS scoped de Astro no aplicaba el `display:none` a los SVG hijos
- El botón tampoco parecía funcional porque el estado cambiaba en el DOM pero **no se veía ningún cambio visual**

### ✅ Fix aplicado (commit `6f6bdd9`)
- La visibilidad de los iconos ahora la controla **JS con el atributo `hidden`** (`toggleAttribute`), sin depender de CSS scoped
- El estado inicial (mute visible) se aplica en el `init` del script
- Verificado con Playwright: `before: none/block → after: block/none` + `aria-pressed` correcto

---

## 🔴 TODO 6: Sección "Servicios que gritan" — cards con personaje cartoon

### 🎯 Objetivo
Rediseñar la sección de servicios: **6 cards**, una por disciplina, cada una con un **icono o personaje cartoon** que represente la disciplina específica.

### 📝 Pasos
- [ ] **6.1** — Definir personaje/ícono por disciplina: Producción (director con claqueta), Mapping (proyector 3D), Iluminación (spot), Activaciones (megáfono), Sonido (DJ), Marketing (megáfono social)
- [ ] **6.2** — Crear ilustraciones SVG propias o generar imágenes cartoon (mismo estilo que TODO 1)
- [ ] **6.3** — Card rediseñada: imagen/ilustración arriba, título + descripción, hover con rotación/sombra
- [ ] **6.4** — Datos en `src/data/services.ts` (añadir campo `image`/`character`)

---

## 🔴 TODO 7: Casos de éxito — sección animada tipo fotográfico

### 🎯 Objetivo
Nueva sección de **casos de éxito** con cards que **van bajando de forma animada** (entrada escalonada), estilo **galería fotográfica**: imagen + descripción del evento. Las imágenes se colocarán después (placeholders ahora).

### 📝 Pasos
- [ ] **7.1** — Datos mock en `src/data/cases.ts`: `{ title, client, description, image (ruta/placeholder), tone, year }`
- [ ] **7.2** — Sección `sections/Cases.astro`: cards tipo fotografía (marco, borde negro, caption)
- [ ] **7.3** — Animación de entrada: cards entran en cascada al hacer scroll (stagger + slide up) o carrusel vertical automático pausable
- [ ] **7.4** — Placeholder de imagen (rectángulo con patrón/marco) marcado para reemplazar luego
- [ ] **7.5** — Responsive: 1 col móvil, 2–3 desktop
- [ ] **7.6** — `prefers-reduced-motion` → sin animación, contenido visible

### ⚠️ Consideraciones
- "Que vaya bajando" puede implementarse como stagger al entrar en viewport (recomendado, a11y-friendly) o auto-scroll vertical con pausa

---

## 🟠 TODO 8: "Cómo lo hacemos" — línea de tiempo animada

### 🎯 Objetivo
Convertir la sección de Proceso en una **línea de tiempo animada** con datos mock del flujo real de organización de eventos.

### 📝 Pasos
- [ ] **8.1** — Datos mock ampliados: hitos con fechas/días (Ej: Día 1 briefing, Día 3 concepto, Semana 2 producción, Día del evento, +7 días reporte)
- [ ] **8.2** — Línea vertical (móvil) / horizontal con nodos (desktop), nodos que se activan al scroll
- [ ] **8.3** — Animación: nodo se ilumina + detalle se expande al entrar en viewport
- [ ] **8.4** — `prefers-reduced-motion` → línea estática

---

## 🟠 TODO 9: Archivos mock de las Opiniones

### 🎯 Objetivo
Ampliar los testimonios mock con más variedad y metadatos.

### 📝 Pasos
- [ ] **9.1** — Extender interfaz: `{ quote, name, role, initials, rating, date, eventType, verified }`
- [ ] **9.2** — 6–9 testimonios mock (clientes variados: marcas, festivales, agencias)
- [ ] **9.3** — Renderizar: rating dinámico, badge "Cliente verificado", tipo de evento

---

## 🟠 TODO 10: Patrón de fondo en la sección CTA

### 🎯 Objetivo
Crear un **patrón de fondo** para la sección CTA coherente con la marca (confeti, rayas diagonales, estrellas maximalistas).

### 📝 Pasos
- [ ] **10.1** — Patrón SVG repetible (tile): confeti + estrellas + ondas, paleta de marca
- [ ] **10.2** — Implementar como `background-image` en CSS (data-URI o archivo en `public/`) — sin requests extra
- [ ] **10.3** — Opacidad baja para no competir con el texto
- [ ] **10.4** — Alternativa: patrón animado sutil (movimiento lento)

---

## 🟢 TODO 11: Iconos de redes sociales con color oficial en hover

### 🎯 Objetivo
Los iconos de RRSS (footer, menú móvil) deben teñirse con el **color oficial de cada red** al hacer hover.

### 📝 Pasos
- [ ] **11.1** — Definir colores por red: Instagram (gradiente rosa/morado/naranja), X (blanco/negro), TikTok (cian `#00F2EA` + rosa `#FF0050`), YouTube (rojo `#FF0000`)
- [ ] **11.2** — Implementar hover con CSS (`[data-social="instagram"]:hover` etc.) o clase por red
- [ ] **11.3** — Instagram: gradiente en hover (fondo o `background-clip: text` con `color: transparent`)
- [ ] **11.4** — Verificar contraste en hover (iconos con fondo de marca)

---

## 🔄 Cómo actualizar este archivo

1. Marcar checkbox `- [ ]` → `- [x]` al completar
2. Actualizar estado y prioridad en la tabla resumen
3. Añadir nota con fecha al completar cada ítem

---

**Última actualización:** 2026-08-17
**Próxima acción:** TODO 1 (imágenes cartoon) y TODO 6 (cards de servicios con personajes)
