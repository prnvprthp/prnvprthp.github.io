'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { NextPage } from '@/app/components/NextPage';
import { Users, PlaneTakeoff, Clapperboard, CalendarDays, Camera, type LucideIcon } from 'lucide-react';

type AppItem = {
  title: string;
  slug: string;
  icon: LucideIcon;
  tag: string;
  description: string;
  href: string;
  cta: string;
  comingSoon?: boolean;
};

type CreativeItem = {
  title: string;
  icon: LucideIcon;
  tag: string;
  description: string;
  href: string;
  cta: string;
  comingSoon?: boolean;
};

const apps: AppItem[] = [
  {
    title: "Kinship",
    slug: "kinship",
    icon: Users,
    tag: "Ancestry · Digital Archiving · Visual Storytelling",
    description:
      "A personal initiative to digitize and visualize generational history. Developing custom tree-rendering algorithms to map complex family structures and preserve ancestral narratives for future generations.",
    href: "https://kinship-bay.vercel.app",
    cta: "VISIT SITE",
  },
  {
    title: "FlightSight",
    slug: "flightsight",
    icon: PlaneTakeoff,
    tag: "Travel · Flight Archive · Aviation",
    description:
      "A beautifully designed archive of trips rendered as digital boarding passes, inspired by Flighty and App in the Air. Tracks stats and surfaces insights about the airlines, aircraft, and routes you've flown. A personal logbook that actually looks good.",
    href: "http://flightsight-gamma.vercel.app",
    cta: "VISIT SITE",
  },
  {
    title: "Marquee",
    slug: "marquee",
    icon: Clapperboard,
    tag: "Film Tracking · Collections · Ratings",
    description:
      "A personal movie-tracking app where you search for any film, add it to your collection, and rate it with elegant poster cards. Built with a cinema-stub aesthetic and a clean, minimal UI.",
    href: "https://marquee-prnvprthps-projects.vercel.app",
    cta: "VISIT SITE",
  },
  {
    title: "Days",
    slug: "days",
    icon: CalendarDays,
    tag: "Calendar · Scheduling · Daily Planning",
    description:
      "A personal calendar app for planning your days across multiple views, with a focused daily agenda, curated lists, and analytics. Syncs events from Calendly and surfaces birthdays from Kinship, all wrapped in a clean, minimal interface.",
    href: "https://days-track.vercel.app",
    cta: "VISIT SITE",
  },
];

const creativeItems: CreativeItem[] = [
  {
    title: "Photography",
    icon: Camera,
    tag: "Street · Portrait · Nature",
    description:
      "A collection of moments captured across various cities, exploring the play between natural light and urban architecture.",
    href: "/interests/photography",
    cta: "EXPLORE GALLERY",
  },
];

/**
 * Auto-cycling preview panel: crossfades through one or more screenshots.
 * - 0 images → falls back to the app's icon.
 * - 1 image  → shown statically (no cycling, no dots).
 * - 2+ images → fades on a timer (paused when the user prefers reduced motion).
 * The per-card `index` slightly desyncs the timers so cards don't all flip at once.
 */
function ProjectPreview({
  images,
  Icon,
  title,
  index,
}: {
  images: string[];
  Icon: LucideIcon;
  title: string;
  index: number;
}) {
  const [idx, setIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length <= 1 || reduceMotion) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500 + index * 250);
    return () => clearInterval(id);
  }, [images.length, reduceMotion, index]);

  if (images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="size-12 text-accent/30" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} preview ${i + 1}`}
          loading={i === 0 ? undefined : "lazy"}
          aria-hidden={i === idx ? undefined : true}
          className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === idx ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-sm">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-3.5 bg-white" : "w-1.5 bg-white/55"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export function InterestsClient({ imagesBySlug }: { imagesBySlug: Record<string, string[]> }) {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl font-bold mb-4 text-foreground">Interests</h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Beyond data and strategy, exploring the intersections of creativity, culture, and visual storytelling.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {/* ── Apps & Digital Products ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-border pb-2">
            Apps &amp; Digital Products
          </h2>
          <div className="flex flex-col gap-4">
            {apps.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex flex-col md:flex-row md:min-h-[210px]">
                  {/* Preview / screenshots (auto-cycling) */}
                  <div className="relative w-full md:w-[42%] md:shrink-0 h-44 md:h-auto bg-muted overflow-hidden">
                    <ProjectPreview
                      images={imagesBySlug[item.slug] ?? []}
                      Icon={Icon}
                      title={item.title}
                      index={i}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 min-w-0 flex-col p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="size-5 text-accent" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-secondary-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      {item.tag}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
                      {item.cta}
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                  whileHover={!item.comingSoon ? { y: -3 } : {}}
                >
                  {item.comingSoon ? (
                    <div className="group block overflow-hidden bg-muted/40 border border-border rounded-2xl cursor-default opacity-75">
                      {inner}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block overflow-hidden bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent transition-colors"
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Creative Pursuits ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-border pb-2">
            Creative Pursuits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creativeItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="size-5 text-accent" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-0.5">
                        <h3 className="text-base font-bold text-foreground group-hover:text-secondary-accent transition-colors">
                          {item.title}
                        </h3>
                        {item.comingSoon && (
                          <span className="shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {item.tag}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>
                  <div className="mt-auto pt-6 flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
                    {item.cta}
                    {!item.comingSoon && (
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    )}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={i}
                  className="h-full"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  whileHover={!item.comingSoon ? { y: -6 } : {}}
                >
                  {item.comingSoon ? (
                    <div className="group flex flex-col h-full p-6 md:p-8 bg-muted/40 border border-border rounded-2xl cursor-default opacity-80">
                      {inner}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex flex-col h-full p-6 md:p-8 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent transition-colors"
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>

      <NextPage current="/interests" />
    </main>
  );
}
