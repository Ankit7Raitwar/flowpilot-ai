
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import EditWorkflowForm from "@/components/workflows/edit-workflow-form";
import { useWorkflows } from "@/context/workflow-context";

export default function EditWorkflowPage() {
  const params = useParams<{ id: string }>();
  const { getWorkflowById } = useWorkflows();

  const id = params.id;
  const workflow = getWorkflowById(id);

  if (!workflow) {
    return (
      <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-2xl font-bold">
          Workflow Not Found
        </h1>

        <p className="mt-3 text-slate-400">
          We couldn't find the workflow you're trying to edit.
        </p>

        <Link
          href="/dashboard/workflows"
          className="mt-6 inline-block text-emerald-400"
        >
          Back to Workflows
        </Link>
      </div>
    );
  }

  return (
    <EditWorkflowForm
      key={workflow.id}
      workflow={workflow}
    />
  );
}
