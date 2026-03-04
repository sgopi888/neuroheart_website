"use client";

import FadeIn from "@/components/animations/FadeIn";

const steps = [
  {
    step: 1,
    icon: "⌚",
    title: "Apple Watch Data Sync",
    desc: "Your Apple Watch continuously captures heart rate and HRV data via HealthKit, syncing to NeuroHeart in the background with zero manual effort.",
    details: [
      "Real-time HR and HRV from Apple Watch via HealthKit",
      "Background observer queries — no manual sync needed",
      "Incremental fetch with smart cursors — no duplicates",
    ],
  },
  {
    step: 2,
    icon: "🧠",
    title: "HRV Analytics Engine",
    desc: "Raw heart rate data is converted into precise HRV metrics through our analytics pipeline, revealing your autonomic nervous system state in real time.",
    details: [
      "BPM to IBI conversion for precise HRV calculation",
      "Feature extraction: RMSSD, SDNN, LF/HF ratio, SD1/SD2",
      "Time-windowed analysis: hourly, daily, weekly, monthly",
    ],
  },
  {
    step: 3,
    icon: "🎯",
    title: "Personalized AI Response",
    desc: "AI generates meditation sessions, calming music, and stress interventions uniquely calibrated to your current physiological state.",
    details: [
      "Live-generated meditation calibrated to your stress level",
      "AI-composed music adapting to your HRV in real time",
      "Circadian pattern insights: best/worst hours, most stressful days",
    ],
  },
];

export default function BiometricPipeline() {
  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="biofeedback-pipeline"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            🔬 Data Pipeline
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            From Apple Watch to{" "}
            <span className="gradient-text">AI Insight</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Your stress data flows from wrist to wisdom in three seamless
            steps.
          </p>
        </FadeIn>

        {/* Desktop: sticky left + scrolling right */}
        <div className="hidden gap-12 lg:flex">
          {/* Sticky left panel */}
          <div className="w-[340px] flex-shrink-0">
            <div className="sticky top-32">
              <div className="rounded-[var(--radius-lg)] border border-accent/20 bg-bg-card p-8">
                <div className="mb-4 text-5xl">🔬</div>
                <h3 className="text-xl font-extrabold">How Your Data Flows</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  From Apple Watch to AI insight — your HRV data is
                  captured, analyzed, and transformed into personalized
                  stress interventions in real time.
                </p>
                {/* Progress dots */}
                <div className="mt-6 flex items-center gap-2">
                  {steps.map((s) => (
                    <div key={s.step} className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-[0_0_12px_var(--accent-glow)]">
                        {s.step}
                      </div>
                      {s.step < steps.length && (
                        <div className="h-px w-6 bg-accent/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling right cards */}
          <div className="flex-1 space-y-6">
            {steps.map((step) => (
              <FadeIn key={step.step}>
                <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-all duration-300 hover:border-border-glow">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-[0_0_15px_var(--accent-glow)]">
                      {step.step}
                    </div>
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {step.desc}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-xs text-accent">●</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: simple vertical cards */}
        <div className="space-y-6 lg:hidden">
          {steps.map((step) => (
            <FadeIn key={step.step}>
              <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-7 transition-all duration-300 hover:border-border-glow">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-[0_0_15px_var(--accent-glow)]">
                    {step.step}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-xs text-accent">●</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
