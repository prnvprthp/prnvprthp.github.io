"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pages = [
  { name: "Experience",  href: "/experience", blurb: "Work history and industry roles" },
  { name: "Projects",    href: "/projects",   blurb: "Analytics and data work" },
  { name: "Education",   href: "/education",  blurb: "Degrees, coursework, and certifications" },
  { name: "Interests",   href: "/interests",  blurb: "What I build and explore outside of work" },
  { name: "About Me",    href: "/about",      blurb: "The full story" },
];

export function NextPage({ current }: { current: string }) {
  const idx = pages.findIndex((p) => p.href === current);
  const next = pages[(idx + 1) % pages.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mt-24 md:mt-32"
    >
      <Link href={next.href} className="group block">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-10"
        >
          {/* Ambient glow in the corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
              opacity: 0.12,
            }}
          />

          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-5">
            Continue exploring
          </p>

          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                {next.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {next.blurb}
              </p>
            </div>

            {/* Circular arrow button */}
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-accent/30 bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
