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
    <div className="space-y-6 rounded-card border border-slate/60 bg-midnight/60 p-8">
      <header>
        <h1 className="text-3xl font-display font-semibold text-cloud">
          Projects
        </h1>
        <p className="text-cloud/70">
          Placeholder list. Interns: layer Prisma + API integration.
        </p>
      </header>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center justify-between rounded-2xl border border-slate/60 bg-slate/60 p-4 text-sm"
          >
            <div>
              <p className="text-lg font-semibold text-cloud">{project.name}</p>
              <p className="text-cloud/60">Owner: {project.owner}</p>
            </div>
            <p className="text-cloud/80">{project.stage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
