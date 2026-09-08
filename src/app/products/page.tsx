import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { PageTransition, Reveal, Stagger } from "@/components/Motion";
import { CategoryTile, ProductCard } from "@/components/ProductCard";
import { DarkBand, Related } from "@/components/sections";
import { productCategories, allProducts } from "@/lib/products";
import { images } from "@/lib/images";
import { partners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Helum supplies inverters, lithium batteries, power stations, solar panels and solar water pumps as part of designed energy solutions.",
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Products"
        title="Inverters. Batteries. Power stations. Panels. Pumps."
        subtitle="Product categories Helum sources and supplies as part of practical energy systems — not a detached catalogue."
        image={images.solarPv}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <Reveal>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#5a6478]">
              Browse by category, then enquire. Helum matches the product to the customer problem —
              working with partners including SVC Energy, Deye, Hithium and Meco Energy.
            </p>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <CategoryTile
                key={c.slug}
                href={`/products/${c.slug}`}
                title={c.title}
                short={c.short}
                image={c.image}
              />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <h2 className="mb-3 text-3xl font-extrabold text-[#1a1f2e]">All products</h2>
          <p className="mb-10 max-w-xl text-[#5a6478]">
            Each card opens a product page. Use Enquire to talk to Helum about sizing and supply.
          </p>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((p) => (
              <ProductCard
                key={p.slug}
                href={`/products/${p.category}/${p.slug}`}
                name={p.name}
                blurb={p.blurb}
                image={p.image}
              />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <h2 className="mb-8 text-2xl font-extrabold text-[#1a1f2e]">Technology partners</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((p) => (
              <Link
                key={p.slug}
                href="/partnerships"
                className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] px-4 py-5 text-center transition hover:border-[#e8a317]"
              >
                <span className="block font-bold text-[#1a1f2e]">{p.name}</span>
                <span className="mt-1 block text-xs text-[#5a6478]">{p.role}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkBand
        title="Need a system, not just a product?"
        body="Helum designs around your load, site and operating conditions — then supplies inverters, lithium batteries, power stations, panels or pumps as required."
        href="/contact"
        label="Enquire"
      />
      <Related
        links={[
          { href: "/services", label: "Services" },
          { href: "/partnerships", label: "Partners" },
          { href: "/contact/consultation", label: "Request a consultation" },
        ]}
      />
    </PageTransition>
  );
}
