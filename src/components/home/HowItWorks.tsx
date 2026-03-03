"use client";

import { useState } from "react";

const tabs = [
  { id: "cloud", label: "☁️ In the Cloud" },
  { id: "local", label: "💻 On Your Device" },
];

const steps: Record<string, { icon: string; title: string; desc: string }[]> = {
  cloud: [
    {
      icon: "🔐",
      title: "Sign In with Google",
      desc: "One-click authentication. No forms, no passwords to remember.",
    },
    {
      icon: "🧠",
      title: "Quick Onboarding",
      desc: "Tell NeuroHeart what you're working on — stress, sleep, anxiety, or just self-care. Takes 30 seconds.",
    },
    {
      icon: "💜",
      title: "Meet Your Companion",
      desc: "Start chatting, journaling, or exploring guided sessions. NeuroHeart adapts to you over time.",
    },
  ],
  local: [
    {
      icon: "⬇️",
      title: "Download the App",
      desc: "Grab NeuroHeart for macOS, Windows, iOS, or Android. Standard install — no terminal needed.",
    },
    {
      icon: "⚙️",
      title: "Connect Your AI Key",
      desc: "Paste your API key (OpenAI, Anthropic, etc.) or use our built-in model. Setup wizard walks you through it.",
    },
    {
      icon: "🛡️",
      title: "100% Private, Always On",
      desc: "Your data stays on your device. No cloud sync unless you want it. Full offline support.",
    },
  ],
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("cloud");

  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="how-it-works"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-[50px] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ How It Works
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            From Zero to Zen — Fast
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Get started in under 2 minutes. No complicated setup, no clinical
            jargon.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-6 py-2.5 font-body text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-accent bg-accent text-white shadow-[0_0_20px_var(--accent-glow)]"
                  : "border-border-default bg-transparent text-text-secondary hover:border-border-glow hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps[activeTab].map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-[var(--radius-lg)] border border-border-default bg-bg-card px-7 pt-9 pb-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-glow"
            >
              <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-[0_0_15px_var(--accent-glow)]">
                {i + 1}
              </div>
              <div className="mt-4 mb-5 text-4xl">{step.icon}</div>
              <h3 className="mb-2 text-[17px] font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
