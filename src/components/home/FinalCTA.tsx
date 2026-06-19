"use client";

import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-[120px] text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,rgba(236,72,153,0.05)_50%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[var(--max-width)]">
        <div className="mb-6 inline-block animate-heartbeat">
          <Image src="/neuroheart-logo.png" alt="NeuroHeart AI" width={80} height={80} />
        </div>
        <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
          Take Control of Your Stress
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-[480px] text-[17px] leading-relaxed text-text-secondary">
          5 years of research. Real-time HRV. AI that adapts to you. $10/month.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://apps.apple.com/in/app/neuroheart-sync/id6773976632"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[13px] rounded-[13px] border border-[#1d4f4a] bg-[radial-gradient(120%_140%_at_30%_0%,#0c2b2a_0%,#08191b_70%)] px-[18px] py-[11px] no-underline shadow-[0_0_22px_rgba(45,212,191,0.18),inset_0_1px_0_rgba(94,234,212,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,212,191,0.4),inset_0_1px_0_rgba(94,234,212,0.2)]"
          >
            <svg width="26" height="32" viewBox="0 0 24 28" fill="#2dd4bf" aria-hidden="true"><path d="M17.05 14.86c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.4-1.08-3.95-1.05-2.03.03-3.9 1.18-4.94 3-2.11 3.66-.54 9.07 1.5 12.04 1 1.45 2.19 3.08 3.74 3.02 1.51-.06 2.08-.97 3.9-.97 1.82 0 2.33.97 3.92.94 1.62-.03 2.65-1.48 3.64-2.94 1.15-1.68 1.62-3.31 1.65-3.4-.04-.01-3.15-1.2-3.18-4.78zM14.07 5.98c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.62.79-3.47 1.78-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.67-.67 3.5-1.64z"/></svg>
            <span className="text-left leading-[1.1]">
              <span className="block text-[11px] font-medium tracking-[0.02em] text-[#5b8480]">Download on the</span>
              <span className="mt-px block text-[20px] font-semibold text-[#d6fbf5]">App Store</span>
            </span>
          </a>
          <a
            href="https://calendar.app.google/Z75xYf1VZSD4cGQ28"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.06] px-7 py-[13px] text-[15px] font-semibold text-text-primary no-underline backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
          >
            Join the Beta
          </a>
        </div>
      </div>
    </section>
  );
}
