import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { PageTransition, Stagger, StaggerItem } from "@/components/Motion";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Core Values",
  description: "Innovation, Integrity, Customer Value, Partnership, Excellence and Impact drive Helum Limited.",
};

export default function ValuesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Culture"
        title="Our Core Values"
        subtitle="The principles that shape how we work and the relationships we build."
        dark
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-6">
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.num}>
                <article className="h-full rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-8 transition hover:border-[#e8a317] hover:shadow-md">
                  <span className="mb-4 block text-sm font-bold tracking-wider text-[#e8a317]">
                    {v.num}
                  </span>
                  <h2 className="mb-3 text-2xl font-bold text-[#1a1f2e]">{v.title}</h2>
                  <p className="text-[#5a6478] leading-relaxed">{v.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </PageTransition>
  );
}
