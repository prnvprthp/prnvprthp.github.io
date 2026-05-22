export default function ExperiencePage() {
  const experiences = [
    {
      company: "William & Mary",
      role: "Graduate Assistant",
      period: "Feb 2026 — Present",
      points: [
        "Serving as Statistics & Financial Management Teaching Assistant for UG business students across 7 courses.",
        "Automating print shop communications & marketing workflows, migrating tools from Google to the Microsoft ecosystem.",
        "Boosting process efficiency and ensuring alignment with university IT guidelines."
      ]
    },
    {
      company: "INSILLION",
      role: "Product Marketing and Management",
      period: "Jan 2023 — July 2025",
      points: [
        "Built predictive fit/gap models assessing market risk, competition & adoption trends for global expansion strategy.",
        "Rebuilt pre-sales database & CRM workflows, cutting retrieval time from ~10 days to <2 minutes.",
        "Directed 1st USA product launch, coordinating timelines, resources & approvals for on-schedule rollout.",
        "Integrated LLM APIs & built client-facing embedded web components for automated IDP and quote analysis."
      ],
      badge: "100% Salary Appraisal"
    },
    {
      company: "Anheuser-Busch InBev",
      role: "Research Analyst",
      period: "May 2021 — Jan 2022",
      points: [
        "Identified internal workflow inefficiencies in the Beer-Garage division & delivered data-driven improvements.",
        "Crafted 3-year, research-driven strategic plans to guide long-term business priorities and capitalize on market trends.",
        "Drove full-cycle international pilot initiatives, delivering 3 successful rollouts across Sub-Saharan Africa & Europe."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-16 border-b border-border pb-4 text-foreground">
        Experience
      </h1>

      <div className="space-y-20">
        {experiences.map((exp, i) => (
          <div 
            key={i}
            className="relative border-l-2 border-accent pl-8"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{exp.role}</h2>
                <p className="text-accent font-medium text-lg">{exp.company}</p>
              </div>
              <span className="text-muted-foreground font-mono text-sm">{exp.period}</span>
            </div>

            <ul className="mt-6 space-y-4 text-muted-foreground">
              {exp.points.map((point, j) => (
                <li key={j} className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  {point}
                </li>
              ))}
            </ul>

            {exp.badge && (
              <div className="mt-6 inline-block bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">
                  ✨ {exp.badge}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}