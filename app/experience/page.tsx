export default function ExperiencePage() {
  const experiences = [
    {
      company: "William & Mary",
      role: "Graduate Assistant",
      period: "Feb 2026 — Present",
      points: [
        "Supporting financial management and statistics across 7 undergraduate courses.",
        "Leading migration from Google Workspace to Microsoft ecosystem.",
        "Automating marketing workflows to boost process efficiency."
      ],
      badge: "40% Merit Scholarship"
    },
    {
      company: "INSILLION",
      role: "GTM Strategy & Market Research",
      period: "2022 — 2025",
      points: [
        "Engineered end-to-end GTM strategy for U.S. market expansion.",
        "Conducted competitor benchmarking and partnership development.",
        "First employee in 24 years to receive a 100% salary appraisal for performance."
      ],
      badge: "100% Salary Appraisal"
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

            <div className="mt-6 inline-block bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">
                ✨ {exp.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}