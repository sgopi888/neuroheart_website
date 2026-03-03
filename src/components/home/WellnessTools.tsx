"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const tools = [
  {
    icon: "🧘",
    title: "HRV-Guided Stress Reduction",
    desc: "AI generates personalized breathing exercises and meditations calibrated to your real-time HRV — scientifically designed to lower cortisol and activate your parasympathetic nervous system.",
  },
  {
    icon: "🫂",
    title: "Emotional Regulation",
    desc: "Identify, understand, and manage your emotions effectively. Build lasting resilience through AI-guided cognitive and somatic strategies informed by your biometric state.",
  },
  {
    icon: "🎯",
    title: "Biometric Focus Enhancement",
    desc: "HRV-optimized focus sessions that adapt to your nervous system state. Sharpen attention and sustain deep work with biofeedback-informed mindfulness techniques.",
  },
  {
    icon: "⚡",
    title: "Productivity Optimization",
    desc: "Energy-aware scheduling aligned with your HRV circadian rhythms. Know your peak performance windows and plan high-stakes work when your body is ready.",
  },
];

export default function WellnessTools() {
  return (
    <section className="px-6 py-[120px]" id="wellness-tools">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Wellness Tools
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Comprehensive Wellness Toolkit
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Evidence-based tools for stress management, emotional regulation, and
            peak cognitive performance.
          </p>
        </FadeIn>

        <StaggerChildren className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <StaggerItem key={tool.title}>
              <div className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-[22px]">
                  {tool.icon}
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {tool.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
