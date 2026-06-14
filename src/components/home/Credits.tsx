"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import BetaSignupModal from "@/components/home/BetaSignupModal";

const tiers = [
  {
    name: "Tier 1",
    credits: "0–4 Daily Credits",
    description:
      "Everything you need to begin your wellness journey and build a daily mindfulness practice.",
    features: [
      "Up to 10 AI chat interactions per day",
      "Meditation generation with fixed music",
      "Basic wellness insights",
      "HRV viewing and history",
      "Meditation playlist access",
    ],
    cta: "Start Practicing",
    highlighted: false,
  },
  {
    name: "Tier 2",
    credits: "5+ Daily Credits",
    description:
      "Unlocked through daily engagement and consistent practice.",
    features: [
      "Up to 50 AI chat interactions per day",
      "Longer and deeper meditation sessions",
      "Personalized music generation",
      "Calendar integration and wellness planning",
      "Personalized meditation recommendations",
      "Ask NeuroHeart Expert (1 question per day)",
    ],
    cta: "Unlock Through Practice",
    highlighted: true,
  },
];

const creditActivities = [
  {
    activity: "Daily sign-in",
    credits: "+1",
  },
  {
    activity: "Meaningful AI conversation (5+ messages)",
    credits: "+2",
  },
  {
    activity: "Generate and complete a meditation",
    credits: "+3",
  },
  {
    activity:
      "Complete a meditation with Apple Watch HRV measurement and discuss the results",
    credits: "+4",
  },
  {
    activity: "Submit a testimonial",
    credits: "+5",
  },
];

export default function Pricing() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <section id="credits" className="px-6 py-[120px]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            Access Levels
          </span>

          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Unlock More Through Daily Practice
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[17px] leading-relaxed text-text-secondary">
            NeuroHeart is currently available through Early Access and is free
            to use. Daily credits are earned through meaningful participation
            and reset every day.
          </p>
        </FadeIn>

        <StaggerChildren className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "border-accent/40 bg-accent/[0.06] shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                    : "border-border-default bg-bg-card hover:border-border-glow hover:bg-bg-card-hover"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}

                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                    Unlocked via Practice
                  </span>
                )}

                <h3 className="text-xl font-bold text-text-primary">
                  {tier.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[32px] font-extrabold leading-none tracking-[-1px] text-text-primary">
                    {tier.credits}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {tier.description}
                </p>

                <div className="my-6 h-px bg-border-default" />

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className="text-sm text-text-primary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowBetaModal(true)}
                  className={`mt-8 w-full rounded-full py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    tier.highlighted
                      ? "bg-accent text-white shadow-[0_0_20px_var(--accent-glow)] hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)]"
                      : "border border-border-default bg-white/[0.06] text-text-primary hover:border-border-glow hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mx-auto mt-16 max-w-[900px]">
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 transition-colors duration-300 hover:border-border-glow">
            <h3 className="text-xl font-bold text-text-primary">
              Earn Daily Credits
            </h3>

            <div className="mt-6 space-y-4">
              {creditActivities.map((item) => (
                <div
                  key={item.activity}
                  className="flex items-center justify-between border-b border-border-default pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-text-secondary">
                    {item.activity}
                  </span>

                  <span className="font-semibold text-accent-light">
                    {item.credits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-10 text-center">
          <p className="mx-auto max-w-[700px] text-sm leading-relaxed text-text-muted">
            Credits reset daily and do not accumulate over time. NeuroHeart is
            designed around consistent practice, reflection, measurement, and
            growth rather than long-term point collection.
          </p>
        </FadeIn>
      </div>

      <BetaSignupModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </section>
  );
}
