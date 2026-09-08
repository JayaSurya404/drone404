import type { ReactNode } from "react";

type StatusVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

interface StatusBadgeProps {
  children: ReactNode;
  variant?: StatusVariant;
}

const variants: Record<StatusVariant, string> = {
  success:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  warning:
    "border-amber-400/20 bg-amber-400/10 text-amber-300",
  danger:
    "border-red-400/20 bg-red-400/10 text-red-300",
  info:
    "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  neutral:
    "border-white/10 bg-white/[0.05] text-white/60",
};

export function StatusBadge({
  children,
  variant = "neutral",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
