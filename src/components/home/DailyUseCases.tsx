"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const useCases = [
  {
    icon: "🌅",
    time: "Morning",
    title: "Cortisol Level Awareness",
    desc: "Start your day with biometric insights. NeuroHeart analyzes your morning HRV and cortisol indicators to guide meditation for balanced energy.",
  },
  {
    icon: "☀️",
    time: "Midday",
    title: "Stress Recovery Routines",
    desc: "Combat midday stress with targeted breathing exercises and micro-meditations calibrated to handle high-pressure tasks effectively.",
  },
  {
    icon: "🌙",
    time: "Evening",
    title: "Biofeedback Reflection",
    desc: "Wind down with reflection through biofeedback analysis, followed by guided meditations designed for restorative sleep.",
  },
  {
    icon: "🏖️",
    time: "Weekend",
    title: "HRV Trend Analysis",
    desc: "Review your weekly HRV trends to plan relaxation or productivity bursts. Use data-driven insights for the week ahead.",
  },
];

export default function DailyUseCases() {
  return (
    <section className="px-6 py-[120px]" id="daily-wellness">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            📅 Daily Wellness
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Your AI Companion Throughout the Day
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            NeuroHeart adapts to your daily rhythm, providing the right support
            at the right time.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <StaggerItem key={uc.time}>
              <div className="group relative overflow-hidden rounded-[var(--radius-md)] border border-border-default bg-bg-card p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-border-glow">
                {/* Time-of-day colored top line */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-accent-pink opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 text-2xl">{uc.icon}</div>
                <div className="mb-2 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                  {uc.time}
                </div>
                <h4 className="mb-1.5 text-sm font-bold">{uc.title}</h4>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {uc.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
