"use client";

import Image from "next/image";

export default function Logo({ size = 64 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Helum Limited"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
