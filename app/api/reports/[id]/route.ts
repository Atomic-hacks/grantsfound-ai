import { NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function PATCH(request: Request, { params }: Params) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    id: params.id,
    status: body.status ?? "draft",
    message: "Mock update saved. Connect to Prisma later.",
  });
}

export async function GET(_req: Request, { params }: Params) {
  return NextResponse.json({
    id: params.id,
    title: "Mock Report",
    status: "draft",
    sections: [],
  });
}
