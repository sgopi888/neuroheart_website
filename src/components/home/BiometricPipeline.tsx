"use client";

import FadeIn from "@/components/animations/FadeIn";

const steps = [
  {
    step: 1,
    icon: "📡",
    title: "Biometric Data Collection",
    desc: "Wearable devices and smartphone PPG sensors continuously capture heart rate, HRV, skin temperature, and activity data in real time.",
    details: [
      "Gather real-time data using Apple Watch, Fitbit, Garmin, and Oura Ring",
      "Use PPG via smartphone cameras for pulse measurement",
      "Sync seamlessly across devices with zero manual input",
    ],
  },
  {
    step: 2,
    icon: "🧠",
    title: "LLM Processing",
    desc: "Advanced language models analyze your biometric data alongside mood entries and conversation history to generate personalized mental health insights.",
    details: [
      "Analyze biometric data for personalized insights and actionable guidance",
      "Identify stress patterns, emotional states, and productivity trends",
      "Cross-reference with your journal entries and conversation context",
    ],
  },
  {
    step: 3,
    icon: "🎯",
    title: "Actionable AI Guidance",
    desc: "Receive tailored schedules, guided meditations, breathing exercises, and wellness recommendations uniquely calibrated to your physiological state.",
    details: [
      "Suggest optimal daily schedules to enhance focus and productivity",
      "Produce guided meditations and mindfulness practices based on data trends",
      "Adapt recommendations in real time as your biometrics change",
    ],
  },
];

export default function BiometricPipeline() {
  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="biometric-pipeline"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            🔬 Data Pipeline
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Biometric AI Insights for{" "}
            <span className="gradient-text">Mindful Living</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            From raw biometric signals to personalized wellness guidance in three
            seamless steps.
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
                  NeuroHeart&apos;s three-stage pipeline transforms raw
                  physiological signals into actionable wellness guidance —
                  all in real time.
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
