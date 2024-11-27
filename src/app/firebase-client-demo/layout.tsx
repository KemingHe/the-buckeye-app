import type { ReactNode } from "react";

import { AuthProvider } from "@contexts/AuthContext";

export default function FirebaseClientDemoLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
