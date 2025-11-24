"use client";

import { useParams } from "next/navigation";

export default function ReportDetailPage() {
  const params = useParams<{ id: string }>();
  const reportId = params?.id ?? "unknown";

  return (
    <div className="rounded-card border border-slate/60 bg-midnight/60 p-8">
      <h1 className="text-3xl font-display font-semibold text-cloud">
        Report {reportId}
      </h1>
      <p className="text-sm text-cloud/70">
        This page will soon show AI-generated drafts, inline audit notes, and
        export history. Use `/api/reports/:id` endpoints to hydrate this view.
      </p>
      <div className="mt-6 space-y-4 text-sm text-cloud/80">
        <p>Mock summary:</p>
        <p>
          • Draft sections pending review <br />• Export CSV to stakeholders via
          `/api/reports/:id/export`
        </p>
      </div>
    </div>
  );
}
