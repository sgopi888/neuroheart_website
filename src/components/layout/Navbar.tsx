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
            href="#get-started"
            className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)] md:inline-flex"
          >
            Download for iOS
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
            href="#get-started"
            className="rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)]"
            onClick={() => setMobileOpen(false)}
          >
            Download for iOS
          </a>
        </div>
      )}
    </>
  );
}
