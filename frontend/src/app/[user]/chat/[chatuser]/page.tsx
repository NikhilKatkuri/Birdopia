"use client";
import { useLayoutContext } from "@/context/inuser/Layout.user";
import { useRouter } from "next/navigation";
import { FC } from "react";

const ChatUI: FC = () => {
  const router = useRouter();
  const { Dimention } = useLayoutContext();
  if (Dimention.width <= 768) {
    return (
      <div className="h-full relative w-full bg-stone-50">
        <main className="h-[calc(100%-5rem)] w-full">
          <header className="stricky top-0 h-16 w-full bg-white border-b border-gray-300 flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  router.back();
                }}
                className="h-10 w-10 flex items-center justify-center bg-black/5 rounded-md active:scale-95"
              >
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
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
                <div className="grid -space-y-0.5 ">
                  <h2 className="text-sm font-semibold">Sharayna</h2>
                  <p className="text-xs">
                    <span className="font-medium text-green-500">online</span>
                  </p>
                </div>
              </div>
            </div>
          </header>
        </main>
        <footer className="fixed bottom-4 left-0 right-0 flex justify-center">
          <div className="w-[94%] grid grid-cols-[1.8fr_.2fr] gap-2 place-items-center">
            <div className="flex items-center px-4 h-12 w-full rounded-full bg-white shadow">
              <input
                type="text"
                className="w-full outline-0"
                placeholder="send message"
              />
            </div>
            <button className="h-10 w-10 scale-[1.1] rounded-full bg-black flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    );
  }
  return (
    <div className="h-screen w-full bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 h-16 w-full bg-white border-b border-gray-300 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="h-10 w-10 flex items-center justify-center hover:bg-black/5 rounded-md active:scale-95"
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
            <div className="grid">
              <h2 className="text-sm font-semibold">Sharayna</h2>
              <p className="text-xs font-medium text-green-500">online</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages (Placeholder) */}
      <main className="flex-1 w-full overflow-y-auto p-4">
        {/* Messages will go here */}
      </main>

      {/* Footer (Message Input) */}
      <footer className="my-4 flex justify-center ">
        <div className="max-w-[768px] w-full mx-auto bg-white shadow h-28 rounded-3xl p-4">
          <div className="w-full">
            <textarea
              name=""
              id=""
              className="w-full resize-none outline-0"
              placeholder="send message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="h-8 w-8 rounded-full border flex items-center justify-center border-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <button className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatUI;
