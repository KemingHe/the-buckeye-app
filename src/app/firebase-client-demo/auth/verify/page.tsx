"use client";

import { NavLinkButton } from "@components/NavLinkButton";
import VerifyAndSpinner from "@components/verify/VerifyAndSpinner";

import { FB_CLIENT_SIGN_IN_ROUTE } from "@constants/routeConstants";
import { useAuthContext } from "@contexts/AuthContext";
import { fbAuth } from "@lib/firebase/firebaseClientApp";

export default function VerifyPage(): JSX.Element {
  const { user, authContextLoading, authContextError } = useAuthContext();
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-10">
      <p>Firebase Client Auth | Verify Page</p>
      <p>Firebase Client Auth Service is {fbAuth ? "defined" : "undefined"}.</p>
      <p>User is {user ? "defined" : "undefined"}.</p>
      <NavLinkButton href={FB_CLIENT_SIGN_IN_ROUTE} text="To Client Sign In" />
      <VerifyAndSpinner />
    </div>
  );
}
