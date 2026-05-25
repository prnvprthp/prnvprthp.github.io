"use client";

import { motion } from "framer-motion";
import { Tooltip } from "@/app/components/Tooltip";

const techTooltips: Record<string, string> = {
  "XGBoost": "Gradient boosting algorithm — high accuracy on tabular data, industry standard for ML competitions",
  "SMOTE": "Generates synthetic minority samples to fix class imbalance before training",
  "SHAP": "Explains model predictions by measuring each feature's individual contribution",
  "K-Means": "Unsupervised algorithm that clusters data points by minimizing within-group variance",
  "R": "Statistical programming language built for data analysis and research",
  "Tidyverse": "Suite of R packages for clean, readable data manipulation and visualization",
  "Predictive Modeling": "Statistical techniques that forecast future outcomes from historical patterns",
  "Python": "Primary language for data science — rich ecosystem of ML and analytics libraries",
  "Brownian Motion": "Stochastic process modeling random movement, used in financial price simulation",
  "Simulation": "Monte Carlo method — runs thousands of random scenarios to estimate probability distributions",
  "SQL": "Structured query language for managing and querying relational databases",
  "Tableau": "Drag-and-drop BI tool for building interactive, shareable data dashboards",
  "Plotly": "Python library for interactive, browser-rendered charts and graphs",
  "Dash": "Python framework for building analytical web applications without JavaScript",
  "FRED API": "Federal Reserve Economic Data — free, real-time U.S. macroeconomic datasets",
  "TSLM": "Time Series Linear Model — fits regression to sequential time-ordered data in R",
  "Time Series": "Analysis of data collected over time to identify trends, cycles, and seasonality",
  "Data Cleaning": "Identifying and resolving errors, duplicates, and inconsistencies in raw datasets",
  "Visualization": "Translating data into charts and graphics to surface patterns and drive decisions",
};

type Project = {
  title: string;
  industry: string;
  tech: string[];
  description: string;
  pdf?: string;
  link?: string;
  images?: string[];
};

type Category = {
  category: string;
  items: Project[];
};

const projectCategories: Category[] = [
  {
    category: "Predictive Modeling & Risk",
    items: [
      {
        title: "B2B Customer Churn Prediction",
        industry: "Logistics & LTL Freight",
        tech: ["XGBoost", "SMOTE", "SHAP", "K-Means"],
        description:
          "Developed a segment-specific churn prediction system using XGBoost to identify at-risk freight customers. Integrated SMOTE for class imbalance and SHAP for model explainability, achieving 87.9% combined recall. Identified Shipping Momentum as the dominant churn signal (61% explanatory power).",
        pdf: "/pdfs/CustomerChurnModel.pdf",
        images: [
          "/project-images/churn-prediction_1.png",
          "/project-images/churn-prediction_2.png",
          "/project-images/churn-prediction_3.png",
        ],
      },
      {
        title: "Patient Retention Strategy",
        industry: "Healthcare",
        tech: ["R", "Tidyverse", "Predictive Modeling"],
        description:
          "Developed a behavior-based churn prediction model with 81.3% sensitivity for healthcare providers. Leveraged Logistic Regression and Random Forest to identify depression and severity as primary churn drivers, enabling targeted proactive retention strategies.",
        pdf: "/pdfs/Patient_Retention_Strategy_Final.pdf",
        images: [
          "/project-images/patient-retention_1.png",
          "/project-images/patient-retention_2.png",
        ],
      },
      {
        title: "Investment Risk & Monte Carlo",
        industry: "Finance & Aviation",
        tech: ["Python", "Brownian Motion", "Simulation"],
        description:
          "Optimized overbooking strategies for Alaska Airlines through probabilistic modeling and simulated Bitcoin price fluctuations using Geometric Brownian Motion to assess tail-end investment risks and portfolio volatility.",
        pdf: "/pdfs/Investment_Risk_Probability_Modeling_Final.pdf",
        images: [
          "/project-images/monte-carlo_1.png",
          "/project-images/monte-carlo_2.png",
          "/project-images/monte-carlo_3.png",
        ],
      },
    ],
  },
  {
    category: "Data Infrastructure & Dashboards",
    items: [
      {
        title: "Virginia Public Health Infrastructure",
        industry: "Public Health & Policy",
        tech: ["SQL", "Tableau", "Python"],
        description:
          "Built a centralized SQL data warehouse to monitor statewide drug overdose trends. Integrated socioeconomic indicators from public census data to create interactive Tableau dashboards that guide proactive public health policy interventions.",
        pdf: "/pdfs/Virginia_PublicHealth_Data_Infrastructure_Dashboard_Final.pdf",
        images: [
          "/project-images/public-health-dashboard_1.png",
          "/project-images/public-health-dashboard_2.png",
          "/project-images/public-health-dashboard_3.png",
        ],
      },
      {
        title: "Employment & Economic Trends",
        industry: "Economics & Labor Markets",
        tech: ["Plotly", "Dash", "FRED API"],
        description:
          "An interactive analytics dashboard tracking industry headcounts and wage growth across North America using the FRED API. Presented to the MSBA Board of Advisors to demonstrate technical excellence in data storytelling and real-time visualization.",
        pdf: "/pdfs/Employment & Economic Trends Dashboard_Final.pdf",
        link: "https://ctba-final-team13.onrender.com",
        images: [
          "/project-images/employment-dashboard_1.png",
          "/project-images/employment-dashboard_2.png",
          "/project-images/employment-dashboard_3.png",
        ],
      },
    ],
  },
  {
    category: "Operational Audits & Forecasting",
    items: [
      {
        title: "Allegiant Demand Forecasting",
        industry: "Aviation & Travel",
        tech: ["TSLM", "R", "Time Series"],
        description:
          "Performed time-series analysis on flight occupancy and ancillary passenger revenue using TSLM. Forecasted seasonal demand patterns to recommend regional market expansion opportunities and fleet utilization strategies for ultra-low-cost carriers.",
        pdf: "/pdfs/Allegiant_Demand_Revenue_Forecasting_Final.pdf",
        images: [
          "/project-images/allegiant-forecast_1.png",
          "/project-images/allegiant-forecast_2.png",
          "/project-images/allegiant-forecast_3.png",
        ],
      },
      {
        title: "Frontier Airlines Operational Audit",
        industry: "Aviation & Operations",
        tech: ["R", "Data Cleaning", "Visualization"],
        description:
          "Conducted an exhaustive operational audit of carrier delay trends across major U.S. airports. Identified systemic inefficiencies in turnaround times and airport-specific bottlenecks to recommend data-driven operational improvements.",
        pdf: "/pdfs/Airline Operational Audit_Final.pdf",
        images: [
          "/project-images/frontier-audit_1.png",
          "/project-images/frontier-audit_2.png",
          "/project-images/frontier-audit_3.png",
        ],
      },
    ],
  },
];

/**
 * A single image cell: the div carries the flex dimensions, the img fills it
 * with object-contain so the full chart/graph is always visible. bg-muted
 * fills the letterbox areas left by object-contain.
 */
function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex-1 min-w-0 min-h-0 bg-muted">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain" />
    </div>
  );
}

function ProjectImages({ images, title }: { images: string[]; title: string }) {
  if (!images.length) return null;

  const divider = "var(--border)";

  // 1 image — full width
  if (images.length === 1) {
    return (
      <div className="mb-6 rounded-xl overflow-hidden border border-border h-52 relative bg-muted">
        <img src={images[0]} alt={title} className="absolute inset-0 w-full h-full object-contain" />
      </div>
    );
  }

  // 2–3 images — equal columns, all content visible
  if (images.length <= 3) {
    return (
      <div
        className="mb-6 rounded-xl overflow-hidden border border-border flex gap-px h-52"
        style={{ background: divider }}
      >
        {images.map((src, i) => (
          <Thumb key={i} src={src} alt={`${title} ${i + 1}`} />
        ))}
      </div>
    );
  }

  // 4+ images — two equal rows
  const half = Math.ceil(images.length / 2);
  return (
    <div
      className="mb-6 rounded-xl overflow-hidden border border-border flex flex-col gap-px"
      style={{ background: divider }}
    >
      <div className="flex gap-px h-40">
        {images.slice(0, half).map((src, i) => (
          <Thumb key={i} src={src} alt={`${title} ${i + 1}`} />
        ))}
      </div>
      <div className="flex gap-px h-40">
        {images.slice(half).map((src, i) => (
          <Thumb key={i} src={src} alt={`${title} ${half + i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Projects</h1>
        <p className="text-muted-foreground mb-12 md:mb-16 max-w-xl">
          A look at my work blending data engineering, statistical modeling, and business strategy.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {projectCategories.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-6 md:mb-8 border-b border-border pb-3">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {section.items.map((project, i) => {
                const hasLink = !!project.link;
                const hasPdf = !!project.pdf;

                const cardInner = (
                  <>
                    {project.images && project.images.length > 0 && (
                      <ProjectImages images={project.images} title={project.title} />
                    )}

                    {/* Industry label */}
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                      {project.industry}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-4">
                      {project.tech.map((tool, t) => (
                        <span key={tool} className="flex items-center gap-x-1.5">
                          <Tooltip content={techTooltips[tool] ?? ""}>
                            <span className="text-xs font-mono text-secondary-accent uppercase tracking-widest cursor-default underline decoration-dotted underline-offset-2 decoration-secondary-accent/40 hover:decoration-secondary-accent transition-all">
                              {tool}
                            </span>
                          </Tooltip>
                          {t < project.tech.length - 1 && (
                            <span className="text-foreground/20 text-[10px] select-none">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Footer links */}
                    {(hasLink || hasPdf) && (
                      <div className="mt-6 md:mt-8 flex items-center gap-6 flex-wrap">
                        {hasLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs font-bold text-secondary-accent hover:opacity-70 transition-opacity"
                          >
                            LIVE DEMO ↗
                          </a>
                        )}
                        {hasPdf && (
                          <a
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-secondary-accent transition-colors"
                          >
                            CASE STUDY{" "}
                            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                          </a>
                        )}
                      </div>
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    whileHover={{ y: -4, zIndex: 10 }}
                    className="relative"
                  >
                    {/* Cards with only a PDF use the full card as a link.
                        Cards with a live link (or both) use a div to avoid nested <a> tags. */}
                    {!hasLink && hasPdf ? (
                      <a
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 md:p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent hover:shadow-lg transition-colors block"
                      >
                        {cardInner}
                      </a>
                    ) : (
                      <div className="group p-6 md:p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent hover:shadow-lg transition-colors">
                        {cardInner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
