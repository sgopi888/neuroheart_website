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
          You Can&apos;t Measure —{" "}
          <span className="gradient-text">Until Now</span>
        </h1>

        {/* Subtitle */}
        <p className="relative mx-auto mt-5 max-w-[600px] text-lg text-text-secondary">
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
            💓 Biometric-Powered AI
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
            Download on App Store
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.06] px-7 py-[13px] text-[15px] font-semibold text-text-primary backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
          >
            Join the Beta
          </a>
        </div>

        {/* HRV Dashboard Mockup */}
        <div className="relative mx-auto mt-15 max-w-[900px]">
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card shadow-[0_40px_100px_rgba(139,92,246,0.12),0_0_0_1px_rgba(255,255,255,0.04)]">
            {/* Window bar */}
            <div className="flex items-center gap-[7px] border-b border-border-default bg-white/[0.03] px-[18px] py-3.5">
              <div className="h-[11px] w-[11px] rounded-full bg-danger" />
              <div className="h-[11px] w-[11px] rounded-full bg-[#fbbf24]" />
              <div className="h-[11px] w-[11px] rounded-full bg-success" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 sm:p-8">
              {/* Stat cards row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {/* Heart Rate */}
                <div className="rounded-xl border border-[#f87171]/15 bg-[#f87171]/[0.08] px-4 py-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#f87171]">
                    Heart Rate
                  </p>
                  <p className="mt-1.5 text-[32px] font-extrabold leading-none text-text-primary sm:text-[36px]">
                    72
                  </p>
                  <p className="mt-1 text-xs font-medium text-text-secondary">
                    BPM
                  </p>
                </div>

                {/* HRV */}
                <div className="rounded-xl border border-success/15 bg-success/[0.08] px-4 py-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-success">
                    HRV
                  </p>
                  <p className="mt-1.5 text-[32px] font-extrabold leading-none text-text-primary sm:text-[36px]">
                    48
                  </p>
                  <p className="mt-1 text-xs font-medium text-text-secondary">
                    ms RMSSD
                  </p>
                </div>

                {/* Stress Level */}
                <div className="rounded-xl border border-[#fbbf24]/15 bg-[#fbbf24]/[0.08] px-4 py-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#fbbf24]">
                    Stress
                  </p>
                  <p className="mt-1.5 text-[22px] font-extrabold leading-none text-text-primary sm:text-[26px]">
                    Moderate
                  </p>
                  <p className="mt-1 text-xs font-medium text-text-secondary">
                    Level
                  </p>
                </div>
              </div>

              {/* Weekly HRV bar chart */}
              <div className="mt-6 rounded-xl border border-border-default bg-white/[0.03] px-5 py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Weekly HRV Trend
                </p>
                <div className="flex items-end justify-between gap-2 h-[80px]">
                  {[
                    { h: "55%", color: "bg-success" },
                    { h: "70%", color: "bg-success" },
                    { h: "45%", color: "bg-[#fbbf24]" },
                    { h: "80%", color: "bg-success" },
                    { h: "35%", color: "bg-[#f87171]" },
                    { h: "60%", color: "bg-success" },
                    { h: "50%", color: "bg-[#fbbf24]" },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                      <div
                        className={`w-full max-w-[40px] rounded-md ${bar.color} opacity-80`}
                        style={{ height: bar.h }}
                      />
                      <span className="text-[10px] font-medium text-text-secondary">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight */}
              <div className="mt-5 flex gap-3">
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-success to-[#06b6d4]" />
                <div className="flex-1 rounded-[14px] border border-success/[0.12] bg-success/[0.08] px-[18px] py-3.5 text-left text-sm leading-relaxed text-text-primary">
                  Your HRV dropped 15% after lunch. Let&apos;s try a 5-minute
                  breathing session to activate your parasympathetic response.
                </div>
              </div>

              {/* Start Session button */}
              <div className="mt-5 flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_0_16px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_24px_var(--accent-glow)]">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Start Guided Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
