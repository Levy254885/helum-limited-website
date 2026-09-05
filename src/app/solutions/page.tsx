import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solar power systems, battery storage, backup power, productive equipment, intelligent energy systems and off-grid solutions from Helum Limited.",
};

const solutions = [
  {
    title: "Solar Power Systems",
    body: "Reliable solar solutions designed around customer energy requirements for homes, businesses and institutions.",
  },
  {
    title: "Battery Energy Storage",
    body: "Energy storage solutions for backup, reliability and productive energy use.",
  },
  {
    title: "Backup Power",
    body: "Solutions designed to improve power continuity for homes, businesses and institutions.",
  },
  {
    title: "Solar-Powered Productive Equipment",
    body: "Energy solutions supporting productive activities such as agriculture, water pumping and processing.",
  },
  {
    title: "Intelligent Energy Systems",
    body: "Technology that helps customers better manage, store and use energy.",
  },
  {
    title: "Off-Grid & Decentralized Energy",
    body: "Solutions designed for environments where conventional grid access is limited or unreliable.",
  },
];

export default function SolutionsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Portfolio"
        title="Technology Designed for Real-World Impact"
        subtitle="Solution categories aligned with customer energy requirements and operating conditions."
        image={images.energyTech}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <StaggerItem key={s.title}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 transition hover:border-[#e8a317] hover:shadow-md">
                  <h2 className="mb-3 text-lg font-bold text-[#1a1f2e]">{s.title}</h2>
                  <p className="text-sm leading-relaxed text-[#5a6478]">{s.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center">
            <Link
              href="/services"
              className="mr-4 inline-flex rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e]"
            >
              Our services
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]"
            >
              Request a solution discussion
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
