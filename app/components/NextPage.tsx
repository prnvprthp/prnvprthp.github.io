"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pages = [
  { name: "Experience",  href: "/experience", blurb: "Work history and industry roles" },
  { name: "Education",   href: "/education",  blurb: "Degrees, coursework, and certifications" },
  { name: "Projects",    href: "/projects",   blurb: "Analytics and data work" },
  { name: "Interests",   href: "/interests",  blurb: "What I build and explore outside of work" },
  { name: "About Me",    href: "/about",      blurb: "The full story" },
];

export function NextPage({ current }: { current: string }) {
  const idx = pages.findIndex((p) => p.href === current);
  const next = pages[(idx + 1) % pages.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-24 md:mt-32"
    >
      <Link
        href={next.href}
        className="group block border-t border-border pt-10 md:pt-12 pb-10"
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-5">
          Next up
        </p>
        <div className="flex items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
              {next.name}
            </h2>
            <p className="text-sm text-muted-foreground mt-1.5">{next.blurb}</p>
          </div>
          <span className="text-2xl font-bold text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-2 transition-all duration-200 shrink-0">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
