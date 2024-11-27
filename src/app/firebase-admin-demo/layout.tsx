import type { ReactNode } from "react";

export default function Layout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <div>{children}</div>;
}
