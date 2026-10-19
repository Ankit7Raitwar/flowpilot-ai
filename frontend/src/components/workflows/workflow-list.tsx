
"use client";

import { useState } from "react";
import { SearchX } from "lucide-react";

import WorkflowCard from "./workflow-card";
import WorkflowFilters from "./workflow-filters";

import { mockWorkflows } from "@/data/mock-workflows";

import type { WorkflowFilter } from "@/types/workflow";

export default function WorkflowList() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] =
    useState<WorkflowFilter>("all");

  // Filter workflows by name, description and status.
  const filteredWorkflows = mockWorkflows.filter((workflow) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      workflow.name.toLowerCase().includes(query) ||
      workflow.description.toLowerCase().includes(query);

    const matchesStatus =
      selectedFilter === "all" ||
      workflow.status === selectedFilter;

    return matchesSearch && matchesStatus;
  });

  const totalWorkflows = mockWorkflows.length;

  const activeWorkflows = mockWorkflows.filter(
    (workflow) => workflow.status === "active"
  ).length;

  return (
    <div>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Total Workflows
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {totalWorkflows}
          </h2>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Active Workflows
          </p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-400">
            {activeWorkflows}
          </h2>
        </div>
      </div>

      <WorkflowFilters
        search={search}
        selectedFilter={selectedFilter}
        onSearchChange={setSearch}
        onFilterChange={setSelectedFilter}
      />

      <div aria-live="polite" className="mb-4 text-sm text-slate-400">
        Showing {filteredWorkflows.length} of {totalWorkflows} workflows
      </div>

      {filteredWorkflows.length > 0 ? (
        <div className="grid gap-4">
          {filteredWorkflows.map((workflow) => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
          <SearchX
            size={42}
            className="mx-auto text-slate-500"
          />

          <h3 className="mt-4 text-lg font-semibold">
            No workflows found
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Try a different search or status filter.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedFilter("all");
            }}
            className="mt-5 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
