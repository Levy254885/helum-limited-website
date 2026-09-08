"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/images";
import { about, company, services, values, vision, mission, whyHelum, investment } from "@/lib/content";
import { productCategories } from "@/lib/products";
import { partners } from "@/lib/partners";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { heroItem, heroTitle, staggerContainer } from "@/lib/motion";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const reduce = useReducedMotion();

  return (
    <main>
      {/* Animated Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 pb-20 pt-[calc(72px+2rem)] sm:px-6"
      >
        <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover scale-110"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(11,18,32,0.5) 0%,rgba(11,18,32,0.4) 35%,rgba(11,18,32,0.72) 100%)",
            }}
          />
          <div className="grain absolute inset-0" />
        </motion.div>

        {/* Floating orbs */}
        {!reduce && (
          <>
            <motion.div
              className="pointer-events-none absolute left-[12%] top-[28%] h-40 w-40 rounded-full bg-[#e8a317]/15 blur-3xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute right-[15%] bottom-[25%] h-52 w-52 rounded-full bg-sky-400/10 blur-3xl"
              animate={{ y: [0, 16, 0], scale: [1, 1.12, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <motion.div
          style={reduce ? undefined : { opacity }}
          className="relative z-10 mx-auto max-w-[840px] text-center"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
        >
          <motion.div variants={reduce ? undefined : heroItem} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#e8a317]" />
              {company.tagline}
            </span>
          </motion.div>

          <motion.h1
            variants={reduce ? undefined : heroTitle}
            className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Engineering the
            <br />
            <span className="hero-highlight">Intelligence of Energy</span>
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : heroItem}
            className="mb-3 text-lg font-medium text-white/95 sm:text-xl"
          >
            Technology and Energy Solutions Built for Africa
          </motion.p>

          <motion.p
            variants={reduce ? undefined : heroItem}
            className="mx-auto mb-10 max-w-[600px] text-base leading-relaxed text-white/75"
          >
            Helum connects innovative technology, reliable energy and productive solutions to help
            businesses, households, institutions and enterprises overcome real-world energy
            challenges.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : heroItem}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/services"
                className="inline-flex rounded-full bg-[#e8a317] px-8 py-3.5 text-base font-semibold text-[#0b1220] shadow-lg shadow-[#e8a317]/25"
              >
                Explore Our Solutions
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex rounded-full border-2 border-white/50 bg-transparent px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
              >
                Talk to Helum
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {!reduce && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        )}
      </section>

      {/* About teaser */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
              About Helum
            </p>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#1a1f2e] sm:text-4xl">
              Technology. Energy. Possibility.
            </h2>
            <p className="mb-4 text-lg font-medium leading-relaxed text-[#1a1f2e]">{about.lead}</p>
            <p className="mb-4 text-[#5a6478] leading-relaxed">{about.belief}</p>
            <p className="mb-8 text-[#5a6478] leading-relaxed">{about.beyond}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[#1a1f2e] transition hover:gap-3 hover:text-[#e8a317]"
            >
              Learn more about Helum <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/40 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission strip */}
      <section className="bg-[#0b1220] py-16 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
              Vision
            </p>
            <p className="text-xl leading-relaxed font-medium sm:text-2xl">{vision}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
              Mission
            </p>
            <p className="text-xl leading-relaxed font-medium sm:text-2xl">{mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f7f8fa] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
                What We Do
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a1f2e] sm:text-4xl">
                Integrated Technology & Energy Solutions
              </h2>
              <p className="mx-auto max-w-xl text-[#5a6478]">
                Practical solutions designed around real customer needs—from power and energy access
                to productive-use technologies.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e8ef] bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={
                          s.slug === "renewable-energy"
                            ? images.renewable.src
                            : s.slug === "energy-power-technology"
                              ? images.energyTech.src
                              : s.slug === "productive-use"
                                ? images.productive.src
                                : images.partnerships.src
                        }
                        alt={s.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <span className="absolute left-4 top-4 rounded-md bg-[#e8a317] px-2.5 py-1 text-sm font-bold text-[#0b1220]">
                        {s.num}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#1a1f2e] group-hover:text-[#e8a317] transition">
                        {s.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-[#5a6478]">{s.short}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1f2e] transition group-hover:gap-3 group-hover:text-[#e8a317]">
                        Explore <span aria-hidden>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e] transition hover:border-[#1a1f2e]"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Products — SVC-style category tiles */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="mb-12 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
                Products
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1f2e] sm:text-4xl">
                What we supply
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#5a6478]">
                Inverters, lithium batteries, power stations, solar panels and solar water pumps —
                specified as part of a designed system.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <StaggerItem key={c.slug}>
                <Link href={`/products/${c.slug}`} className="group relative block min-h-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src={images[c.image].src}
                    alt={images[c.image].alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-extrabold">{c.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{c.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link href="/products" className="font-semibold text-[#e8a317] hover:underline">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#0b1220] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
            Technology partners
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href="/partnerships"
                className="rounded-2xl border border-white/10 px-4 py-5 text-center transition hover:border-[#e8a317]"
              >
                <span className="block font-bold">{p.name}</span>
                <span className="mt-1 block text-xs text-white/55">{p.role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Helum */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="mb-12 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
                Why Helum
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1f2e] sm:text-4xl">
                Built around real problems
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyHelum.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 transition hover:border-[#e8a317] hover:shadow-md">
                  <h3 className="mb-3 font-bold text-[#1a1f2e]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5a6478]">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link href="/why-helum" className="font-semibold text-[#e8a317] hover:underline">
              Why choose Helum →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f8fa] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="mb-12 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
                Our Values
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1f2e] sm:text-4xl">
                What drives us
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.num}>
                <article className="rounded-2xl border border-[#e5e8ef] bg-white p-6 transition hover:border-[#e8a317]">
                  <span className="mb-3 block text-xs font-bold tracking-wider text-[#e8a317]">
                    {v.num}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-[#1a1f2e]">{v.title}</h3>
                  <p className="text-sm text-[#5a6478]">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link href="/values" className="font-semibold text-[#e8a317] hover:underline">
              Our core values →
            </Link>
          </div>
        </div>
      </section>

      {/* Ambition CTA */}
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0">
          <Image src={images.opportunity.src} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#0b1220]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-[720px] px-5 text-center sm:px-6">
          <Reveal>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              {investment.ambitionTitle}
            </h2>
            <p className="mb-10 text-lg text-white/75">{investment.ambition}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/opportunity"
                className="rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f]"
              >
                Explore the opportunity
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Talk to Helum
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
