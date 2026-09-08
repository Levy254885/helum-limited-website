import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { DarkBand } from "@/components/sections";
import { whyHelum } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why Helum",
  description:
    "Helum understands African markets, pairs local insight with global technology, and builds solutions around customer problems.",
};

const story = [
  { ...whyHelum[0], image: images.why },
  { ...whyHelum[1], image: images.energyTech },
  { ...whyHelum[2], image: images.partnerships },
  { ...whyHelum[3], image: images.install },
  { ...whyHelum[4], image: images.opportunity },
];

export default function WhyHelumPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Why Helum"
        title="Local insight. Global technology."
        subtitle="Technology only creates value when it solves a real problem. These five pictures are how we tell that story."
        image={images.why}
      />

      {story.map((item, i) => (
        <section key={item.title} className={i % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"}>
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <p className="mb-3 text-sm font-bold text-[#e8a317]">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mb-5 text-3xl font-extrabold text-[#1a1f2e]">{item.title}</h2>
              <p className="text-lg leading-relaxed text-[#5a6478]">{item.body}</p>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={1000}
                  height={750}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6">
          <h2 className="mb-4 text-2xl font-extrabold text-[#1a1f2e]">See the products we specify</h2>
          <p className="mb-8 text-[#5a6478]">
            Inverters, lithium batteries, power stations, solar panels and solar water pumps — sourced
            with partners and sized to the problem.
          </p>
          <Link
            href="/products"
            className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220]"
          >
            Browse products
          </Link>
        </div>
      </section>

      <DarkBand
        title="Talk to Helum"
        body="Tell us the challenge. We will tell you whether we can design a useful solution."
        href="/contact"
        label="Contact Us"
      />
    </PageTransition>
  );
}
