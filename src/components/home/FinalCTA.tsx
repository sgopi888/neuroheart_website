"use client";

import { useState } from "react";
import Image from "next/image";
import BetaSignupModal from "@/components/home/BetaSignupModal";

export default function FinalCTA() {
  const [showBetaModal, setShowBetaModal] = useState(false);

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
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow),0_4px_20px_rgba(139,92,246,0.3)]"
          >
            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
      </div>
    </section>
  );
}
