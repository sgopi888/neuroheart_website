"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is NeuroHeart AI?",
    a: "NeuroHeart AI is an empathetic AI companion designed specifically for mental wellness. It combines conversational AI with mood tracking, guided exercises, and clinical-grade reporting to help you understand and improve your emotional health — available as a web app, desktop app, or mobile app.",
  },
  {
    q: "Is NeuroHeart AI a replacement for therapy?",
    a: "No. NeuroHeart AI is a wellness companion, not a therapist or medical device. It's designed to support your mental health between sessions, help you build healthy habits, and provide tools that complement professional care. We always encourage working with a licensed therapist for clinical needs.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. NeuroHeart is privacy-first by design. In local mode, all data stays on your device — nothing is sent anywhere. In cloud mode, everything is end-to-end encrypted. We never sell your data, never train AI on your conversations, and you can delete everything at any time.",
  },
  {
    q: "What AI models does it use?",
    a: "NeuroHeart supports multiple AI backends including Claude (Anthropic), GPT (OpenAI), Gemini (Google), and our own fine-tuned wellness model. You can switch between them or use our default model which requires no API key setup.",
  },
  {
    q: "Is it free?",
    a: "NeuroHeart has a generous free tier that includes daily conversations, mood tracking, and basic exercises. Premium plans unlock unlimited sessions, advanced analytics, therapist reports, and priority access to new skills. If you bring your own API key, the core features are completely free.",
  },
  {
    q: "What platforms are supported?",
    a: "NeuroHeart is available as a web app (works in any browser), a native macOS app (live now), with Windows, iOS, and Android apps coming soon. Cloud mode works on any device with a browser.",
  },
  {
    q: "Can I share my data with my therapist?",
    a: "Yes! NeuroHeart can generate PDF wellness summaries that include your mood trends, journal highlights, and exercise completion data. You control exactly what's included before sharing. Many therapists find these reports incredibly valuable for session preparation.",
  },
  {
    q: "What happens if I'm in crisis?",
    a: "NeuroHeart has built-in crisis detection. If it senses you may be in distress, it will gently offer to connect you with crisis resources including the 988 Suicide & Crisis Lifeline, Crisis Text Line, and your pre-configured emergency contacts. Your safety always comes first.",
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
