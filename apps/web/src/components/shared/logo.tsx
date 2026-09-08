import Link from "next/link";

import { cn } from "@drone404/ui";

interface LogoProps {
  href?: "/";
  compact?: boolean;
  className?: string;
}

export function Logo({
  href = "/",
  compact = false,
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Drone404 home"
    >
      <span
        className={cn(
          "relative grid size-9 shrink-0 place-items-center rounded-xl",
          "border border-cyan-300/20 bg-cyan-300/[0.08]",
          "shadow-[0_0_28px_rgba(66,217,255,0.12)]",
          "transition-transform duration-200 group-hover:scale-105",
        )}
      >
        <span className="absolute size-4 rounded-full border border-cyan-300/60" />
        <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(66,217,255,0.8)]" />
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-base font-semibold tracking-tight text-white">
            Drone<span className="text-cyan-300">404</span>
          </span>

          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-slate-500">
            SkyNav
          </span>
        </span>
      )}
    </Link>
  );
}