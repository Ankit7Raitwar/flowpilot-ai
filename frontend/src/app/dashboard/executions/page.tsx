
import { History } from "lucide-react";
import PageHeading from "@/components/ui/page-heading";

export default function ExecutionsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        title="Execution History"
        description="Monitor your workflow runs and results."
      />

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
        <History
          size={40}
          className="mx-auto mb-4 text-emerald-400"
        />

        <h2 className="text-xl font-semibold">
          No executions found
        </h2>

        <p className="mt-3 text-sm text-slate-400">
          Workflow execution logs will appear here.
        </p>
      </div>
    </div>
  );
}
