import type { ReactNode } from "react";

import { CustomerHeader } from "@/components/navigation/customer-header";
import { MobileNav } from "@/components/navigation/mobile-nav";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="app-shell">
      <CustomerHeader />

      <main className="pb-20 sm:pb-0">{children}</main>

      <MobileNav />
    </div>
  );
}