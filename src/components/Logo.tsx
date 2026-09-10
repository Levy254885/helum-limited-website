"use client";

import Image from "next/image";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Helum Limited"
      width={size}
      height={size}
      className="rounded-full object-contain"
      priority
    />
  );
}
