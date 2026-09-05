import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { vision, mission } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: vision,
};

export default function VisionMissionPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Purpose"
        title="Vision & Mission"
        subtitle="What we are building toward—and how we get there."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] space-y-16 px-5 sm:px-6">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
              Our Vision
            </p>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#1a1f2e] sm:text-4xl">
              {vision}
            </h2>
            <p className="leading-relaxed text-[#5a6478]">
              We aim to transform how people and businesses across Africa access, use and benefit
              from technology and sustainable energy—by being a company that connects innovation
              with real customer value.
            </p>
          </Reveal>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
              Our Mission
            </p>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-[#1a1f2e] sm:text-4xl">
              {mission}
            </h2>
            <p className="leading-relaxed text-[#5a6478]">
              Every engagement starts with the customer&apos;s challenge. We connect technology,
              reliable energy and entrepreneurial opportunity so solutions improve lives, strengthen
              businesses and support sustainable development.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/values"
              className="inline-flex rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]"
            >
              Explore our values
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
