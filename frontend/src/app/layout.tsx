import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserInfoContextProvider } from "@/context/handlers/info.uploads";
import { UserAuthDetailsProvider } from "@/context/handlers/info.user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "Experience seamless, distraction-free messaging for meaningful conversations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Birdopia!</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserAuthDetailsProvider>
          <UserInfoContextProvider>{children}</UserInfoContextProvider>
        </UserAuthDetailsProvider>
      </body>
    </html>
  );
}
