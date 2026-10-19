
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Workflow } from "lucide-react";
import { dashboardNavigation } from "@/lib/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        id="dashboard-sidebar"
        className={`
          fixed inset-y-0 left-0 z-50 flex w-64
          flex-col border-r border-slate-800
          bg-slate-900 transition-transform duration-200
          lg:static lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <Workflow className="text-emerald-400" size={28} />
            <span className="text-xl font-bold text-white">
              FlowPilot AI
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-slate-400 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        <nav aria-label="Dashboard" className="flex-1 space-y-2 p-4">
          {dashboardNavigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === item.href
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex items-center gap-3 rounded-lg
                  px-4 py-3 text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-800 p-5">
          <p className="text-xs text-slate-500">
            FlowPilot AI · Development
          </p>
        </div>
      </aside>
    </>
  );
}
