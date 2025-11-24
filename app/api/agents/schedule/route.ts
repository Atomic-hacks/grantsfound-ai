import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    scheduleId: `sch_${Date.now()}`,
    cron: body.cron ?? "0 * * * *",
    agentId: body.agentId ?? "lumen",
    note: "Mock schedule created. Wire to job runner.",
  });
}
