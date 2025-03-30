"use client";
import { useEffect } from "react";
import { LayoutContextProvider } from "@/context/inuser/Layout.user";
import { useUserAuthDetails } from "@/context/handlers/info.user";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userNode } = useUserAuthDetails();

  useEffect(() => {
    document.title = userNode ? `${userNode.name}` : "Birdopia!"; // Fallback title
  }, [userNode]);

  return <LayoutContextProvider>{children}</LayoutContextProvider>;
}
