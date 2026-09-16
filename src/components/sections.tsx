"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./Motion";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-2 text-xs tracking-wide text-white/55">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[var(--color-gold)]">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {i === items.length - 1 ? (
              <span className="text-white">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[var(--color-gold)]">
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
    <section className="bg-white py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reverse ? "lg:order-2" : ""}>{children}</Reveal>
        <Reveal delay={0.08} className={reverse ? "lg:order-1" : ""}>
          <div className="img-zoom relative overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={700}
              className="h-[320px] w-full object-cover sm:h-[440px]"
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
      ? "border border-white/10 bg-white/[0.03] p-7"
      : "border border-[var(--color-line)] bg-white p-7 transition-colors hover:border-[var(--color-gold)]";
  const titleC = tone === "dark" ? "text-white" : "text-[var(--color-ink)]";
  const bodyC = tone === "dark" ? "text-white/65" : "text-[var(--color-muted)]";
  return (
    <Stagger className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.title} className="bg-white">
          {item.href ? (
            <Link href={item.href} className={`block h-full ${card}`}>
              <h3 className={`mb-3 font-display text-lg font-semibold ${titleC}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${bodyC}`}>{item.body}</p>
            </Link>
          ) : (
            <article className={`h-full ${card}`}>
              <h3 className={`mb-3 font-display text-lg font-semibold ${titleC}`}>{item.title}</h3>
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
    <Stagger className="grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StaggerItem key={item.num} className="bg-white">
          <article className="h-full bg-[var(--color-paper)] p-7">
            <span className="font-display text-sm font-semibold text-[var(--color-gold)]">
              {item.num}
            </span>
            <h3 className="mt-3 mb-2 font-display text-lg font-semibold text-[var(--color-ink)]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
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
    <section className="bg-[var(--color-ink)] py-24 text-white">
      <div className="wrap max-w-[760px] text-left sm:text-center">
        <Reveal>
          <h2 className="mb-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mb-10 leading-relaxed text-white/65">{body}</p>
          <Link href={href} className="btn btn-gold">
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
    <section className="bg-[var(--color-paper)] py-20">
      <div className="wrap">
        <p className="eyebrow mb-8">Continue</p>
        <div className="grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between bg-white px-6 py-5 font-display text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
            >
              {l.label}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
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
        <li key={item} className="flex gap-3 text-[var(--color-ink)]">
          <span className="mt-2 h-px w-6 shrink-0 bg-[var(--color-gold)]" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-[800px] divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="cursor-pointer list-none font-display text-base font-semibold text-[var(--color-ink)] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              {item.q}
              <span className="text-[var(--color-gold)] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
