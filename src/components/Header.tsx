"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { company } from "@/lib/content";
import { navGroups } from "@/lib/nav";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();

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

  return (
    <>
      <header className="header-solid fixed top-0 left-0 right-0 z-50 h-[84px]">
        <div className="wrap flex h-full items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Logo size={72} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.2rem] font-extrabold tracking-[0.2em] text-white">
                HELUM
              </span>
              <span className="mt-1.5 text-[0.62rem] font-medium tracking-[0.28em] text-white/60">
                LIMITED
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0 lg:flex" aria-label="Main">
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
                    className={`flex items-center gap-1.5 px-3 py-7 text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
                      active ? "text-[var(--color-gold)]" : "text-white/80 hover:text-white"
                    }`}
                    aria-expanded={openGroup === group.label}
                    aria-haspopup="true"
                  >
                    {group.label}
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {openGroup === group.label && (
                      <motion.div
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full z-50 min-w-[260px]"
                      >
                        <div className="border border-white/10 bg-[var(--color-ink)] py-2 shadow-2xl">
                          {group.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-[0.8rem] tracking-wide transition-colors hover:bg-white/5 hover:text-[var(--color-gold)] ${
                                pathname === child.href
                                  ? "text-[var(--color-gold)]"
                                  : "text-white/80"
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

          <Link href="/contact" className="btn btn-gold hidden lg:inline-flex">
            Contact
          </Link>

          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-5 bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--color-ink)] px-6 pb-12 pt-28 lg:hidden"
            aria-label="Mobile"
          >
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left font-display text-sm font-semibold tracking-[0.12em] uppercase text-white"
                  onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                  aria-expanded={mobileGroup === group.label}
                >
                  {group.label}
                  <span className="text-[var(--color-gold)]">
                    {mobileGroup === group.label ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {mobileGroup === group.label && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-3"
                    >
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-white/65"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/contact" className="btn btn-gold mt-8 w-full" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <p className="mt-8 text-xs tracking-[0.16em] uppercase text-white/40">{company.tagline}</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
