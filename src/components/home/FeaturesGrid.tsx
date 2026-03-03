"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const features = [
  {
    icon: "💬",
    title: "Empathetic Conversations",
    desc: "Talk through anything. NeuroHeart listens without judgment and responds with evidence-based emotional support.",
  },
  {
    icon: "📊",
    title: "Mood Tracking & Insights",
    desc: "Log how you feel daily. NeuroHeart spots patterns in your emotions, sleep, and energy to surface actionable insights.",
  },
  {
    icon: "🧘",
    title: "Guided Exercises",
    desc: "Breathing techniques, mindfulness sessions, CBT journaling prompts, and grounding exercises — all personalized to you.",
  },
  {
    icon: "🌙",
    title: "Sleep & Recovery",
    desc: "Wind-down routines, sleep stories, and smart alarms that adapt to your circadian rhythm and stress levels.",
  },
  {
    icon: "🔔",
    title: "Smart Check-ins",
    desc: "NeuroHeart reaches out at the right moments — not randomly. Gentle nudges based on your patterns and preferences.",
  },
  {
    icon: "📋",
    title: "Therapist Reports",
    desc: "Generate shareable wellness summaries for your therapist or doctor. Bridge the gap between sessions effortlessly.",
  },
  {
    icon: "🧬",
    title: "Adaptive AI Models",
    desc: "Choose from GPT, Claude, Gemini, and specialized wellness models. Switch freely based on what feels right.",
  },
  {
    icon: "🤝",
    title: "Crisis Support Routing",
    desc: "When things get heavy, NeuroHeart connects you to real human help — crisis lines, local therapists, and emergency contacts.",
  },
  {
    icon: "📱",
    title: "Cross-Platform Sync",
    desc: "Start on your phone, continue on desktop. Your journal, mood history, and progress are always in sync.",
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
            A complete mental wellness toolkit powered by empathetic AI that
            actually understands you.
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
