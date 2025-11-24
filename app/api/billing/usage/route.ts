import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    orgId: "org_mock",
    monthlyCredits: 1200,
    consumedCredits: 640,
    forecast: "82% of plan",
  });
}
