"use client";

import { motion } from 'framer-motion';

type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  highlights: string[];
  coursework: string[];
  badge?: string;
};

const education: Education[] = [
  {
    institution: "William & Mary",
    location: "Williamsburg, VA",
    degree: "Master of Science, Business Analytics",
    period: "Aug 2025 to May 2026",
    highlights: [
      "Awarded 40% Merit-based Scholarship, one of a small cohort selected across a competitive applicant pool.",
      "Also working as a Graduate Assistant alongside the degree, supporting 3 professors across 7 courses in Statistics and Financial Management. Teaching is the fastest way to find the gaps in what you actually understand.",
    ],
    coursework: [
      "Machine Learning",
      "Optimization",
      "Data Preparation & Manipulation",
      "Heuristic Modeling",
      "Stochastic Modeling",
      "Deep Learning",
      "Database Management",
    ],
    badge: "Merit Scholar",
  },
  {
    institution: "SRM University",
    location: "Chennai, India",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    period: "June 2018 to May 2022",
    highlights: [
      "Minor in Big Data Analytics, chosen deliberately to bridge systems thinking with applied data work.",
      "Four years building the CS foundation: algorithms, data structures, systems, databases. The analytics track is where things clicked. I cared more about what the data meant than the infrastructure running it.",
    ],
    coursework: [
      "Machine Learning",
      "Statistics",
      "Big Data Tools & Techniques",
      "RDBMS using SQL",
    ],
  },
];

type Certification = {
  title: string;
  issuer: string;
  tags: string[];
};

const certifications: Certification[] = [
  {
    title: "Foundations of Data Science",
    issuer: "Google",
    tags: ["Data Analysis", "Communication", "Project Management", "Analytical Planning"],
  },
  {
    title: "Business & Financial Foundations",
    issuer: "UPenn (Coursera)",
    tags: ["Financial Analysis", "Product Strategy", "Marketing & CRM", "Business Analysis"],
  },
  {
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    tags: ["SQL Analysis", "EDA (Python / R)", "Statistics", "Alteryx Fundamentals"],
  },
];

export default function EducationPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 md:mb-20"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Education</h1>
        <p className="text-muted-foreground text-base">CS foundation, experience with product management and GTM, business analytics, decision and strategy focus.</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mb-24 md:mb-32">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-16 md:space-y-20">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="relative pl-7 md:pl-9"
            >
              {/* Timeline node */}
              <span
                className="absolute top-[7px] -left-[4px] w-2 h-2 rounded-full bg-accent"
                style={{ boxShadow: "0 0 0 3px var(--background)" }}
              />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1.5 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{edu.degree}</h2>
                    {edu.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-secondary-accent/10 text-secondary-accent border border-secondary-accent/25">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-semibold text-sm md:text-base mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{edu.location}</p>
                </div>
                <span className="text-muted-foreground font-mono text-xs shrink-0 mt-1.5">{edu.period}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Coursework tags */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-md text-xs font-medium border border-border text-foreground/70"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-border pt-12 md:pt-16"
      >
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
          Certifications &amp; Professional Development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-6 md:p-8 bg-muted/40 border border-border rounded-2xl border-l-[3px] border-l-secondary-accent hover:border-secondary-accent/60 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-secondary-accent mb-2.5">
                {cert.issuer}
              </p>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-4">{cert.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-medium border border-border text-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
