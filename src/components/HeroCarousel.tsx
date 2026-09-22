"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Slide = {
  id: string;
  tone: "dark" | "light";
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  href: string;
  cta: string;
  secondaryHref?: string;
  secondaryCta?: string;
  features?: { label: string; sub: string }[];
  image?: { src: string; alt: string; fit?: "contain" | "cover" };
  captions?: string[];
  watermark?: boolean;
};

const slides: Slide[] = [
  {
    id: "intro",
    tone: "dark",
    eyebrow: "Solar · Storage · Productive energy",
    title: "Technology. Energy.",
    accent: "Possibility.",
    body: "Helum connects innovative technology, reliable energy and productive solutions for businesses, households, institutions and enterprises across Africa.",
    href: "/products",
    cta: "Explore products",
    secondaryHref: "/contact",
    secondaryCta: "Contact us",
  },
  {
    id: "ess",
    tone: "dark",
    eyebrow: "All-in-one inverter & battery",
    title: "Power and storage.",
    accent: "One system.",
    body: "Integrated inverter and lithium battery cabinets for homes and small businesses — solar, backup and daily use in a single Helum-specified unit.",
    href: "/products/inverters/all-in-one-inverter-battery",
    cta: "Explore all-in-one",
    image: {
      src: "/photos/all-in-one-ess.jpg",
      alt: "All-in-one inverter and battery energy storage system",
    },
  },
  {
    id: "inverter",
    tone: "light",
    eyebrow: "Hybrid inverters",
    title: "Reliable Power.",
    accent: "Every Day.",
    body: "Hybrid inverters for homes and businesses — solar, storage and the grid in one designed Helum solution.",
    href: "/products/inverters",
    cta: "Explore inverters",
    image: {
      src: "/photos/inverter-studio.jpg",
      alt: "Hybrid solar inverter",
    },
    captions: ["Hybrid", "Off-grid", "Three-phase"],
    watermark: true,
  },
  {
    id: "panels",
    tone: "light",
    eyebrow: "Solar panels",
    title: "Generation.",
    accent: "Over work and land.",
    body: "Photovoltaic arrays for rooftops, carports, farms and commercial sites — specified as the generation layer of a Helum system.",
    href: "/products/solar-panels",
    cta: "Explore solar panels",
    image: {
      src: "/photos/solar-carport.jpg",
      alt: "Solar carport canopy with photovoltaic modules",
      fit: "cover",
    },
    captions: ["Rooftop", "Carport", "Ground mount"],
    watermark: true,
  },
  {
    id: "storage",
    tone: "light",
    eyebrow: "Wall-mounted battery & inverter",
    title: "Integrated Power",
    accent: "On the wall.",
    body: "Wall-mounted lithium batteries with hybrid inverters for homes and businesses that need clean, compact backup.",
    href: "/products/lithium-batteries",
    cta: "Explore storage",
    image: {
      src: "/photos/wall-install.jpg",
      alt: "Wall-mounted lithium batteries with a hybrid inverter",
      fit: "cover",
    },
    captions: ["Wall lithium", "Hybrid inverter"],
    watermark: true,
  },
  {
    id: "power",
    tone: "light",
    eyebrow: "Power stations",
    title: "Power on Demand.",
    accent: "Ready to work.",
    body: "Portable power stations and all-in-one solar generators for homes, sites and enterprises.",
    href: "/products/power-stations",
    cta: "Explore power stations",
    features: [
      { label: "Portable backup", sub: "Moveable power" },
      { label: "AC outlets", sub: "Everyday loads" },
      { label: "Solar charging", sub: "DC / PV input" },
      { label: "Partner supply", sub: "Including Meco Energy" },
    ],
    image: {
      src: "/photos/power-station-front.jpg",
      alt: "Helum portable power station",
    },
    watermark: true,
  },
  {
    id: "heater",
    tone: "light",
    eyebrow: "Solar water heaters",
    title: "Hot water.",
    accent: "From the sun.",
    body: "Evacuated-tube solar water heaters for homes and institutions — heat without putting extra load on the grid.",
    href: "/products/solar-water-heaters",
    cta: "Explore water heaters",
    image: {
      src: "/photos/water-heater.jpg",
      alt: "Evacuated-tube solar water heater",
    },
    captions: ["Homes", "Institutions"],
    watermark: true,
  },
  {
    id: "pump",
    tone: "light",
    eyebrow: "Solar water pumps",
    title: "Energy that",
    accent: "Moves water.",
    body: "Solar water pumping and irrigation systems that turn reliable energy into productive use on farms and rural sites.",
    href: "/products/solar-water-pumps",
    cta: "Explore pumps",
    image: {
      src: "/photos/pump-install.jpg",
      alt: "Solar water-pumping installation in Kenya",
      fit: "cover",
    },
    captions: ["Boreholes", "Irrigation"],
    watermark: true,
  },
  {
    id: "agriculture",
    tone: "light",
    eyebrow: "Agriculture",
    title: "Energy that",
    accent: "Grows value.",
    body: "Solar for farms, livestock heat, irrigation and rural production — power judged by what it grows, warms and pumps.",
    href: "/solutions/agriculture",
    cta: "Agriculture solutions",
    image: {
      src: "/photos/farm-plot.jpg",
      alt: "Solar generation over a smallholder farm",
      fit: "cover",
    },
    captions: ["Crops", "Livestock", "Homesteads"],
    watermark: true,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();
  const slide = slides[index];
  const dark = slide.tone === "dark";

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (!playing || reduce) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [playing, reduce, next, index]);

  return (
    <section className={`relative min-h-dvh overflow-hidden pt-[84px] ${dark ? "bg-[#070b14]" : "bg-[#f7f6f2]"}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="relative min-h-[calc(100dvh-84px)]"
        >
          {dark && (
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,181,232,0.16),transparent_55%)]" />
          )}

          {slide.watermark && (
            <span className="font-script pointer-events-none absolute right-6 top-6 z-10 hidden text-4xl text-[#c9a227]/70 sm:block md:right-14 md:top-10 md:text-5xl">
              Helum
            </span>
          )}

          <div className="relative mx-auto grid min-h-[calc(100dvh-84px)] max-w-[1280px] items-center gap-6 px-5 pb-28 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-4">
            <div className="relative z-10 max-w-[34rem]">
              <p
                className={`mb-5 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
                  dark ? "text-[#3ec8f0]" : "text-[#c9a227]"
                }`}
              >
                {dark && (
                  <span className="mb-3 block h-px w-10 bg-[#3ec8f0]" aria-hidden />
                )}
                {slide.eyebrow}
              </p>
              <h1 className="font-display text-[2.35rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.35rem]">
                <span className={dark ? "text-white" : "text-[#141820]"}>{slide.title}</span>
                <br />
                <span className={dark ? "text-[#3ec8f0]" : "text-[#c9a227]"}>{slide.accent}</span>
              </h1>
              {!dark && <span className="mt-5 block h-px w-12 bg-[#c9a227]" />}
              <p
                className={`mt-5 max-w-[28rem] text-[0.95rem] leading-relaxed sm:text-base ${
                  dark ? "text-white/70" : "text-[#5c6574]"
                }`}
              >
                {slide.body}
              </p>

              {slide.features && (
                <ul className="mt-7 grid max-w-sm grid-cols-2 gap-x-4 gap-y-4">
                  {slide.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c9a227] text-[#c9a227]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[0.72rem] font-bold tracking-wide text-[#141820]">
                          {f.label}
                        </span>
                        <span className="block text-[0.65rem] tracking-wider uppercase text-[#8b93a0]">
                          {f.sub}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={slide.href}
                  className={
                    dark
                      ? "inline-flex items-center gap-2 rounded-md bg-[#2eb5e8] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-[#041018] transition hover:bg-[#4ec7f2]"
                      : "inline-flex items-center gap-2 rounded-md border border-[#c9a227] px-6 py-3 text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[#8a7010] transition hover:bg-[#c9a227] hover:text-white"
                  }
                >
                  {slide.cta} <span aria-hidden>→</span>
                </Link>
                {slide.secondaryHref && (
                  <Link
                    href={slide.secondaryHref}
                    className="inline-flex items-center rounded-md border border-white/35 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-white transition hover:border-white"
                  >
                    {slide.secondaryCta}
                  </Link>
                )}
              </div>
            </div>

            {slide.image && (
              <div
                className={`relative mx-auto w-full max-w-[560px] overflow-hidden lg:max-w-none ${
                  slide.image.fit === "cover" ? "aspect-[4/5] sm:aspect-[5/6]" : ""
                }`}
              >
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  width={900}
                  height={1200}
                  priority={index < 2}
                  className={
                    slide.image.fit === "cover"
                      ? "h-full w-full object-cover"
                      : "h-auto w-full object-contain object-bottom"
                  }
                />
                {slide.captions && (
                  <div
                    className={`flex justify-center gap-8 text-center ${
                      slide.image.fit === "cover"
                        ? "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-4"
                        : "mt-2"
                    }`}
                  >
                    {slide.captions.map((c) => (
                      <p
                        key={c}
                        className={`text-[0.7rem] ${
                          slide.image.fit === "cover" ? "text-white/90" : "text-[#6f7278]"
                        }`}
                      >
                        {c}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a3d44] text-white transition hover:bg-[#2a2d33]"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5 px-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[#2eb5e8]" : "w-1.5 bg-white/45"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a3d44] text-white transition hover:bg-[#2a2d33]"
        >
          {playing ? (
            <span className="flex gap-0.5">
              <span className="h-3 w-0.5 bg-white" />
              <span className="h-3 w-0.5 bg-white" />
            </span>
          ) : (
            <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
          )}
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a3d44] text-white transition hover:bg-[#2a2d33]"
        >
          ›
        </button>
      </div>
    </section>
  );
}
