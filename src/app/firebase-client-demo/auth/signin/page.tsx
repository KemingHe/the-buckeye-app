"use client";

import { signInClientAction } from "./actions";

import { NavLinkButton } from "@components/NavLinkButton";
import ProtoSignInCard from "@components/signInCard/ProtoSignInCard";

import { FB_CLIENT_VERIFY_ROUTE } from "@constants/routeConstants";
import { useAuthContext } from "@contexts/AuthContext";
import { fbAuth } from "@lib/firebase/firebaseClientApp";

export default function SignInPage(): JSX.Element {
  const { user, authContextLoading, authContextError } = useAuthContext();
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-10">
      <p>Firebase Client Auth Service is {fbAuth ? "defined" : "undefined"}.</p>
      <p>User is {user ? "defined" : "undefined"}.</p>

      <ProtoSignInCard signInAction={signInClientAction} />
      <NavLinkButton href={FB_CLIENT_VERIFY_ROUTE} text="To Client Verify" />
    </div>
  );
}
