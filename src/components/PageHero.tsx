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

export default function PageHero({ eyebrow, title, subtitle, image }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[68vh] overflow-hidden pt-[80px]">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/88 via-[var(--color-ink)]/55 to-[var(--color-ink)]/30" />
          <div className="grain absolute inset-0" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[var(--color-ink)]" />
      )}

      <div className="wrap relative z-10 flex min-h-[calc(68vh-80px)] flex-col justify-end pb-16 pt-20 sm:pb-24">
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.p variants={reduce ? undefined : heroItem} className="eyebrow mb-5">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={reduce ? undefined : heroTitle}
            className="font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={reduce ? undefined : heroItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
