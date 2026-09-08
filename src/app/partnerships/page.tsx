import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { DarkBand } from "@/components/sections";
import { partners } from "@/lib/partners";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Technology Partnerships",
  description:
    "Helum partners with SVC Energy, Deye, Access and Move Limited, Meco Energy and Hithium to bring quality technologies into African markets.",
};

export default function PartnershipsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Partnerships"
        title="Technology. Partnership. Scale."
        subtitle="Named technology partners Helum works with to source and deploy inverters, storage, power stations and related systems."
        image={images.partnerships}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#5a6478]">
              Helum combines Kenyan market knowledge with international technology relationships.
              These are the partners we work with today.
            </p>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {partners.map((p) => (
              <StaggerItem key={p.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#e8a317]">
                    {p.role}
                  </p>
                  <h2 className="mb-3 text-2xl font-extrabold text-[#1a1f2e]">{p.name}</h2>
                  <p className="mb-6 flex-1 leading-relaxed text-[#5a6478]">{p.summary}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#1a1f2e] hover:text-[#e8a317]"
                  >
                    Visit {p.name} ↗
                  </a>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-10 text-sm text-[#8b95a8]">
            Partner websites open in a new tab. Helum does not republish partner product specifications.
          </p>
        </div>
      </section>

      <DarkBand
        title="Partner with Helum"
        body="Manufacturers, technology companies and route-to-market partners can start a conversation."
        href="/technology/partner"
        label="Partner With Helum"
      />
    </PageTransition>
  );
}
