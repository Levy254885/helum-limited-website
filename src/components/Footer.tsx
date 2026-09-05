"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company, nav, services } from "@/lib/content";
import { Reveal } from "./Motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] pt-16 text-white/80" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="text-white">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden>
                  <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="18" r="6" fill="currentColor" />
                  <path
                    d="M18 4v4M18 28v4M4 18h4M28 18h4M8.5 8.5l2.8 2.8M24.7 24.7l2.8 2.8M8.5 27.5l2.8-2.8M24.7 11.3l2.8-2.8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
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

          <Reveal delay={0.05}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition hover:text-[#e8a317]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/65 transition hover:text-[#e8a317]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={company.phoneHref} className="text-white/65 transition hover:text-[#e8a317]">
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-white/65 transition hover:text-[#e8a317]"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed text-white/55">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.city}
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/45">© 2026 HELUM LIMITED. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-white/45">
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
