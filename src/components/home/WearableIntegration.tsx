"use client";

import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const dataTypes = [
  {
    icon: "⌚",
    name: "Heart Rate",
    desc: "Continuous BPM monitoring converted to inter-beat intervals for precise HRV calculation.",
  },
  {
    icon: "💓",
    name: "HRV (SDNN)",
    desc: "Heart rate variability as the gold standard indicator of autonomic nervous system balance.",
  },
  {
    icon: "😴",
    name: "Sleep & Recovery",
    desc: "Sleep stages and recovery scores that inform your morning readiness and stress baseline.",
  },
];

const pipeline = [
  {
    icon: "📡",
    title: "Collect",
    desc: "Real-time biofeedback data from Apple Watch via HealthKit",
  },
  {
    icon: "🧠",
    title: "Analyze",
    desc: "HRV analytics engine with RMSSD, SDNN, and LF/HF extraction",
  },
  {
    icon: "🎯",
    title: "Guide",
    desc: "AI-generated meditation and music calibrated to your stress state",
  },
];

export default function WearableIntegration() {
  return (
    <section className="px-6 py-[120px]" id="wearables">
      <div className="mx-auto max-w-[var(--max-width)]">
        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {/* Large hero card — spans all 3 cols */}
          <StaggerItem className="md:col-span-3">
            <div className="rounded-[var(--radius-lg)] border border-accent/20 bg-bg-card p-8 md:p-10">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                ⌚ Apple Watch Integration
              </span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-1px]">
                Built for{" "}
                <span className="gradient-text">Apple Watch</span>
              </h2>
              <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-text-secondary">
                NeuroHeart reads heart rate, HRV, steps, and sleep directly from
                HealthKit. Background sync means your stress data is always up to
                date — no manual input needed.
              </p>

              {/* Mini pipeline */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
                {pipeline.map((step, i) => (
                  <div key={step.title} className="flex items-center gap-2">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-primary">
                        {step.title}
                      </div>
                      <div className="text-[10px] leading-tight text-text-muted">
                        {step.desc}
                      </div>
                    </div>
                    {i < pipeline.length - 1 && (
                      <span className="hidden text-text-muted sm:inline">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* 3 data type cards */}
          {dataTypes.map((dt) => (
            <StaggerItem key={dt.name}>
              <div className="group flex h-full flex-col items-center justify-center rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="mb-3 text-4xl">{dt.icon}</div>
                <h4 className="mb-1 text-sm font-bold">{dt.name}</h4>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {dt.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
