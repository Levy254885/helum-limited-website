import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { services } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Strategic Partnerships",
  description:
    "Helum works with manufacturers, technology companies, investors and development partners to bring quality technologies into African markets.",
};

const partnershipService = services.find((s) => s.slug === "strategic-partnerships")!;

export default function PartnershipsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Collaboration"
        title="Technology. Partnership. Scale."
        subtitle={partnershipService.short}
        image={images.partnerships}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-10 text-lg leading-relaxed text-[#5a6478]">
              {partnershipService.body}
            </p>
          </Reveal>
          <Stagger className="mb-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Manufacturers",
                body: "Access to quality energy and technology products adapted for African operating conditions.",
              },
              {
                title: "Technology Companies",
                body: "Collaboration on innovative systems that solve real productivity and reliability challenges.",
              },
              {
                title: "Investors",
                body: "Aligned interest in scalable solutions that create measurable economic opportunity.",
              },
              {
                title: "Development Partners",
                body: "Partnerships that support sustainable commercial opportunities and market impact.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
                  <h2 className="mb-2 font-bold text-[#1a1f2e]">{item.title}</h2>
                  <p className="text-sm text-[#5a6478]">{item.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Partner With Helum
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
