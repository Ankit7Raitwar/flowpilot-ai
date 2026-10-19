
import Link from "next/link";
import { Plus } from "lucide-react";

import PageHeading from "@/components/ui/page-heading";
import WorkflowList from "@/components/workflows/workflow-list";

export default function WorkflowsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-2 flex flex-wrap items-start justify-between gap-4">
        <PageHeading
          title="My Workflows"
          description="Search, filter and manage your automation workflows."
        />

        <Link
          href="/dashboard/workflows/create"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
        >
          <Plus size={18} />
          Create Workflow
        </Link>
      </div>

      <WorkflowList />
    </div>
  );
}
