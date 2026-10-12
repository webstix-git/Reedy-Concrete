import { NextResponse, type NextRequest } from "next/server";
import { verifyTurnstileToken } from "@/lib/turnstile";

const FORM_ENDPOINT =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/b37b385f-15b5-404d-ba29-2639272d6c5d";

const TOKEN_FIELD = "cf-turnstile-response";

export async function POST(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const fail = (reason: "captcha" | "submit" | "server") =>
    NextResponse.redirect(`${origin}/careers?error=${reason}#application`, 303);

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
  if (!payload.get("redirect")) payload.set("redirect", `${origin}/careers/thank-you`);

  const requestOrigin = request.headers.get("origin") || origin;

  try {
    const forwarded = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        origin: requestOrigin,
        referer: `${requestOrigin}/careers`,
      },
      body: payload,
      redirect: "manual",
    });

    if (forwarded.status >= 200 && forwarded.status < 400) {
      return NextResponse.redirect(`${origin}/careers/thank-you`, 303);
    }
  } catch (error) {
    console.error("Career application forwarding failed.", error);
  }

  return fail("submit");
}
