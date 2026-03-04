"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="border-t border-border-default bg-bg-secondary px-6 py-[100px]" id="updates">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mx-auto max-w-[560px] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            📬 Stay Updated
          </span>
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Get Early Access &amp; Updates
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            Be the first to know when we launch new features, research insights, and app updates.
            No spam — just the good stuff.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-border-default bg-bg-card px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300 focus:border-accent/40 focus:bg-bg-card-hover"
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-border-default bg-bg-card px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300 focus:border-accent/40 focus:bg-bg-card-hover"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-accent py-3.5 text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)] disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "loading" ? "Subscribing..." : "Get Updates"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-success">{message}</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-danger">{message}</p>
          )}

          <p className="mt-4 text-xs text-text-muted">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
