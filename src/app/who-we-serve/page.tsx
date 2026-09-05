import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { markets } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Energy and technology solutions for homes, businesses, institutions, agriculture and rural enterprises across Kenya and Africa.",
};

const imgMap: Record<string, { src: string; alt: string }> = {
  homes: images.homes,
  businesses: images.businesses,
  institutions: images.institutions,
  agriculture: images.agriculture,
};

export default function WhoWeServePage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Markets"
        title="Solutions Across the African Economy"
        subtitle="Helum adapts solutions for Kenyan businesses, households, institutions, agriculture and emerging enterprises."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {markets.map((m) => (
              <StaggerItem key={m.slug}>
                <article className="overflow-hidden rounded-2xl border border-[#e5e8ef] transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={imgMap[m.slug].src}
                      alt={imgMap[m.slug].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-bold text-[#1a1f2e]">{m.title}</h2>
                    <p className="text-sm text-[#5a6478]">{m.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Discuss your sector needs
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
