import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger } from "@/components/Motion";
import { ProductCard } from "@/components/ProductCard";
import { DarkBand, Related } from "@/components/sections";
import { categoryBySlug, productCategories } from "@/lib/products";
import { images } from "@/lib/images";

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
      <PageHero eyebrow="Products" title={cat.title} subtitle={cat.short} image={images[cat.image]} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#5a6478]">{cat.intro}</p>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.products.map((p) => (
              <ProductCard
                key={p.slug}
                href={`/products/${cat.slug}/${p.slug}`}
                name={p.name}
                blurb={p.blurb}
                image={p.image}
              />
            ))}
          </Stagger>
        </div>
      </section>
      <DarkBand
        title={`Enquire about ${cat.title.toLowerCase()}`}
        body="Tell Helum about the site, the load and the outcome you need. We will advise on the right product family."
        href="/contact"
        label="Send enquiry"
      />
      <Related
        links={productCategories
          .filter((c) => c.slug !== cat.slug)
          .slice(0, 3)
          .map((c) => ({ href: `/products/${c.slug}`, label: c.title }))}
      />
    </PageTransition>
  );
}
