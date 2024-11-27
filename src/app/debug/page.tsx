"use client";

import ErrorCard from "@components/ErrorCard";
import LoadingCard from "@components/LoadingCard";
import { NavLinkButton } from "@components/NavLinkButton";
import ProtoSignInCard from "@components/signInCard/ProtoSignInCard";
import ProtoSignUpCard from "@components/signUpCard/ProtoSignUpCard";

export default function DebugPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 m-2">
      <NavLinkButton href="/" text="Home" />
      <LoadingCard message="This is a loading message." />
      <ErrorCard message="This is an error message." />
      <ProtoSignInCard signInAction={async (formData: FormData) => {}} />
      <ProtoSignUpCard signUpAction={async (formData: FormData) => {}} />
    </div>
  );
}
