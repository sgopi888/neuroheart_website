import type { Metadata } from "next";
import Script from "next/script";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const metadata: Metadata = {
  title: "Sreekanth Gopi — Music Composer & AI Researcher",
  description:
    "The music, research, performances, press, and creative journey of Sreekanth Gopi, founder of NeuroHeart.AI.",
  alternates: {
    canonical: "https://neuroheart.ai/founder/music",
  },
  openGraph: {
    title: "Sreekanth Gopi — Music Composer & AI Researcher",
    description:
      "Original compositions, raga-based AI research, performances, press, and the story behind NeuroHeart.AI.",
    url: "https://neuroheart.ai/founder/music",
    type: "profile",
  },
};

type FounderDocument = {
  css: string;
  markup: string;
  scripts: string[];
};

function extractFounderDocument(source: string): FounderDocument {
  const styleMatch = source.match(/<style>([\s\S]*?)<\/style>/i);
  const styleEnd = styleMatch
    ? (styleMatch.index ?? 0) + styleMatch[0].length
    : 0;
  const firstScript = source.indexOf("<script", styleEnd);
  const markupEnd = firstScript === -1 ? source.length : firstScript;
  const scripts = Array.from(
    source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi),
    (match) => match[1],
  );

  return {
    css: styleMatch?.[1] ?? "",
    markup: source.slice(styleEnd, markupEnd).trim(),
    scripts,
  };
}

function getFounderDocument(): FounderDocument {
  const sourcePath = join(
    process.cwd(),
    "src",
    "content",
    "founder-music-v11.html",
  );

  return extractFounderDocument(readFileSync(sourcePath, "utf8"));
}

export default function FounderMusicPage() {
  const document = getFounderDocument();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: document.css }} />
      <main
        id="founder-music-page"
        dangerouslySetInnerHTML={{ __html: document.markup }}
      />
      {document.scripts.map((script, index) => (
        <Script
          id={`founder-music-script-${index + 1}`}
          key={`founder-music-script-${index + 1}`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: script }}
        />
      ))}
    </>
  );
}
