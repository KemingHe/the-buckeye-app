import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Footer from "@components/Footer";
import Navbar from "@components/navbar/Navbar";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-grow justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
