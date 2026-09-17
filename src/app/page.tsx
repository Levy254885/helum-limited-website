"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { images } from "@/lib/images";
import { about, company, services, values, vision, mission, whyHelum, investment } from "@/lib/content";
import { productCategories } from "@/lib/products";
import { partners } from "@/lib/partners";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { heroItem, heroTitle, staggerContainer } from "@/lib/motion";

const HERO_SLIDES = [
  {
    id: 0,
    eyebrow: company.tagline,
    title: (
      <>
        Engineering the{" "}
        <span className="text-[var(--color-gold)]">Intelligence of Energy</span>
      </>
    ),
    body: "Helum connects innovative technology, reliable energy and productive solutions to help businesses, households, institutions and enterprises overcome real-world energy challenges.",
    image: images.battery,
    ctaPrimary: { href: "/services", label: "Explore solutions" },
    ctaSecondary: { href: "/contact", label: "Talk to Helum" },
  },
  {
    id: 1,
    eyebrow: "RENEWABLE ENERGY · STORAGE · PRODUCTIVE USE",
    title: (
      <>
        Reliable Power.{" "}
        <span className="text-[var(--color-gold)]">Every Day.</span>
      </>
    ),
    body: "Solar, battery storage and backup systems designed for African homes, businesses and institutions — practical solutions that keep the lights on and operations running.",
    image: images.energyTech,
    ctaPrimary: { href: "/products", label: "View products" },
    ctaSecondary: { href: "/services/renewable-energy", label: "Renewable energy" },
  },
  {
    id: 2,
    eyebrow: "TECHNOLOGY · ENERGY · POSSIBILITY",
    title: (
      <>
        Built for{" "}
        <span className="text-[var(--color-gold)]">African Markets</span>
      </>
    ),
    body: "From solar PV and lithium storage to productive-use technology, Helum brings quality solutions adapted to local conditions and real customer needs across Kenya and beyond.",
    image: images.renewable,
    ctaPrimary: { href: "/solutions", label: "Explore solutions" },
    ctaSecondary: { href: "/opportunity", label: "The opportunity" },
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = HERO_SLIDES[active];

  const next = useCallback(() => {
    setActive((i) => (i + 1) % HERO_SLIDES.length);
  }, []);
  const prev = useCallback(() => {
    setActive((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next, paused, reduce]);

  return (
    <main>
      <section
        ref={heroRef}
        className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[var(--color-ink)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background image with restrained parallax */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <motion.div style={reduce ? undefined : { y }} className="absolute inset-0">
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  priority={slide.id === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {/* Layered overlays for editorial contrast — matching reference depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/75 to-[var(--color-ink)]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-transparent to-[var(--color-ink)]/40" />
          <div className="grain absolute inset-0 opacity-60" />
        </div>

        {/* Content — left-aligned, generous negative space, reference proportions */}
        <div className="relative z-10 flex flex-1 flex-col justify-end pb-28 pt-[calc(var(--header-h)+3rem)] sm:pb-32 sm:pt-[calc(var(--header-h)+4.5rem)] lg:justify-center lg:pb-36">
          <div className="wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                variants={reduce ? undefined : staggerContainer}
                initial={reduce ? undefined : "hidden"}
                animate={reduce ? undefined : "visible"}
                exit={reduce ? undefined : { opacity: 0, y: -12, transition: { duration: 0.25 } }}
                className="max-w-[38rem]"
              >
                <motion.p
                  variants={reduce ? undefined : heroItem}
                  className="mb-5 text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--color-gold)] uppercase sm:mb-6"
                >
                  {slide.eyebrow}
                </motion.p>
                <motion.h1
                  variants={reduce ? undefined : heroTitle}
                  className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-[3.4rem] lg:text-[4.15rem]"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  variants={reduce ? undefined : heroItem}
                  className="mt-5 max-w-[32rem] text-[1.05rem] leading-[1.65] text-white/70 sm:mt-6 sm:text-lg"
                >
                  {slide.body}
                </motion.p>
                <motion.div
                  variants={reduce ? undefined : heroItem}
                  className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
                >
                  <Link href={slide.ctaPrimary.href} className="btn btn-gold">
                    {slide.ctaPrimary.label}
                  </Link>
                  <Link href={slide.ctaSecondary.href} className="btn btn-ghost">
                    {slide.ctaSecondary.label}
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll / carousel indicator — positioned & styled like the reference */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center sm:bottom-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2 px-1">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                  className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
                  style={{ width: i === active ? 28 : 8 }}
                >
                  <span
                    className={`absolute inset-0 rounded-full ${
                      i === active ? "bg-[var(--color-gold)]" : "bg-white/35"
                    }`}
                  />
                  {i === active && !reduce && !paused && (
                    <motion.span
                      className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-gold)]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                      key={`progress-${active}`}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              {paused ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">About Helum</p>
            <h2 className="mb-8 max-w-[14ch] font-display text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Technology. Energy. Possibility.
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-[var(--color-ink)]">{about.lead}</p>
            <p className="mb-5 leading-relaxed text-[var(--color-muted)]">{about.belief}</p>
            <p className="mb-10 leading-relaxed text-[var(--color-muted)]">{about.beyond}</p>
            <Link href="/about" className="link-underline font-display text-sm font-semibold tracking-wide">
              Learn more about Helum →
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="img-zoom relative overflow-hidden">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={900}
                height={720}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-5">Why energy matters</p>
            <h2 className="mb-6 max-w-[18ch] font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Light to study. Power to work. Water to grow.
            </h2>
            <p className="mb-14 max-w-xl leading-relaxed text-[var(--color-muted)]">
              Helum solutions are meant to be seen in real rooms, classrooms and farms — not only on a
              specification sheet.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              {
                img: images.students,
                title: "Students who can study after dark",
                body: "Reliable lighting is a household and institutional energy problem Helum is built to solve.",
              },
              {
                img: images.homeLight,
                title: "Homes that stay on",
                body: "Backup power and solar for essential circuits when the grid drops.",
              },
              {
                img: images.water,
                title: "Farms that can pump water",
                body: "Solar water pumps turn energy into irrigation and rural water supply.",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <article>
                  <div className="img-zoom relative mb-5 h-64 overflow-hidden">
                    <Image src={card.img.src} alt={card.img.alt} fill className="object-cover" sizes="33vw" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{card.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Vision</p>
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">{vision}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Mission</p>
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">{mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">What we do</p>
              <h2 className="mb-5 font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Integrated technology & energy solutions
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Practical solutions designed around real customer needs—from power and energy access
                to productive-use technologies.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="img-zoom relative mb-5 aspect-[16/9] overflow-hidden">
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
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                    <span className="absolute left-0 top-0 bg-[var(--color-gold)] px-3 py-1 font-display text-xs font-bold text-[var(--color-ink)]">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-gold)]">
                    {s.title}
                  </h3>
                  <p className="mb-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                    {s.short}
                  </p>
                  <span className="font-display text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-ink)]">
                    Explore →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-14">
            <Link href="/services" className="btn btn-line">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-24 sm:py-32 text-white">
        <div className="wrap">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">Products</p>
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">What we supply</h2>
              <p className="mt-5 leading-relaxed text-white/60">
                Inverters, lithium batteries, power stations, solar panels and solar water pumps —
                specified as part of a designed system.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <StaggerItem key={c.slug}>
                <Link href={`/products/${c.slug}`} className="img-zoom group relative block min-h-[280px] overflow-hidden">
                  <Image
                    src={images[c.image].src}
                    alt={images[c.image].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{c.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <Link href="/products" className="btn btn-ghost">
              View all products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <p className="eyebrow mb-10">Technology partners</p>
          <div className="grid grid-cols-2 gap-px bg-[var(--color-line)] sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href="/partnerships"
                className="bg-white px-4 py-8 text-center transition-colors hover:bg-[var(--color-paper)]"
              >
                <span className="block font-display text-sm font-semibold text-[var(--color-ink)]">
                  {p.name}
                </span>
                <span className="mt-2 block text-[0.7rem] text-[var(--color-muted)]">{p.role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-24 sm:py-32">
        <div className="wrap">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">Why Helum</p>
              <h2 className="font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
                Built around real problems
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyHelum.map((item, i) => (
              <StaggerItem key={item.title}>
                <p className="mb-4 font-display text-sm text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-display text-xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <Link href="/why-helum" className="link-underline font-display text-sm font-semibold">
              Why choose Helum →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow mb-5">Our values</p>
            <h2 className="mb-14 font-display text-4xl font-semibold text-[var(--color-ink)]">
              What drives us
            </h2>
          </Reveal>
          <Stagger className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.num} className="bg-white">
                <article className="h-full p-8">
                  <span className="mb-4 block font-display text-xs tracking-[0.16em] text-[var(--color-gold)]">
                    {v.num}
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold text-[var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0">
          <Image src={images.opportunity.src} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[var(--color-ink)]/82" />
        </div>
        <div className="wrap relative z-10 max-w-3xl">
          <Reveal>
            <h2 className="mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {investment.ambitionTitle}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70">{investment.ambition}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/opportunity" className="btn btn-gold">
                Explore the opportunity
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Talk to Helum
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
