"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const features = [
  {
    icon: "📊",
    title: "Real-Time Stress Measurement",
    desc: "Your Apple Watch continuously streams HRV data. NeuroHeart converts it into a live stress score you can actually see and act on.",
  },
  {
    icon: "🧘",
    title: "AI-Generated Meditation",
    desc: "Every meditation is generated live — scripts, narration, and background music composed for your exact stress state. Nothing is pre-recorded.",
  },
  {
    icon: "🎵",
    title: "Live Music Generation",
    desc: "AI composes calming soundscapes in real time, adapting tempo and tone to your heart rate variability for maximum relaxation.",
  },
  {
    icon: "💓",
    title: "HRV Biofeedback",
    desc: "See your RMSSD, SDNN, and LF/HF ratio in real time. Watch your nervous system shift from fight-or-flight to rest-and-digest.",
  },
  {
    icon: "📈",
    title: "Stress Pattern Intelligence",
    desc: "Daily, weekly, and monthly HRV trends reveal your most stressful hours, worst days, and circadian patterns — so you can plan ahead.",
  },
  {
    icon: "🔔",
    title: "Smart Interventions",
    desc: "NeuroHeart detects rising stress from your biofeedback signals and proactively suggests breathing exercises or micro-meditations at the right moment.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="px-6 py-[120px]" id="features">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Features
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            What NeuroHeart AI Can Do
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            The only app that measures stress physiologically, understands it
            emotionally, and resolves it intelligently.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-[22px]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
