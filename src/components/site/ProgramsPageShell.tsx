import type { ReactNode } from "react";

export function ProgramsPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="programs-page flex min-h-full">
      <div className="programs-page-gutter hidden lg:block" aria-hidden />
      <div className="flex-1 min-w-0">{children}</div>
      <div className="programs-page-gutter hidden lg:block" aria-hidden />
    </div>
  );
}
