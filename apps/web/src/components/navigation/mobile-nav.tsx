"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Home,
  Package,
  Radio,
  UserRound,
} from "lucide-react";

const items: Array<{
  label: string;
  href: Route;
  icon: typeof Home;
}> = [
  {
    label: "Shop",
    href: "/shop",
    icon: Home,
  },
  {
    label: "Orders",
    href: "/orders",
    icon: Package,
  },
  {
    label: "Track",
    href: "/orders",
    icon: Radio,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-2xl border border-white/10 bg-[#080d20]/90 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (item.href === "/orders" &&
              pathname.startsWith("/orders"));

          return (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`relative flex min-w-14 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[10px] font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/45 hover:text-white/80"
              }`}
            >
              {isActive ? (
                <span className="absolute -top-2 h-1 w-6 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
              ) : null}

              <Icon
                className={`h-5 w-5 transition ${
                  isActive ? "drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]" : ""
                }`}
              />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}