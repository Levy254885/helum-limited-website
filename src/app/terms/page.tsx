import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Helum Limited website.",
};

export default function TermsPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title="Terms of Use" subtitle="Use of this website." dark />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] space-y-6 px-5 text-[#5a6478] leading-relaxed sm:px-6">
          <Reveal>
            <p>
              Content on this website is provided by {company.name} for general information about
              our technology and renewable energy solutions. It does not constitute a binding offer
              unless confirmed in writing.
            </p>
            <p>
              While we aim to keep information accurate, we do not guarantee completeness or
              suitability for a particular purpose. For project-specific advice, please contact us
              directly at {company.phone} or {company.email}.
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
