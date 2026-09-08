import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { DarkBand, Related } from "@/components/sections";
import { processSteps } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Helum works from challenge to solution: understand, assess, design, deliver and support.",
};

const visuals = [images.approach, images.energyTech, images.sourcing, images.install, images.maintenance];

export default function ProcessPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Our process"
        title="From challenge to solution"
        subtitle="A structured path from the customer's problem to a maintainable system."
        image={images.process}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6">
          <p className="mb-14 text-lg leading-relaxed text-[#5a6478]">
            We begin with the customer's challenge and work through five steps. Delivery is not the
            end of the relationship — support is.
          </p>
          <ol className="space-y-16">
            {processSteps.map((step, i) => (
              <li key={step.num}>
                <Reveal>
                  <article className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={visuals[i].src}
                        alt={visuals[i].alt}
                        width={800}
                        height={560}
                        className="h-[220px] w-full object-cover sm:h-[280px]"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#e8a317]">{step.num}</span>
                      <h2 className="mt-2 mb-3 text-3xl font-extrabold text-[#1a1f2e]">{step.title}</h2>
                      <p className="text-lg leading-relaxed text-[#5a6478]">{step.body}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <DarkBand
        title="Start with a consultation"
        body="The first two steps — understand and assess — begin with a conversation about your site and load."
        href="/contact/consultation"
        label="Request a consultation"
      />
      <Related
        links={[
          { href: "/engineering/installation", label: "Engineering & Installation" },
          { href: "/engineering/maintenance", label: "Maintenance & Support" },
          { href: "/products", label: "Products" },
        ]}
      />
    </PageTransition>
  );
}
