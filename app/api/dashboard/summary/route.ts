import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    agentsOnline: 7,
    activeSessions: 4,
    projectHealth: [
      { name: "STEM Catalyst", score: 82 },
      { name: "Community Solar Fund", score: 64 },
    ],
    deadlines: [
      { id: "dl_1", title: "Quarterly KPI packet", dueOn: "2025-12-02" },
    ],
  });
}
