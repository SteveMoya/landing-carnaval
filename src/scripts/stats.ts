/** Contadores animados de stats. Respeta prefers-reduced-motion. */
export function initStats(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-stat]');
  if (items.length === 0) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = (el: HTMLElement): void => {
    const target = Number(el.dataset.stat ?? '0');
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';

    if (reduced || !('IntersectionObserver' in window)) {
      el.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 },
  );

  items.forEach((el) => observer.observe(el));
}
