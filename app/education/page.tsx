"use client";

import { motion } from 'framer-motion';

const education = [
  {
    institution: "William & Mary",
    location: "Williamsburg, VA",
    degree: "Master of Science, Business Analytics",
    period: "Aug 2025 — May 2026",
    details: [
      "Awarded 40% Merit-based Scholarship.",
      "Relevant Coursework: Machine Learning, Optimization, Data Preparation and Manipulation, Heuristic, Stochastic Modeling, Deep Learning, Database Management",
    ],
    badge: "Merit Scholar",
  },
  {
    institution: "SRM University",
    location: "Chennai, India",
    degree: "B.Tech. Computer Science & Engineering",
    period: "June 2018 — May 2022",
    details: [
      "Minor in Big Data Analytics",
      "Relevant Coursework: Machine Learning, Statistics, Big Data Tools & Techniques, RDBMS using SQL.",
    ],
  },
];

const certifications = [
  {
    title: "Foundations of Data Science",
    issuer: "Google",
    description: "Data analysis, Communication, Project management, Analytical planning",
  },
  {
    title: "Business & Financial Foundations",
    issuer: "UPenn (Coursera)",
    description: "Financial analysis, Product strategy, Marketing & CRM, Business analysis",
  },
  {
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    description: "SQL analysis, Exploratory data analysis (Python/R), Statistics, Alteryx Fundamentals",
  },
];

export default function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 border-b border-border pb-4 text-foreground"
      >
        Education
      </motion.h1>

      <div className="space-y-16 md:space-y-20">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1,
            }}
            className="relative border-l-2 border-accent pl-6 md:pl-8"
          >
            <div className="flex justify-between items-start flex-wrap gap-x-4 gap-y-2">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{edu.degree}</h2>
                <p className="text-accent font-medium text-base md:text-lg">{edu.institution}</p>
                <p className="text-muted-foreground text-xs md:text-sm">{edu.location}</p>
              </div>
              <span className="text-muted-foreground font-mono text-xs md:text-sm">{edu.period}</span>
            </div>

            <ul className="mt-6 space-y-4 text-muted-foreground text-sm md:text-base">
              {edu.details.map((detail, j) => (
                <li key={j} className="flex items-start">
                  <span className="mr-2 text-accent shrink-0">•</span>
                  {detail}
                </li>
              ))}
            </ul>

            {edu.badge && (
              <div className="mt-6 inline-block bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">
                  {edu.badge}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl md:text-2xl font-bold mt-24 md:mt-32 mb-8 md:mb-12 text-foreground"
      >
        Certifications & Professional Development
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
            whileHover={{ y: -3 }}
            className="p-6 bg-muted/40 border border-border rounded-2xl hover:border-accent/50 transition-colors"
          >
            <p className="text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">
              {cert.issuer}
            </p>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{cert.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
