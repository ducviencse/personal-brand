import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./top-nav";
import { AppRoute } from "next/dist/build/swc/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony's home",
  description: "About tony",
};

export default function RootLayout({
  children, params
}: any) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <div className="max-w-3xl mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
