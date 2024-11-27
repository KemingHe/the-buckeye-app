import { NavLinkButton } from "@components/NavLinkButton";
import ProtoClientActionButton from "@components/protoButton/ProtoClientActionButton";
import ProtoServerActionButton from "@components/protoButton/ProtoServerActionButton";
import {
  DEBUG_ROUTE,
  FB_ADMIN_HOME_ROUTE,
  FB_CLIENT_HOME_ROUTE,
  TECH_SUPPORT_ROUTE
} from "@constants/routeConstants";

export default function Homepage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <p>Learn NextJS Firebase Client + Admin</p>
      <NavLinkButton href={DEBUG_ROUTE} text="Debug" />
      <NavLinkButton href={TECH_SUPPORT_ROUTE} text="Tech Support" />
      <NavLinkButton
        href={FB_CLIENT_HOME_ROUTE}
        text="Firebase Client Demo (Home)"
      />
      <NavLinkButton
        href={FB_ADMIN_HOME_ROUTE}
        text="Firebase Admin Demo (Home)"
      />
      <ProtoClientActionButton />
      <ProtoServerActionButton />
    </div>
  );
}
