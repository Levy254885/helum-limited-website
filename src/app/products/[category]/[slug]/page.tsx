import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition, Reveal } from "@/components/Motion";
import ContactForm from "@/components/ContactForm";
import ProductGallery from "@/components/ProductGallery";
import { allProducts, productBySlug, productCategories } from "@/lib/products";

export function generateStaticParams() {
  return allProducts.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = productBySlug(slug);
  if (!found) return { title: "Product" };
  return { title: found.product.name, description: found.product.blurb };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const found = productBySlug(slug);
  if (!found || found.category.slug !== category) notFound();
  const { product, category: cat } = found;

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#080b12] text-white">
        <section className="border-b border-white/8 pt-[calc(var(--header-h)+2.5rem)] pb-12">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--color-gold)] uppercase">
                {cat.title}
              </p>
              {product.headline && (
                <p className="mb-3 font-display text-[0.75rem] font-bold tracking-[0.14em] text-[var(--color-gold)] uppercase">
                  {product.headline}
                </p>
              )}
              <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">{product.blurb}</p>

              {product.specs && product.specs.length > 0 && (
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {product.specs.map((s) => (
                    <div key={s.label}>
                      <p className="text-[0.62rem] tracking-wide text-white/40 uppercase">{s.label}</p>
                      <p className="mt-1 text-sm font-medium text-white/90">{s.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-gold">
                  Enquire
                </Link>
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex h-12 items-center border border-white/25 px-5 font-display text-[0.7rem] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-white"
                >
                  All {cat.title}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ProductGallery image={product.image} gallery={product.gallery} />
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="wrap grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="mb-4 font-display text-xl font-semibold">About this product family</h2>
              <p className="leading-relaxed text-white/60">{cat.intro}</p>
              <h3 className="mt-10 mb-4 font-display text-lg font-semibold">Typical uses</h3>
              <ul className="space-y-2">
                {product.uses.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                    {u}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-white/45">
                Helum sizes this product family as part of a designed solution. Enquire and we will
                specify from partner ranges that fit your site.
              </p>
            </Reveal>

            <div className="border border-white/10 bg-[#0d121c] p-6 sm:p-8">
              <h2 className="mb-4 font-display text-xl font-semibold text-white">
                Enquire about {product.name}
              </h2>
              <ContactForm dark />
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-10">
          <div className="wrap flex flex-wrap justify-center gap-6">
            {productCategories.map((c) => (
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
