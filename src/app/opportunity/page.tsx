import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { investment } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Investment & Opportunity",
  description: investment.intro,
};

export default function OpportunityPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Opportunity"
        title="Energy Meets Technology. Opportunity Meets Impact."
        subtitle={investment.intro}
        image={images.opportunity}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6">
          <Reveal>
            <h2 className="mb-4 text-2xl font-extrabold text-[#1a1f2e]">Our investment proposition</h2>
            <p className="mb-6 leading-relaxed text-[#5a6478]">{investment.opportunity}</p>
            <p className="mb-12 leading-relaxed text-[#5a6478]">{investment.platform}</p>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl bg-[#0b1220] p-8 text-white sm:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">
                Long-term ambition
              </p>
              <h3 className="mb-6 text-2xl font-extrabold leading-tight sm:text-3xl">
                {investment.ambitionTitle}
              </h3>
              <p className="leading-relaxed text-white/75">{investment.ambition}</p>
            </div>
          </Reveal>
          <Reveal className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Talk to Helum
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
