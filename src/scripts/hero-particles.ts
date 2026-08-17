/** Hero 3D: campo de partículas con Three.js (carga diferida, pausa fuera de viewport). */
export function initHeroParticles(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-canvas]');
  if (!canvas) return;

  // Respetar prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Carga diferida de three (module ~150KB gzip) — solo cuando el hero es visible
  let dispose: (() => void) | null = null;

  const io = new IntersectionObserver(
    async (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !dispose) {
          io.disconnect();
          dispose = await mount(canvas);
        } else if (!entry.isIntersecting && dispose) {
          dispose();
          dispose = null;
        }
      }
    },
    { threshold: 0.05 },
  );
  io.observe(canvas);
}

async function mount(canvas: HTMLCanvasElement): Promise<() => void> {
  const THREE = await import('three');

  const container = canvas.parentElement;
  if (!container) return () => {};

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 9;

  // Partículas: 700 puntos con colores de la paleta
  const palette = [0xff3d9a, 0xffe600, 0x2b6cff, 0xffb800];
  const count = 700;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Un toro wireframe girando despacio como ancla visual
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(3.2, 0.02, 8, 64),
    new THREE.MeshBasicMaterial({ color: 0xff3d9a, transparent: true, opacity: 0.5 }),
  );
  torus.rotation.x = Math.PI / 2.4;
  scene.add(torus);

  const resize = (): void => {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  let raf = 0;
  let running = true;

  const loop = (): void => {
    if (!running) return;
    points.rotation.y += 0.0009;
    points.rotation.x += 0.0003;
    torus.rotation.z += 0.0015;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  };
  loop();

  const onVisibility = (): void => {
    running = !document.hidden;
    if (running) loop();
  };
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('resize', resize);
    geometry.dispose();
    material.dispose();
    torus.geometry.dispose();
    renderer.dispose();
  };
}
