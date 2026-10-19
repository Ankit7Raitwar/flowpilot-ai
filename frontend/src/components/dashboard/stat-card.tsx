
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between">
        <p className="text-sm text-slate-400">{title}</p>

        <div className="rounded-lg bg-emerald-500/10 p-3">
          <Icon size={20} className="text-emerald-400" />
        </div>
      </div>

      <h3 className="mt-4 text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}
