"use client";

import { type FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { type Firestore, getFirestore } from "firebase/firestore";

import firebaseConfig from "@lib/firebase/firebaseConfig";

// biome-ignore format: added alignment for clarity.
export interface FirebaseClientAppServices {
  fbApp  : FirebaseApp;
  fbAuth : Auth;
  fbStore: Firestore;
}

export function firebaseClientApp(): FirebaseClientAppServices {
  const fbApp: FirebaseApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);
  const fbAuth = getAuth(fbApp);
  const fbStore = getFirestore(fbApp);

  return { fbApp, fbAuth, fbStore };
}

export const { fbApp, fbAuth, fbStore }: FirebaseClientAppServices =
  firebaseClientApp();
