"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./Motion";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[#e8a317]">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-white">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#e8a317]">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Split({
  image,
  reverse,
  children,
}: {
  image: { src: string; alt: string };
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? "lg:order-2" : ""}>{children}</Reveal>
        <Reveal delay={0.1} className={reverse ? "lg:order-1" : ""}>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={700}
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Cards({
  items,
  tone = "light",
}: {
  items: { title: string; body: string; href?: string }[];
  tone?: "light" | "dark";
}) {
  const card =
    tone === "dark"
      ? "rounded-2xl border border-white/10 bg-white/5 p-6"
      : "rounded-2xl border border-[#e5e8ef] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md";
  const titleC = tone === "dark" ? "text-white" : "text-[#1a1f2e]";
  const bodyC = tone === "dark" ? "text-white/70" : "text-[#5a6478]";
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.title}>
          {item.href ? (
            <Link href={item.href} className={`block h-full ${card}`}>
              <h3 className={`mb-2 text-lg font-bold ${titleC}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${bodyC}`}>{item.body}</p>
            </Link>
          ) : (
            <article className={`h-full ${card}`}>
              <h3 className={`mb-2 text-lg font-bold ${titleC}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${bodyC}`}>{item.body}</p>
            </article>
          )}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function Numbered({ items }: { items: { num: string; title: string; body: string }[] }) {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.num}>
          <article className="rounded-2xl border border-[#e5e8ef] bg-[#f7f8fa] p-6">
            <span className="text-sm font-bold text-[#e8a317]">{item.num}</span>
            <h3 className="mt-2 mb-2 text-lg font-bold text-[#1a1f2e]">{item.title}</h3>
            <p className="text-sm leading-relaxed text-[#5a6478]">{item.body}</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function DarkBand({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6">
        <Reveal>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
          <p className="mb-8 text-white/75 leading-relaxed">{body}</p>
          <Link
            href={href}
            className="inline-flex rounded-full bg-[#e8a317] px-7 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f]"
          >
            {label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Related({ links }: { links: { href: string; label: string }[] }) {
  if (!links.length) return null;
  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <h2 className="mb-8 text-2xl font-extrabold text-[#1a1f2e]">Related pages</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-2xl border border-[#e5e8ef] bg-white px-5 py-4 font-semibold text-[#1a1f2e] transition hover:border-[#e8a317]"
            >
              {l.label}
              <span className="transition group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[#1a1f2e]">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#e8a317]" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-[800px] space-y-3">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-[#e5e8ef] bg-white px-5 py-4"
        >
          <summary className="cursor-pointer list-none font-semibold text-[#1a1f2e] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-[#e8a317] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-[#5a6478]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
