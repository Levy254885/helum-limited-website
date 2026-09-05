import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Helum Limited website visitors.",
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title="Privacy" subtitle="How we handle information shared through this website." dark />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[700px] space-y-6 px-5 text-[#5a6478] leading-relaxed sm:px-6">
          <Reveal>
            <p>
              Helum Limited respects your privacy. Information submitted through our contact form
              (such as name, email, phone and message content) is used only to respond to your
              enquiry and to provide related services you request.
            </p>
            <p>
              We do not sell personal information. Access is limited to people who need it to
              handle your request. For questions about privacy, contact us at{" "}
              <a href={`mailto:${company.email}`} className="text-[#e8a317]">
                {company.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
