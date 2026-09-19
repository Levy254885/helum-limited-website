"use client";

import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";
import { StaggerItem } from "./Motion";

export function ProductCard({
  href,
  name,
  blurb,
  image,
  cta = "Enquire",
}: {
  href: string;
  name: string;
  blurb: string;
  image: ImageKey;
  cta?: string;
}) {
  const img = images[image];
  return (
    <StaggerItem>
      <article className="group flex h-full flex-col border border-[var(--color-line)] bg-white">
        <Link href={href} className="img-zoom relative block aspect-[4/3] overflow-hidden bg-[var(--color-paper)]">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-contain p-4"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 font-display text-lg font-semibold text-[var(--color-ink)]">{name}</h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{blurb}</p>
          <Link href={href} className="btn btn-gold w-full">
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
    <Link href={href} className="img-zoom group relative block min-h-[300px] overflow-hidden">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{short}</p>
        <span className="mt-4 inline-flex text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[var(--color-gold)]">
          View products →
        </span>
      </div>
    </Link>
  );
}
