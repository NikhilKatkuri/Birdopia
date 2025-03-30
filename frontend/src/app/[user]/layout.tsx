"use client";
import { useEffect } from "react";
import { LayoutContextProvider } from "@/context/inuser/Layout.user";
import { useUserAuthDetails } from "@/context/handlers/info.user";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { UserName } = useUserAuthDetails();

  useEffect(() => {
    document.title = UserName ? `${UserName}` : "Birdopia!"; // Fallback title
  }, [UserName]);

  return <LayoutContextProvider>{children}</LayoutContextProvider>;
}
