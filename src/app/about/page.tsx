"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/lib/images";
import { about, vision, mission, values, whyHelum } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { heroItem, heroTitle, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "KE", label: "Based in Kenya" },
  { value: "4+", label: "Solution pillars" },
  { value: "5+", label: "Technology partners" },
  { value: "∞", label: "Built to scale" },
];

export default function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--color-ink)] pt-[calc(var(--header-h)+2rem)] pb-0">
        <div className="wrap relative z-10 pb-16 pt-10 sm:pb-20 sm:pt-14">
          <motion.div
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "visible"}
            className="max-w-3xl"
          >
            <motion.p variants={reduce ? undefined : heroItem} className="eyebrow mb-5">
              About Helum
            </motion.p>
            <motion.h1
              variants={reduce ? undefined : heroTitle}
              className="text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Your trusted technology & energy partner in Africa
            </motion.h1>
            <motion.p
              variants={reduce ? undefined : heroItem}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              {about.lead}
            </motion.p>
          </motion.div>
        </div>

        <div className="border-t border-white/8 bg-[var(--color-ink-2)]">
          <div className="wrap grid grid-cols-2 divide-x divide-white/8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="px-4 py-8 text-center sm:py-10">
                  <p className="text-3xl font-bold tracking-tight text-[var(--color-gold)] sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">Who we are</p>
            <h2 className="mb-6 text-3xl font-bold tracking-[-0.02em] text-[var(--color-fg)] sm:text-4xl">
              Technology. Energy. Possibility.
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-[var(--color-fg)]">{about.belief}</p>
            <p className="mb-5 leading-relaxed text-[var(--color-muted)]">{about.approach}</p>
            <p className="leading-relaxed text-[var(--color-muted)]">{about.beyond}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about/approach" className="btn btn-gold">
                Our approach
              </Link>
              <Link href="/about/story" className="btn btn-line">
                Our story
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-4">Our purpose</p>
            <h2 className="mb-12 max-w-xl text-3xl font-bold tracking-[-0.02em] text-[var(--color-fg)] sm:text-4xl">
              Driven by a clear purpose
            </h2>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mission",
                body: mission,
              },
              {
                title: "Vision",
                body: vision,
              },
              {
                title: "Values",
                body: "Innovation, integrity, customer value, partnership, excellence and impact — the standards that shape every Helum solution.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <article className="h-full rounded-2xl border border-[var(--color-line)] bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-sky-500/5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-[var(--color-gold)]">
                    <span className="text-lg font-bold">{card.title[0]}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[var(--color-fg)]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{card.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-4">What drives us</p>
            <h2 className="mb-12 text-3xl font-bold tracking-[-0.02em] text-[var(--color-fg)] sm:text-4xl">
              Our values
            </h2>
          </Reveal>
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.num} className="bg-white">
                <article className="h-full p-7">
                  <span className="mb-3 block text-xs font-semibold tracking-[0.16em] text-[var(--color-gold)]">
                    {v.num}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-fg)]">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-20 sm:py-28">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-4">Why Helum</p>
            <h2 className="mb-12 max-w-xl text-3xl font-bold tracking-[-0.02em] text-[var(--color-fg)] sm:text-4xl">
              Built around real problems
            </h2>
          </Reveal>
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyHelum.map((item, i) => (
              <StaggerItem key={item.title}>
                <p className="mb-3 text-sm font-semibold text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-fg)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white">
        <div className="wrap max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              Ready to discuss a practical energy solution?
            </h2>
            <p className="mt-5 text-white/60">
              Tell Helum about the challenge you need to solve — energy access, reliability,
              productive use or partnership.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-gold">
                Talk to Helum
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
