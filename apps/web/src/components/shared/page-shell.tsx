import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className={`container py-8 sm:py-10 lg:py-12 ${className}`}>
      {children}
    </main>
  );
}
