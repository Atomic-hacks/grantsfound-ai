import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function POST(_req: Request, { params }: Params) {
  return NextResponse.json({
    ok: true,
    exportId: `export_${Date.now()}`,
    reportId: params.id,
    url: "https://example.com/mock-report.pdf",
  });
}
