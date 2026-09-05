"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { processSteps } from "@/lib/content";
import { images } from "@/lib/images";

export default function ProcessPage() {
  const [active, setActive] = useState(0);

  return (
    <PageTransition>
      <PageHero
        eyebrow="How We Work"
        title="From Challenge to Solution"
        subtitle="We begin with the customer's challenge and work through a structured process to deliver practical, reliable and scalable solutions."
        image={images.process}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6">
          {/* Desktop interactive */}
          <div className="mb-10 hidden md:block">
            <div className="relative mb-10 flex justify-between gap-2">
              <div className="absolute left-[8%] right-[8%] top-[22px] h-0.5 bg-[#e5e8ef]" />
              {processSteps.map((step, i) => (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative z-10 flex flex-1 flex-col items-center gap-3"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                      active === i
                        ? "border-[#e8a317] bg-[#e8a317] text-[#0b1220]"
                        : "border-[#e5e8ef] bg-white text-[#5a6478]"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      active === i ? "text-[#1a1f2e]" : "text-[#5a6478]"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] px-8 py-10"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1a1f2e]">
                  {processSteps[active].title}
                </h2>
                <p className="max-w-xl text-lg text-[#5a6478]">{processSteps[active].body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-4 md:hidden">
            {processSteps.map((step) => (
              <article
                key={step.num}
                className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6"
              >
                <span className="mb-2 block text-xs font-bold text-[#e8a317]">{step.num}</span>
                <h2 className="mb-2 text-lg font-bold text-[#1a1f2e]">{step.title}</h2>
                <p className="text-sm text-[#5a6478]">{step.body}</p>
              </article>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
