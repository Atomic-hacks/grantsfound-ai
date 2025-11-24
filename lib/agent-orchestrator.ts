import { emitEvent } from "./events";

export type AgentRunPayload = {
  agentId: string;
  projectId?: string;
  instructions: string;
};

/**
 * Mock orchestrator stub. Replace with queue-backed workers.
 */
export async function launchAgentRun(payload: AgentRunPayload) {
  await emitEvent({
    name: "agent.run.launch",
    properties: payload,
  });

  return {
    runId: `run_${Date.now()}`,
    status: "scheduled" as const,
  };
}
