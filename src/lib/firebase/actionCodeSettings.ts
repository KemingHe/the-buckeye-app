"use client";

import type { ActionCodeSettings } from "firebase/auth";

import { FB_CLIENT_VERIFY_ROUTE } from "@constants/routeConstants";

export const FB_CLIENT_LOCAL_STORAGE_KEY: string = "firebaseClientAuthEmail";

// Firebase client auth (web app only) action code settings.
export const actionCodeSettings: ActionCodeSettings = {
  url: `${window.location.origin}${FB_CLIENT_VERIFY_ROUTE}`,
  handleCodeInApp: true
};
