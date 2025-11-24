import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    project: {
      id: `proj_${Date.now()}`,
      name: body.name ?? "Untitled Project",
      status: "draft",
    },
    note: "Persist via Prisma once DB is wired up.",
  });
}
