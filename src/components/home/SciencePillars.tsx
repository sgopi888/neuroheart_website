"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const pillars = [
  {
    icon: "📊",
    title: "Real-Time Stress Measurement",
    desc: "Your Apple Watch continuously streams HRV data. NeuroHeart converts it into a live stress score — measuring RMSSD, SDNN, and sympathetic/parasympathetic balance in real time.",
  },
  {
    icon: "🤖",
    title: "Generative AI Engine",
    desc: "AI processes your biofeedback data in real time, generating personalized meditation scripts, calming music, and stress interventions unique to your current state.",
  },
  {
    icon: "🧘",
    title: "Personalized Meditation & Live Music",
    desc: "Every meditation is generated live for your exact stress state. AI composes calming soundscapes in real time, adapting tempo and tone to your heart rate variability.",
  },
];

export default function SciencePillars() {
  return (
    <section className="border-y border-border-default bg-bg-secondary px-6 py-[120px]" id="science">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Why NeuroHeart.AI
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Why NeuroHeart.AI
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-relaxed text-text-secondary">
            5 years of research combining HRV biofeedback,
            generative AI, and clinical stress science.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-[22px]">
                  {pillar.icon}
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {pillar.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
