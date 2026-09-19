"use client";

import Link from "next/link";
import { company } from "@/lib/content";
import { navGroups } from "@/lib/nav";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/70" role="contentinfo">
      <div className="wrap pt-16 pb-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo size={56} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-sm font-bold tracking-[0.18em] text-white">
                  HELUM
                </span>
                <span className="mt-1 text-[0.58rem] tracking-[0.2em] text-white/50">LIMITED</span>
              </span>
            </Link>
            <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[var(--color-gold)]">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/55">
              Connecting innovative technology, reliable energy and productive opportunity to create
              practical solutions for Africa.
            </p>
          </div>

          {navGroups.slice(0, 4).map((g) => (
            <div key={g.label} className="lg:col-span-2">
              <h4 className="mb-5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-white">
                {g.label}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {g.children.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/55 transition-colors hover:text-[var(--color-gold)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 HELUM LIMITED. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href={company.phoneHref} className="hover:text-white/70">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:text-white/70">
              {company.email}
            </a>
            <span>
              {company.address.line2}, {company.address.city}
            </span>
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
