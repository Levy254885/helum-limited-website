import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition, Reveal, Stagger } from "@/components/Motion";
import { ProductCard } from "@/components/ProductCard";
import { categoryBySlug, productCategories } from "@/lib/products";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categoryBySlug(category);
  if (!cat) return { title: "Products" };
  return { title: cat.title, description: cat.short };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categoryBySlug(category);
  if (!cat) notFound();

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#080b12] text-white">
        <section className="border-b border-white/8 pt-[calc(var(--header-h)+2.5rem)] pb-10">
          <div className="wrap">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--color-gold)] uppercase">
                Products / {cat.title}
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {cat.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {cat.intro}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="wrap">
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p) => (
                <ProductCard
                  key={p.slug}
                  href={`/products/${cat.slug}/${p.slug}`}
                  name={p.name}
                  headline={p.headline}
                  blurb={p.blurb}
                  specs={p.specs}
                  image={p.image}
                />
              ))}
            </Stagger>
          </div>
        </section>

        <section className="border-t border-white/8 bg-[#0d121c] py-16">
          <div className="wrap text-center">
            <h2 className="font-display text-2xl font-semibold">
              Enquire about {cat.title.toLowerCase()}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/55">
              Tell Helum about the site, the load and the outcome you need. We will advise on the
              right product family.
            </p>
            <Link href="/contact" className="btn btn-gold mt-8 inline-flex">
              Send enquiry
            </Link>
          </div>
        </section>

        <section className="border-t border-white/8 py-10">
          <div className="wrap flex flex-wrap justify-center gap-6">
            {productCategories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="text-sm text-white/45 transition-colors hover:text-[var(--color-gold)]"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
