import type { ButtonHTMLAttributes } from "react";

import { cn } from "../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60",
        "disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-11 px-4 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        variant === "primary" &&
          "bg-cyan-300 text-[#041017] shadow-[0_0_30px_rgba(66,217,255,0.18)] hover:bg-cyan-200",
        variant === "secondary" &&
          "border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.1]",
        variant === "ghost" &&
          "text-slate-300 hover:bg-white/[0.06] hover:text-white",
        variant === "danger" &&
          "bg-rose-400 text-[#19060b] hover:bg-rose-300",
        className,
      )}
      {...props}
    />
  );
}