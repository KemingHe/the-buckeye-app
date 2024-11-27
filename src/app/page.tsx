import { NavLinkButton } from "@components/NavLinkButton";

import { AUTH_SIGNIN_ROUTE } from "@constants/routeConstants";

export default function Homepage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <p>The Buckeye App</p>
      <NavLinkButton
        href={AUTH_SIGNIN_ROUTE}
        text="Ohio State Student Sign In/Up"
      />
    </div>
  );
}
