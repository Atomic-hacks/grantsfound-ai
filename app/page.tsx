import Link from "next/link";

export default function Home() {
  return (
    <div className="rounded-card border border-cloud/60 dark:border-slate/60 bg-cloud/60 dark:bg-midnight/60 p-12 shadow-soft">
      <p className="text-sm uppercase tracking-widest text-gold/70">
        GrantsFound Agentic Platform
      </p>
      <h1 className="mt-4 text-4xl font-display font-semibold text-slate dark:text-cloud">
        Guide every grant lifecycle with agentic copilots.
      </h1>
      <p className="mt-4 text-lg text-slate/80 dark:text-cloud/80">
        Welcome! Use the dashboard to monitor health, orchestrate flows in the
        agent hub, and keep projects on schedule. This landing page will soon
        redirect authenticated users based on their workspace role.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/dashboard"
          className="rounded-full bg-gold px-6 py-3 text-slate font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-midnight"
          aria-label="Navigate to dashboard"
        >
          Enter dashboard
        </Link>
        <Link
          href="/agent-hub"
          className="rounded-full border border-slate-40 dark:border-cloud/40 px-6 py-3 font-semibold text-slate dark:text-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          View agent hub
        </Link>
      </div>
      <p className="mt-6 text-sm text-slate dark:text-cloud/60">
        Interns: implement auth-aware redirects and hero animations here.
      </p>
    </div>
  );
}
