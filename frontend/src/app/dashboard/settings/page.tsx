
import { Settings } from "lucide-react";
import PageHeading from "@/components/ui/page-heading";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeading
        title="Workspace Settings"
        description="Manage your workspace configuration."
      />

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
        <div className="flex items-center gap-3">
          <Settings className="text-emerald-400" size={24} />

          <h2 className="text-lg font-semibold">
            General Settings
          </h2>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          Workspace preferences and account settings will be
          available after authentication is implemented.
        </p>
      </div>
    </div>
  );
}
