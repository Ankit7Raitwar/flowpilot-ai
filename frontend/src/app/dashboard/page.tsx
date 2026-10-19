
import Link from "next/link";

import {
  Workflow,
  Activity,
  CheckCircle2,
  Zap,
  Plus,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";
import PageHeading from "@/components/ui/page-heading";

const stats = [
  {
    title: "Total Workflows",
    value: 0,
    icon: Workflow,
    description: "Workflows created",
  },
  {
    title: "Active Workflows",
    value: 0,
    icon: Zap,
    description: "Currently enabled",
  },
  {
    title: "Total Executions",
    value: 0,
    icon: Activity,
    description: "Workflow runs",
  },
  {
    title: "Successful Executions",
    value: 0,
    icon: CheckCircle2,
    description: "Completed successfully",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <PageHeading
          title="Dashboard Overview"
          description="Monitor and manage your automated workflows."
        />

        <Link
          href="/dashboard/workflows"
          className="mb-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
        >
          <Plus size={18} />
          View Workflows
        </Link>
      </div>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </section>

      <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex min-h-60 flex-col items-center justify-center text-center">
          <div className="mb-5 rounded-full bg-emerald-500/10 p-5">
            <Workflow size={36} className="text-emerald-400" />
          </div>

          <h2 className="text-xl font-semibold">
            No workflows yet
          </h2>

          <p className="mt-3 max-w-md text-sm text-slate-400">
            Your workflow executions and recent activity will
            appear here once you create your first automation.
          </p>

          <Link
            href="/dashboard/workflows"
            className="mt-6 rounded-lg border border-emerald-500 px-5 py-3 text-sm font-medium text-emerald-400 hover:bg-emerald-500/10"
          >
            Explore Workflows
          </Link>
        </div>
      </section>
    </div>
  );
}
