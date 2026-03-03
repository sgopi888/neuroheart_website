"use client";

import CountUp from "@/components/animations/CountUp";

const stats = [
  { end: 3, decimals: 0, suffix: "+", label: "AI Models Supported" },
  { end: 4, decimals: 0, suffix: "+", label: "Wearable Integrations" },
  { end: 30, decimals: 0, suffix: "+", label: "Connected Tools" },
  { end: 100, decimals: 0, suffix: "%", label: "Privacy-First Design" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-border-default px-6 py-10">
      <div className="mx-auto flex max-w-[var(--max-width)] flex-wrap items-center justify-center gap-[60px]">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <CountUp
              end={stat.end}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="gradient-text text-4xl font-extrabold"
            />
            <div className="mt-1 text-[13px] font-medium text-text-secondary">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
