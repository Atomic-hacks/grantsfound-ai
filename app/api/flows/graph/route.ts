import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nodes: [
      { id: "source", label: "Source Data" },
      { id: "clean", label: "Normalize" },
      { id: "score", label: "Score" },
    ],
    edges: [
      { from: "source", to: "clean" },
      { from: "clean", to: "score" },
    ],
  });
}
