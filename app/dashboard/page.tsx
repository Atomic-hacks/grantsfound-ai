"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Dial from "@/components/ui/Dial";
import AgentCard from "@/components/ui/AgentCard";
import AgentModal from "@/components/ui/AgentModal";

const heroMetrics = {
  agentsOnline: 7,
  activeSessions: 4,
};

const projectHealth = [
  { name: "STEM Catalyst", progress: 82, trend: "+5% vs last week" },
  { name: "Community Solar Fund", progress: 64, trend: "Holding steady" },
  { name: "Arts Innovation Lab", progress: 45, trend: "-3% attention" },
];

const deadlines = [
  { date: "Dec 02", title: "Quarterly KPI packet due" },
  { date: "Dec 05", title: "NASA micro-grant report" },
  { date: "Dec 12", title: "NEH audit backup upload" },
];

const activityFeed = [
  { time: "2m ago", message: "Atlas agent resolved budget variance." },
  { time: "17m ago", message: "Lumen agent tagged 3 new grant fits." },
  { time: "1h ago", message: "Pulse agent escalated compliance note." },
];

const agents = [
  {
    name: "Atlas",
    status: "online" as const,
    sessions: 3,
    specialty: "Reporting",
  },
  {
    name: "Lumen",
    status: "idle" as const,
    sessions: 1,
    specialty: "Prospecting",
  },
  {
    name: "Pulse",
    status: "online" as const,
    sessions: 2,
    specialty: "Compliance",
  },
];

export default function DashboardPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <header className="rounded-card border border-slate/60 bg-gradient-to-r from-midnight to-slate p-8 text-cloud shadow-soft">
        <p className="text-sm uppercase tracking-widest text-cloud/60">
          Mission readiness
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-10">
          <div>
            <p className="text-3xl font-display font-semibold">
              {heroMetrics.agentsOnline} Agents Online
            </p>
            <p className="text-sm text-cloud/70">
              Operating across workstreams
            </p>
          </div>
          <div>
            <p className="text-3xl font-display font-semibold">
              {heroMetrics.activeSessions} Active Sessions
            </p>
            <p className="text-sm text-cloud/70">
              Live orchestrations in the last hour
            </p>
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="rounded-full bg-gold px-6 py-3 text-slate font-semibold shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              onClick={() => setModalOpen(true)}
            >
              Launch agent
            </button>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {projectHealth.map((project) => (
          <Card key={project.name} title={project.name}>
            <div className="flex items-center justify-between">
              <Dial label="Health" value={project.progress} />
              <p className="text-sm text-cloud/70">{project.trend}</p>
            </div>
            <p className="text-xs text-cloud/60">
              Interns: replace with live KPI feed + sparkline.
            </p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card title="Upcoming reporting deadlines" className="xl:col-span-2">
          <ol className="space-y-4">
            {deadlines.map((deadline) => (
              <li
                key={deadline.title}
                className="flex items-center justify-between rounded-2xl border border-slate/60 bg-midnight/60 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-cloud">
                    {deadline.title}
                  </p>
                  <p className="text-xs text-cloud/60">
                    Auto reminders pending
                  </p>
                </div>
                <span className="text-lg font-display text-gold">
                  {deadline.date}
                </span>
              </li>
            ))}
          </ol>
        </Card>
        <Card title="Agent activity feed">
          <ul className="space-y-3">
            {activityFeed.map((item) => (
              <li
                key={item.message}
                className="rounded-2xl border border-slate/50 bg-slate/60 p-3"
              >
                <p className="text-sm text-cloud">{item.message}</p>
                <p className="text-xs text-cloud/60">{item.time}</p>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </section>

      <AgentModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
