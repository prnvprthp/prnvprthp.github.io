export default function ProjectsPage() {
  const projectCategories = [
    {
      category: "Data Infrastructure & Dashboards",
      items: [
        {
          title: "Virginia Public Health Infrastructure",
          tech: "SQL • Tableau • Python",
          description: "Built a centralized SQL data warehouse to monitor drug overdose trends. Integrated socioeconomic indicators to guide proactive public policy interventions.",
          pdf: "/pdfs/Virginia_PublicHealth_Data_Infrastructure_Dashboard_Final.pdf"
        },
        {
          title: "Employment & Economic Trends",
          tech: "Plotly • Dash • FRED API",
          description: "An interactive dashboard tracking industry headcounts and wage growth across North America. Presented to the MSBA Board for technical excellence.",
          pdf: "/pdfs/Employment & Economic Trends Dashboard_Final.pdf"
        }
      ]
    },
    {
      category: "Predictive Modeling & Risk",
      items: [
        {
          title: "Patient Retention Strategy",
          tech: "R • Tidyverse • Predictive Modeling",
          description: "Developed a behavior-based churn prediction model with 81.3% sensitivity, identifying depression and severity as primary churn drivers.",
          pdf: "/pdfs/Patient_Retention_Strategy_Final.pdf"
        },
        {
          title: "Investment Risk & Monte Carlo",
          tech: "Python • Brownian Motion • Simulation",
          description: "Optimized overbooking strategies for Alaska Airlines and modeled Bitcoin price fluctuations using stochastic processes.",
          pdf: "/pdfs/Investment_Risk_Probability_Modeling_Final.pdf"
        }
      ]
    },
    {
      category: "Operational Audits & Forecasting",
      items: [
        {
          title: "Allegiant Demand Forecasting",
          tech: "TSLM • R • Time Series",
          description: "Forecasted load factors and passenger revenue to recommend regional market expansion opportunities for ultra-low-cost carriers.",
          pdf: "/pdfs/Allegiant_Demand_Revenue_Forecasting_Final.pdf"
        },
        {
          title: "Frontier Airlines Operational Audit",
          tech: "R • Data Cleaning • Visualization",
          description: "Analyzed carrier delay trends across U.S. airports to identify systemic operational inefficiencies.",
          pdf: "/pdfs/Airline Operational Audit_Final.pdf"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-24 max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Selected Works</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          A collection of projects bridging data engineering, statistical modeling, and business strategy.
        </p>

        <div className="space-y-24">
          {projectCategories.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-border pb-2">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((project, i) => (
                  <a
                    key={i}
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-8 bg-muted/40 border border-border rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-2 block"
                  >
                    <p className="text-[10px] font-mono text-muted-foreground mb-3 uppercase tracking-widest">
                      {project.tech}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-accent transition-colors">
                      VIEW CASE STUDY <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}