/** Sonido opcional (Web Audio API): blips sintetizados en interacción.
 *  Desactivado por defecto. El usuario lo enciende con el toggle visible.
 *  El AudioContext se crea en el primer gesto (autoplay policy). */
let ctx: AudioContext | null = null;
let enabled = false;

function blip(freq: number, time: number): void {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.04, time);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);
  osc.connect(gain).connect(ctx.destination);
  osc.start(time);
  osc.stop(time + 0.14);
}

export function initSound(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-sound-toggle]');
  if (!toggle) return;

  const setState = (on: boolean): void => {
    enabled = on;
    toggle.setAttribute('aria-pressed', String(on));
    toggle.classList.toggle('is-on', on);
    const iconOn = toggle.querySelector('[data-icon="volume"]');
    const iconOff = toggle.querySelector('[data-icon="volume-off"]');
    if (iconOn && iconOff) {
      iconOn.setAttribute('hidden', String(!on));
      iconOff.setAttribute('hidden', String(on));
    }
  };

  try {
    setState(localStorage.getItem('carnaval-sound') === 'on');
  } catch {
    setState(false);
  }

  toggle.addEventListener('click', () => {
    if (!enabled) {
      ctx = ctx ?? new AudioContext();
      void ctx.resume();
    }
    setState(!enabled);
    try {
      localStorage.setItem('carnaval-sound', enabled ? 'on' : 'off');
    } catch {
      /* sin storage */
    }
    if (enabled) blip(880, ctx!.currentTime);
  });

  // Hover/click en CTA principales cuando el sonido está activo
  const targets = document.querySelectorAll<HTMLElement>('[data-sound]');
  targets.forEach((el) => {
    el.addEventListener('pointerenter', () => {
      if (enabled && ctx) blip(660, ctx.currentTime);
    });
    el.addEventListener('click', () => {
      if (enabled && ctx) blip(990, ctx.currentTime);
    });
  });
}
