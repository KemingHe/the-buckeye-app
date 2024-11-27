"use client";

import type { AuthError, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import {
  type Context,
  type ReactNode,
  createContext,
  useContext,
  useMemo
} from "react";
import { useAuthState } from "react-firehooks/auth";

import ErrorCard from "@components/ErrorCard";
import LoadingCard from "@components/LoadingCard";

import { fbAuth } from "@lib/firebase/firebaseClientApp";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface AuthContextReturnProps {
  // NextJS client router and current pathname.
  clientRouter      : ReturnType<typeof useRouter>;
  pathname          : string;

  // Firebase Auth state.
  user              : User | undefined;
  authContextLoading: boolean;
  authContextError  : AuthError | undefined;
}

// -----------------------------------------------------------------------------
const AuthContext: Context<AuthContextReturnProps | undefined> = createContext<
  AuthContextReturnProps | undefined
>(undefined);

// -----------------------------------------------------------------------------
export function AuthProvider({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const clientRouter = useRouter();
  const pathname = usePathname();
  const [user, loadingUser, errorUser] = useAuthState(fbAuth);
  const authContextValue = useMemo(
    () =>
      (
      // biome-ignore format: added alignment for clarity.
      {
        clientRouter,
        pathname,
        user              : user?.uid ? user: undefined,
        authContextLoading: loadingUser,
        authContextError  : errorUser
    }),
    [clientRouter, pathname, user, loadingUser, errorUser]
  );

  if (loadingUser) return <LoadingCard message="Loading..." />;
  if (errorUser) return <ErrorCard message="Error loading user info." />;
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// -----------------------------------------------------------------------------
export function useAuthContext(): AuthContextReturnProps {
  const context: AuthContextReturnProps | undefined = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext returns "undefined". Make sure the calling component is a children of <AuthProvider>.'
    );
  }
  return context;
}
