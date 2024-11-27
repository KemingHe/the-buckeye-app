"use client";

import { type FirebaseApp, getApps, initializeApp } from "firebase/app";
import { type Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import {
  type Firestore,
  connectFirestoreEmulator,
  getFirestore
} from "firebase/firestore";

import firebaseConfig from "@lib/firebase/firebaseConfig";

// biome-ignore format: added alignment for clarity.
export interface FirebaseClientAppServices {
  fbApp  : FirebaseApp;
  fbAuth : Auth;
  fbStore: Firestore;
}

export function firebaseClientApp(): FirebaseClientAppServices {
  let fbApp: FirebaseApp;
  const fbAppList: FirebaseApp[] | undefined = getApps();

  if (fbAppList && fbAppList.length > 0 && fbAppList[0]) {
    fbApp = fbAppList[0];
  } else {
    fbApp = initializeApp(firebaseConfig);
  }

  const fbAuth = getAuth(fbApp);
  const fbStore = getFirestore(fbApp);

  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    connectAuthEmulator(fbAuth, "http://localhost:9099");
    connectFirestoreEmulator(fbStore, "localhost", 8080);
    console.log(
      "Successfully connected to Firebase Emulators for testing on localhost."
    );
  }

  return { fbApp, fbAuth, fbStore };
}

export const { fbApp, fbAuth, fbStore }: FirebaseClientAppServices =
  firebaseClientApp();
