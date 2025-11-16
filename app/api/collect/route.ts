import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch("https://api.pay.mynkwa.com/disburse", {
      method: "POST",
      headers: {
        "X-API-Key": process.env.NKWA_APIKEY || "", // safer fallback
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // forward aggregator error details
      const err = await response.text();
      return NextResponse.json(
        { error: `Aggregator error: ${err}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
