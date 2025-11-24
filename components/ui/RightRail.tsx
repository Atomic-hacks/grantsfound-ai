"use client";

import Link from "next/link";

const reminders = [
  { label: "Sync SAM.gov integration", date: "Due in 2d" },
  { label: "Upload CSV milestone log", date: "Due in 5d" },
];

export function RightRail() {
  return (
    <aside
      aria-label="Workspace reminders"
      className="hidden xl:flex w-80 flex-col gap-4 rounded-card border border-slate/60 bg-slate/70 p-6 text-sm text-cloud"
    >
      <div>
        <h2 className="text-lg font-display font-semibold text-cloud">
          Reminders
        </h2>
        <ul className="mt-3 space-y-3">
          {reminders.map((reminder) => (
            <li key={reminder.label} className="rounded-2xl bg-midnight/60 p-3">
              <p className="font-medium">{reminder.label}</p>
              <p className="text-xs text-cloud/70">{reminder.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate/40 p-4">
        <p className="text-sm font-semibold">Latest release</p>
        <p className="text-xs text-cloud/70">
          Flow composer and CSV ingestion endpoints now live.
        </p>
        <Link
          href="/insights/flows"
          className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-gold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          Review flows <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </aside>
  );
}

export default RightRail;
