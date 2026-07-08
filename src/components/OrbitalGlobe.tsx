import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Abstract orbital network globe — no earth texture.
 * - thin gray latitude/longitude wire lines
 * - small muted nodes on the sphere
 * - a few animated blue "route" arcs between nodes
 * Renders into a full-bleed absolutely-positioned canvas.
 */
export default function OrbitalGlobe({ className }: { className?: string }) {
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
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.x = 0.35;
    scene.add(group);

    const R = 2.2;

    // ---------- Wire sphere (thin gray lat/long lines) ----------
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x3a4757,
      transparent: true,
      opacity: 0.35,
    });

    const latCount = isSmall ? 8 : 12;
    for (let i = 1; i < latCount; i++) {
      const phi = (i / latCount) * Math.PI;
      const y = Math.cos(phi) * R;
      const r = Math.sin(phi) * R;
      const pts: THREE.Vector3[] = [];
      const seg = 96;
      for (let j = 0; j <= seg; j++) {
        const t = (j / seg) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      group.add(new THREE.Line(geo, wireMat));
    }

    const lonCount = isSmall ? 10 : 16;
    for (let i = 0; i < lonCount; i++) {
      const theta = (i / lonCount) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      const seg = 96;
      for (let j = 0; j <= seg; j++) {
        const phi = (j / seg) * Math.PI;
        const x = Math.sin(phi) * Math.cos(theta) * R;
        const y = Math.cos(phi) * R;
        const z = Math.sin(phi) * Math.sin(theta) * R;
        pts.push(new THREE.Vector3(x, y, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      group.add(new THREE.Line(geo, wireMat));
    }

    // ---------- Outer orbit rings (layered trajectories) ----------
    const orbitMat = new THREE.LineBasicMaterial({
      color: 0x4a5b70,
      transparent: true,
      opacity: 0.45,
    });
    const orbitGroup = new THREE.Group();
    const orbits: { mesh: THREE.Line; speed: number }[] = [];
    const orbitConfigs = [
      { r: R * 1.15, tiltX: 0.2, tiltZ: 0.5, speed: 0.05 },
      { r: R * 1.28, tiltX: -0.4, tiltZ: 0.15, speed: -0.035 },
      { r: R * 1.42, tiltX: 0.55, tiltZ: -0.25, speed: 0.025 },
    ];
    orbitConfigs.forEach((cfg) => {
      const pts: THREE.Vector3[] = [];
      const seg = 140;
      for (let i = 0; i <= seg; i++) {
        const t = (i / seg) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(t) * cfg.r, 0, Math.sin(t) * cfg.r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, orbitMat);
      line.rotation.x = cfg.tiltX;
      line.rotation.z = cfg.tiltZ;
      orbitGroup.add(line);
      orbits.push({ mesh: line, speed: cfg.speed });
    });
    scene.add(orbitGroup);

    // ---------- Nodes on sphere ----------
    const nodeCount = isSmall ? 55 : 110;
    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // fibonacci sphere distribution
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const rr = Math.sqrt(1 - y * y);
      const theta = i * 2.399963229728653;
      const x = Math.cos(theta) * rr;
      const z = Math.sin(theta) * rr;
      nodePositions.push(new THREE.Vector3(x * R, y * R, z * R));
    }
    const nodeGeo = new THREE.BufferGeometry();
    const arr = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x8a97a8,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodes);

    // ---------- Highlighted blue route arcs ----------
    const routeMat = new THREE.LineBasicMaterial({
      color: 0x4c8dff,
      transparent: true,
      opacity: 0.9,
    });
    const routes: {
      line: THREE.Line;
      positions: THREE.Vector3[];
      phase: number;
    }[] = [];

    function greatCircleArc(a: THREE.Vector3, b: THREE.Vector3, segs = 60) {
      const pts: THREE.Vector3[] = [];
      const av = a.clone().normalize();
      const bv = b.clone().normalize();
      const omega = Math.acos(Math.min(1, Math.max(-1, av.dot(bv))));
      const sinO = Math.sin(omega);
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const s1 = Math.sin((1 - t) * omega) / sinO;
        const s2 = Math.sin(t * omega) / sinO;
        const p = av
          .clone()
          .multiplyScalar(s1)
          .add(bv.clone().multiplyScalar(s2));
        // lift above surface for arc feel
        const lift = 1 + 0.28 * Math.sin(Math.PI * t);
        pts.push(p.multiplyScalar(R * lift));
      }
      return pts;
    }

    const routeCount = isSmall ? 4 : 6;
    for (let i = 0; i < routeCount; i++) {
      const a = nodePositions[Math.floor(Math.random() * nodePositions.length)];
      const b = nodePositions[Math.floor(Math.random() * nodePositions.length)];
      const pts = greatCircleArc(a, b, 64);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, routeMat.clone());
      group.add(line);
      routes.push({ line, positions: pts, phase: Math.random() * Math.PI * 2 });
    }

    // Highlighted endpoint dots
    const hlGeo = new THREE.BufferGeometry();
    const hlArr = new Float32Array(routes.length * 2 * 3);
    routes.forEach((r, i) => {
      const a = r.positions[0];
      const b = r.positions[r.positions.length - 1];
      hlArr[i * 6] = a.x;
      hlArr[i * 6 + 1] = a.y;
      hlArr[i * 6 + 2] = a.z;
      hlArr[i * 6 + 3] = b.x;
      hlArr[i * 6 + 4] = b.y;
      hlArr[i * 6 + 5] = b.z;
    });
    hlGeo.setAttribute("position", new THREE.BufferAttribute(hlArr, 3));
    const hlMat = new THREE.PointsMaterial({
      color: 0x6ea8ff,
      size: 0.12,
      transparent: true,
      opacity: 1,
    });
    group.add(new THREE.Points(hlGeo, hlMat));

    // ---------- Resize ----------
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // ---------- Animate ----------
    let raf = 0;
    const clock = new THREE.Clock();
    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    io.observe(mount);

    const tick = () => {
      const dt = clock.getDelta();
      const t = clock.elapsedTime;

      if (!prefersReducedMotion) {
        group.rotation.y += dt * 0.06;
        orbits.forEach((o) => {
          o.mesh.rotation.y += dt * o.speed;
        });
        // subtle pulse on route lines
        routes.forEach((r, i) => {
          const m = r.line.material as THREE.LineBasicMaterial;
          m.opacity = 0.55 + 0.35 * (0.5 + 0.5 * Math.sin(t * 1.2 + r.phase + i));
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
