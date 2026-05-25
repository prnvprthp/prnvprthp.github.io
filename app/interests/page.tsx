'use client';

import { motion } from 'framer-motion';

const interestCategories = [
  {
    category: "Apps & Digital Products",
    items: [
      {
        title: "Kinship",
        tag: "Ancestry · Digital Archiving · Visual Storytelling",
        description:
          "A personal initiative to digitize and visualize generational history. Developing custom tree-rendering algorithms to map complex family structures and preserve ancestral narratives for future generations.",
        href: "https://kinship-bay.vercel.app",
        cta: "VISIT SITE",
        comingSoon: false,
      },
      {
        title: "Waypoint",
        tag: "iOS · Flight Tracking · Aviation",
        description:
          "A clean, minimal flight companion app inspired by Flighty and App in the Air — designed to surface what matters most about your journey: departure status, gate changes, and travel history, without the noise.",
        href: "#",
        cta: "COMING SOON",
        comingSoon: true,
      },
    ],
  },
  {
    category: "Creative Pursuits",
    items: [
      {
        title: "Photography",
        tag: "Street · Portrait · Nature",
        description:
          "A collection of moments captured across various cities, exploring the play between natural light and urban architecture.",
        href: "/interests/photography",
        cta: "EXPLORE GALLERY",
        comingSoon: false,
      },
    ],
  },
];

export default function InterestsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl font-bold mb-4 text-foreground">Interests</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Beyond data and strategy — exploring the intersections of creativity, culture, and visual storytelling.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {interestCategories.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-border pb-2">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, i) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {item.tag}
                      </p>
                      {item.comingSoon && (
                        <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
                      {item.cta}{' '}
                      {!item.comingSoon && (
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      )}
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.08,
                    }}
                    whileHover={!item.comingSoon ? { y: -6 } : {}}
                  >
                    {item.comingSoon ? (
                      <div className="group p-6 md:p-8 bg-muted/40 border border-border rounded-2xl transition-colors cursor-default opacity-80">
                        {inner}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group p-6 md:p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent transition-colors block"
                      >
                        {inner}
                      </a>
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
