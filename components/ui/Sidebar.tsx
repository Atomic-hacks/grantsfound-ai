"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navGroups = [
  {
    label: "Workspace",
    items: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/agent-hub", label: "Agent Hub" },
      { href: "/projects", label: "Projects" },
      { href: "/reports", label: "Reports" },
      { href: "/insights/flows", label: "Insights" },
    ],
  },
  {
    label: "Admin",
    items: [
      { href: "/billing", label: "Billing" },
      { href: "/settings", label: "Settings" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside
      aria-label="Workspace navigation"
      className="hidden lg:flex w-64 flex-col gap-8 border-r border-slate/60 bg-midnight p-6 text-cloud"
    >
      <div>
        <p className="text-xs uppercase tracking-widest text-cloud/50">
          Explore
        </p>
        {navGroups.map((group) => (
          <div key={group.label} className="mt-4 space-y-2">
            <h3 className="text-sm font-semibold text-cloud/70">
              {group.label}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center justify-between rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold",
                      pathname?.startsWith(item.href)
                        ? "bg-gold/20 text-gold"
                        : "hover:bg-slate/60"
                    )}
                    aria-current={
                      pathname?.startsWith(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-card border border-slate/40 bg-slate/70 p-4 text-sm">
        <p className="font-semibold text-cloud">Need automation ideas?</p>
        <p className="text-cloud/70">
          Invite partners to GrantsFound Agentic beta.
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-gold/90 px-4 py-2 text-sm font-semibold text-slate transition hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Share Access
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
