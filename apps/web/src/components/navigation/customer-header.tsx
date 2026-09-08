"use client";

import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const navigation: Array<{
  label: string;
  href: Route;
}> = [
  { label: "Shop", href: "/shop" },
  { label: "Track Delivery", href: "/orders" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

function HeaderIcon({
  href,
  label,
  children,
}: {
  href: Route;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-cyan-400/30 hover:bg-white/[0.08] hover:text-white"
    >
      {children}
    </Link>
  );
}

export function CustomerHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <HeaderIcon href="/shop" label="Search products">
            <Search className="h-4 w-4" />
          </HeaderIcon>

          <HeaderIcon href="/wishlist" label="Wishlist">
            <Heart className="h-4 w-4" />
          </HeaderIcon>

          <HeaderIcon href="/notifications" label="Notifications">
            <Bell className="h-4 w-4" />
          </HeaderIcon>

          <HeaderIcon href="/cart" label="Shopping cart">
            <ShoppingCart className="h-4 w-4" />
          </HeaderIcon>
        </div>
      </div>
    </header>
  );
}
