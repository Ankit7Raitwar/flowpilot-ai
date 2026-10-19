
import {
  Workflow as WorkflowIcon,
  CalendarDays,
  PlayCircle,
  Zap,
} from "lucide-react";

import type { Workflow } from "@/types/workflow";

type WorkflowCardProps = {
  workflow: Workflow;
};

export default function WorkflowCard({
  workflow,
}: WorkflowCardProps) {
  const isActive = workflow.status === "active";

  const formattedDate = new Date(
    `${workflow.createdAt}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-700">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="rounded-xl bg-emerald-500/10 p-3">
            <WorkflowIcon
              size={24}
              className="text-emerald-400"
            />
          </div>

          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-white">
              {workflow.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {workflow.description}
            </p>
          </div>
        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
            isActive
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800 pt-4 text-xs text-slate-400">
        <span className="flex items-center gap-2">
          <Zap size={15} />
          {workflow.trigger}
        </span>

        <span className="flex items-center gap-2">
          <PlayCircle size={15} />
          {workflow.totalExecutions} executions
        </span>

        <span className="flex items-center gap-2">
          <CalendarDays size={15} />
          {formattedDate}
        </span>
      </div>
    </article>
  );
}
