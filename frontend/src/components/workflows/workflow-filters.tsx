
import { Search } from "lucide-react";

import type { WorkflowFilter } from "@/types/workflow";

type WorkflowFiltersProps = {
  search: string;
  selectedFilter: WorkflowFilter;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: WorkflowFilter) => void;
};

const filterOptions: {
  label: string;
  value: WorkflowFilter;
}[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export default function WorkflowFilters({
  search,
  selectedFilter,
  onSearchChange,
  onFilterChange,
}: WorkflowFiltersProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="search"
          value={search}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search workflows..."
          aria-label="Search workflows"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
        />
      </div>

      <div
        aria-label="Filter workflows by status"
        className="flex flex-wrap gap-2"
      >
        {filterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onFilterChange(option.value)}
            aria-pressed={selectedFilter === option.value}
            className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              selectedFilter === option.value
                ? "bg-emerald-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
