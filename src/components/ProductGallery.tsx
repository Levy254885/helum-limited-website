"use client";

import Image from "next/image";
import { useState } from "react";
import { images, type ImageKey } from "@/lib/images";

export default function ProductGallery({
  image,
  gallery,
}: {
  image: ImageKey;
  gallery?: ImageKey[];
}) {
  const keys = gallery && gallery.length > 0 ? gallery : [image];
  const [active, setActive] = useState(0);
  const current = images[keys[active] ?? image];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden border border-white/8 bg-[#0d121c]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,163,23,0.1)_0%,transparent_65%)]" />
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain p-8 sm:p-10"
          sizes="(max-width:1024px) 100vw, 50vw"
          priority
        />
      </div>
      {keys.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {keys.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View ${images[key].alt}`}
              aria-pressed={i === active}
              className={`relative aspect-square overflow-hidden border bg-[#0d121c] transition ${
                i === active ? "border-[var(--color-gold)]" : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image src={images[key].src} alt="" fill className="object-contain p-1.5" sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
