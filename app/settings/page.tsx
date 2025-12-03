"use client";

export default function SettingsPage() {
  return (
    <div className="rounded-card border border-cloud/60 dark:border-slate/60 bg-cloud/60 dark:bg-midnight/60 p-8">
      <h1 className="text-3xl font-display font-semibold text-slate dark:text-cloud">
        Settings
      </h1>
      <p className="text-slate/70 dark:text-cloud/70">
        Add org preferences, API keys, and team management settings here.
      </p>
    </div>
  );
}
