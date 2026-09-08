"use client";

import { Bell, Menu, Search } from "lucide-react";

interface AdminHeaderProps {
  onMenuClick?: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#05070d]/75 px-4 backdrop-blur-2xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 hover:bg-white/[0.08] hover:text-white lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={19} />
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 sm:flex">
          <Search size={16} className="text-slate-600" />
          <input
            type="search"
            placeholder="Search operations..."
            className="h-9 w-48 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
            aria-label="Search operations"
          />
        </div>

        <p className="text-sm font-medium text-slate-300 sm:hidden">
          Operations
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative inline-flex size-10 items-center justify-center rounded-xl text-slate-400 hover:bg-white/[0.06] hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(66,217,255,0.8)]" />
        </button>

        <div className="ml-1 flex items-center gap-2 border-l border-white/[0.07] pl-3">
          <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-xs font-semibold text-cyan-300">
            DA
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-xs font-medium text-white">Drone Admin</p>
            <p className="text-[10px] text-slate-600">Operations</p>
          </div>
        </div>
      </div>
    </header>
  );
}