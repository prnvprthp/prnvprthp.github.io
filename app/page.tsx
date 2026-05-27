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

const stats = ["MS in Business Analytics · W&M", "3 yrs Industry", "7 Analytics Projects"];

const competencies = [
  {
    num: "01",
    area: "Data & Analytics",
    tagline: "From raw data to reliable insight",
    skills: [
      "Predictive Modeling",
      "Statistical Analysis",
      "Model Explainability (SHAP)",
      "Data Visualization",
      "ETL & Pipelines",
      "Clustering & Segmentation",
    ],
  },
  {
    num: "02",
    area: "Product & Strategy",
    tagline: "From insight to market action",
    skills: [
      "Go-to-Market Strategy",
      "Market Research",
      "BRD Authorship",
      "Product Launches",
      "Stakeholder Alignment",
      "Competitive Analysis",
    ],
  },
  {
    num: "03",
    area: "Technical Execution",
    tagline: "The infrastructure behind the output",
    skills: [
      "SQL & Data Warehousing",
      "Python · R",
      "Dashboard Development",
      "CRM & Workflow Automation",
      "LLM API Integration",
      "Alteryx",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <main className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-20 overflow-hidden">
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
            MS in Business Analytics @ William &amp; Mary, building at the intersection of{" "}
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
            className="flex flex-wrap justify-center gap-3"
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
        </div>

        {/* Bottom gradient fade — signals more content below */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.2 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom, transparent 0%, var(--background) 100%)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Core Competencies
          </h2>

          <div className="divide-y divide-border">
            {competencies.map((block, i) => (
              <motion.div
                key={block.area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
                className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-8 md:py-10"
              >
                {/* Left: number + title + tagline */}
                <div>
                  <span className="text-xs font-mono text-accent/50 tracking-widest mb-2 block">
                    {block.num}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-1.5">
                    {block.area}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {block.tagline}
                  </p>
                </div>

                {/* Right: skill chips */}
                <div className="flex flex-wrap gap-2 content-start">
                  {block.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-md text-sm border border-border text-foreground/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-12 flex justify-start"
          >
            <Link
              href="/experience"
              className="px-6 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:opacity-85 transition-opacity"
            >
              View Experience →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
