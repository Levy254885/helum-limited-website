"use client";

import Link from "next/link";
import { company } from "@/lib/content";
import { navGroups } from "@/lib/nav";
import { Reveal } from "./Motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] pt-16 text-white/80" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="text-white">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden>
                  <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="18" r="6" fill="currentColor" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-wide text-white">HELUM</span>
                <span className="text-[0.6rem] font-medium tracking-[0.12em] text-white/55">
                  LIMITED
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm font-medium text-[#e8a317]">{company.tagline}</p>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/60">
              Connecting innovative technology, reliable energy and productive opportunity to create
              practical solutions for Africa.
            </p>
          </Reveal>

          {navGroups.slice(0, 3).map((g) => (
            <Reveal key={g.label}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">{g.label}</h4>
              <ul className="flex flex-col gap-2.5">
                {g.children.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition hover:text-[#e8a317]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-3">
          {navGroups.slice(3).map((g) => (
            <div key={g.label}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">{g.label}</h4>
              <ul className="flex flex-col gap-2.5">
                {g.children.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition hover:text-[#e8a317]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/45">© 2026 HELUM LIMITED. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-white/45">
            <a href={company.phoneHref} className="hover:text-white/70">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:text-white/70">
              {company.email}
            </a>
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
