import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal } from "@/components/Motion";
import ContactForm from "@/components/ContactForm";
import { Related, Points } from "@/components/sections";
import { allProducts, productBySlug, productCategories } from "@/lib/products";
import { images } from "@/lib/images";

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
  const img = images[product.image];

  return (
    <PageTransition>
      <PageHero eyebrow={cat.title} title={product.name} subtitle={product.blurb} image={img} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} width={900} height={700} className="h-auto w-full object-cover" />
            </div>
            <p className="mt-6 leading-relaxed text-[#5a6478]">{cat.intro}</p>
            <h2 className="mt-8 mb-3 text-xl font-bold text-[#1a1f2e]">Typical uses</h2>
            <Points items={product.uses} />
            <p className="mt-6 text-sm text-[#5a6478]">
              Helum sizes this product family as part of a designed solution. Enquire and we will
              specify from partner ranges that fit your site.
            </p>
            <Link href={`/products/${cat.slug}`} className="mt-6 inline-flex font-semibold text-[#e8a317]">
              ← All {cat.title.toLowerCase()}
            </Link>
          </Reveal>
          <div className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-[#1a1f2e]">Enquire about {product.name}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Related
        links={productCategories.map((c) => ({ href: `/products/${c.slug}`, label: c.title }))}
      />
    </PageTransition>
  );
}
