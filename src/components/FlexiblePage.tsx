import type { Metadata } from "next";
import PageHero from "./PageHero";
import { PageTransition, Reveal } from "./Motion";
import { Accordion, Breadcrumbs, Cards, DarkBand, Numbered, Points, Related, Split } from "./sections";
import ContactForm from "./ContactForm";
import { images, type ImageKey } from "@/lib/images";
import { company } from "@/lib/content";
import type { PageSpec } from "@/lib/pages";

export function pageMetadata(spec: PageSpec): Metadata {
  return {
    title: spec.metaTitle,
    description: spec.description,
    alternates: { canonical: `https://helumlimited.com${spec.path}` },
    openGraph: {
      title: spec.metaTitle,
      description: spec.description,
      url: `https://helumlimited.com${spec.path}`,
      images: [{ url: images[spec.image].src, alt: images[spec.image].alt }],
    },
  };
}

function img(key: ImageKey) {
  return images[key];
}

export default function FlexiblePage({ spec }: { spec: PageSpec }) {
  const heroImg = img(spec.image);
  const crumbs = spec.crumbs ?? [];

  return (
    <PageTransition>
      <PageHero
        eyebrow={spec.eyebrow}
        title={spec.heroTitle}
        subtitle={spec.heroSubtitle}
        image={heroImg}
      />

      {crumbs.length > 0 && (
        <div className="bg-[#0b1220] px-5 pb-6 sm:px-6">
          <div className="mx-auto max-w-[1200px]">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
      )}

      {spec.layout === "editorial" && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[760px] px-5 sm:px-6">
            {spec.intro.map((p, i) => (
              <Reveal key={i}>
                <p className={`mb-5 leading-relaxed ${i === 0 ? "text-lg font-medium text-[#1a1f2e]" : "text-[#5a6478]"}`}>
                  {p}
                </p>
              </Reveal>
            ))}
            {spec.sections.map((s) => (
              <Reveal key={s.heading} className="mt-12">
                <h2 className="mb-4 text-2xl font-extrabold text-[#1a1f2e]">{s.heading}</h2>
                <p className="leading-relaxed text-[#5a6478]">{s.body}</p>
                {s.points && <Points items={s.points} />}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {spec.layout === "split-cards" && (
        <>
          <Split image={heroImg}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e8a317]">{spec.eyebrow}</p>
            <h2 className="mb-5 text-3xl font-extrabold text-[#1a1f2e]">{spec.sections[0]?.heading ?? spec.heroTitle}</h2>
            {spec.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mb-4 leading-relaxed text-[#5a6478]">
                {p}
              </p>
            ))}
            {spec.sections[0]?.points && <Points items={spec.sections[0].points} />}
          </Split>
          {spec.sections.length > 1 && (
            <section className="bg-[#f7f8fa] py-16 sm:py-24">
              <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
                <h2 className="mb-10 text-3xl font-extrabold text-[#1a1f2e]">{spec.sections[1].heading}</h2>
                <Cards
                  items={
                    spec.sections.slice(1).map((s) => ({
                      title: s.heading,
                      body: s.body,
                    }))
                  }
                />
              </div>
            </section>
          )}
        </>
      )}

      {spec.layout === "timeline" && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              {spec.intro.map((p, i) => (
                <p key={i} className={`mb-4 leading-relaxed ${i === 0 ? "text-lg text-[#1a1f2e]" : "text-[#5a6478]"}`}>
                  {p}
                </p>
              ))}
            </div>
            <Numbered
              items={spec.sections.map((s, i) => ({
                num: String(i + 1).padStart(2, "0"),
                title: s.heading,
                body: s.body,
              }))}
            />
          </div>
        </section>
      )}

      {spec.layout === "mosaic" && (
        <section className="bg-[#f7f8fa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
            <div className="mb-12 max-w-2xl">
              {spec.intro.map((p, i) => (
                <p key={i} className={`mb-4 leading-relaxed ${i === 0 ? "text-lg font-medium text-[#1a1f2e]" : "text-[#5a6478]"}`}>
                  {p}
                </p>
              ))}
            </div>
            <Cards
              items={spec.sections.map((s) => ({
                title: s.heading,
                body: s.body,
                href: s.href,
              }))}
            />
          </div>
        </section>
      )}

      {spec.layout === "dark-intro" && (
        <>
          <section className="bg-[#0b1220] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-[800px] px-5 sm:px-6">
              {spec.intro.map((p, i) => (
                <p key={i} className={`mb-5 leading-relaxed ${i === 0 ? "text-xl text-white" : "text-white/70"}`}>
                  {p}
                </p>
              ))}
            </div>
          </section>
          <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
              <Cards items={spec.sections.map((s) => ({ title: s.heading, body: s.body, href: s.href }))} />
            </div>
          </section>
        </>
      )}

      {spec.layout === "checklist" && (
        <Split image={heroImg} reverse>
          <h2 className="mb-5 text-3xl font-extrabold text-[#1a1f2e]">{spec.sections[0]?.heading ?? "What this covers"}</h2>
          {spec.intro.map((p) => (
            <p key={p.slice(0, 20)} className="mb-4 leading-relaxed text-[#5a6478]">
              {p}
            </p>
          ))}
          {spec.sections[0]?.points && <Points items={spec.sections[0].points} />}
        </Split>
      )}

      {spec.layout === "faq" && spec.faqs && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[800px] px-5 sm:px-6">
            {spec.intro.map((p, i) => (
              <p key={i} className="mb-8 leading-relaxed text-[#5a6478]">
                {p}
              </p>
            ))}
            <Accordion items={spec.faqs} />
          </div>
        </section>
      )}

      {spec.layout === "form" && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-6 lg:grid-cols-2">
            <div>
              {spec.intro.map((p, i) => (
                <p key={i} className={`mb-4 leading-relaxed ${i === 0 ? "text-lg text-[#1a1f2e]" : "text-[#5a6478]"}`}>
                  {p}
                </p>
              ))}
              <div className="mt-8 space-y-4">
                <p>
                  <a href={company.phoneHref} className="font-semibold text-[#1a1f2e] hover:text-[#e8a317]">
                    {company.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${company.email}`} className="font-semibold text-[#1a1f2e] hover:text-[#e8a317]">
                    {company.email}
                  </a>
                </p>
                <p className="text-[#5a6478]">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.city}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      )}

      {spec.cta && <DarkBand title={spec.cta.title} body={spec.cta.body} href={spec.cta.href} label={spec.cta.label} />}
      {spec.related && <Related links={spec.related} />}
    </PageTransition>
  );
}
