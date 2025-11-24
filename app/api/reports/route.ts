import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    report: {
      id: `rep_${Date.now()}`,
      title: body.title ?? "Untitled Report",
      status: "draft",
    },
  });
}
