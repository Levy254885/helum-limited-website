"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { company } from "@/lib/content";
import { navGroups } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
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
    setOpenGroup(null);
    setMobileGroup(null);
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
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3 group">
            <motion.span whileHover={reduce ? undefined : { rotate: 15, scale: 1.05 }} className={text}>
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
              <span className={`text-[1.05rem] font-extrabold tracking-wide ${text}`}>HELUM</span>
              <span className={`text-[0.6rem] font-medium tracking-[0.14em] ${muted}`}>LIMITED</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navGroups.map((group) => {
              const active =
                pathname === group.href ||
                group.children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <Link
                    href={group.href}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium transition ${
                      active
                        ? "text-[#e8a317]"
                        : light
                          ? "text-white/90 hover:text-[#e8a317]"
                          : "text-[#1a1f2e] hover:text-[#e8a317]"
                    }`}
                    aria-expanded={openGroup === group.label}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {openGroup === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 w-[280px] pt-2"
                      >
                        <div className="rounded-2xl border border-[#e5e8ef] bg-white p-2 shadow-xl">
                          {group.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-xl px-3 py-2.5 text-sm transition hover:bg-[#f7f8fa] ${
                                pathname === child.href
                                  ? "font-semibold text-[#e8a317]"
                                  : "text-[#1a1f2e]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-[#e8a317] px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#d4920f] hover:scale-[1.03] xl:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 items-center justify-center xl:hidden"
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
              className="fixed inset-0 z-40 bg-[#0b1220]/50 xl:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 z-50 h-dvh w-[min(380px,92vw)] overflow-y-auto bg-white px-5 pb-10 pt-24 shadow-2xl xl:hidden"
            >
              {navGroups.map((group) => (
                <div key={group.label} className="border-b border-[#e5e8ef]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 text-left text-base font-semibold text-[#1a1f2e]"
                    onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                    aria-expanded={mobileGroup === group.label}
                  >
                    {group.label}
                    <span className="text-[#e8a317]">{mobileGroup === group.label ? "−" : "+"}</span>
                  </button>
                  {mobileGroup === group.label && (
                    <ul className="pb-3 pl-2">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-[#5a6478]"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-[#e8a317] py-3.5 text-sm font-semibold text-[#0b1220]"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
              <p className="mt-8 text-xs text-[#8b95a8]">{company.tagline}</p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
