"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const solutions = [
  {
    icon: "🧘",
    title: "Live AI-Generated Meditation",
    desc: "Personalized meditation scripts, narration, and background music — all generated live from your current HRV state. Every session is unique to your stress level.",
  },
  {
    icon: "🔄",
    title: "Autonomic Nervous System Balancing",
    desc: "Intelligently crafted sequences that shift your sympathetic/parasympathetic balance — measured in real time through your Apple Watch HRV data.",
  },
  {
    icon: "🧠",
    title: "Cognitive Behavioral Therapy Modules",
    desc: "AI-guided CBT exercises that adapt to your thought patterns, providing step-by-step processes to challenge and reframe negative cognitions.",
  },
  {
    icon: "🌱",
    title: "Life Stage-Specific Solutions",
    desc: "Tailored wellness programs for navigating relationship transitions, career changes, health challenges, and other major life events.",
  },
];

export default function AISolutions() {
  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="ai-solutions"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            🤖 AI Solutions
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            AI-Powered Mental Wellness Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Cutting-edge generative AI transforms your Apple Watch HRV data
            into personalized therapeutic experiences.
          </p>
        </FadeIn>

        <StaggerChildren className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((sol) => (
            <StaggerItem key={sol.title}>
              <div className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-[22px]">
                  {sol.icon}
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{sol.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {sol.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
