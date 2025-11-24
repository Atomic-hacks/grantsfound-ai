"use client";

import Link from "next/link";
import FlowGraph from "@/components/flows/FlowGraph";

export default function AgentHubPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-card border border-slate/60 bg-midnight/60 p-8">
        <h1 className="text-3xl font-display font-semibold text-cloud">
          Agent Hub
        </h1>
        <p className="mt-2 text-cloud/70">
          Inspect orchestrations, tune prompts, and preview flow graphs. This
          page currently renders static content—wire up orchestration APIs next.
        </p>
        <div className="mt-4 flex gap-4">
          <Link
            href="/projects/new"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-slate focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Create project
          </Link>
          <button
            type="button"
            className="rounded-full border border-cloud/50 px-4 py-2 text-sm font-semibold text-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            Schedule run
          </button>
        </div>
      </header>
      <FlowGraph />
    </div>
  );
}
