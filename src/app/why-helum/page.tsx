import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { whyHelum } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Helum",
  description:
    "African market understanding, technology with commercial purpose, local insight and global technology—why partners choose Helum.",
};

export default function WhyHelumPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Differentiation"
        title="Why Helum"
        subtitle="Technology only creates value when it solves a real problem. Here is how we work."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <Stagger className="space-y-6">
            {whyHelum.map((item, i) => (
              <StaggerItem key={item.title}>
                <article className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-8 transition hover:border-[#e8a317]">
                  <span className="mb-3 block text-xs font-bold tracking-wider text-[#e8a317]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mb-3 text-xl font-bold text-[#1a1f2e]">{item.title}</h2>
                  <p className="leading-relaxed text-[#5a6478]">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Partner with Helum
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
