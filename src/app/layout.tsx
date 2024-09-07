import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import StoreProvider from "@/app/StoreProvider";

import "../styles/globals.scss";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Surveys for Improving Relationships",
  description:
    "Take a personalized survey to better understand your relationships and personal characteristics. Discover new paths to harmony in your relationships.",
  keywords:
    "survey, relationships, psychology, personality, self-discovery, advice, partnership, relationship improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
