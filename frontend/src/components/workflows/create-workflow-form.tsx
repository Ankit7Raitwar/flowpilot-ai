
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

export default function CreateWorkflowForm() {
  const router = useRouter();
  const { addWorkflow } = useWorkflows();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateWorkflowInput, unknown, CreateWorkflowValues>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
      trigger: "Webhook",
      status: "inactive",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: CreateWorkflowValues) => {
    addWorkflow(data);
    router.push("/dashboard/workflows");
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/dashboard/workflows"
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Workflows
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Create New Workflow
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Configure the basic details of your automation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8"
      >
        {/* Workflow Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Workflow Name *
          </label>

          <input
            id="name"
            type="text"
            placeholder="e.g. AI Lead Qualification"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
          />

          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-xs text-red-400"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Workflow Description */}
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Description *
          </label>

          <textarea
            id="description"
            rows={4}
            placeholder="Describe what this workflow will automate..."
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description ? "description-error" : undefined
            }
            {...register("description")}
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
          />

          {errors.description && (
            <p
              id="description-error"
              role="alert"
              className="mt-2 text-xs text-red-400"
            >
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Trigger Type */}
          <div>
            <label
              htmlFor="trigger"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Trigger Type *
            </label>

            <select
              id="trigger"
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

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Status *
            </label>

            <select
              id="status"
              {...register("status")}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-emerald-500"
            >
              <option value="inactive">Inactive</option>
              <option value="active">Active</option>
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
            href="/dashboard/workflows"
            className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={18} />
            {isSubmitting ? "Creating..." : "Create Workflow"}
          </button>
        </div>
      </form>

      <p className="mt-4 text-xs text-slate-500">
        Demo mode: workflows are stored temporarily in React
        memory and will reset after a page refresh.
      </p>
    </div>
  );
}
