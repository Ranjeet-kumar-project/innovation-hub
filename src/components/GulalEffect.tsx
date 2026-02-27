import { useEffect, useCallback, useRef } from "react";

const GULAL_COLORS = [
  ["#FF1493", "#FF69B4", "#FF85C8"],
  ["#FF6B35", "#FF8C5A", "#FFAB82"],
  ["#FFD700", "#FFE44D", "#FFF080"],
  ["#00E676", "#4DFF9E", "#80FFB8"],
  ["#2196F3", "#64B5F6", "#90CAF9"],
  ["#E040FB", "#EA80FC", "#F0A0FD"],
  ["#76FF03", "#A0FF44", "#C0FF80"],
  ["#00BCD4", "#4DD0E1", "#80DEEA"],
];

class PowderParticle {
  x: number; y: number;
  originX: number; originY: number;
  vx: number; vy: number;
  size: number;
  baseSize: number;
  color: string;
  life: number;
  maxLife: number;
  phase: "explode" | "settle" | "fade";
  friction: number;
  settled = false;

  constructor(x: number, y: number, colors: string[]) {
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const power = Math.pow(Math.random(), 0.5) * 12 + 2;
    this.vx = Math.cos(angle) * power;
    this.vy = Math.sin(angle) * power - Math.random() * 3;
    this.baseSize = Math.random() * 6 + 2;
    this.size = this.baseSize;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.maxLife = 80 + Math.random() * 60;
    this.life = this.maxLife;
    this.phase = "explode";
    this.friction = 0.94 + Math.random() * 0.04;
  }

  update() {
    this.life--;
    const progress = 1 - this.life / this.maxLife;

    if (progress < 0.15) {
      this.phase = "explode";
    } else if (progress < 0.5) {
      this.phase = "settle";
    } else {
      this.phase = "fade";
    }

    switch (this.phase) {
      case "explode":
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.15;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.size = this.baseSize * (1 + (1 - progress / 0.15) * 2);
        break;
      case "settle":
        this.x += this.vx * 0.3;
        this.y += this.vy * 0.3;
        this.vy += 0.08;
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.size = this.baseSize * 1.2;
        break;
      case "fade":
        this.size = this.baseSize * (1 - (progress - 0.5) / 0.5) * 1.2;
        break;
    }

    return this.life > 0 && this.size > 0.3;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const progress = 1 - this.life / this.maxLife;
    let alpha: number;

    if (progress < 0.1) {
      alpha = progress / 0.1;
    } else if (progress > 0.6) {
      alpha = (1 - progress) / 0.4;
    } else {
      alpha = 1;
    }

    ctx.globalAlpha = Math.max(0, alpha * 0.85);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2);
    ctx.fill();
  }
}

class CloudPuff {
  x: number; y: number;
  radius: number;
  maxRadius: number;
  color: string;
  life: number;
  maxLife: number;
  vx: number; vy: number;

  constructor(x: number, y: number, colors: string[]) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 30;
    this.x = x + Math.cos(angle) * dist;
    this.y = y + Math.sin(angle) * dist;
    this.radius = 0;
    this.maxRadius = 30 + Math.random() * 50;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.maxLife = 60 + Math.random() * 40;
    this.life = this.maxLife;
    const moveAngle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 0.5;
    this.vx = Math.cos(moveAngle) * speed;
    this.vy = Math.sin(moveAngle) * speed - 0.5;
  }

  update() {
    this.life--;
    const progress = 1 - this.life / this.maxLife;

    // Expand quickly then slow
    if (progress < 0.3) {
      this.radius = this.maxRadius * (progress / 0.3) * 0.8;
    } else {
      this.radius = this.maxRadius * (0.8 + 0.2 * ((progress - 0.3) / 0.7));
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.98;
    this.vy *= 0.98;

    return this.life > 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const progress = 1 - this.life / this.maxLife;
    let alpha: number;

    if (progress < 0.15) {
      alpha = (progress / 0.15) * 0.35;
    } else if (progress > 0.5) {
      alpha = (1 - progress) / 0.5 * 0.35;
    } else {
      alpha = 0.35;
    }

    ctx.globalAlpha = Math.max(0, alpha);
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    grad.addColorStop(0, this.color);
    grad.addColorStop(0.4, this.color + "AA");
    grad.addColorStop(1, this.color + "00");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const GulalEffect = () => {
  const particlesRef = useRef<PowderParticle[]>([]);
  const cloudsRef = useRef<CloudPuff[]>([]);
  const animRef = useRef<number>(0);
  const runningRef = useRef(false);

  const startLoop = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    if (runningRef.current) return;
    runningRef.current = true;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw clouds first (behind particles)
      cloudsRef.current = cloudsRef.current.filter((c) => {
        const alive = c.update();
        if (alive) c.draw(ctx);
        return alive;
      });

      // Draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        const alive = p.update();
        if (alive) p.draw(ctx);
        return alive;
      });

      ctx.globalAlpha = 1;

      if (particlesRef.current.length > 0 || cloudsRef.current.length > 0) {
        animRef.current = requestAnimationFrame(loop);
      } else {
        runningRef.current = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    loop();
  }, []);

  const createBurst = useCallback((cx: number, cy: number) => {
    const canvas = document.getElementById("gulal-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pick a random color palette
    const palette = GULAL_COLORS[Math.floor(Math.random() * GULAL_COLORS.length)];

    // Create powder particles
    for (let i = 0; i < 90; i++) {
      particlesRef.current.push(new PowderParticle(cx, cy, palette));
    }

    // Create cloud puffs
    for (let i = 0; i < 8; i++) {
      cloudsRef.current.push(new CloudPuff(cx, cy, palette));
    }

    startLoop(canvas, ctx);
  }, [startLoop]);

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
      cancelAnimationFrame(animRef.current);
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
