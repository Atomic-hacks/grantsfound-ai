"use client";

type FlowNode = {
  id: string;
  label: string;
  status: "draft" | "active";
};

const mockNodes: FlowNode[] = [
  { id: "source", label: "Source Data", status: "active" },
  { id: "clean", label: "Normalize", status: "active" },
  { id: "score", label: "Score Grants", status: "draft" },
  { id: "notify", label: "Notify Agent", status: "draft" },
];

/**
 * Placeholder for a flow graph visualization.
 * Interns can replace with D3, React Flow, or custom canvas integration.
 */
export function FlowGraph() {
  return (
    <div className="rounded-card border border-cloud/60 dark:border-slate/60 dark:bg-midnight/50 bg-cloud/50 p-6 dark:text-cloud text-slate">
      <h2 className="text-lg font-display font-semibold">Agent Flow Preview</h2>
      <p className="text-sm text-slate/60 dark:text-cloud/60">
        Static nodes for now. Replace with interactive canvas builder.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {mockNodes.map((node) => (
          <div
            key={node.id}
            className="rounded-2xl border border-gray-200 dark:border-slate/50 bg-gray-100 dark:bg-slate/60 p-4"
          >
            <p className="text-sm uppercase tracking-widest text-slate/50 dark:text-cloud/50">
              Node
            </p>
            <p className="text-xl font-semibold">{node.label}</p>
            <p className="text-xs text-slate dark:text-cloud/60">
              Status:{" "}
              <span
                className={
                  node.status === "active" ? "text-emerald-400" : "text-gold"
                }
              >
                {node.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowGraph;
