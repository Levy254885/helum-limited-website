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
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e8ef] bg-white transition hover:-translate-y-1 hover:shadow-xl">
        <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 text-lg font-bold text-[#1a1f2e]">{name}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-[#5a6478]">{blurb}</p>
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#e8a317] py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f]"
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
    <Link href={href} className="group relative block min-h-[280px] overflow-hidden rounded-2xl">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="mb-2 text-2xl font-extrabold">{title}</h3>
        <p className="text-sm text-white/80">{short}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-[#e8a317]">
          View products →
        </span>
      </div>
    </Link>
  );
}
