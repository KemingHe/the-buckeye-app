"use client";

import { SignOutButton } from "@components/signOutButton/SignOutButton";
import signOutClientAction from "@components/signOutButton/signOutClientAction";

export default function DashboardPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <p>Firebase Client Demo | Dashboard Page</p>
      <SignOutButton signOutAction={signOutClientAction} />
    </div>
  );
}
