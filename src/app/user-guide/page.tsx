import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "User Guide",
  description:
    "User guide for the NeuroHeart AI iOS and Apple Watch app.",
  alternates: {
    canonical: "/user-guide",
  },
};

const intro = [
  "Welcome to NeuroHeart AI, your personal companion for understanding your heart, calming your mind, and reflecting on how you feel.",
  "This guide explains the main tabs in the iOS app: Home, Chat, HRV, Practice, Calendar, and Settings.",
];

const sections = [
  {
    title: "1. Getting Started",
    paragraphs: [
      "When you open the app, you will see six tabs along the bottom: Home, Chat, HRV, Practice, Calendar, and Settings.",
      "Tap any tab to switch screens. The top bar shows the app name and notification access, and the profile icon opens your profile.",
    ],
  },
  {
    title: "2. Home",
    paragraphs: [
      "Home is your daily landing screen with a greeting, glowing heart, latest HRV metric, and quick actions.",
      "Tap the Latest Metric card to jump straight to the full HRV tab.",
    ],
    bullets: [
      "Higher HRV often means your body is well-rested and recovering well.",
      "Lower HRV can reflect stress, fatigue, or normal day-to-day variation.",
      "Watch trends over time rather than focusing on a single number.",
    ],
  },
  {
    title: "3. Chat",
    paragraphs: [
      "Use Chat to talk with your AI companion about how you are feeling, sleep, stress, goals, and reflections.",
      "Tap Start New Reflection to begin a new conversation, use search to find past chats, or reopen a recent exploration.",
    ],
  },
  {
    title: "4. HRV",
    paragraphs: [
      "The HRV tab shows your heart-health dashboard, including the latest HRV reading, weekly charts, SDNN, PNN50, and trend views.",
      "Use the time picker to switch between day, week, or month views where available.",
    ],
  },
  {
    title: "5. Practice",
    paragraphs: [
      "Practice includes Reflect and ReadHRV modes.",
      "Reflect creates a guided meditation based on how you feel, what you want to explore, and how long you want to practice.",
      "ReadHRV is the place in the app that reads Apple Watch HRV live in real time. Keep your Apple Watch on your wrist, open the NeuroHeart watch app, tap ReadHRV, then sit still and breathe naturally.",
    ],
  },
  {
    title: "6. Calendar",
    paragraphs: [
      "Calendar sync lets the AI understand your schedule when you grant permission.",
      "Once enabled in Settings, the app can use upcoming events to provide advice that fits around meetings, travel, and free time.",
    ],
  },
  {
    title: "7. Settings",
    paragraphs: [
      "Settings includes account details, connected devices, subscriptions, sync controls, permissions, notifications, contact support, and sign out.",
      "Use Health Permissions to choose what health data the app can access. Use Calendar Sync to manage schedule access.",
    ],
  },
  {
    title: "8. Support",
    paragraphs: [
      "For support, questions, privacy requests, or feedback, contact the NeuroHeart team:",
    ],
    contact: "ai@neuroheart.ai",
  },
] as const;

export default function UserGuidePage() {
  return (
    <LegalPage
      title="User Guide"
      effectiveDate="Updated: June 2026"
      intro={intro}
      sections={sections}
    />
  );
}
