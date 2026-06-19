"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Comparison", href: "#comparison" },
  { label: "Credits", href: "#credits" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300 ${
          scrolled
            ? "border-b border-border-default bg-[rgba(5,5,8,0.85)] backdrop-blur-[20px]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold tracking-[-0.5px]">
            <Image src="/neuroheart-logo.png" alt="NeuroHeart AI" width={32} height={32} className="animate-heartbeat" />
            <span>
              Neuro<span className="gradient-text">Heart</span> AI
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://apps.apple.com/in/app/neuroheart-sync/id6773976632"
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2.5 rounded-[12px] border border-[#1d4f4a] bg-[radial-gradient(120%_140%_at_30%_0%,#0c2b2a_0%,#08191b_70%)] px-4 py-2 no-underline shadow-[0_0_18px_rgba(45,212,191,0.18),inset_0_1px_0_rgba(94,234,212,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(45,212,191,0.4),inset_0_1px_0_rgba(94,234,212,0.2)] md:inline-flex"
          >
            <svg width="20" height="24" viewBox="0 0 24 28" fill="#2dd4bf" aria-hidden="true"><path d="M17.05 14.86c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.4-1.08-3.95-1.05-2.03.03-3.9 1.18-4.94 3-2.11 3.66-.54 9.07 1.5 12.04 1 1.45 2.19 3.08 3.74 3.02 1.51-.06 2.08-.97 3.9-.97 1.82 0 2.33.97 3.92.94 1.62-.03 2.65-1.48 3.64-2.94 1.15-1.68 1.62-3.31 1.65-3.4-.04-.01-3.15-1.2-3.18-4.78zM14.07 5.98c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.62.79-3.47 1.78-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.67-.67 3.5-1.64z"/></svg>
            <span className="text-left leading-[1.1]">
              <span className="block text-[9px] font-medium tracking-[0.02em] text-[#5b8480]">Download on the</span>
              <span className="block text-[15px] font-semibold text-[#d6fbf5]">App Store</span>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-[5px] p-1 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-[22px] rounded-full bg-text-primary" />
            <span className="block h-0.5 w-[22px] rounded-full bg-text-primary" />
            <span className="block h-0.5 w-[22px] rounded-full bg-text-primary" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7 bg-[rgba(5,5,8,0.97)] backdrop-blur-[20px]">
          <button
            className="absolute right-6 top-5 border-none bg-none text-[28px] text-text-primary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[22px] font-semibold text-text-secondary transition-colors duration-300 hover:text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.apple.com/in/app/neuroheart-sync/id6773976632"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[13px] rounded-[13px] border border-[#1d4f4a] bg-[radial-gradient(120%_140%_at_30%_0%,#0c2b2a_0%,#08191b_70%)] px-[18px] py-[11px] no-underline shadow-[0_0_22px_rgba(45,212,191,0.18),inset_0_1px_0_rgba(94,234,212,0.12)]"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="26" height="32" viewBox="0 0 24 28" fill="#2dd4bf" aria-hidden="true"><path d="M17.05 14.86c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.4-1.08-3.95-1.05-2.03.03-3.9 1.18-4.94 3-2.11 3.66-.54 9.07 1.5 12.04 1 1.45 2.19 3.08 3.74 3.02 1.51-.06 2.08-.97 3.9-.97 1.82 0 2.33.97 3.92.94 1.62-.03 2.65-1.48 3.64-2.94 1.15-1.68 1.62-3.31 1.65-3.4-.04-.01-3.15-1.2-3.18-4.78zM14.07 5.98c.82-1 1.38-2.39 1.22-3.78-1.18.05-2.62.79-3.47 1.78-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.67-.67 3.5-1.64z"/></svg>
            <span className="text-left leading-[1.1]">
              <span className="block text-[11px] font-medium tracking-[0.02em] text-[#5b8480]">Download on the</span>
              <span className="mt-px block text-[20px] font-semibold text-[#d6fbf5]">App Store</span>
            </span>
          </a>
        </div>
      )}
    </>
  );
}
