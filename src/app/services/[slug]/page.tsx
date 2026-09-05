import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { services } from "@/lib/content";
import { images } from "@/lib/images";

const imgMap: Record<string, { src: string; alt: string }> = {
  "renewable-energy": images.renewable,
  "energy-power-technology": images.energyTech,
  "productive-use": images.productive,
  "strategic-partnerships": images.partnerships,
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const img = imgMap[slug];

  return (
    <PageTransition>
      <PageHero
        eyebrow={`Service ${service.num}`}
        title={service.title}
        subtitle={service.short}
        image={img}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-10 text-lg leading-relaxed text-[#5a6478]">{service.body}</p>
          </Reveal>
          <Reveal>
            <h2 className="mb-6 text-xl font-bold text-[#1a1f2e]">Focus areas</h2>
          </Reveal>
          <Stagger className="mb-14 grid gap-3 sm:grid-cols-2">
            {service.points.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-3 rounded-xl border border-[#e5e8ef] bg-[#f7f8fa] px-4 py-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e8a317]" />
                  <span className="text-[#1a1f2e]">{p}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]"
              >
                Talk to Helum about this
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-[#e5e8ef] px-6 py-3 text-sm font-semibold text-[#1a1f2e]"
              >
                All services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
