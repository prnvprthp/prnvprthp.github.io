"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const stats = ["MSBA · W&M", "3 yrs Industry", "7 Analytics Projects"];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)',
          opacity: 0.07,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 text-center max-w-2xl w-full">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp(0)}
          className="text-[10px] font-mono uppercase tracking-[0.35em] text-muted-foreground mb-8"
        >
          Data Analytics · Product Strategy · GTM
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95]"
        >
          Pranav<br />Prathap
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp(0.2)}
          className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-10"
        >
          MSBA @ William &amp; Mary — building at the intersection of{' '}
          <span className="text-accent font-medium">data architecture</span> and{' '}
          <span className="text-accent font-medium">strategic go-to-market</span>.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.3)}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {stats.map((stat) => (
            <span
              key={stat}
              className="px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-border text-muted-foreground bg-muted/60"
            >
              {stat}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.4)}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:opacity-85 transition-opacity"
          >
            View Projects →
          </Link>
          <Link
            href="/experience"
            className="px-6 py-2.5 rounded-full border border-border text-muted-foreground font-bold text-sm hover:text-foreground hover:border-foreground/30 transition-all"
          >
            Experience
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
