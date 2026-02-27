import { useEffect, useCallback } from "react";

const GULAL_COLORS = [
  "#FF1493", "#FF6B35", "#FFD700", "#00E676", "#2196F3",
  "#E040FB", "#FF4081", "#76FF03", "#FFAB00", "#00BCD4",
  "#FF5252", "#AA00FF", "#F50057", "#64DD17", "#FF9100",
];

interface Splat {
  x: number;
  y: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
  angle: number;
  stretch: number;
}

interface Speck {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

const GulalEffect = () => {
  const createBurst = useCallback((cx: number, cy: number) => {
    const canvas = document.getElementById("gulal-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const color1 = GULAL_COLORS[Math.floor(Math.random() * GULAL_COLORS.length)];
    const color2 = GULAL_COLORS[Math.floor(Math.random() * GULAL_COLORS.length)];
    const palette = [color1, color2];

    const splats: Splat[] = [];
    const specks: Speck[] = [];

    // Main center splat – irregular blob
    for (let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 15;
      splats.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        radius: Math.random() * 25 + 20,
        color: color1,
        alpha: 0.85,
        decay: 0.003,
        angle: Math.random() * Math.PI,
        stretch: 0.6 + Math.random() * 0.8,
      });
    }

    // Scattered clumps – like thrown powder landing
    for (let i = 0; i < 18; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 160;
      const col = palette[Math.floor(Math.random() * palette.length)];
      splats.push({
        x: cx + Math.cos(angle) * dist + (Math.random() - 0.5) * 30,
        y: cy + Math.sin(angle) * dist + (Math.random() - 0.5) * 30,
        radius: Math.random() * 18 + 6,
        color: col,
        alpha: 0.7 + Math.random() * 0.2,
        decay: 0.004 + Math.random() * 0.002,
        angle: Math.random() * Math.PI,
        stretch: 0.4 + Math.random() * 1.2,
      });
    }

    // Tiny scattered specks – powder dust
    for (let i = 0; i < 120; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 20 + Math.random() * 220;
      const col = palette[Math.floor(Math.random() * palette.length)];
      specks.push({
        x: cx + Math.cos(angle) * dist + (Math.random() - 0.5) * 40,
        y: cy + Math.sin(angle) * dist + (Math.random() - 0.5) * 40,
        size: Math.random() * 4 + 1,
        color: col,
        alpha: 0.5 + Math.random() * 0.5,
        decay: 0.005 + Math.random() * 0.004,
      });
    }

    // Streak / spray lines
    const drawStreak = (ctx: CanvasRenderingContext2D, sx: number, sy: number, angle: number, len: number, color: string, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha * 0.4;
      ctx.translate(sx, sy);
      ctx.rotate(angle);
      for (let i = 0; i < len; i += 3) {
        const w = Math.random() * 3 + 1;
        ctx.fillStyle = color;
        ctx.fillRect(i, (Math.random() - 0.5) * 6, w, w);
      }
      ctx.restore();
    };

    let animId: number;
    let frame = 0;
    const maxFrames = 180;

    const animate = () => {
      frame++;
      // Don't clear – let splats stay and fade
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;

      // Draw splats as irregular blobs
      for (const s of splats) {
        if (s.alpha <= 0) continue;
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.scale(1, s.stretch);

        // Irregular blob using multiple overlapping circles
        ctx.fillStyle = s.color;
        ctx.beginPath();
        const pts = 8;
        for (let i = 0; i <= pts; i++) {
          const a = (i / pts) * Math.PI * 2;
          const jitter = s.radius * (0.7 + Math.random() * 0.5);
          const px = Math.cos(a) * jitter;
          const py = Math.sin(a) * jitter;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.quadraticCurveTo(
            Math.cos(a - 0.3) * jitter * 1.1,
            Math.sin(a - 0.3) * jitter * 1.1,
            px, py
          );
        }
        ctx.closePath();
        ctx.fill();

        // Soft glow
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, s.radius * 1.3);
        grad.addColorStop(0, s.color + "66");
        grad.addColorStop(1, s.color + "00");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, s.radius * 1.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        s.alpha -= s.decay;
      }

      // Draw specks
      for (const sp of specks) {
        if (sp.alpha <= 0) continue;
        alive = true;
        ctx.globalAlpha = Math.max(0, sp.alpha);
        ctx.fillStyle = sp.color;

        // Irregular speck shape
        ctx.save();
        ctx.translate(sp.x, sp.y);
        ctx.rotate(Math.random() * Math.PI);
        ctx.fillRect(-sp.size / 2, -sp.size / 2, sp.size, sp.size * (0.5 + Math.random()));
        ctx.restore();

        sp.alpha -= sp.decay;
      }

      // Draw streaks (only first few frames)
      if (frame < 5) {
        for (let i = 0; i < 8; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * 40;
          drawStreak(
            ctx,
            cx + Math.cos(angle) * dist,
            cy + Math.sin(angle) * dist,
            angle,
            30 + Math.random() * 60,
            palette[Math.floor(Math.random() * palette.length)],
            0.6
          );
        }
      }

      ctx.globalAlpha = 1;

      if (alive && frame < maxFrames) {
        animId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
