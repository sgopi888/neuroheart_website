"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-24 text-center md:pt-44">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-[200px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(236,72,153,0.06)_40%,transparent_70%)]" />

      <div className="mx-auto max-w-[var(--max-width)]">
        {/* Badge */}
        <div className="relative mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-[18px] py-2 text-[13px] font-semibold text-accent-light">
          <span className="h-[7px] w-[7px] rounded-full bg-success shadow-[0_0_6px_var(--success)] animate-pulse-glow" />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className="relative text-[clamp(42px,6vw,76px)] font-extrabold leading-[1.05] tracking-[-2px]">
          Stress Is the Only Vital Sign
          <br />
          We Rarely Measure —{" "}
          <span className="gradient-text">Until Now</span>
        </h1>

        {/* Subtitle */}
        <p id="hero-description" className="relative mx-auto mt-5 max-w-[600px] text-lg text-text-secondary">
          NeuroHeart.AI combines real-time HRV biofeedback from your Apple Watch
          with AI-guided meditation and live music generation to measure,
          understand, and resolve stress in the moment.
        </p>

        {/* Research credibility badges */}
        <div className="relative mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-4 py-1.5 text-xs font-semibold text-accent-light">
            🔬 IEEE &amp; ASEE Published Research
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-success/15 bg-success/[0.08] px-4 py-1.5 text-xs font-semibold text-success">
            💓 Biofeedback-Powered AI
          </span>
        </div>

        {/* Buttons */}
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://apps.apple.com/in/app/neuroheart-sync/id6773976632"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[13px] rounded-[13px] border border-[#1d4f4a] bg-[radial-gradient(120%_140%_at_30%_0%,#0c2b2a_0%,#08191b_70%)] px-[18px] py-[11px] no-underline shadow-[0_0_22px_rgba(45,212,191,0.18),inset_0_1px_0_rgba(94,234,212,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,212,191,0.4),inset_0_1px_0_rgba(94,234,212,0.2)]"
          >
            <svg width="26" height="32" viewBox="0 0 24 28" fill="#2dd4bf" aria-hidden="true">
              <path d="M17.05 14.86c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.4-1.08-3.95-1.05-2.03.03-3.9 1.18-4.94 3-2.11 3.66-.54 9.07 1.5 12.04 1 1.45 2.19 3.08 3.74 3.02 1.51-.06 2.08-.97 3.9-.97 1.82 0 2.33.97 3.92.94 1.62-.03 2.65-1.48 3.64-2.94 1.15-1.68 1.62-3.31 1.65-3.4-.04-.01-3.15-1.2-3.18-4.78zM14.07 5.98c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.62.79-3.47 1.78-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.67-.67 3.5-1.64z" />
            </svg>
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

        {/* App Preview */}
        <div className="relative mx-auto mt-16 flex max-w-[900px] items-center justify-center gap-6 sm:gap-10">
          {/* iPhone mockup — hero visual */}
          <div className="relative z-10 w-[260px] flex-shrink-0 sm:w-[300px]">
            <Image
              src="/images/app-preview-iphone.png"
              alt="NeuroHeart AI — HRV Session on iPhone"
              width={600}
              height={1300}
              className="drop-shadow-[0_20px_60px_rgba(139,92,246,0.25)]"
              priority
            />
          </div>

          {/* In-app screenshot */}
          <div className="hidden w-[240px] flex-shrink-0 overflow-hidden rounded-[28px] border border-border-default shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:block sm:w-[270px]">
            <Image
              src="/images/app-preview.png"
              alt="NeuroHeart AI — HRV Analysis Dashboard"
              width={750}
              height={1624}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
