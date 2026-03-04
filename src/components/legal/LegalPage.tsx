import Link from "next/link";
import Footer from "@/components/layout/Footer";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  contact?: string;
};

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  effectiveDate,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
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
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[1.5px] text-accent-light">
              {effectiveDate}
            </p>
            <h1 className="mt-4 text-[clamp(34px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-1px]">
              {title}
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-text-secondary">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-text-primary">
                    {section.title}
                  </h2>
                  {section.paragraphs ? (
                    <div className="mt-3 space-y-3 text-[15px] leading-7 text-text-secondary">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets ? (
                    <ul className="mt-3 space-y-2 text-[15px] leading-7 text-text-secondary">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="text-accent-light">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.contact ? (
                    <p className="mt-3 text-[15px] leading-7 text-text-secondary">
                      <a
                        href={`mailto:${section.contact}`}
                        className="text-text-primary underline decoration-border-glow underline-offset-4"
                      >
                        {section.contact}
                      </a>
                    </p>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
