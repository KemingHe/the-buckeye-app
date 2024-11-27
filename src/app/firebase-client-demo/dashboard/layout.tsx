import type { ReactNode } from "react";

import RequiresSignedInGuard from "@guards/RequiresSignedInGuard";

export default function DashboardLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <RequiresSignedInGuard>{children}</RequiresSignedInGuard>;
}
