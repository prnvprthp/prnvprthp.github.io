"use client";

import { motion } from 'framer-motion';
import { NextPage } from '@/app/components/NextPage';

type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  stats?: string[];
  badge?: string;
};

const experiences: Experience[] = [
  {
    company: "William & Mary",
    role: "Graduate Assistant",
    period: "Feb 2026 toPresent",
    points: [
      "Serving as Statistics & Financial Management Teaching Assistant for UG business students across 7 courses, supporting 3 professors in curriculum delivery and technical student support.",
      "Automating print shop communications & marketing workflows, migrating legacy tools from Google Workspace to the Microsoft ecosystem to streamline administrative efficiency.",
      "Boosting overall process efficiency and ensuring strict alignment with university IT guidelines and data security standards.",
    ],
    stats: ["7 Courses", "3 Professors"],
  },
  {
    company: "INSILLION",
    role: "Product Marketing & Management",
    period: "Jan 2023 toJuly 2025",
    points: [
      "Built predictive fit/gap models assessing market risk, competition, and adoption trends to inform global expansion strategy and product-market fit.",
      "Developed an end-to-end Go-to-Market strategy for USA expansion, including customer acquisition planning, detailed market research, and strategic partnership development.",
      "Rebuilt pre-sales database & CRM workflows, significantly increasing data integrity and cutting retrieval time from ~10 days to under 2 minutes through process automation.",
      "Aligned cross-functional teams and authored 5 Business Requirement Documents (BRDs), translating complex technical objectives into strategic executive insights.",
      "Directed the first USA product launch, coordinating complex timelines, resources, and multi-level approvals to ensure a successful on-schedule rollout.",
      "Integrated LLM APIs and developed client-facing embedded web components for automated Intelligent Document Processing (IDP) and quote analysis, enhancing customer self-service capabilities.",
    ],
    stats: ["5 BRDs", "1st USA Launch"],
    badge: "100% Salary Appraisal",
  },
  {
    company: "Anheuser-Busch InBev",
    role: "Research Analyst",
    period: "May 2021 toJan 2022",
    points: [
      "Identified critical internal workflow inefficiencies within the Beer-Garage division and delivered data-driven improvements that optimized operational throughput.",
      "Crafted comprehensive 3-year, research-driven strategic plans to guide long-term business priorities and capitalize on emerging global market trends.",
      "Directed full-cycle international pilot initiatives, successfully delivering 3 market rollouts across Sub-Saharan Africa and Europe, establishing a blueprint for regional expansion.",
    ],
    stats: ["3 Market Rollouts", "Sub-Saharan Africa · Europe"],
  },
];

export default function ExperiencePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Experience</h1>
        <p className="text-muted-foreground text-base">3 years across product strategy, research, and analytics.</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Continuous vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-16 md:space-y-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="relative pl-7 md:pl-9"
            >
              {/* Timeline node */}
              <span
                className="absolute top-[7px] -left-[4px] w-2 h-2 rounded-full bg-accent"
                style={{ boxShadow: "0 0 0 3px var(--background)" }}
              />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1.5 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h2>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-secondary-accent/10 text-secondary-accent border border-secondary-accent/25">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-semibold text-sm md:text-base mt-1">{exp.company}</p>
                </div>
                <span className="text-muted-foreground font-mono text-xs shrink-0 mt-1.5">{exp.period}</span>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Stats + badge row */}
              {(exp.stats || exp.badge) && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {exp.stats?.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-secondary-accent/30 text-secondary-accent bg-secondary-accent/5"
                    >
                      {stat}
                    </span>
                  ))}
                  {exp.badge && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-accent/25 text-accent bg-accent/5">
                      {exp.badge}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <NextPage current="/experience" />
    </main>
  );
}
