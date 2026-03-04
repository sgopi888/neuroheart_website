"use client";

import { useState, useEffect } from "react";

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaSignupModal({ isOpen, onClose }: BetaSignupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in!");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  const handleClose = () => {
    if (status !== "loading") {
      setStatus("idle");
      setMessage("");
      setName("");
      setEmail("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[440px] rounded-2xl border border-border-default bg-bg-primary p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-white/10 hover:text-text-primary"
          aria-label="Close"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
              <svg className="h-8 w-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary">You&apos;re on the list!</h3>
            <p className="mt-2 text-sm text-text-secondary">{message}</p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-light"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
                Early Access
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-text-primary">
                Join the Beta
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Be among the first to experience AI-powered stress management with real-time HRV biofeedback.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-border-default bg-bg-card px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300 focus:border-accent/40 focus:bg-bg-card-hover"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border-default bg-bg-card px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300 focus:border-accent/40 focus:bg-bg-card-hover"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 w-full rounded-full bg-accent py-3.5 text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow)] disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "loading" ? "Signing up..." : "Join the Beta"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-3 text-center text-sm font-medium text-danger">{message}</p>
            )}

            <p className="mt-4 text-center text-xs text-text-muted">
              No spam. We&apos;ll only email you about beta access.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
