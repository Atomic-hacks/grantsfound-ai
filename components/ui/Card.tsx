"use client";

import { PropsWithChildren } from "react";
import { clsx } from "clsx";

type CardProps = PropsWithChildren<{
  className?: string;
  title?: string;
  ariaLabel?: string;
}>;

export function Card({ children, className, title, ariaLabel }: CardProps) {
  return (
    <section
      aria-label={ariaLabel ?? title}
      className={clsx(
        "rounded-card bg-slate/60 border border-slate/40 shadow-soft backdrop-blur",
        "p-6 text-cloud space-y-3",
        className
      )}
    >
      {title ? (
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-display font-semibold tracking-tight">
            {title}
          </h2>
        </header>
      ) : null}
      <div>{children}</div>
    </section>
  );
}

export default Card;
