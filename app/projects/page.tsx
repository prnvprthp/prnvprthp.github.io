"use client";

import { motion } from 'framer-motion';

const projectCategories = [
  {
    category: "Predictive Modeling & Risk",
    items: [
      {
        title: "B2B Customer Churn Prediction",
        tech: "XGBoost · SMOTE · SHAP · K-Means",
        description:
          "Developed a segment-specific churn prediction system using XGBoost to identify at-risk freight customers. Integrated SMOTE for class imbalance and SHAP for model explainability, achieving 87.9% combined recall. Identified Shipping Momentum as the dominant churn signal (61% explanatory power).",
        pdf: "/pdfs/CustomerChurnModel.pdf",
      },
      {
        title: "Patient Retention Strategy",
        tech: "R · Tidyverse · Predictive Modeling",
        description:
          "Developed a behavior-based churn prediction model with 81.3% sensitivity for healthcare providers. Leveraged Logistic Regression and Random Forest to identify depression and severity as primary churn drivers, enabling targeted proactive retention strategies.",
        pdf: "/pdfs/Patient_Retention_Strategy_Final.pdf",
      },
      {
        title: "Investment Risk & Monte Carlo",
        tech: "Python · Brownian Motion · Simulation",
        description:
          "Optimized overbooking strategies for Alaska Airlines through probabilistic modeling and simulated Bitcoin price fluctuations using Geometric Brownian Motion to assess tail-end investment risks and portfolio volatility.",
        pdf: "/pdfs/Investment_Risk_Probability_Modeling_Final.pdf",
      },
    ],
  },
  {
    category: "Data Infrastructure & Dashboards",
    items: [
      {
        title: "Virginia Public Health Infrastructure",
        tech: "SQL · Tableau · Python",
        description:
          "Built a centralized SQL data warehouse to monitor statewide drug overdose trends. Integrated socioeconomic indicators from public census data to create interactive Tableau dashboards that guide proactive public health policy interventions.",
        pdf: "/pdfs/Virginia_PublicHealth_Data_Infrastructure_Dashboard_Final.pdf",
      },
      {
        title: "Employment & Economic Trends",
        tech: "Plotly · Dash · FRED API",
        description:
          "An interactive analytics dashboard tracking industry headcounts and wage growth across North America using the FRED API. Presented to the MSBA Board of Advisors to demonstrate technical excellence in data storytelling and real-time visualization.",
        pdf: "/pdfs/Employment & Economic Trends Dashboard_Final.pdf",
      },
    ],
  },
  {
    category: "Operational Audits & Forecasting",
    items: [
      {
        title: "Allegiant Demand Forecasting",
        tech: "TSLM · R · Time Series",
        description:
          "Performed time-series analysis on flight occupancy and ancillary passenger revenue using TSLM. Forecasted seasonal demand patterns to recommend regional market expansion opportunities and fleet utilization strategies for ultra-low-cost carriers.",
        pdf: "/pdfs/Allegiant_Demand_Revenue_Forecasting_Final.pdf",
      },
      {
        title: "Frontier Airlines Operational Audit",
        tech: "R · Data Cleaning · Visualization",
        description:
          "Conducted an exhaustive operational audit of carrier delay trends across major U.S. airports. Identified systemic inefficiencies in turnaround times and airport-specific bottlenecks to recommend data-driven operational improvements.",
        pdf: "/pdfs/Airline Operational Audit_Final.pdf",
      },
    ],
  },
];

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
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-6 md:mb-8 border-b border-border pb-2">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {section.items.map((project, i) => {
                const cardClass =
                  "group p-6 md:p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent hover:shadow-lg transition-colors block";

                const cardContent = (
                  <>
                    {project.image && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-border bg-muted aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="text-[10px] font-mono text-secondary-accent mb-3 uppercase tracking-widest">
                      {project.tech}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    {project.pdf && (
                      <div className="mt-6 md:mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
                        VIEW CASE STUDY{' '}
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
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
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.07,
                    }}
                    whileHover={{ y: -4 }}
                    className={
                      section.items.length === 3 && i === 2
                        ? 'md:col-span-2'
                        : ''
                    }
                  >
                    {project.pdf ? (
                      <a
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <div className={cardClass}>{cardContent}</div>
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
