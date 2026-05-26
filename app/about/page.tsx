"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const pillars = [
  {
    title: "Predictive & Statistical Modeling",
    body: "From patient churn correlations to Monte Carlo investment simulations, I build models that look beyond static forecasts, designed around uncertainty, edge cases, and explainability. SHAP values, sensitivity analysis, and interpretability aren't afterthoughts; they're how I make sure the output actually gets used.",
  },
  {
    title: "Data Systems & ETL Automation",
    body: "I design warehouse schemas and automate ingestion pipelines using Python, SQL, R, and Alteryx. Data quality is treated as a first-class requirement, not a cleanup task. If a downstream report is wrong, the root cause is almost always upstream. That's where I try to fix it.",
  },
  {
    title: "Cross-Functional Strategy",
    body: "I've spent a lot of time navigating the gap between what engineers build and what executives need to decide. Authoring BRDs, running GTM launches, and bridging legal, technical, and business stakeholders has taught me that the clearest communicator in the room usually wins, regardless of who has the best model.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">

      {/* Header */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp(0)}
        className="mb-10 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-5">About Me</h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          I sit at the intersection of data engineering, predictive analytics, and business strategy.
          I love diving into complex, messy datasets and turning them into clear, actionable roadmaps
          that drive executive decisions. I care just as much about whether the insight actually
          gets acted on as I do about building it.
        </p>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp(0.1)}
        className="text-base md:text-lg text-muted-foreground leading-relaxed mb-16 md:mb-20"
      >
        Whether I'm building machine learning models, automating tedious workflows, or launching a
        product in a new market, my goal is always the same: to create reliable, data-driven systems
        that organizations can actually trust and use.
      </motion.p>

      {/* Journey */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp(0.15)}
        className="border-t border-border pt-12 md:pt-16 mb-16 md:mb-20"
      >
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">My Journey</h2>
        <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            My background started firmly in the technical realm. I earned a B.Tech. in Computer
            Science & Engineering with a minor in Big Data Analytics from SRM University. I enjoyed
            the pure engineering side, but I kept gravitating toward the problems that sat just
            outside the codebase: the strategic questions, the operational bottlenecks, the places
            where better data could actually change a decision.
          </p>
          <p>
            That pull took me to{" "}
            <span className="text-foreground font-medium">INSILLION</span>, where I spent two and a
            half years in product strategy across global markets. I built fit/gap predictive models,
            rebuilt the pre-sales CRM from scratch, authored BRDs that aligned engineering with
            executive priorities, and eventually directed the company's first product launch in the
            United States. I also got to integrate LLM APIs for automated document processing, which
            turned out to be one of the more technically exciting threads I've pulled on professionally.
          </p>
          <p>
            Before that, at{" "}
            <span className="text-foreground font-medium">Anheuser-Busch InBev</span>, I worked as a
            Research Analyst inside the Beer-Garage division, where I tracked down operational
            inefficiencies and led international pilot rollouts across Europe and Sub-Saharan
            Africa. That experience taught me what "move fast" actually means when the stakes are
            real and the timelines are fixed.
          </p>
          <p>
            Right now, I'm completing my{" "}
            <span className="text-foreground font-medium">
              M.S. in Business Analytics at William & Mary
            </span>{" "}
            on a 40% merit scholarship, while serving as a Graduate Assistant supporting three
            professors across seven courses in Statistics and Financial Management. The coursework is
            dense (stochastic modeling, deep learning, optimization), but honestly the most useful
            thing has been teaching. Explaining complex concepts to undergrads forces you to actually
            know what you're talking about.
          </p>
        </div>
      </motion.div>

      {/* What I Bring */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-border pt-12 md:pt-16 mb-16 md:mb-20"
      >
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">What I Bring</h2>
        <div className="space-y-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
              className="p-5 md:p-6 bg-muted/40 border border-border border-l-[3px] border-l-accent rounded-2xl"
            >
              <h3 className="text-sm md:text-base font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connect */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-border pt-12 md:pt-16"
      >
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Let's Connect</h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          Always open to collaborating on market strategy, data-driven risk analysis, or automation.
          If you want to talk data, swap notes on emerging tech, or discuss cross-continental product
          rollouts, reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/prnvprthp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:opacity-85 transition-opacity"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:prnvprthp@gmail.com"
            className="px-6 py-2.5 rounded-full border border-border text-muted-foreground font-bold text-sm hover:text-foreground hover:border-foreground/30 transition-all"
          >
            prnvprthp@gmail.com
          </a>
        </div>
      </motion.div>

    </main>
  );
}
