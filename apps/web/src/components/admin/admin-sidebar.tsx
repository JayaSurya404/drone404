"use client";

import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  CloudSun,
  LayoutDashboard,
  Map,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Warehouse,
  Waypoints,
  X,
} from "lucide-react";

import { Logo } from "../shared/logo";

const navigation = [
  { label: "Dashboard", href: "/admin" as const, icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics" as const, icon: BarChart3 },
  { label: "Orders", href: "/admin/orders" as const, icon: ShoppingCart },
  { label: "Products", href: "/admin/products" as const, icon: Package },
  { label: "Inventory", href: "/admin/inventory" as const, icon: Warehouse },
  { label: "Deliveries", href: "/admin/deliveries" as const, icon: Waypoints },
  { label: "Fleet", href: "/admin/fleet" as const, icon: Boxes },
  { label: "Live Map", href: "/admin/live-map" as const, icon: Map },
  { label: "Weather", href: "/admin/weather" as const, icon: CloudSun },
  {
    label: "Emergency",
    href: "/admin/emergency" as const,
    icon: AlertTriangle,
  },
  { label: "Customers", href: "/admin/customers" as const, icon: Users },
  { label: "Settings", href: "/admin/settings" as const, icon: Settings },
];

interface AdminSidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({
  mobileOpen = false,
  onClose,
}: AdminSidebarProps) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/[0.07]",
          "bg-[#070a11]/95 backdrop-blur-2xl",
          "transition-transform duration-300 lg:static lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/[0.07] px-5">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-white/[0.06] hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Operations
          </p>

          <nav className="space-y-1" aria-label="Admin navigation">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-slate-500 transition-colors group-hover:text-cyan-300"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-white/[0.07] p-4">
          <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.035] p-4">
            <p className="text-xs font-medium text-cyan-300">SkyNav Control</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
              Fleet operations and autonomous delivery management.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}