"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function UserChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useParams();
  const router = useRouter();
  const [openDialogUsers, setopenDialogUsers] = useState(true);
  return (
    <>
      <div className="h-full w-full bg-gray-50">
        <header className="h-16 w-full border-b border-gray-300 flex items-center  bg-white ">
          <div className={`flex items-center justify-between ${openDialogUsers?"w-80":"w-16"} transition-all duration-300 ease-in-out  pl-4`}>
            <button
              onClick={() => setopenDialogUsers((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-md active:scale-90 transition-all duration-200 ease-in-out"
            >
              <div
                className={`transform transition-transform ${
                  openDialogUsers ? "rotate-0" : "rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-gray-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span>S</span>
            </div>
            <div className="ml-4">
              <strong className="text-gray-800">Sharanya</strong>
              <p className="text-gray-500 text-xs">Online</p>
            </div>
          </div>
        </header>

        <div className="flex w-full h-[calc(100%-4rem)] overflow-hidden">
          {/* Sidebar */}
          <aside
            className={`h-full bg-white   border-r border-gray-200 transition-all duration-300 ease-in-out ${
              openDialogUsers ? "w-80 px-2" : "w-0 overflow-hidden"
            }`}
          >
            {/* Users List */}
            <div
              className={`h-full overflow-y-auto space-y-4 py-4 ${
                !openDialogUsers && "opacity-0"
              }`}
            >
              {[
                "Sharanya",
                "Cherry",
                "Nikhil",
                "Aryan",
                "Sanya",
                "Rohan",
                "Meera",
                "Akash",
                "Pooja",
                "Vikram",
                "Aisha",
                "Rahul",
                "Neha",
                "Kabir",
                "Sakshi",
                "Arjun",
                "Tanya",
                "Sameer",
                "Kriti",
                "Dev",
              ].map((t, i) => (
                <div
                  key={i}
                  onClick={() => {
                    router.push(`/${user}/chat/${t}`);
                  }}
                  className="h-16 w-full rounded-lg bg-white flex items-center px-4 hover:bg-gray-100 transition-all"
                >
                  {/* Profile Picture */}
                  <div className="relative w-12">
                    <Image
                      src="/cherry.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                      priority
                    />
                    <div className="h-3 w-3 rounded-full bg-green-500 absolute right-0 bottom-0 border border-white"></div>
                  </div>

                  {/* User Details */}
                  <div className="flex flex-col ml-4 w-[70%]">
                    <strong className="text-gray-800 text-sm">{t}</strong>
                    <div className="grid grid-cols-[0.6fr_0.4fr]">
                      <span className="text-gray-500 text-xs line-clamp-1 overflow-hidden text-ellipsis">
                        Hi! This is a long message that will be clamped to one
                        line...
                      </span>
                      <span className="text-gray-400 text-xs text-right">
                        10 min ago
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Chat Window */}
          <div
            className={`h-full overflow-hidden transition-all duration-300 ${
              openDialogUsers ? "w-[calc(100%-20rem)]" : "w-full"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
