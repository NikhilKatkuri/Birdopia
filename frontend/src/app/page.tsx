"use client";
import { FC } from "react";
import "./globals.css";
import RainEffect from "@/component/reusable/RainEffect";
import LoginFormBasic from "@/component/nonResuable/LoginFrom.basic";
const Page: FC = () => {
  return (
    <main className="relative min-h-screen h-auto  bg-[radial-gradient(#1D2B41_0%,#1D2B41_0%,#020509_100%)] ">
      <RainEffect />
      <div className="z-[200] relative overflow-hidden no-scroll-bar text-slate-400  py-8 min-h-screen    max-lg:gap-12  grid grid-cols-1 xl:grid-cols-[0.6fr_0.4fr]   px-2 sm:px-6 md:px-8 md:gap-4">
        <div className="h-full w-full  flex justify-center items-center">
          <div className="lg:flex">
            <div className="flex-auto">
              <h1 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl sm:text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[3.8rem] sm:leading-[4.75rem] lg:text-left">
                Seamless Messaging, Zero Distractions
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-[2rem] sm:text-2xl sm:leading-[2.5rem] tracking-tight sm:text-center lg:text-left">
                Stay focused and connected with a clutter-free messaging
                experience designed for meaningful conversations.
              </p>
            </div>
          </div>
        </div>
        <LoginFormBasic />
      </div>
    </main>
  );
};

export default Page;
