"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { company, nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = isHome && !scrolled;
  const text = light ? "text-white" : "text-[#1a1f2e]";
  const muted = light ? "text-white/70" : "text-[#5a6478]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled || !isHome ? "header-scrolled" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <motion.span
              whileHover={reduce ? undefined : { rotate: 15, scale: 1.05 }}
              className={text}
            >
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden>
                <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="18" r="6" fill="currentColor" />
                <path
                  d="M18 4v4M18 28v4M4 18h4M28 18h4M8.5 8.5l2.8 2.8M24.7 24.7l2.8 2.8M8.5 27.5l2.8-2.8M24.7 11.3l2.8-2.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
            <span className="flex flex-col leading-tight">
              <span className={`text-[1.05rem] font-extrabold tracking-wide ${text}`}>
                HELUM
              </span>
              <span className={`text-[0.6rem] font-medium tracking-[0.14em] ${muted}`}>
                LIMITED
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? light
                        ? "text-[#e8a317]"
                        : "text-[#e8a317]"
                      : light
                        ? "text-white/90 hover:text-[#e8a317]"
                        : "text-[#1a1f2e] hover:text-[#e8a317]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e8a317]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-[#e8a317] px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f] hover:scale-[1.03]"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded transition-all ${
                  open || !light ? "bg-[#1a1f2e]" : "bg-white"
                } ${open ? "top-2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded transition-all ${
                  open || !light ? "bg-[#1a1f2e]" : "bg-white"
                } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded transition-all ${
                  open || !light ? "bg-[#1a1f2e]" : "bg-white"
                } ${open ? "top-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#0b1220]/50 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 z-50 h-dvh w-[min(320px,88vw)] bg-white px-6 pb-8 pt-24 shadow-2xl lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-lg font-medium text-[#1a1f2e]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <li className="pt-5">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-full bg-[#e8a317] py-3.5 text-sm font-semibold text-[#0b1220]"
                    onClick={() => setOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <p className="mt-10 text-xs text-[#8b95a8]">{company.tagline}</p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
