import type { ReactNode } from "react";

import { AuthProvider } from "@contexts/AuthContext";

export default function FirebaseClientGroupLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
