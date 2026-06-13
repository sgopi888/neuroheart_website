import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HRV Workflow",
  description:
    "How NeuroHeart AI uses Apple Watch HRV — an interactive diagram of the continuous biofeedback loop from meditation start to personalized guidance.",
  alternates: {
    canonical: "/workflow",
  },
};

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col">
      {/* Header */}
      <header className="border-b border-border-default bg-[rgba(5,5,8,0.85)] backdrop-blur-[20px]">
        <div className="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-extrabold tracking-[-0.5px]">
            Neuro<span className="gradient-text">Heart</span> AI
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/references"
              className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              Sources &amp; Methodology
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Intro strip */}
      <div className="border-b border-border-default bg-bg-card/60 px-6 py-5">
        <div className="mx-auto max-w-[var(--max-width)]">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-accent-light/70">
            Technical Overview
          </p>
          <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.5px]">
            How NeuroHeart Uses Apple Watch HRV
          </h1>
          <p className="mt-1 text-[14px] text-text-secondary">
            Click any node in the diagram below to inspect its technical specification.
          </p>
        </div>
      </div>

      {/* Diagram iframe — fills remaining viewport height */}
      <div className="flex-1 w-full" style={{ minHeight: "70vh" }}>
        <iframe
          src="/workflow_diagram.html"
          title="NeuroHeart HRV Workflow Diagram"
          className="w-full h-full border-0"
          style={{ minHeight: "70vh" }}
          loading="eager"
        />
      </div>

      <Footer />
    </div>
  );
}
