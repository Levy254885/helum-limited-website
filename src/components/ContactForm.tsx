"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

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

    // Ready for real API: fetch("/api/enquiry", { method: "POST", body: JSON.stringify({...}) })
    await new Promise((r) => setTimeout(r, 600));
    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Full Name *</label>
        <input type="text" id="fullName" name="fullName" required autoComplete="name" placeholder="Your full name"
          className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20" />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Company / Organization</label>
        <input type="text" id="company" name="company" autoComplete="organization" placeholder="Company or organization"
          className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Email *</label>
          <input type="email" id="email" name="email" required autoComplete="email" placeholder="you@example.com"
            className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Phone</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="0712 345 678"
            className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20" />
        </div>
      </div>
      <div>
        <label htmlFor="solution" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Solution Required</label>
        <select id="solution" name="solution" className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20">
          <option value="">Select an option</option>
          <option value="renewable">Renewable Energy Solutions</option>
          <option value="energy-tech">Energy & Power Technology</option>
          <option value="productive">Productive-Use Technology</option>
          <option value="partnership">Strategic Technology Partnership</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1a1f2e]">Message *</label>
        <textarea id="message" name="message" rows={4} required placeholder="Tell us about your energy or technology needs..."
          className="w-full rounded-md border border-[#e5e8ef] bg-white px-4 py-3 transition focus:border-[#e8a317] focus:outline-none focus:ring-2 focus:ring-[#e8a317]/20" />
      </div>
      <button type="submit" disabled={status === "loading"}
        className="w-full rounded-full bg-[#e8a317] px-6 py-3.5 text-base font-semibold text-[#0b1220] transition hover:bg-[#d4920f] disabled:opacity-70">
        {status === "loading" ? "Sending\u2026" : "Send Enquiry"}
      </button>
      {status === "success" && (
        <div className="rounded-md border border-[#1a7f4b] bg-[#1a7f4b]/10 p-4 text-sm text-[#1a7f4b]">
          <strong>Thank you.</strong> Your enquiry has been received. We will respond shortly.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-md border border-[#c53030] bg-[#c53030]/10 p-4 text-sm text-[#c53030]">{errorMsg}</div>
      )}
    </form>
  );
}
