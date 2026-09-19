"use client";

import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";
import { StaggerItem } from "./Motion";

export function ProductCard({
  href,
  name,
  headline,
  blurb,
  specs,
  image,
  cta = "View Details",
}: {
  href: string;
  name: string;
  headline?: string;
  blurb: string;
  specs?: { label: string; value: string }[];
  image: ImageKey;
  cta?: string;
}) {
  const img = images[image];
  return (
    <StaggerItem>
      <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-white/8 bg-[#0d121c] transition-colors hover:border-[var(--color-gold)]/40">
        <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-[#080b12]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,23,0.12)_0%,transparent_65%)]" />
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </Link>

        <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
          {headline && (
            <p className="mb-2 font-display text-[0.72rem] font-bold tracking-[0.14em] text-[var(--color-gold)] uppercase">
              {headline}
            </p>
          )}
          <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-white">
            <Link href={href} className="transition-colors hover:text-[var(--color-gold)]">
              {name}
            </Link>
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-white/55">{blurb}</p>

          {specs && specs.length > 0 && (
            <div className="mb-5 grid grid-cols-3 gap-2 border-t border-white/8 pt-4">
              {specs.map((s) => (
                <div key={s.label}>
                  <p className="text-[0.62rem] tracking-wide text-white/40 uppercase">{s.label}</p>
                  <p className="mt-0.5 text-[0.78rem] font-medium text-white/85">{s.value}</p>
                </div>
              ))}
            </div>
          )}

          <Link
            href={href}
            className="inline-flex h-11 items-center justify-center border border-white/20 bg-transparent font-display text-[0.7rem] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)]"
          >
            {cta}
          </Link>
        </div>
      </article>
    </StaggerItem>
  );
}

export function CategoryTile({
  href,
  title,
  short,
  image,
}: {
  href: string;
  title: string;
  short: string;
  image: ImageKey;
}) {
  const img = images[image];
  return (
    <Link
      href={href}
      className="group relative block min-h-[280px] overflow-hidden border border-white/8 bg-[#0d121c]"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/60">{short}</p>
        <span className="mt-4 inline-flex text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--color-gold)] uppercase">
          View products →
        </span>
      </div>
    </Link>
  );
}
