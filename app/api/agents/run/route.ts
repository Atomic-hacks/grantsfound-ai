import { NextResponse } from "next/server";
import { launchAgentRun } from "@/lib/agent-orchestrator";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const payload = {
    agentId: body.agentId ?? "atlas",
    projectId: body.projectId ?? "proj_mock",
    instructions: body.instructions ?? "Monitor KPI health",
  };

  const result = await launchAgentRun(payload);
  return NextResponse.json({ ok: true, run: result });
}
