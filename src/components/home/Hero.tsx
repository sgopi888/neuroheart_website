"use client";

import { useState } from "react";
import Image from "next/image";
import BetaSignupModal from "@/components/home/BetaSignupModal";

export default function Hero() {
  const [showBetaModal, setShowBetaModal] = useState(false);

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
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow),0_4px_20px_rgba(139,92,246,0.3)]"
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
          <button
            onClick={() => setShowBetaModal(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.06] px-7 py-[13px] text-[15px] font-semibold text-text-primary backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
          >
            Join the Beta
          </button>
        </div>

        <BetaSignupModal isOpen={showBetaModal} onClose={() => setShowBetaModal(false)} />

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
