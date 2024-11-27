"use client";

import { NavLinkButton } from "@components/NavLinkButton";
import ProtoSignInCard from "@components/signInCard/ProtoSignInCard";

import signInClientAction from "@components/signInCard/signInClientAction";

export default function SignInPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <NavLinkButton href="/" text="Home" />
      <p>Auth Sign In/Up Page</p>
      <ProtoSignInCard signInAction={signInClientAction} />
    </div>
  );
}
