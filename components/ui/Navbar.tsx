"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/agent-hub", label: "Agent Hub" },
  { href: "/projects", label: "Projects" },
  { href: "/reports", label: "Reports" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between border-b border-slate/50 bg-slate/80 px-6 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2 font-display text-xl text-cloud">
        <span className="h-10 w-10 rounded-full bg-gold/90 text-slate flex items-center justify-center font-bold">
          GF
        </span>
        GrantsFound Agentic Platform
      </div>
      <ul className="flex items-center gap-4 text-sm font-medium text-cloud/80">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "rounded-full px-4 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold",
                pathname?.startsWith(link.href)
                  ? "bg-gold/20 text-gold"
                  : "hover:bg-slate/60"
              )}
              aria-current={
                pathname?.startsWith(link.href) ? "page" : undefined
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
