"use client";

import { useState } from "react";

const faqs = [
  // ── Getting started ──────────────────────────────────────────────────────
  {
    q: "What is NeuroHeart AI?",
    a: "NeuroHeart AI is a wellness and mindfulness companion for iPhone and Apple Watch. It uses Heart Rate Variability (HRV) data from Apple Health and Apple Watch to generate personalized AI-guided meditations, provide wellness insights, and support stress awareness, recovery, and self-reflection.",
  },
  {
    q: "How do I get started?",
    a: "Open the app and you'll see six tabs at the bottom: Home · Chat · HRV · Practice · Calendar · Settings. The quickest way to begin is to open the Chat tab, tell NeuroHeart how you're feeling — \"I'm stressed\" or \"I need help focusing\" — then tap Generate Meditation. NeuroHeart creates a personalized session and adds it to your Practice library instantly.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "Apple Watch is recommended for the fullest experience. The Reflect sub-tab in Practice works on iPhone alone — it generates personalized meditation scripts without any wearable. The ReadHRV feature and live biofeedback require the NeuroHeart companion app installed on an Apple Watch worn during your session.",
  },
  // ── Core features ─────────────────────────────────────────────────────────
  {
    q: "What does the Practice tab do?",
    a: "Practice is the heart of NeuroHeart. It has two sub-tabs: Reflect and ReadHRV. Reflect builds a personalized guided meditation — pick your mood (Stressed, Anxious, Sad…), a focus area (Mind, Body, Emotions…), and a duration, then tap Generate. ReadHRV is the only place the app captures live heart-timing data from your Apple Watch, letting NeuroHeart's backend calculate real-time HRV metrics.",
  },
  {
    q: "What can I do in the Chat tab?",
    a: "Chat is your personal wellness companion. Talk about stress, focus, sleep, recovery, emotional wellness, or recent meditation experiences. You can ask questions like \"How did my last meditation go?\", \"What wellness trends do you notice?\", or \"What should I focus on next?\" The AI uses your wellness history, meditation results, Apple Health data, and previous conversations to give personalized guidance. Chat and Practice work together — conversations help create meditations, and meditation results improve future conversations.",
  },
  {
    q: "What does the HRV tab show?",
    a: "The HRV tab surfaces your wellness trends using data from Apple Health and your meditation sessions. You'll see your latest HRV measurements, daily/weekly/monthly trends, wellness indicators, and recent session insights. Focus on trends over time rather than any single reading — small daily fluctuations are completely normal.",
  },
  {
    q: "What is ReadHRV and how is it different from Reflect?",
    a: "ReadHRV (a sub-tab inside Practice) is the only feature that captures live heart-timing data directly from your Apple Watch. Make sure the NeuroHeart watch app is open and your watch is on your wrist, then sit still and breathe naturally for the most accurate reading. Reflect, the other sub-tab, generates a personalized meditation script — it does not capture live watch data and works on iPhone alone.",
  },
  {
    q: "How does NeuroHeart measure HRV?",
    a: "NeuroHeart reads heart-rate and beat-interval data from Apple Watch through HealthKit. During a ReadHRV session, the watch streams live heart-timing measurements to the iPhone, and NeuroHeart's backend calculates metrics such as RMSSD, SDNN, and pNN50. Session results are saved to your history and used to personalize future meditations and wellness insights.",
  },
  // ── Getting the most from it ──────────────────────────────────────────────
  {
    q: "How do I get the best results?",
    a: "1. Install the Apple Watch companion app and allow Apple Health permissions. 2. Complete a few meditation sessions — the more sessions NeuroHeart sees, the more personalized your experience becomes. 3. Use Chat and Practice together: let Chat generate meditations based on how you feel, then review insights in the HRV tab afterwards. 4. Focus on long-term trends rather than individual readings.",
  },
  {
    q: "What happens after I complete a meditation?",
    a: "The session is saved to your Practice history. NeuroHeart generates wellness-oriented insights from the session, updates your HRV trends, and uses the results to personalize future meditations and Chat conversations. Over time your meditation history becomes part of an ongoing wellness picture that helps NeuroHeart adapt to you.",
  },
  {
    q: "What is the Calendar tab for?",
    a: "Connecting your calendar lets the AI be aware of your schedule. Once you enable Calendar Sync (Settings → Permissions → Allow Calendar Sync), the AI can give advice that fits around your meetings, travel, and free time. Nothing is shared outside the app unless you ask the AI a calendar-related question.",
  },
  // ── Privacy & data ────────────────────────────────────────────────────────
  {
    q: "Is my health data safe?",
    a: "Yes. NeuroHeart never sells your health data, never uses it for advertising, and never shares it with data brokers. Apple Health and Apple Watch data is used only to provide the wellness features you request. All data is transmitted over encrypted HTTPS and stored in secured infrastructure. You can delete your account — and all associated data — directly inside the app at any time.",
  },
  {
    q: "Is NeuroHeart a medical device?",
    a: "No. NeuroHeart is a wellness and mindfulness application intended for self-reflection, stress awareness, and general wellbeing. It is not a medical device and does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns. If you are experiencing a medical emergency, call 911 or your local emergency number immediately.",
  },
  // ── Pricing & platform ────────────────────────────────────────────────────
  {
    q: "How much does NeuroHeart cost?",
    a: "NeuroHeart is $10/month — less than Calm ($15), Headspace ($13), Whoop ($30), or Apollo Neuro ($40), while combining live HRV biofeedback, AI-generated meditation scripts, and personalized wellness insights in one app. Subscriptions are managed through the Apple App Store.",
  },
  {
    q: "Is Android supported?",
    a: "Not yet. NeuroHeart currently requires iPhone and Apple Watch. Android and other wearable support are on the roadmap — join the beta to stay updated.",
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
            Everything you need to know about NeuroHeart AI — from getting started to HRV, privacy, and pricing.
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
