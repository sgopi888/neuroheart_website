import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for NeuroHeart AI.",
};

const intro = [
  "Welcome to NeuroHeart AI (\"NeuroHeart,\" \"we,\" \"our,\" or \"us\").",
  "By accessing or using the NeuroHeart website, applications, or related services (collectively, the \"Services\"), you agree to these Terms of Use.",
];

const sections = [
  {
    title: "1. Use of the Services",
    paragraphs: [
      "You may use NeuroHeart only for lawful purposes.",
      "You agree not to misuse the Services, interfere with security features, or attempt to access systems without authorization.",
    ],
  },
  {
    title: "2. Wellness Disclaimer",
    paragraphs: [
      "NeuroHeart provides AI-generated meditation guidance, HRV insights, and stress-management tools intended for general wellness and educational purposes only.",
      "The Services do not provide medical advice, are not a substitute for professional healthcare, and should not be used to diagnose or treat medical conditions.",
      "Consult a qualified healthcare professional for medical concerns.",
    ],
  },
  {
    title: "3. Accounts",
    paragraphs: [
      "You may create an account using email or supported authentication providers.",
      "You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
    ],
  },
  {
    title: "4. Subscriptions and Pricing",
    paragraphs: [
      "Certain features may require paid subscriptions.",
      "Subscriptions renew automatically unless cancelled prior to the billing period.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "All software, design, content, algorithms, and branding associated with NeuroHeart are the property of NeuroHeart AI or its licensors.",
      "You may not copy, distribute, reverse engineer, or modify the Services without permission.",
    ],
  },
  {
    title: "6. Acceptable Use",
    bullets: [
      "Upload malicious code.",
      "Attempt to disrupt platform operation.",
      "Misuse AI features.",
      "Scrape or harvest data from the platform.",
    ],
    paragraphs: ["You agree not to do any of the following:"],
  },
  {
    title: "7. Third-Party Services",
    paragraphs: [
      "NeuroHeart may integrate with third-party platforms such as wearable devices, APIs, or authentication providers.",
      "Use of those services is subject to their own terms and privacy policies.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, NeuroHeart AI shall not be liable for indirect, incidental, or consequential damages arising from the use of the Services.",
    ],
  },
  {
    title: "9. Dispute Resolution",
    paragraphs: [
      "Any disputes arising from these Terms shall be resolved through binding arbitration in the United States, unless prohibited by law.",
    ],
  },
  {
    title: "10. Changes to Terms",
    paragraphs: [
      "We may update these Terms periodically.",
      "Continued use of the Services after updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: ["For questions regarding these Terms:"],
    contact: "ai@neuroheart.ai",
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      effectiveDate="Effective Date: March 1 2025"
      intro={intro}
      sections={sections}
    />
  );
}
