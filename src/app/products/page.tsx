"use client";

import Link from "next/link";
import { useState } from "react";
import { PageTransition, Reveal, Stagger } from "@/components/Motion";
import { ProductCard } from "@/components/ProductCard";
import { productCategories, allProducts } from "@/lib/products";

const FILTERS = [
  { id: "all", label: "All Products" },
  ...productCategories.map((c) => ({ id: c.slug, label: c.title })),
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#080b12] text-white">
        <section className="border-b border-white/8 pt-[calc(var(--header-h)+2.5rem)] pb-10">
          <div className="wrap">
            <Reveal>
              <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.22em] text-[var(--color-gold)] uppercase">
                Products
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Our Products
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                Inverters, lithium batteries, power stations, solar panels and solar water pumps —
                specified as part of designed energy systems, not a detached catalogue.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-white/8">
          <div className="wrap">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`shrink-0 px-4 py-2.5 font-display text-[0.72rem] font-semibold tracking-[0.1em] uppercase transition-colors ${
                    filter === f.id
                      ? "bg-[var(--color-gold)] text-[var(--color-ink)]"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="wrap">
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <ProductCard
                  key={p.slug}
                  href={`/products/${p.category}/${p.slug}`}
                  name={p.name}
                  headline={p.headline}
                  blurb={p.blurb}
                  specs={p.specs}
                  image={p.image}
                />
              ))}
            </Stagger>

            {visible.length === 0 && (
              <p className="py-20 text-center text-white/50">No products in this category.</p>
            )}
          </div>
        </section>

        <section className="border-t border-white/8 bg-[#0d121c] py-16 sm:py-20">
          <div className="wrap text-center">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Need a custom solution?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/55">
                Helum designs around your load, site and operating conditions — then supplies
                inverters, lithium batteries, power stations, panels or pumps as required.
              </p>
              <Link href="/contact" className="btn btn-gold mt-8 inline-flex">
                Talk to Helum
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-white/8 py-12">
          <div className="wrap">
            <p className="mb-6 text-center text-[0.68rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Technology partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["SVC Energy", "Deye", "Hithium", "Meco Energy", "Access and Move"].map((name) => (
                <Link
                  key={name}
                  href="/partnerships"
                  className="font-display text-sm font-medium text-white/50 transition-colors hover:text-[var(--color-gold)]"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
