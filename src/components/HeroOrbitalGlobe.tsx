import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Premium blue orbital particle globe.
 * - Thousands of small uniform particles distributed on a sphere (fibonacci).
 * - Thin orbital arc rings rotating around the globe.
 * - Blue / cyan / soft navy palette. Subtle glow, slow rotation.
 * - Renders into a full-bleed absolutely-positioned canvas (parent controls sizing / opacity).
 */
export default function HeroOrbitalGlobe({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isSmall = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      Math.max(1, mount.clientWidth) / Math.max(1, mount.clientHeight),
      0.1,
      100,
    );
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.rotation.x = 0.32;
    scene.add(root);

    const R = 2.25;

    // ---------- Particle sphere ----------
    const COUNT = isSmall ? 1800 : 3800;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    // Blue palette
    const palette = [
      new THREE.Color(0x8cb8ff),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x2f80ed),
      new THREE.Color(0x0b1f45),
    ];

    for (let i = 0; i < COUNT; i++) {
      // fibonacci sphere
      const y = 1 - (i / (COUNT - 1)) * 2;
      const rr = Math.sqrt(1 - y * y);
      const theta = i * 2.399963229728653;
      const x = Math.cos(theta) * rr;
      const z = Math.sin(theta) * rr;
      positions[i * 3] = x * R;
      positions[i * 3 + 1] = y * R;
      positions[i * 3 + 2] = z * R;

      // weighted color pick
      const w = Math.random();
      const c =
        w < 0.55
          ? palette[0]
          : w < 0.8
            ? palette[1]
            : w < 0.95
              ? palette[2]
              : palette[3];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const sphereGeo = new THREE.BufferGeometry();
    sphereGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    sphereGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const sphereMat = new THREE.PointsMaterial({
      size: isSmall ? 0.028 : 0.024,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(sphereGeo, sphereMat);
    root.add(points);

    // ---------- Subtle inner glow (backlit core) ----------
    const glowGeo = new THREE.SphereGeometry(R * 0.985, 48, 48);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x0b1f45,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    });
    root.add(new THREE.Mesh(glowGeo, glowMat));

    // ---------- Orbital arcs ----------
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const orbitConfigs = [
      { r: R * 1.18, tiltX: 0.35, tiltZ: 0.55, speed: 0.05, color: 0x8cb8ff, opacity: 0.55 },
      { r: R * 1.32, tiltX: -0.45, tiltZ: 0.1, speed: -0.035, color: 0x38bdf8, opacity: 0.45 },
      { r: R * 1.5, tiltX: 0.6, tiltZ: -0.3, speed: 0.022, color: 0x2f80ed, opacity: 0.35 },
    ];

    const orbits: { mesh: THREE.Line; speed: number }[] = [];
    orbitConfigs.forEach((cfg) => {
      const pts: THREE.Vector3[] = [];
      const seg = 160;
      for (let i = 0; i <= seg; i++) {
        const t = (i / seg) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(t) * cfg.r, 0, Math.sin(t) * cfg.r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
      });
      const line = new THREE.Line(geo, mat);
      line.rotation.x = cfg.tiltX;
      line.rotation.z = cfg.tiltZ;
      orbitGroup.add(line);
      orbits.push({ mesh: line, speed: cfg.speed });
    });

    // ---------- Resize ----------
    const onResize = () => {
      if (!mount) return;
      const w = Math.max(1, mount.clientWidth);
      const h = Math.max(1, mount.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // ---------- Visibility gate ----------
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    io.observe(mount);

    // ---------- Animate ----------
    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const dt = clock.getDelta();

      if (!prefersReducedMotion) {
        root.rotation.y += dt * 0.045;
        orbits.forEach((o) => {
          o.mesh.rotation.y += dt * o.speed;
        });
      }

      if (visible) renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        // @ts-expect-error dispose geometry / material
        obj.geometry?.dispose?.();
        // @ts-expect-error dispose geometry / material
        const mat = obj.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
        else mat?.dispose?.();
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden />;
}
