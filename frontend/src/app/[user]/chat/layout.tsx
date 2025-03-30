"use client";

import { useLayoutContext } from "@/context/inuser/Layout.user";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function UserChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Dimention } = useLayoutContext();
  const router = useRouter();
  const { user, chatuser } = useParams();
  const pn = usePathname();
  if (Dimention.width <= 768) {
    return (
      <>
        <div className="h-full w-full relative">
          {!(pn === `/${user}/chat/${chatuser}`) && (
            <header className="h-16 w-full z-[300] sticky top-0 border-b border-slate-300 bg-white px-3  p-2  flex items-center justify-around gap-4">
              <button className="min-w-10 h-10 flex items-center justify-center rounded-md bg-stone-200/60 hover:shadow transition-all duration-200 ease-in-out active:scale-90">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </span>
              </button>
              <div className="flex items-center gap-2 w-full px-4 py-2 h-11 rounded-3xl bg-black/4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="search..."
                  className="w-[90%] outline-0"
                />
              </div>
            </header>
          )}
          <main className="h-screen flex relative">
            {false && (
              <div className="h-full w-full absolute  bg-white grid grid-cols-1 gap-1 px-2 py-3">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      router.push(`/${user}/chat/${i}`);
                    }}
                    className="w-full h-16 bg-stone-50 rounded-md flex items-center px-4 gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-stone-200 animate-pulse"></div>
                    <div className="grid gap-1">
                      <div className="h-4 w-56 rounded-3xl bg-stone-200 animate-pulse"></div>
                      <div className="h-4 w-24 rounded-3xl bg-stone-200 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {children}
          </main>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-screen w-full relative grid  lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.6fr_1.4fr] overflow-hidden">
        {/* Sidebar */}
        <aside className="h-full flex flex-col overflow-y-auto bg-white border-r border-slate-300">
          {/* Header */}
          <header className="min-h-16 w-full sticky top-0 z-[300] border-b border-slate-300 bg-white px-3 p-2 flex items-center justify-between gap-4">
            {/* Menu Button */}
            <button className="w-10 min-w-[2.5rem] h-10 flex items-center justify-center rounded-md bg-stone-200/60 hover:shadow transition-all duration-200 ease-in-out active:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>

            {/* Search Bar */}
            <div className="flex items-center gap-2 w-full px-4 py-2 h-11 rounded-3xl bg-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input type="text" placeholder="Search..." className="w-full outline-none bg-transparent" />
            </div>
          </header>

          {/* Chat List */}
          <div className="flex-1 px-2 py-3">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                onClick={() => router.push(`/${user}/chat/${i}`)}
                className="w-full h-16 bg-stone-50 rounded-md flex items-center px-4 gap-4 cursor-pointer hover:bg-stone-100 transition"
              >
                <div className="h-10 w-10 rounded-full bg-stone-200 animate-pulse"></div>
                <div className="grid gap-1">
                  <div className="h-4 w-56 rounded-3xl bg-stone-200 animate-pulse"></div>
                  <div className="h-4 w-24 rounded-3xl bg-stone-200 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="h-full w-full bg-white ">{children}</main>
      </div>
    </>
  );
}
