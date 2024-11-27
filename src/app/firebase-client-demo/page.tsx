import { NavLinkButton } from "@components/NavLinkButton";

import {
  FB_CLIENT_ADMIN_DASHBOARD_ROUTE,
  FB_CLIENT_BANNED_ROUTE,
  FB_CLIENT_DASHBOARD_ROUTE,
  FB_CLIENT_HOME_ROUTE,
  FB_CLIENT_SIGN_IN_ROUTE,
  FB_CLIENT_VERIFY_ROUTE
} from "@constants/routeConstants";

export default async function FirebaseClientDemoHomepage(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <p>Firebase Client Demo</p>
      <NavLinkButton href={FB_CLIENT_HOME_ROUTE} text="FBC Home" />
      <NavLinkButton href={FB_CLIENT_SIGN_IN_ROUTE} text="FBC Sign In" />
      <NavLinkButton href={FB_CLIENT_VERIFY_ROUTE} text="FBC Verify" />
      <NavLinkButton href={FB_CLIENT_DASHBOARD_ROUTE} text="FBC Dashboard" />
      <NavLinkButton
        href={FB_CLIENT_ADMIN_DASHBOARD_ROUTE}
        text="FBC Admin Dashboard"
      />
      <NavLinkButton href={FB_CLIENT_BANNED_ROUTE} text="FBC Banned" />
    </div>
  );
}
