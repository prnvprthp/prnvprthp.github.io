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

const techStack = [
  {
    category: "Languages",
    tools: ["Python", "R", "SQL", "JavaScript"],
  },
  {
    category: "Machine Learning",
    tools: ["XGBoost", "Random Forest", "Logistic Regression", "SHAP", "SMOTE", "K-Means", "Scikit-learn"],
  },
  {
    category: "Data & Statistics",
    tools: ["Monte Carlo Simulation", "Time Series (TSLM)", "Tidyverse", "Brownian Motion", "Pandas", "NumPy"],
  },
  {
    category: "Visualization & BI",
    tools: ["Tableau", "Plotly", "Dash", "ggplot2", "Matplotlib"],
  },
  {
    category: "Infrastructure & APIs",
    tools: ["PostgreSQL", "Data Warehousing", "FRED API", "LLM APIs", "ETL Pipelines"],
  },
  {
    category: "Tools & Platforms",
    tools: ["Microsoft 365", "Google Workspace", "CRM Systems", "Excel", "Git"],
  },
];

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
            className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mb-8"
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
            MSBA @ William &amp; Mary, building at the intersection of{" "}
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
                className="px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-foreground/15 text-foreground/50"
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
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        >
          <span className="text-xs font-medium tracking-widest text-muted-foreground">
            Scroll to explore
          </span>
          {/* Mouse shell */}
          <div className="w-[28px] h-[44px] rounded-full border-2 border-muted-foreground/60 flex items-start justify-center pt-[7px]">
            <motion.div
              className="w-[4px] h-[8px] rounded-full bg-accent"
              animate={{ y: [0, 14, 0], opacity: [1, 0.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </div>
          {/* Chevron below mouse */}
          <motion.svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="text-muted-foreground/70"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </motion.div>
      </main>

      {/* ── Competencies ──────────────────────────────── */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border pt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Core Competencies
          </h2>
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
                <h3 className="text-base font-bold text-foreground mb-4">
                  {block.area}
                </h3>
                <ul className="space-y-2.5">
                  {block.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Tech Stack ────────────────────────────────── */}
      <section className="pb-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border pt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Tools &amp; Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-md text-xs font-medium border border-border text-foreground/70 hover:border-secondary-accent hover:text-secondary-accent transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
