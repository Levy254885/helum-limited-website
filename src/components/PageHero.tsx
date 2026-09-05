"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroItem, heroTitle, staggerContainer } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: { src: string; alt: string };
  dark?: boolean;
};

export default function PageHero({ eyebrow, title, subtitle, image, dark = true }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[72px]">
      {image ? (
        <div className="absolute inset-0">
          <Image src={image.src} alt={image.alt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[#0b1220]/70" />
          <div className="grain absolute inset-0 opacity-40" />
        </div>
      ) : (
        <div className={`absolute inset-0 ${dark ? "bg-[#0b1220]" : "bg-[#f7f8fa]"}`} />
      )}

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28">
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.p
              variants={reduce ? undefined : heroItem}
              className={`mb-4 text-sm font-semibold uppercase tracking-wider ${
                image || dark ? "text-[#e8a317]" : "text-[#e8a317]"
              }`}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={reduce ? undefined : heroTitle}
            className={`text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl ${
              image || dark ? "text-white" : "text-[#1a1f2e]"
            }`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={reduce ? undefined : heroItem}
              className={`mt-5 max-w-xl text-lg leading-relaxed ${
                image || dark ? "text-white/80" : "text-[#5a6478]"
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
