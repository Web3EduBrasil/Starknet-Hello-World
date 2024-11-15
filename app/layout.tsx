"use client";

import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { WalletProvider } from "./providers/WalletConnectProvider";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <NavBar />
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
