import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem, Reveal } from "@/components/Motion";
import { services } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Renewable energy solutions, energy & power technology, productive-use technology and strategic partnerships from Helum Limited.",
};

const imgMap: Record<string, { src: string; alt: string }> = {
  "renewable-energy": images.renewable,
  "energy-power-technology": images.energyTech,
  "productive-use": images.productive,
  "strategic-partnerships": images.partnerships,
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="What We Do"
        title="Integrated Technology & Energy Solutions"
        subtitle="From reliable power and energy access to productive-use technologies—solutions designed around real customer needs."
        image={images.renewable}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <Stagger className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e8ef] transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={imgMap[s.slug].src}
                        alt={imgMap[s.slug].alt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 50vw"
                      />
                      <span className="absolute left-4 top-4 rounded-md bg-[#e8a317] px-2.5 py-1 text-sm font-bold text-[#0b1220]">
                        {s.num}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="mb-3 text-xl font-bold text-[#1a1f2e] group-hover:text-[#e8a317]">
                        {s.title}
                      </h2>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-[#5a6478]">{s.body}</p>
                      <span className="font-semibold text-[#1a1f2e] group-hover:text-[#e8a317]">
                        View details →
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
            >
              Discuss your requirements
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
