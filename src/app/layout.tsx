import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@components/Footer";
import Navbar from "@components/navbar/Navbar";

import googleAnalyticsMeasurementId from "@lib/firebase/googleAnalyticsMeasurementId";

// -----------------------------------------------------------------------------
import "./globals.css";

// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "NextJS Fireabase Admin",
  description:
    "Template repo demo-ing Firebase client and admin auth ntegration with NextJS 14+."
};

// -----------------------------------------------------------------------------
export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="BuckApp" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-grow justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={googleAnalyticsMeasurementId} />
    </html>
  );
}
