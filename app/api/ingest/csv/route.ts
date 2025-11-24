import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    jobId: `ingest_${Date.now()}`,
    message: "CSV staged for processing. Replace with storage uploads.",
  });
}
