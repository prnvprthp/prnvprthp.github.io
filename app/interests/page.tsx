'use client';

import { motion } from 'framer-motion';
import { NextPage } from '@/app/components/NextPage';
import { Users, PlaneTakeoff, Clapperboard, Camera, type LucideIcon } from 'lucide-react';

type AppItem = {
  title: string;
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
    icon: Users,
    tag: "Ancestry · Digital Archiving · Visual Storytelling",
    description:
      "A personal initiative to digitize and visualize generational history. Developing custom tree-rendering algorithms to map complex family structures and preserve ancestral narratives for future generations.",
    href: "https://kinship-bay.vercel.app",
    cta: "VISIT SITE",
  },
  {
    title: "FlightSight",
    icon: PlaneTakeoff,
    tag: "Travel · Flight Archive · Aviation",
    description:
      "A beautifully designed archive of trips rendered as digital boarding passes, inspired by Flighty and App in the Air. Tracks stats and surfaces insights about the airlines, aircraft, and routes you've flown. A personal logbook that actually looks good.",
    href: "http://flightsight-gamma.vercel.app",
    cta: "VISIT SITE",
  },
  {
    title: "Marquee",
    icon: Clapperboard,
    tag: "Film Tracking · Collections · Ratings",
    description:
      "A personal movie-tracking app where you search for any film, add it to your collection, and rate it with elegant poster cards. Built with a cinema-stub aesthetic and a clean, minimal UI.",
    href: "https://marquee-prnvprthps-projects.vercel.app",
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
                <div className="flex items-start gap-5">
                  {/* Icon box */}
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                    <Icon className="size-5 text-accent" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                      <h3 className="text-base font-bold text-foreground group-hover:text-secondary-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest shrink-0">
                        {item.tag}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground group-hover:text-secondary-accent transition-colors">
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
                    <div className="group p-5 md:p-6 bg-muted/40 border border-border rounded-2xl cursor-default opacity-75">
                      {inner}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group block p-5 md:p-6 bg-muted/40 border border-border rounded-2xl hover:border-secondary-accent transition-colors"
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
