import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { PageTransition, Reveal } from "@/components/Motion";
import { company } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Helum Limited in Nairobi. Discuss renewable energy and technology solutions.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in Touch"
        title="Ready to Build a Smarter Energy Future?"
        subtitle="Let's discuss how Helum can help you solve your energy and technology challenges with practical, reliable and scalable solutions."
        image={images.contact}
      />
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold text-[#1a1f2e]">Contact details</h2>
            <div className="space-y-6">
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">
                  Phone
                </span>
                <a
                  href={company.phoneHref}
                  className="text-lg font-medium text-[#1a1f2e] hover:text-[#e8a317]"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">
                  Email
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="text-lg font-medium text-[#1a1f2e] hover:text-[#e8a317]"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#8b95a8]">
                  Address
                </span>
                <address className="not-italic text-lg font-medium text-[#1a1f2e]">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.city}
                </address>
              </div>
            </div>
            <p className="mt-10 text-sm leading-relaxed text-[#5a6478]">{company.footerNote}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-[#1a1f2e]">Send an enquiry</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
