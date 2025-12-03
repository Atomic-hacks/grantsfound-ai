"use client";

export default function BillingPage() {
  return (
    <div className="rounded-card border border-cloud/60 dark:border-slate/60 bg-cloud/60 dark:bg-midnight/60 p-8">
      <h1 className="text-3xl font-display font-semibold text-slate dark:text-cloud">
        Billing
      </h1>
      <p className="text-slate/70 dark:text-cloud/70">
        Hook this view up to `/api/billing/usage` for live consumption data.
      </p>
    </div>
  );
}
