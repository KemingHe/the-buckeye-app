"use client";

import { type ReactNode, useEffect } from "react";

import LoadingCard from "@components/LoadingCard";

import { FB_CLIENT_DASHBOARD_ROUTE } from "@constants/routeConstants";
import {
  type AuthContextReturnProps,
  useAuthContext
} from "@contexts/AuthContext";
import { type UseLoadingReturnProps, useLoading } from "@hooks/useLoading";

// -----------------------------------------------------------------------------
export default function RedirectIfSignedInGuard({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const {
    clientRouter,
    pathname,
    user,
    authContextLoading,
    authContextError
  }: AuthContextReturnProps = useAuthContext();

  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();

  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (
      !authContextLoading &&
      !authContextError &&
      !isLoading &&
      // Check if user is signed in (user object is defined).
      user
    ) {
      startLoading();
      if (pathname !== FB_CLIENT_DASHBOARD_ROUTE) {
        clientRouter.push(FB_CLIENT_DASHBOARD_ROUTE);
      }
    }
  }, [
    authContextLoading,
    authContextError,
    isLoading,
    user,
    pathname
    // Include pathname to re-evaluate redirect logic on route change.
    // Exclude clientRouter to prevent unnecessary re-renders and infinite loops.
  ]);

  useEffect(() => {
    // Use [empty dep list and return] to cleanup on component unmount.
    return () => {
      stopLoading();
    };
  }, []);

  // ---------------------------------------------------------------------------
  if (authContextLoading || authContextError || isLoading || user) {
    return <LoadingCard message="Verifying..." />;
  }

  return <>{children}</>;
}