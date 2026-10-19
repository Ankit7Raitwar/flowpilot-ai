
"use client";

import { Bell, Menu, CircleUserRound } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
  isMenuOpen: boolean;
};

export default function Header({
  onMenuClick,
  isMenuOpen,
}: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-5 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          aria-controls="dashboard-sidebar"
          aria-expanded={isMenuOpen}
          className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="font-semibold text-white">
            My Workspace
          </h2>
          <p className="text-xs text-slate-400">
            Manage your automations
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span
          aria-label="Notifications coming soon"
          title="Notifications coming soon"
          className="text-slate-400"
        >
          <Bell size={20} />
        </span>

        <CircleUserRound
          size={32}
          className="text-emerald-400"
          aria-label="Demo user"
        />
      </div>
    </header>
  );
}
