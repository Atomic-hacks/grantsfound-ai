"use client";

import FlowGraph from "@/components/flows/FlowGraph";

export default function FlowInsightsPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-card border border-slate/60 bg-midnight/60 p-8">
        <h1 className="text-3xl font-display font-semibold text-cloud">
          Flow Insights
        </h1>
        <p className="text-cloud/70">
          Visualize agent pipelines. Swap with analytics once `/api/flows/graph`
          is live.
        </p>
      </header>
      <FlowGraph />
    </div>
  );
}
