import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const BETA_FILE = path.join(process.cwd(), "beta-signups.json");
const NOTIFY_EMAIL = "ai@neuroheart.ai";

interface BetaSignup {
  name: string;
  email: string;
  signedUpAt: string;
}

async function getSignups(): Promise<BetaSignup[]> {
  try {
    const data = await fs.readFile(BETA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSignups(signups: BetaSignup[]): Promise<void> {
  await fs.writeFile(BETA_FILE, JSON.stringify(signups, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const signups = await getSignups();

    if (signups.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "You're already signed up for the beta!" },
        { status: 409 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    signups.push({
      name: trimmedName,
      email: trimmedEmail,
      signedUpAt: new Date().toISOString(),
    });

    await saveSignups(signups);

    // Send notification email to ai@neuroheart.ai
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send notification to the team
        await resend.emails.send({
          from: "NeuroHeart Beta <onboarding@resend.dev>",
          to: NOTIFY_EMAIL,
          subject: `New Beta Signup: ${trimmedName}`,
          html: `
            <h2>New Beta Signup!</h2>
            <p><strong>Name:</strong> ${trimmedName}</p>
            <p><strong>Email:</strong> ${trimmedEmail}</p>
            <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Total signups:</strong> ${signups.length}</p>
          `,
        });

        // Send welcome email to the user
        await resend.emails.send({
          from: "NeuroHeart AI <onboarding@resend.dev>",
          to: trimmedEmail,
          subject: "Welcome to the NeuroHeart Beta!",
          html: `
            <h2>Hey ${trimmedName}, welcome aboard!</h2>
            <p>Thanks for joining the NeuroHeart AI beta. We're excited to have you.</p>
            <p>You'll be among the first to experience real-time HRV biofeedback powered by AI. We'll reach out soon with your access details.</p>
            <br/>
            <p>— The NeuroHeart Team</p>
          `,
        });
      } catch (emailError) {
        console.error("[Beta Signup] Email send failed:", emailError);
        // Don't fail the signup if email fails
      }
    } else {
      console.log(
        `[Beta Signup] RESEND_API_KEY not set. New signup: ${trimmedName} <${trimmedEmail}> — notify ${NOTIFY_EMAIL}`
      );
    }

    return NextResponse.json({
      message: "You're in! We'll reach out soon with beta access details.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
