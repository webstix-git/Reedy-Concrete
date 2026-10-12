import { NextResponse, type NextRequest } from "next/server";
import { verifyTurnstileToken } from "@/lib/turnstile";

const FORM_ENDPOINT =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/4bcc4b5d-2a39-4534-b3cb-c236032e90c7";

const TOKEN_FIELD = "cf-turnstile-response";

export async function POST(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const fail = (reason: "captcha" | "submit" | "server") =>
    NextResponse.redirect(`${origin}/contact-us?error=${reason}#contact-form`, 303);

  const submission = await request.formData();
  const token = String(submission.get(TOKEN_FIELD) ?? "");
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const captcha = await verifyTurnstileToken(token, clientIp);
  if (!captcha.success) return fail(captcha.error);

  submission.delete(TOKEN_FIELD);
  const payload = new URLSearchParams();
  for (const [key, value] of submission.entries()) {
    if (typeof value === "string") payload.set(key, value);
  }
  if (!payload.get("redirect")) payload.set("redirect", `${origin}/thank-you`);

  const requestOrigin = request.headers.get("origin") || origin;

  try {
    const forwarded = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        origin: requestOrigin,
        referer: `${requestOrigin}/contact-us`,
      },
      body: payload,
      redirect: "manual",
    });

    if (forwarded.status >= 200 && forwarded.status < 400) {
      return NextResponse.redirect(`${origin}/thank-you`, 303);
    }
  } catch (error) {
    console.error("Contact form forwarding failed.", error);
  }

  return fail("submit");
}
