import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    agents: [
      { id: "atlas", status: "online", sessions: 3 },
      { id: "lumen", status: "idle", sessions: 1 },
      { id: "pulse", status: "online", sessions: 2 },
    ],
  });
}
