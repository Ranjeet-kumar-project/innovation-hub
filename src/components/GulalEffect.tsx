import { useEffect, useCallback } from "react";

const GULAL_COLORS = [
  "#FF1493", "#FF6B35", "#FFD700", "#00E676", "#2196F3",
  "#E040FB", "#FF4081", "#76FF03", "#FFAB00", "#00BCD4",
  "#FF5252", "#AA00FF", "#F50057", "#64DD17", "#FF9100",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
}

const GulalEffect = () => {
  const createBurst = useCallback((cx: number, cy: number) => {
    const canvas = document.getElementById("gulal-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const count = 60 + Math.floor(Math.random() * 30);
    const baseColor = GULAL_COLORS[Math.floor(Math.random() * GULAL_COLORS.length)];
    const palette = [baseColor, GULAL_COLORS[Math.floor(Math.random() * GULAL_COLORS.length)]];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 8 + 3,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: 1,
        decay: 0.012 + Math.random() * 0.008,
        gravity: 0.06 + Math.random() * 0.04,
      });
    }

    // Cloud puff particles (larger, slower)
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 0.5;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 30 + 15,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: 0.4,
        decay: 0.008,
        gravity: -0.02,
      });
    }

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.alpha -= p.decay;

        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      if (alive) {
        animId = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      let x: number, y: number;
      if ("touches" in e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      createBurst(x, y);
    };

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler, { passive: true });
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [createBurst]);

  return (
    <canvas
      id="gulal-canvas"
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default GulalEffect;
