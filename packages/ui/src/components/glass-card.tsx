import type { HTMLAttributes } from "react";

import { cn } from "../utils/cn";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong" | "glow";
}

export function GlassCard({
  className,
  variant = "default",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border backdrop-blur-2xl transition-colors duration-200",
        variant === "default" &&
          "border-white/[0.08] bg-white/[0.035] shadow-[0_18px_50px_rgba(0,0,0,0.22)]",
        variant === "strong" &&
          "border-white/[0.12] bg-[#121a2a]/90 shadow-[0_18px_50px_rgba(0,0,0,0.28)]",
        variant === "glow" &&
          "border-cyan-300/15 bg-cyan-300/[0.045] shadow-[0_0_45px_rgba(66,217,255,0.08)]",
        className,
      )}
      {...props}
    />
  );
}