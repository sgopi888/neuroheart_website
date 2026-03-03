"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is NeuroHeart.AI?",
    a: "A stress intelligence app for iPhone and Apple Watch. It measures your stress through real-time HRV biofeedback and resolves it with AI-generated meditation and live music — all personalized to your physiology.",
  },
  {
    q: "How does it measure stress?",
    a: "Your Apple Watch continuously monitors heart rate variability (HRV). NeuroHeart analyzes metrics like RMSSD, SDNN, and LF/HF ratio to quantify your stress level in real time — turning raw biometric data into actionable stress scores.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "Yes, for the full experience. The Apple Watch provides the HRV biofeedback that powers personalized stress measurement and real-time interventions. iPhone is required to run the app.",
  },
  {
    q: "Is this backed by real research?",
    a: "Yes. NeuroHeart is built on 5 years of peer-reviewed research published at IEEE, FIE, and ASEE conferences, demonstrating 30–40% reduction in perceived stress through our biofeedback-guided approach.",
  },
  {
    q: "How much does it cost?",
    a: "NeuroHeart is $10/month. Compare that to Calm ($15), Headspace ($13), Whoop ($30), or Apollo Neuro ($40) — and none of them combine HRV biofeedback with AI-generated meditation and live music.",
  },
  {
    q: "Is my health data safe?",
    a: "Absolutely. Health data syncs via encrypted HTTPS to our secure servers. We never sell your data, never share it with third parties, and never use it to train AI models. Sign in with Apple for maximum privacy.",
  },
  {
    q: "What makes this different from Calm or Headspace?",
    a: "Calm and Headspace are static content libraries — the same meditations for everyone. NeuroHeart generates everything live — meditation scripts, narration, and music — personalized to your current HRV and stress state in real time.",
  },
  {
    q: "Is Android supported?",
    a: "Not yet. NeuroHeart currently requires iPhone + Apple Watch. Android and other wearable support are on our roadmap — join the beta to stay updated.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="border-t border-border-default bg-bg-secondary px-6 py-[120px]"
      id="faq"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ FAQ
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Everything you need to know about NeuroHeart AI.
          </p>
        </div>

        <div className="mx-auto flex max-w-[720px] flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-[var(--radius-md)] border border-border-default bg-bg-card transition-colors duration-300 hover:border-border-glow"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-body text-[15px] font-semibold text-text-primary"
              >
                {faq.q}
                <span
                  className={`ml-4 flex-shrink-0 text-lg text-text-muted transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-accent" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <div
                className="transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: openIndex === i ? "300px" : "0px",
                  overflow: "hidden",
                }}
              >
                <div className="px-6 pb-5 text-sm leading-[1.7] text-text-secondary">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
