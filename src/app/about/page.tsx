import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { about, company, vision, mission } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Helum Limited",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="About"
        title="Technology. Energy. Possibility."
        subtitle="Building practical solutions for a sustainable Africa."
        image={images.about}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6">
          <Reveal>
            <h2 className="mb-6 text-2xl font-extrabold text-[#1a1f2e] sm:text-3xl">
              About Helum Limited
            </h2>
            <p className="mb-5 text-lg font-medium leading-relaxed text-[#1a1f2e]">{about.lead}</p>
            <p className="mb-5 leading-relaxed text-[#5a6478]">{about.belief}</p>
            <p className="mb-5 leading-relaxed text-[#5a6478]">{about.approach}</p>
            <p className="mb-10 leading-relaxed text-[#5a6478]">{about.beyond}</p>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2">
            <StaggerItem>
              <div className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#e8a317]">
                  Vision
                </h3>
                <p className="text-[#5a6478] leading-relaxed">{vision}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#e8a317]">
                  Mission
                </h3>
                <p className="text-[#5a6478] leading-relaxed">{mission}</p>
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal className="mt-12">
            <p className="mb-2 text-sm font-semibold text-[#8b95a8]">Based in</p>
            <p className="text-[#1a1f2e]">
              {company.address.line2}, {company.address.city}
            </p>
            <p className="mt-6 text-sm text-[#5a6478]">{company.footerNote}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/vision-mission"
                className="rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]"
              >
                Vision & Mission
              </Link>
              <Link
                href="/values"
                className="rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e]"
              >
                Our Values
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
