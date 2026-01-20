import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
});

function getIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  const { success, remaining, reset } = await rateLimit.limit(
    `portfolio:contact:${ip}`,
  );

  if (!success) {
    const now = Date.now();
    const retryAfterSec = Math.max(1, Math.ceil((reset - now) / 1000));
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please try again later.",
        reset,
        retryAfterSec,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSec),
          "X-RateLimit-Remaining": String(remaining),
          "X-RateLimit-Reset": String(reset),
        },
      },
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const { name, email, message, interest } = body ?? {};

    if (!name || !email || !message || !interest) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO_EMAIL is missing in env" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Ben Nguyen <hi@hereisben.dev>",
      to: to,
      subject: `[Portfolio] ${interest ?? "Message"} - ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
    });

    if (error) {
      console.log("RESEND ERROR:", error);
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (err) {
    console.log("CONTACT API CRASH:", err);
    return NextResponse.json(
      { ok: false, error: "Bad Request" },
      { status: 500 },
    );
  }
}
