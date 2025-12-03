"use client";

import { Card } from "./Card";

type AgentCardProps = {
  name: string;
  status: "online" | "idle" | "offline";
  sessions: number;
  specialty: string;
};

const statusStyles: Record<AgentCardProps["status"], string> = {
  online: "text-emerald-400",
  idle: "text-amber-300",
  offline: "text-rose-300",
};

export function AgentCard(props: AgentCardProps) {
  const { name, status, sessions, specialty } = props;
  return (
    <Card ariaLabel={`${name} agent card`} className="space-y-2 bg-cloud dark:bg-midnight/60">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate/60 dark:text-cloud/60">
            {specialty}
          </p>
          <p className="text-lg font-semibold text-slate dark:text-cloud">{name}</p>
        </div>
        <span className={`text-sm font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-xs text-slate/70 dark:text-cloud/70">
        Active sessions: <span className="font-semibold">{sessions}</span>
      </p>
    </Card>
  );
}

export default AgentCard;
