
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

        <span
          title="Workflow creation is coming in a future lesson"
          className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-slate-700 px-5 py-3 text-sm font-semibold text-slate-300"
        >
          <Plus size={18} />
          Create Workflow — Soon
        </span>
      </div>

      <WorkflowList />
    </div>
  );
}
