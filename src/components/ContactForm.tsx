"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const fullName = String(fd.get("fullName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!fullName || !email || !message) {
      setStatus("error");
      setErrorMsg("Please complete all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    // Wire to API later: await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(...) })
    await new Promise((r) => setTimeout(r, 700));
    e.currentTarget.reset();
    setStatus("success");
  }

  const input =
    "w-full rounded-lg border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/25";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
          Full Name *
        </label>
        <input id="fullName" name="fullName" required autoComplete="name" placeholder="Your full name" className={input} />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
          Company / Organization
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Company or organization" className={input} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={input} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0712 345 678" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="solution" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
          Solution Required
        </label>
        <select id="solution" name="solution" className={input}>
          <option value="">Select an option</option>
          <option value="renewable">Renewable Energy Solutions</option>
          <option value="energy-tech">Energy & Power Technology</option>
          <option value="productive">Productive-Use Technology</option>
          <option value="partnership">Strategic Technology Partnership</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">
          Message *
        </label>
        <textarea id="message" name="message" rows={4} required placeholder="Tell us about your energy or technology needs..." className={input} />
      </div>
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full bg-[#e8a317] px-6 py-3.5 text-base font-semibold text-[#0b1220] transition hover:bg-[#d4920f] disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Send Enquiry"}
      </motion.button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-[#1a7f4b] bg-[#1a7f4b]/10 p-4 text-sm text-[#1a7f4b]"
          >
            <strong>Thank you.</strong> Your enquiry has been received. We will respond shortly.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-[#c53030] bg-[#c53030]/10 p-4 text-sm text-[#c53030]"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
