"use client";

export default function NewProjectPage() {
  return (
    <div className="rounded-card border border-dashed border-gold/50 bg-midnight/50 p-8">
      <h1 className="text-3xl font-display font-semibold text-cloud">
        New project setup
      </h1>
      <p className="mt-2 text-sm text-cloud/70">
        Build the project creation wizard here. Capture funding orgs, desired
        KPIs, and compliance scopes. For now, this page just documents the
        future workflow.
      </p>
      <ol className="mt-6 list-decimal space-y-3 rounded-2xl border border-slate/60 bg-slate/60 p-6 text-sm text-cloud/80">
        <li>Collect org + opportunity metadata.</li>
        <li>Attach integrations (CRM, finance, CSV uploads).</li>
        <li>Assign agents and configure review cadences.</li>
        <li>Persist via `/api/projects` POST endpoint.</li>
      </ol>
    </div>
  );
}
