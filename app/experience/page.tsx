"use client";

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "William & Mary",
    role: "Graduate Assistant",
    period: "Feb 2026 — Present",
    points: [
      "Serving as Statistics & Financial Management Teaching Assistant for UG business students across 7 courses, supporting 3 professors in curriculum delivery and technical student support.",
      "Automating print shop communications & marketing workflows, migrating legacy tools from Google Workspace to the Microsoft ecosystem to streamline administrative efficiency.",
      "Boosting overall process efficiency and ensuring strict alignment with university IT guidelines and data security standards.",
    ],
  },
  {
    company: "INSILLION",
    role: "Product Marketing and Management",
    period: "Jan 2023 — July 2025",
    points: [
      "Built predictive fit/gap models assessing market risk, competition, and adoption trends to inform global expansion strategy and product-market fit.",
      "Developed an end-to-end Go-to-Market strategy for USA expansion, including customer acquisition planning, detailed market research, and strategic partnership development.",
      "Rebuilt pre-sales database & CRM workflows, significantly increasing data integrity and cutting retrieval time from ~10 days to under 2 minutes through process automation.",
      "Aligned cross-functional teams and authored 5 Business Requirement Documents (BRDs), translating complex technical objectives into strategic executive insights.",
      "Directed the first USA product launch, coordinating complex timelines, resources, and multi-level approvals to ensure a successful on-schedule rollout.",
      "Integrated LLM APIs and developed client-facing embedded web components for automated Intelligent Document Processing (IDP) and quote analysis, enhancing customer self-service capabilities.",
    ],
    badge: "100% Salary Appraisal",
  },
  {
    company: "Anheuser-Busch InBev",
    role: "Research Analyst",
    period: "May 2021 — Jan 2022",
    points: [
      "Identified critical internal workflow inefficiencies within the Beer-Garage division and delivered data-driven improvements that optimized operational throughput.",
      "Crafted comprehensive 3-year, research-driven strategic plans to guide long-term business priorities and capitalize on emerging global market trends.",
      "Directed full-cycle international pilot initiatives, successfully delivering 3 market rollouts across Sub-Saharan Africa and Europe, establishing a blueprint for regional expansion.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 border-b border-border pb-4 text-foreground"
      >
        Experience
      </motion.h1>

      <div className="space-y-16 md:space-y-20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
            className="relative border-l-2 border-accent pl-6 md:pl-8"
          >
            <div className="flex justify-between items-start flex-wrap gap-x-4 gap-y-2">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h2>
                <p className="text-accent font-medium text-base md:text-lg">{exp.company}</p>
              </div>
              <span className="text-muted-foreground font-mono text-xs md:text-sm">{exp.period}</span>
            </div>

            <ul className="mt-6 space-y-4 text-muted-foreground text-sm md:text-base">
              {exp.points.map((point, j) => (
                <li key={j} className="flex items-start">
                  <span className="mr-2 text-accent shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>

            {exp.badge && (
              <div className="mt-6 inline-block bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">
                  {exp.badge}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
