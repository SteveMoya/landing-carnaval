/** Header: estado scrolled + menú móvil (apertura/cierre, Escape, foco). */
export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const button = document.querySelector<HTMLButtonElement>('[data-menu-button]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const closeButtons = document.querySelectorAll<HTMLButtonElement>('[data-menu-close]');

  if (!button || !menu) return;

  const onScroll = (): void => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const open = (): void => {
    menu.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('overflow-hidden');
    menu.querySelector<HTMLElement>('a, button')?.focus();
  };

  const close = (): void => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('overflow-hidden');
    button.focus();
  };

  button.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) close();
    else open();
  });

  closeButtons.forEach((btn) => btn.addEventListener('click', close));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) close();
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
}
