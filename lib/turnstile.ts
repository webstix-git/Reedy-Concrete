const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type VerifyResult =
  | { success: true }
  | { success: false; error: "captcha" | "server" };

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<VerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not set.");
    return { success: false, error: "server" };
  }

  if (!token.trim()) {
    return { success: false, error: "captcha" };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const verdict = (await response.json()) as { success?: boolean };
    if (!verdict.success) return { success: false, error: "captcha" };
    return { success: true };
  } catch (error) {
    console.error("Turnstile verification failed.", error);
    return { success: false, error: "server" };
  }
}
