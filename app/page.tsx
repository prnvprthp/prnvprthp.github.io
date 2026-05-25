"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const stats = ["MSBA · W&M", "3 yrs Industry", "7 Analytics Projects"];

const competencies = [
  {
    area: "Data & Analytics",
    skills: [
      "Predictive Modeling",
      "Statistical Analysis",
      "Model Explainability",
      "Data Visualization",
    ],
  },
  {
    area: "Product & Strategy",
    skills: [
      "Go-to-Market Strategy",
      "Market Research",
      "BRD Authorship",
      "Product Launches",
    ],
  },
  {
    area: "Technical Execution",
    skills: [
      "SQL & Data Warehousing",
      "Python · R",
      "Dashboard Development",
      "CRM & Workflow Automation",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)",
            opacity: 0.07,
            pointerEvents: "none",
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
            Pranav
            <br />
            Prathap
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp(0.2)}
            className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-10"
          >
            MSBA @ William &amp; Mary — building at the intersection of{" "}
            <span className="text-accent font-medium">data architecture</span>{" "}
            and{" "}
            <span className="text-accent font-medium">
              strategic go-to-market
            </span>
            .
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground/40"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </main>

      {/* ── Competencies ──────────────────────────────── */}
      <section className="pb-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border pt-16"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-12">
            Core Competencies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {competencies.map((block, i) => (
              <motion.div
                key={block.area}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <h3 className="text-sm font-bold text-foreground mb-5">
                  {block.area}
                </h3>
                <ul className="space-y-2.5">
                  {block.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent)", opacity: 0.7 }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
