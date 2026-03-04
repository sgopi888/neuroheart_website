"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import BetaSignupModal from "@/components/home/BetaSignupModal";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with real-time stress monitoring and AI insights.",
    features: [
      { text: "Real-Time Stress Measurement", included: true },
      { text: "Generative AI Engine", included: true },
      { text: "HRV Biofeedback Dashboard", included: true },
      { text: "Basic Stress Pattern Intelligence", included: true },
      { text: "Personalized Meditation", included: false },
      { text: "Live Music Generation", included: false },
    ],
    cta: "Join the Beta",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "Unlock the full NeuroHeart experience with AI meditation and live music.",
    features: [
      { text: "Real-Time Stress Measurement", included: true },
      { text: "Generative AI Engine", included: true },
      { text: "HRV Biofeedback Dashboard", included: true },
      { text: "Advanced Stress Pattern Intelligence", included: true },
      { text: "Personalized Meditation", included: true },
      { text: "Live Music Generation", included: true },
    ],
    cta: "Join the Beta",
    highlighted: true,
  },
];

export default function Pricing() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <section className="px-6 py-[120px]" id="pricing">
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Pricing
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Start free with core stress monitoring. Upgrade for AI-powered meditation and live music generation.
          </p>
        </FadeIn>

        <StaggerChildren className="mx-auto grid max-w-[820px] grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-accent/40 bg-accent/[0.06] shadow-[0_0_40px_rgba(139,92,246,0.12)]"
                    : "border-border-default bg-bg-card hover:border-border-glow hover:bg-bg-card-hover"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}

                {plan.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[48px] font-extrabold leading-none tracking-[-2px] text-text-primary">
                    {plan.price}
                  </span>
                  <span className="text-base text-text-secondary">{plan.period}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-border-default" />

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-text-primary" : "text-text-muted"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowBetaModal(true)}
                  className={`mt-8 w-full rounded-full py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "bg-accent text-white shadow-[0_0_20px_var(--accent-glow)] hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)]"
                      : "border border-border-default bg-white/[0.06] text-text-primary hover:border-border-glow hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-8 text-center">
          <p className="text-sm text-text-muted">
            No payment required during beta. Sign up now and lock in early access pricing.
          </p>
        </FadeIn>
      </div>

      <BetaSignupModal isOpen={showBetaModal} onClose={() => setShowBetaModal(false)} />
    </section>
  );
}
