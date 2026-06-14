"use client";

import React, { useState } from "react";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is NeuroHeart AI?",
    a: "NeuroHeart AI is an AI-powered wellness companion that combines personalized conversations, guided meditation, mindfulness practices, and Apple Watch wellness measurements to help you better understand stress, recovery, focus, and emotional well-being.",
  },
  {
    q: "Is NeuroHeart AI free?",
    a: "Yes. NeuroHeart is currently available through Early Access at no cost.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "No. You can use NeuroHeart on your iPhone alone. However, an Apple Watch unlocks the full NeuroHeart experience by allowing meditation-session measurements and deeper personalization.",
  },
  {
    q: "How does NeuroHeart work?",
    a: (
      <>
        NeuroHeart follows a simple cycle:
        <br />
        <br />
        <strong>Chat → Generate Meditation → Practice → Measure → Learn → Improve</strong>
        <br />
        <br />
        The more you use NeuroHeart, the more personalized your wellness experience becomes.
      </>
    ),
  },
  {
    q: "What makes NeuroHeart different?",
    a: "Most meditation apps provide the same content to everyone. NeuroHeart creates personalized meditation experiences and learns from your practice history, wellness trends, and meditation-session results over time.",
  },
  {
    q: "Can NeuroHeart create personalized meditations?",
    a: "Yes. NeuroHeart can generate guided meditation sessions tailored to your mood, goals, recent conversations, and wellness context.",
  },
  {
    q: "What happens during a meditation session?",
    a: "During meditation, NeuroHeart can use Apple Watch measurements to understand how your body responds to practice. These insights help personalize future recommendations and meditation sessions.",
  },
  {
    q: "What is HRV?",
    a: "HRV (Heart Rate Variability) measures natural variations in time between heartbeats and is commonly used as one indicator of stress, recovery, and overall wellness.",
  },
  {
    q: "Why are my HRV numbers different from someone else's?",
    a: "HRV is highly personal and influenced by many factors, including age, sleep, fitness, stress, hydration, and lifestyle. Focus on your own trends rather than comparing numbers with others.",
  },
  {
    q: "Can NeuroHeart diagnose medical conditions?",
    a: "No. NeuroHeart is designed for wellness, mindfulness, and self-reflection. It does not provide medical advice, diagnosis, or treatment.",
  },
  {
    q: "Does NeuroHeart provide therapy?",
    a: "No. NeuroHeart is not a therapist or healthcare provider. It offers wellness-oriented support, mindfulness guidance, and reflective conversations.",
  },
  {
    q: "How is my data used?",
    a: "Your information is used to provide personalized wellness experiences, recommendations, meditation sessions, and insights. You remain in control of your permissions and data sharing choices.",
  },
  {
    q: "Is my raw Apple Watch data sent to AI models?",
    a: "No. NeuroHeart primarily uses wellness metrics, summaries, and insights derived from measurements rather than sharing raw physiological data.",
  },
  {
    q: "How do I get the best experience?",
    a: (
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li>Install the Apple Watch companion app</li>
        <li>Enable Apple Health permissions</li>
        <li>Complete meditation sessions regularly</li>
        <li>Use both Chat and Practice features</li>
        <li>Focus on long-term wellness trends</li>
      </ul>
    ),
  },
  {
    q: "Can I delete my account?",
    a: "Yes. You can permanently delete your account at any time from Settings → Delete Account.",
  },
  {
    q: "Where can I learn more about the science behind NeuroHeart?",
    a: "Visit our References page and Sources & Methodology section to explore the research and wellness principles that inform NeuroHeart's experiences.",
  },
  {
    q: "Is NeuroHeart a medical device?",
    a: "No. NeuroHeart is a wellness application intended to support mindfulness, self-reflection, stress management, and healthy habits. It is not a medical device.",
  },
  {
    q: "What is the best way to get started?",
    a: (
      <>
        <ol className="list-decimal pl-5 space-y-1 mt-2 mb-4">
          <li>Sign in.</li>
          <li>Chat with NeuroHeart about how you're feeling.</li>
          <li>Generate your first meditation.</li>
          <li>Complete the session.</li>
          <li>Ask NeuroHeart about your progress and wellness insights.</li>
        </ol>
        NeuroHeart will guide you from there.
      </>
    ),
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
            Everything you need to know about NeuroHeart AI — from getting started to HRV, privacy, and credits.
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
                  maxHeight: openIndex === i ? "400px" : "0px",
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
