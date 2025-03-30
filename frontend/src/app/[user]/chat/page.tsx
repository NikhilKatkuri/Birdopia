"use client";
import { FC } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLayoutContext } from "@/context/inuser/Layout.user";
const Page: FC = () => {
  const router = useRouter();
  const { user } = useParams();
  const { Dimention } = useLayoutContext();
  if (Dimention.width <= 768) {
    return (
      <>
        <div className="h-full w-full  bg-white grid grid-cols-1 gap-1 px-2 py-3">
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
      </>
    );
  }
  return (
    <>
      <div className="h-full w-full  bg-white grid grid-cols-1 gap-1 px-2 py-3"></div>
    </>
  );
};

export default Page;
