"use client";
import { FC } from "react";

const Chat: FC = () => {
  return (
    <div className="h-full w-full bg-[url('/freepik.jpg')] bg-cover bg-bottom flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-slate-800 ">
          Connect with friends
        </h1>
        <button className="text-slate-950">find now </button>
      </div>
    </div>
  );
};

export default Chat;
