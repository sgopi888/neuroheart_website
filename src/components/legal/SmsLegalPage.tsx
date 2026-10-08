import Link from "next/link";

type SmsLegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  afterBulletsParagraphs?: readonly string[];
  contact?: string;
};

type SmsLegalPageProps = {
  title: string;
  effectiveDate: string;
  company: string;
  website: string;
  contactEmail: string;
  intro: readonly string[];
  sections: readonly SmsLegalSection[];
};

export default function SmsLegalPage({
  title,
  effectiveDate,
  company,
  website,
  contactEmail,
  intro,
  sections,
}: SmsLegalPageProps) {
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

            <div className="mt-6 grid gap-3 rounded-[var(--radius-md)] border border-border-default bg-white/[0.03] p-5 text-sm text-text-secondary sm:grid-cols-3">
              <div>
                <p className="font-semibold text-text-primary">Company</p>
                <p className="mt-1">{company}</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Website</p>
                <a
                  href={website}
                  className="mt-1 inline-block underline decoration-border-glow underline-offset-4"
                >
                  {website}
                </a>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Contact</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 inline-block underline decoration-border-glow underline-offset-4"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

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
                  {section.afterBulletsParagraphs ? (
                    <div className="mt-3 space-y-3 text-[15px] leading-7 text-text-secondary">
                      {section.afterBulletsParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
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
    </div>
  );
}
