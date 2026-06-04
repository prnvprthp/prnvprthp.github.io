"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Spring gives a smooth, slightly-lagging follow
  const springX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.5 });

  useEffect(() => {
    // Don't track on touch-only devices (no cursor exists)
    if (window.matchMedia("(hover: none)").matches) return;

    const SIZE = 260;
    const HALF = SIZE / 2;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - HALF);
      mouseY.set(e.clientY - HALF);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="hidden md:block"
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        top: 0,
        left: 0,
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: 0.11,
        pointerEvents: "none",
        zIndex: 9998,
        willChange: "transform",
      }}
    />
  );
}
