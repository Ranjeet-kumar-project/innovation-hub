import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const holiColors = [
  "#FF1493", "#FF6B35", "#FFD700", "#00E676", "#2196F3",
  "#E040FB", "#FF4081", "#76FF03", "#FFAB00", "#00BCD4",
];

const Particle = ({ delay, color, x, y }: { delay: number; color: string; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: Math.random() * 14 + 6,
      height: Math.random() * 14 + 6,
      backgroundColor: color,
      left: `${x}%`,
      top: `${y}%`,
      filter: `blur(${Math.random() * 2}px)`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1.5, 1, 0],
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200 - 100,
      rotate: Math.random() * 360,
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 4 + 2,
      ease: "easeOut",
    }}
  />
);

const ColorSplash = ({ delay, color, x, y }: { delay: number; color: string; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      background: `radial-gradient(circle, ${color}88 0%, ${color}00 70%)`,
      left: `${x}%`,
      top: `${y}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 2.5, 3],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 6 + 3,
      ease: "easeOut",
    }}
  />
);

const HoliBanner = () => {
  const [show, setShow] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("holi-dismissed");
    if (stored) {
      setDismissed(true);
      setShow(false);
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("holi-dismissed", "true");
    setTimeout(() => setShow(false), 500);
  };

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    color: holiColors[i % holiColors.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const splashes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    color: holiColors[i % holiColors.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  if (!show) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)",
          }}
        >
          {/* Color splashes */}
          {splashes.map((s) => (
            <ColorSplash key={`splash-${s.id}`} {...s} />
          ))}

          {/* Particles */}
          {particles.map((p) => (
            <Particle key={`particle-${p.id}`} {...p} />
          ))}

          {/* Content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="relative z-10 text-center px-6 max-w-lg"
          >
            {/* Rangoli-style ring */}
            <motion.div
              className="mx-auto mb-6 w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: "conic-gradient(#FF1493, #FF6B35, #FFD700, #00E676, #2196F3, #E040FB, #FF1493)",
                padding: "4px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center">
                <motion.span
                  className="text-5xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎨
                </motion.span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #FF1493, #FFD700, #00E676, #2196F3, #E040FB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Cormorant Garamond', serif",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Happy Holi!
            </motion.h2>

            <motion.p
              className="text-white/70 text-sm md:text-base mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Wishing you a festival full of colors, joy & love 🌈
            </motion.p>

            <motion.p
              className="text-white/40 text-xs mb-8 tracking-widest uppercase"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              From Team Infiniox
            </motion.p>

            <motion.button
              onClick={dismiss}
              className="relative px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #FF1493, #FF6B35, #FFD700)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <span className="relative z-10">Let's Celebrate 🎉</span>
            </motion.button>
          </motion.div>

          {/* Floating color powders on edges */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`corner-${i}`}
              className="absolute pointer-events-none"
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${holiColors[i * 2]}55 0%, transparent 70%)`,
                top: i < 2 ? "-50px" : "auto",
                bottom: i >= 2 ? "-50px" : "auto",
                left: i % 2 === 0 ? "-50px" : "auto",
                right: i % 2 === 1 ? "-50px" : "auto",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoliBanner;
