export default function EducationPage() {
  const education = [
    {
      institution: "William & Mary",
      location: "Williamsburg, VA",
      degree: "Master of Science, Business Analytics",
      period: "Aug 2025 — May 2026",
      details: [
        "Awarded 40% Merit-based Scholarship.",
        "Relevant Coursework: Machine Learning, Optimization, Data Preparation and Manipulation, Heuristic, Stochastic Modeling, Deep Learning, Database Management"
      ],
      badge: "Merit Scholar"
    },
    {
      institution: "SRM University",
      location: "Chennai, India",
      degree: "B.Tech. Computer Science & Engineering",
      period: "June 2018 — May 2022",
      details: [
        "Minor in Big Data Analytics",
        "Relevant Coursework: Machine Learning, Statistics, Big Data Tools & Techniques, RDBMS using SQL."
      ]
    }
  ];

  const certifications = [
    {
      title: "Foundations of Data Science",
      issuer: "Google",
      description: "Data analysis, Communication, Project management, Analytical planning"
    },
    {
      title: "Business & Financial Foundations",
      issuer: "UPenn (Coursera)",
      description: "Financial analysis, Product strategy, Marketing & CRM, Business analysis"
    },
    {
      title: "Data Analyst Associate",
      issuer: "DataCamp",
      description: "SQL analysis, Exploratory data analysis (Python/R), Statistics, Alteryx Fundamentals"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-16 border-b border-border pb-4 text-foreground">
        Education
      </h1>

      <div className="space-y-20">
        {education.map((edu, i) => (
          <div 
            key={i}
            className="relative border-l-2 border-accent pl-8"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{edu.degree}</h2>
                <p className="text-accent font-medium text-lg">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.location}</p>
              </div>
              <span className="text-muted-foreground font-mono text-sm">{edu.period}</span>
            </div>

            <ul className="mt-6 space-y-4 text-muted-foreground">
              {edu.details.map((detail, j) => (
                <li key={j} className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  {detail}
                </li>
              ))}
            </ul>

            {edu.badge && (
              <div className="mt-6 inline-block bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">
                  ✨ {edu.badge}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-32 mb-12 text-foreground">
        Certifications & Professional Development
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div 
            key={i}
            className="p-6 bg-muted/40 border border-border rounded-2xl hover:border-accent/50 transition-all"
          >
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{cert.issuer}</p>
            <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
