
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Pencil,
  Trash2,
  Power,
  Workflow as WorkflowIcon,
} from "lucide-react";

import { useWorkflows } from "@/context/workflow-context";

type WorkflowDetailsProps = {
  id: string;
};

export default function WorkflowDetails({
  id,
}: WorkflowDetailsProps) {
  const router = useRouter();

  const {
    getWorkflowById,
    deleteWorkflow,
    toggleWorkflowStatus,
  } = useWorkflows();

  const [showDeleteDialog, setShowDeleteDialog] =
    useState(false);

  const workflow = getWorkflowById(id);

  if (!workflow) {
    return (
      <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-2xl font-bold">
          Workflow Not Found
        </h1>

        <p className="mt-3 text-slate-400">
          This workflow does not exist or was removed.
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

  const isActive = workflow.status === "active";

  const handleDelete = () => {
    const deleted = deleteWorkflow(id);

    if (deleted) {
      router.replace("/dashboard/workflows");
    }
  };

  const formattedDate = new Date(
    `${workflow.createdAt}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="mx-auto max-w-5xl">
      <Link
        href="/dashboard/workflows"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Workflows
      </Link>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <WorkflowIcon
                size={28}
                className="text-emerald-400"
              />

              <h1 className="break-words text-2xl font-bold md:text-3xl">
                {workflow.name}
              </h1>
            </div>

            <p className="max-w-2xl text-sm text-slate-400">
              {workflow.description}
            </p>
          </div>

          <span
            className={`rounded-full px-4 py-2 text-xs font-medium ${
              isActive
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <InfoCard label="Workflow ID" value={workflow.id} />
          <InfoCard label="Trigger Type" value={workflow.trigger} />
          <InfoCard
            label="Total Executions"
            value={workflow.totalExecutions.toString()}
          />
          <InfoCard label="Created On" value={formattedDate} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-800 pt-6">
          <Link
            href={`/dashboard/workflows/${id}/edit`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            <Pencil size={17} />
            Edit Workflow
          </Link>

          <button
            type="button"
            onClick={() => toggleWorkflowStatus(id)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            <Power size={17} />
            {isActive ? "Deactivate" : "Activate"}
          </button>

          <button
            type="button"
            onClick={() => setShowDeleteDialog(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 px-5 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10"
          >
            <Trash2 size={17} />
            Delete
          </button>
        </div>
      </div>

      {showDeleteDialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowDeleteDialog(false);
            }
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
            className="w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <Trash2 className="text-red-400" size={24} />
            </div>

            <h2
              id="delete-dialog-title"
              className="text-xl font-semibold text-white"
            >
              Delete Workflow?
            </h2>

            <p
              id="delete-dialog-description"
              className="mt-3 text-sm text-slate-400"
            >
              Are you sure you want to delete
              {" "}<strong className="text-white">{workflow.name}</strong>?
              This action cannot be undone during this session.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                autoFocus
                onClick={() => setShowDeleteDialog(false)}
                className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm text-white hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-500"
              >
                Delete Workflow
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-5">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-2 break-words font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
