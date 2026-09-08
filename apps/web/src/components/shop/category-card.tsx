import type { Route } from "next";
import Link from "next/link";
import { ArrowUpRight, Box, Coffee, HeartPulse, Sparkles } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  href: Route;
  icon: "box" | "coffee" | "health" | "sparkles";
}

const icons = {
  box: Box,
  coffee: Coffee,
  health: HeartPulse,
  sparkles: Sparkles,
};

export function CategoryCard({
  name,
  description,
  href,
  icon,
}: CategoryCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/[0.06] blur-2xl transition group-hover:bg-cyan-400/[0.1]" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-300">
          <Icon className="h-5 w-5" />
        </div>

        <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
      </div>

      <h3 className="relative mt-5 text-sm font-semibold text-white">
        {name}
      </h3>

      <p className="relative mt-1.5 text-xs leading-5 text-white/45">
        {description}
      </p>
    </Link>
  );
}
