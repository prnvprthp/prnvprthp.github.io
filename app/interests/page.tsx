'use client';

import { motion } from 'framer-motion';

const interestCategories = [
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
      },
    ],
  },
  {
    category: "Genealogy & Family History",
    items: [
      {
        title: "Kinship",
        tag: "Ancestry · Digital Archiving · Visual Storytelling",
        description:
          "A personal initiative to digitize and visualize generational history. Developing custom tree-rendering algorithms to map complex family structures and preserve ancestral narratives for future generations.",
        href: "#",
        cta: "COMING SOON",
      },
    ],
  },
];

export default function InterestsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-24 max-w-6xl mx-auto">
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

      <div className="space-y-24">
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
              {section.items.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent transition-colors block"
                >
                  <p className="text-[10px] font-mono text-muted-foreground mb-3 uppercase tracking-widest">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
                    {item.cta}{' '}
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
