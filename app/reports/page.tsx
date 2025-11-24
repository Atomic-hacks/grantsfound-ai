"use client";

const reports = [
  { id: "rep_1", name: "Q4 Impact Narrative", status: "Draft" },
  { id: "rep_2", name: "DOE Compliance Packet", status: "Review" },
];

export default function ReportsPage() {
  return (
    <div className="rounded-card border border-slate/60 bg-midnight/60 p-8">
      <h1 className="text-3xl font-display font-semibold text-cloud">
        Reports
      </h1>
      <p className="text-cloud/70">
        Static data for now. Hook into `/api/reports` for real-time updates.
      </p>
      <table className="mt-6 w-full text-left text-sm text-cloud">
        <thead className="text-xs uppercase tracking-widest text-cloud/60">
          <tr>
            <th className="py-2">Report</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate/60">
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="py-3 font-semibold">{report.name}</td>
              <td className="py-3 text-cloud/70">{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
