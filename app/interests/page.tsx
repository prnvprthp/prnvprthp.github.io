'use client';

export default function InterestsPage() {
  const interestCategories = [
    {
      category: "Creative Pursuits",
      items: [
        {
          title: "Photography",
          tag: "Street • Portrait • Nature",
          description: "A collection of moments captured across various cities, exploring the play between natural light and urban architecture.",
          href: "/interests/photography"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-24 max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Interests</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Beyond data and strategy—exploring the intersections of creativity, culture, and visual storytelling.
        </p>

        <div className="space-y-24">
          {interestCategories.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-border pb-2">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="group p-8 bg-muted/40 border border-border rounded-2xl hover:border-accent/50 transition-all hover:-translate-y-2 block"
                  >
                    <p className="text-[10px] font-mono text-muted-foreground mb-3 uppercase tracking-widest">
                      {item.tag}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold text-muted-foreground group-hover:text-accent transition-colors">
                      EXPLORE GALLERY <span className="group-hover:translate-x-1 transition-transform">→</span>
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
