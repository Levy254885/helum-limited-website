"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`header fixed top-0 left-0 right-0 z-50 h-[72px] ${
          scrolled ? "scrolled" : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-6 px-6">
          <Link href="#home" className="flex shrink-0 items-center gap-3" onClick={closeMenu}>
            <span className={scrolled ? "text-[#1a1f2e]" : "text-white"}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
                <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="6" fill="currentColor" />
                <path d="M18 4v4M18 28v4M4 18h4M28 18h4M8.5 8.5l2.8 2.8M24.7 24.7l2.8 2.8M8.5 27.5l2.8-2.8M24.7 11.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className={`text-lg font-extrabold tracking-wide ${scrolled ? "text-[#1a1f2e]" : "text-white"}`}>HELUM</span>
              <span className={`text-[0.65rem] font-medium tracking-[0.12em] ${scrolled ? "text-[#5a6478]" : "text-white/75"}`}>LIMITED</span>
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`text-[0.9375rem] font-medium transition-colors ${
                    scrolled ? "text-[#1a1f2e] hover:text-[#e8a317]" : "text-white/90 hover:text-[#e8a317]"
                  }`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="hidden shrink-0 rounded-full bg-[#e8a317] px-6 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f] md:inline-flex">
            Contact Us
          </a>

          <button
            type="button"
            className="relative z-[110] flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative h-5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded transition-all ${scrolled || menuOpen ? "bg-[#1a1f2e]" : "bg-white"} ${menuOpen ? "top-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 rounded transition-all ${scrolled || menuOpen ? "bg-[#1a1f2e]" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 rounded transition-all ${scrolled || menuOpen ? "bg-[#1a1f2e]" : "bg-white"} ${menuOpen ? "top-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      <div className={`nav-overlay fixed inset-0 z-[104] bg-[#0b1220]/50 ${menuOpen ? "visible" : ""}`} onClick={closeMenu} aria-hidden />

      <nav className={`nav-mobile fixed right-0 top-0 z-[105] h-dvh w-[min(320px,85vw)] bg-white px-6 pb-6 pt-24 shadow-lg md:hidden ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-3 text-lg font-medium text-[#1a1f2e]" onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
          <li className="pt-4">
            <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full bg-[#e8a317] px-6 py-3 text-sm font-semibold text-[#0b1220]" onClick={closeMenu}>Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
