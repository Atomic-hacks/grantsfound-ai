"use client";

const projects = [
  {
    id: "proj_1",
    name: "Community Solar",
    owner: "Amelia",
    stage: "Reporting",
  },
  { id: "proj_2", name: "STEM Catalyst", owner: "Leo", stage: "Prospecting" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6 rounded-card border border-cloud/60 dark:border-slate/60 bg-cloud/60 dark:bg-midnight/60 p-8">
      <header>
        <h1 className="text-3xl font-display font-semibold text-slate dark:text-cloud">
          Projects
        </h1>
        <p className="text-slate/70 dark:text-cloud/70">
          Placeholder list. Interns: layer Prisma + API integration.
        </p>
      </header>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center justify-between rounded-2xl border border-cloud/60 dark:border-slate/60 bg-gray-100 dark:bg-slate/60 p-4 text-sm"
          >
            <div>
              <p className="text-lg font-semibold text-slate dark:text-cloud">{project.name}</p>
              <p className="text-slate/60 dark:text-cloud/60">Owner: {project.owner}</p>
            </div>
            <p className="text-slate/80 dark:text-cloud/80">{project.stage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
