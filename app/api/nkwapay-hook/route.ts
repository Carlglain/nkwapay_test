import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("🔥 Webhook received:", data);

    // Return 200 OK so NkwaPay knows we received the webhook
    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    console.error("Webhook error:", error);

    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }
}
