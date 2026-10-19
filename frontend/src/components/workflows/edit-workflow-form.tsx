
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Save } from "lucide-react";

import {
  createWorkflowSchema,
  type CreateWorkflowInput,
  type CreateWorkflowValues,
} from "@/schemas/workflow-schema";

import { useWorkflows } from "@/context/workflow-context";
import type { Workflow } from "@/types/workflow";

type EditWorkflowFormProps = {
  workflow: Workflow;
};

export default function EditWorkflowForm({
  workflow,
}: EditWorkflowFormProps) {
  const router = useRouter();
  const { updateWorkflow } = useWorkflows();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateWorkflowInput, unknown, CreateWorkflowValues>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: workflow.name,
      description: workflow.description,
      trigger: workflow.trigger as CreateWorkflowInput["trigger"],
      status: workflow.status,
    },
    mode: "onBlur",
  });

  const onSubmit = (data: CreateWorkflowValues) => {
    const updated = updateWorkflow(workflow.id, data);

    if (updated) {
      router.push(`/dashboard/workflows/${workflow.id}`);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href={`/dashboard/workflows/${workflow.id}`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Details
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Edit Workflow
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Update your workflow information and settings.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8"
      >
        <div>
          <label
            htmlFor="edit-name"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Workflow Name *
          </label>

          <input
            id="edit-name"
            type="text"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500"
          />

          {errors.name && (
            <p role="alert" className="mt-2 text-xs text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="edit-description"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Description *
          </label>

          <textarea
            id="edit-description"
            rows={4}
            {...register("description")}
            aria-invalid={Boolean(errors.description)}
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500"
          />

          {errors.description && (
            <p role="alert" className="mt-2 text-xs text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="edit-trigger"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Trigger Type
            </label>

            <select
              id="edit-trigger"
              {...register("trigger")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500"
            >
              <option value="Webhook">Webhook</option>
              <option value="Schedule">Schedule</option>
              <option value="Manual">Manual</option>
            </select>

            {errors.trigger && (
              <p role="alert" className="mt-2 text-xs text-red-400">
                {errors.trigger.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="edit-status"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Status
            </label>

            <select
              id="edit-status"
              {...register("status")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            {errors.status && (
              <p role="alert" className="mt-2 text-xs text-red-400">
                {errors.status.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-3 border-t border-slate-800 pt-6">
          <Link
            href={`/dashboard/workflows/${workflow.id}`}
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm text-slate-300 hover:bg-slate-800"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
          >
            <Save size={18} />
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
