import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sources & Methodology",
  description:
    "Data sources, HRV methodology, published research references, and health disclaimer for NeuroHeart AI.",
  alternates: {
    canonical: "/references",
  },
};

const dataSections = [
  {
    title: "Data Sources",
    items: [
      "Heart rate and HRV measurements are obtained from Apple Watch and Apple Health through HealthKit.",
      "Meditation session measurements are collected during Apple Watch wellness sessions.",
    ],
  },
  {
    title: "How NeuroHeart Uses This Data",
    items: [
      "NeuroHeart analyzes HRV and heart rate measurements to generate wellness insights, mindfulness recommendations, meditation guidance, recovery indicators, and stress-related wellness scores.",
      "These insights are intended for wellness and self-reflection purposes only.",
    ],
  },
  {
    title: "Wellness Scope",
    items: [
      "NeuroHeart is designed for wellness, mindfulness, and self-reflection support.",
      "It does not provide medical advice, diagnosis, treatment, or medical monitoring.",
    ],
  },
];

const referenceSections = [
  {
    title: "HRV References",
    links: [
      {
        title:
          "Exploring the Impact of CM-II Meditation on Stress Levels in College Students through HRV Analysis",
        url: "https://peer.asee.org/exploring-the-impact-of-cm-ii-meditation-on-stress-levels-in-college-students-through-hrv-analysis",
        subtitle: "ASEE conference paper",
      },
      {
        title: "IEEE Xplore research reference 10343261",
        url: "https://ieeexplore.ieee.org/abstract/document/10343261",
        subtitle: "External citation",
      },
    ],
  },
  {
    title: "NeuroHeart Published Research References",
    links: [
      {
        title:
          "CM-II meditation as an intervention to reduce stress and improve attention: A study of ML detection, spectral analysis, and HRV metrics",
        url: "https://digitalcommons.kennesaw.edu/cs_etd/62/",
        subtitle: "Kennesaw State University thesis",
      },
      {
        title: "IEEE Xplore research reference 10893358",
        url: "https://ieeexplore.ieee.org/abstract/document/10893358",
        subtitle: "External citation",
      },
    ],
  },
];

const healthDisclaimerItems = [
  "HRV insights and recommendations are informational only.",
  "Do not use NeuroHeart as a substitute for professional medical care.",
  "Seek a qualified clinician for diagnosis, treatment, monitoring, or urgent medical concerns.",
];

export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Header */}
      <header className="border-b border-border-default bg-[rgba(5,5,8,0.85)] backdrop-blur-[20px]">
        <div className="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-extrabold tracking-[-0.5px]">
            Neuro<span className="gradient-text">Heart</span> AI
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8">

          {/* Sources & Methodology */}
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[1.5px] text-accent-light">
              Transparency
            </p>
            <h1 className="mt-4 text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.05] tracking-[-1px]">
              Sources &amp; Methodology
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-text-secondary">
              NeuroHeart AI is a wellness platform built on published HRV research and mindfulness literature. This page describes where data comes from, how it is used, and links to the research that informs our methodology.
            </p>

            <div className="mt-10 space-y-10">
              {/* Detail sections */}
              {dataSections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-light/60">
                    {section.title}
                  </h2>
                  <ul className="mt-3 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-7 text-text-secondary">
                        <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent-light" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {/* Reference sections */}
              {referenceSections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-light/60">
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.links.map((ref) => (
                      <a
                        key={ref.url}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-1 rounded-[14px] border border-accent-light/[0.11] bg-accent-light/[0.05] px-4 py-3 transition-colors duration-200 hover:border-accent-light/25 hover:bg-accent-light/[0.08]"
                      >
                        <div className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.8}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span className="flex-1 text-[15px] leading-6 text-text-primary">
                            {ref.title}
                          </span>
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                        <p className="ml-7 text-[12px] text-text-secondary/58 leading-5">
                          {ref.subtitle}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              ))}

              {/* More References hub */}
              <section>
                <h2 className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-light/60">
                  More References
                </h2>
                <div className="mt-3">
                  <a
                    href="https://neuroheart.ai/references"
                    className="group flex flex-col gap-1 rounded-[14px] border border-accent-light/[0.11] bg-accent-light/[0.05] px-4 py-3 transition-colors duration-200 hover:border-accent-light/25 hover:bg-accent-light/[0.08]"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="flex-1 text-[15px] leading-6 text-text-primary">
                        NeuroHeart references library
                      </span>
                      <svg
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-secondary/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                    <p className="ml-7 text-[12px] text-text-secondary/58 leading-5">
                      neuroheart.ai/references
                    </p>
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Important Health Disclaimer */}
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[1.5px] text-accent-light">
              Health Disclaimer
            </p>
            <h2 className="mt-4 text-[clamp(24px,4vw,36px)] font-extrabold leading-[1.1] tracking-[-0.5px]">
              Important Health Disclaimer
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-text-secondary">
              For wellness purposes only. Not medical advice. HRV and heart rate data come from Apple Watch and Apple Health. NeuroHeart generates wellness insights from HRV research and mindfulness literature. Readings may be inaccurate due to data or calculation limitations and should not be used for medical decisions.
            </p>

            <section className="mt-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-light/60">
                Important
              </h3>
              <ul className="mt-3 space-y-3">
                {healthDisclaimerItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-text-secondary">
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-8 text-[11px] leading-5 text-text-secondary/60">
              For wellness purposes only. Not medical advice. HRV and heart rate data come from Apple Watch and Apple Health. NeuroHeart generates wellness insights from HRV research and mindfulness literature. Readings may be inaccurate due to data or calculation limitations and should not be used for medical decisions.{" "}
              <a
                href="https://neuroheart.ai/references"
                className="text-accent-light underline underline-offset-2"
              >
                Sources &amp; Methodology →
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
