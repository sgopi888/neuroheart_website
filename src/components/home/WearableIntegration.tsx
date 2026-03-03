"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const devices = [
  {
    icon: "⌚",
    name: "Apple Watch",
    desc: "Heart rate, HRV, activity, and sleep data via Apple Health.",
  },
  {
    icon: "🏃",
    name: "Fitbit",
    desc: "Continuous heart rate monitoring, sleep stages, and stress scores.",
  },
  {
    icon: "🧭",
    name: "Garmin",
    desc: "Advanced HRV, body battery, respiration rate, and pulse ox.",
  },
  {
    icon: "💍",
    name: "Oura Ring",
    desc: "Sleep quality, readiness scores, temperature trends, and HRV.",
  },
];

const pipeline = [
  {
    icon: "📡",
    title: "Collect",
    desc: "Real-time biometric data from wearables & PPG via smartphone cameras",
  },
  {
    icon: "🧠",
    title: "Analyze",
    desc: "LLM processing for personalized insights and pattern recognition",
  },
  {
    icon: "🎯",
    title: "Guide",
    desc: "Actionable wellness recommendations calibrated to your physiology",
  },
];

export default function WearableIntegration() {
  return (
    <section className="px-6 py-[120px]" id="wearables">
      <div className="mx-auto max-w-[var(--max-width)]">
        {/* Bento Grid */}
        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
          {/* Large hero card — spans 2 cols, 2 rows */}
          <StaggerItem className="md:col-span-2 md:row-span-2">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-accent/20 bg-bg-card p-8 md:p-10">
              <div>
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                  ⌚ Wearable Integration
                </span>
                <h2 className="mt-4 text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.1] tracking-[-1px]">
                  Seamless Wearable
                  <br />
                  <span className="gradient-text">Integration</span>
                </h2>
                <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-text-secondary">
                  NeuroHeart.ai utilizes wearable devices, such as smartwatches
                  and rings, to non-invasively measure heart rate and other vital
                  signs for real-time wellness insights.
                </p>
              </div>

              {/* Mini pipeline */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
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

          {/* 4 device cards */}
          {devices.map((device) => (
            <StaggerItem key={device.name}>
              <div className="group flex h-full flex-col items-center justify-center rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="mb-3 text-4xl">{device.icon}</div>
                <h4 className="mb-1 text-sm font-bold">{device.name}</h4>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {device.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
