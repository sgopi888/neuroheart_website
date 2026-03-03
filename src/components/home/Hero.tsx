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
          Your AI-Powered
          <br />
          <span className="gradient-text">Mental Wellness</span> Companion
        </h1>

        {/* Subtitle */}
        <p className="relative mx-auto mt-5 max-w-[540px] text-lg text-text-secondary">
          NeuroHeart AI understands your emotions, tracks your mental health
          patterns, and delivers personalized support — 24/7, on any device.
        </p>

        {/* Research credibility badges */}
        <div className="relative mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-4 py-1.5 text-xs font-semibold text-accent-light">
            🔬 IEEE &amp; ASEE Published Research
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-success/15 bg-success/[0.08] px-4 py-1.5 text-xs font-semibold text-success">
            💓 Biometric-Powered AI
          </span>
        </div>

        {/* Buttons */}
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow),0_4px_20px_rgba(139,92,246,0.3)]"
          >
            <Image src="/neuroheart-logo.png" alt="" width={20} height={20} /> Try in Browser
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.06] px-7 py-[13px] text-[15px] font-semibold text-text-primary backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
          >
            ⬇ Download App
          </a>
        </div>

        {/* Chat Mockup */}
        <div className="relative mx-auto mt-15 max-w-[900px]">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card shadow-[0_40px_100px_rgba(139,92,246,0.12),0_0_0_1px_rgba(255,255,255,0.04)]">
            {/* Window bar */}
            <div className="flex items-center gap-[7px] border-b border-border-default bg-white/[0.03] px-[18px] py-3.5">
              <div className="h-[11px] w-[11px] rounded-full bg-danger" />
              <div className="h-[11px] w-[11px] rounded-full bg-[#fbbf24]" />
              <div className="h-[11px] w-[11px] rounded-full bg-success" />
            </div>

            {/* Chat content */}
            <div className="flex flex-col gap-5 p-8">
              {/* User message */}
              <div className="flex gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-pink" />
                <div className="max-w-[480px] rounded-[14px] border border-accent/15 bg-accent/[0.12] px-[18px] py-3.5 text-left text-sm leading-relaxed text-text-primary">
                  I&apos;ve been feeling overwhelmed with work lately and
                  can&apos;t seem to sleep well. Any suggestions?
                </div>
              </div>

              {/* AI message */}
              <div className="flex gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-success to-[#06b6d4]" />
                <div className="max-w-[480px] rounded-[14px] border border-success/[0.12] bg-success/[0.08] px-[18px] py-3.5 text-left text-sm leading-relaxed text-text-primary">
                  I hear you — that sounds really draining. Let&apos;s try a
                  quick 4-7-8 breathing exercise together, and then I&apos;ll
                  help you build a short wind-down routine for tonight. I&apos;ve
                  also noticed your stress scores have been rising this week —
                  would you like to look at the pattern together?
                </div>
              </div>

              {/* User typing */}
              <div className="flex gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-pink" />
                <div className="max-w-[480px] rounded-[14px] border border-accent/15 bg-accent/[0.12] px-[18px] py-3.5 text-left text-sm leading-relaxed text-text-primary">
                  Yes, let&apos;s do that.{" "}
                  <span className="inline-flex gap-1">
                    <span className="inline-block h-1.5 w-1.5 animate-[float_1.2s_ease_infinite] rounded-full bg-text-secondary" />
                    <span className="inline-block h-1.5 w-1.5 animate-[float_1.2s_ease_infinite_0.2s] rounded-full bg-text-secondary" />
                    <span className="inline-block h-1.5 w-1.5 animate-[float_1.2s_ease_infinite_0.4s] rounded-full bg-text-secondary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
