"use client";

import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const projectId = params?.id ?? "unknown";

  return (
    <div className="space-y-4 rounded-card border border-gray-200 dark:border-slate/60 bg-gray-50 dark:bg-midnight/60 p-8">
      <h1 className="text-3xl font-display font-semibold text-slate dark:text-cloud">
        Project {projectId}
      </h1>
      <p className="text-sm text-slate/70 dark:text-cloud/70">
        Detail views will summarize KPIs, report timelines, audits, and agent
        transcripts. Replace this placeholder by fetching data from Prisma via
        tRPC/REST.
      </p>
      <div className="rounded-2xl border border-gray-200 dark:border-slate/50 bg-gray-50 dark:bg-slate/60 p-6 text-sm text-slate/70 dark:text-cloud/70">
        <p>Mock facts:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Owner: Placeholder User</li>
          <li>Stage: Prototype</li>
          <li>Next Milestone: CSV ingestion by /api/ingest/csv</li>
        </ul>
      </div>
    </div>
  );
}
