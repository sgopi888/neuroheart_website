import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for NeuroHeart AI — wellness, mindfulness, stress-management, and lifestyle support application.",
  alternates: {
    canonical: "/terms",
  },
};

const intro = [
  "These Terms of Use (\"Terms\") govern your access to and use of the NeuroHeart AI application and related services (\"NeuroHeart AI,\" the \"App,\" \"we,\" \"our,\" or \"us\").",
  "By creating an account or using the App, you agree to these Terms. If you do not agree, do not use the App.",
];

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of the NeuroHeart AI application and related services. By creating an account or using the App, you agree to these Terms.",
    ],
  },
  {
    title: "2. Wellness Purpose Only — Not Medical Advice",
    paragraphs: [
      "NeuroHeart AI is a wellness, mindfulness, stress-management, and lifestyle support application. It is not a medical device and does not provide medical advice, diagnosis, treatment, or healthcare services.",
      "The App, including its AI features, does not:",
    ],
    bullets: [
      "Diagnose, treat, cure, or prevent any disease or health condition.",
      "Interpret symptoms or evaluate medical conditions.",
      "Recommend, prescribe, or dose medications.",
      "Provide treatment plans or emergency medical guidance.",
    ],
    afterBulletsParagraphs: [
      "Content provided through the App is for general wellness, mindfulness, self-reflection, educational, and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.",
      "Always seek the advice of a qualified healthcare professional with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you read or received through the App.",
    ],
  },
  {
    title: "3. Emergencies",
    paragraphs: [
      "NeuroHeart AI is not designed for emergencies and cannot provide emergency assistance.",
      "If you are experiencing a medical or mental-health emergency, or are in crisis, call your local emergency services immediately (for example, 911 in the United States). In the United States, you can also call or text 988 to reach the Suicide & Crisis Lifeline. If you are outside the United States, contact your local emergency number or crisis line.",
      "Do not rely on the App for any urgent or emergency need.",
    ],
  },
  {
    title: "4. AI-Generated Content",
    paragraphs: [
      "The App uses artificial intelligence to generate conversational responses, wellness suggestions, and voice content. AI-generated content:",
    ],
    bullets: [
      "May be inaccurate, incomplete, or not appropriate for your situation.",
      "Is limited to wellness, mindfulness, and lifestyle topics; medical questions are intentionally outside its scope.",
      "Should be evaluated using your own judgment and, where appropriate, the guidance of qualified professionals.",
    ],
    afterBulletsParagraphs: [
      "To generate responses, information you choose to share may be transmitted to third-party AI service providers as described in our Privacy Policy. Your continued use of AI features indicates your consent to this processing.",
    ],
  },
  {
    title: "5. Eligibility",
    paragraphs: [
      "You must be at least the age of majority in your jurisdiction, or the minimum age required by applicable law, to use the App. The App is not intended for children under that age.",
    ],
  },
  {
    title: "6. Your Account",
    paragraphs: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate information and to keep it up to date. Notify us promptly of any unauthorized use of your account.",
    ],
  },
  {
    title: "7. Acceptable Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the App for any unlawful, harmful, or fraudulent purpose.",
      "Attempt to gain unauthorized access to the App, other accounts, or our systems.",
      "Interfere with or disrupt the integrity or performance of the App.",
      "Reverse engineer, decompile, or attempt to extract source code, except as permitted by law.",
      "Use the App to harass, abuse, or harm others.",
      "Misuse the App for medical, diagnostic, or emergency purposes for which it is not intended.",
    ],
  },
  {
    title: "8. Health and Wearable Data",
    paragraphs: [
      "If you authorize access to Apple HealthKit, Apple Watch, or similar sources, the App uses that data only to provide wellness functionality you request, as described in our Privacy Policy. You may withdraw these permissions at any time through your device settings.",
    ],
  },
  {
    title: "9. Subscriptions and Payments",
    paragraphs: [
      "Certain features may require a paid subscription. Pricing, billing cycles, and renewal terms are presented at the point of purchase. Subscriptions managed through the Apple App Store are subject to Apple's terms, and billing, cancellation, and refunds are handled according to those terms.",
    ],
  },
  {
    title: "10. Account Deletion",
    paragraphs: [
      "You may delete your account directly within the App at any time. Account deletion permanently removes your data from active systems, subject to the limited retention described in our Privacy Policy.",
    ],
  },
  {
    title: "11. Intellectual Property",
    paragraphs: [
      "The App, including its software, design, text, graphics, and other content (excluding your own User Content), is owned by NeuroHeart AI or its licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial wellness purposes.",
    ],
  },
  {
    title: "12. User Content",
    paragraphs: [
      "You retain ownership of content you submit (\"User Content\"). By submitting User Content, you grant us a limited license to process it solely to operate and provide the App's features to you (including transmitting it to AI service providers to generate responses you request). You are responsible for your User Content and represent that you have the right to submit it.",
    ],
  },
  {
    title: "13. Disclaimers",
    paragraphs: [
      "THE APP IS PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY CONTENT, INCLUDING AI-GENERATED CONTENT, IS ACCURATE OR RELIABLE.",
    ],
  },
  {
    title: "14. Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEUROHEART AI AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, USE, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE APP. NOTHING IN THESE TERMS LIMITS LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW.",
    ],
  },
  {
    title: "15. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless NeuroHeart AI and its affiliates from any claims, damages, liabilities, and expenses arising from your use of the App or violation of these Terms.",
    ],
  },
  {
    title: "16. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Material changes will be communicated through the App or other appropriate means. Continued use of the App following updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "17. Termination",
    paragraphs: [
      "We may suspend or terminate your access to the App if you violate these Terms or use the App in a manner that may cause harm. You may stop using the App and delete your account at any time.",
    ],
  },
  {
    title: "18. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws applicable in our principal place of business, without regard to conflict-of-law principles, except where local consumer-protection law requires otherwise.",
    ],
  },
  {
    title: "19. Contact",
    paragraphs: ["For questions regarding these Terms:"],
    contact: "ai@neuroheart.ai",
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      effectiveDate="Last Updated: June 2026"
      intro={intro}
      sections={sections}
    />
  );
}
